


// document.title = 'land degradation';

$(document).ready(function () {

    console.log("hello talha23 from js..");
    
    var userNm = $('#userName').val();

    insertTableRow1a();
    insertTableRow1b();
    insertTableRow1c();
    insertTableRow1d();
    insertTableRow1e();
    insertTableRow1f();

    insertTableRow2a();
    insertTableRow2b();
    insertTableRow2c();
    insertTableRow2d();
    insertTableRow2e();
    insertTableRow2f();

    // myTable4a = {
    //     '001' : 'Transforming Jhum into agro-forestry',
    //     '002' : 'Intercropping',
    //     '003' : 'Sowing/planting',
    //     '004' : 'Weeding',
    //     '005' : 'Pest management',
    //     '006' : 'Vegetables harvesting',
    //     '007' : 'Cucumber, gourd harvesting',
    //     '008' : 'Maize, rice harvesting',
    //     '009' : 'Chilli harvesting',
    //     '009' : 'Pumpkin, Cheena harvesting',
    // };

    // var option4a = ' <option value="" selected disabled> Select Option </option>';
    // $.each(myTable4a, function(key, name) {
    //    option4a += '<option value="'+ name +'">'+ name +'</option>';
    // });
    // $('#jhum_type').html(option4a);


});

$('#add_row1a').on('click', function(){
    insertTableRow1a();
});

$('#add_row1b').on('click', function(){
    insertTableRow1b();
});

$('#add_row1c').on('click', function () {
    insertTableRow1c();
});

$('#add_row1d').on('click', function () {
    insertTableRow1d();
});

$('#add_row1e').on('click', function () {
    insertTableRow1e();
});

$('#add_row1f').on('click', function () {
    insertTableRow1f();
});

// ===== + =======

$('#add_row2a').on('click', function(){
    insertTableRow2a();
});

$('#add_row2b').on('click', function(){
    insertTableRow2b();
});

$('#add_row2c').on('click', function () {
    insertTableRow2c();
});

$('#add_row2d').on('click', function () {
    insertTableRow2d();
});

$('#add_row2e').on('click', function () {
    insertTableRow2e();
});

$('#add_row2f').on('click', function () {
    insertTableRow2f();
});

