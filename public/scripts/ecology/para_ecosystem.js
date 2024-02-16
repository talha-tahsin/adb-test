


document.title = 'Livestock Entry';

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

    myTable1 = {
        '001' : 'Natural forest tree dominated area',
        '002' : 'Shrub/ herb dominated area',
        '003' : 'Plantation forest',
        '004' : 'Orchard',
        '005' : 'Crop lands',
    };
    $.each(myTable1, function(key, value) {
        insertTableRow(value);
    });

    insertTableRow2();
    insertTableRow3();
    insertTableRow4();
    insertTableRow5();
    insertTableRow6();

    myTable2 = {
        '001' : 'Native Species',
        '002' : 'Exotic/Alien Species',
        '003' : 'Medicinal Trees',
        '004' : 'Fruit Trees',
    };

    var option2 = ' <option value="" selected disabled> Select Option</option>';
    $.each(myTable2, function(key, name) {
       option2 += '<option value="'+name+'">'+name+'</option>';
    });
    $('#species_cat').html(option2);

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

    var option3 = ' <option value="" selected disabled> Select Option</option>';
    $.each(myTable3, function(key, name) {
       option3 += '<option value="'+name+'">'+name+'</option>';
    });
    $('#wild_category').html(option3);

    myTable4 = {
        '001' : 'Charra/Jhiri',
        '002' : 'Beel',
        '003' : 'River',
        '004' : 'Lake',
        '005' : 'Khal ',
        '006' : 'Pond',
        '007' : 'Others',
    };

    var option4 = ' <option value="" selected disabled> Select Option</option>';
    $.each(myTable4, function(key, name) {
       option4 += '<option value="'+name+'">'+name+'</option>';
    });
    $('#habitat_type').html(option4);

    myTable5 = {
        '001' : 'Bengali/common name: Baranukha. Tribal name: Khojutti (Chakma),  Kenchuri dalok (Tripura), Kyu-churi (marma), Tikri (Tripura)',
        '002' : 'Indian water lily  (Sada Shapla)',
        '003' : 'Kochu (Elephant ear)',
        '004' : 'Dheki Shak',
        '005' : 'Water hyacinth (Kochuripana)',
        '006' : 'Chailla ghash',
        '007' : 'Others',
    };

    var option5 = ' <option value="" selected disabled> Select Option</option>';
    $.each(myTable5, function(key, name) {
       option5 += '<option value="'+name+'">'+name+'</option>';
    });
    $('#aquatic_vegetation').html(option5);

    myTable6 = {
        '001' : 'Shamuk, Jhinuk ',
        '002' : 'Kossop/kasim',
        '003' : 'Jol murgi',
        '004' : 'Meso bagh (Fishing cat)',
        '005' : 'Bang (Kuno, sabuj, gesso)',
        '006' : 'Bird (Masranga, Coto bok/kuni obok)',
        '007' : 'Fish status',
        '008' : 'Others',
    };

    var option6 = ' <option value="" selected disabled> Select Option</option>';
    $.each(myTable6, function(key, name) {
       option6 += '<option value="'+name+'">'+name+'</option>';
    });
    $('.more6').html(option6);
    

});

