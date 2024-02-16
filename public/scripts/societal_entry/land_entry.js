


document.title = 'Land Entry';

$(document).ready(function () {

    console.log("hello talha from js.."); 

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
    appendString += '<option value="" selected disabled> Select </option>';
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
    appendString += '<input type="text" id="Landless" class="form-control sub" name="Landless" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Self_owned" class="form-control sub" name="Self_owned" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Community_Land" class="form-control sub" name="Community_Land" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Lease" class="form-control sub" name="Lease" value="" style="width: 70px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Sharecropping" class="form-control sub" name="Sharecropping" value="" style="width: 90px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Occupation_Land" class="form-control total" name="Occupation_Land" value="" style="width: 80px;text-align: center;" placeholder="0" disabled>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Grove_Land" class="form-control" name="Grove_Land" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Valley" class="form-control" name="Valley" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Plain_Land" class="form-control" name="Plain_Land" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Hilly" class="form-control" name="Hilly" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Fringe" class="form-control" name="Fringe" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Mixed" class="form-control" name="Mixed" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="Profit" name="Profit" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="1">Self</option>';
    appendString += '<option value="2">Common</option>';
    appendString += '<option value="3">Partial</option>';
    appendString += '<option value="4">Ratio</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#voucher_table > tbody:last-child').append(appendString);
    
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
        //$(this).closest('tr').find('td:eq(1)').text();

        var community_id = $(this).find('#community_list option:selected').val();
        var community_name = $(this).find('#community_list option:selected').text();

        var Landless = $(this).find('#Landless').val();
        var Self_owned = $(this).find('#Self_owned').val();
        var Community_Land = $(this).find('#Community_Land').val();
        var Lease = $(this).find('#Lease').val();
        var Sharecropping = $(this).find('#Sharecropping').val();
        var Occupation_Land = $(this).find('#Occupation_Land').val();

        var Grove_Land = $(this).find('#Grove_Land').val();
        var Valley = $(this).find('#Valley').val();
        var Plain_Land = $(this).find('#Plain_Land').val();
        var Hilly = $(this).find('#Hilly').val();
        var Fringe = $(this).find('#Fringe').val();
        var Mixed = $(this).find('#Mixed').val();
        var ProfitVal = $(this).find('#Profit option:selected').val();
        var ProfitName = $(this).find('#Profit option:selected').text();

        if(community_id == '' || community_id == undefined){
            var errorMsg = 'Please select community name at first...';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!!</p> <p>'+ errorMsg +'</p></span>');
            isValid = false;
        }
        else if(Landless=='' && Self_owned=='' && Community_Land=='' && Lease=='' && Sharecropping=='' && Grove_Land== '' &&
            Valley== '' && Plain_Land == '' && Hilly == '' && Fringe== '' && Mixed== '' && ProfitVal == ''){
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

            xml_data += '<Landless>' + Landless + '</Landless>';
            xml_data += '<Self_owned>' + Self_owned + '</Self_owned>';
            xml_data += '<Community_Land>' + Community_Land + '</Community_Land>';
            xml_data += '<Lease>' + Lease + '</Lease>';
            xml_data += '<Sharecropping>' + Sharecropping + '</Sharecropping>';
            xml_data += '<Occupation_Land>' + Occupation_Land + '</Occupation_Land>';

            xml_data += '<Grove_Land>' + Grove_Land + '</Grove_Land>';
            xml_data += '<Valley>' + Valley + '</Valley>';
            xml_data += '<Plain_Land>' + Plain_Land + '</Plain_Land>';
            xml_data += '<Hilly>' + Hilly + '</Hilly>';
            xml_data += '<Fringe>' + Fringe + '</Fringe>';
            xml_data += '<Mixed>' + Mixed + '</Mixed>';
            xml_data += '<Profit>' + ProfitVal + '</Profit>';
            xml_data += '<ProfitName>' + ProfitName + '</ProfitName>';

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
            url: "/store_land_info",
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

$(document).on('change', '.sub', function () {

    var row = $(this).closest('tr'); 
    var total = 0;
    var grandTotal = 0;

    // current row and calculate the total
    row.find('.sub').each(function () {
        var value = parseFloat($(this).val());
        if (!isNaN(value)) {
            total += value;
        }
    });

    row.find('#Occupation_Land').val(total);

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



