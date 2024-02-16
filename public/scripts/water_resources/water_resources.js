
// developed by : talha || date : 12-dec-2023

// document.title = 'Water Resources';

$(document).ready(function () {

    console.log("hello talha.."); 

    // $('#community').select2();
    // $('.select2').css({'border': '2px solid #898AEE', 'border-radius': '5px'});
    // $('#para_list').prop('disabled', true);

    $(document).on('change', '#watershedId', function(){
        $("#watershedId").siblings().children().children().css('background-color', 'transparent');
    });

    $(document).on('change', '#para_list', function(){
        $("#para_list").siblings().children().children().css('background-color', 'transparent');
    });

    insertTableRow1();
    insertTableRow2();
    insertTableRow3();
  
    myJson = {
        '001' : 'Rivers',
        '002' : 'Spring',
        '003' : 'Charra',
        '004' : 'Lake/Reservoir',
    };

    var option = ' <option value="" selected disabled> Select </option>';
    $.each(myJson, function(key, name) {
       option += '<option value="'+name+'">'+ name +'</option>';
    });
    $('#water_type').html(option);


});

$('#add_row').on('click', function () {
    AddMoreTableRow1();
});

function insertTableRow1() {

    var appendString = '';
    var rowCount = $('#my_table1 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="water_type" name="water_type" class="form-control resetSelect more" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="name" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="longitude" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="latitude" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="source" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="outlet" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="distance_from_para" class="form-control" value="" style="width: 120px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="current_status" name="current_status" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Moving">Moving</option>';
    appendString += '<option value="Drying">Drying</option>';
    appendString += '<option value="Encroached">Encroached</option>';
    appendString += '<option value="Polluted">Polluted</option>';
    appendString += '<option value="Siltation">Siltation</option>';
    appendString += '<option value="Erosion">Erosion</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="dry_season_depth" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="wet_season_depth" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="drinking" name="drinking" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select </option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="domestic" name="domestic" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select </option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="irrigation" name="irrigation" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select </option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="cattle_fedding" name="cattle_fedding" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select </option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="others_purpose" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="Text">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table1 > tbody:last-child').append(appendString);
    removeTableRow1();
}

