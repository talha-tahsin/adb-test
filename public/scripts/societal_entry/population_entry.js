


// document.title = 'Entry Population';

$(document).ready(function () {

    console.log("hello talha.."); 

    // $('#para_list').prop('disabled', true);

    // $.ajax({
    //     url: "/get_watershedId",
    //     type: "GET",
    //     data: { 'watershed' : 'get_data' },
    //     dataType: "HTML",
    //     cache: false,
    //     success: function (data) {
    //         // console.log(data);
    //         $('#watershedId').html(data);
    //     },
    //     error: function(xhr, ajaxOptions, thrownError) {
    //         console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
    //     }
    // });


});

$('#add_row').on('click', function () {
    addMoreTableRow();
});

function insertTableRow() {

    var appendString = '';
    var rowCount = $('#voucher_table > tbody > tr').length;
    rowCount++;

    appendString += '<tr comnty_id="">';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    // appendString += '<td>';
    // appendString += '<input type="checkbox" class="checkbox" id="check" name="check" value="1" style="text-align: center;" >';
    // appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="community_list" name="community_list" class="form-control resetSelect more" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="m_under_5" class="form-control m_num validate" name="m_under_5" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="m_5_14" class="form-control m_num validate" name="m_5_14" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="m_15_19" class="form-control m_num validate" name="m_15_19" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="m_20_49" class="form-control m_num validate" name="m_20_49" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="m_50_65" class="form-control m_num" name="m_50_65" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="m_65_up" class="form-control m_num" name="m_65_up" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fe_under_5" class="form-control fe_num" name="fe_under_5" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fe_5_14" class="form-control fe_num" name="fe_5_14" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fe_15_19" class="form-control fe_num" name="fe_15_19" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fe_20_49" class="form-control fe_num" name="fe_20_49" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fe_50_65" class="form-control fe_num" name="fe_50_65" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fe_65_up" class="form-control fe_num" name="fe_65_up" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="m_total" class="form-control total" name="m_total" value="" style="width: 50px;text-align: center;" disabled>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fe_total" class="form-control total" name="fe_total" value="" style="width: 50px;text-align: center;" disabled>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="grandTotal" class="form-control " name="grandTotal" value="" style="width: 50px;text-align: center;" disabled>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="m_disable" class="form-control " name="m_disable" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fe_disable" class="form-control " name="fe_disable" value="" style="width: 50px;text-align: center;" placeholder="0">';
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

        // var rowCheckbox = $(this).find("#check").prop("checked");

        // var tr_comnty_id = $(this).attr('comnty_id');
        // var tr_comnty_name = $(this).find('td:eq(1)').text();
        // $(this).closest('tr').find('td:eq(1)').text();
        var community_id = $(this).find('#community_list option:selected').val();
        var community_name = $(this).find('#community_list option:selected').text();
        
        var m_under_5 = $(this).find('#m_under_5').val();
        var m_5_14 = $(this).find('#m_5_14').val();
        var m_15_19 = $(this).find('#m_15_19').val();
        var m_20_49 = $(this).find('#m_20_49').val();
        var m_50_65 = $(this).find('#m_50_65').val();
        var m_65_up = $(this).find('#m_65_up').val();

        var fe_under_5 = $(this).find('#fe_under_5').val();
        var fe_5_14 = $(this).find('#fe_5_14').val();
        var fe_15_19 = $(this).find('#fe_15_19').val();
        var fe_20_49 = $(this).find('#fe_20_49').val();
        var fe_50_65 = $(this).find('#fe_50_65').val();
        var fe_65_up = $(this).find('#fe_65_up').val();

        var m_total = $(this).find('#m_total').val();
        var fe_total = $(this).find('#fe_total').val();
        var grnd_total = $(this).find('#grandTotal').val();

        var m_disable = $(this).find('#m_disable').val();
        var fe_disable = $(this).find('#fe_disable').val();

        if(community_id == '' || community_id == undefined){
            var errorMsg = 'Please select community name at first...';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!!</p> <p>'+ errorMsg +'</p></span>');
            isValid = false;
        }
        else if(m_under_5=='' && m_5_14=='' && m_15_19=='' && m_20_49=='' && m_65_up =='' && fe_under_5 == '' &&
            fe_5_14 == '' && fe_20_49 == '' && fe_65_up == '' && m_disable == '' && fe_disable == ''){
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

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<ParaId>' + para_id + '</ParaId>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<CommunityName>' + community_name + '</CommunityName>';
            xml_data += '<MaleUnder5>' + m_under_5 + '</MaleUnder5>';
            xml_data += '<Male5to14>' + m_5_14 + '</Male5to14>';
            xml_data += '<Male15to19>' + m_15_19 + '</Male15to19>';
            xml_data += '<Male20to49>' + m_20_49 + '</Male20to49>';
            xml_data += '<Male50to65>' + m_50_65 + '</Male50to65>';
            xml_data += '<Male65Up>' + m_65_up + '</Male65Up>';

            xml_data += '<FemaleUnder5>' + fe_under_5 + '</FemaleUnder5>';
            xml_data += '<Female5to14>' + fe_5_14 + '</Female5to14>';
            xml_data += '<Female15to19>' + fe_15_19 + '</Female15to19>';
            xml_data += '<Female20to49>' + fe_20_49 + '</Female20to49>';
            xml_data += '<Female50to65>' + fe_50_65 + '</Female50to65>';
            xml_data += '<Female65Up>' + fe_65_up + '</Female65Up>';

            xml_data += '<Totalmale>' + m_total + '</Totalmale>';
            xml_data += '<TotalFemale>' + fe_total + '</TotalFemale>';
            xml_data += '<TotalPopulation>' + grnd_total + '</TotalPopulation>';

            xml_data += '<DisbaleMale>' + m_disable + '</DisbaleMale>';
            xml_data += '<DisabledFemale>' + fe_disable + '</DisabledFemale>';

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
            url: "/insert_populatioin_entry",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == "SUCCESS"){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#voucher_table td input[type=text]').val('');
                    $('#voucher_table td').find('.resetSelect').prop("selectedIndex", 0);
                    // $("#my_table1 td input[type='checkbox']").prop('checked', false);
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

// Function to validate rows
function validateRows() {
    var isValid = true;

    $('#voucher_table tr').each(function(){
      var isEmpty = true;
      $(this).find('td').each(function(){
        if ($(this).val().trim() !== '') {
          isEmpty = false;
          return false; // Exit the loop if a non-empty cell is found
        }
      });

      if (isEmpty) {
        isValid = false;
        return false; // Exit the loop if an empty row is found
      }
    });

    return isValid;
}

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

function addMoreTableRow() {

    var appendString = '';
    var rowCount = $('#voucher_table > tbody > tr').length;
    rowCount++;

    appendString += '<tr comnty_id="">';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    // appendString += '<td>';
    // appendString += '<input type="checkbox" class="checkbox" id="check" name="check" value="1" style="text-align: center;" >';
    // appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="community_list" name="community_list" class="form-control resetSelect more" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Chakma">Chakma</option>';
    appendString += '<option value="Marma">Marma</option>';
    appendString += '<option value="Tripura">Tripura</option>';
    appendString += '<option value="Mro">Mro</option>';
    appendString += '<option value="Tanchangya">Tanchangya</option>';
    appendString += '<option value="Bawm">Bawm</option>';
    appendString += '<option value="Chak">Chak</option>';
    appendString += '<option value="Khyang">Khyang</option>';
    appendString += '<option value="Khumi">Khumi</option>';
    appendString += '<option value="Lushai">Lushai</option>';
    appendString += '<option value="Pankhua">Pankhua</option>';
    appendString += '<option value="Non-IPs">Non-IPs</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="m_under_5" class="form-control m_num validate" name="m_under_5" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="m_5_14" class="form-control m_num validate" name="m_5_14" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="m_15_19" class="form-control m_num validate" name="m_15_19" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="m_20_49" class="form-control m_num validate" name="m_20_49" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="m_50_65" class="form-control m_num" name="m_50_65" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="m_65_up" class="form-control m_num" name="m_65_up" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fe_under_5" class="form-control fe_num" name="fe_under_5" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fe_5_14" class="form-control fe_num" name="fe_5_14" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fe_15_19" class="form-control fe_num" name="fe_15_19" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fe_20_49" class="form-control fe_num" name="fe_20_49" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fe_50_65" class="form-control fe_num" name="fe_50_65" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fe_65_up" class="form-control fe_num" name="fe_65_up" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="m_total" class="form-control total" name="m_total" value="" style="width: 50px;text-align: center;" disabled>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fe_total" class="form-control total" name="fe_total" value="" style="width: 50px;text-align: center;" disabled>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="grandTotal" class="form-control " name="grandTotal" value="" style="width: 50px;text-align: center;" disabled>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="m_disable" class="form-control " name="m_disable" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fe_disable" class="form-control " name="fe_disable" value="" style="width: 50px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#voucher_table > tbody:last-child').append(appendString);
    // $("#voucher_table tr:last").scrollintoview();
    removeTableRow();
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

function gotoUrl(path, params, method, target = ''){

    method = method || "post";
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);
    form.setAttribute("target", target);
    if (typeof params === 'string') {
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", 'data');
        hiddenField.setAttribute("value", params);
        form.appendChild(hiddenField);
    }
    else {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", key);
                if(typeof params[key] === 'object'){
                    hiddenField.setAttribute("value", JSON.stringify(params[key]));
                }
                else{
                    hiddenField.setAttribute("value", params[key]);
                }
                form.appendChild(hiddenField);
            }
        }
    }

    document.body.appendChild(form);
    form.submit();
}


