


// document.title = 'Education Part 2 Entry';

$(document).ready(function () {

    // console.log("hello form script .."); 

    // $('#para_list').prop('disabled', true);

    insertTableRow();

    // $.ajax({
    //     url: "/get_training_list",
    //     type: "GET",
    //     data: { 'training_list' : 'get_data' },
    //     dataType: "JSON",
    //     cache: false,
    //     success: function (data) {
    //         console.log(data);
    //         $('#table_div').removeClass('hide');
    //         $.each(data.message, function (i, v) {
    //             insertTableRow(v.training_name, v.training_id);
    //         });
    //     },
    //     error: function(xhr, ajaxOptions, thrownError) {
    //         console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
    //     }
    // });

   

});

$('#radioDiv input[type=radio]').change(function(){
    if($(this).val() == '0'){
        $('#alt_income_training').prop('disabled', true);
    }
    else {
        $('#alt_income_training').prop('disabled', false);
    }

});

$('#add_row').on('click', function(){
    insertTableRow();
})

function insertTableRow() {

    var appendString = '';
    var rowCount = $('#training_table > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="training_name" name="training_name" class="form-control resetSelect" value="" style="width: 500px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Climate change adaptation">Climate change adaptation</option>';
    appendString += '<option value="Livestock and poultry rearing">Livestock and poultry rearing</option>';
    appendString += '<option value="Aquaculture">Aquaculture</option>';
    appendString += '<option value="Production mechanism">Production mechanism</option>';
    appendString += '<option value="Processing, marketing and quality control">Processing, marketing and quality control</option>';
    appendString += '<option value="Livelihood diversification">Livelihood diversification</option>';
    appendString += '<option value="Agriculture training from DAE/DAE/AIS/DAM/BADC/SRD">Agriculture training from DAE/DAE/AIS/DAM/BADC/SRD</option>';
    appendString += '<option value="Use of technology for marketing/sale goods">Use of technology for marketing/sale goods</option>';
    appendString += '<option value="Forestry and sustainable land use related training from forest dept.">Forestry and sustainable land use related training from forest dept.</option>';
    appendString += '<option value="Field level demonstration of agro-forestry">Field level demonstration of agro-forestry</option>';
    appendString += '<option value="VCF Conservation">VCF Conservation</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="training_receive" class="form-control" value="" style="width: 180px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="is_useful" name="is_useful" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled>-- Select Option --</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="is_future" name="is_future" class="form-control resetSelect" value="" style="width: 250px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select </option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="women_percentage" class="form-control" value="" style="width: 200px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="trainig_provided" name="trainig_provided" class="form-control resetSelect" value="" style="width: 250px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Govt">Govt</option>';
    appendString += '<option value="NGO">NGO</option>';
    appendString += '<option value="Development partner">Development partner</option>';
    appendString += '<option value="VCF Network/Para Center">VCF Network/Para Center</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#training_table > tbody:last-child').append(appendString);
    removeTableRow();
}

$(document).on('click', '#btn_store1', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var dataToSend = '';
    var isValid = 0;

    $('#error_msg').html('');

    dataToSend = '<head>';

    $('#training_table > tbody > tr').each(function () {
   
        //$(this).closest('tr').find('td:eq(1)').text();
        var training_name = $(this).find('#training_name option:selected').val(); 
        
        var training_receive = $(this).find('#training_receive').val();
        var is_useful = $(this).find('#is_useful option:selected').val();
        var in_future = $(this).find('#is_future option:selected').val();
        var women_percentage = $(this).find('#women_percentage').val();

        var trainig_provided = $(this).find('#trainig_provided option:selected').val();

        if(training_receive == '' && women_percentage == '' && trainig_provided == '') {
            var errorMsg = 'Please enter some value for all visible row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else
        {
            isValid = true;

            dataToSend += '<row>';
            dataToSend += '<watershed_id>' + watershed_id + '</watershed_id>';
            dataToSend += '<watershed_name>' + watershed_name + '</watershed_name>';
            dataToSend += '<para_id>' + para_id + '</para_id>';
            dataToSend += '<para_name>' + para_name + '</para_name>';
        
            dataToSend += '<training_name>' + training_name + '</training_name>';

            dataToSend += '<training_receive>' + training_receive + '</training_receive>';
            dataToSend += '<is_useful>' + is_useful + '</is_useful>';
            dataToSend += '<in_future>' + in_future + '</in_future>';
            dataToSend += '<women_percentage>' + women_percentage + '</women_percentage>';

            dataToSend += '<trainig_provided>' + trainig_provided + '</trainig_provided>';
            // dataToSend += '<ngo>' + ngo + '</ngo>';
            // dataToSend += '<developer>' + developer + '</developer>';
            // dataToSend += '<vcf_or_para_center>' + vcf_or_para_center + '</vcf_or_para_center>';

            dataToSend += '<created_by>' + created_by + '</created_by>';

            dataToSend += '</row>';
        }

    });

    dataToSend += '</head>';

    console.log(dataToSend);

    if(isValid)
    {
        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_livelihood_training_info",
            type: "POST",
            data: { '_token' : token, 'dataToSend' : dataToSend },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#training_table td input[type=text]').val('');
                    $('#training_table td input[type=checkbox]').prop('checked', false);
                    $('#training_table td').find('.resetSelect').prop("selectedIndex", 0);
                }
                else{
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#error_msg').html('<span style="color: red;">'+data.message+'</span>');
                }
                
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }
     


});

