

// developed by : Talha || date : 15-dec-2023
// document.title = 'Livestock Entry';

$(document).ready(function () {

    console.log("hello talha..");
    
    $(document).on('change', '#watershedId', function(){
        $("#watershedId").siblings().children().children().css('background-color', 'transparent');
    });

    $(document).on('change', '#para_list', function(){
        $("#para_list").siblings().children().children().css('background-color', 'transparent');
    });

    // $('#watershedId').select2();
    // $('.select2').css({'border': '2px solid #898AEE', 'border-radius': '5px'});
    // $('#para_list').prop('disabled', true);

    insertTableRow11();
    insertTableRow12();

    insertTableRow21();
    insertTableRow22();
    insertTableRow23();
    insertTableRow24();

    insertTableRow3();
    insertTableRow4();
    insertTableRow5();
    insertTableRow6();
    insertTableRow7();

    myTable2 = {
        '001' : 'Native Species',
        '002' : 'Exotic/Alien Species',
        '003' : 'Medicinal Trees',
        '004' : 'Fruit Trees',
    };

    var option = ' <option value="" selected disabled> Select Option</option>';
    $.each(myTable2, function(key, name) {
       option += '<option value="'+name+'">'+name+'</option>';
    });
    $('#species_cat').html(option);

    myTable3 = {
        '001' : 'Monkey',
        '002' : 'Hati',
        '003' : 'Ajogor shap',
        '004' : 'Wild Bore',
        '005' : 'Gecho bagh',
        '006' : 'Black bear',
        '007' : 'Tokkhok',
        '008' : 'Butterfly',
        '009' : 'Guishap',
        '010' : 'Beng',
        '011' : 'Others',
    };

    var option = ' <option value="" selected disabled> Select Option</option>';
    $.each(myTable3, function(key, name) {
       option += '<option value="'+name+'">'+name+'</option>';
    });
    $('#wild_category').html(option);

    myTable4 = {
        '001' : 'Forest area',
        '002' : 'Canopy layer/ Canopy Cover',
        '003' : 'Wildlife habitat and status',
        '004' : 'Multilayer plantation',
        '005' : 'Soil fertility',
        '006' : 'Number of dead trees / Deforestation rate',
        '007' : 'Commercial/ Monoculture Plantation',
        '008' : 'Soil erosion /land slide',
        '009' : 'Water Availability',
        '010' : 'Forest/NTFP Production',
    };

    var option = ' <option value="" selected disabled> Select Option</option>';
    $.each(myTable4, function(key, name) {
       option += '<option value="'+name+'">'+name+'</option>';
    });
    $('#forest_status').html(option);

    myTable5 = {
        '001' : 'Bengali/common name: Baranukha. Tribal name: Khojutti (Chakma),  Kenchuri dalok (Tripura), Kyu-churi (marma), Tikri (Tripura)',
        '002' : 'Indian water lily  (Sada Shapla)',
        '003' : 'Kochu (Elephant ear)',
        '004' : 'Dheki Shak',
        '005' : 'Water hyacinth (Kochuripana)',
        '006' : 'Chailla ghash',
        '007' : 'Others',
    };

    var option = ' <option value="" selected disabled> Select Option</option>';
    $.each(myTable5, function(key, name) {
       option += '<option value="'+name+'">'+name+'</option>';
    });
    $('#aquatic_vegetation').html(option);
    

});

$('#add_row21').on('click', function(){
    insertTableRow21();
});

$('#add_row22').on('click', function(){
    insertTableRow22();
});

$('#add_row23').on('click', function(){
    insertTableRow23();
});

$('#add_row24').on('click', function(){
    insertTableRow24();
});

$('#add_row3').on('click', function(){
    insertTableRow3();

    myTable3 = {
        '001' : 'Monkey',
        '002' : 'Hati',
        '003' : 'Ajogor shap',
        '004' : 'Wild Bore',
        '005' : 'Gecho bagh',
        '006' : 'Black bear',
        '007' : 'Tokkhok',
        '008' : 'Butterfly',
        '009' : 'Guishap',
        '010' : 'Beng',
    };

    var option = ' <option value="" selected disabled> Select Option</option>';
    $.each(myTable3, function(key, name) {
       option += '<option value="'+name+'">'+name+'</option>';
    });
    $('.more3').html(option);

});
$('#add_row4').on('click', function(){
    addMoreTableRow4();
});
$('#add_row5').on('click', function(){
    insertTableRow5();

    myTable5 = {
        '001' : 'Bengali/common name: Baranukha. Tribal name: Khojutti (Chakma),  Kenchuri dalok (Tripura), Kyu-churi (marma), Tikri (Tripura)',
        '002' : 'Indian water lily  (Sada Shapla)',
        '003' : 'Kochu (Elephant ear)',
        '004' : 'Dheki Shak',
        '005' : 'Water hyacinth (Kochuripana)',
        '006' : 'Chailla ghash',
        '007' : 'Others',
    };

    var option = ' <option value="" selected disabled> Select Option</option>';
    $.each(myTable5, function(key, name) {
       option += '<option value="'+name+'">'+name+'</option>';
    });
    $('.more5').html(option);

});

