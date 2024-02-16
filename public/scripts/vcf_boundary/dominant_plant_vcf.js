

// document.title = 'VCF dominant plants';

$(document).ready(function () {

    // console.log("hello talha..");
    
    // var userNm = $('#userName').val();

    // $.ajax({
    //     url: "/get_active_watershed",
    //     type: "GET",
    //     data: { 'userNm' : userNm },
    //     dataType: "json",
    //     cache: false,
    //     success: function (data) {
    //         // console.log(data);
    //         $.each(data.message, function (i, v) {
    //             $('#watershed_id').val(v.watershed_id);
    //             $('#watershed_name').val(v.watershed_name);
    //             $('#para_id').val(v.para_id);
    //             $('#para_name').val(v.para_name);
    //         });
            
    //     },
    //     error: function(xhr, ajaxOptions, thrownError) {
    //         console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
    //     }
    // });

    // for (var i = 0; i < 5; i++) {
    //     insertTableRow();
    // }
    // for (var j = 0; j < 5; j++) {
    //     insertTableRow2();
    // }
    // for (var i = 0; i < 5; i++) {
    //     insertTableRow3();
    // }


});

$('#add_row1').on('click', function () {
    insertTableRow();
});
$('#add_row2').on('click', function () {
    insertTableRow2();
});
$('#add_row3').on('click', function () {
    insertTableRow3();
});

$(document).on('click', '#btn_store_plot1', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var vcf_id = $('#vcf_id').val();
    var vcf_name = $('#vcf_name').val();
    var main_para_id = $('#main_para_id').val();
    var main_para_name = $('#main_para_name').val();

    var latitude1 = $('#latitude1').val();
    var longitude1 = $('#longitude1').val();
    var plot1_dimension_length = $('#plot1_dimension_height').val();
    var plot1_dimension_width = $('#plot1_dimension_weight').val();
    var sendData = '';

    sendData = '<head>';

    $('#my_table > tbody > tr').each(function () {
        
        // var sample = $(this).closest('tr').find('td:eq(1)').text();
        var species_name1 = $(this).find('#species_name1').val();
        var diameter_height1 = $(this).find('#diameter_height1').val();
        var avg_height1 = $(this).find('#avg_height1').val();
        var number_tree1 = $(this).find('#number_tree1').val();

        // automation set value 0 if any field leave empty or null 
        if(species_name1 == '' || species_name1 == null || species_name1 == undefined) species_name1 = 0;
        if(diameter_height1 == '' || diameter_height1 == null || diameter_height1 == undefined) diameter_height1 = 0;
        if(avg_height1 == '' || avg_height1 == null || avg_height1 == undefined) avg_height1 = 0;
        if(number_tree1 == '' || number_tree1 == null || number_tree1 == undefined) number_tree1 = 0;

        // first binding data as xml string
        sendData += '<row>';

        sendData += '<watershed_id>' + watershed_id + '</watershed_id>';
        sendData += '<watershed_name>' + watershed_name + '</watershed_name>';

        sendData += '<vcf_id>' + vcf_id + '</vcf_id>';
        sendData += '<vcf_name>' + vcf_name + '</vcf_name>';

        sendData += '<main_para_id>' + main_para_id + '</main_para_id>';
        sendData += '<main_para_name>' + main_para_name + '</main_para_name>';

        sendData += '<latitude1>' + latitude1 + '</latitude1>';
        sendData += '<longitude1>' + longitude1 + '</longitude1>';
        sendData += '<plot1_dimension_length>' + plot1_dimension_length + '</plot1_dimension_length>';
        sendData += '<plot1_dimension_width>' + plot1_dimension_width + '</plot1_dimension_width>';

        sendData += '<species_name1>' + species_name1 + '</species_name1>';
        sendData += '<diameter_height1>' + diameter_height1 + '</diameter_height1>';
        sendData += '<avg_height1>' + avg_height1 + '</avg_height1>';
        sendData += '<number_tree1>' + number_tree1 + '</number_tree1>';

        sendData += '<created_by>' + created_by + '</created_by>';

        sendData += '</row>';
        
    });

    sendData += '</head>';

    
    console.log(sendData);

     // clear model message value for every ajax call provide single accurate message
    $('#success_msg').html('');
    $('#error_msg').html('');
     
    $.ajax({
        url: "/store_plot1_dominant_plants",
        type: "POST",
        data: { '_token' : token, 'dataToSend' : sendData },
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == "SUCCESS"){
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                $('#my_table td input[type=text]').val('');
                $('#voucher_table td input[type=checkbox]').prop('checked', false);
                $('.resetVal').val('');
            }
            else{
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#error_msg').html(data.message);
            }
            
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });

});