$('#add_row2').on('click', function(){
    insertTableRow2();

    myJson = {
        '001' : 'Native Species',
        '002' : 'Exotic/Alien Species',
        '003' : 'Medicinal Trees',
        '004' : 'Fruit Trees',
    };

    var option = ' <option value="" selected disabled> Select Option</option>';
    $.each(myJson, function(key, name) {
       option += '<option value="'+name+'">'+name+'</option>';
    });
    $('.more').html(option);

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
    insertTableRow4();

    myTable4 = {
        '001' : 'Charra/Jhiri',
        '002' : 'Beel',
        '003' : 'River',
        '004' : 'Lake',
        '005' : 'Khal ',
        '006' : 'Pond',
        '007' : 'Others',
    };

    var option = ' <option value="" selected disabled> Select Option</option>';
    $.each(myTable4, function(key, name) {
       option += '<option value="'+name+'">'+name+'</option>';
    });
    $('.more4').html(option);

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
$('#add_row6').on('click', function(){
    insertTableRow6();

    myTable6 = {
        '001' : 'Shamuk, Jhinuk ',
        '002' : 'Kossop/kasim',
        '003' : 'Jol murgi',
        '004' : 'Meso bagh (Fishing cat)',
        '005' : 'Bang (Kuno, sabuj, gesso)',
        '006' : 'Bird (Masranga, Coto bok/kuni obok)',
        '007' : 'Fish status',
        '008' : 'Others',
    };

    var option6 = ' <option value="" selected disabled> Select Option</option>';
    $.each(myTable6, function(key, name) {
       option6 += '<option value="'+name+'">'+name+'</option>';
    });
    $('.more6').html(option6);

});

function insertTableRow(name) {

    var appendString = '';
    var rowCount = $('#my_table1 > tbody > tr').length;
    rowCount++;

    // console.log(accountName);

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td style="width: 400px;text-align: left;">'+name+'</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="vegetation_density_present" name="vegetation_density" class="form-control resetSelect" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Moderate" >Moderate</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="vegetation_density_past" name="vegetation_density_past" class="form-control resetSelect" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Degraded">Degraded</option>';
    appendString += '<option value="No change" >No change</option>';
    appendString += '<option value="Improved">Improved</option>';
    appendString += '</select>';
    appendString += '</td>';


    appendString += '<td>';
    appendString += '<input type="text" id="reasonOf_changes" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table1 > tbody:last-child').append(appendString);
    removeTableRow1();
}

function removeTableRow1() {

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table1 > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store1', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var xml_data = '<head>';

    $('#my_table1 > tbody > tr').each(function () {

        // var livestock_id = $(this).attr('center_id');
        var habitat_type = $(this).find('td:eq(1)').text(); 
        
        var vegetation_density_present = $(this).find('#vegetation_density_present').val();
        var vegetation_density_past = $(this).find('#vegetation_density_past').val();
        var reasonOf_changes = $(this).find('#reasonOf_changes').val();

        // first binding data as xml string
        xml_data += '<row>';

        xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
        xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
        xml_data += '<para_id>' + para_id + '</para_id>';
        xml_data += '<para_name>' + para_name + '</para_name>';

        xml_data += '<habitat_type>' + habitat_type + '</habitat_type>';
        xml_data += '<vegetation_density_present>' + vegetation_density_present + '</vegetation_density_present>';
        xml_data += '<vegetation_density_past>' + vegetation_density_past + '</vegetation_density_past>';
        xml_data += '<reasonOf_changes>' + reasonOf_changes + '</reasonOf_changes>';

        xml_data += '<created_by>' + created_by + '</created_by>';

        xml_data += '</row>';
        
    });

    xml_data += '</head>';
    
    console.log(xml_data);

    // clear model message value for every ajax call provide single accurate message
    $('#success_msg').html('');
    $('#error_msg').html('');

    $.ajax({
        url: "/store_terrestrial_ecosystem",
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

function insertTableRow2() {

    var appendString = '';
    var rowCount = $('#my_table2 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="species_cat" name="species_cat" class="form-control resetSelect more" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="presenceOf_floral_species" class="form-control" value="" style="width: 120px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="abundance" name="abundance" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="production_cost" class="form-control" value="" style="width: 120px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="yield" class="form-control" value="" style="width: 120px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="selling_price" class="form-control" value="" style="width: 120px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="profit" class="form-control" value="" style="width: 120px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table2 > tbody:last-child').append(appendString);
    removeTableRow2();
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
            var species_cat = $(this).find('#species_cat option:selected').text(); 
            
            var presenceOf_floral_species = $(this).find('#presenceOf_floral_species').val();
            var abundance = $(this).find('#abundance option:selected').val();
            var production_cost = $(this).find('#production_cost').val();
            var yield = $(this).find('#yield').val();
            var selling_price = $(this).find('#selling_price').val();
            var profit = $(this).find('#profit').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<species_cat>' + species_cat + '</species_cat>';
            xml_data += '<presenceOf_floral_species>' + presenceOf_floral_species + '</presenceOf_floral_species>';
            xml_data += '<abundance>' + abundance + '</abundance>';
            xml_data += '<production_cost>' + production_cost + '</production_cost>';
            xml_data += '<yield>' + yield + '</yield>';
            xml_data += '<selling_price>' + selling_price + '</selling_price>';
            xml_data += '<profit>' + profit + '</profit>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_abundance_production_economics",
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
                    $('#my_table2 td').find('.resetSelect').prop("selectedIndex", 0);
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
    appendString += '<select type="text" id="wild_category" name="wild_category" class="form-control resetSelect more3" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="abundance_high" class="form-control resetSelect" value="" style="width: 180px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="abundance_medium" name="feed" class="form-control resetSelect" value="" style="width: 180px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="abundance_low" name="feed" class="form-control resetSelect" value="" style="width: 180px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="others_name" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Write only if select others">';
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

            // var farm_item_id = $(this).attr('center_id');
            // var livestock = $(this).find('td:eq(1)').text(); 
            var wild_category = $(this).find('#wild_category option:selected').text();  
            
            var abundance_high = $(this).find('#abundance_high option:selected').val();
            var abundance_medium = $(this).find('#abundance_medium option:selected').val();
            var abundance_low = $(this).find('#abundance_low option:selected').val();
            var others_name = $(this).find('#others_name').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<wild_category>' + wild_category + '</wild_category>';
            xml_data += '<abundance_high>' + abundance_high + '</abundance_high>';
            xml_data += '<abundance_medium>' + abundance_medium + '</abundance_medium>';
            xml_data += '<abundance_low>' + abundance_low + '</abundance_low>';
            xml_data += '<others_name>' + others_name + '</others_name>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_abundance_wildlife",
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

    appendString += '<td style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="habitat_type" name="habitat_type" class="form-control resetSelect more4" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="numberOf_habitat_presence" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="habitat_status_10yrs_ago" class="form-control resetSelect" value="" style="width: 180px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option </option>';
    appendString += '<option value="Degraded">Degraded</option>';
    appendString += '<option value="Partially Degraded">Partially Degraded</option>';
    appendString += '<option value="No change">No change</option>';
    appendString += '<option value="Improved">Improved</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="reasonOf_changes" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="others_name" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Write if select others">';
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
            // var livestock_type = $(this).find('td:eq(1)').text();
            var habitat_type = $(this).find('#habitat_type option:selected').text();  
            
            var numberOf_habitat_presence = $(this).find('#numberOf_habitat_presence').val();
            var habitat_status_10yrs_ago = $(this).find('#habitat_status_10yrs_ago option:selected').val();
            var reasonOf_changes = $(this).find('#reasonOf_changes').val();
            var others_name = $(this).find('#others_name').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<habitat_type>' + habitat_type + '</habitat_type>';
            xml_data += '<numberOf_habitat_presence>' + numberOf_habitat_presence + '</numberOf_habitat_presence>';
            xml_data += '<habitat_status_10yrs_ago>' + habitat_status_10yrs_ago + '</habitat_status_10yrs_ago>';
            xml_data += '<reasonOf_changes>' + reasonOf_changes + '</reasonOf_changes>';
            xml_data += '<others_name>' + others_name + '</others_name>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_statusOf_aquatic_habitats",
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
    appendString += '<select type="text" id="aquatic_vegetation" name="aquatic_vegetation" class="form-control resetSelect more5" value="" style="width: 400px;text-align: center;border-radius: 5px;">';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="present_status" name="present_status" class="form-control resetSelect" value="" style="width: 180px;text-align: left;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="past_status_10yrs_ago" name="past_status_10yrs_ago" class="form-control resetSelect" value="" style="width: 180px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="others_name" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Write if select others">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

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

    if(watershed_id == '' || watershed_id == null || watershed_id == undefined){
        alert("Please Select Watershed id first....");
        $("#watershedId").siblings().children().children().css('background-color', '#FFCECE');
    }
    else
    {
        xml_data = '<head>';

        $('#my_table5 > tbody > tr').each(function () {

            // var farm_item_id = $(this).attr('center_id');
            var aquatic_vegetation = $(this).find('#aquatic_vegetation option:selected').text();   
 
            var present_status = $(this).find('#present_status option:selected').val();
            var past_status_10yrs_ago = $(this).find('#past_status_10yrs_ago option:selected').val();
            var others_name = $(this).find('#others_name').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<aquatic_vegetation>' + aquatic_vegetation + '</aquatic_vegetation>';
            xml_data += '<present_status>' + present_status + '</present_status>';
            xml_data += '<past_status_10yrs_ago>' + past_status_10yrs_ago + '</past_status_10yrs_ago>';
            xml_data += '<others_name>' + others_name + '</others_name>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_abundanceOf_aquatic_vegetation",
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
    appendString += '<select type="text" id="aquatic_fauna" name="aquatic_fauna" class="form-control resetSelect more6" value="" style="width: 400px;text-align: center;border-radius: 5px;">';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="present_status" name="present_status" class="form-control resetSelect" value="" style="width: 180px;text-align: left;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="past_status_10yrs_ago" name="past_status_10yrs_ago" class="form-control resetSelect" value="" style="width: 180px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="High">High</option>';
    appendString += '<option value="Medium">Medium</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="others_name" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Write if select others">';
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
        $('#my_table6 > tbody > tr').each(function () {
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

            // var farm_item_id = $(this).attr('center_id');
            var aquatic_fauna = $(this).find('#aquatic_fauna option:selected').text();   
            
            var present_status = $(this).find('#present_status option:selected').val();
            var past_status_10yrs_ago = $(this).find('#past_status_10yrs_ago option:selected').val();
            var others_name = $(this).find('#others_name').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<aquatic_fauna>' + aquatic_fauna + '</aquatic_fauna>';
            xml_data += '<present_status>' + present_status + '</present_status>';
            xml_data += '<past_status_10yrs_ago>' + past_status_10yrs_ago + '</past_status_10yrs_ago>';
            xml_data += '<others_name>' + others_name + '</others_name>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_abundanceOf_aquatic_fauna",
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


