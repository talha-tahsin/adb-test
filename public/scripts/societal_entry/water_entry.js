


// document.title = 'Water Entry';

$(document).ready(function () {

    console.log("hello talha.."); 

    // $('#watershedId').select2();
    // $('#para_list').select2();
    // $('#community').select2();
  
    // $('.select2').css({'border': '2px solid #898AEE', 'border-radius': '5px'});

    // $('#para_list').prop('disabled', true);

    insertTableRow1();

    myJson = {
        '001' : 'Tube well',
        '002' : 'Ring well',
        '003' : 'Dug well',
        '004' : 'Gravity Feed System',
        '005' : 'Springs',
        '006' : 'Others',
    };
    $.each(myJson, function(key, value) {
        insertTableRow2(value);
    });

});

$('#add_row1').on('click', function(){
    insertTableRow1();
});

function insertTableRow1() {

    var appendString = '';
    var rowCount = $('#my_table1 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="waterSourceType" class="form-control resetSelect" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Tube well">Tube well</option>';
    appendString += '<option value="Ring well">Ring well</option>';
    appendString += '<option value="Dug well">Dug well</option>';
    appendString += '<option value="Gravity Feed System">Gravity Feed System</option>';
    appendString += '<option value="Springs">Springs</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="preferred_source" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="drinking_water_number" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="distance" name="distance" class="form-control resetSelect" value="" style="width: 250px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Distance</option>';
    appendString += '<option value="Less than 50 (meter)">Less than 50 (meter)</option>';
    appendString += '<option value="50-100 (meter)">50-100 (meter)</option>';
    appendString += '<option value="100-250 (meter)">100-250 (meter)</option>';
    appendString += '<option value="250-500 (meter)">250-500 (meter)</option>';
    appendString += '<option value="Above 500 (meter)">Above 500 (meter)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="requried_drinking_water" class="form-control" value="" style="width: 250px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table1 > tbody:last-child').append(appendString);
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

    var isValid = '';

    xml_data = '<head>';

    $('#my_table1 > tbody > tr').each(function () {

        // var source_name = $(this).find('td:eq(1)').text(); 
        
        var source_name = $(this).find('#waterSourceType option:selected').val();

        var preferred_source = $(this).find('#preferred_source').val();
        var drinking_water_number = $(this).find('#drinking_water_number').val();
        var distance = $(this).find('#distance option:selected').val();
        var requried_drinking_water = $(this).find('#requried_drinking_water').val();

        if(source_name == '' && preferred_source == '' && drinking_water_number == '' && distance == '' && requried_drinking_water == '' ) {
            var errorMsg = 'Please enter some value in all visible row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else
        {
            isValid = true;

            // automation set value 0 if any field leave empty or null 
            if(preferred_source == '' || preferred_source == null || preferred_source == undefined) preferred_source = 0;
            if(drinking_water_number == '' || drinking_water_number == null || drinking_water_number == undefined) drinking_water_number = 0;
            if(distance == '' || distance == null || distance == undefined) distance = 0;

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<source_name>' + source_name + '</source_name>';

            xml_data += '<preferred_source>' + preferred_source + '</preferred_source>';
            xml_data += '<drinking_water_number>' + drinking_water_number + '</drinking_water_number>';
            xml_data += '<distance>' + distance + '</distance>';
            xml_data += '<requried_drinking_water>' + requried_drinking_water + '</requried_drinking_water>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
        }

    });

    xml_data += '</head>';

    
    console.log(xml_data);

    if(isValid) {
    
        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_major_drinking_water",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table1 td input[type=text]').val('');
                    $('#my_table1 td').find('.resetSelect').prop("selectedIndex", 0);
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
    }


});

function insertTableRow2(name) {

    var appendString = '';
    var rowCount = $('#my_table2 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td style="width: 200px;text-align: left;">'+name+'</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="availability" name="availability" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="quality" name="quality" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Bad">Bad</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Good">Good</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="iron_presence" name="iron_presence" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No">No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table2 > tbody:last-child').append(appendString);
    // $("#voucher_table tr:last").scrollintoview();
    // removeTableRow();
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

        var source_name = $(this).find('td:eq(1)').text(); 
        
        var availability = $(this).find('#availability option:selected').val();
        var quality = $(this).find('#quality option:selected').val();
        var iron_presence = $(this).find('#iron_presence').val();

        // automation set value 0 if any field leave empty or null 
        if(preferred_source == '' || preferred_source == null || preferred_source == undefined) preferred_source = 0;
        if(drinking_water_number == '' || drinking_water_number == null || drinking_water_number == undefined) drinking_water_number = 0;
        if(distance == '' || distance == null || distance == undefined) distance = 0;
        if(availability == '' || availability == null || availability == undefined) availability = 0;

        // first binding data as xml string
        xml_data += '<row>';

        xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
        xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
        xml_data += '<para_id>' + para_id + '</para_id>';
        xml_data += '<para_name>' + para_name + '</para_name>';

        xml_data += '<source_name>' + source_name + '</source_name>';

        xml_data += '<availability>' + availability + '</availability>';
        xml_data += '<quality>' + quality + '</quality>';
        xml_data += '<iron_presence>' + iron_presence + '</iron_presence>';

        xml_data += '<created_by>' + created_by + '</created_by>';

        xml_data += '</row>';


    });

    xml_data += '</head>';

    
    console.log(xml_data);
    
    // clear model message value for every ajax call provide single accurate message
    $('#success_msg').html('');
    $('#error_msg').html('');

    $.ajax({
        url: "/store_water_availability_quality",
        type: "POST",
        data: { '_token' : token, 'xml_data' : xml_data },
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

$(document).on('click', '#btn_store3', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var question1 = $('#question1').text().trim();
    var answer1 = $('#answer1').val();

    
    var xml_data = '';

    xml_data += '<row>';
    xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
    xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
    xml_data += '<para_id>' + para_id + '</para_id>';
    xml_data += '<para_name>' + para_name + '</para_name>';
    xml_data += '<question>' + question1 + '</question>';
    xml_data += '<answer>' + answer1 + '</answer>';
    xml_data += '<created_by>' + created_by + '</created_by>';
    xml_data += '</row>';
    
    console.log(xml_data);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');

    $.ajax({
        url: "/store_water_supply_questionnaire",
        type: "POST",
        data: { '_token' : token, 'dataToSend' : xml_data },
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == 'SUCCESS'){
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#success_msg').html(data.message);
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );

                $('.initialVal').val('');
                // $('#male_awareness').val('').change();
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

