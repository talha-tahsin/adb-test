


// document.title = 'Livestock Entry';

$(document).ready(function () {

    console.log("hello talha..");
    // $('#watershedId').select2();
    // $('.select2').css({'border': '2px solid #898AEE', 'border-radius': '5px'});
    // $('#para_list').prop('disabled', true);
    
    $(document).on('change', '#watershedId', function(){
        $("#watershedId").siblings().children().children().css('background-color', 'transparent');
    });

    $(document).on('change', '#para_list', function(){
        $("#para_list").siblings().children().children().css('background-color', 'transparent');
    });

    insertTableRow2();
    insertTableRow3();
    insertTableRow4();
    insertTableRow5();

    insertTableRow6();
    insertTableRow8();
    insertTableRow9();
    // insertTableRow10();

    myTable7 = {
        '001' : 'Will you be interested in shifting to S.A.L.T or P.A.F.S (Pine apple agroforestry system) technologies from current production scheme?',
        '002' : 'How likely do you shift from Jhum to other sustainable agro-forestry practices if it has prospects of economic benefits with environmental sustainability?',
        '003' : 'Do you prefer adopting community cooperatives practices for combined sustainable farming',
        '004' : 'How much do you think your cultivation practices negatively affect soil health, forest, and ecology? ',
    };

    $.each(myTable7, function(key, value) {
        insertTableRow7(value);
    });

    // var option5 = ' <option value="" selected disabled> Select Option</option>';
    // $.each(myTable4, function(key, name) {
    //    option5 += '<option value="'+name+'">'+name+'</option>';
    // });
    // $('#jhum_type').html(option5);

});


$('#add_row2').on('click', function(){
    insertTableRow2();
});
$('#add_row3').on('click', function(){
    insertTableRow3();
});
$('#add_row4').on('click', function(){
    insertTableRow4();
});

$('#add_row5').on('click', function(){
    insertTableRow5();
});

$('#add_row6').on('click', function(){
    insertTableRow6();
});

$('#add_row8').on('click', function(){
    insertTableRow8();
});
$('#add_row9').on('click', function(){
    insertTableRow9();
});


