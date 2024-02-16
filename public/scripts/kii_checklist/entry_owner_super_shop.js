

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

    // var watershed_id = $('#watershed_id').val();
    // var watershed_name = $('#watershed_name').val();
    // var para_id = $('#para_name option:selected').val();
    // var para_name = $('#para_name option:selected').text();

    var district = $('#district').val();
    var upazila_name = $('#upazila_name').val();
    var union_name = $('#union_name').val();

    // var product_name = $('#name_of_product').val();
    var respondent_name = $('#respondent_name').val();
    var cell_no = $('#cell_no').val();
    var age = $('#age').val();
    var gender = $('#gender option:selected').val();
    var shop_name = $('#shop_name').val();
    var shop_location = $('#shop_location').val();
    var qualification = $('#qualification').val();

    var xml_data2 = '';
    var v_master = '';

    v_master = '<row>';
        v_master += '<district>' + district + '</district>';
        v_master += '<upazila_name>' + upazila_name + '</upazila_name>';
        v_master += '<union_name>' + union_name + '</union_name>';

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
    var question6 = $('#label6').text().trim();
    var question7 = $('#label7').text().trim();
    var question8 = $('#label8').text().trim();

    var answer1 = $('#answer1 option:selected').val();
    // var answer2 = $('#answer2').val();
    var answer3 = $('#answer3 option:selected').val();
    var answer4 = $('#answer4').val();
    var answer5 = $('#answer5').val();
    var answer6 = $('#answer6').val();
    var answer7 = $('#answer7').val();
    var answer8 = $('#answer8 option:selected').val();

    var answer2 = [];
    $("input:checkbox[name=type1]:checked").each(function(){
        answer2.push($(this).val());
    });

    if (answer2.length > 0) {
        answer2 = answer2.join(', ');
        // console.log('Checked values:', answer2);
    } else {
        alert('Please select at least one..');
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
        xml_data2 += '<answer>' + answer5 + '</answer>';
        xml_data2 += '</row>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question6 + '</question>';
        xml_data2 += '<answer>' + answer6 + '</answer>';
        xml_data2 += '</row>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question7 + '</question>';
        xml_data2 += '<answer>' + answer7 + '</answer>';
        xml_data2 += '</row>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question8 + '</question>';

            if(answer8 == 'Yes'){
                var answer8 = $('#answer8').val();
                xml_data2 += '<answer>' + answer8 + '</answer>';
            }
            else{
                xml_data2 += '<answer>' + answer8 + '</answer>';
            }
        xml_data2 += '</row>';

    xml_data2 += '</head>';

    console.log(xml_data2);

    // clear model message value for every ajax call provide single accurate message
    $('#success_msg').html('');
    $('#error_msg').html('');

    $.ajax({
        url: "/store_owner_super_shop_info",
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