$(document).on('click', '#btn_store', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    xml_data = '<head>';

        $('#my_table1 > tbody > tr').each(function () {

            var waterbody_type = $(this).find('#water_type option:selected').text(); 
            
            var name = $(this).find('#name').val();
            var longitude = $(this).find('#longitude').val();
            var latitude = $(this).find('#latitude').val();
            var source = $(this).find('#source').val();
            var outlet = $(this).find('#outlet').val();

            var distance_from_para = $(this).find('#distance_from_para').val();
            var current_status = $(this).find('#current_status').val();
            var dry_season_depth = $(this).find('#dry_season_depth').val();
            var wet_season_depth = $(this).find('#wet_season_depth').val();

            var drinking = $(this).find('#drinking').val();
            var domestic = $(this).find('#domestic').val();
            var irrigation = $(this).find('#irrigation').val();
            var cattle_fedding = $(this).find('#cattle_fedding').val();
            var others_purpose = $(this).find('#others_purpose').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<waterbody_type>' + waterbody_type + '</waterbody_type>';
            xml_data += '<name>' + name + '</name>';
            xml_data += '<longitude>' + longitude + '</longitude>';
            xml_data += '<latitude>' + latitude + '</latitude>';
            xml_data += '<source>' + source + '</source>';
            xml_data += '<outlet>' + outlet + '</outlet>';

            xml_data += '<distance_from_para>' + distance_from_para + '</distance_from_para>';
            xml_data += '<current_status>' + current_status + '</current_status>';
            xml_data += '<dry_season_depth>' + dry_season_depth + '</dry_season_depth>';
            xml_data += '<wet_season_depth>' + wet_season_depth + '</wet_season_depth>';

            xml_data += '<drinking>' + drinking + '</drinking>';
            xml_data += '<domestic>' + domestic + '</domestic>';
            xml_data += '<irrigation>' + irrigation + '</irrigation>';
            xml_data += '<cattle_fedding>' + cattle_fedding + '</cattle_fedding>';
            xml_data += '<others_purpose>' + others_purpose + '</others_purpose>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

    xml_data += '</head>';
        
    console.log(xml_data);

    // clear model message value for every ajax call provide single accurate message
    $('#success_msg').html('');
    $('#error_msg').html('');

    $.ajax({
        url: "/store_waterbodies_basic_info",
        type: "POST",
        data: { '_token' : token, 'dataToSend' : xml_data },
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == 'SUCCESS'){
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                // Initial field values
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

    



});

function insertTableRow2() {

    var appendString = '';
    var rowCount = $('#my_table2 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="siltation" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Check dam">CD</option>';
    appendString += '<option value="Rubber dam">RD</option>';
    appendString += '<option value="Earthen river side/Chhara side embankment">EB</option>';
    appendString += '<option value="Concrete embankment">CE</option>';
    appendString += '<option value="Raising existing embankment (REB)">REB</option>';
    appendString += '<option value="Sediment trap (ST)">ST</option>';
    appendString += '<option value="Enforcement of illegal waste dumping/pollution (EP)">EP</option>';
    appendString += '<option value="Penalty of illegal encroachment (PE)">PE</option>';
    appendString += '<option value="Dredging/excavation/re-excavation (DE)">DE</option>';
    appendString += '<option value="Maintain connectivity with connected Khals/Chharas/Rivers (MC)">MC</option>';
    appendString += '<option value="Rainwater harvest (RWH)">RWH</option>';
    appendString += '<option value="Stop withdrawal of water for different use (SW)">SW</option>';
    appendString += '<option value="Native tree/grass plantation along waterbodies bank (TP)">TP</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="erosion" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Check dam">CD</option>';
    appendString += '<option value="Rubber dam">RD</option>';
    appendString += '<option value="Earthen river side/Chhara side embankment">EB</option>';
    appendString += '<option value="Concrete embankment">CE</option>';
    appendString += '<option value="Raising existing embankment (REB)">REB</option>';
    appendString += '<option value="Sediment trap (ST)">ST</option>';
    appendString += '<option value="Enforcement of illegal waste dumping/pollution (EP)">EP</option>';
    appendString += '<option value="Penalty of illegal encroachment (PE)">PE</option>';
    appendString += '<option value="Dredging/excavation/re-excavation (DE)">DE</option>';
    appendString += '<option value="Maintain connectivity with connected Khals/Chharas/Rivers (MC)">MC</option>';
    appendString += '<option value="Rainwater harvest (RWH)">RWH</option>';
    appendString += '<option value="Stop withdrawal of water for different use (SW)">SW</option>';
    appendString += '<option value="Native tree/grass plantation along waterbodies bank (TP)">TP</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="pollution" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Check dam">CD</option>';
    appendString += '<option value="Rubber dam">RD</option>';
    appendString += '<option value="Earthen river side/Chhara side embankment">EB</option>';
    appendString += '<option value="Concrete embankment">CE</option>';
    appendString += '<option value="Raising existing embankment (REB)">REB</option>';
    appendString += '<option value="Sediment trap (ST)">ST</option>';
    appendString += '<option value="Enforcement of illegal waste dumping/pollution (EP)">EP</option>';
    appendString += '<option value="Penalty of illegal encroachment (PE)">PE</option>';
    appendString += '<option value="Dredging/excavation/re-excavation (DE)">DE</option>';
    appendString += '<option value="Maintain connectivity with connected Khals/Chharas/Rivers (MC)">MC</option>';
    appendString += '<option value="Rainwater harvest (RWH)">RWH</option>';
    appendString += '<option value="Stop withdrawal of water for different use (SW)">SW</option>';
    appendString += '<option value="Native tree/grass plantation along waterbodies bank (TP)">TP</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="flood_drainage" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Check dam">CD</option>';
    appendString += '<option value="Rubber dam">RD</option>';
    appendString += '<option value="Earthen river side/Chhara side embankment">EB</option>';
    appendString += '<option value="Concrete embankment">CE</option>';
    appendString += '<option value="Raising existing embankment (REB)">REB</option>';
    appendString += '<option value="Sediment trap (ST)">ST</option>';
    appendString += '<option value="Enforcement of illegal waste dumping/pollution (EP)">EP</option>';
    appendString += '<option value="Penalty of illegal encroachment (PE)">PE</option>';
    appendString += '<option value="Dredging/excavation/re-excavation (DE)">DE</option>';
    appendString += '<option value="Maintain connectivity with connected Khals/Chharas/Rivers (MC)">MC</option>';
    appendString += '<option value="Rainwater harvest (RWH)">RWH</option>';
    appendString += '<option value="Stop withdrawal of water for different use (SW)">SW</option>';
    appendString += '<option value="Native tree/grass plantation along waterbodies bank (TP)">TP</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="drought" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Check dam">CD</option>';
    appendString += '<option value="Rubber dam">RD</option>';
    appendString += '<option value="Earthen river side/Chhara side embankment">EB</option>';
    appendString += '<option value="Concrete embankment">CE</option>';
    appendString += '<option value="Raising existing embankment (REB)">REB</option>';
    appendString += '<option value="Sediment trap (ST)">ST</option>';
    appendString += '<option value="Enforcement of illegal waste dumping/pollution (EP)">EP</option>';
    appendString += '<option value="Penalty of illegal encroachment (PE)">PE</option>';
    appendString += '<option value="Dredging/excavation/re-excavation (DE)">DE</option>';
    appendString += '<option value="Maintain connectivity with connected Khals/Chharas/Rivers (MC)">MC</option>';
    appendString += '<option value="Rainwater harvest (RWH)">RWH</option>';
    appendString += '<option value="Stop withdrawal of water for different use (SW)">SW</option>';
    appendString += '<option value="Native tree/grass plantation along waterbodies bank (TP)">TP</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="encroachment" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Check dam">CD</option>';
    appendString += '<option value="Rubber dam">RD</option>';
    appendString += '<option value="Earthen river side/Chhara side embankment">EB</option>';
    appendString += '<option value="Concrete embankment">CE</option>';
    appendString += '<option value="Raising existing embankment (REB)">REB</option>';
    appendString += '<option value="Sediment trap (ST)">ST</option>';
    appendString += '<option value="Enforcement of illegal waste dumping/pollution (EP)">EP</option>';
    appendString += '<option value="Penalty of illegal encroachment (PE)">PE</option>';
    appendString += '<option value="Dredging/excavation/re-excavation (DE)">DE</option>';
    appendString += '<option value="Maintain connectivity with connected Khals/Chharas/Rivers (MC)">MC</option>';
    appendString += '<option value="Rainwater harvest (RWH)">RWH</option>';
    appendString += '<option value="Stop withdrawal of water for different use (SW)">SW</option>';
    appendString += '<option value="Native tree/grass plantation along waterbodies bank (TP)">TP</option>';
    appendString += '</select>';
    appendString += '</td>';
  
    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';
  
    appendString += '</tr>';
  
    $('#my_table2 > tbody:last-child').append(appendString);
    removeTableRow2();
}

$('#add_row2').on('click', function () {
    insertTableRow2();
});

$(document).on('click', '#btn_store2', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var xml_data = '';

    xml_data = '<head>';

    $('#my_table2 > tbody > tr').each(function () {

        // var center_id = $(this).attr('center_id');
        // var center_name = $(this).find('td:eq(0)').text(); 
        // var health_center = $(this).closest('tr').find('td:eq(1)').text();
        
        var siltation = $(this).find('#siltation option:selected').val();
        var erosion = $(this).find('#erosion option:selected').val();
        var pollution = $(this).find('#pollution option:selected').val();
        var flood_drainage = $(this).find('#flood_drainage option:selected').val();
        var drought = $(this).find('#drought option:selected').val();
        var encroachment = $(this).find('#encroachment option:selected').val();

        // first binding data as xml string
        xml_data += '<row>';

        xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
        xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
        xml_data += '<para_id>' + para_id + '</para_id>';
        xml_data += '<para_name>' + para_name + '</para_name>';

        xml_data += '<siltation>' + siltation + '</siltation>';
        xml_data += '<erosion>' + erosion + '</erosion>';
        xml_data += '<pollution>' + pollution + '</pollution>';
        xml_data += '<flood_drainage>' + flood_drainage + '</flood_drainage>';
        xml_data += '<drought>' + drought + '</drought>';
        xml_data += '<encroachment>' + encroachment + '</encroachment>';

        xml_data += '<created_by>' + created_by + '</created_by>';

        xml_data += '</row>';
        

    });

    xml_data += '</head>';
    
    console.log(xml_data);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');

    $.ajax({
        url: "/store_current_practice_conservation",
        type: "POST",
        data: { '_token' : token, 'dataToSend' : xml_data },
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == 'SUCCESS') {
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message +'</p></span>' );
                $('#my_table2 td input[type=text]').val('');
                $('#my_table2 td').find('.resetSelect').prop("selectedIndex", 0);
            }
            else {
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#error_msg').html('<span style="color: red">ERROR!! <p>'+data.message+'</p></span>');
            }
            
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });


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
    appendString += '<input type="text" id="siltation" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="erosion" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="pollution" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="flood_drainage" class="form-control" value="" style="width: 180px;text-align: center;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="drought" class="form-control" value="" style="width: 180px;text-align: center;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="encroachment" class="form-control" value="" style="width: 180px;text-align: center;" placeholder="Please fill up..">';
    appendString += '</td>';
  
    appendString += '</tr>';
  
    $('#myTableOther > tbody:last-child').append(appendString);

});

$(document).on('click', '#btn_other2', function () {

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
   
        var siltation = $(this).find('#siltation').val();
        var erosion = $(this).find('#erosion').val();
        var pollution = $(this).find('#pollution').val();
        var flood_drainage = $(this).find('#flood_drainage').val();
        var drought = $(this).find('#drought').val();
        var encroachment = $(this).find('#encroachment').val();

        if(siltation == '' && erosion == '' && pollution == '' && drought == '') {
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

            dataToSend += '<siltation>' + siltation + '</siltation>';
            dataToSend += '<erosion>' + erosion + '</erosion>';
            dataToSend += '<pollution>' + pollution + '</pollution>';
            dataToSend += '<flood_drainage>' + flood_drainage + '</flood_drainage>';
            dataToSend += '<drought>' + drought + '</drought>';
            dataToSend += '<encroachment>' + encroachment + '</encroachment>';

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
            url: "/add_other_practiceOfConservationMeasures",
            type: "POST",
            data: { '_token' : token, 'dataToSend' : dataToSend },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS') {
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#myTableOther td input[type=text]').val('');
                    $('#myTableOther td input[type=checkbox]').prop('checked', false);
                    $('#myTableOther td').find('.resetSelect').prop("selectedIndex", 0);
                }
                else {
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

$('#add_row3').on('click', function () {
    insertTableRow3();
});

function insertTableRow3() {

    var appendString = '';
    var rowCount = $('#my_table3 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="siltation2" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Check dam">CD</option>';
    appendString += '<option value="Rubber dam">RD</option>';
    appendString += '<option value="Earthen river side/Chhara side embankment">EB</option>';
    appendString += '<option value="Concrete embankment">CE</option>';
    appendString += '<option value="Raising existing embankment (REB)">REB</option>';
    appendString += '<option value="Sediment trap (ST)">ST</option>';
    appendString += '<option value="Enforcement of illegal waste dumping/pollution (EP)">EP</option>';
    appendString += '<option value="Penalty of illegal encroachment (PE)">PE</option>';
    appendString += '<option value="Dredging/excavation/re-excavation (DE)">DE</option>';
    appendString += '<option value="Maintain connectivity with connected Khals/Chharas/Rivers (MC)">MC</option>';
    appendString += '<option value="Rainwater harvest (RWH)">RWH</option>';
    appendString += '<option value="Stop withdrawal of water for different use (SW)">SW</option>';
    appendString += '<option value="Native tree/grass plantation along waterbodies bank (TP)">TP</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="erosion2" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Check dam">CD</option>';
    appendString += '<option value="Rubber dam">RD</option>';
    appendString += '<option value="Earthen river side/Chhara side embankment">EB</option>';
    appendString += '<option value="Concrete embankment">CE</option>';
    appendString += '<option value="Raising existing embankment (REB)">REB</option>';
    appendString += '<option value="Sediment trap (ST)">ST</option>';
    appendString += '<option value="Enforcement of illegal waste dumping/pollution (EP)">EP</option>';
    appendString += '<option value="Penalty of illegal encroachment (PE)">PE</option>';
    appendString += '<option value="Dredging/excavation/re-excavation (DE)">DE</option>';
    appendString += '<option value="Maintain connectivity with connected Khals/Chharas/Rivers (MC)">MC</option>';
    appendString += '<option value="Rainwater harvest (RWH)">RWH</option>';
    appendString += '<option value="Stop withdrawal of water for different use (SW)">SW</option>';
    appendString += '<option value="Native tree/grass plantation along waterbodies bank (TP)">TP</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="pollution2" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Check dam">CD</option>';
    appendString += '<option value="Rubber dam">RD</option>';
    appendString += '<option value="Earthen river side/Chhara side embankment">EB</option>';
    appendString += '<option value="Concrete embankment">CE</option>';
    appendString += '<option value="Raising existing embankment (REB)">REB</option>';
    appendString += '<option value="Sediment trap (ST)">ST</option>';
    appendString += '<option value="Enforcement of illegal waste dumping/pollution (EP)">EP</option>';
    appendString += '<option value="Penalty of illegal encroachment (PE)">PE</option>';
    appendString += '<option value="Dredging/excavation/re-excavation (DE)">DE</option>';
    appendString += '<option value="Maintain connectivity with connected Khals/Chharas/Rivers (MC)">MC</option>';
    appendString += '<option value="Rainwater harvest (RWH)">RWH</option>';
    appendString += '<option value="Stop withdrawal of water for different use (SW)">SW</option>';
    appendString += '<option value="Native tree/grass plantation along waterbodies bank (TP)">TP</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="flood_drainage2" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Check dam">CD</option>';
    appendString += '<option value="Rubber dam">RD</option>';
    appendString += '<option value="Earthen river side/Chhara side embankment">EB</option>';
    appendString += '<option value="Concrete embankment">CE</option>';
    appendString += '<option value="Raising existing embankment (REB)">REB</option>';
    appendString += '<option value="Sediment trap (ST)">ST</option>';
    appendString += '<option value="Enforcement of illegal waste dumping/pollution (EP)">EP</option>';
    appendString += '<option value="Penalty of illegal encroachment (PE)">PE</option>';
    appendString += '<option value="Dredging/excavation/re-excavation (DE)">DE</option>';
    appendString += '<option value="Maintain connectivity with connected Khals/Chharas/Rivers (MC)">MC</option>';
    appendString += '<option value="Rainwater harvest (RWH)">RWH</option>';
    appendString += '<option value="Stop withdrawal of water for different use (SW)">SW</option>';
    appendString += '<option value="Native tree/grass plantation along waterbodies bank (TP)">TP</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="drought2" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Check dam">CD</option>';
    appendString += '<option value="Rubber dam">RD</option>';
    appendString += '<option value="Earthen river side/Chhara side embankment">EB</option>';
    appendString += '<option value="Concrete embankment">CE</option>';
    appendString += '<option value="Raising existing embankment (REB)">REB</option>';
    appendString += '<option value="Sediment trap (ST)">ST</option>';
    appendString += '<option value="Enforcement of illegal waste dumping/pollution (EP)">EP</option>';
    appendString += '<option value="Penalty of illegal encroachment (PE)">PE</option>';
    appendString += '<option value="Dredging/excavation/re-excavation (DE)">DE</option>';
    appendString += '<option value="Maintain connectivity with connected Khals/Chharas/Rivers (MC)">MC</option>';
    appendString += '<option value="Rainwater harvest (RWH)">RWH</option>';
    appendString += '<option value="Stop withdrawal of water for different use (SW)">SW</option>';
    appendString += '<option value="Native tree/grass plantation along waterbodies bank (TP)">TP</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="encroachment2" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Check dam">CD</option>';
    appendString += '<option value="Rubber dam">RD</option>';
    appendString += '<option value="Earthen river side/Chhara side embankment">EB</option>';
    appendString += '<option value="Concrete embankment">CE</option>';
    appendString += '<option value="Raising existing embankment (REB)">REB</option>';
    appendString += '<option value="Sediment trap (ST)">ST</option>';
    appendString += '<option value="Enforcement of illegal waste dumping/pollution (EP)">EP</option>';
    appendString += '<option value="Penalty of illegal encroachment (PE)">PE</option>';
    appendString += '<option value="Dredging/excavation/re-excavation (DE)">DE</option>';
    appendString += '<option value="Maintain connectivity with connected Khals/Chharas/Rivers (MC)">MC</option>';
    appendString += '<option value="Rainwater harvest (RWH)">RWH</option>';
    appendString += '<option value="Stop withdrawal of water for different use (SW)">SW</option>';
    appendString += '<option value="Native tree/grass plantation along waterbodies bank (TP)">TP</option>';
    appendString += '</select>';
    appendString += '</td>';
  
    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';
  
    appendString += '</tr>';
  
  
    $('#my_table3 > tbody:last-child').append(appendString);
    removeTableRow3();
    // $("#my_table tr:last").scrollintoview();
}

$(document).on('click', '#btn_store3', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var xml_data = '';

    xml_data = '<head>';

    $('#my_table3 > tbody > tr').each(function () {

        // var center_id = $(this).attr('center_id');
        // var center_name = $(this).find('td:eq(0)').text(); 
        // var health_center = $(this).closest('tr').find('td:eq(1)').text();
        
        var siltation = $(this).find('#siltation2 option:selected').val();
        var erosion = $(this).find('#erosion2 option:selected').val();
        var pollution = $(this).find('#pollution2 option:selected').val();
        var flood_drainage = $(this).find('#flood_drainage2 option:selected').val();
        var drought = $(this).find('#drought2 option:selected').val();
        var encroachment = $(this).find('#encroachment2 option:selected').val();

        // first binding data as xml string
        xml_data += '<row>';

        xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
        xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
        xml_data += '<para_id>' + para_id + '</para_id>';
        xml_data += '<para_name>' + para_name + '</para_name>';

        xml_data += '<siltation>' + siltation + '</siltation>';
        xml_data += '<erosion>' + erosion + '</erosion>';
        xml_data += '<pollution>' + pollution + '</pollution>';
        xml_data += '<flood_drainage>' + flood_drainage + '</flood_drainage>';
        xml_data += '<drought>' + drought + '</drought>';
        xml_data += '<encroachment>' + encroachment + '</encroachment>';

        xml_data += '<created_by>' + created_by + '</created_by>';

        xml_data += '</row>';
        

    });

    xml_data += '</head>';
    
    console.log(xml_data);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');

    $.ajax({
        url: "/store_recommended_conservation",
        type: "POST",
        data: { '_token' : token, 'dataToSend' : xml_data },
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

    
    


});

$("#add_other3").click(function() {
    
    $("#otherDiv2").toggle();
    $("#myTableOther3 tbody").empty();

    var appendString = '';
    var rowCount = $('#myTableOther3 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="siltation2" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="erosion2" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="pollution2" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="flood_drainage2" class="form-control" value="" style="width: 180px;text-align: center;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="drought2" class="form-control" value="" style="width: 180px;text-align: center;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="encroachment2" class="form-control" value="" style="width: 180px;text-align: center;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '</tr>';

    $('#myTableOther3 > tbody:last-child').append(appendString);

});

$(document).on('click', '#btn_other3', function () {

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

    $('#myTableOther3 > tbody > tr').each(function () {
   
        var siltation = $(this).find('#siltation2').val();
        var erosion = $(this).find('#erosion2').val();
        var pollution = $(this).find('#pollution2').val();
        var flood_drainage = $(this).find('#flood_drainage2').val();
        var drought = $(this).find('#drought2').val();
        var encroachment = $(this).find('#encroachment2').val();

        if(siltation == '' && erosion == '' && pollution == '' && drought == '') {
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

            dataToSend += '<siltation>' + siltation + '</siltation>';
            dataToSend += '<erosion>' + erosion + '</erosion>';
            dataToSend += '<pollution>' + pollution + '</pollution>';
            dataToSend += '<flood_drainage>' + flood_drainage + '</flood_drainage>';
            dataToSend += '<drought>' + drought + '</drought>';
            dataToSend += '<encroachment>' + encroachment + '</encroachment>';

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
            url: "/add_other_recommendedConservationMeasures",
            type: "POST",
            data: { '_token' : token, 'dataToSend' : dataToSend },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS') {
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#myTableOther3 td input[type=text]').val('');
                    $('#myTableOther3 td input[type=checkbox]').prop('checked', false);
                    $('#myTableOther3 td').find('.resetSelect').prop("selectedIndex", 0);
                }
                else {
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

$(document).on('click', '#btn_store4', function (event) {

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
        url: "/store_improve_water_availability",
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
                $('#water_improve_recommendation').val('');
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

function removeTableRow1() {

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();
        var sl = 1;
        $('#my_table1 > tbody > tr').each(function () {
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
    });
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

function AddMoreTableRow1() {

    var appendString = '';
    var rowCount = $('#my_table1 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="water_type" name="water_type" class="form-control resetSelect more" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Rivers">Rivers</option>';
    appendString += '<option value="Springs">Springs</option>';
    appendString += '<option value="Charra">Charra</option>';
    appendString += '<option value="Lake/Reservoir">Lake/Reservoir</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="comments" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="comments" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="comments" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="comments" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="comments" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="comments" class="form-control" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="condition" name="condition" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="1">Good</option>';
    appendString += '<option value="2">Bad</option>';
    appendString += '<option value="3">Medium</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="comments" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="comments" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="condition" name="condition" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select </option>';
    appendString += '<option value="Drinking">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="condition" name="condition" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select </option>';
    appendString += '<option value="Drinking">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="condition" name="condition" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select </option>';
    appendString += '<option value="Drinking">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="condition" name="condition" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select </option>';
    appendString += '<option value="Drinking">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="others_purpose" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="Text">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table1 > tbody:last-child').append(appendString);
    removeTableRow1();
}