$(document).on('click', '#add_other', function () {

    $("#otherDiv").toggle();
    $("#myTableOther tbody").empty();

    var appendString = '';
    var rowCount = $('#myTableOther > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="other_name" class="form-control" value="" style="width: 400px;text-align: left;" placeholder="Write the other name here..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="training_receive" class="form-control" value="" style="width: 180px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="is_useful" name="is_useful" class="form-control resetSelect" value="" style="width: 180px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled>-- Select Option --</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="is_future" name="is_future" class="form-control resetSelect" value="" style="width: 280px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select </option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="women_percentage" class="form-control" value="" style="width: 250px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="trainig_provided" name="trainig_provided" class="form-control resetSelect" value="" style="width: 250px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Govt">Govt</option>';
    appendString += '<option value="NGO">NGO</option>';
    appendString += '<option value="Development partner">Development partner</option>';
    appendString += '<option value="VCF Network/Para Center">VCF Network/Para Center</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#myTableOther > tbody:last-child').append(appendString);
    // $("#voucher_table tr:last").scrollintoview();
    // removeTableRow();

});

$(document).on('click', '#btn_other1', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var dataToSend = '';
    var isValid = 0;

    $('#error_msg').html('');

    dataToSend = '<head>';

    $('#myTableOther > tbody > tr').each(function () {
   
        //$(this).closest('tr').find('td:eq(1)').text();
        var training_name = $(this).find('#other_name').val(); 
        
        var training_receive = $(this).find('#training_receive').val();
        var is_useful = $(this).find('#is_useful option:selected').val();
        var in_future = $(this).find('#is_future option:selected').val();
        var women_percentage = $(this).find('#women_percentage').val();

        var trainig_provided = $(this).find('#trainig_provided option:selected').val();

        if(training_receive == '' && women_percentage == '' && trainig_provided == '') {
            var errorMsg = 'Please enter some value for all visible row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else
        {
            isValid = true;

            dataToSend += '<row>';
            dataToSend += '<watershed_id>' + watershed_id + '</watershed_id>';
            dataToSend += '<watershed_name>' + watershed_name + '</watershed_name>';
            dataToSend += '<para_id>' + para_id + '</para_id>';
            dataToSend += '<para_name>' + para_name + '</para_name>';
        
            dataToSend += '<training_name>' + training_name + '</training_name>';

            dataToSend += '<training_receive>' + training_receive + '</training_receive>';
            dataToSend += '<is_useful>' + is_useful + '</is_useful>';
            dataToSend += '<in_future>' + in_future + '</in_future>';
            dataToSend += '<women_percentage>' + women_percentage + '</women_percentage>';

            dataToSend += '<trainig_provided>' + trainig_provided + '</trainig_provided>';

            dataToSend += '<created_by>' + created_by + '</created_by>';

            dataToSend += '</row>';
        }

    });

    dataToSend += '</head>';

    console.log(dataToSend);

    if(isValid)
    {
        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/update_livelihood_generation_other_option",
            type: "POST",
            data: { '_token' : token, 'dataToSend' : dataToSend },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#myTableOther td input[type=text]').val('');
                    $('#myTableOther td input[type=checkbox]').prop('checked', false);
                    $('#myTableOther td').find('.resetSelect').prop("selectedIndex", 0);
                }
                else{
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#error_msg').html('<span style="color: red;">'+data.message+'</span>');
                }
                
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }
     


});

$(document).on('click', '#btn_store2', function (event) {

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
        url: "/store_altr_income_training",
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
                $('#alt_income_training').val('');
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
        $('#training_table > tbody > tr').each(function () {
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



