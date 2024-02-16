


// document.title = 'Occupation Entry';

$(document).ready(function () {

    console.log("hello talha.."); 

    // $('#para_list').prop('disabled', true);


});

$('#add_row').on('click', function () {
    insertTableRow();
});

function insertTableRow() {

    var appendString = '';
    var rowCount = $('#voucher_table > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

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
    appendString += '<input type="text" id="jhum" class="form-control" name="jhum" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="plain_land" class="form-control" name="plain_land" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="orchard" class="form-control" name="orchard" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fuel_wood" class="form-control" name="fuel_wood" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="wage_labour" class="form-control" name="wage_labour" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="poultry" class="form-control" name="poultry" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="livestock" class="form-control" name="livestock" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="aquaculture" class="form-control" name="aquaculture" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="service_holder" class="form-control" name="service_holder" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="business" class="form-control" name="business" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="handicraft" class="form-control" name="handicraft" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="others" class="form-control" name="others" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';


    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#voucher_table > tbody:last-child').append(appendString);
    // $("#voucher_table tr:last").scrollintoview();
    removeTableRow();
}

$(document).on('click', '#btn_store', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var xml_data = '';
    var isValid = '';

    xml_data = '<head>';

    $('#voucher_table > tbody > tr').each(function () {

        // var tr_comnty_id = $(this).attr('comnty_id');
        // var tr_comnty_name = $(this).find('td:eq(1)').text(); 
        // var items = $(this).closest('tr').find('td:eq(1)').text();

        var community_id = $(this).find('#community_list option:selected').val();
        var community_name = $(this).find('#community_list option:selected').text();
        
        var v_jhum = $(this).find('#jhum').val();
        var v_plainLand = $(this).find('#plain_land').val();
        var v_orchard = $(this).find('#orchard').val();
        var v_fuel = $(this).find('#fuel_wood').val();
        var v_wage = $(this).find('#wage_labour').val();

        var v_poultry = $(this).find('#poultry').val();
        var v_livestock = $(this).find('#livestock').val();
        var v_aquaculture = $(this).find('#aquaculture').val();
        var v_service_holder = $(this).find('#service_holder').val();
        var v_business = $(this).find('#business').val();
        var v_handicraft = $(this).find('#handicraft').val();
        var v_others = $(this).find('#others').val();

        if(community_id == '' || community_id == undefined) {
            var errorMsg = 'Please select community name at first...';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!!</p> <p>'+ errorMsg +'</p></span>');
            isValid = false;
        }
        else if(v_jhum=='' && v_plainLand=='' && v_orchard=='' && v_fuel=='' && v_poultry== '' && v_livestock== '' &&
            v_aquaculture== '' && v_service_holder == '' && v_business == '' && v_handicraft== '' && v_others== '' ) {
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

            xml_data += '<CommunityId>' + community_id + '</CommunityId>';
            xml_data += '<CommunityName>' + community_name + '</CommunityName>';

            xml_data += '<Jhum>' + v_jhum + '</Jhum>';
            xml_data += '<PlainLand>' + v_plainLand + '</PlainLand>';
            xml_data += '<Orchard>' + v_orchard + '</Orchard>';
            xml_data += '<FuelWood>' + v_fuel + '</FuelWood>';
            xml_data += '<WageLabour>' + v_wage + '</WageLabour>';

            xml_data += '<Poultry>' + v_poultry + '</Poultry>';
            xml_data += '<Livestock>' + v_livestock + '</Livestock>';
            xml_data += '<AquaCulture>' + v_aquaculture + '</AquaCulture>';
            xml_data += '<ServiceHolder>' + v_service_holder + '</ServiceHolder>';
            xml_data += '<Business>' + v_business + '</Business>';
            xml_data += '<HandiCraft>' + v_handicraft + '</HandiCraft>';
            xml_data += '<Others>' + v_others + '</Others>';

            xml_data += '<CreatedBy>' + created_by + '</CreatedBy>';

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
            url: "/store_occupation_info",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#voucher_table td input[type=text]').val('');
                    $('#voucher_table td').find('.resetSelect').prop("selectedIndex", 0);
                    // alert(data.message);
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

$.ajax({
    url: "/get_community_list",
    type: "GET",
    data: { 'community_list' : 'get_data' },
    dataType: "html",
    cache: false,
    success: function (data) {
        // console.log(data);
        $('#community_list').html(data);
    },
    error: function(xhr, ajaxOptions, thrownError) {
        console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
    }
});