$(document).on('click', '#btn_store_plot2', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var vcf_id = $('#vcf_id').val();
    var vcf_name = $('#vcf_name').val();
    var main_para_id = $('#main_para_id').val();
    var main_para_name = $('#main_para_name').val();

    var latitude2 = $('#latitude2').val();
    var longitude2 = $('#longitude2').val();
    var plot2_dimension_length = $('#plot2_dimension_height').val();
    var plot2_dimension_width = $('#plot2_dimension_weight').val();
    var sendData = '';

    sendData = '<head>';

    $('#my_table2 > tbody > tr').each(function () {
        
        // var sample = $(this).closest('tr').find('td:eq(1)').text();
        var species_name2 = $(this).find('#species_name2').val();
        var diameter_height2 = $(this).find('#diameter_height2').val();
        var avg_height2 = $(this).find('#avg_height2').val();
        var number_tree2 = $(this).find('#number_tree2').val();

        // automation set value 0 if any field leave empty or null 
        if(species_name2 == '' || species_name2 == null || species_name2 == undefined) species_name2 = 0;
        if(diameter_height2 == '' || diameter_height2 == null || diameter_height2 == undefined) diameter_height2 = 0;
        if(avg_height2 == '' || avg_height2 == null || avg_height2 == undefined) avg_height2 = 0;
        if(number_tree2 == '' || number_tree2 == null || number_tree2 == undefined) number_tree2 = 0;

        // first binding data as xml string
        sendData += '<row>';

        sendData += '<watershed_id>' + watershed_id + '</watershed_id>';
        sendData += '<watershed_name>' + watershed_name + '</watershed_name>';

        sendData += '<vcf_id>' + vcf_id + '</vcf_id>';
        sendData += '<vcf_name>' + vcf_name + '</vcf_name>';

        sendData += '<main_para_id>' + main_para_id + '</main_para_id>';
        sendData += '<main_para_name>' + main_para_name + '</main_para_name>';

        sendData += '<latitude2>' + latitude2 + '</latitude2>';
        sendData += '<longitude2>' + longitude2 + '</longitude2>';
        sendData += '<plot2_dimension_length>' + plot2_dimension_length + '</plot2_dimension_length>';
        sendData += '<plot2_dimension_width>' + plot2_dimension_width + '</plot2_dimension_width>';

        sendData += '<species_name2>' + species_name2 + '</species_name2>';
        sendData += '<diameter_height2>' + diameter_height2 + '</diameter_height2>';
        sendData += '<avg_height2>' + avg_height2 + '</avg_height2>';
        sendData += '<number_tree2>' + number_tree2 + '</number_tree2>';

        sendData += '<created_by>' + created_by + '</created_by>';

        sendData += '</row>';
        
    });

    sendData += '</head>';

    
    console.log(sendData);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');

    $.ajax({
        url: "/store_plot2_dominant_plants",
        type: "POST",
        data: { '_token' : token, 'dataToSend' : sendData },
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == "SUCCESS"){
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                $('#my_table2 td input[type=text]').val('');
                $('#voucher_table td input[type=checkbox]').prop('checked', false);
                $('.resetVal').val('');
            }
            else{
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#error_msg').html(data.message);
            }
            
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });



});

