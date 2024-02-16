


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

    insertTableRow1();
    insertTableRow2();
    insertTableRow3();
    insertTableRow4();
    insertTableRow5();

    insertTableRow6();
    insertTableRow7();
    insertTableRow8();
    insertTableRow9();
    insertTableRow10();

    insertTableRow11a();
    insertTableRow11b();
    insertTableRow12();
    insertTableRow13();
    insertTableRow14();

    // myTable1 = {
    //     '001' : 'Only Jhum',
    //     '002' : 'Only plough',
    //     '003' : 'Only fruit',
    //     '004' : 'Jhum + plough',
    //     '005' : 'Jhum + fruit',
    //     '006' : 'Plough + fruit',
    //     '007' : 'Jhum + fruit + plough',
    // };
    // $.each(myTable1, function(key, value) {
    //     insertTableRow1(value);
    // });

    // myTable4 = {
    //     '001' : 'Land selection',
    //     '002' : 'Land preparation/Clear',
    //     '003' : 'Sowing/planting',
    //     '004' : 'Weeding',
    //     '005' : 'Pest management',
    //     '006' : 'Vegetables harvesting',
    //     '007' : 'Cucumber, gourd harvesting',
    //     '008' : 'Maize, rice harvesting',
    //     '009' : 'Chilli harvesting',
    //     '009' : 'Pumpkin, Cheena harvesting',
    // };

    // var option5 = ' <option value="" selected disabled> Select Option</option>';
    // $.each(myTable4, function(key, name) {
    //    option5 += '<option value="'+name+'">'+name+'</option>';
    // });
    // $('#jhum_type').html(option5);

});

