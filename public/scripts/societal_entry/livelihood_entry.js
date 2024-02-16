


// document.title = 'Livelihood Entry';

$(document).ready(function () {

    console.log("hello talha.."); 

    insertTableRow();

    // myJson = {
    //     '001' : 'Chakma',
    //     '002' : 'Marma',
    //     '003' : 'Tripura',
    //     '004' : 'Mro',
    //     '005' : 'Tanchangya',
    //     '006' : 'Bawm',
    //     '007' : 'Chak',
    //     '008' : 'Khyang',
    //     '009' : 'Khumi',
    //     '010' : 'Lushai',
    //     '011' : 'Pankhua',
    //     '012' : 'Non-IPs',
    // };

    // var option = ' <option value="" selected disabled> Select Option</option>';
    // $.each(myJson, function(key, name) {
    //    option += '<option value="'+name+'">'+ name +'</option>';
    // });
    // $('#communityList').html(option);


});

$('#add_row').on('click', function () {
    insertTableRow();
});

$(document).on('click', '#btn_store2', function (event) {

    event.preventDefault();
    var token = $("meta[name='csrf-token']").attr("content");
    // var created_by = $('#userName').val();
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    // var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();
    var community = $('#community option:selected').text();

    var form = $('#my_form')[0];
    var formdata = new FormData(form);
    formdata.append("_token", token);
    formdata.append("watershed_id", watershed_id);
    formdata.append("watershed_name", watershed_name);
    // formdata.append("para_id", para_id);
    formdata.append("para_name", para_name);
    formdata.append("community", community);

    console.log(formdata);

    // clear model message value for every ajax call provide single accurate message
    $('#success_msg').html('');
    $('#error_msg').html('');

    $.ajax({
        url: "/store_livelihood_info",
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

function insertTableRow() {

    var appendString = '';
    var rowCount = $('#my_table > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    // appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="community_list" name="community_list" class="form-control resetSelect more" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select --</option>';
    appendString += '<option value="10010001">Chakma</option>';
    appendString += '<option value="10010002">Marma</option>';
    appendString += '<option value="10010003">Tripura</option>';
    appendString += '<option value="10010004">Mro</option>';
    appendString += '<option value="10010005">Tanchangya</option>';
    appendString += '<option value="10010006">Bawm</option>';
    appendString += '<option value="10010007">Chak</option>';
    appendString += '<option value="10010012">Khyang</option>';
    appendString += '<option value="10010008">Khumi</option>';
    appendString += '<option value="10010009">Lushai</option>';
    appendString += '<option value="10010010">Pankhua</option>';
    appendString += '<option value="10010011">Non-IPs</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="jhum_male" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="jhum_female" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="plain_land_male" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="plain_land_female" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="orchard_male" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="orchard_female" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fuel_wood_male" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fuel_wood_female" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="wage_labour_male" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="wage_labour_female" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="poultry_male" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="poultry_female" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="livestock_male" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="livestock_female" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="aquaculture_male" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="aquaculture_female" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="service_male" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="service_female" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="handicraft_male" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="handicraft_female" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="others_name" class="form-control" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="others_male" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="others_female" class="form-control" value="" style="width: 40px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    //appendString += '<td style="text-align: center;">';
    //appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i></button>';
    //appendString += '</td>';

    appendString += '</tr>';


    $('#my_table > tbody:last-child').append(appendString);
    removeTableRow();
}

$(document).on('click', '#btn_store', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var isValid = '';

    var xml_data = '<head>';

    $('#my_table > tbody > tr').each(function () {

        var community_id = $(this).find('#community_list option:selected').val();
        var community_name = $(this).find('#community_list option:selected').text();

        var jhum_male = $(this).find('#jhum_male').val();
        var jhum_female = $(this).find('#jhum_female').val();
        var plain_land_male = $(this).find('#plain_land_male').val();
        var plain_land_female = $(this).find('#plain_land_female').val();
        var orchard_male = $(this).find('#orchard_male').val();
        var orchard_female = $(this).find('#orchard_female').val();
        var fuel_wood_male = $(this).find('#fuel_wood_male').val();
        var fuel_wood_female = $(this).find('#fuel_wood_female').val();

        var wage_labour_male = $(this).find('#wage_labour_male').val();
        var wage_labour_female = $(this).find('#wage_labour_female').val();
        var poultry_male = $(this).find('#poultry_male').val();
        var poultry_female = $(this).find('#poultry_female').val();
        var livestock_male = $(this).find('#livestock_male').val();
        var livestock_female = $(this).find('#livestock_female').val();
        var aquaculture_male = $(this).find('#aquaculture_male').val();
        var aquaculture_female = $(this).find('#aquaculture_female').val();

        var service_male = $(this).find('#service_male').val();
        var service_female = $(this).find('#service_female').val();
        var handicraft_male = $(this).find('#handicraft_male').val();
        var handicraft_female = $(this).find('#handicraft_female').val();
        var others_name = $(this).find('#others_name').val();
        var others_male = $(this).find('#others_male').val();
        var others_female = $(this).find('#others_female').val();

        if(community_id == '' || community_id == undefined) {
            var errorMsg = 'Please select community name at first...';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!!</p> <p>'+ errorMsg +'</p></span>');
            isValid = false;
        }
        else if(jhum_male=='' && jhum_female=='' &&  plain_land_female=='' && orchard_male=='' && orchard_female== '' && fuel_wood_male== '' &&
            fuel_wood_female== '' && wage_labour_male == ''  && poultry_male== '' && livestock_male == '' &&
            livestock_female == '' && aquaculture_male == '' && service_male== '' && handicraft_male=='' ) {
            var errorMsg = 'Please enter some value in a row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else
        {
            isValid = true;

            xml_data += '<row>';
            xml_data += '<WatershedId>' + watershed_id + '</WatershedId>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<ParaId>' + para_id + '</ParaId>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<community_id>' + community_id + '</community_id>';
            xml_data += '<community_name>' + community_name + '</community_name>';

            xml_data += '<jhum_male>' + jhum_male + '</jhum_male>';
            xml_data += '<jhum_female>' + jhum_female + '</jhum_female>';
            xml_data += '<plain_land_male>' + plain_land_male + '</plain_land_male>';
            xml_data += '<plain_land_female>' + plain_land_female + '</plain_land_female>';
            xml_data += '<orchard_male>' + orchard_male + '</orchard_male>';
            xml_data += '<orchard_female>' + orchard_female + '</orchard_female>';
            xml_data += '<wage_labour_male>' + wage_labour_male + '</wage_labour_male>';
            xml_data += '<wage_labour_female>' + wage_labour_female + '</wage_labour_female>';
            xml_data += '<fuel_wood_male>' + fuel_wood_male + '</fuel_wood_male>';
            xml_data += '<fuel_wood_female>' + fuel_wood_female + '</fuel_wood_female>';

            xml_data += '<poultry_male>' + poultry_male + '</poultry_male>';
            xml_data += '<poultry_female>' + poultry_female + '</poultry_female>';
            xml_data += '<livestock_male>' + livestock_male + '</livestock_male>';
            xml_data += '<livestock_female>' + livestock_female + '</livestock_female>';
            xml_data += '<aquaculture_male>' + aquaculture_male + '</aquaculture_male>';
            xml_data += '<aquaculture_female>' + aquaculture_female + '</aquaculture_female>';
            xml_data += '<service_male>' + service_male + '</service_male>';
            xml_data += '<service_female>' + service_female + '</service_female>';

            xml_data += '<handicraft_male>' + handicraft_male + '</handicraft_male>';
            xml_data += '<handicraft_female>' + handicraft_female + '</handicraft_female>';
            xml_data += '<others_name>' + others_name + '</others_name>';
            xml_data += '<others_male>' + others_male + '</others_male>';
            xml_data += '<others_female>' + others_female + '</others_female>';

            xml_data += '<created_by>' + created_by + '</created_by>';
            xml_data += '</row>';
        }
    });

    xml_data += '</head>';

    console.log(xml_data);

    if(isValid)
    {
        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_livelihood_info",
            type: "POST",
            data: { '_token' : token, 'dataToSend' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
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