function insertTableRow11() {

    var appendString = '';
    var rowCount = $('#my_table11 > tbody > tr').length;
    rowCount++;

    // console.log(accountName);

    appendString += '<tr>';

    // appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="nameOf_vcf" name="nameOf_vcf" class="form-control" value="" style="width: 220px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="areaOf_vcf" name="areaOf_vcf" class="form-control" value="" style="width: 220px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="distance_from_para" name="distance_from_para" class="form-control" value="" style="width: 220px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="overall_status" name="overall_status" class="form-control resetSelect" value="" style="width: 250px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Degraded">Degraded</option>';
    appendString += '<option value="Partially Degraded">Partially Degraded</option>';
    appendString += '<option value="No change">No change</option>';
    appendString += '<option value="Improved">Improved</option>';
    appendString += '</select>';
    appendString += '</td>';

    // appendString += '<td style="text-align: center;">';
    // appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    // appendString += '</td>';

    appendString += '</tr>';

    $('#my_table11 > tbody:last-child').append(appendString);
}

function insertTableRow12() {

    var appendString = '';
    var rowCount = $('#my_table12 > tbody > tr').length;
    rowCount++;

    // console.log(accountName);

    appendString += '<tr>';

    // appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="timber" name="timber" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="bamboo" name="bamboo" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="fruit" name="fruit" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="fuel_wood" name="fuel_wood" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="thatch" name="thatch" class="form-control resetSelect" value="" style="width: 250px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="honey" name="honey" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="medical_plant" name="medical_plant" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="bush_meat" name="bush_meat" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    // appendString += '<td style="text-align: center;">';
    // appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    // appendString += '</td>';

    appendString += '</tr>';


    $('#my_table12 > tbody:last-child').append(appendString);
}