function insertTableRow1a() {

    var appendString = '';
    var rowCount = $('#my_table1a > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="conservationMeasures" class="form-control resetSelect" value="" style="width: 280px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="4021">(A1) Transforming Jhum into agro-forestry</option>';
    appendString += '<option value="4022">(A2) Intercropping</option>';
    appendString += '<option value="4023">(A3) Crop diversification</option>';
    appendString += '<option value="4024">(A4) Introduction of climate-resilient varieties</option>';
    appendString += '<option value="4025">(A5) Fruit tree planting</option>';
    appendString += '<option value="4026">(A6) Drainage improvement</option>';
    appendString += '<option value="4027">(A7) Orchard management support</option>';
    appendString += '<option value="4028">(A8) Multi-storey Fruit Garden (MSFG)</option>';
    appendString += '<option value="4029">(A9) Multi-strata Agroforestry System (MAFS)</option>';
    appendString += '<option value="4030">(A10) SALT-1 (Sloping Agricultural Land Technology)</option>';
    appendString += '<option value="4031">(A11) SALT-2 (Sloping Agroforest Land Technology)</option>';
    appendString += '<option value="4031">(A12) SALT-3 (Sloping Agro-livestock Land Technology)</option>';
    appendString += '<option value="4032">(A13) SALT-4 (Sloping Agro-fisheries Livelihood Technology)</option>';
    appendString += '<option value="4033">(A14) Contour Hedgerow Intercropping Agro-forestry Technology (CHIAT)</option>';
    appendString += '<option value="4034">(A15) Modern Agricultural Technology (MATH)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="preferencesOfMeasure" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="unitCost" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="potentialUnitNetGain" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';
    
    /* 1 */
    appendString += '<td>';
    appendString += '<select type="text" id="treeIncrease" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="carbonSequestration" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="cropProduction" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="livestockProduction" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';
    
    /* 5 */
    appendString += '<td>';
    appendString += '<select type="text" id="fisheriesProduction" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="waterSupply" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    /* 7 */
    appendString += '<td>';
    appendString += '<select type="text" id="waterPurification" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="wildPlantFoodFibresMedicine" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    /* 9 */
    appendString += '<td>';
    appendString += '<select type="text" id="timberRevenue" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="inorganicFertilizer" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table1a > tbody:last-child').append(appendString);

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table1a > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store1a', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    // var para_id = $('#para_id').val();
    // var para_name = $('#para_name').val();
    // var map_unit = $('#map_unit').val();
    // var area_of_map_unit = $('#area_of_map_unit').val();

    var sendData = '';
    var isValid = '';

    sendData = '<head>';

    $('#my_table1a > tbody > tr').each(function () {
        
        // var indicator = $(this).closest('tr').find('td:eq(1)').text();
        var conservationMeasuresVal = $(this).find('#conservationMeasures option:selected').val();
        var conservationMeasures = $(this).find('#conservationMeasures option:selected').text();

        var preferencesOfMeasure = $(this).find('#preferencesOfMeasure option:selected').val();
        var unitCost = $(this).find('#unitCost').val();
        var potentialUnitNetGain = $(this).find('#potentialUnitNetGain').val();
        var treeIncrease = $(this).find('#treeIncrease option:selected').val();
        var carbonSequestration = $(this).find('#carbonSequestration option:selected').val();
        var cropProduction = $(this).find('#cropProduction option:selected').val();
        var livestockProduction = $(this).find('#livestockProduction option:selected').val();
        var fisheriesProduction = $(this).find('#fisheriesProduction option:selected').val();
        var waterSupply = $(this).find('#waterSupply option:selected').val();
        var waterPurification = $(this).find('#waterPurification option:selected').val();
        var wildPlantFoodFibresMedicine = $(this).find('#wildPlantFoodFibresMedicine option:selected').val();
        var timberRevenue = $(this).find('#timberRevenue option:selected').val();
        var inorganicFertilizer = $(this).find('#inorganicFertilizer option:selected').val();
        // console.log(conservationMeasuresVal, preferencesOfMeasure, carbonSequestration, livestockProduction);
        
        if(conservationMeasuresVal == '' && preferencesOfMeasure == '' && carbonSequestration == '' && livestockProduction == '' && waterSupply == '' && wildPlantFoodFibresMedicine == '' && timberRevenue == '') {
            var errorMsg = 'Please enter some value in all visible row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else
        {
            isValid = true;

            sendData += '<row>';
            sendData += '<watershed_id>' + watershed_id + '</watershed_id>';
            sendData += '<watershed_name>' + watershed_name + '</watershed_name>';
            // sendData += '<para_id>' + para_id + '</para_id>';
            // sendData += '<para_name>' + para_name + '</para_name>';

            // sendData += '<map_unit>' + map_unit + '</map_unit>';
            // sendData += '<area_of_map_unit>' + area_of_map_unit + '</area_of_map_unit>';

            sendData += '<conservationMeasures>' + conservationMeasures + '</conservationMeasures>';
            sendData += '<preferencesOfMeasure>' + preferencesOfMeasure + '</preferencesOfMeasure>';
            sendData += '<unitCost>' + unitCost + '</unitCost>';
            sendData += '<potentialUnitNetGain>' + potentialUnitNetGain + '</potentialUnitNetGain>';
            sendData += '<treeIncrease>' + treeIncrease + '</treeIncrease>';
            sendData += '<carbonSequestration>' + carbonSequestration + '</carbonSequestration>';
            sendData += '<cropProduction>' + cropProduction + '</cropProduction>';
            sendData += '<livestockProduction>' + livestockProduction + '</livestockProduction>';
            sendData += '<fisheriesProduction>' + fisheriesProduction + '</fisheriesProduction>';
            sendData += '<waterSupply>' + waterSupply + '</waterSupply>';
            sendData += '<waterPurification>' + waterPurification + '</waterPurification>';
            sendData += '<wildPlantFoodFibresMedicine>' + wildPlantFoodFibresMedicine + '</wildPlantFoodFibresMedicine>';
            sendData += '<timberRevenue>' + timberRevenue + '</timberRevenue>';
            sendData += '<inorganicFertilizer>' + inorganicFertilizer + '</inorganicFertilizer>';

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
            url: "/agriculture_land_conservation_R3",
            type: "POST",
            data: { '_token' : token, 'dataToSend' : sendData },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == "SUCCESS") {
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table1a td input[type=text]').val('');
                    $('#my_table1a td').find('.resetSelect').prop("selectedIndex", 0);
                }
                else{
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#error_msg').html('<span style="color: red;">ERROR !! <p>'+ data.message + '</p></span>');
                }
                
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }

});

function insertTableRow1b() {

    var appendString = '';
    var rowCount = $('#my_table1b > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="conservationMeasures" class="form-control resetSelect" value="" style="width: 300px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="4021">(F1) Enrichment Plantation with native/indigenous species</option>';
    appendString += '<option value="4022">(F2) Multilayer plantation</option>';
    appendString += '<option value="4023">(F3) Assisted natural regeneration</option>';
    appendString += '<option value="4024">(F4) Transition pathway of teak tree</option>';
    appendString += '<option value="4025">(F5) Forest silviculture operations</option>';
    appendString += '<option value="4026">(F6) Establishment of community tree nurseries</option>';
    appendString += '<option value="4027">(F7) Forest fire management</option>';
    appendString += '<option value="4028">(F8) Grazing land management</option>';
    appendString += '<option value="4029">(F9) Community forest management</option>';
    appendString += '<option value="4030">(F10) Regulations and Biodiversity Conservation</option>';
    appendString += '<option value="4031">(F11) Protected area management</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="preferencesOfMeasure" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="unitCost" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="potentialUnitNetGain" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';
    
    /* 1 */
    appendString += '<td>';
    appendString += '<select type="text" id="treeIncrease" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="carbonSequestration" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="cropProduction" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="livestockProduction" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';
    
    /* 5 */
    appendString += '<td>';
    appendString += '<select type="text" id="fisheriesProduction" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="waterSupply" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    /* 7 */
    appendString += '<td>';
    appendString += '<select type="text" id="waterPurification" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="wildPlantFoodFibresMedicine" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    /* 9 */
    appendString += '<td>';
    appendString += '<select type="text" id="timberRevenue" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="inorganicFertilizer" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table1b > tbody:last-child').append(appendString);

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table1b > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store1b', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();

    var sendData = '';
    var isValid = '';

    sendData = '<head>';

    $('#my_table1b > tbody > tr').each(function () {
        
        // var indicator = $(this).closest('tr').find('td:eq(1)').text();
        var conservationMeasuresVal = $(this).find('#conservationMeasures option:selected').val();

        var conservationMeasures = $(this).find('#conservationMeasures option:selected').text();
        var preferencesOfMeasure = $(this).find('#preferencesOfMeasure option:selected').val();
        var unitCost = $(this).find('#unitCost').val();
        var potentialUnitNetGain = $(this).find('#potentialUnitNetGain').val();
        var treeIncrease = $(this).find('#treeIncrease option:selected').val();
        var carbonSequestration = $(this).find('#carbonSequestration option:selected').val();
        var cropProduction = $(this).find('#cropProduction option:selected').val();
        var livestockProduction = $(this).find('#livestockProduction option:selected').val();
        var fisheriesProduction = $(this).find('#fisheriesProduction option:selected').val();
        var waterSupply = $(this).find('#waterSupply option:selected').val();
        var waterPurification = $(this).find('#waterPurification option:selected').val();
        var wildPlantFoodFibresMedicine = $(this).find('#wildPlantFoodFibresMedicine option:selected').val();
        var timberRevenue = $(this).find('#timberRevenue option:selected').val();
        var inorganicFertilizer = $(this).find('#inorganicFertilizer option:selected').val();
        // console.log(conservationMeasuresVal, preferencesOfMeasure, carbonSequestration, livestockProduction);
        
        if(conservationMeasuresVal == '' && preferencesOfMeasure == '' && carbonSequestration == '' && livestockProduction == '' && waterSupply == '' && wildPlantFoodFibresMedicine == '' && timberRevenue == '') {
            var errorMsg = 'Please enter some value in all visible row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else
        {
            isValid = true;

            sendData += '<row>';
            sendData += '<watershed_id>' + watershed_id + '</watershed_id>';
            sendData += '<watershed_name>' + watershed_name + '</watershed_name>';

            sendData += '<conservationMeasures>' + conservationMeasures + '</conservationMeasures>';
            sendData += '<preferencesOfMeasure>' + preferencesOfMeasure + '</preferencesOfMeasure>';
            sendData += '<unitCost>' + unitCost + '</unitCost>';
            sendData += '<potentialUnitNetGain>' + potentialUnitNetGain + '</potentialUnitNetGain>';
            sendData += '<treeIncrease>' + treeIncrease + '</treeIncrease>';
            sendData += '<carbonSequestration>' + carbonSequestration + '</carbonSequestration>';
            sendData += '<cropProduction>' + cropProduction + '</cropProduction>';
            sendData += '<livestockProduction>' + livestockProduction + '</livestockProduction>';
            sendData += '<fisheriesProduction>' + fisheriesProduction + '</fisheriesProduction>';
            sendData += '<waterSupply>' + waterSupply + '</waterSupply>';
            sendData += '<waterPurification>' + waterPurification + '</waterPurification>';
            sendData += '<wildPlantFoodFibresMedicine>' + wildPlantFoodFibresMedicine + '</wildPlantFoodFibresMedicine>';
            sendData += '<timberRevenue>' + timberRevenue + '</timberRevenue>';
            sendData += '<inorganicFertilizer>' + inorganicFertilizer + '</inorganicFertilizer>';

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
            url: "/forestOrShrubLandConservation_R4",
            type: "POST",
            data: { '_token' : token, 'dataToSend' : sendData },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == "SUCCESS") {
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table1b td input[type=text]').val('');
                    $('#my_table1b td').find('.resetSelect').prop("selectedIndex", 0);
                }
                else{
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#error_msg').html('<span style="color: red;">ERROR !! <p>'+ data.message + '</p></span>');
                }
                
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }

});

function insertTableRow1c() {

    var appendString = '';
    var rowCount = $('#my_table1c > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="conservationMeasures" class="form-control resetSelect" value="" style="width: 300px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="4021">(L1) Rehabilitation of degraded lands</option>';
    appendString += '<option value="4022">(L2) Reclamation of disaster affected river bed side and agricultural land</option>';
    appendString += '<option value="4023">(L3) Landslide treatment</option>';
    appendString += '<option value="4024">(L4) Gully treatment</option>';
    appendString += '<option value="4025">(L5) Sustainable soil management</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="preferencesOfMeasure" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="unitCost" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="potentialUnitNetGain" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';
    
    /* 1 */
    appendString += '<td>';
    appendString += '<select type="text" id="treeIncrease" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="carbonSequestration" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="cropProduction" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="livestockProduction" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';
    
    /* 5 */
    appendString += '<td>';
    appendString += '<select type="text" id="fisheriesProduction" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="waterSupply" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    /* 7 */
    appendString += '<td>';
    appendString += '<select type="text" id="waterPurification" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="wildPlantFoodFibresMedicine" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    /* 9 */
    appendString += '<td>';
    appendString += '<select type="text" id="timberRevenue" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="inorganicFertilizer" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table1c > tbody:last-child').append(appendString);

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table1c > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store1c', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();

    var sendData = '';
    var isValid = '';

    sendData = '<head>';

    $('#my_table1c > tbody > tr').each(function () {
        
        // var indicator = $(this).closest('tr').find('td:eq(1)').text();
        var conservationMeasuresVal = $(this).find('#conservationMeasures option:selected').val();

        var conservationMeasures = $(this).find('#conservationMeasures option:selected').text();
        var preferencesOfMeasure = $(this).find('#preferencesOfMeasure option:selected').val();
        var unitCost = $(this).find('#unitCost').val();
        var potentialUnitNetGain = $(this).find('#potentialUnitNetGain').val();
        var treeIncrease = $(this).find('#treeIncrease option:selected').val();
        var carbonSequestration = $(this).find('#carbonSequestration option:selected').val();
        var cropProduction = $(this).find('#cropProduction option:selected').val();
        var livestockProduction = $(this).find('#livestockProduction option:selected').val();
        var fisheriesProduction = $(this).find('#fisheriesProduction option:selected').val();
        var waterSupply = $(this).find('#waterSupply option:selected').val();
        var waterPurification = $(this).find('#waterPurification option:selected').val();
        var wildPlantFoodFibresMedicine = $(this).find('#wildPlantFoodFibresMedicine option:selected').val();
        var timberRevenue = $(this).find('#timberRevenue option:selected').val();
        var inorganicFertilizer = $(this).find('#inorganicFertilizer option:selected').val();
        // console.log(conservationMeasuresVal, preferencesOfMeasure, carbonSequestration, livestockProduction);
        
        if(conservationMeasuresVal == '' && preferencesOfMeasure == '' && carbonSequestration == '' && livestockProduction == '' && waterSupply == '' && wildPlantFoodFibresMedicine == '' && timberRevenue == '') {
            var errorMsg = 'Please enter some value in all visible row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else
        {
            isValid = true;

            sendData += '<row>';
            sendData += '<watershed_id>' + watershed_id + '</watershed_id>';
            sendData += '<watershed_name>' + watershed_name + '</watershed_name>';

            sendData += '<conservationMeasures>' + conservationMeasures + '</conservationMeasures>';
            sendData += '<preferencesOfMeasure>' + preferencesOfMeasure + '</preferencesOfMeasure>';
            sendData += '<unitCost>' + unitCost + '</unitCost>';
            sendData += '<potentialUnitNetGain>' + potentialUnitNetGain + '</potentialUnitNetGain>';
            sendData += '<treeIncrease>' + treeIncrease + '</treeIncrease>';
            sendData += '<carbonSequestration>' + carbonSequestration + '</carbonSequestration>';
            sendData += '<cropProduction>' + cropProduction + '</cropProduction>';
            sendData += '<livestockProduction>' + livestockProduction + '</livestockProduction>';
            sendData += '<fisheriesProduction>' + fisheriesProduction + '</fisheriesProduction>';
            sendData += '<waterSupply>' + waterSupply + '</waterSupply>';
            sendData += '<waterPurification>' + waterPurification + '</waterPurification>';
            sendData += '<wildPlantFoodFibresMedicine>' + wildPlantFoodFibresMedicine + '</wildPlantFoodFibresMedicine>';
            sendData += '<timberRevenue>' + timberRevenue + '</timberRevenue>';
            sendData += '<inorganicFertilizer>' + inorganicFertilizer + '</inorganicFertilizer>';

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
            url: "/degraded_soil_land_improvement_R3",
            type: "POST",
            data: { '_token' : token, 'dataToSend' : sendData },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == "SUCCESS") {
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table1c td input[type=text]').val('');
                    $('#my_table1c td').find('.resetSelect').prop("selectedIndex", 0);
                }
                else{
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#error_msg').html('<span style="color: red;">ERROR !! <p>'+ data.message + '</p></span>');
                }
                
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }

});

function insertTableRow1d() {

    var appendString = '';
    var rowCount = $('#my_table1d > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="conservationMeasures" class="form-control resetSelect" value="" style="width: 300px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="4021">(S1) Buffer strip plantation/Bio-engineering methods</option>';
    appendString += '<option value="4022">(S2) Protection wall/Embankment/Retaining wall/Spurs</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="preferencesOfMeasure" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="unitCost" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="potentialUnitNetGain" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';
    
    /* 1 */
    appendString += '<td>';
    appendString += '<select type="text" id="treeIncrease" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="carbonSequestration" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="cropProduction" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="livestockProduction" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';
    
    /* 5 */
    appendString += '<td>';
    appendString += '<select type="text" id="fisheriesProduction" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="waterSupply" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    /* 7 */
    appendString += '<td>';
    appendString += '<select type="text" id="waterPurification" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="wildPlantFoodFibresMedicine" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    /* 9 */
    appendString += '<td>';
    appendString += '<select type="text" id="timberRevenue" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="inorganicFertilizer" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table1d > tbody:last-child').append(appendString);

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table1d > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store1d', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();

    var sendData = '';
    var isValid = '';

    sendData = '<head>';

    $('#my_table1d > tbody > tr').each(function () {
        
        // var indicator = $(this).closest('tr').find('td:eq(1)').text();
        var conservationMeasuresVal = $(this).find('#conservationMeasures option:selected').val();

        var conservationMeasures = $(this).find('#conservationMeasures option:selected').text();
        var preferencesOfMeasure = $(this).find('#preferencesOfMeasure option:selected').val();
        var unitCost = $(this).find('#unitCost').val();
        var potentialUnitNetGain = $(this).find('#potentialUnitNetGain').val();
        var treeIncrease = $(this).find('#treeIncrease option:selected').val();
        var carbonSequestration = $(this).find('#carbonSequestration option:selected').val();
        var cropProduction = $(this).find('#cropProduction option:selected').val();
        var livestockProduction = $(this).find('#livestockProduction option:selected').val();
        var fisheriesProduction = $(this).find('#fisheriesProduction option:selected').val();
        var waterSupply = $(this).find('#waterSupply option:selected').val();
        var waterPurification = $(this).find('#waterPurification option:selected').val();
        var wildPlantFoodFibresMedicine = $(this).find('#wildPlantFoodFibresMedicine option:selected').val();
        var timberRevenue = $(this).find('#timberRevenue option:selected').val();
        var inorganicFertilizer = $(this).find('#inorganicFertilizer option:selected').val();
        // console.log(conservationMeasuresVal, preferencesOfMeasure, carbonSequestration, livestockProduction);
        
        if(conservationMeasuresVal == '' && preferencesOfMeasure == '' && carbonSequestration == '' && livestockProduction == '' && waterSupply == '' && wildPlantFoodFibresMedicine == '' && timberRevenue == '') {
            var errorMsg = 'Please enter some value in all visible row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else
        {
            isValid = true;

            sendData += '<row>';
            sendData += '<watershed_id>' + watershed_id + '</watershed_id>';
            sendData += '<watershed_name>' + watershed_name + '</watershed_name>';

            sendData += '<conservationMeasures>' + conservationMeasures + '</conservationMeasures>';
            sendData += '<preferencesOfMeasure>' + preferencesOfMeasure + '</preferencesOfMeasure>';
            sendData += '<unitCost>' + unitCost + '</unitCost>';
            sendData += '<potentialUnitNetGain>' + potentialUnitNetGain + '</potentialUnitNetGain>';
            sendData += '<treeIncrease>' + treeIncrease + '</treeIncrease>';
            sendData += '<carbonSequestration>' + carbonSequestration + '</carbonSequestration>';
            sendData += '<cropProduction>' + cropProduction + '</cropProduction>';
            sendData += '<livestockProduction>' + livestockProduction + '</livestockProduction>';
            sendData += '<fisheriesProduction>' + fisheriesProduction + '</fisheriesProduction>';
            sendData += '<waterSupply>' + waterSupply + '</waterSupply>';
            sendData += '<waterPurification>' + waterPurification + '</waterPurification>';
            sendData += '<wildPlantFoodFibresMedicine>' + wildPlantFoodFibresMedicine + '</wildPlantFoodFibresMedicine>';
            sendData += '<timberRevenue>' + timberRevenue + '</timberRevenue>';
            sendData += '<inorganicFertilizer>' + inorganicFertilizer + '</inorganicFertilizer>';

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
            url: "/stream_bank_protection_R3",
            type: "POST",
            data: { '_token' : token, 'dataToSend' : sendData },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == "SUCCESS") {
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message +'</p></span>');
                    $('#my_table1d td input[type=text]').val('');
                    $('#my_table1d td').find('.resetSelect').prop("selectedIndex", 0);
                }
                else{
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#error_msg').html('<span style="color: red;">ERROR !! <p>'+ data.message + '</p></span>');
                }
                
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }

});

function insertTableRow1e() {

    var appendString = '';
    var rowCount = $('#my_table1e > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="conservationMeasures" class="form-control resetSelect" value="" style="width: 300px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="4021">(W1) Irrigation canal improvement</option>';
    appendString += '<option value="4022">(W2) Drinking Water spring improvement</option>';
    appendString += '<option value="4023">(W3) Water harvesting reservoir with dam construction</option>';
    appendString += '<option value="4024">(W4) Water harvesting pond</option>';
    appendString += '<option value="4025">(W5) Ground water recharge pits/trenches</option>';
    appendString += '<option value="4026">(W6) Wetland improvement</option>';
    appendString += '<option value="4027">(W7) Conservation pond/reservoir improvement</option>';
    appendString += '<option value="4028">(W8) Check dam construction</option>';
    appendString += '<option value="4029">(W9) Rubber dam construction</option>';
    appendString += '<option value="4030">(W10) Earthen river side/Chhara side embankment</option>';
    appendString += '<option value="4031">(W10) Concrete embankment construction</option>';
    appendString += '<option value="4031">(W11) Raising existing embankment</option>';
    appendString += '<option value="4032">(W12) Install sediment trap</option>';
    appendString += '<option value="4033">(W13) Dredging/excavation/re-excavation</option>';
    appendString += '<option value="4034">(W14) Native tree plantation along waterbodies</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="preferencesOfMeasure" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="unitCost" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="potentialUnitNetGain" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';
    
    /* 1 */
    appendString += '<td>';
    appendString += '<select type="text" id="treeIncrease" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="carbonSequestration" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="cropProduction" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="livestockProduction" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';
    
    /* 5 */
    appendString += '<td>';
    appendString += '<select type="text" id="fisheriesProduction" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="waterSupply" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    /* 7 */
    appendString += '<td>';
    appendString += '<select type="text" id="waterPurification" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="wildPlantFoodFibresMedicine" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    /* 9 */
    appendString += '<td>';
    appendString += '<select type="text" id="timberRevenue" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="inorganicFertilizer" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table1e > tbody:last-child').append(appendString);

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table1e > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store1e', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();

    var sendData = '';
    var isValid = '';

    sendData = '<head>';

    $('#my_table1e > tbody > tr').each(function () {
        
        var conservationMeasuresVal = $(this).find('#conservationMeasures option:selected').val();

        var conservationMeasures = $(this).find('#conservationMeasures option:selected').text();
        var preferencesOfMeasure = $(this).find('#preferencesOfMeasure option:selected').val();
        var unitCost = $(this).find('#unitCost').val();
        var potentialUnitNetGain = $(this).find('#potentialUnitNetGain').val();
        var treeIncrease = $(this).find('#treeIncrease option:selected').val();
        var carbonSequestration = $(this).find('#carbonSequestration option:selected').val();
        var cropProduction = $(this).find('#cropProduction option:selected').val();
        var livestockProduction = $(this).find('#livestockProduction option:selected').val();
        var fisheriesProduction = $(this).find('#fisheriesProduction option:selected').val();
        var waterSupply = $(this).find('#waterSupply option:selected').val();
        var waterPurification = $(this).find('#waterPurification option:selected').val();
        var wildPlantFoodFibresMedicine = $(this).find('#wildPlantFoodFibresMedicine option:selected').val();
        var timberRevenue = $(this).find('#timberRevenue option:selected').val();
        var inorganicFertilizer = $(this).find('#inorganicFertilizer option:selected').val();
        // console.log(conservationMeasuresVal, preferencesOfMeasure, carbonSequestration, livestockProduction);
        
        if(conservationMeasuresVal == '' && preferencesOfMeasure == '' && carbonSequestration == '' && livestockProduction == '' && waterSupply == '' && wildPlantFoodFibresMedicine == '' && timberRevenue == '') {
            var errorMsg = 'Please enter some value in all visible row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else
        {
            isValid = true;

            sendData += '<row>';
            sendData += '<watershed_id>' + watershed_id + '</watershed_id>';
            sendData += '<watershed_name>' + watershed_name + '</watershed_name>';

            sendData += '<conservationMeasures>' + conservationMeasures + '</conservationMeasures>';
            sendData += '<preferencesOfMeasure>' + preferencesOfMeasure + '</preferencesOfMeasure>';
            sendData += '<unitCost>' + unitCost + '</unitCost>';
            sendData += '<potentialUnitNetGain>' + potentialUnitNetGain + '</potentialUnitNetGain>';
            sendData += '<treeIncrease>' + treeIncrease + '</treeIncrease>';
            sendData += '<carbonSequestration>' + carbonSequestration + '</carbonSequestration>';
            sendData += '<cropProduction>' + cropProduction + '</cropProduction>';
            sendData += '<livestockProduction>' + livestockProduction + '</livestockProduction>';
            sendData += '<fisheriesProduction>' + fisheriesProduction + '</fisheriesProduction>';
            sendData += '<waterSupply>' + waterSupply + '</waterSupply>';
            sendData += '<waterPurification>' + waterPurification + '</waterPurification>';
            sendData += '<wildPlantFoodFibresMedicine>' + wildPlantFoodFibresMedicine + '</wildPlantFoodFibresMedicine>';
            sendData += '<timberRevenue>' + timberRevenue + '</timberRevenue>';
            sendData += '<inorganicFertilizer>' + inorganicFertilizer + '</inorganicFertilizer>';

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
            url: "/water_resources_development_R3",
            type: "POST",
            data: { '_token' : token, 'dataToSend' : sendData },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == "SUCCESS") {
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message +'</p></span>' );
                    $('#my_table1e td input[type=text]').val('');
                    $('#my_table1e td').find('.resetSelect').prop("selectedIndex", 0);
                }
                else{
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#error_msg').html('<span style="color: red;">ERROR !! <p>'+ data.message + '</p></span>');
                }
                
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }

});

function insertTableRow1f() {

    var appendString = '';
    var rowCount = $('#my_table1f > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="conservationMeasures" class="form-control resetSelect" value="" style="width: 300px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="4021">(D1) Regenerative farming</option>';
    appendString += '<option value="4022">(D2) Drip irrigation</option>';
    appendString += '<option value="4023">(D3) Homestead improvement</option>';
    appendString += '<option value="4024">(D4) Enhanced access to agroclimatic information</option>';
    appendString += '<option value="4025">(D5) Increased value-addition and value-chain development of agroforestry products</option>';
    appendString += '<option value="4025">(D6) Development and use of certification schemes</option>';
    appendString += '<option value="4025">(D7) Awareness raising program</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="preferencesOfMeasure" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="unitCost" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="potentialUnitNetGain" class="form-control" value="" style="width: 80px;text-align: center;" placeholder="0">';
    appendString += '</td>';
    
    /* 1 */
    appendString += '<td>';
    appendString += '<select type="text" id="treeIncrease" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="carbonSequestration" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="cropProduction" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="livestockProduction" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';
    
    /* 5 */
    appendString += '<td>';
    appendString += '<select type="text" id="fisheriesProduction" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="waterSupply" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    /* 7 */
    appendString += '<td>';
    appendString += '<select type="text" id="waterPurification" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="wildPlantFoodFibresMedicine" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    /* 9 */
    appendString += '<td>';
    appendString += '<select type="text" id="timberRevenue" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="inorganicFertilizer" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table1f > tbody:last-child').append(appendString);

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table1f > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store1f', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();

    var sendData = '';
    var isValid = '';

    sendData = '<head>';

    $('#my_table1f > tbody > tr').each(function () {
        
        var conservationMeasuresVal = $(this).find('#conservationMeasures option:selected').val();

        var conservationMeasures = $(this).find('#conservationMeasures option:selected').text();
        var preferencesOfMeasure = $(this).find('#preferencesOfMeasure option:selected').val();
        var unitCost = $(this).find('#unitCost').val();
        var potentialUnitNetGain = $(this).find('#potentialUnitNetGain').val();
        var treeIncrease = $(this).find('#treeIncrease option:selected').val();
        var carbonSequestration = $(this).find('#carbonSequestration option:selected').val();
        var cropProduction = $(this).find('#cropProduction option:selected').val();
        var livestockProduction = $(this).find('#livestockProduction option:selected').val();
        var fisheriesProduction = $(this).find('#fisheriesProduction option:selected').val();
        var waterSupply = $(this).find('#waterSupply option:selected').val();
        var waterPurification = $(this).find('#waterPurification option:selected').val();
        var wildPlantFoodFibresMedicine = $(this).find('#wildPlantFoodFibresMedicine option:selected').val();
        var timberRevenue = $(this).find('#timberRevenue option:selected').val();
        var inorganicFertilizer = $(this).find('#inorganicFertilizer option:selected').val();
        // console.log(conservationMeasuresVal, preferencesOfMeasure, carbonSequestration, livestockProduction);
        
        if(conservationMeasuresVal == '' && preferencesOfMeasure == '' && carbonSequestration == '' && livestockProduction == '' && waterSupply == '' && wildPlantFoodFibresMedicine == '' && timberRevenue == '') {
            var errorMsg = 'Please enter some value in all visible row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else
        {
            isValid = true;

            sendData += '<row>';
            sendData += '<watershed_id>' + watershed_id + '</watershed_id>';
            sendData += '<watershed_name>' + watershed_name + '</watershed_name>';

            sendData += '<conservationMeasures>' + conservationMeasures + '</conservationMeasures>';
            sendData += '<preferencesOfMeasure>' + preferencesOfMeasure + '</preferencesOfMeasure>';
            sendData += '<unitCost>' + unitCost + '</unitCost>';
            sendData += '<potentialUnitNetGain>' + potentialUnitNetGain + '</potentialUnitNetGain>';
            sendData += '<treeIncrease>' + treeIncrease + '</treeIncrease>';
            sendData += '<carbonSequestration>' + carbonSequestration + '</carbonSequestration>';
            sendData += '<cropProduction>' + cropProduction + '</cropProduction>';
            sendData += '<livestockProduction>' + livestockProduction + '</livestockProduction>';
            sendData += '<fisheriesProduction>' + fisheriesProduction + '</fisheriesProduction>';
            sendData += '<waterSupply>' + waterSupply + '</waterSupply>';
            sendData += '<waterPurification>' + waterPurification + '</waterPurification>';
            sendData += '<wildPlantFoodFibresMedicine>' + wildPlantFoodFibresMedicine + '</wildPlantFoodFibresMedicine>';
            sendData += '<timberRevenue>' + timberRevenue + '</timberRevenue>';
            sendData += '<inorganicFertilizer>' + inorganicFertilizer + '</inorganicFertilizer>';

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
            url: "/capacity_development_demonstration_R3",
            type: "POST",
            data: { '_token' : token, 'dataToSend' : sendData },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == "SUCCESS") {
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message +'</p></span>' );
                    $('#my_table1f td input[type=text]').val('');
                    $('#my_table1f td').find('.resetSelect').prop("selectedIndex", 0);
                }
                else{
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#error_msg').html(data.message);
                }
                
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }

});

// 
function insertTableRow2a() {

    var appendString = '';
    var rowCount = $('#my_table2a > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="conservationMeasures" class="form-control resetSelect" value="" style="width: 300px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="4021">(A1) Transforming Jhum into agro-forestry</option>';
    appendString += '<option value="4022">(A2) Intercropping</option>';
    appendString += '<option value="4023">(A3) Crop diversification</option>';
    appendString += '<option value="4024">(A4) Introduction of climate-resilient varieties</option>';
    appendString += '<option value="4025">(A5) Fruit tree planting</option>';
    appendString += '<option value="4026">(A6) Drainage improvement</option>';
    appendString += '<option value="4027">(A7) Orchard management support</option>';
    appendString += '<option value="4028">(A8) Multi-storey Fruit Garden (MSFG)</option>';
    appendString += '<option value="4029">(A9) Multi-strata Agroforestry System (MAFS)</option>';
    appendString += '<option value="4030">(A10) SALT-1 (Sloping Agricultural Land Technology)</option>';
    appendString += '<option value="4031">(A11) SALT-2 (Sloping Agroforest Land Technology)</option>';
    appendString += '<option value="4031">(A12) SALT-3 (Sloping Agro-livestock Land Technology)</option>';
    appendString += '<option value="4032">(A13) SALT-4 (Sloping Agro-fisheries Livelihood Technology)</option>';
    appendString += '<option value="4033">(A14) Contour Hedgerow Intercropping Agro-forestry Technology (CHIAT)</option>';
    appendString += '<option value="4034">(A15) Modern Agricultural Technology (MATH)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="implementationTimeMeasures" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Immediately within 3 years">Immediately within 3 years (i)</option>';
    appendString += '<option value="Between 3-6 years">Between 3-6 years (M)</option>';
    appendString += '<option value="After 5 years may be">After 5 years may be (L)</option>';
    appendString += '</select>';
    appendString += '</td>';
    
    /* 1 */
    appendString += '<td>';
    appendString += '<select type="text" id="landUnavailable" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="supplyChainDisconnection" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="landRightProblems" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="highHumanInvestment" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';
    
    /* 5 */
    appendString += '<td>';
    appendString += '<select type="text" id="insufficientInfrastructures" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lessDemandOfAgroforestry" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    /* 7 */
    appendString += '<td>';
    appendString += '<select type="text" id="environmentallyUnsustainable" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="sociallyUnacceptable" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lessBeneficial" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="actionsOvercomeBarrier" class="form-control" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table2a > tbody:last-child').append(appendString);

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table2a > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store2a', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();

    var sendData = '';
    var isValid = '';

    sendData = '<head>';

    $('#my_table2a > tbody > tr').each(function () {
        
        var conservationMeasuresVal = $(this).find('#conservationMeasures option:selected').val();

        var conservationMeasures = $(this).find('#conservationMeasures option:selected').text();
        var implementationTimeMeasures = $(this).find('#implementationTimeMeasures option:selected').val();
        var landUnavailable = $(this).find('#landUnavailable option:selected').val();
        var supplyChainDisconnection = $(this).find('#supplyChainDisconnection option:selected').val();
        var landRightProblems = $(this).find('#landRightProblems option:selected').val();

        var highHumanInvestment = $(this).find('#highHumanInvestment option:selected').val();
        var insufficientInfrastructures = $(this).find('#insufficientInfrastructures option:selected').val();
        var lessDemandOfAgroforestry = $(this).find('#lessDemandOfAgroforestry option:selected').val();
        var environmentallyUnsustainable = $(this).find('#environmentallyUnsustainable option:selected').val();
        var sociallyUnacceptable = $(this).find('#sociallyUnacceptable option:selected').val();
        var lessBeneficial = $(this).find('#lessBeneficial option:selected').val();
        var actionsOvercomeBarrier = $(this).find('#actionsOvercomeBarrier').val();
        // console.log(conservationMeasuresVal, implementationTimeMeasures, highHumanInvestment, lessDemandOfAgroforestry);
        
        if(conservationMeasuresVal == '' && implementationTimeMeasures == '' && highHumanInvestment == '' && lessDemandOfAgroforestry == '' && sociallyUnacceptable == '' && actionsOvercomeBarrier == '' ) {
            var errorMsg = 'Please enter some value in all visible row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else
        {
            isValid = true;

            sendData += '<row>';
            sendData += '<watershed_id>' + watershed_id + '</watershed_id>';
            sendData += '<watershed_name>' + watershed_name + '</watershed_name>';

            sendData += '<conservationMeasures>' + conservationMeasures + '</conservationMeasures>';
            sendData += '<implementationTimeMeasures>' + implementationTimeMeasures + '</implementationTimeMeasures>';
            sendData += '<landUnavailable>' + landUnavailable + '</landUnavailable>';
            sendData += '<supplyChainDisconnection>' + supplyChainDisconnection + '</supplyChainDisconnection>';
            sendData += '<landRightProblems>' + landRightProblems + '</landRightProblems>';
            sendData += '<highHumanInvestment>' + highHumanInvestment + '</highHumanInvestment>';

            sendData += '<insufficientInfrastructures>' + insufficientInfrastructures + '</insufficientInfrastructures>';
            sendData += '<lessDemandOfAgroforestry>' + lessDemandOfAgroforestry + '</lessDemandOfAgroforestry>';
            sendData += '<environmentallyUnsustainable>' + environmentallyUnsustainable + '</environmentallyUnsustainable>';
            sendData += '<sociallyUnacceptable>' + sociallyUnacceptable + '</sociallyUnacceptable>';
            sendData += '<lessBeneficial>' + lessBeneficial + '</lessBeneficial>';
            sendData += '<actionsOvercomeBarrier>' + actionsOvercomeBarrier + '</actionsOvercomeBarrier>';

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
            url: "/agriculture_land_conservation_R4",
            type: "POST",
            data: { '_token' : token, 'dataToSend' : sendData },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == "SUCCESS") {
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message +'</p></span>' );
                    $('#my_table2a td input[type=text]').val('');
                    $('#my_table2a td').find('.resetSelect').prop("selectedIndex", 0);
                }
                else{
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#error_msg').html(data.message);
                }
                
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }

});

function insertTableRow2b() {

    var appendString = '';
    var rowCount = $('#my_table2b > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="conservationMeasures" class="form-control resetSelect" value="" style="width: 300px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="4021">(F1) Enrichment Plantation with native/indigenous species</option>';
    appendString += '<option value="4022">(F2) Multilayer plantation</option>';
    appendString += '<option value="4023">(F3) Assisted natural regeneration</option>';
    appendString += '<option value="4024">(F4) Transition pathway of teak tree</option>';
    appendString += '<option value="4025">(F5) Forest silviculture operations</option>';
    appendString += '<option value="4026">(F6) Establishment of community tree nurseries</option>';
    appendString += '<option value="4027">(F7) Forest fire management</option>';
    appendString += '<option value="4028">(F8) Grazing land management</option>';
    appendString += '<option value="4029">(F9) Community forest management</option>';
    appendString += '<option value="4030">(F10) Regulations and Biodiversity Conservation</option>';
    appendString += '<option value="4031">(F11) Protected area management</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="implementationTimeMeasures" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Immediately within 3 years">Immediately within 3 years (i)</option>';
    appendString += '<option value="Between 3-6 years">Between 3-6 years (M)</option>';
    appendString += '<option value="After 5 years may be">After 5 years may be (L)</option>';
    appendString += '</select>';
    appendString += '</td>';
    
    /* 1 */
    appendString += '<td>';
    appendString += '<select type="text" id="landUnavailable" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="supplyChainDisconnection" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="landRightProblems" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="highHumanInvestment" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';
    
    /* 5 */
    appendString += '<td>';
    appendString += '<select type="text" id="insufficientInfrastructures" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lessDemandOfAgroforestry" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    /* 7 */
    appendString += '<td>';
    appendString += '<select type="text" id="environmentallyUnsustainable" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="sociallyUnacceptable" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lessBeneficial" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="actionsOvercomeBarrier" class="form-control" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table2b > tbody:last-child').append(appendString);

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table2b > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store2b', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();

    var sendData = '';
    var isValid = '';

    sendData = '<head>';

    $('#my_table2b > tbody > tr').each(function () {
        
        var conservationMeasuresVal = $(this).find('#conservationMeasures option:selected').val();

        var conservationMeasures = $(this).find('#conservationMeasures option:selected').text();
        var implementationTimeMeasures = $(this).find('#implementationTimeMeasures option:selected').val();
        var landUnavailable = $(this).find('#landUnavailable option:selected').val();
        var supplyChainDisconnection = $(this).find('#supplyChainDisconnection option:selected').val();
        var landRightProblems = $(this).find('#landRightProblems option:selected').val();

        var highHumanInvestment = $(this).find('#highHumanInvestment option:selected').val();
        var insufficientInfrastructures = $(this).find('#insufficientInfrastructures option:selected').val();
        var lessDemandOfAgroforestry = $(this).find('#lessDemandOfAgroforestry option:selected').val();
        var environmentallyUnsustainable = $(this).find('#environmentallyUnsustainable option:selected').val();
        var sociallyUnacceptable = $(this).find('#sociallyUnacceptable option:selected').val();
        var lessBeneficial = $(this).find('#lessBeneficial option:selected').val();
        var actionsOvercomeBarrier = $(this).find('#actionsOvercomeBarrier').val();
        // console.log(conservationMeasuresVal, implementationTimeMeasures, highHumanInvestment, lessDemandOfAgroforestry);
        
        if(conservationMeasuresVal == '' && implementationTimeMeasures == '' && highHumanInvestment == '' && lessDemandOfAgroforestry == '' && sociallyUnacceptable == '' && actionsOvercomeBarrier == '' ) {
            var errorMsg = 'Please enter some value in all visible row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else
        {
            isValid = true;

            sendData += '<row>';
            sendData += '<watershed_id>' + watershed_id + '</watershed_id>';
            sendData += '<watershed_name>' + watershed_name + '</watershed_name>';

            sendData += '<conservationMeasures>' + conservationMeasures + '</conservationMeasures>';
            sendData += '<implementationTimeMeasures>' + implementationTimeMeasures + '</implementationTimeMeasures>';
            sendData += '<landUnavailable>' + landUnavailable + '</landUnavailable>';
            sendData += '<supplyChainDisconnection>' + supplyChainDisconnection + '</supplyChainDisconnection>';
            sendData += '<landRightProblems>' + landRightProblems + '</landRightProblems>';
            sendData += '<highHumanInvestment>' + highHumanInvestment + '</highHumanInvestment>';

            sendData += '<insufficientInfrastructures>' + insufficientInfrastructures + '</insufficientInfrastructures>';
            sendData += '<lessDemandOfAgroforestry>' + lessDemandOfAgroforestry + '</lessDemandOfAgroforestry>';
            sendData += '<environmentallyUnsustainable>' + environmentallyUnsustainable + '</environmentallyUnsustainable>';
            sendData += '<sociallyUnacceptable>' + sociallyUnacceptable + '</sociallyUnacceptable>';
            sendData += '<lessBeneficial>' + lessBeneficial + '</lessBeneficial>';
            sendData += '<actionsOvercomeBarrier>' + actionsOvercomeBarrier + '</actionsOvercomeBarrier>';

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
            url: "/forestOrShrubLandConservation_R4",
            type: "POST",
            data: { '_token' : token, 'dataToSend' : sendData },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == "SUCCESS") {
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message +'</p></span>' );
                    $('#my_table2b td input[type=text]').val('');
                    $('#my_table2b td').find('.resetSelect').prop("selectedIndex", 0);
                }
                else{
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#error_msg').html(data.message);
                }
                
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }

});

function insertTableRow2c() {

    var appendString = '';
    var rowCount = $('#my_table2c > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="conservationMeasures" class="form-control resetSelect" value="" style="width: 300px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="4021">(L1) Rehabilitation of degraded lands</option>';
    appendString += '<option value="4022">(L2) Reclamation of disaster affected river bed side and agricultural land</option>';
    appendString += '<option value="4023">(L3) Landslide treatment</option>';
    appendString += '<option value="4024">(L4) Gully treatment</option>';
    appendString += '<option value="4025">(L5) Sustainable soil management</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="implementationTimeMeasures" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Immediately within 3 years">Immediately within 3 years (i)</option>';
    appendString += '<option value="Between 3-6 years">Between 3-6 years (M)</option>';
    appendString += '<option value="After 5 years may be">After 5 years may be (L)</option>';
    appendString += '</select>';
    appendString += '</td>';
    
    /* 1 */
    appendString += '<td>';
    appendString += '<select type="text" id="landUnavailable" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="supplyChainDisconnection" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="landRightProblems" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="highHumanInvestment" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';
    
    /* 5 */
    appendString += '<td>';
    appendString += '<select type="text" id="insufficientInfrastructures" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lessDemandOfAgroforestry" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    /* 7 */
    appendString += '<td>';
    appendString += '<select type="text" id="environmentallyUnsustainable" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="sociallyUnacceptable" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lessBeneficial" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="actionsOvercomeBarrier" class="form-control" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table2c > tbody:last-child').append(appendString);

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table2c > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store2c', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();

    var sendData = '';
    var isValid = '';

    sendData = '<head>';

    $('#my_table2c > tbody > tr').each(function () {
        
        var conservationMeasuresVal = $(this).find('#conservationMeasures option:selected').val();

        var conservationMeasures = $(this).find('#conservationMeasures option:selected').text();
        var implementationTimeMeasures = $(this).find('#implementationTimeMeasures option:selected').val();
        var landUnavailable = $(this).find('#landUnavailable option:selected').val();
        var supplyChainDisconnection = $(this).find('#supplyChainDisconnection option:selected').val();
        var landRightProblems = $(this).find('#landRightProblems option:selected').val();

        var highHumanInvestment = $(this).find('#highHumanInvestment option:selected').val();
        var insufficientInfrastructures = $(this).find('#insufficientInfrastructures option:selected').val();
        var lessDemandOfAgroforestry = $(this).find('#lessDemandOfAgroforestry option:selected').val();
        var environmentallyUnsustainable = $(this).find('#environmentallyUnsustainable option:selected').val();
        var sociallyUnacceptable = $(this).find('#sociallyUnacceptable option:selected').val();
        var lessBeneficial = $(this).find('#lessBeneficial option:selected').val();
        var actionsOvercomeBarrier = $(this).find('#actionsOvercomeBarrier').val();
        // console.log(conservationMeasuresVal, implementationTimeMeasures, highHumanInvestment, lessDemandOfAgroforestry);
        
        if(conservationMeasuresVal == '' && implementationTimeMeasures == '' && highHumanInvestment == '' && lessDemandOfAgroforestry == '' && sociallyUnacceptable == '' && actionsOvercomeBarrier == '' ) {
            var errorMsg = 'Please enter some value in all visible row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else
        {
            isValid = true;

            sendData += '<row>';
            sendData += '<watershed_id>' + watershed_id + '</watershed_id>';
            sendData += '<watershed_name>' + watershed_name + '</watershed_name>';

            sendData += '<conservationMeasures>' + conservationMeasures + '</conservationMeasures>';
            sendData += '<implementationTimeMeasures>' + implementationTimeMeasures + '</implementationTimeMeasures>';
            sendData += '<landUnavailable>' + landUnavailable + '</landUnavailable>';
            sendData += '<supplyChainDisconnection>' + supplyChainDisconnection + '</supplyChainDisconnection>';
            sendData += '<landRightProblems>' + landRightProblems + '</landRightProblems>';
            sendData += '<highHumanInvestment>' + highHumanInvestment + '</highHumanInvestment>';

            sendData += '<insufficientInfrastructures>' + insufficientInfrastructures + '</insufficientInfrastructures>';
            sendData += '<lessDemandOfAgroforestry>' + lessDemandOfAgroforestry + '</lessDemandOfAgroforestry>';
            sendData += '<environmentallyUnsustainable>' + environmentallyUnsustainable + '</environmentallyUnsustainable>';
            sendData += '<sociallyUnacceptable>' + sociallyUnacceptable + '</sociallyUnacceptable>';
            sendData += '<lessBeneficial>' + lessBeneficial + '</lessBeneficial>';
            sendData += '<actionsOvercomeBarrier>' + actionsOvercomeBarrier + '</actionsOvercomeBarrier>';

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
            url: "/degradedSoilLandImprovement_R4",
            type: "POST",
            data: { '_token' : token, 'dataToSend' : sendData },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == "SUCCESS") {
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message +'</p></span>' );
                    $('#my_table2c td input[type=text]').val('');
                    $('#my_table2c td').find('.resetSelect').prop("selectedIndex", 0);
                }
                else{
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#error_msg').html(data.message);
                }
                
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }

});

function insertTableRow2d() {

    var appendString = '';
    var rowCount = $('#my_table2d > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="conservationMeasures" class="form-control resetSelect" value="" style="width: 300px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="4021">(S1) Buffer strip plantation/Bio-engineering methods</option>';
    appendString += '<option value="4022">(S2) Protection wall/Embankment/Retaining wall/Spurs</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="implementationTimeMeasures" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="01">Immediately within 3 years (i)</option>';
    appendString += '<option value="02">Between 3-6 years (M)</option>';
    appendString += '<option value="03">After 5 years may be (L)</option>';
    appendString += '</select>';
    appendString += '</td>';
    
    /* 1 */
    appendString += '<td>';
    appendString += '<select type="text" id="landUnavailable" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="supplyChainDisconnection" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="landRightProblems" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="highHumanInvestment" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';
    
    /* 5 */
    appendString += '<td>';
    appendString += '<select type="text" id="insufficientInfrastructures" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lessDemandOfAgroforestry" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    /* 7 */
    appendString += '<td>';
    appendString += '<select type="text" id="environmentallyUnsustainable" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="sociallyUnacceptable" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lessBeneficial" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="actionsOvercomeBarrier" class="form-control" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table2d > tbody:last-child').append(appendString);

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table2d > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store2d', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();

    var sendData = '';
    var isValid = '';

    sendData = '<head>';

    $('#my_table2d > tbody > tr').each(function () {
        
        var conservationMeasuresVal = $(this).find('#conservationMeasures option:selected').val();

        var conservationMeasures = $(this).find('#conservationMeasures option:selected').text();
        var implementationTimeMeasures = $(this).find('#implementationTimeMeasures option:selected').val();
        var landUnavailable = $(this).find('#landUnavailable option:selected').val();
        var supplyChainDisconnection = $(this).find('#supplyChainDisconnection option:selected').val();
        var landRightProblems = $(this).find('#landRightProblems option:selected').val();

        var highHumanInvestment = $(this).find('#highHumanInvestment option:selected').val();
        var insufficientInfrastructures = $(this).find('#insufficientInfrastructures option:selected').val();
        var lessDemandOfAgroforestry = $(this).find('#lessDemandOfAgroforestry option:selected').val();
        var environmentallyUnsustainable = $(this).find('#environmentallyUnsustainable option:selected').val();
        var sociallyUnacceptable = $(this).find('#sociallyUnacceptable option:selected').val();
        var lessBeneficial = $(this).find('#lessBeneficial option:selected').val();
        var actionsOvercomeBarrier = $(this).find('#actionsOvercomeBarrier').val();
        // console.log(conservationMeasuresVal, implementationTimeMeasures, highHumanInvestment, lessDemandOfAgroforestry);
        
        if(conservationMeasuresVal == '' && implementationTimeMeasures == '' && highHumanInvestment == '' && lessDemandOfAgroforestry == '' && sociallyUnacceptable == '' && actionsOvercomeBarrier == '' ) {
            var errorMsg = 'Please enter some value in all visible row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else
        {
            isValid = true;

            sendData += '<row>';
            sendData += '<watershed_id>' + watershed_id + '</watershed_id>';
            sendData += '<watershed_name>' + watershed_name + '</watershed_name>';

            sendData += '<conservationMeasures>' + conservationMeasures + '</conservationMeasures>';
            sendData += '<implementationTimeMeasures>' + implementationTimeMeasures + '</implementationTimeMeasures>';
            sendData += '<landUnavailable>' + landUnavailable + '</landUnavailable>';
            sendData += '<supplyChainDisconnection>' + supplyChainDisconnection + '</supplyChainDisconnection>';
            sendData += '<landRightProblems>' + landRightProblems + '</landRightProblems>';
            sendData += '<highHumanInvestment>' + highHumanInvestment + '</highHumanInvestment>';

            sendData += '<insufficientInfrastructures>' + insufficientInfrastructures + '</insufficientInfrastructures>';
            sendData += '<lessDemandOfAgroforestry>' + lessDemandOfAgroforestry + '</lessDemandOfAgroforestry>';
            sendData += '<environmentallyUnsustainable>' + environmentallyUnsustainable + '</environmentallyUnsustainable>';
            sendData += '<sociallyUnacceptable>' + sociallyUnacceptable + '</sociallyUnacceptable>';
            sendData += '<lessBeneficial>' + lessBeneficial + '</lessBeneficial>';
            sendData += '<actionsOvercomeBarrier>' + actionsOvercomeBarrier + '</actionsOvercomeBarrier>';

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
            url: "/streamBankProtection_R4",
            type: "POST",
            data: { '_token' : token, 'dataToSend' : sendData },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == "SUCCESS") {
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message +'</p></span>' );
                    $('#my_table2d td input[type=text]').val('');
                    $('#my_table2d td').find('.resetSelect').prop("selectedIndex", 0);
                }
                else{
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#error_msg').html(data.message);
                }
                
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }

});

function insertTableRow2e() {

    var appendString = '';
    var rowCount = $('#my_table2e > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="conservationMeasures" class="form-control resetSelect" value="" style="width: 300px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="4021">(W1) Irrigation canal improvement</option>';
    appendString += '<option value="4022">(W2) Drinking Water spring improvement</option>';
    appendString += '<option value="4023">(W3) Water harvesting reservoir with dam construction</option>';
    appendString += '<option value="4024">(W4) Water harvesting pond</option>';
    appendString += '<option value="4025">(W5) Ground water recharge pits/trenches</option>';
    appendString += '<option value="4026">(W6) Wetland improvement</option>';
    appendString += '<option value="4027">(W7) Conservation pond/reservoir improvement</option>';
    appendString += '<option value="4028">(W8) Check dam construction</option>';
    appendString += '<option value="4029">(W9) Rubber dam construction</option>';
    appendString += '<option value="4030">(W10) Earthen river side/Chhara side embankment</option>';
    appendString += '<option value="4031">(W10) Concrete embankment construction</option>';
    appendString += '<option value="4031">(W11) Raising existing embankment</option>';
    appendString += '<option value="4032">(W12) Install sediment trap</option>';
    appendString += '<option value="4033">(W13) Dredging/excavation/re-excavation</option>';
    appendString += '<option value="4034">(W14) Native tree plantation along waterbodies</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="implementationTimeMeasures" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Immediately within 3 years">Immediately within 3 years (i)</option>';
    appendString += '<option value="Between 3-6 years">Between 3-6 years (M)</option>';
    appendString += '<option value="After 5 years may be">After 5 years may be (L)</option>';
    appendString += '</select>';
    appendString += '</td>';
    
    /* 1 */
    appendString += '<td>';
    appendString += '<select type="text" id="landUnavailable" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="supplyChainDisconnection" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="landRightProblems" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="highHumanInvestment" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';
    
    /* 5 */
    appendString += '<td>';
    appendString += '<select type="text" id="insufficientInfrastructures" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lessDemandOfAgroforestry" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    /* 7 */
    appendString += '<td>';
    appendString += '<select type="text" id="environmentallyUnsustainable" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="sociallyUnacceptable" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lessBeneficial" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="actionsOvercomeBarrier" class="form-control" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table2e > tbody:last-child').append(appendString);

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table2e > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store2e', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();

    var sendData = '';
    var isValid = '';

    sendData = '<head>';

    $('#my_table2e > tbody > tr').each(function () {
        
        var conservationMeasuresVal = $(this).find('#conservationMeasures option:selected').val();

        var conservationMeasures = $(this).find('#conservationMeasures option:selected').text();
        var implementationTimeMeasures = $(this).find('#implementationTimeMeasures option:selected').val();
        var landUnavailable = $(this).find('#landUnavailable option:selected').val();
        var supplyChainDisconnection = $(this).find('#supplyChainDisconnection option:selected').val();
        var landRightProblems = $(this).find('#landRightProblems option:selected').val();

        var highHumanInvestment = $(this).find('#highHumanInvestment option:selected').val();
        var insufficientInfrastructures = $(this).find('#insufficientInfrastructures option:selected').val();
        var lessDemandOfAgroforestry = $(this).find('#lessDemandOfAgroforestry option:selected').val();
        var environmentallyUnsustainable = $(this).find('#environmentallyUnsustainable option:selected').val();
        var sociallyUnacceptable = $(this).find('#sociallyUnacceptable option:selected').val();
        var lessBeneficial = $(this).find('#lessBeneficial option:selected').val();
        var actionsOvercomeBarrier = $(this).find('#actionsOvercomeBarrier').val();
        // console.log(conservationMeasuresVal, implementationTimeMeasures, highHumanInvestment, lessDemandOfAgroforestry);
        
        if(conservationMeasuresVal == '' && implementationTimeMeasures == '' && highHumanInvestment == '' && lessDemandOfAgroforestry == '' && sociallyUnacceptable == '' && actionsOvercomeBarrier == '' ) {
            var errorMsg = 'Please enter some value in all visible row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else
        {
            isValid = true;

            sendData += '<row>';
            sendData += '<watershed_id>' + watershed_id + '</watershed_id>';
            sendData += '<watershed_name>' + watershed_name + '</watershed_name>';

            sendData += '<conservationMeasures>' + conservationMeasures + '</conservationMeasures>';
            sendData += '<implementationTimeMeasures>' + implementationTimeMeasures + '</implementationTimeMeasures>';
            sendData += '<landUnavailable>' + landUnavailable + '</landUnavailable>';
            sendData += '<supplyChainDisconnection>' + supplyChainDisconnection + '</supplyChainDisconnection>';
            sendData += '<landRightProblems>' + landRightProblems + '</landRightProblems>';
            sendData += '<highHumanInvestment>' + highHumanInvestment + '</highHumanInvestment>';

            sendData += '<insufficientInfrastructures>' + insufficientInfrastructures + '</insufficientInfrastructures>';
            sendData += '<lessDemandOfAgroforestry>' + lessDemandOfAgroforestry + '</lessDemandOfAgroforestry>';
            sendData += '<environmentallyUnsustainable>' + environmentallyUnsustainable + '</environmentallyUnsustainable>';
            sendData += '<sociallyUnacceptable>' + sociallyUnacceptable + '</sociallyUnacceptable>';
            sendData += '<lessBeneficial>' + lessBeneficial + '</lessBeneficial>';
            sendData += '<actionsOvercomeBarrier>' + actionsOvercomeBarrier + '</actionsOvercomeBarrier>';

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
            url: "/waterResourcesDevelopment_R4",
            type: "POST",
            data: { '_token' : token, 'dataToSend' : sendData },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == "SUCCESS") {
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message +'</p></span>' );
                    $('#my_table2e td input[type=text]').val('');
                    $('#my_table2e td').find('.resetSelect').prop("selectedIndex", 0);
                }
                else{
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#error_msg').html(data.message);
                }
                
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }

});

function insertTableRow2f() {

    var appendString = '';
    var rowCount = $('#my_table2f > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';
    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="conservationMeasures" class="form-control resetSelect" value="" style="width: 300px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="4021">(D1) Regenerative farming</option>';
    appendString += '<option value="4022">(D2) Drip irrigation</option>';
    appendString += '<option value="4023">(D3) Homestead improvement</option>';
    appendString += '<option value="4024">(D4) Enhanced access to agroclimatic information</option>';
    appendString += '<option value="4025">(D5) Increased value-addition and value-chain development of agroforestry products</option>';
    appendString += '<option value="4025">(D6) Development and use of certification schemes</option>';
    appendString += '<option value="4025">(D7) Awareness raising program</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="implementationTimeMeasures" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Immediately within 3 years">Immediately within 3 years (i)</option>';
    appendString += '<option value="Between 3-6 years">Between 3-6 years (M)</option>';
    appendString += '<option value="After 5 years may be">After 5 years may be (L)</option>';
    appendString += '</select>';
    appendString += '</td>';
    
    /* 1 */
    appendString += '<td>';
    appendString += '<select type="text" id="landUnavailable" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="supplyChainDisconnection" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="landRightProblems" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="highHumanInvestment" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';
    
    /* 5 */
    appendString += '<td>';
    appendString += '<select type="text" id="insufficientInfrastructures" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lessDemandOfAgroforestry" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    /* 7 */
    appendString += '<td>';
    appendString += '<select type="text" id="environmentallyUnsustainable" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="sociallyUnacceptable" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lessBeneficial" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="High">High</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="actionsOvercomeBarrier" class="form-control" value="" style="width: 100px;text-align: center;" placeholder="0">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table2f > tbody:last-child').append(appendString);

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table2f > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store2f', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();

    var sendData = '';
    var isValid = '';

    sendData = '<head>';

    $('#my_table2f > tbody > tr').each(function () {
        
        var conservationMeasuresVal = $(this).find('#conservationMeasures option:selected').val();

        var conservationMeasures = $(this).find('#conservationMeasures option:selected').text();
        var implementationTimeMeasures = $(this).find('#implementationTimeMeasures option:selected').val();
        var landUnavailable = $(this).find('#landUnavailable option:selected').val();
        var supplyChainDisconnection = $(this).find('#supplyChainDisconnection option:selected').val();
        var landRightProblems = $(this).find('#landRightProblems option:selected').val();

        var highHumanInvestment = $(this).find('#highHumanInvestment option:selected').val();
        var insufficientInfrastructures = $(this).find('#insufficientInfrastructures option:selected').val();
        var lessDemandOfAgroforestry = $(this).find('#lessDemandOfAgroforestry option:selected').val();
        var environmentallyUnsustainable = $(this).find('#environmentallyUnsustainable option:selected').val();
        var sociallyUnacceptable = $(this).find('#sociallyUnacceptable option:selected').val();
        var lessBeneficial = $(this).find('#lessBeneficial option:selected').val();
        var actionsOvercomeBarrier = $(this).find('#actionsOvercomeBarrier').val();
        // console.log(conservationMeasuresVal, implementationTimeMeasures, highHumanInvestment, lessDemandOfAgroforestry);
        
        if(conservationMeasuresVal == '' && implementationTimeMeasures == '' && highHumanInvestment == '' && lessDemandOfAgroforestry == '' && sociallyUnacceptable == '' && actionsOvercomeBarrier == '' ) {
            var errorMsg = 'Please enter some value in all visible row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else
        {
            isValid = true;

            sendData += '<row>';
            sendData += '<watershed_id>' + watershed_id + '</watershed_id>';
            sendData += '<watershed_name>' + watershed_name + '</watershed_name>';

            sendData += '<conservationMeasures>' + conservationMeasures + '</conservationMeasures>';
            sendData += '<implementationTimeMeasures>' + implementationTimeMeasures + '</implementationTimeMeasures>';
            sendData += '<landUnavailable>' + landUnavailable + '</landUnavailable>';
            sendData += '<supplyChainDisconnection>' + supplyChainDisconnection + '</supplyChainDisconnection>';
            sendData += '<landRightProblems>' + landRightProblems + '</landRightProblems>';
            sendData += '<highHumanInvestment>' + highHumanInvestment + '</highHumanInvestment>';

            sendData += '<insufficientInfrastructures>' + insufficientInfrastructures + '</insufficientInfrastructures>';
            sendData += '<lessDemandOfAgroforestry>' + lessDemandOfAgroforestry + '</lessDemandOfAgroforestry>';
            sendData += '<environmentallyUnsustainable>' + environmentallyUnsustainable + '</environmentallyUnsustainable>';
            sendData += '<sociallyUnacceptable>' + sociallyUnacceptable + '</sociallyUnacceptable>';
            sendData += '<lessBeneficial>' + lessBeneficial + '</lessBeneficial>';
            sendData += '<actionsOvercomeBarrier>' + actionsOvercomeBarrier + '</actionsOvercomeBarrier>';

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
            url: "/capacityDevelopmentDemonstration_R4",
            type: "POST",
            data: { '_token' : token, 'dataToSend' : sendData },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == "SUCCESS") {
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message +'</p></span>' );
                    $('#my_table2f td input[type=text]').val('');
                    $('#my_table2f td').find('.resetSelect').prop("selectedIndex", 0);
                }
                else{
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#error_msg').html(data.message);
                }
                
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }

});


$(document).on('click', '#btn_store2', function () {

    var created_by = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    // var para_id = $('#para_id').val();
    // var para_name = $('#para_name').val();
    var map_unit = $('#map_unit').val();
    var area_of_map_unit = $('#area_of_map_unit').val();

    var sendData = '';
    var isValid = '';

    sendData = '<head>';

    $('#my_table2 > tbody > tr').each(function () {
        
        var indicator = $(this).closest('tr').find('td:eq(1)').text();
        var forest = $(this).find('#forest').val();
        var herb = $(this).find('#herb').val();
        var orchard = $(this).find('#orchard').val();
        var shifting = $(this).find('#shifting').val();
        var crop_land = $(this).find('#crop_land').val();
        var lake = $(this).find('#lake').val();
        var baor = $(this).find('#baor').val();
        var rivers = $(this).find('#rivers').val();
        var ponds = $(this).find('#ponds').val();
        var aquaculture = $(this).find('#aquaculture').val();
        var rural = $(this).find('#rural').val();
        var brickfield = $(this).find('#brickfield').val();
        var helipad = $(this).find('#helipad').val();
        var road = $(this).find('#road').val();
        var sand = $(this).find('#sand').val();
        var remark = $(this).find('#remark').val();
        
        if(forest == '' && orchard == '' && crop_land == '' && baor == '' && ponds == '' && aquaculture == '' && brickfield == '' && sand == '') {
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
            // sendData += '<para_id>' + para_id + '</para_id>';
            // sendData += '<para_name>' + para_name + '</para_name>';

            sendData += '<map_unit>' + map_unit + '</map_unit>';
            sendData += '<area_of_map_unit>' + area_of_map_unit + '</area_of_map_unit>';

            sendData += '<indicator>' + indicator + '</indicator>';
            sendData += '<forest>' + forest + '</forest>';
            sendData += '<herb>' + herb + '</herb>';
            sendData += '<orchard>' + orchard + '</orchard>';
            sendData += '<shifting>' + shifting + '</shifting>';
            sendData += '<crop_land>' + crop_land + '</crop_land>';
            sendData += '<lake>' + lake + '</lake>';
            sendData += '<baor>' + baor + '</baor>';
            sendData += '<rivers>' + rivers + '</rivers>';
            sendData += '<ponds>' + ponds + '</ponds>';
            sendData += '<aquaculture>' + aquaculture + '</aquaculture>';
            sendData += '<rural>' + rural + '</rural>';
            sendData += '<brickfield>' + brickfield + '</brickfield>';
            sendData += '<helipad>' + helipad + '</helipad>';
            sendData += '<road>' + road + '</road>';
            sendData += '<sand>' + sand + '</sand>';
            sendData += '<remark>' + remark + '</remark>';

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
            url: "/store_existing_conversation",
            type: "POST",
            data: { '_token' : token, 'dataToSend' : sendData },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == "SUCCESS"){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table2 td input[type=text]').val('');
                }
                else{
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#error_msg').html(data.message);
                }
                
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }



});




