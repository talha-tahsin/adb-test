


// document.title = 'Livelihood Entry';

$(document).ready(function () {

    // console.log("hello talha.."); 
    // $('#community').select2();
    // $('.select2').css({'border': '2px solid #898AEE', 'border-radius': '5px'});
    $('.date').datepicker({ dateFormat: "yy-mm-dd" });
    
    myJson = {
        '001' : 'Sand',
        '002' : 'Loamy sand',
        '003' : 'Sandy loam',
        '004' : 'Sandy clay loam',
        '005' : 'Loam',
        '006' : 'Silt loam',
        '007' : 'Silt',
        '008' : 'Silty clay loam',
        '009' : 'Clay',
        '010' : 'Clay loam',
        '011' : 'Sandy clay',
        '012' : 'Silty clay',
    };
    $.each(myJson, function(key, value) {
        insertTableRow(value);
    });

});

$(document).on('click', '#btn_store1', function (event) {

    event.preventDefault();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_name = $('#para_name').val();
    var soil_sample_id = $('#soil_sample_id').val();

    var form = $('#form_body')[0];
    var formdata = new FormData(form);
    formdata.append("_token", token);
    formdata.append("watershed_id", watershed_id);
    formdata.append("watershed_name", watershed_name);
    formdata.append("para_name", para_name);
    formdata.append("soil_sample_id", soil_sample_id);

    console.log(formdata);

    // clear model message value for every ajax call provide single accurate message
    $('#success_msg').html('');
    $('#error_msg').html('');

    $.ajax({
        url: "/store_soil_test_entry",
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
                $('.initialVal').val('');
                $('#my_table td input[type=text]').val('');
                $('#any_remark').val();
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

$(document).on('click', '#btn_store2', function (event) {

    event.preventDefault();
    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();
    var soil_sample_id = $('#soil_sample_id').val();

    var form = $('#form2_body')[0];
    var formdata = new FormData(form);
    formdata.append( "_token", token);
    formdata.append( "watershed_id", watershed_id);
    formdata.append( "watershed_name", watershed_name);
    formdata.append( "para_id", para_id);
    formdata.append( "para_name", para_name);
    formdata.append( "soil_sample_id", soil_sample_id);
    formdata.append( "created_by", created_by);

    console.log(formdata);
    
    // console.log(jsonObj);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');

    $.ajax({
        url: "/store_soil_test_result",
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
                $('#success_msg').html(data.message);
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                $('.initialSelectBoxVal').val('').change();
                $('.initialVal').val('');
                $('#my_table2 td input[type=text]').val('');
                $('#my_table3 td input[type=text]').val('');
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
    var rowCount = $('#my_table4 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td style="width: 300px;text-align: left;">' + name + '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="sand" name="sand" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="0">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="slit" name="slit" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="0">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="clay" name="clay" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove">Remove</i></button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table4 > tbody:last-child').append(appendString);
    removeTableRow();
    // $("#voucher_table tr:last").scrollintoview();
}

$(document).on('click', '#btn_store3', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();
    var soil_sample_id = $('#soil_sample_id').val();

    var xml_data = '';

    xml_data = '<head>';

    $('#my_table4 > tbody > tr').each(function () {

        // var tr_comnty_id = $(this).attr('comnty_id');
        // var tr_comnty_name = $(this).find('td:eq(1)').text(); 
        var soil_texture_class = $(this).closest('tr').find('td:eq(1)').text();

        var sand = $(this).find('#sand').val();
        var slit = $(this).find('#slit').val();
        var clay = $(this).find('#clay').val();

        if(sand == '' || sand == null || sand == undefined) sand = 0;
        if(slit == '' || slit == null || slit == undefined) slit = 0;
        if(clay == '' || clay == null || clay == undefined) clay = 0;
    
        // first binding data as xml string
        xml_data += '<row>';

        xml_data += '<soil_sample_id>' + soil_sample_id + '</soil_sample_id>';
        xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
        xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
        xml_data += '<para_id>' + para_id + '</para_id>';
        xml_data += '<para_name>' + para_name + '</para_name>';
        xml_data += '<soil_texture_class>' + soil_texture_class + '</soil_texture_class>';

        xml_data += '<sand>' + sand + '</sand>';
        xml_data += '<slit>' + slit + '</slit>';
        xml_data += '<clay>' + clay + '</clay>';

        xml_data += '<created_by>' + created_by + '</created_by>';

        xml_data += '</row>';
        

    });

    xml_data += '</head>';

    
    console.log(xml_data);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');

    $.ajax({
        url: "/store_soil_texture_class",
        type: "POST",
        data: { '_token' : token, 'dataToSend' : xml_data },
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == 'SUCCESS'){
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                $('#my_table4 td input[type=text]').val('');
                $('#my_table4 td').find('.resetSelect').prop("selectedIndex", 0);
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
    var rowCount = $('#my_table4 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="sand" name="sand" class="form-control" value="" style="width: 300px;text-align: left;" placeholder="Write soil texture class">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="sand" name="sand" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="0">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="slit" name="slit" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="0">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="clay" name="clay" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table4 > tbody:last-child').append(appendString);
    removeTableRow();

});

$(document).on('change', '.m_num', function () {

    var row = $(this).closest('tr'); 
    var total = 0;
    var grandTotal = 0;

    // current row and calculate the total
    row.find('.m_num').each(function () {
        var value = parseFloat($(this).val());
        if (!isNaN(value)) {
            total += value;
        }
    });

    row.find('#m_total').val(total);

    row.find('.total').each(function () {
        var rowTotal = parseFloat($(this).val());
        if (!isNaN(rowTotal)) {
            grandTotal += rowTotal;
        }
    });

    row.find('#grandTotal').val(grandTotal);

});

$(document).on('change', '.fe_num', function () {

    var row = $(this).closest('tr'); 
    var total = 0;
    var grandTotal = 0;

    // current row and calculate the total
    row.find('.fe_num').each(function () {
        var value = parseFloat($(this).val());
        if (!isNaN(value)) {
            total += value;
        }
    });

    row.find('#fe_total').val(total);

    row.find('.total').each(function () {
        var rowTotal = parseFloat($(this).val());
        if (!isNaN(rowTotal)) {
            grandTotal += rowTotal;
        }
    });

    row.find('#grandTotal').val(grandTotal);

});

function removeTableRow() {

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();
        var sl = 1;
        $('#my_table4 > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

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