function insertTableRow2() {

    var appendString = '';
    var rowCount = $('#my_table2 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="consumed_good" class="form-control resetSelect" value="" style="width: 250px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Rice">Rice</option>';
    appendString += '<option value="Pulses">Pulses</option>';
    appendString += '<option value="Fish">Fish</option>';
    appendString += '<option value="Dry Fish">Dry Fish</option>';
    appendString += '<option value="Meat">Meat</option>';
    appendString += '<option value="Vegetable">Vegetable</option>';
    appendString += '<option value="Fruits">Fruits</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="avg_numberOf_persons_in_household" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="monthly_need" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="monthly_ability_to_buyOr_source" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="storage_facility_availability" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="max_num_Of_days_stored" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="consumption_frequency" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Daily">Daily</option>';
    appendString += '<option value="Bi-Weekly">Bi-Weekly</option>';
    appendString += '<option value="Fortnightly">Fortnightly</option>';
    appendString += '<option value="Monthly/Occasionally">Monthly/Occasionally</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table2 > tbody:last-child').append(appendString);
    
    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table2 > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store2', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    if(watershed_id == '' || watershed_id == null || watershed_id == undefined){
        alert("Please Select Watershed id first....");
        $("#watershedId").siblings().children().children().css('background-color', '#FFCECE');
    }
    else
    {

        xml_data = '<head>';

        $('#my_table2 > tbody > tr').each(function () {

            // var livestock_name = $(this).find('td:eq(1)').text(); 
            
            var consumed_good = $(this).find('#consumed_good option:selected').val();
            var avg_numberOf_persons_in_household = $(this).find('#avg_numberOf_persons_in_household').val();
            var monthly_ability_to_buyOr_source = $(this).find('#monthly_ability_to_buyOr_source').val();
            var storage_facility_availability = $(this).find('#storage_facility_availability').val();
            var max_num_Of_days_stored = $(this).find('#max_num_Of_days_stored').val();
            var consumption_frequency = $(this).find('#consumption_frequency').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<consumed_good>' + consumed_good + '</consumed_good>';
            xml_data += '<avg_numberOf_persons_in_household>' + avg_numberOf_persons_in_household + '</avg_numberOf_persons_in_household>';
            xml_data += '<monthly_ability_to_buyOr_source>' + monthly_ability_to_buyOr_source + '</monthly_ability_to_buyOr_source>';
            xml_data += '<storage_facility_availability>' + storage_facility_availability + '</storage_facility_availability>';
            xml_data += '<max_num_Of_days_stored>' + max_num_Of_days_stored + '</max_num_Of_days_stored>';
            xml_data += '<consumption_frequency>' + consumption_frequency + '</consumption_frequency>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_existing_cropping_pattern",
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

function insertTableRow3() {

    var appendString = '';
    var rowCount = $('#my_table3 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="product_name" class="form-control" value="" style="width: 120px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="pre_production" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="shelter_preparation" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="rearing" class="form-control resetSelect" value="" style="width: 140px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="showing_seeds" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="weeding" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="fertilizer_and_pesticides_apply" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="harvesting" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="processing" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="selling" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="women_involved_scope_activities" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';

    $('#my_table3 > tbody:last-child').append(appendString);
    removeTableRow3();
}
function removeTableRow3() {

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table3 > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store3', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    if(watershed_id == '' || watershed_id == null || watershed_id == undefined){
        alert("Please Select Watershed id first....");
        $("#watershedId").siblings().children().children().css('background-color', '#FFCECE');
    }
    else
    {
        xml_data = '<head>';

        $('#my_table3 > tbody > tr').each(function () {
            
            var product_name = $(this).find('#product_name').val();
            var pre_production = $(this).find('#pre_production option:selected').val();
            var shelter_preparation = $(this).find('#shelter_preparation option:selected').val();
            var rearing = $(this).find('#rearing option:selected').val();
            var showing_seeds = $(this).find('#showing_seeds option:selected').val();
            var weeding = $(this).find('#weeding option:selected').val();

            var rearing = $(this).find('#rearing option:selected').val();
            var fertilizer_and_pesticides_apply = $(this).find('#fertilizer_and_pesticides_apply option:selected').val();
            var harvesting = $(this).find('#harvesting option:selected').val();
            var processing = $(this).find('#processing option:selected').val();
            var selling = $(this).find('#selling option:selected').val();
            var women_involved_scope_activities = $(this).find('#women_involved_scope_activities').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<product_name>' + product_name + '</product_name>';
            xml_data += '<pre_production>' + pre_production + '</pre_production>';
            xml_data += '<shelter_preparation>' + shelter_preparation + '</shelter_preparation>';
            xml_data += '<rearing>' + rearing + '</rearing>';
            xml_data += '<showing_seeds>' + showing_seeds + '</showing_seeds>';
            xml_data += '<weeding>' + weeding + '</weeding>';

            xml_data += '<fertilizer_and_pesticides_apply>' + fertilizer_and_pesticides_apply + '</fertilizer_and_pesticides_apply>';
            xml_data += '<harvesting>' + harvesting + '</harvesting>';
            xml_data += '<processing>' + processing + '</processing>';
            xml_data += '<selling>' + selling + '</selling>';
            xml_data += '<women_involved_scope_activities>' + women_involved_scope_activities + '</women_involved_scope_activities>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_women_livelihood_activity_involvement",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
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
    }   



});

function insertTableRow4() {

    var appendString = '';
    var rowCount = $('#my_table4 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="product_name" class="form-control" value="" style="width: 120px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="pre_production" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="shelter_preparation" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="rearing" class="form-control resetSelect" value="" style="width: 140px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="showing_seeds" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="weeding" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="fertilizer_and_pesticides_apply" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="harvesting" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="processing" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="selling" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="youth_involved_scope_activities" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';

    $('#my_table4 > tbody:last-child').append(appendString);
    removeTableRow4();
}
function removeTableRow4() {

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table4 > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store4', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    if(watershed_id == '' || watershed_id == null || watershed_id == undefined){
        alert("Please Select Watershed id first....");
        $("#watershedId").siblings().children().children().css('background-color', '#FFCECE');
    }
    else
    {
        xml_data = '<head>';

        $('#my_table4 > tbody > tr').each(function () {
            
            var product_name = $(this).find('#product_name').val();
            var pre_production = $(this).find('#pre_production option:selected').val();
            var shelter_preparation = $(this).find('#shelter_preparation option:selected').val();
            var rearing = $(this).find('#rearing option:selected').val();
            var showing_seeds = $(this).find('#showing_seeds option:selected').val();
            var weeding = $(this).find('#weeding option:selected').val();

            var rearing = $(this).find('#rearing option:selected').val();
            var fertilizer_and_pesticides_apply = $(this).find('#fertilizer_and_pesticides_apply option:selected').val();
            var harvesting = $(this).find('#harvesting option:selected').val();
            var processing = $(this).find('#processing option:selected').val();
            var selling = $(this).find('#selling option:selected').val();
            var youth_involved_scope_activities = $(this).find('#youth_involved_scope_activities').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<product_name>' + product_name + '</product_name>';
            xml_data += '<pre_production>' + pre_production + '</pre_production>';
            xml_data += '<shelter_preparation>' + shelter_preparation + '</shelter_preparation>';
            xml_data += '<rearing>' + rearing + '</rearing>';
            xml_data += '<showing_seeds>' + showing_seeds + '</showing_seeds>';
            xml_data += '<weeding>' + weeding + '</weeding>';

            xml_data += '<fertilizer_and_pesticides_apply>' + fertilizer_and_pesticides_apply + '</fertilizer_and_pesticides_apply>';
            xml_data += '<harvesting>' + harvesting + '</harvesting>';
            xml_data += '<processing>' + processing + '</processing>';
            xml_data += '<selling>' + selling + '</selling>';
            xml_data += '<youth_involved_scope_activities>' + youth_involved_scope_activities + '</youth_involved_scope_activities>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_involvementOf_youth_livelihood_activity",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
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
    }   



});

function insertTableRow5() {

    var appendString = '';
    var rowCount = $('#my_table5 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="sensitivity_factor" class="form-control resetSelect" value="" style="width: 700px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Community Cooperatives">Community Cooperatives</option>';
    appendString += '<option value="Alternative Production">Alternative Production</option>';
    appendString += '<option value="An alternative route to transport the product">An alternative route to transport the product</option>';
    appendString += '<option value="Early warning">Early warning</option>';
    appendString += '<option value="Alternative communication media (Alternative mobile sim and social medias)">Alternative communication media (Alternative mobile sim and social medias)</option>';
    appendString += '<option value="Credit scheme">Credit scheme</option>';
    appendString += '<option value="Subsidy received">Subsidy received</option>';
    appendString += '<option value="Varietal modification/HYV">Varietal modification/HYV</option>';
    appendString += '<option value="Modern technology">Modern technology</option>';
    appendString += '<option value="Transaction infrastructure">Transaction infrastructure</option>';
    appendString += '</select>';
    appendString += '</td>';

    // appendString += '<td>';
    // appendString += '<select type="text" id="do_you_have" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    // appendString += '<option value="" selected disabled> Select Option</option>';
    // appendString += '<option value="Yes">Yes</option>';
    // appendString += '<option value="No" selected>No</option>';
    // appendString += '</select>';
    // appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="items" class="form-control resetSelect" value="" style="width: 600px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Number of members in the community cooperative">Number of members in the community cooperative:</option>';
    appendString += '<option value="Number of community cooperatives">Number of community cooperatives:</option>';
    appendString += '<option value="Average number of alternative production schemes per household">Average number of alternative production schemes per household:</option>';
    appendString += '<option value="Dry">Dry</option>';
    appendString += '<option value="Number of routes (connected to the para)">Number of routes (connected to the para):</option>';
    appendString += '<option value="Availability of early warning system">Availability of early warning system</option>';
    appendString += '<option value="Number of alternatives">Number of alternatives</option>';
    appendString += '<option value="Number of alternatives">Number of alternatives</option>';
    appendString += '<option value="Satisfaction level (1-3)">Satisfaction level (1-3):</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="quantity_or_number" class="form-control resetSelect" value="" style="width: 300px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="low satisfied">low satisfied (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Highly">Highly (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table5 > tbody:last-child').append(appendString);
   
    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table65> tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store5', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    if(watershed_id == '' || watershed_id == null || watershed_id == undefined){
        alert("Please Select Watershed id first....");
        $("#watershedId").siblings().children().children().css('background-color', '#FFCECE');
    }
    else
    {
        xml_data = '<head>';

        $('#my_table5 > tbody > tr').each(function () {

            // var farm_item_id = $(this).attr('center_id');
            
            var sensitivity_factor = $(this).find('#sensitivity_factor option:selected').val();
            var items = $(this).find('#items option:selected').val();
            var quantity_or_number = $(this).find('#quantity_or_number option:selected').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<sensitivity_factor>' + sensitivity_factor + '</sensitivity_factor>';
            xml_data += '<items>' + items + '</items>';
            xml_data += '<quantity_or_number>' + quantity_or_number + '</quantity_or_number>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_value_chain_sensitivity_to_sudden_shock",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table5 td input[type=text]').val('');
                    $('#my_table5 td').find('.resetSelect').prop("selectedIndex", 0);
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

function insertTableRow6() {

    var appendString = '';
    var rowCount = $('#my_table6 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="product_name" name="product_name" class="form-control resetSelect" value="" style="width: 300px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="00011">Tobacco Cultivation</option>';
    appendString += '<option value="00012">Teak</option>';
    appendString += '<option value="00013">Gamari</option>';
    appendString += '<option value="00014">Ginger and Turmeric</option>';
    appendString += '<option value="00015">Mushroom</option>';
    appendString += '<option value="00016">Jackfruit</option>';
    appendString += '<option value="00017">Broom flower</option>';
    appendString += '<option value="00018">Apiculture</option>';
    appendString += '<option value="00018">Agro-ecological tourism</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="degreeOf_preferences" name="degreeOf_preferences" class="form-control resetSelect" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="00021">Not at all</option>';
    appendString += '<option value="00022">Not preferable</option>';
    appendString += '<option value="00023">Moderately preferable</option>';
    appendString += '<option value="00024">Preferable</option>';
    appendString += '<option value="00025">Very much preferable</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="applicabilityOf_product" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table6 > tbody:last-child').append(appendString);
    removeTableRow6();
}
function removeTableRow6() {

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table7 > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store6', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    if(watershed_id == '' || watershed_id == null || watershed_id == undefined){
        alert("Please Select Watershed id first....");
        $("#watershedId").siblings().children().children().css('background-color', '#FFCECE');
    }
    else
    {
        xml_data = '<head>';

        $('#my_table6 > tbody > tr').each(function () {
            
            var product_name = $(this).find('#product_name option:selected').text();
            var degreeOf_preferences = $(this).find('#degreeOf_preferences option:selected').text();
            var applicabilityOf_product = $(this).find('#applicabilityOf_product').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<product_name>' + product_name + '</product_name>';
            xml_data += '<degreeOf_preferences>' + degreeOf_preferences + '</degreeOf_preferences>';
            xml_data += '<applicabilityOf_product>' + applicabilityOf_product + '</applicabilityOf_product>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_preferencesOf_certain_agro_forestry_products",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table6 td input[type=text]').val('');
                    $('#my_table6 td').find('.resetSelect').prop("selectedIndex", 0);
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

function insertTableRow7(name) {

    var appendString = '';
    var rowCount = $('#my_table7 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td style="width: 700px;text-align: left;">' + name + '</td>';
   
    appendString += '<td>';
    appendString += '<select type="text" id="degreeOf_preferences" name="degreeOf_preferences" class="form-control resetSelect" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="00021">Not at all</option>';
    appendString += '<option value="00022">Not preferable</option>';
    appendString += '<option value="00023">Moderately preferable</option>';
    appendString += '<option value="00024">Preferable</option>';
    appendString += '<option value="00025">Very much preferable</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="applicabilityOf_practice" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    // appendString += '<td style="text-align: center;">';
    // appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    // appendString += '</td>';

    appendString += '</tr>';


    $('#my_table7 > tbody:last-child').append(appendString);
    removeTableRow7();
}
function removeTableRow7() {

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table7 > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store7', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    if(watershed_id == '' || watershed_id == null || watershed_id == undefined){
        alert("Please Select Watershed id first....");
        $("#watershedId").siblings().children().children().css('background-color', '#FFCECE');
    }
    else
    {
        xml_data = '<head>';

        $('#my_table7 > tbody > tr').each(function () {
            
            var product_name = $(this).find('td:eq(1)').text(); 
            var degreeOf_preferences = $(this).find('#degreeOf_preferences option:selected').text();
            var applicabilityOf_practice = $(this).find('#applicabilityOf_practice').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<product_name>' + product_name + '</product_name>';
            xml_data += '<degreeOf_preferences>' + degreeOf_preferences + '</degreeOf_preferences>';
            xml_data += '<applicabilityOf_practice>' + applicabilityOf_practice + '</applicabilityOf_practice>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_preferences_on_management_practices",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table7 td input[type=text]').val('');
                    $('#my_table7 td').find('.resetSelect').prop("selectedIndex", 0);
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

function insertTableRow8() {

    var appendString = '';
    var rowCount = $('#my_table8 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="food_shortage_duration" name="food_shortage_duration" class="form-control resetSelect" value="" style="width: 400px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="00021">1-3 months</option>';
    appendString += '<option value="00022">4-6 months</option>';
    appendString += '<option value="00023">7-9 months</option>';
    appendString += '<option value="00024">10-12 months</option>';
    appendString += '<option value="00025">No shortage/scarcity</option>';
    appendString += '<option value="00026">There is no shortage, rather there is a surplus</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="household" class="form-control" value="" style="width: 300px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="reason" class="form-control resetSelect" value="" style="width: 600px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Tendency of crop damage">Tendency of crop damage (1)</option>';
    appendString += '<option value="Less production">Less production (2)</option>';
    appendString += '<option value="Irrigation problem,high cost">Irrigation problem,high cost (3)</option>';
    appendString += '<option value="Low wage rate">Low wage rate (4)</option>';
    appendString += '<option value="Lack in employment opportunities (Day labor)">Lack in employment opportunities (Day labor) (5)</option>';
    appendString += '<option value="Not being able to cultivate land on lease due to lack of capital">Not being able to cultivate land on lease due to lack of capital (6)</option>';
    appendString += '<option value="Cultivating land not available for (Sharecropping)">Cultivating land not available for (Sharecropping) (7)</option>';
    appendString += '<option value="Decrease in production due to lack of money to buy agricultural equipment">Decrease in production due to lack of money to buy agricultural equipment (8)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';

    $('#my_table8 > tbody:last-child').append(appendString);
    removeTableRow8();
}
function removeTableRow8() {

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table8 > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store8', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    if(watershed_id == '' || watershed_id == null || watershed_id == undefined){
        alert("Please Select Watershed id first....");
        $("#watershedId").siblings().children().children().css('background-color', '#FFCECE');
    }
    else
    {
        xml_data = '<head>';

        $('#my_table8 > tbody > tr').each(function () {
            
            // var product_name = $(this).find('td:eq(1)').text(); 
            var food_shortage_duration = $(this).find('#food_shortage_duration option:selected').text();
            var household = $(this).find('#household').val();
            var reason = $(this).find('#reason option:selected').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<food_shortage_duration>' + food_shortage_duration + '</food_shortage_duration>';
            xml_data += '<household>' + household + '</household>';
            xml_data += '<reason>' + reason + '</reason>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_food_shortage_evaluation",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table8 td input[type=text]').val('');
                    $('#my_table8 td').find('.resetSelect').prop("selectedIndex", 0);
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

function insertTableRow9() {

    var appendString = '';
    var rowCount = $('#my_table9 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="current_occupation" class="form-control" value="" style="width: 250px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="previous_occuption" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="reason_for_switching" class="form-control" value="" style="width: 250px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="new_occupation_started_year" class="form-control" value="" style="width: 250px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';

    $('#my_table9 > tbody:last-child').append(appendString);
    removeTableRow9();
}
function removeTableRow9() {

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table9 > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store9', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    if(watershed_id == '' || watershed_id == null || watershed_id == undefined){
        alert("Please Select Watershed id first....");
        $("#watershedId").siblings().children().children().css('background-color', '#FFCECE');
    }
    else
    {
        xml_data = '<head>';

        $('#my_table9 > tbody > tr').each(function () {
            
            // var product_name = $(this).find('td:eq(1)').text(); 
            var current_occupation = $(this).find('#current_occupation').text();
            var previous_occuption = $(this).find('#previous_occuption').val();
            var reason_for_switching = $(this).find('#reason_for_switching').val();
            var new_occupation_started_year = $(this).find('#new_occupation_started_year').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<current_occupation>' + current_occupation + '</current_occupation>';
            xml_data += '<previous_occuption>' + previous_occuption + '</previous_occuption>';
            xml_data += '<reason_for_switching>' + reason_for_switching + '</reason_for_switching>';
            xml_data += '<new_occupation_started_year>' + new_occupation_started_year + '</new_occupation_started_year>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_occupational_change_due_to_hazards",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table9 td input[type=text]').val('');
                    $('#my_table9 td').find('.resetSelect').prop("selectedIndex", 0);
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

$('#private_sector_support').on('change', function(){

    var support_private_sectore = $('#private_sector_support option:selected').val();

    if(support_private_sectore == 'Yes'){
        $('#input1').removeClass('hide');
    }
    else{
        $('#input1').addClass('hide');
    }

});

$(document).on('click', '#btn_store10', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    // var labelValue = $('#private_sector_support').text();
    var question1 = $('label[for="private_sector_support"]').text().trim();
    var question2 = $('label[for="how_private_sector_engaged"]').text().trim();
    var question3 = $('label[for="highly_preferred_product"]').text().trim();
    var question4 = $('label[for="if_not_interest_why"]').text().trim();

    var answer1 = $('#private_sector_support option:selected').val();
    var answer2 = $('#how_private_sector_engaged option:selected').val();
    var answer3 = $('#highly_preferred_product').val();
    var answer4 = $('#if_not_interest_why').val();


    var xml_data = '';

    xml_data += '<head>';

    xml_data += '<row>';

        xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
        xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
        xml_data += '<para_id>' + para_id + '</para_id>';
        xml_data += '<para_name>' + para_name + '</para_name>';
        xml_data += '<question>' + question1 + '</question>';

        if(answer1 == 'Yes'){
            var answer1 = $('#private_sector_companies').val();
            xml_data += '<answer>' + answer1 + '</answer>';
        }
        else{
            // console.log(support_private_sector);
            xml_data += '<answer>' + answer1 + '</answer>';
        }

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

    xml_data += '<row>';
        xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
        xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
        xml_data += '<para_id>' + para_id + '</para_id>';
        xml_data += '<para_name>' + para_name + '</para_name>';
        xml_data += '<question>' + question4 + '</question>';
        xml_data += '<answer>' + answer4 + '</answer>';
        xml_data += '<created_by>' + created_by + '</created_by>';
    xml_data += '</row>';

    xml_data += '</head>';

    console.log(xml_data);

    // clear model message value for every ajax call provide single accurate message
    $('#success_msg').html('');
    $('#error_msg').html('');

    $.ajax({
        url: "/store_question_info",
        type: "POST",
        data: { '_token' : token, 'xml_data' : xml_data },
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == 'SUCCESS'){
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                // Initial values
                $('.resetSelect').val('').change();
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

// not use this usecase, keep for exmaple
$(document).on('click', '#btn_store11', function (event) {

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
        url: "/store_livestock_recommendation",
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
                $('#my_table2 td input[type=text]').val('');
                $('#recommendation').val('');
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