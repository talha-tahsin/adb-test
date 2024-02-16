


// document.title = 'map-wise: first ground truth';

$(document).ready(function () {

    // console.log("hello talha23..");
    
    // var userNm = $('#userName').val();
    insertTableRow1();
    insertTableRow2();

});

$('#add_row').on('click', function () {
    insertTableRow1();
});

function insertTableRow1() {

    var appendString = '';
    var rowCount = $('#my_table > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="longitude_east" name="longitude_east" class="form-control" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="longitude_north" name="longitude_north" class="form-control" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="elevation" name="elevation" class="form-control" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select id="map_code" name="map_code" class="form-control resetSelect" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Forest Tree Dominated Area (F)">Forest Tree Dominated Area (F)</option>';
    appendString += '<option value="Herb/Shrub Dominated Area (Hs)">Herb/Shrub Dominated Area (Hs)</option>';
    appendString += '<option value="Orchard (O)">Orchard (O)</option>';
    appendString += '<option value="Shifting Cultivation (Sc)">Shifting Cultivation (Sc)</option>';
    appendString += '<option value="Crop Land (Cr)">Crop Land (Cr)</option>';
    appendString += '<option value="Lake (L)">Lake (L)</option>';
    appendString += '<option value="Baor (B)">Baor (B)</option>';
    appendString += '<option value="Rivers and Khals (R)">Rivers and Khals (R)</option>';
    appendString += '<option value="Ponds (P)">Ponds (P)</option>';
    appendString += '<option value="Aquaculture (A)">Aquaculture (A)</option>';
    appendString += '<option value="Rural Settlement (Rs)">Rural Settlement (Rs)</option>';
    appendString += '<option value="Brickfield (Br)">Brickfield (Br)</option>';
    appendString += '<option value="Helipad (Hp)">Helipad (Hp)</option>';
    appendString += '<option value="Road (Rd)">Road (Rd)</option>';
    appendString += '<option value="Sand (Sd)">Sand (Sd)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select id="observed_code" name="observed_code" class="form-control resetSelect" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Forest Tree Dominated Area (F)">Forest Tree Dominated Area (F)</option>';
    appendString += '<option value="Herb/Shrub Dominated Area (Hs)">Herb/Shrub Dominated Area (Hs)</option>';
    appendString += '<option value="Orchard (O)">Orchard (O)</option>';
    appendString += '<option value="Shifting Cultivation (Sc)">Shifting Cultivation (Sc)</option>';
    appendString += '<option value="Crop Land (Cr)">Crop Land (Cr)</option>';
    appendString += '<option value="Lake (L)">Lake (L)</option>';
    appendString += '<option value="Baor (B)">Baor (B)</option>';
    appendString += '<option value="Rivers and Khals (R)">Rivers and Khals (R)</option>';
    appendString += '<option value="Ponds (P)">Ponds (P)</option>';
    appendString += '<option value="Aquaculture (A)">Aquaculture (A)</option>';
    appendString += '<option value="Rural Settlement (Rs)">Rural Settlement (Rs)</option>';
    appendString += '<option value="Brickfield (Br)">Brickfield (Br)</option>';
    appendString += '<option value="Helipad (Hp)">Helipad (Hp)</option>';
    appendString += '<option value="Road (Rd)">Road (Rd)</option>';
    appendString += '<option value="Sand (Sd)">Sand (Sd)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="gcp_type" name="gcp_type" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Mandatory">Mandatory</option>';
    appendString += '<option value="Shifted">Shifted</option>';
    appendString += '<option value="Accuracy">Accuracy </option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="photo_id" name="photo_id" class="form-control" value="" style="width: 100px;text-align: center;" placeholder="0">';
    // appendString += '<input type="file" class="" id="up_image" name="up_image" accept="image/x-png,image/jpg,image/jpeg,image/heif,image/heic" autocomplete="off" style="width: 200px;text-align: left;">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="drive_link" name="drive_link" class="form-control" value="" style="width: 350px;text-align: left;" placeholder="Please paste the drive link">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="photo_aspect" name="photo_aspect" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="East">East</option>';
    appendString += '<option value="West">West</option>';
    appendString += '<option value="North">North</option>';
    appendString += '<option value="South">South</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table > tbody:last-child').append(appendString);
    // $("#my_table tr:last").scrollintoview();
    removeTableRow();
}

