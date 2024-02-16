

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

    $.ajax({
        url: "/get_active_watershed",
        type: "GET",
        data: { 'userNm' : userNm1 },
        dataType: "json",
        cache: false,
        success: function (data) {
            // console.log(data);
            $.each(data.message, function (i, v) {
                $('#watershed_id').val(v.watershed_id);
                var waterShed_id = v.watershed_id;
                // console.log(waterShed_id);

                $.ajax({
                    url: "/get_all_kii_producer_list",
                    type: "GET",
                    data: { 'watershed_id' : waterShed_id },
                    dataType: "html",
                    cache: false,
                    success: function (data) {
                        // console.log(data);
                        $("#table_body").html(data);
                        $('#my_table').DataTable();
                    },
                    error: function(xhr, ajaxOptions, thrownError) {
                        console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
                    }
                });
                
            });
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });

});



$('#ecourier_serivce').on('change', function(){

    var ecourier_serivce = $('#ecourier_serivce option:selected').val();

    if(ecourier_serivce == 'Yes'){
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

    var product_name = $('#name_of_product').val();
    var producer_name = $('#producer_name').val();
    var product_varity = $('#product_varity').val();
    var producer_cell_no = $('#producer_cell_no').val();
    var producer_age = $('#producer_age').val();
    var gender = $('#gender option:selected').val();
    var producer_qualification = $('#producer_qualification').val();

    // var labelValue = $('#private_sector_support').text();
    var question1 = $('label[for="own_phone"]').text().trim();
    var question2 = $('label[for="types_of_phone"]').text().trim();
    var question3 = $('label[for="internet_access"]').text().trim();
    var question4 = $('label[for="transact_account_of"]').text().trim();
    var question5 = $('label[for="pattern_of_mfs_account"]').text().trim();
    var question6 = $('label[for="agent_distance"]').text().trim();

    var question7 = $('#label7').text().trim();
    var question8 = $('#label8').text().trim();
    var question9 = $('#label9').text().trim();

    var question10 = $('#label10').text().trim();
    var question11 = $('#label11').text().trim();
    var question12 = $('#label12').text().trim();

    var answer1 = $('#own_phone option:selected').val();
    var answer2 = $('#types_of_phone option:selected').val();
    var answer3 = $('#internet_access option:selected').val();
    var answer4 = $('#transact_account_of option:selected').val();
    var answer5 = $('#pattern_of_mfs_account option:selected').val();
    var answer6 = $('#agent_distance option:selected').val();
    
    var answer7 = [];
    var answer8 = [];
    var answer9 = [];

    var answer10 = $('#courier_services option:selected').val();
    var answer11 = $('#proximity_of_courier_services option:selected').val();
    var answer12 = $('#ecourier_serivce option:selected').val();


    $("input:checkbox[name=type1]:checked").each(function(){
        answer7.push($(this).val());
    });

    if (answer7.length > 0) {
        answer7 = answer7.join(', ');
        // console.log('Checked values:', answer7);
    } else {
        alert('Usage of MFS account:: No checkboxes are checked.');
    }

    $("input:checkbox[name=type2]:checked").each(function(){
        answer8.push($(this).val());
    });

    if (answer8.length > 0) {
        answer8 = answer8.join(', ');
        // console.log('Checked values:', answer8);
    } else {
        alert('Saving media:: No checkboxes are checked.');
    }

    $("input:checkbox[name=type3]:checked").each(function(){
        answer9.push($(this).val());
    });

    if (answer9.length > 0) {
        answer9 = answer9.join(', ');
        // console.log('Checked values:', answer9);
    } else {
        alert('Barrier to use own MFS:: No checkboxes are checked.');
    }


    var xml_data = '';
    var xml_data2 = '';

    xml_data += '<row>';
        xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
        xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
        xml_data += '<para_id>' + para_id + '</para_id>';
        xml_data += '<para_name>' + para_name + '</para_name>';
        xml_data += '<product_name>' + product_name + '</product_name>';
        xml_data += '<producer_name>' + producer_name + '</producer_name>';
        xml_data += '<product_varity>' + product_varity + '</product_varity>';
        xml_data += '<producer_cell_no>' + producer_cell_no + '</producer_cell_no>';
        xml_data += '<producer_age>' + producer_age + '</producer_age>';
        xml_data += '<gender>' + gender + '</gender>';
        xml_data += '<producer_qualification>' + producer_qualification + '</producer_qualification>';
        xml_data += '<created_by>' + created_by + '</created_by>';
    xml_data += '</row>';


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
        xml_data2 += '<answer>' + answer8 + '</answer>';
        xml_data2 += '</row>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question9 + '</question>';
        xml_data2 += '<answer>' + answer9 + '</answer>';
        xml_data2 += '</row>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question10 + '</question>';
        xml_data2 += '<answer>' + answer10 + '</answer>';
        xml_data2 += '</row>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question11 + '</question>';
        xml_data2 += '<answer>' + answer11 + '</answer>';
        xml_data2 += '</row>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question12 + '</question>';
            if(answer12 == 'Yes'){
                var answer12 = $('#ecourier_name').val();
                xml_data2 += '<answer>' + answer12 + '</answer>';
            }
            else{
                // console.log(support_private_sector);
                xml_data2 += '<answer>' + answer12 + '</answer>';
            }
        xml_data2 += '</row>';

    xml_data2 += '</head>';

    console.log(xml_data, xml_data2);

    // clear model message value for every ajax call provide single accurate message
    $('#success_msg').html('');
    $('#error_msg').html('');

    $.ajax({
        url: "/store_mobile_financial_courier_info",
        type: "POST",
        data: { '_token' : token, 'xml_data' : xml_data, 'xml_data2' : xml_data2 },
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