$(document).on('click', '#btn_store1', function (event) {

    event.preventDefault();
    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var nameOf_vcf = $('#nameOf_vcf').val();
    var areaOf_vcf = $('#areaOf_vcf').val();
    var distance_from_para = $('#distance_from_para').val();
    var overall_status = $('#overall_status option:selected').val();

    var timber = $('#timber option:selected').val();
    var bamboo = $('#bamboo option:selected').val();
    var fruit = $('#fruit option:selected').val();
    var fuel_wood = $('#fuel_wood option:selected').val();
    var thatch = $('#thatch option:selected').val();
    var honey = $('#honey option:selected').val();
    var medical_plant = $('#medical_plant option:selected').val();
    var bush_meat = $('#bush_meat option:selected').val();

    var form = $('#my_form')[0];
    var formdata = new FormData(form);
    formdata.append( "_token", token);
    formdata.append( "watershed_id", watershed_id);
    formdata.append( "watershed_name", watershed_name);
    formdata.append( "para_id", para_id);
    formdata.append( "para_name", para_name);

    formdata.append( "nameOf_vcf", nameOf_vcf);
    formdata.append( "areaOf_vcf", areaOf_vcf);
    formdata.append( "distance_from_para", distance_from_para);
    formdata.append( "overall_status", overall_status);

    formdata.append( "timber", timber);
    formdata.append( "bamboo", bamboo);
    formdata.append( "fruit", fruit);
    formdata.append( "fuel_wood", fuel_wood);
    formdata.append( "thatch", thatch);
    formdata.append( "honey", honey);
    formdata.append( "medical_plant", medical_plant);
    formdata.append( "bush_meat", bush_meat);

    formdata.append( "created_by", created_by);
    
    console.log(formdata);

    // clear model message value for every ajax call provide single accurate message
    $('#success_msg').html('');
    $('#error_msg').html('');

    $.ajax({
        url: "/store_beneficiaryOf_vcf_for_para",
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
                // Initial values
                $('#my_table1 td').find('.resetSelect').prop("selectedIndex", 0);
                $('#my_table1 td input[type=text]').val('');
                //window.location.reload(true);
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

function insertTableRow21() {

    var appendString = '';
    var rowCount = $('#my_table21 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    // appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="dominantSpecies" name="dominantSpecies" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Garjan">Garjan</option>';
    appendString += '<option value="Gamar">Gamar</option>';
    appendString += '<option value="Telsur">Telsur</option>';
    appendString += '<option value="Konok">Konok</option>';
    appendString += '<option value="Bamboo">Bamboo</option>';
    appendString += '<option value="Kadam">Kadam</option>';
    appendString += '<option value="Pakur/BOT">Pakur/BOT</option>';
    appendString += '<option value="Cane">Cane</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="plant_animalRelationship" class="form-control resetSelect" value="" style="width: 90px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="High">High (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Low">Low (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="productionCostAfter1stRotation" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="yield" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="sellingPrice" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="profit" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="waterDemandOftheSpecies" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="High">High (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Low">Low (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lightDemand" name="lightDemand" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="High">High (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Low">Low (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="rootType" name="rootType" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="High">High (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Low">Low (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="slope" name="slope" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="0-5">0-5</option>';
    appendString += '<option value="5-15">5-15</option>';
    appendString += '<option value="15-30">15-30</option>';
    appendString += '<option value="30-60">30-60</option>';
    appendString += '<option value="avobe 60">Avobe 60</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="tree_timberDemand" name="tree_timberDemand" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="High">High (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Low">Low (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="soilandWaterRetentionCapacity" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="presentCoverage" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="presentTree_acre" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="pastCoverage" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up..">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table21 > tbody:last-child').append(appendString);
    
    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table21 > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store21', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var xml_data = '';
    var isValid = '';

    xml_data = '<head>';

    $('#my_table21 > tbody > tr').each(function () {

        // var livestock_name = $(this).find('td:eq(1)').text(); 
        
        var dominantSpecies = $(this).find('#dominantSpecies option:selected').val();
        var plant_animalRelationship = $(this).find('#plant_animalRelationship option:selected').val();
        var productionCostAfter1stRotation = $(this).find('#productionCostAfter1stRotation').val();
        var yield = $(this).find('#yield').val();
        var sellingPrice = $(this).find('#sellingPrice').val();
        var profit = $(this).find('#profit').val();

        var waterDemandOftheSpecies = $(this).find('#waterDemandOftheSpecies option:selected').val();
        var lightDemand = $(this).find('#lightDemand option:selected').val();
        var rootType = $(this).find('#rootType option:selected').val();
        var slope = $(this).find('#slope option:selected').val();
        var tree_timberDemand = $(this).find('#tree_timberDemand option:selected').val();

        var soilandWaterRetentionCapacity = $(this).find('#soilandWaterRetentionCapacity').val();
        var presentCoverage = $(this).find('#presentCoverage').val();
        var presentTree_acre = $(this).find('#presentTree_acre').val();
        var pastCoverage = $(this).find('#pastCoverage').val();

        if(dominantSpecies == '' && plant_animalRelationship == '' && yield == '' && lightDemand == '' && tree_timberDemand == '' && presentTree_acre == ''){
            var errorMsg = 'Please enter some value in each visible row.';
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
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<dominantSpecies>' + dominantSpecies + '</dominantSpecies>';
            xml_data += '<plant_animalRelationship>' + plant_animalRelationship + '</plant_animalRelationship>';
            xml_data += '<productionCostAfter1stRotation>' + productionCostAfter1stRotation + '</productionCostAfter1stRotation>';
            xml_data += '<yield>' + yield + '</yield>';
            xml_data += '<sellingPrice>' + sellingPrice + '</sellingPrice>';
            xml_data += '<profit>' + profit + '</profit>';

            xml_data += '<waterDemandOftheSpecies>' + waterDemandOftheSpecies + '</waterDemandOftheSpecies>';
            xml_data += '<lightDemand>' + lightDemand + '</lightDemand>';
            xml_data += '<rootType>' + rootType + '</rootType>';
            xml_data += '<slope>' + slope + '</slope>';
            xml_data += '<tree_timberDemand>' + tree_timberDemand + '</tree_timberDemand>';

            xml_data += '<soilandWaterRetentionCapacity>' + soilandWaterRetentionCapacity + '</soilandWaterRetentionCapacity>';
            xml_data += '<presentCoverage>' + presentCoverage + '</presentCoverage>';
            xml_data += '<presentTree_acre>' + presentTree_acre + '</presentTree_acre>';
            xml_data += '<pastCoverage>' + pastCoverage + '</pastCoverage>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
        }
        
    });

    xml_data += '</head>';
    
    console.log(xml_data);

    if(isValid) {

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_native_species_dominant_plant_and_status",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table21 td input[type=text]').val('');
                    $('#my_table21 td').find('.resetSelect').prop("selectedIndex", 0);
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

function insertTableRow22() {

    var appendString = '';
    var rowCount = $('#my_table22 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    // appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="dominantSpecies" name="dominantSpecies" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Shegun/Teak">Shegun/Teak</option>';
    appendString += '<option value="Eucalyptus">Eucalyptus</option>';
    appendString += '<option value="Akashmoni">Akashmoni</option>';
    appendString += '<option value="Konok">Konok</option>';
    appendString += '<option value="Ipil-Ipil">Ipil-Ipil</option>';
    appendString += '<option value="Rain tree">Rain tree</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="plant_animalRelationship" class="form-control resetSelect" value="" style="width: 90px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="High">High (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Low">Low (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="productionCostAfter1stRotation" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="yield" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="sellingPrice" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="profit" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="waterDemandOftheSpecies" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="High">High (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Low">Low (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lightDemand" name="lightDemand" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="High">High (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Low">Low (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="rootType" name="rootType" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="High">High (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Low">Low (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="slope" name="slope" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="0-5">0-5</option>';
    appendString += '<option value="5-15">5-15</option>';
    appendString += '<option value="15-30">15-30</option>';
    appendString += '<option value="30-60">30-60</option>';
    appendString += '<option value="avobe 60">Avobe 60</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="tree_timberDemand" name="tree_timberDemand" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="High">High (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Low">Low (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="soilandWaterRetentionCapacity" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="presentCoverage" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="presentTree_acre" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="pastCoverage" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up..">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table22 > tbody:last-child').append(appendString);
    
    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table22 > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store22', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var xml_data = '';
    var isValid = '';

    xml_data = '<head>';

    $('#my_table22 > tbody > tr').each(function () {

        // var livestock_name = $(this).find('td:eq(1)').text(); 
        
        var dominantSpecies = $(this).find('#dominantSpecies option:selected').val();
        var plant_animalRelationship = $(this).find('#plant_animalRelationship option:selected').val();
        var productionCostAfter1stRotation = $(this).find('#productionCostAfter1stRotation').val();
        var yield = $(this).find('#yield').val();
        var sellingPrice = $(this).find('#sellingPrice').val();
        var profit = $(this).find('#profit').val();

        var waterDemandOftheSpecies = $(this).find('#waterDemandOftheSpecies option:selected').val();
        var lightDemand = $(this).find('#lightDemand option:selected').val();
        var rootType = $(this).find('#rootType option:selected').val();
        var slope = $(this).find('#slope option:selected').val();
        var tree_timberDemand = $(this).find('#tree_timberDemand option:selected').val();

        var soilandWaterRetentionCapacity = $(this).find('#soilandWaterRetentionCapacity').val();
        var presentCoverage = $(this).find('#presentCoverage').val();
        var presentTree_acre = $(this).find('#presentTree_acre').val();
        var pastCoverage = $(this).find('#pastCoverage').val();

        if(dominantSpecies == '' && plant_animalRelationship == '' && yield == '' && lightDemand == '' && tree_timberDemand == '' && presentTree_acre == ''){
            var errorMsg = 'Please enter some value in each visible row.';
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
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<dominantSpecies>' + dominantSpecies + '</dominantSpecies>';
            xml_data += '<plant_animalRelationship>' + plant_animalRelationship + '</plant_animalRelationship>';
            xml_data += '<productionCostAfter1stRotation>' + productionCostAfter1stRotation + '</productionCostAfter1stRotation>';
            xml_data += '<yield>' + yield + '</yield>';
            xml_data += '<sellingPrice>' + sellingPrice + '</sellingPrice>';
            xml_data += '<profit>' + profit + '</profit>';

            xml_data += '<waterDemandOftheSpecies>' + waterDemandOftheSpecies + '</waterDemandOftheSpecies>';
            xml_data += '<lightDemand>' + lightDemand + '</lightDemand>';
            xml_data += '<rootType>' + rootType + '</rootType>';
            xml_data += '<slope>' + slope + '</slope>';
            xml_data += '<tree_timberDemand>' + tree_timberDemand + '</tree_timberDemand>';

            xml_data += '<soilandWaterRetentionCapacity>' + soilandWaterRetentionCapacity + '</soilandWaterRetentionCapacity>';
            xml_data += '<presentCoverage>' + presentCoverage + '</presentCoverage>';
            xml_data += '<presentTree_acre>' + presentTree_acre + '</presentTree_acre>';
            xml_data += '<pastCoverage>' + pastCoverage + '</pastCoverage>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
        }
        
    });

    xml_data += '</head>';
    
    console.log(xml_data);

    if(isValid) {

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_ExoticOralien_species_dominant_plant_and_status",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table22 td input[type=text]').val('');
                    $('#my_table22 td').find('.resetSelect').prop("selectedIndex", 0);
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

function insertTableRow23() {

    var appendString = '';
    var rowCount = $('#my_table23 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    // appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="dominantSpecies" name="dominantSpecies" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Ulatkambal">Ulatkambal</option>';
    appendString += '<option value="Aloe vera/Ghrita Kumari">Aloe vera/Ghrita Kumari</option>';
    appendString += '<option value="Neem">Neem</option>';
    appendString += '<option value="Shimul">Shimul</option>';
    appendString += '<option value="Shojne">Shojne</option>';
    appendString += '<option value="Tentul">Tentul</option>';
    appendString += '<option value="Bashak">Bashak</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="plant_animalRelationship" class="form-control resetSelect" value="" style="width: 90px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="High">High (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Low">Low (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="productionCostAfter1stRotation" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="yield" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="sellingPrice" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="profit" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="waterDemandOftheSpecies" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="High">High (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Low">Low (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lightDemand" name="lightDemand" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="High">High (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Low">Low (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="rootType" name="rootType" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="High">High (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Low">Low (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="slope" name="slope" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="0-5">0-5</option>';
    appendString += '<option value="5-15">5-15</option>';
    appendString += '<option value="15-30">15-30</option>';
    appendString += '<option value="30-60">30-60</option>';
    appendString += '<option value="avobe 60">Avobe 60</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="tree_timberDemand" name="tree_timberDemand" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="High">High (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Low">Low (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="soilandWaterRetentionCapacity" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="presentCoverage" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="presentTree_acre" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="pastCoverage" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up..">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table23 > tbody:last-child').append(appendString);
    
    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table23 > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store23', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var xml_data = '';
    var isValid = '';

    xml_data = '<head>';

    $('#my_table23 > tbody > tr').each(function () {

        // var livestock_name = $(this).find('td:eq(1)').text(); 
        
        var dominantSpecies = $(this).find('#dominantSpecies option:selected').val();
        var plant_animalRelationship = $(this).find('#plant_animalRelationship option:selected').val();
        var productionCostAfter1stRotation = $(this).find('#productionCostAfter1stRotation').val();
        var yield = $(this).find('#yield').val();
        var sellingPrice = $(this).find('#sellingPrice').val();
        var profit = $(this).find('#profit').val();

        var waterDemandOftheSpecies = $(this).find('#waterDemandOftheSpecies option:selected').val();
        var lightDemand = $(this).find('#lightDemand option:selected').val();
        var rootType = $(this).find('#rootType option:selected').val();
        var slope = $(this).find('#slope option:selected').val();
        var tree_timberDemand = $(this).find('#tree_timberDemand option:selected').val();

        var soilandWaterRetentionCapacity = $(this).find('#soilandWaterRetentionCapacity').val();
        var presentCoverage = $(this).find('#presentCoverage').val();
        var presentTree_acre = $(this).find('#presentTree_acre').val();
        var pastCoverage = $(this).find('#pastCoverage').val();

        if(dominantSpecies == '' && plant_animalRelationship == '' && yield == '' && lightDemand == '' && tree_timberDemand == '' && presentTree_acre == ''){
            var errorMsg = 'Please enter some value in each visible row.';
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
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<dominantSpecies>' + dominantSpecies + '</dominantSpecies>';
            xml_data += '<plant_animalRelationship>' + plant_animalRelationship + '</plant_animalRelationship>';
            xml_data += '<productionCostAfter1stRotation>' + productionCostAfter1stRotation + '</productionCostAfter1stRotation>';
            xml_data += '<yield>' + yield + '</yield>';
            xml_data += '<sellingPrice>' + sellingPrice + '</sellingPrice>';
            xml_data += '<profit>' + profit + '</profit>';

            xml_data += '<waterDemandOftheSpecies>' + waterDemandOftheSpecies + '</waterDemandOftheSpecies>';
            xml_data += '<lightDemand>' + lightDemand + '</lightDemand>';
            xml_data += '<rootType>' + rootType + '</rootType>';
            xml_data += '<slope>' + slope + '</slope>';
            xml_data += '<tree_timberDemand>' + tree_timberDemand + '</tree_timberDemand>';

            xml_data += '<soilandWaterRetentionCapacity>' + soilandWaterRetentionCapacity + '</soilandWaterRetentionCapacity>';
            xml_data += '<presentCoverage>' + presentCoverage + '</presentCoverage>';
            xml_data += '<presentTree_acre>' + presentTree_acre + '</presentTree_acre>';
            xml_data += '<pastCoverage>' + pastCoverage + '</pastCoverage>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
        }
        
    });

    xml_data += '</head>';
    
    console.log(xml_data);

    if(isValid) {

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_medicinal_trees_species_dominant_plant_and_status",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table23 td input[type=text]').val('');
                    $('#my_table23 td').find('.resetSelect').prop("selectedIndex", 0);
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

function insertTableRow24() {

    var appendString = '';
    var rowCount = $('#my_table24 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    // appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="dominantSpecies" name="dominantSpecies" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="Mango">Mango</option>';
    appendString += '<option value="Orange">Orange</option>';
    appendString += '<option value="Kanthal">Kanthal</option>';
    appendString += '<option value="Peyara">Peyara</option>';
    appendString += '<option value="Boroi">Boroi</option>';
    appendString += '<option value="Pepe">Pepe</option>';
    appendString += '<option value="Jambura">Jambura</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="plant_animalRelationship" class="form-control resetSelect" value="" style="width: 90px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="High">High (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Low">Low (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="productionCostAfter1stRotation" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="yield" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="sellingPrice" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="profit" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="waterDemandOftheSpecies" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="High">High (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Low">Low (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lightDemand" name="lightDemand" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="High">High (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Low">Low (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="rootType" name="rootType" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="High">High (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Low">Low (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="slope" name="slope" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="0-5">0-5</option>';
    appendString += '<option value="5-15">5-15</option>';
    appendString += '<option value="15-30">15-30</option>';
    appendString += '<option value="30-60">30-60</option>';
    appendString += '<option value="avobe 60">Avobe 60</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="tree_timberDemand" name="tree_timberDemand" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select</option>';
    appendString += '<option value="High">High (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="Low">Low (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="soilandWaterRetentionCapacity" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="presentCoverage" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="presentTree_acre" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="pastCoverage" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up..">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table24 > tbody:last-child').append(appendString);
    
    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table24 > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store24', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var xml_data = '';
    var isValid = '';

    xml_data = '<head>';

    $('#my_table24 > tbody > tr').each(function () {

        // var livestock_name = $(this).find('td:eq(1)').text(); 
        
        var dominantSpecies = $(this).find('#dominantSpecies option:selected').val();
        var plant_animalRelationship = $(this).find('#plant_animalRelationship option:selected').val();
        var productionCostAfter1stRotation = $(this).find('#productionCostAfter1stRotation').val();
        var yield = $(this).find('#yield').val();
        var sellingPrice = $(this).find('#sellingPrice').val();
        var profit = $(this).find('#profit').val();

        var waterDemandOftheSpecies = $(this).find('#waterDemandOftheSpecies option:selected').val();
        var lightDemand = $(this).find('#lightDemand option:selected').val();
        var rootType = $(this).find('#rootType option:selected').val();
        var slope = $(this).find('#slope option:selected').val();
        var tree_timberDemand = $(this).find('#tree_timberDemand option:selected').val();

        var soilandWaterRetentionCapacity = $(this).find('#soilandWaterRetentionCapacity').val();
        var presentCoverage = $(this).find('#presentCoverage').val();
        var presentTree_acre = $(this).find('#presentTree_acre').val();
        var pastCoverage = $(this).find('#pastCoverage').val();

        if(dominantSpecies == '' && plant_animalRelationship == '' && yield == '' && lightDemand == '' && tree_timberDemand == '' && presentTree_acre == ''){
            var errorMsg = 'Please enter some value in each visible row.';
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
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<dominantSpecies>' + dominantSpecies + '</dominantSpecies>';
            xml_data += '<plant_animalRelationship>' + plant_animalRelationship + '</plant_animalRelationship>';
            xml_data += '<productionCostAfter1stRotation>' + productionCostAfter1stRotation + '</productionCostAfter1stRotation>';
            xml_data += '<yield>' + yield + '</yield>';
            xml_data += '<sellingPrice>' + sellingPrice + '</sellingPrice>';
            xml_data += '<profit>' + profit + '</profit>';

            xml_data += '<waterDemandOftheSpecies>' + waterDemandOftheSpecies + '</waterDemandOftheSpecies>';
            xml_data += '<lightDemand>' + lightDemand + '</lightDemand>';
            xml_data += '<rootType>' + rootType + '</rootType>';
            xml_data += '<slope>' + slope + '</slope>';
            xml_data += '<tree_timberDemand>' + tree_timberDemand + '</tree_timberDemand>';

            xml_data += '<soilandWaterRetentionCapacity>' + soilandWaterRetentionCapacity + '</soilandWaterRetentionCapacity>';
            xml_data += '<presentCoverage>' + presentCoverage + '</presentCoverage>';
            xml_data += '<presentTree_acre>' + presentTree_acre + '</presentTree_acre>';
            xml_data += '<pastCoverage>' + pastCoverage + '</pastCoverage>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
        }
        
    });

    xml_data += '</head>';
    
    console.log(xml_data);

    if(isValid) {

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_fruit_trees_species_dominant_plant_and_status",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table24 td input[type=text]').val('');
                    $('#my_table24 td').find('.resetSelect').prop("selectedIndex", 0);
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

            var livestock_name = $(this).find('td:eq(1)').text(); 
            
            var diseases_name = $(this).find('#diseases_name').val();
            var major_impact = $(this).find('#major_impact').val();
            var frequency_of_disease = $(this).find('#frequency_of_disease').val();
            var damage_of_production = $(this).find('#damage_of_production').val();
            var coping_mechanism = $(this).find('#coping_mechanism').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<livestock_name>' + livestock_name + '</livestock_name>';
            xml_data += '<diseases_name>' + diseases_name + '</diseases_name>';
            xml_data += '<major_impact>' + major_impact + '</major_impact>';
            xml_data += '<frequency_of_disease>' + frequency_of_disease + '</frequency_of_disease>';
            xml_data += '<damage_of_production>' + damage_of_production + '</damage_of_production>';
            xml_data += '<coping_mechanism>' + coping_mechanism + '</coping_mechanism>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_pest_diseases_livestock",
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
    appendString += '<input type="text" id="wildlife_name" class="form-control" value="" style="width: 220px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="observed_wildlife_inVcf" class="form-control" value="" style="width: 300px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="status_past_10yrs" name="status_past_10yrs" class="form-control resetSelect" value="" style="width: 180px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Increased">Increased</option>';
    appendString += '<option value="Decreased">Decreased</option>';
    appendString += '<option value="No change">No change</option>';
    appendString += '<option value="Extinct">Extinct</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="preferable_habitat" class="form-control" value="" style="width: 220px;text-align: left;" placeholder="Please fill up..">';
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
            
            var wildlife_name = $(this).find('#wildlife_name').val();
            var observed_wildlife_inVcf = $(this).find('#observed_wildlife_inVcf').val();
            var status_past_10yrs = $(this).find('#status_past_10yrs option:selected').val();
            var preferable_habitat = $(this).find('#preferable_habitat').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<wildlife_name>' + wildlife_name + '</wildlife_name>';
            xml_data += '<observed_wildlife_inVcf>' + observed_wildlife_inVcf + '</observed_wildlife_inVcf>';
            xml_data += '<status_past_10yrs>' + status_past_10yrs + '</status_past_10yrs>';
            xml_data += '<preferable_habitat>' + preferable_habitat + '</preferable_habitat>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_statusOf_wildlife_inVcf",
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
    appendString += '<select type="text" id="forest_status" name="forest_status" class="form-control resetSelect more4" value="" style="width: 400px;text-align: center;border-radius: 5px;">';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="status_past_10yrs" name="status_past_10yrs" class="form-control resetSelect" value="" style="width: 300px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Increased">Increased</option>';
    appendString += '<option value="Decreased">Decreased</option>';
    appendString += '<option value="No change">No change</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table4 > tbody:last-child').append(appendString);
    removeTableRow4();
}
function addMoreTableRow4() {

    var appendString = '';
    var rowCount = $('#my_table4 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="forest_status" name="forest_status" class="form-control resetSelect addmore" value="" style="width: 400px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Forest area">Forest area</option>';
    appendString += '<option value="Canopy layer/ Canopy Cover">Canopy layer/ Canopy Cover</option>';
    appendString += '<option value="Wildlife habitat and status">Wildlife habitat and status</option>';
    appendString += '<option value="Multilayer plantation">Multilayer plantation</option>';
    appendString += '<option value="Soil fertility">Soil fertility</option>';
    appendString += '<option value="Number of dead trees/Deforestation rate">Number of dead trees / Deforestation rate</option>';
    appendString += '<option value="Commercial/Monoculture Plantation">Commercial/Monoculture Plantation</option>';
    appendString += '<option value="Soil erosion/land slide">Soil erosion/land slide</option>';
    appendString += '<option value="Water Availability">Water Availability</option>';
    appendString += '<option value="Forest/NTFP Production">Forest/NTFP Production</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="status_past_10yrs" name="status_past_10yrs" class="form-control resetSelect" value="" style="width: 300px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Increased">Increased</option>';
    appendString += '<option value="Decreased">Decreased</option>';
    appendString += '<option value="No change">No change</option>';
    appendString += '</select>';
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

            // var farm_item_id = $(this).attr('center_id');
            var forest_status = $(this).find('#forest_status option:selected').text();
            var status_past_10yrs = $(this).find('#status_past_10yrs option:selected').text();
            
            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<forest_status>' + forest_status + '</forest_status>';
            xml_data += '<status_past_10yrs>' + status_past_10yrs + '</status_past_10yrs>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_overall_statusOf_different_components",
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

    // appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="gamer_and_sojne" name="gamer_and_sojne" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="kadam_and_kushum" name="kadam_and_kushum" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="teli_garjan" name="teli_garjan" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="kanak_and_tetul" name="kanak_and_tetul" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="others_name" class="form-control" value="" style="width: 300px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    // appendString += '<td style="text-align: center;">';
    // appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    // appendString += '</td>';

    appendString += '</tr>';


    $('#my_table5 > tbody:last-child').append(appendString);
    removeTableRow5();
}
function removeTableRow5() {

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table5 > tbody > tr').each(function () {
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

    var vcf_manage_general_rule = $('#vcf_manage_general_rule').val();
    var vcf_manage_and_challenge = $('#vcf_manage_and_challenge').val();

    var gamer_and_sojne = $('#gamer_and_sojne option:selected').val();
    var kadam_and_kushum = $('#kadam_and_kushum option:selected').val();
    var teli_garjan = $('#teli_garjan option:selected').val();
    var kanak_and_tetul = $('#kanak_and_tetul option:selected').val();
    var others_name = $('#others_name').val();

    xml_data = '<head>';
    xml_data += '<row>';

    xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
    xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
    xml_data += '<para_id>' + para_id + '</para_id>';
    xml_data += '<para_name>' + para_name + '</para_name>';

    xml_data += '<vcf_manage_general_rule>' + vcf_manage_general_rule + '</vcf_manage_general_rule>';
    xml_data += '<vcf_manage_and_challenge>' + vcf_manage_and_challenge + '</vcf_manage_and_challenge>';

    xml_data += '<gamer_and_sojne>' + gamer_and_sojne + '</gamer_and_sojne>';
    xml_data += '<kadam_and_kushum>' + kadam_and_kushum + '</kadam_and_kushum>';
    xml_data += '<teli_garjan>' + teli_garjan + '</teli_garjan>';
    xml_data += '<kanak_and_tetul>' + kanak_and_tetul + '</kanak_and_tetul>';
    xml_data += '<others_name>' + others_name + '</others_name>';

    xml_data += '<created_by>' + created_by + '</created_by>';

    xml_data += '</row>';
    xml_data += '</head>';
    
    console.log(xml_data);

    // clear model message value for every ajax call provide single accurate message
    $('#success_msg').html('');
    $('#error_msg').html('');

    $.ajax({
        url: "/store_fisheries_question_info",
        type: "POST",
        data: { '_token' : token, 'xml_data' : xml_data },
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == 'SUCCESS'){
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                $('.reset').val('');
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


});

function insertTableRow6() {

    var appendString = '';
    var rowCount = $('#my_table6 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td>';
    appendString += '<select type="text" id="tackling_manmade_forest_fires" name="tackling_manmade_forest_fires" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="multilayer_plantation" name="multilayer_plantation" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="prohibitionOf_logging_hunting" name="prohibitionOf_logging_hunting" class="form-control resetSelect" value="" style="width: 300px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="controlOf_jhum_cultivation" name="controlOf_jhum_cultivation" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="average_num_livestock" class="form-control" value="" style="width: 350px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    // appendString += '<td style="text-align: center;">';
    // appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    // appendString += '</td>';

    appendString += '</tr>';

    $('#my_table6 > tbody:last-child').append(appendString);
}
function insertTableRow7() {

    var appendString = '';
    var rowCount = $('#my_table7 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td>';
    appendString += '<select type="text" id="enrichment_plantation" name="enrichment_plantation" class="form-control resetSelect" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="transition_pathwayOf_teak_tree" name="transition_pathwayOf_teak_tree" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="forest_silviculture_operations" name="forest_silviculture_operations" class="form-control resetSelect" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="forest_chemical_management" name="forest_chemical_management" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="establishmentOf_community_tree" name="establishmentOf_community_tree" class="form-control resetSelect" value="" style="width: 180px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="infrastructures_development" name="infrastructures_development" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="others_ngo_name" class="form-control" value="" style="width: 300px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    // appendString += '<td style="text-align: center;">';
    // appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    // appendString += '</td>';

    appendString += '</tr>';

    $('#my_table7 > tbody:last-child').append(appendString);
}

$(document).on('click', '#btn_store6', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var tackling_manmade_forest_fires = $('#tackling_manmade_forest_fires option:selected').val();
    var multilayer_plantation = $('#multilayer_plantation option:selected').val();

    var prohibitionOf_logging_hunting = $('#prohibitionOf_logging_hunting option:selected').val();
    var controlOf_jhum_cultivation = $('#controlOf_jhum_cultivation option:selected').val();
    var teli_garjan = $('#teli_garjan option:selected').val();
    var kanak_and_tetul = $('#kanak_and_tetul option:selected').val();
    var others_name = $('#others_name').val();

    var enrichment_plantation = $('#enrichment_plantation option:selected').val();
    var transition_pathwayOf_teak_tree = $('#transition_pathwayOf_teak_tree option:selected').val();
    var forest_silviculture_operations = $('#forest_silviculture_operations option:selected').val();
    var forest_chemical_management = $('#forest_chemical_management option:selected').val();
    var establishmentOf_community_tree = $('#establishmentOf_community_tree option:selected').val();
    var infrastructures_development = $('#infrastructures_development option:selected').val();
    var others_ngo_name = $('#others_ngo_name').val();

    xml_data = '<head>';
    xml_data += '<row>';

    xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
    xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
    xml_data += '<para_id>' + para_id + '</para_id>';
    xml_data += '<para_name>' + para_name + '</para_name>';

    xml_data += '<tackling_manmade_forest_fires>' + tackling_manmade_forest_fires + '</tackling_manmade_forest_fires>';
    xml_data += '<multilayer_plantation>' + multilayer_plantation + '</multilayer_plantation>';

    xml_data += '<prohibitionOf_logging_hunting>' + prohibitionOf_logging_hunting + '</prohibitionOf_logging_hunting>';
    xml_data += '<controlOf_jhum_cultivation>' + controlOf_jhum_cultivation + '</controlOf_jhum_cultivation>';
    xml_data += '<teli_garjan>' + teli_garjan + '</teli_garjan>';
    xml_data += '<kanak_and_tetul>' + kanak_and_tetul + '</kanak_and_tetul>';
    xml_data += '<others_name>' + others_name + '</others_name>';

    xml_data += '<enrichment_plantation>' + enrichment_plantation + '</enrichment_plantation>';
    xml_data += '<transition_pathwayOf_teak_tree>' + transition_pathwayOf_teak_tree + '</transition_pathwayOf_teak_tree>';
    xml_data += '<forest_silviculture_operations>' + forest_silviculture_operations + '</forest_silviculture_operations>';
    xml_data += '<forest_chemical_management>' + forest_chemical_management + '</forest_chemical_management>';
    xml_data += '<establishmentOf_community_tree>' + establishmentOf_community_tree + '</establishmentOf_community_tree>';
    xml_data += '<infrastructures_development>' + infrastructures_development + '</infrastructures_development>';
    xml_data += '<others_ngo_name>' + others_ngo_name + '</others_ngo_name>';

    xml_data += '<created_by>' + created_by + '</created_by>';

    xml_data += '</row>';
    xml_data += '</head>';
    
    console.log(xml_data);

    // clear model message value for every ajax call provide single accurate message
    $('#success_msg').html('');
    $('#error_msg').html('');

    $.ajax({
        url: "/store_forest_management_practice",
        type: "POST",
        data: { '_token' : token, 'xml_data' : xml_data },
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == 'SUCCESS'){
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                $('.reset').val('');
                $('#my_table6 td input[type=text]').val('');
                $('#my_table6 td').find('.resetSelect').prop("selectedIndex", 0);
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


});

