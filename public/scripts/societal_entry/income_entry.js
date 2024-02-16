


// document.title = 'Income Entry';

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
    appendString += '<input type="text" id="avg_per_house" class="form-control" name="avg_per_house" value="" style="width: 300px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="1to6" class="form-control" name="1to6" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="7to10" class="form-control" name="7to10" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="11to15" class="form-control" name="11to15" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="16to20" class="form-control" name="16to20" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="21to25" class="form-control" name="21to25" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="26to30" class="form-control" name="26to30" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="30up" class="form-control" name="30up" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="male" class="form-control" name="male" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="female" class="form-control" name="female" value="" style="width: 100px;text-align: center;" placeholder="0">';
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
    var errorMsg = '';

    xml_data = '<head>';

    $('#voucher_table > tbody > tr').each(function () {

        // var tr_comnty_id = $(this).attr('comnty_id');
        // var tr_comnty_name = $(this).find('td:eq(1)').text(); 
        //$(this).closest('tr').find('td:eq(1)').text();

        var community_id = $(this).find('#community_list option:selected').val();
        var community_name = $(this).find('#community_list option:selected').text();
        
        var avgPerHouse = $(this).find('#avg_per_house').val();
        var v_1to6 = $(this).find('#1to6').val();
        var v_7to10 = $(this).find('#7to10').val();
        var v_11to15 = $(this).find('#11to15').val();
        var v_16to20 = $(this).find('#16to20').val();
        var v_21to25 = $(this).find('#21to25').val();

        var v_26to30 = $(this).find('#26to30').val();
        var v_30Up = $(this).find('#30up').val();
        var v_male = $(this).find('#male').val();
        var v_female = $(this).find('#female').val();

        if(community_id == '' || community_id == undefined) {
            errorMsg = 'Please select community name at first...';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!!</p> <p>'+ errorMsg +'</p></span>');
            isValid = false;
        }
        else if(avgPerHouse=='' && v_7to10=='' && v_16to20=='' && v_26to30=='' && v_male=='' && v_female== '' && v_11to15== '' )
        {
            errorMsg = 'Please enter some value in a row.';
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

            xml_data += '<avgPerHouse>' + avgPerHouse + '</avgPerHouse>';
            xml_data += '<v_1to6>' + v_1to6 + '</v_1to6>';
            xml_data += '<v_7to10>' + v_7to10 + '</v_7to10>';
            xml_data += '<v_11to15>' + v_11to15 + '</v_11to15>';
            xml_data += '<v_16to20>' + v_16to20 + '</v_16to20>';

            xml_data += '<v_21to25>' + v_21to25 + '</v_21to25>';
            xml_data += '<v_26to30>' + v_26to30 + '</v_26to30>';
            xml_data += '<v_30Up>' + v_30Up + '</v_30Up>';
            xml_data += '<v_male>' + v_male + '</v_male>';
            xml_data += '<v_female>' + v_female + '</v_female>';

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
            url: "/store_income_info",
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

// Function to validate rows
function validateRows() {
    var isValid = true;

    $('#voucher_table tr').each(function(){
      var isEmpty = true;

      $(this).find('input, select').each(function(){
        if ($(this).is('input')) {
          if ($(this).val().trim() !== '') {
            isEmpty = false;
            return false; // Exit the loop if a non-empty input is found
          }
        } else if ($(this).is('select')) {
          if ($(this).val() !== '') {
            isEmpty = false;
            return false; // Exit the loop if a non-empty select option is found
          }
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