$(document).on('click', '#btn_store_plot3', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var vcf_id = $('#vcf_id').val();
    var vcf_name = $('#vcf_name').val();
    var main_para_id = $('#main_para_id').val();
    var main_para_name = $('#main_para_name').val();

    var latitude3 = $('#latitude3').val();
    var longitude3 = $('#longitude3').val();
    var plot3_dimension_length = $('#plot3_dimension_height').val();
    var plot3_dimension_width = $('#plot3_dimension_weight').val();
    var sendData = '';

    sendData = '<head>';

    $('#my_table3 > tbody > tr').each(function () {
        
        // var sample = $(this).closest('tr').find('td:eq(1)').text();
        var species_name3 = $(this).find('#species_name3').val();
        var diameter_height3 = $(this).find('#diameter_height3').val();
        var avg_height3 = $(this).find('#avg_height3').val();
        var number_tree3 = $(this).find('#number_tree3').val();

        // automation set value 0 if any field leave empty or null 
        if(species_name3 == '' || species_name3 == null || species_name3 == undefined) species_name3 = 0;
        if(diameter_height3 == '' || diameter_height3 == null || diameter_height3 == undefined) diameter_height3 = 0;
        if(avg_height3 == '' || avg_height3 == null || avg_height3 == undefined) avg_height3 = 0;
        if(number_tree3 == '' || number_tree3 == null || number_tree3 == undefined) number_tree3 = 0;

        // first binding data as xml string
        sendData += '<row>';

        sendData += '<watershed_id>' + watershed_id + '</watershed_id>';
        sendData += '<watershed_name>' + watershed_name + '</watershed_name>';

        sendData += '<vcf_id>' + vcf_id + '</vcf_id>';
        sendData += '<vcf_name>' + vcf_name + '</vcf_name>';

        sendData += '<main_para_id>' + main_para_id + '</main_para_id>';
        sendData += '<main_para_name>' + main_para_name + '</main_para_name>';

        sendData += '<latitude3>' + latitude3 + '</latitude3>';
        sendData += '<longitude3>' + longitude3 + '</longitude3>';
        sendData += '<plot3_dimension_length>' + plot3_dimension_length + '</plot3_dimension_length>';
        sendData += '<plot3_dimension_width>' + plot3_dimension_width + '</plot3_dimension_width>';

        sendData += '<species_name3>' + species_name3 + '</species_name3>';
        sendData += '<diameter_height3>' + diameter_height3 + '</diameter_height3>';
        sendData += '<avg_height3>' + avg_height3 + '</avg_height3>';
        sendData += '<number_tree3>' + number_tree3 + '</number_tree3>';

        sendData += '<created_by>' + created_by + '</created_by>';

        sendData += '</row>';
        
    });

    sendData += '</head>';

    
    console.log(sendData);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');

    $.ajax({
        url: "/store_plot3_dominant_plants",
        type: "POST",
        data: { '_token' : token, 'dataToSend' : sendData },
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == "SUCCESS"){
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                $('#my_table3 td input[type=text]').val('');
                $('#voucher_table td input[type=checkbox]').prop('checked', false);
                $('.resetVal').val('');
               
                // $('#btn_close').on('click', function(){
                //     window.location.href = '/population_entry';
                // });
            }
            else{
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#error_msg').html(data.message);
            }
            
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });



});

function removeTableRow() {

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();
        reOrderTable();

        if ($('#amount').length == '0') {
            $('#total_amount').text((0).toFixed(2));
        }

        // $('#amount').trigger('change');
        var totalAmount = 0;
        $('#my_table > tbody > tr').each(function () {

            var tem_total = $(this).find('#amount').val();

            if (tem_total == undefined || tem_total == null || tem_total == '') tem_total = 0;

            totalAmount += parseFloat(tem_total);

        });

        // console.log("888..", totalAmount);

        if (totalAmount == '' || totalAmount == null || totalAmount == undefined)
            $('#total_amount').text('0.00');
        else
            $('#total_amount').text(totalAmount.toFixed(2));

    });
}

function reOrderTable() {
    var sl = 1;
    $('#my_table > tbody > tr').each(function () {
        $(this).find('.sl').html(sl);
        sl++;
    });
    counter = sl - 1;
}

$(document).on('change', '.plot1', function () {

    var plot1_height = parseFloat($('#plot1_dimension_height').val());
    var plot1_weight = parseFloat($('#plot1_dimension_weight').val());
    var total = 0;

    if (!isNaN(plot1_height) && !isNaN(plot1_weight)) {
        total = plot1_height*plot1_weight;
    }

    $('#plot1_area').val(total);

});

$(document).on('change', '.plot2', function () {

    var plot2_height = parseFloat($('#plot2_dimension_height').val());
    var plot2_weight = parseFloat($('#plot2_dimension_weight').val());
    var total2 = 0;

    if (!isNaN(plot2_height) && !isNaN(plot2_weight)) {
        total2 = plot2_height*plot2_weight;
    }

    $('#plot2_area').val(total2);

});

$(document).on('change', '.plot3', function () {

    var plot3_height = parseFloat($('#plot3_dimension_height').val());
    var plot3_weight = parseFloat($('#plot3_dimension_weight').val());
    var total3 = 0;

    if (!isNaN(plot3_height) && !isNaN(plot3_weight)) {
        total3 = plot3_height*plot3_weight;
    }

    $('#plot3_area').val(total3);

});