$(document).on('click', '#btn_store1', function () {

    // event.preventDefault();
    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var map_unit = $('#map_unit').val();
    var area_of_map_unit = $('#area_of_map_unit').val();

    var sendData = '';
    var isValid = '';

    sendData = '<head>';

    $('#my_table > tbody > tr').each(function () {
        
        // var sample = $(this).closest('tr').find('td:eq(1)').text();
        var longitude_east = $(this).find('#longitude_east').val();
        var longitude_north = $(this).find('#longitude_north').val();
        var elevation = $(this).find('#elevation').val();
        var map_code = $(this).find('#map_code option:selected').val();
        var observed_code = $(this).find('#observed_code option:selected').val();
        var gcp_type = $(this).find('#gcp_type option:selected').val();
        var photo_id = $(this).find('#photo_id').val();
        var drive_link = $(this).find('#drive_link').val();
        var photo_aspect = $(this).find('#photo_aspect option:selected').val();

        if(longitude_east == '' && elevation == '' && map_code == '' && observed_code == '' && gcp_type == '' && photo_aspect == '') {
            var errorMsg = 'Please enter some value in all visible row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else
        {
            isValid = true;

            // first binding data as xml string
            sendData += '<row>';
            sendData += '<watershed_id>' + watershed_id + '</watershed_id>';
            sendData += '<watershed_name>' + watershed_name + '</watershed_name>';

            sendData += '<map_unit>' + map_unit + '</map_unit>';
            sendData += '<areaOf_map_unit>' + area_of_map_unit + '</areaOf_map_unit>';
            sendData += '<longitude_east>' + longitude_east + '</longitude_east>';
            sendData += '<longitude_north>' + longitude_north + '</longitude_north>';
            sendData += '<elevation>' + elevation + '</elevation>';
            sendData += '<map_code>' + map_code + '</map_code>';
            sendData += '<observed_code>' + observed_code + '</observed_code>';
            sendData += '<gcp_type>' + gcp_type + '</gcp_type>';
            sendData += '<photo_id>' + photo_id + '</photo_id>';
            sendData += '<drive_link>' + drive_link + '</drive_link>';
            sendData += '<photo_aspect>' + photo_aspect + '</photo_aspect>';

            sendData += '<created_by>' + created_by + '</created_by>';

            sendData += '</row>';
        }
        
    });

    sendData += '</head>';

    console.log(sendData);

    if(isValid) {

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_first_ground_truth",
            type: "POST",
            data: { '_token' : token, 'dataToSend' : sendData },
            dataType: "json",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == "SUCCESS"){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table td input[type=text]').val('');
                    $('#my_table td').find('.resetSelect').prop("selectedIndex", 0);
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

function insertTableRow2() {

    var appendString = '';
    var rowCount = $('#my_table2 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="longitude_east2" name="longitude_east2" class="form-control" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="longitude_north2" name="longitude_north2" class="form-control" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="elevation2" name="elevation2" class="form-control" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select id="map_code2" name="map_code2" class="form-control resetSelect" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Forest Tree Dominated Area (F)">Forest Tree Dominated Area (F)</option>';
    appendString += '<option value="Herb/Shrub Dominated Area (Hs)">Herb/Shrub Dominated Area (Hs)</option>';
    appendString += '<option value="Orchard (O)">Orchard (O)</option>';
    appendString += '<option value="Shifting Cultivation (Sc)">Shifting Cultivation (Sc)</option>';
    appendString += '<option value="Crop Land (Cr)">Crop Land (Cr)</option>';
    appendString += '<option value="Lake (L)">Lake (L)</option>';
    appendString += '<option value="Baor (B)">Baor (B)</option>';
    appendString += '<option value="Rivers and Khals (R)">Rivers and Khals (R)</option>';
    appendString += '<option value="Ponds (P)">Ponds (P)</option>';
    appendString += '<option value="Aquaculture (A)">Aquaculture (A)</option>';
    appendString += '<option value="Rural Settlement (Rs)">Rural Settlement (Rs)</option>';
    appendString += '<option value="Brickfield (Br)">Brickfield (Br)</option>';
    appendString += '<option value="Helipad (Hp)">Helipad (Hp)</option>';
    appendString += '<option value="Road (Rd)">Road (Rd)</option>';
    appendString += '<option value="Sand (Sd)">Sand (Sd)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select id="observed_code2" name="observed_code2" class="form-control resetSelect" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Forest Tree Dominated Area (F)">Forest Tree Dominated Area (F)</option>';
    appendString += '<option value="Herb/Shrub Dominated Area (Hs)">Herb/Shrub Dominated Area (Hs)</option>';
    appendString += '<option value="Orchard (O)">Orchard (O)</option>';
    appendString += '<option value="Shifting Cultivation (Sc)">Shifting Cultivation (Sc)</option>';
    appendString += '<option value="Crop Land (Cr)">Crop Land (Cr)</option>';
    appendString += '<option value="Lake (L)">Lake (L)</option>';
    appendString += '<option value="Baor (B)">Baor (B)</option>';
    appendString += '<option value="Rivers and Khals (R)">Rivers and Khals (R)</option>';
    appendString += '<option value="Ponds (P)">Ponds (P)</option>';
    appendString += '<option value="Aquaculture (A)">Aquaculture (A)</option>';
    appendString += '<option value="Rural Settlement (Rs)">Rural Settlement (Rs)</option>';
    appendString += '<option value="Brickfield (Br)">Brickfield (Br)</option>';
    appendString += '<option value="Helipad (Hp)">Helipad (Hp)</option>';
    appendString += '<option value="Road (Rd)">Road (Rd)</option>';
    appendString += '<option value="Sand (Sd)">Sand (Sd)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="gcp_type2" name="gcp_type2" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Mandatory">Mandatory</option>';
    appendString += '<option value="Shifted">Shifted</option>';
    appendString += '<option value="Accuracy">Accuracy </option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="photo_id2" name="photo_id2" class="form-control" value="" style="width: 100px;text-align: center;" placeholder="0">';
    // appendString += '<input type="file" class="" id="up_image" name="up_image" accept="image/x-png,image/jpg,image/jpeg,image/heif,image/heic" autocomplete="off" style="width: 200px;text-align: left;">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="drive_link2" name="drive_link2" class="form-control" value="" style="width: 350px;text-align: left;" placeholder="Please paste the drive link">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="photo_aspect2" name="photo_aspect2" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="East">East</option>';
    appendString += '<option value="West">West</option>';
    appendString += '<option value="North">North</option>';
    appendString += '<option value="South">South</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table2 > tbody:last-child').append(appendString);
    // $("#my_table tr:last").scrollintoview();
    removeTableRow2();
}

$(document).on('click', '#btn_store2', function () {

    // event.preventDefault();
    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var map_unit = $('#map_unit').val();
    var area_of_map_unit = $('#area_of_map_unit').val();

    var sendData = '';

    sendData = '<head>';

    $('#my_table2 > tbody > tr').each(function () {
        
        // var sample = $(this).closest('tr').find('td:eq(1)').text();
        var longitude_east = $(this).find('#longitude_east2').val();
        var longitude_north = $(this).find('#longitude_north2').val();
        var elevation = $(this).find('#elevation2').val();
        var map_code = $(this).find('#map_code2 option:selected').val();
        var observed_code = $(this).find('#observed_code2 option:selected').val();
        var gcp_type = $(this).find('#gcp_type2 option:selected').val();
        var photo_id = $(this).find('#photo_id2').val();
        var drive_link = $(this).find('#drive_link2').val();
        var photo_aspect = $(this).find('#photo_aspect2 option:selected').val();

        // automation set value 0 if any field leave empty or null 
        if(longitude_east == '' || longitude_east == null || longitude_east == undefined) longitude_east = 0;
        if(longitude_north == '' || longitude_north == null || longitude_north == undefined) longitude_north = 0;
        if(elevation == '' || elevation == null || elevation == undefined) elevation = 0;
        if(map_code == '' || map_code == null || map_code == undefined) map_code = 0;
        if(observed_code == '' || observed_code == null || observed_code == undefined) observed_code = 0;
        if(gcp_type == '' || gcp_type == null || gcp_type == undefined) gcp_type = 0;
        if(photo_id == '' || photo_id == null || photo_id == undefined) photo_id = 0;
        if(photo_aspect == '' || photo_aspect == null || photo_aspect == undefined) photo_aspect = 0;

        // first binding data as xml string
        sendData += '<row>';

        sendData += '<watershed_id>' + watershed_id + '</watershed_id>';
        sendData += '<watershed_name>' + watershed_name + '</watershed_name>';

        sendData += '<map_unit>' + map_unit + '</map_unit>';
        sendData += '<areaOf_map_unit>' + area_of_map_unit + '</areaOf_map_unit>';

        sendData += '<longitude_east>' + longitude_east + '</longitude_east>';
        sendData += '<longitude_north>' + longitude_north + '</longitude_north>';
        sendData += '<elevation>' + elevation + '</elevation>';
        sendData += '<map_code>' + map_code + '</map_code>';
        sendData += '<observed_code>' + observed_code + '</observed_code>';
        sendData += '<gcp_type>' + gcp_type + '</gcp_type>';
        sendData += '<photo_id>' + photo_id + '</photo_id>';
        sendData += '<drive_link>' + drive_link + '</drive_link>';
        sendData += '<photo_aspect>' + photo_aspect + '</photo_aspect>';

        sendData += '<created_by>' + created_by + '</created_by>';

        sendData += '</row>';
        
    });

    sendData += '</head>';

    
    console.log(sendData);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');

    $.ajax({
        url: "/store_second_ground_truth",
        type: "POST",
        data: { '_token' : token, 'dataToSend' : sendData },
        dataType: "json",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == "SUCCESS"){
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

$('#add_row2').on('click', function () {
    insertTableRow2();
});

function removeTableRow() {

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();
        var sl = 1;
        $('#my_table > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

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

function removeTableRow2() {

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();
        var sl = 1;
        $('#my_table2 > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

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