$('#add_row1').on('click', function(){
    insertTableRow1();
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
$('#add_row7').on('click', function(){
    insertTableRow7();
});
$('#add_row8').on('click', function(){
    insertTableRow8();
});
$('#add_row10').on('click', function(){
    insertTableRow10();
});

$('#add_row11').on('click', function(){
    insertTableRow11a();
});
$('#add_row11b').on('click', function(){
    insertTableRow11b();
});

$('#add_row13').on('click', function(){
    insertTableRow13();
});
$('#add_row14').on('click', function(){
    insertTableRow14();
});



function insertTableRow1() {

    var appendString = '';
    var rowCount = $('#my_table1 > tbody > tr').length;
    rowCount++;

    // console.log(accountName);

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="farming_type" class="form-control resetSelect" value="" style="width: 250px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Only Jhum">Only Jhum</option>';
    appendString += '<option value="Only plough">Only plough</option>';
    appendString += '<option value="Only fruit">Only fruit</option>';
    appendString += '<option value="Jhum + plough">Jhum + plough</option>';
    appendString += '<option value="Jhum + fruit">Jhum + fruit</option>';
    appendString += '<option value="Plough + fruit">Plough + fruit</option>';
    appendString += '<option value="Jhum + fruit + plough">Jhum + fruit + plough</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="numOf_household" class="form-control" value="" style="width: 280px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="total_household" class="form-control" value="" style="width: 280px;text-align: left;" placeholder="Please fill up...">';
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

        var farming_type = $(this).find('#farming_type option:selected').text(); 
        
        var numOf_household = $(this).find('#numOf_household').val();
        var total_household = $(this).find('#total_household').val();

        // first binding data as xml string
        xml_data += '<row>';

        xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
        xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
        xml_data += '<para_id>' + para_id + '</para_id>';
        xml_data += '<para_name>' + para_name + '</para_name>';

        xml_data += '<farming_type>' + farming_type + '</farming_type>';
        xml_data += '<numOf_household>' + numOf_household + '</numOf_household>';
        xml_data += '<total_household>' + total_household + '</total_household>';

        xml_data += '<created_by>' + created_by + '</created_by>';

        xml_data += '</row>';
        
    });

    xml_data += '</head>';
    
    console.log(xml_data);

    // clear model message value for every ajax call provide single accurate message
    $('#success_msg').html('');
    $('#error_msg').html('');

    $.ajax({
        url: "/store_farming_typeOf_community",
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
    appendString += '<input type="text" id="kharif_1" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="kharif_2" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="rabi" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="practicing_site" class="form-control" value="" style="width: 250px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="cultivated_area" class="form-control" value="" style="width: 250px;text-align: left;" placeholder="Please fill up..">';
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
            
            var kharif_1 = $(this).find('#kharif_1').val();
            var kharif_2 = $(this).find('#kharif_2').val();
            var rabi = $(this).find('#rabi').val();
            var practicing_site = $(this).find('#practicing_site').val();
            var cultivated_area = $(this).find('#cultivated_area').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<kharif_1>' + kharif_1 + '</kharif_1>';
            xml_data += '<kharif_2>' + kharif_2 + '</kharif_2>';
            xml_data += '<rabi>' + rabi + '</rabi>';
            xml_data += '<practicing_site>' + practicing_site + '</practicing_site>';
            xml_data += '<cultivated_area>' + cultivated_area + '</cultivated_area>';

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
    appendString += '<select type="text" id="crop_category" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Grain crops">Grain crops</option>';
    appendString += '<option value="Cash crops">Cash crops</option>';
    appendString += '<option value="Vegetables">Vegetables</option>';
    appendString += '<option value="Spices">Spices</option>';
    appendString += '<option value="Fruits">Fruits</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="crop_name" class="form-control" value="" style="width: 120px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="unit" class="form-control" value="" style="width: 120px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="varity_name" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="production_in_one_acre" class="form-control" value="" style="width: 300px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="production_cost" class="form-control" value="" style="width: 300px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="per_unit_selling_price" class="form-control" value="" style="width: 280px;text-align: left;" placeholder="Please fill up...">';
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
            
            var crop_category = $(this).find('#crop_category option:selected').val();

            var crop_name = $(this).find('#crop_name').val();
            var unit = $(this).find('#unit').val();
            var varity_name = $(this).find('#varity_name').val();
            var production_in_one_acre = $(this).find('#production_in_one_acre').val();
            var per_unit_selling_price = $(this).find('#per_unit_selling_price').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<crop_category>' + crop_category + '</crop_category>';
            xml_data += '<crop_name>' + crop_name + '</crop_name>';
            xml_data += '<unit>' + unit + '</unit>';
            xml_data += '<varity_name>' + varity_name + '</varity_name>';
            xml_data += '<production_in_one_acre>' + production_in_one_acre + '</production_in_one_acre>';
            xml_data += '<per_unit_selling_price>' + per_unit_selling_price + '</per_unit_selling_price>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_major_crop_in_area",
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
    appendString += '<select type="text" id="cultivation_process" class="form-control resetSelect more4" value="" style="width: 300px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="00020">Land selection</option>';
    appendString += '<option value="00021">Land preparation/Clear</option>';
    appendString += '<option value="00022">Sowing/planting</option>';
    appendString += '<option value="00023">Weeding</option>';
    appendString += '<option value="00024">Pest management</option>';
    appendString += '<option value="00025">Vegetables harvesting</option>';
    appendString += '<option value="00026">Cucumber, gourd harvesting</option>';
    appendString += '<option value="00027">Maize, rice harvesting</option>';
    appendString += '<option value="00028">Chilli harvesting</option>';
    appendString += '<option value="00029">Pumpkin, Cheena harvesting</option>';
    appendString += '<option value="00030">Brinjal harvesting</option>';
    appendString += '<option value="00031">Cassava harvesting</option>';
    appendString += '<option value="00032">Cotton, turmeric, ginger, arum harvesting</option>';
    appendString += '<option value="00032">Drying</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="jan" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="feb" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="mar" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="apr" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="may" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="jun" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="jul" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="aug" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="sep" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="oct" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="nov" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="dec" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table4 > tbody:last-child').append(appendString);
    
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

            var cultivation_process = $(this).find('#cultivation_process option:selected').text();
            
            var jan = $(this).find('#jan').val();
            var feb = $(this).find('#feb').val();
            var mar = $(this).find('#mar').val();
            var apr = $(this).find('#apr').val();
            var may = $(this).find('#may').val();
            var jun = $(this).find('#jun').val();
            var jul = $(this).find('#jul').val();
            var aug = $(this).find('#aug').val();
            var sep = $(this).find('#sep').val();
            var oct = $(this).find('#oct').val();
            var nov = $(this).find('#nov').val();
            var dec = $(this).find('#dec').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<cultivation_process>' + cultivation_process + '</cultivation_process>';
            xml_data += '<jan>' + jan + '</jan>';
            xml_data += '<feb>' + feb + '</feb>';
            xml_data += '<mar>' + mar + '</mar>';
            xml_data += '<apr>' + apr + '</apr>';
            xml_data += '<may>' + may + '</may>';
            xml_data += '<jun>' + jun + '</jun>';
            xml_data += '<jul>' + jul + '</jul>';
            xml_data += '<aug>' + aug + '</aug>';
            xml_data += '<sep>' + sep + '</sep>';
            xml_data += '<oct>' + oct + '</oct>';
            xml_data += '<nov>' + nov + '</nov>';
            xml_data += '<dec>' + dec + '</dec>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_JhumOrShifting_cultivation_process",
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
    appendString += '<select type="text" id="slope_category" class="form-control resetSelect more4" value="" style="width: 300px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>Select Option</option>';
    appendString += '<option value="00020">Up to 5% (level to gentle slope</option>';
    appendString += '<option value="00021">5-15% (sloping)</option>';
    appendString += '<option value="00022">15-30% (moderate steep)</option>';
    appendString += '<option value="00023">30-60% (steep)</option>';
    appendString += '<option value="00024">Above 60% (very steep)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="annual_cereal_or_tuber" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Write names with comma..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="annual_vegetable" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Write names with comma..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="annual_pulse" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Write names with comma..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="annual_spice_herb_oilseed_other" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Write names with comma..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="annual_fruits" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Write names with comma..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="perennial_fruit" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Write names with comma..">';
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
            // var livestock_type = $(this).find('td:eq(1)').text(); 

            var slope_category = $(this).find('#slope_category option:selected').text();
            
            var annual_cereal_or_tuber = $(this).find('#annual_cereal_or_tuber').val();
            var annual_vegetable = $(this).find('#annual_vegetable').val();
            var annual_pulse = $(this).find('#annual_pulse').val();
            var annual_spice_herb_oilseed_other = $(this).find('#annual_spice_herb_oilseed_other').val();
            var annual_fruits = $(this).find('#annual_fruits').val();
            var perennial_fruit = $(this).find('#perennial_fruit').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<slope_category>' + slope_category + '</slope_category>';
            xml_data += '<annual_cereal_or_tuber>' + annual_cereal_or_tuber + '</annual_cereal_or_tuber>';
            xml_data += '<annual_vegetable>' + annual_vegetable + '</annual_vegetable>';
            xml_data += '<annual_pulse>' + annual_pulse + '</annual_pulse>';
            xml_data += '<annual_spice_herb_oilseed_other>' + annual_spice_herb_oilseed_other + '</annual_spice_herb_oilseed_other>';
            xml_data += '<annual_fruits>' + annual_fruits + '</annual_fruits>';
            xml_data += '<perennial_fruit>' + perennial_fruit + '</perennial_fruit>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_sloping_land_farming_practices",
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

    // appendString += '<td style="width: 200px;text-align: left;">'+center_name+'</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="farm_size" class="form-control resetSelect" value="" style="width: 300px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="00135">Up to 1 acre</option>';
    appendString += '<option value="00136">1-2 acres</option>';
    appendString += '<option value="00137">2-4 acres</option>';
    appendString += '<option value="00138">Above 4 acres</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="numberOf_jhumians" class="form-control" value="" style="width: 350px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="respondentsOf_community" class="form-control" value="" style="width: 350px;text-align: left;" placeholder="Please fill up..">';
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
            
            var farm_size = $(this).find('#farm_size option:selected').val();
            var numberOf_jhumians = $(this).find('#numberOf_jhumians').val();
            var respondentsOf_community = $(this).find('#respondentsOf_community').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<farm_size>' + farm_size + '</farm_size>';
            xml_data += '<numberOf_jhumians>' + numberOf_jhumians + '</numberOf_jhumians>';
            xml_data += '<respondentsOf_community>' + respondentsOf_community + '</respondentsOf_community>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_jhum_farm_size",
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

function insertTableRow7() {

    var appendString = '';
    var rowCount = $('#my_table7 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="cultivation_type" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Merits">Merits</option>';
    appendString += '<option value="Demerits">Demerits</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="items" class="form-control" value="" style="width: 300px;text-align: left;" placeholder="Please Copy Item from the below note...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="numberOf_response" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Please copy from the below note..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="numberOf_presence" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

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
            
            var cultivation_type = $(this).find('#cultivation_type option:selected').val();
            var items = $(this).find('#items').val();
            var numberOf_response = $(this).find('#numberOf_response').val();
            var numberOf_presence = $(this).find('#numberOf_presence').val();
            var meat_value = $(this).find('#meat_value').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<cultivation_type>' + cultivation_type + '</cultivation_type>';
            xml_data += '<items>' + items + '</items>';
            xml_data += '<numberOf_response>' + numberOf_response + '</numberOf_response>';
            xml_data += '<numberOf_presence>' + numberOf_presence + '</numberOf_presence>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_merits_demeritsOf_cultivation",
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
    appendString += '<select type="text" id="period" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="1990-2000">1990-2000</option>';
    appendString += '<option value="2000-2010">2000-2010</option>';
    appendString += '<option value="2010-2020">2010-2020</option>';
    appendString += '<option value="2020 to till date">2020 to till date</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fallow_period" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="moved_to_high_hill" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="huge_settlement" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="declarationOf_protected_areas" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="foodOr_market_demand" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="plantationOf_forest" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="DeclaringOf_reserve_forest" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="any_others" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text ..">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table8 > tbody:last-child').append(appendString);
    
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
            
            var period = $(this).find('#period option:selected').val();
            var fallow_period = $(this).find('#fallow_period').val();
            var moved_to_high_hill = $(this).find('#moved_to_high_hill option:selected').val();
            var huge_settlement = $(this).find('#huge_settlement option:selected').val();
            var declarationOf_protected_areas = $(this).find('#declarationOf_protected_areas option:selected').val();
            var foodOr_market_demand = $(this).find('#foodOr_market_demand option:selected').val();
            var plantationOf_forest = $(this).find('#plantationOf_forest option:selected').val();
            var declaringOf_reserve_forest = $(this).find('#DeclaringOf_reserve_forest option:selected').val();
            var any_others = $(this).find('#any_others').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<period>' + period + '</period>';
            xml_data += '<fallow_period>' + fallow_period + '</fallow_period>';
            xml_data += '<moved_to_high_hill>' + moved_to_high_hill + '</moved_to_high_hill>';
            xml_data += '<huge_settlement>' + huge_settlement + '</huge_settlement>';
            xml_data += '<declarationOf_protected_areas>' + declarationOf_protected_areas + '</declarationOf_protected_areas>';
            xml_data += '<foodOr_market_demand>' + foodOr_market_demand + '</foodOr_market_demand>';
            xml_data += '<plantationOf_forest>' + plantationOf_forest + '</plantationOf_forest>';
            xml_data += '<declaringOf_reserve_forest>' + declaringOf_reserve_forest + '</declaringOf_reserve_forest>';
            xml_data += '<any_others>' + any_others + '</any_others>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_TrendOf_jhum_cycle_period",
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

    // appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="name_1" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="name_2" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="name_3" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="name_4" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="name_5" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    // appendString += '<td style="text-align: center;">';
    // appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    // appendString += '</td>';

    appendString += '</tr>';


    $('#my_table9 > tbody:last-child').append(appendString);
}

$(document).on('click', '#btn_store9', function (event) {

    event.preventDefault();
    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var name_1 = $('#name_1').val();
    var name_2 = $('#name_2').val();
    var name_3 = $('#name_3').val();
    var name_4 = $('#name_4').val();
    var name_5 = $('#name_5').val();

    var form = $('#my_form1')[0];
    var formdata = new FormData(form);
    formdata.append( "_token", token);
    formdata.append( "watershed_id", watershed_id);
    formdata.append( "watershed_name", watershed_name);
    formdata.append( "para_id", para_id);
    formdata.append( "para_name", para_name);

    formdata.append( "name_1", name_1);
    formdata.append( "name_2", name_2);
    formdata.append( "name_3", name_3);
    formdata.append( "name_4", name_4);
    formdata.append( "name_5", name_5);

    formdata.append( "created_by", created_by);

    console.log(formdata);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');

    $.ajax({
        url: "/store_detrimental_crops_hilly",
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
                $('#my_table9 td input[type=text]').val('');
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

function insertTableRow10() {

    var appendString = '';
    var rowCount = $('#my_table10 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="diseases_Or_hazard" class="form-control" value="" style="width: 250px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="crop_name" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="frequencyOf_damage" class="form-control" value="" style="width: 350px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="damage_affected_year" class="form-control" value="" style="width: 350px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="existing_coping_mechanism" class="form-control" value="" style="width: 400px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';

    $('#my_table10 > tbody:last-child').append(appendString);
    
    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table10 > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store10', function () {

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

        $('#my_table10 > tbody > tr').each(function () {
            
            var diseases_Or_hazard = $(this).find('#diseases_Or_hazard option:selected').val();
            var crop_name = $(this).find('#crop_name option:selected').val();
            var frequencyOf_damage = $(this).find('#frequencyOf_damage option:selected').val();
            var damage_affected_year = $(this).find('#damage_affected_year option:selected').val();
            var existing_coping_mechanism = $(this).find('#existing_coping_mechanism option:selected').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<diseases_Or_hazard>' + diseases_Or_hazard + '</diseases_Or_hazard>';
            xml_data += '<crop_name>' + crop_name + '</crop_name>';
            xml_data += '<frequencyOf_damage>' + frequencyOf_damage + '</frequencyOf_damage>';
            xml_data += '<damage_affected_year>' + damage_affected_year + '</damage_affected_year>';
            xml_data += '<existing_coping_mechanism>' + existing_coping_mechanism + '</existing_coping_mechanism>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_damage_existing_coping_mechanism",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table10 td input[type=text]').val('');
                    $('#my_table10 td').find('.resetSelect').prop("selectedIndex", 0);
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

function insertTableRow11a() {

    var appendString = '';
    var rowCount = $('#my_table11a > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="surface_water_type" class="form-control resetSelect" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Khal">Khal</option>';
    appendString += '<option value="River">River</option>';
    appendString += '<option value="Spring/Chhara/Creek">Spring/Chhara/Creek</option>';
    appendString += '<option value="Others">Others</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="area" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="any_others_name" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';

    $('#my_table11a > tbody:last-child').append(appendString);
    removeTableRow11a();
}
function removeTableRow11a() {

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table11a > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store11a', function () {

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

        $('#my_table11a > tbody > tr').each(function () {
            
            var surface_water_type = $(this).find('#surface_water_type option:selected').val();
            var area = $(this).find('#area').val();
            var any_others_name = $(this).find('#any_others_name').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<surface_water_type>' + surface_water_type + '</surface_water_type>';
            xml_data += '<area>' + area + '</area>';
            xml_data += '<any_others_name>' + any_others_name + '</any_others_name>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_surface_water_and_area_coverage",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table11a td input[type=text]').val('');
                    $('#my_table11b td').find('.resetSelect').prop("selectedIndex", 0);
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

function insertTableRow11b() {

    var appendString = '';
    var rowCount = $('#my_table11b > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="ground_water_type" name="ground_water_type" class="form-control resetSelect" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Deep tube well">Deep tube well</option>';
    appendString += '<option value="Shallow tube well">Shallow tube well</option>';
    appendString += '<option value="Spring layer">Spring layer</option>';
    appendString += '<option value="Others">Others</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="area" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="any_others_name" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';

    $('#my_table11b > tbody:last-child').append(appendString);
    removeTableRow11b();
}
function removeTableRow11b() {

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table11b > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store11b', function () {

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

        $('#my_table11b > tbody > tr').each(function () {
            
            var ground_water_type = $(this).find('#ground_water_type option:selected').val();
            var area = $(this).find('#area').val();
            var any_others_name = $(this).find('#any_others_name').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<ground_water_type>' + ground_water_type + '</ground_water_type>';
            xml_data += '<area>' + area + '</area>';
            xml_data += '<any_others_name>' + any_others_name + '</any_others_name>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_ground_water_and_area_coverage",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table11b td input[type=text]').val('');
                    $('#my_table11b td').find('.resetSelect').prop("selectedIndex", 0);
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

function insertTableRow12() {

    var appendString = '';
    var rowCount = $('#my_table12 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    // appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="jan" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Jan">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="feb" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Feb">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="mar" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Mar">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="apr" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="may" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="May">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="jun" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Jun">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="jul" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Jul">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="aug" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Aug">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="sep" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Sep">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="oct" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Oct">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="nov" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Nov">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="dec" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Dec">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    // appendString += '<td style="text-align: center;">';
    // appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    // appendString += '</td>';

    appendString += '</tr>';


    $('#my_table12 > tbody:last-child').append(appendString);
}

$(document).on('click', '#btn_store12', function () {

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

        $('#my_table12 > tbody > tr').each(function () {
            
            var jan = $(this).find('#jan option:selected').val();
            var feb = $(this).find('#feb option:selected').val();
            var mar = $(this).find('#mar option:selected').val();
            var apr = $(this).find('#apr option:selected').val();
            var may = $(this).find('#may option:selected').val();

            var jun = $(this).find('#jun option:selected').val();
            var jul = $(this).find('#jul option:selected').val();
            var aug = $(this).find('#aug option:selected').val();
            var sep = $(this).find('#sep option:selected').val();
            var oct = $(this).find('#oct option:selected').val();
            var nov = $(this).find('#nov option:selected').val();
            var dec = $(this).find('#dec option:selected').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<jan>' + jan + '</jan>';
            xml_data += '<feb>' + feb + '</feb>';
            xml_data += '<mar>' + mar + '</mar>';
            xml_data += '<apr>' + apr + '</apr>';
            xml_data += '<may>' + may + '</may>';
            xml_data += '<jun>' + jun + '</jun>';

            xml_data += '<jul>' + jul + '</jul>';
            xml_data += '<aug>' + aug + '</aug>';
            xml_data += '<sep>' + sep + '</sep>';
            xml_data += '<oct>' + oct + '</oct>';
            xml_data += '<nov>' + nov + '</nov>';
            xml_data += '<dec>' + dec + '</dec>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_irrigation_crisis_period",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table12 td input[type=text]').val('');
                    $('#my_table12 td').find('.resetSelect').prop("selectedIndex", 0);
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

function insertTableRow13() {

    var appendString = '';
    var rowCount = $('#my_table13 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="machineries_name" class="form-control resetSelect" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Power tiller">Power tiller</option>';
    appendString += '<option value="Reaper">Reaper</option>';
    appendString += '<option value="Tractor">Tractor</option>';
    appendString += '<option value="Transplanter">Transplanter</option>';
    appendString += '<option value="Seeder/Dibler">Seeder/Dibler</option>';
    appendString += '<option value="Mechanical weeder">Mechanical weeder</option>';
    appendString += '<option value="Sprayer">Sprayer</option>';
    appendString += '<option value="Thresher">Thresher</option>';
    appendString += '<option value="Grain Dryer">Grain Dryer</option>';
    appendString += '<option value="Others">Others</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="current_use" class="form-control resetSelect" value="" style="width: 160px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="future_use" class="form-control resetSelect" value="" style="width: 160px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="others_name" class="form-control" value="" style="width: 250px;text-align: left;" placeholder="Text ..">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';

    $('#my_table13 > tbody:last-child').append(appendString);
    removeTableRow13();
}
function removeTableRow13() {

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table13 > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store13', function () {

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

        $('#my_table13 > tbody > tr').each(function () {
            
            var machineries_name = $(this).find('#machineries_name option:selected').val();
            var current_use = $(this).find('#current_use option:selected').val();
            var future_use = $(this).find('#future_use option:selected').val();
            var others_name = $(this).find('#others_name').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<machineries_name>' + machineries_name + '</machineries_name>';
            xml_data += '<current_use>' + current_use + '</current_use>';
            xml_data += '<future_use>' + future_use + '</future_use>';
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
            url: "/store_farm_mechanization_status",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table13 td input[type=text]').val('');
                    $('#my_table13 td').find('.resetSelect').prop("selectedIndex", 0);
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

function insertTableRow14() {

    var appendString = '';
    var rowCount = $('#my_table14 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="agro_forestry_system" class="form-control resetSelect" value="" style="width: 450px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Multi-storey Fruit Garden (MSFG)">Multi-storey Fruit Garden (MSFG)</option>';
    appendString += '<option value="SALT-1 (Sloping Agricultural Land Technology)">SALT-1 (Sloping Agricultural Land Technology)</option>';
    appendString += '<option value="SALT-3 (Sloping Agro-livestock Land Technology)">SALT-3 (Sloping Agro-livestock Land Technology)</option>';
    appendString += '<option value="Contour Hedgerow Intercropping Agro-forestry Technology (CHIAT)">Contour Hedgerow Intercropping Agro-forestry Technology (CHIAT)</option>';
    appendString += '<option value="Multi-strata Agroforestry System (MAFS)">Multi-strata Agroforestry System (MAFS)</option>';
    appendString += '<option value="SALT-2 (Sloping Agroforest Land Technology)">SALT-2 (Sloping Agroforest Land Technology)</option>';
    appendString += '<option value="SALT-4 (Sloping Agro-fisheries Livelihood Technology)">SALT-4 (Sloping Agro-fisheries Livelihood Technology)</option>';
    appendString += '<option value="Modern Agricultural Technology (MATH)">Modern Agricultural Technology (MATH)</option>';
    appendString += '<option value="Others">Others</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="current_use" class="form-control resetSelect" value="" style="width: 160px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="future_use" class="form-control resetSelect" value="" style="width: 160px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="others_name" class="form-control" value="" style="width: 250px;text-align: left;" placeholder="Text ..">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';

    $('#my_table14 > tbody:last-child').append(appendString);
    removeTableRow14();
}
function removeTableRow14() {

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table14 > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store14', function () {

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

        $('#my_table14 > tbody > tr').each(function () {
            
            var agro_forestry_system = $(this).find('#agro_forestry_system option:selected').val();
            var current_use = $(this).find('#current_use option:selected').val();
            var future_use = $(this).find('#future_use option:selected').val();
            var others_name = $(this).find('#others_name').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<agro_forestry_system>' + agro_forestry_system + '</agro_forestry_system>';
            xml_data += '<current_use>' + current_use + '</current_use>';
            xml_data += '<future_use>' + future_use + '</future_use>';
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
            url: "/store_agroforestry_farming_system",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table14 td input[type=text]').val('');
                    $('#my_table14 td').find('.resetSelect').prop("selectedIndex", 0);
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