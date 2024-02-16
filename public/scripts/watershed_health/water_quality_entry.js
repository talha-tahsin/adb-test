


// document.title = 'Livelihood Entry';

$(document).ready(function () {

    // console.log("hello talha.."); 
    // $('#community').select2();
    // $('.select2').css({'border': '2px solid #898AEE', 'border-radius': '5px'});
    $('.date').datepicker({ dateFormat: "yy-mm-dd" });
    
    myJson = {
        '001' : 'Dissolve Oxygen (DO) (mg/L)',
        '002' : 'Temperature  (°C )',
        '003' : 'pH',
        '004' : 'Electrical Conductivity (mS/cm)',
        '005' : 'Total Dissolved Solids (ppt) (mg/L)',
    };
    $.each(myJson, function(key, value) {
        // console.log(value);
        insertTableRow(value);
    });

   

});

$(document).on('click', '#btn_store1', function (event) {

    event.preventDefault();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_name = $('#para_name').val();
    var sample_id = $('#sample_id').val();

    var form = $('#form_body')[0];
    var formdata = new FormData(form);
    formdata.append( "_token", token);
    formdata.append( "watershed_id", watershed_id);
    formdata.append( "watershed_name", watershed_name);
    formdata.append( "para_name", para_name);
    formdata.append( "sample_id", sample_id);

    console.log(formdata);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');

    $.ajax({
        url: "/store_water_quality_entry1",
        type: "POST",
        enctype: 'multipart/form-data',
        dataType: 'json',
        data: formdata,
        processData: false,  // Important when file upload!
        contentType: false,
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == 'SUCCESS'){
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                $('.initialSelectBoxVal').val('').change();
                $('#up_image').val('');
                $('.initialVal').val('');
                $('#my_table td input[type=text]').val('');
                $('#any_remark').val('');
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

function insertTableRow(name) {

    var appendString = '';
    var rowCount = $('#my_table2 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td style="width: 400px;text-align: left;">' + name + '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="test_1st" name="test_1st" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="test_2nd" name="test_2nd" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="0">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="test_3rd" name="test_3rd" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="0">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="average" name="average" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table2 > tbody:last-child').append(appendString);
    removeTableRow();
    // $("#voucher_table tr:last").scrollintoview();
}

$(document).on('click', '#btn_store2', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();
    var sample_id = $('#sample_id').val();

    var xml_data = '';

    xml_data = '<head>';

    $('#my_table2 > tbody > tr').each(function () {

        // var tr_comnty_id = $(this).attr('comnty_id');
        // var tr_comnty_name = $(this).find('td:eq(1)').text(); 
        var test_name = $(this).closest('tr').find('td:eq(1)').text();

        var test_1st = $(this).find('#test_1st').val();
        var test_2nd = $(this).find('#test_2nd').val();
        var test_3rd = $(this).find('#test_3rd').val();
        var average = $(this).find('#average').val();

        if(test_1st == '' || test_1st == null || test_1st == undefined) test_1st = 0;
        if(test_2nd == '' || test_2nd == null || test_2nd == undefined) test_2nd = 0;
        if(test_3rd == '' || test_3rd == null || test_3rd == undefined) test_3rd = 0;
        if(average == '' || average == null || average == undefined) average = 0;
    
        // first binding data as xml string
        xml_data += '<row>';

        xml_data += '<sample_id>' + sample_id + '</sample_id>';
        xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
        xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
        xml_data += '<para_id>' + para_id + '</para_id>';
        xml_data += '<para_name>' + para_name + '</para_name>';
        xml_data += '<test_name>' + test_name + '</test_name>';

        xml_data += '<test_1st>' + test_1st + '</test_1st>';
        xml_data += '<test_2nd>' + test_2nd + '</test_2nd>';
        xml_data += '<test_3rd>' + test_3rd + '</test_3rd>';
        xml_data += '<average>' + average + '</average>';

        xml_data += '<created_by>' + created_by + '</created_by>';

        xml_data += '</row>';
        

    });

    xml_data += '</head>';

    
    console.log(xml_data);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');

    $.ajax({
        url: "/store_water_test_report",
        type: "POST",
        data: { '_token' : token, 'dataToSend' : xml_data },
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == 'SUCCESS'){
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                $('#my_table2 td input[type=text]').val('');
                $('#my_table2 td').find('.resetSelect').prop("selectedIndex", 0);
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

$('#add_row').on('click', function(){
    var appendString = '';
    var rowCount = $('#my_table2 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="test_1st" name="test_1st" class="form-control" value="" style="width: 200px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="test_1st" name="test_1st" class="form-control" value="" style="width: 200px;text-align: center;" placeholder="0">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="test_2nd" name="test_2nd" class="form-control" value="" style="width: 200px;text-align: center;" placeholder="0">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="test_3rd" name="test_3rd" class="form-control" value="" style="width: 200px;text-align: center;" placeholder="0">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="average" name="average" class="form-control" value="" style="width: 200px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table2 > tbody:last-child').append(appendString);
    removeTableRow();
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
        $('#voucher_table > tbody > tr').each(function () {

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
    $('#voucher_table > tbody > tr').each(function () {
        $(this).find('.sl').html(sl);
        sl++;
    });
    counter = sl - 1;
}



