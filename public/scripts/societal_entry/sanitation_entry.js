


// document.title = 'Sanitation Entry';

$(document).ready(function () {

    console.log("hello talha.."); 

    // $('#watershedId').select2();
    // $('#para_list').select2();
    // $('#community').select2();
  
    // $('.select2').css({'border': '2px solid #898AEE', 'border-radius': '5px'});

    // $('#para_list').prop('disabled', true);

    $.ajax({
        url: "/get_latrine_type",
        type: "GET",
        data: { 'latrineList' : 'get_data'},
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == 'SUCCESS'){
                $('#table_div').removeClass('hide');
                $.each(data.message, function (i, v) {
                    insertTableRow(v.latrine_type_name, v.latrine_type_id);
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

});


function insertTableRow(center_name, center_id) {

    var appendString = '';
    var rowCount = $('#my_table > tbody > tr').length;
    rowCount++;

    // console.log(accountName);

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td style="width: 300px;text-align: left;">'+center_name+'</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="own" class="form-control count" value="" style="width: 150px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="shared" class="form-control count" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="total" class="form-control" value="" style="width: 100px;text-align: center;" placeholder="0" disabled>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="requried_latrine" class="form-control" value="" style="width: 200px;text-align: center;" placeholder="Write Comments">';
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

    xml_data = '<head>';

    $('#my_table > tbody > tr').each(function () {

        // var latrineType_id = $(this).attr('center_id');
        //$(this).closest('tr').find('td:eq(1)').text();
        var latrineType_name = $(this).find('td:eq(1)').text(); 
        
        var own = $(this).find('#own').val();
        var shared = $(this).find('#shared').val();
        var total = $(this).find('#total').val();
        var requried_latrine = $(this).find('#requried_latrine').val();

        // first binding data as xml string
        xml_data += '<row>';

        xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
        xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
        xml_data += '<para_id>' + para_id + '</para_id>';
        xml_data += '<para_name>' + para_name + '</para_name>';

        xml_data += '<latrineType_name>' + latrineType_name + '</latrineType_name>';

        xml_data += '<own>' + own + '</own>';
        xml_data += '<shared>' + shared + '</shared>';
        xml_data += '<total>' + total + '</total>';
        xml_data += '<requried_latrine>' + requried_latrine + '</requried_latrine>';

        xml_data += '<created_by>' + created_by + '</created_by>';

        xml_data += '</row>';
        
    });

    xml_data += '</head>';
    
    console.log(xml_data);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');

    $.ajax({
        url: "/store_sanitation1_info",
        type: "POST",
        data: { '_token' : token, 'xml_data' : xml_data },
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == 'SUCCESS'){
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#success_msg').html(data.message);
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
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

$(document).on('click', '#btn_store2', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var question1 = $('#question1').text().trim();
    var question2 = $('#question2').text().trim();
    var question3 = $('#question3').text().trim();

    var answer1 = $('#answer1').val();
    var answer2 = $('#answer2').val();
    var answer3 = $('#answer3').val();
    
    var xml_data = '<head>';

    xml_data += '<row>';
    xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
    xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
    xml_data += '<para_id>' + para_id + '</para_id>';
    xml_data += '<para_name>' + para_name + '</para_name>';
    xml_data += '<question>' + question1 + '</question>';
    xml_data += '<answer>' + answer1 + '</answer>';
    xml_data += '<created_by>' + created_by + '</created_by>';
    xml_data += '</row>';

    xml_data += '<row>';
    xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
    xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
    xml_data += '<para_id>' + para_id + '</para_id>';
    xml_data += '<para_name>' + para_name + '</para_name>';
    xml_data += '<question>' + question2 + '</question>';
    xml_data += '<answer>' + answer2 + '</answer>';
    xml_data += '<created_by>' + created_by + '</created_by>';
    xml_data += '</row>';

    xml_data += '<row>';
    xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
    xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
    xml_data += '<para_id>' + para_id + '</para_id>';
    xml_data += '<para_name>' + para_name + '</para_name>';
    xml_data += '<question>' + question3 + '</question>';
    xml_data += '<answer>' + answer3 + '</answer>';
    xml_data += '<created_by>' + created_by + '</created_by>';
    xml_data += '</row>';

    xml_data += '</head>';
    
    console.log(xml_data);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');

    $.ajax({
        url: "/store_sanitation2_info",
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

$(document).on('change', '.count', function () {

    var row = $(this).closest('tr'); 
    var total = 0;

    // current row and calculate the total
    row.find('.count').each(function () {
        var value = parseFloat($(this).val());
        if (!isNaN(value)) {
            total += value;
        }
    });

    row.find('#total').val(total);


});



