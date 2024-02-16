

// document.title = 'VCF basic info';

$(document).ready(function () {

    console.log("hello talha.."); 

    // $('#community').select2();
    // $('.select2').css({'border': '2px solid #898AEE', 'border-radius': '5px'});
    // $('#para_list').prop('disabled', true);

    $('.date').datepicker({ dateFormat: "yy-mm-dd" });

    $.ajax({
        url: "/get_all_para_name",
        type: "GET",
        data: { 'userNm' : 'get_data' },
        dataType: "html",
        cache: false,
        success: function (data) {
            // console.log(data);
            $('#para_name').html(data);

            // var option = '<option value="" selected disabled> Select Option</option>';
            // $.each(data.message, function(key, val) {
            //     option += '<option value="'+val.para_id+'">'+val.para_name+'</option>';
            //  });
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });

    var userNm1 = $('#userName').val();

    // $.ajax({
    //     url: "/get_active_watershed",
    //     type: "GET",
    //     data: { 'userNm' : userNm1 },
    //     dataType: "json",
    //     cache: false,
    //     success: function (data) {
    //         // console.log(data);
    //         $.each(data.message, function (i, v) {
    //             $('#watershed_id').val(v.watershed_id);
    //             var waterShed_id = v.watershed_id;
    //             // console.log(waterShed_id);

    //             $.ajax({
    //                 url: "/get_all_kii_producer_list",
    //                 type: "GET",
    //                 data: { 'watershed_id' : waterShed_id },
    //                 dataType: "html",
    //                 cache: false,
    //                 success: function (data) {
    //                     // console.log(data);
    //                     $("#table_body").html(data);
    //                     $('#my_table').DataTable();
    //                 },
    //                 error: function(xhr, ajaxOptions, thrownError) {
    //                     console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
    //                 }
    //             });
                
    //         });
    //     },
    //     error: function(xhr, ajaxOptions, thrownError) {
    //         console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
    //     }
    // });


});

$('#selectOption').on('change', function(){

    var selectOption = $('#selectOption option:selected').val();

    if(selectOption == 'Yes'){
        $('#input1').removeClass('hide');
    }
    else{
        $('#input1').addClass('hide');
    }

});

$(document).on('click', '#btn_store', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_name option:selected').val();
    var para_name = $('#para_name option:selected').text();

    // var product_name = $('#name_of_product').val();
    var respondent_name = $('#respondent_name').val();
    var cell_no = $('#cell_no').val();
    var age = $('#age').val();
    var gender = $('#gender option:selected').val();
    var shop_name = $('#shop_name').val();
    var shop_location = $('#shop_location').val();
    var qualification = $('#qualification').val();

    // var input_names = [];
    // $("input:checkbox[name=type1]:checked").each(function(){
    //     input_names.push($(this).val());
    // });

    // if (input_names.length > 0) {
    //     input_names = input_names.join(', ');
    //     // console.log('Checked values:', input_names);
    // } else {
    //     alert('Usage of MFS account:: No checkboxes are checked.');
    // }

    var xml_data2 = '';
    var v_master = '';

    v_master = '<row>';
        v_master += '<watershed_id>' + watershed_id + '</watershed_id>';
        v_master += '<watershed_name>' + watershed_name + '</watershed_name>';
        v_master += '<para_id>' + para_id + '</para_id>';
        v_master += '<para_name>' + para_name + '</para_name>';

        // v_master += '<product_name>' + product_name + '</product_name>';
        v_master += '<respondent_name>' + respondent_name + '</respondent_name>';
        v_master += '<cell_no>' + cell_no + '</cell_no>';
        v_master += '<age>' + age + '</age>';
        v_master += '<gender>' + gender + '</gender>';
        v_master += '<shop_name>' + shop_name + '</shop_name>';
        v_master += '<shop_location>' + shop_location + '</shop_location>';
        v_master += '<qualification>' + qualification + '</qualification>';
        v_master += '<created_by>' + created_by + '</created_by>';
    v_master += '</row>';

    // var labelValue = $('#private_sector_support').text();
    var question1 = $('#label1').text().trim();
    var question2 = $('#label2').text().trim();
    var question3 = $('#label3').text().trim();
    var question4 = $('#label4').text().trim();
    var question5 = $('#label5').text().trim();

    var answer1 = $('#answer1').val();
    var answer2 = $('#answer2').val();
    // var answer3 = $('#answer3').val();
    // var answer4 = $('#answer4').val();
    var answer5 = $('#selectOption option:selected').val();
    
    var answer3 = [];
    var answer4 = [];

    $("input:checkbox[name=type1]:checked").each(function(){
        answer3.push($(this).val());
    });

    if (answer3.length > 0) {
        answer3 = answer3.join(', ');
        // console.log('Checked values:', answer3);
    } else {
        alert('Please slecet at least one option...');
    }

    $("input:checkbox[name=type2]:checked").each(function(){
        answer4.push($(this).val());
    });

    if (answer4.length > 0) {
        answer4 = answer4.join(', ');
        // console.log('Checked values:', answer4);
    } else {
        alert('Please slecet at least one option...');
    }

    xml_data2 += '<head>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question1 + '</question>';
        xml_data2 += '<answer>' + answer1 + '</answer>';
        xml_data2 += '</row>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question2 + '</question>';
        xml_data2 += '<answer>' + answer2 + '</answer>';
        xml_data2 += '</row>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question3 + '</question>';
        xml_data2 += '<answer>' + answer3 + '</answer>';
        xml_data2 += '</row>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question4 + '</question>';
        xml_data2 += '<answer>' + answer4 + '</answer>';
        xml_data2 += '</row>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question5 + '</question>';

            if(answer5 == 'Yes'){
                var answer5 = $('#answer5').val();
                xml_data2 += '<answer>' + answer5 + '</answer>';
            }
            else{
                xml_data2 += '<answer>' + answer5 + '</answer>';
            }
        xml_data2 += '</row>';

    xml_data2 += '</head>';

    console.log(xml_data2);

    // clear model message value for every ajax call provide single accurate message
    $('#success_msg').html('');
    $('#error_msg').html('');

    $.ajax({
        url: "/store_super_shop_customer_info",
        type: "POST",
        data: { '_token' : token, 'v_master': v_master, 'xml_data2' : xml_data2 },
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == 'SUCCESS'){
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                // Initial values
                $('.resetSelect').val('').change();
                $('.initialVal').val('');
                $('input[type="checkbox"]').prop('checked', false);
            }
            else{
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#error_msg').html('<span style="color: red">ERROR!! <p>'+data.message+'</p></span>');
            }
            
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });


});




