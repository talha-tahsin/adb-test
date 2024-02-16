


// document.title = 'Accessibility Entry';

$(document).ready(function () {

    console.log("hello talha.."); 

    // $('#watershedId').select2();
    // $('#para_list').select2();
    // $('#community').select2();
  
    // $('.select2').css({'border': '2px solid #898AEE', 'border-radius': '5px'});

    // $('#para_list').prop('disabled', true);

    $.ajax({
        url: "/get_transportation",
        type: "GET",
        data: { 'latrineList' : 'get_data'},
        dataType: "JSON",
        cache: false,
        success: function (data) {
            console.log(data);
            if(data.status == 'SUCCESS'){
                $('#table_div').removeClass('hide');
                $.each(data.message, function (i, v) {
                    insertTableRow3(v.transportation_name, v.transportation_id);
                 });
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

    modeType = {
        '0021' : 'Select Main Mode',
        '0022' : 'State the Preferable Modes',
    };
    $.each(modeType, function(key, value) {
        insertTableRow1(value);
    });

    roadType = {
        '0011' : 'National Highway',
        '0012' : 'Regional highway',
        '0013' : 'Zila road',
        '0014' : 'Local road',
        '0015' : 'Others',
    };
    $.each(roadType, function(key, value) {
        insertTableRow2(value);
    });

    myJson = {
        '001' : 'Mobile phone ( % of people)',
        '002' : 'Smartphone (% of people)',
        '003' : 'Internet user (% of people)',
        '004' : 'Radio (% of HHs)',
        '005' : 'TV (% of HHs)',
        '006' : 'Use of social network (facebook, whatsapp) (% of smartphone user)',
        '007' : 'Use of education site (% of internet user)',
        '008' : 'Use of e-commerce (% of farmers/foresters)',
    };
    $.each(myJson, function(key, value) {
        insertTableRow4(value);
    });


});

function insertTableRow1(name) {

    var appendString = '';
    var rowCount = $('#my_table > tbody > tr').length;
    rowCount++;

    // console.log(accountName);

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td style="width: 300px;text-align: left;">'+name+'</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="earthen" name="earthen" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Earthen">Yes</option>';
    appendString += '<option value="No">No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="herringbone" name="herringbone" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Herringbone">Yes</option>';
    appendString += '<option value="No">No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="pucca" name="pucca" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Pucca">Yes</option>';
    appendString += '<option value="No">No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="water_way" name="water_way" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Water Way">Yes</option>';
    appendString += '<option value="No">No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="no_transportation" name="no_transportation" class="form-control resetSelect" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="No transportation">Yes</option>';
    appendString += '<option value="No">No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table > tbody:last-child').append(appendString);
    // $("#voucher_table tr:last").scrollintoview();
    // removeTableRow();
}

$(document).on('click', '#btn_store1', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var mode3_name = $('#mode3_name').text();
    var condition_earthen = $('#condition_earthen').val();
    var condition_herringbone = $('#condition_herringbone').val();
    var condition_pucca = $('#condition_pucca').val();
    var condition_water_way = $('#condition_water_way').val();
    var condition_no_trans = $('#condition_no_trans').val();

    dataToSend = {
        'watershed_id' : watershed_id,
        'watershed_name' : watershed_name,
        'para_id' : para_id,
        'para_name' : para_name,
        'mode3_name' : mode3_name,
        'condition_earthen' : condition_earthen,
        'condition_herringbone' : condition_herringbone,
        'condition_pucca' : condition_pucca,
        'condition_water_way' : condition_water_way,
        'condition_no_trans' : condition_no_trans
    };

    xml_data = '<head>';

    $('#my_table > tbody > tr').each(function () {

        // var transportation_id = $(this).attr('center_id');
        var mode_name = $(this).find('td:eq(1)').text(); 
        
        var earthen = $(this).find('#earthen').val();
        var herringbone = $(this).find('#herringbone').val();
        var pucca = $(this).find('#pucca').val();
        var water_way = $(this).find('#water_way').val();
        var no_transportation = $(this).find('#no_transportation').val();

        // first binding data as xml string
        xml_data += '<row>';

        xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
        xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
        xml_data += '<para_id>' + para_id + '</para_id>';
        xml_data += '<para_name>' + para_name + '</para_name>';

        xml_data += '<mode_name>' + mode_name + '</mode_name>';

        xml_data += '<earthen>' + earthen + '</earthen>';
        xml_data += '<herringbone>' + herringbone + '</herringbone>';
        xml_data += '<pucca>' + pucca + '</pucca>';
        xml_data += '<water_way>' + water_way + '</water_way>';
        xml_data += '<no_transportation>' + no_transportation + '</no_transportation>';

        xml_data += '<created_by>' + created_by + '</created_by>';

        xml_data += '</row>';
        
    });

    xml_data += '</head>';
    
    console.log(mode3_name, xml_data);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');

    $.ajax({
        url: "/store_transportation_facilities",
        type: "POST",
        data: { '_token' : token, 'xml_data' : xml_data, 'dataToSend' : JSON.stringify(dataToSend) },
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == 'SUCCESS'){
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                $('#my_table td').find('.resetSelect').prop("selectedIndex", 0);
                $('#my_table td input[type=text]').val('');
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

function insertTableRow2(name) {

    var appendString = '';
    var rowCount = $('#my_table2 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td style="width: 400px;text-align: left;">' + name + '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="avg_distance" name="others" class="form-control" value="" style="width: 200px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    //appendString += '<td style="text-align: center;">';
    //appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i></button>';
    //appendString += '</td>';
    
    appendString += '</tr>';


    $('#my_table2 > tbody:last-child').append(appendString);
    // removeTableRow();
    // $("#voucher_table tr:last").scrollintoview();
}

$(document).on('click', '#btn_store2', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    xml_data = '<head>';

    $('#my_table2 > tbody > tr').each(function () {

        // var transportation_id = $(this).attr('center_id');
        var connecting_road = $(this).find('td:eq(1)').text(); 
        
        var avg_distance = $(this).find('#avg_distance').val();

        // first binding data as xml string
        xml_data += '<row>';

        xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
        xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
        xml_data += '<para_id>' + para_id + '</para_id>';
        xml_data += '<para_name>' + para_name + '</para_name>';

        xml_data += '<connecting_road>' + connecting_road + '</connecting_road>';
        xml_data += '<avg_distance>' + avg_distance + '</avg_distance>';

        xml_data += '<created_by>' + created_by + '</created_by>';

        xml_data += '</row>';
        
    });

    xml_data += '</head>';
    
    console.log(xml_data);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');

    $.ajax({
        url: "/store_road_distance_from_para",
        type: "POST",
        data: { '_token' : token, 'xml_data' : xml_data },
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == 'SUCCESS'){
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                $('#my_table2 td').find('.resetSelect').prop("selectedIndex", 0);
                $('#my_table2 td input[type=text]').val('');
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

function insertTableRow3(center_name, center_id) {

    var appendString = '';
    var rowCount = $('#my_table3 > tbody > tr').length;
    rowCount++;

    // console.log(accountName);

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td style="width: 400px;text-align: left;">'+center_name+'</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="most_use" name="most_use" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Currently in most use">Yes</option>';
    appendString += '<option value="No">No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="preferable" name="preferable" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Identify most preferable">Yes</option>';
    appendString += '<option value="No">No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="remarks" class="form-control" value="" style="width: 180px;text-align: center;" placeholder="Write something">';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table3 > tbody:last-child').append(appendString);
    // $("#voucher_table tr:last").scrollintoview();
    // removeTableRow();
}

$(document).on('click', '#btn_store3', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var xml_data = '';

    xml_data = '<head>';

    $('#my_table3 > tbody > tr').each(function () {

        // var center_id = $(this).attr('center_id');
        // var center_name = $(this).find('td:eq(0)').text(); 
        var transportation_mode = $(this).closest('tr').find('td:eq(1)').text();
        
        var most_use = $(this).find('#most_use').val();
        var preferable = $(this).find('#preferable').val();
        var remarks = $(this).find('#remarks').val();

        // first binding data as xml string
        xml_data += '<row>';

        xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
        xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
        xml_data += '<para_id>' + para_id + '</para_id>';
        xml_data += '<para_name>' + para_name + '</para_name>';

        xml_data += '<transportation_mode>' + transportation_mode + '</transportation_mode>';
        xml_data += '<most_use>' + most_use + '</most_use>';
        xml_data += '<preferable>' + preferable + '</preferable>';
        xml_data += '<remarks>' + remarks + '</remarks>';

        xml_data += '<created_by>' + created_by + '</created_by>';

        xml_data += '</row>';
        

    });

    xml_data += '</head>';
    
    console.log(xml_data);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');

    $.ajax({
        url: "/store_available_transportation_facilities",
        type: "POST",
        data: { '_token' : token, 'dataToSend' : xml_data },
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == 'SUCCESS'){
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                $('#my_table3 td input[type=text]').val('');
                $('#my_table3 td').find('.resetSelect').prop("selectedIndex", 0);
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

function insertTableRow4(name) {

    var appendString = '';
    var rowCount = $('#my_table4 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td style="width: 400px;text-align: left;">' + name + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="percentage" name="percentage" class="form-control resetSelect" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="less than 20%">Percentage (<20%)</option>';
    appendString += '<option value="between 20-50%">Percentage (20-50%)</option>';
    appendString += '<option value="above 50%">Percentage (> 50%)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="remarks" name="remarks" class="form-control" value="" style="width: 200px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    //appendString += '<td style="text-align: center;">';
    //appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i></button>';
    //appendString += '</td>';
    
    appendString += '</tr>';


    $('#my_table4 > tbody:last-child').append(appendString);
    // removeTableRow();
    // $("#voucher_table tr:last").scrollintoview();
}

$(document).on('click', '#btn_store4', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var xml_data = '';

    xml_data = '<head>';

    $('#my_table4 > tbody > tr').each(function () {

        // var center_id = $(this).attr('center_id');
        // var center_name = $(this).find('td:eq(0)').text(); 
        var facilities_type = $(this).closest('tr').find('td:eq(1)').text();
        
        var percentage = $(this).find('#percentage').val();
        var remarks = $(this).find('#remarks').val();
    
        // first binding data as xml string
        xml_data += '<row>';

        xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
        xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
        xml_data += '<para_id>' + para_id + '</para_id>';
        xml_data += '<para_name>' + para_name + '</para_name>';

        xml_data += '<facilities_type>' + facilities_type + '</facilities_type>';
        xml_data += '<percentage>' + percentage + '</percentage>';
        xml_data += '<remarks>' + remarks + '</remarks>';

        xml_data += '<created_by>' + created_by + '</created_by>';

        xml_data += '</row>';
        

    });

    xml_data += '</head>';
    
    console.log(xml_data);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');

    $.ajax({
        url: "/store_telecommunication_media_facilities",
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

$(document).on('click', '#btn_store5', function (event) {

    event.preventDefault();
    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var form = $('#my_form')[0];
    var formdata = new FormData(form);
    formdata.append( "_token", token);
    formdata.append( "watershed_id", watershed_id);
    formdata.append( "watershed_name", watershed_name);
    formdata.append( "para_id", para_id);
    formdata.append( "para_name", para_name);
    formdata.append( "created_by", created_by);

    console.log(formdata);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');

    $.ajax({
        url: "/store_transporting_agro_forestry",
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
                $('#agro_forestry').val('');
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




