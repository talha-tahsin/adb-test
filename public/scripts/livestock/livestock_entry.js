


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

    insertTableRow();
    insertTableRow2();
    insertTableRow3();
    insertTableRow4();
    insertTableRow5();
    insertTableRow6();

    // $.ajax({
    //     url: "/get_livestock_type",
    //     type: "GET",
    //     data: { 'latrineList' : 'get_data'},
    //     dataType: "JSON",
    //     cache: false,
    //     success: function (data) {
    //         // console.log(data);
    //         if(data.status == 'SUCCESS'){
    //             $.each(data.message, function (i, v) {
    //                 // insertTableRow1(v.livestock_name, v.livestock_id);
    //             });
    //         }
    //         else{
    //             $('#myModal').modal({backdrop : 'static', keyboard : false});
    //             $('#error_msg').html('<span style="color: red">ERROR!! <p>'+data.message+'</p></span>');
    //         }  
    //     },
    //     error: function(xhr, ajaxOptions, thrownError) {
    //         console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
    //     }
    // });


});

$('#add_row1').on('click', function(){
    insertTableRow();
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

function insertTableRow() {

    var appendString = '';
    var rowCount = $('#my_table1 > tbody > tr').length;
    rowCount++;

    // console.log(accountName);

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="livestock_type" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Cattle">Cattle</option>';
    appendString += '<option value="Duck">Duck</option>';
    appendString += '<option value="Goat">Goat</option>';
    appendString += '<option value="Hen">Hen</option>';
    appendString += '<option value="Pig">Pig</option>';
    appendString += '<option value="Pigeon">Pigeon</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="varity_name" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="nos" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="average_num_livestock" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="product_type" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select --</option>';
    appendString += '<option value="Meat">Meat</option>';
    appendString += '<option value="Milk">Milk</option>';
    appendString += '<option value="Pair">Pair</option>';
    appendString += '<option value="Pics">Pics</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="market_unit_price" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
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
        // var livestock_name = $(this).find('td:eq(1)').text(); 
        
        var livestock_type = $(this).find('#livestock_type option:selected').val();

        var varity_name = $(this).find('#varity_name').val();
        var nos = $(this).find('#nos').val();
        var average_num_livestock = $(this).find('#average_num_livestock').val();
        var product_type = $(this).find('#product_type option:selected').val();
        var market_unit_price = $(this).find('#market_unit_price').val();

        // first binding data as xml string
        xml_data += '<row>';

        xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
        xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
        xml_data += '<para_id>' + para_id + '</para_id>';
        xml_data += '<para_name>' + para_name + '</para_name>';

        xml_data += '<livestock_name>' + livestock_type + '</livestock_name>';
        xml_data += '<varity_name>' + varity_name + '</varity_name>';
        xml_data += '<nos>' + nos + '</nos>';
        xml_data += '<average_num_livestock>' + average_num_livestock + '</average_num_livestock>';
        xml_data += '<product_type>' + product_type + '</product_type>';
        xml_data += '<market_unit_price>' + market_unit_price + '</market_unit_price>';

        xml_data += '<created_by>' + created_by + '</created_by>';

        xml_data += '</row>';
        
    });

    xml_data += '</head>';
    
    console.log(xml_data);

    // clear model message value for every ajax call provide single accurate message
    $('#success_msg').html('');
    $('#error_msg').html('');

    $.ajax({
        url: "/store_type_population_livestock",
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
                $('#btn_store2').attr('disabled', false);
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

    // console.log(accountName);

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="livestock_type" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Cattle">Cattle</option>';
    appendString += '<option value="Duck">Duck</option>';
    appendString += '<option value="Goat">Goat</option>';
    appendString += '<option value="Hen">Hen</option>';
    appendString += '<option value="Pig">Pig</option>';
    appendString += '<option value="Pigeon">Pigeon</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="diseases_name" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="major_impact" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="frequency_of_disease" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="damage_of_production" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="coping_mechanism" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
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
            
            var livestock_type = $(this).find('#livestock_type option:selected').val();

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

            xml_data += '<livestock_name>' + livestock_type + '</livestock_name>';
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
                    $('#btn_store3').attr('disabled', false);
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
    appendString += '<select type="text" id="livestock_type" class="form-control resetSelect" value="" style="width: 250px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Heavy rainfall">Heavy rainfall</option>';
    appendString += '<option value="Flash flood">Flash flood</option>';
    appendString += '<option value="Drought">Drought</option>';
    appendString += '<option value="Cold wave">Cold wave</option>';
    appendString += '<option value="Heatwave">Heatwave</option>';
    appendString += '<option value="Sudden Storm">Sudden Storm</option>';
    appendString += '<option value="Thunderstorm">Thunderstorm</option>';
    appendString += '<option value="Elephant attack">Elephant attack</option>';
    appendString += '<option value="Jackle/Guishap attack">Jackle/Guishap attack</option>';
    appendString += '<option value="Rat attack">Rat attack</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="name" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="frequency_hazard" class="form-control" value="" style="width: 260px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="damage_of_production" class="form-control" value="" style="width: 250px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="coping_mechanism" class="form-control" value="" style="width: 280px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';

    $('#my_table3 > tbody:last-child').append(appendString);
    
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
            
            var livestock_type = $(this).find('#livestock_type option:selected').val();
            var name = $(this).find('#name').val();
            var frequency_hazard = $(this).find('#frequency_hazard').val();
            var damage_of_production = $(this).find('#damage_of_production').val();
            var coping_mechanism = $(this).find('#coping_mechanism').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<livestock>' + livestock_type + '</livestock>';
            xml_data += '<name>' + name + '</name>';
            xml_data += '<frequency_hazard>' + frequency_hazard + '</frequency_hazard>';
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
            url: "/store_damage_of_livestock",
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
                    // window.location.reload(true);
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
    appendString += '<select type="text" id="livestock_type" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Cattle">Cattle</option>';
    appendString += '<option value="Duck">Duck</option>';
    appendString += '<option value="Goat">Goat</option>';
    appendString += '<option value="Hen">Hen</option>';
    appendString += '<option value="Pig">Pig</option>';
    appendString += '<option value="Pigeon">Pigeon</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="less_than_5" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="between_5_to_15" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="between_15_to_30" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="above30_or_30" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="major_3_cauese" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
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
            
            var livestock_type = $(this).find('#livestock_type option:selected').val();

            var less_than_5 = $(this).find('#less_than_5').val();
            var between_5_to_15 = $(this).find('#between_5_to_15').val();
            var between_15_to_30 = $(this).find('#between_15_to_30').val();
            var above30_or_30 = $(this).find('#above30_or_30').val();
            var major_3_cauese = $(this).find('#major_3_cauese').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<livestock_type>' + livestock_type + '</livestock_type>';
            xml_data += '<less_than_5>' + less_than_5 + '</less_than_5>';
            xml_data += '<between_5_to_15>' + between_5_to_15 + '</between_5_to_15>';
            xml_data += '<between_15_to_30>' + between_15_to_30 + '</between_15_to_30>';
            xml_data += '<above30_or_30>' + above30_or_30 + '</above30_or_30>';
            xml_data += '<major_3_cauese>' + major_3_cauese + '</major_3_cauese>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_overall_mortality_livestock",
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
    appendString += '<select type="text" id="livestock_type" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Cattle">Cattle</option>';
    appendString += '<option value="Duck">Duck</option>';
    appendString += '<option value="Goat">Goat</option>';
    appendString += '<option value="Hen">Hen</option>';
    appendString += '<option value="Pig">Pig</option>';
    appendString += '<option value="Pigeon">Pigeon</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="feed" name="feed" class="form-control resetSelect" value="" style="width: 180px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Feed">Feed</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="farming_shed" name="farming_shed" class="form-control resetSelect" value="" style="width: 180px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Farming shed">Farming shed</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="graze" name="graze" class="form-control resetSelect" value="" style="width: 180px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Graze in the wilderness">Graze in the wilderness</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="others" name="others" class="form-control resetSelect" value="" style="width: 180px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Others">Others</option>';
    appendString += '<option value="No" selected>No</option>';
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
            var livestock_type = $(this).find('td:eq(1)').text(); 
            
            var feed = $(this).find('#feed option:selected').val();
            var farming_shed = $(this).find('#farming_shed option:selected').val();
            var graze = $(this).find('#graze option:selected').val();
            var others = $(this).find('#others option:selected').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<livestock_type>' + livestock_type + '</livestock_type>';
            xml_data += '<feed>' + feed + '</feed>';
            xml_data += '<farming_shed>' + farming_shed + '</farming_shed>';
            xml_data += '<graze>' + graze + '</graze>';
            xml_data += '<others>' + others + '</others>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_livestock_rearing_methods",
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
    appendString += '<select type="text" id="livestock_type" class="form-control resetSelect" value="" style="width: 180px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Hen (for eggs) (20)">Hen (for eggs) (20)</option>';
    appendString += '<option value="Hen (for meat) (20)">Hen (for meat) (20)</option>';
    appendString += '<option value="Duck/Goose (20)">Duck/Goose (20)</option>';
    appendString += '<option value="Goat (10)">Goat (10)</option>';
    appendString += '<option value="Cattle (5)">Cattle (5)</option>';
    appendString += '<option value="Pig (10)">Pig (10)</option>';
    appendString += '<option value="Pigeon (10)">Pigeon (10)</option>';
    appendString += '<option value="Buffalo (5)">Buffalo (5)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="farming_cost" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="output_egg" name="output_egg" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Egg">Egg</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="egg_value" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="output_meat" name="output_meat" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled> Select Option</option>';
    appendString += '<option value="Meat">Meat</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="meat_value" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table6 > tbody:last-child').append(appendString);
    
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
            // var livestock_type = $(this).find('td:eq(1)').text(); 
            
            var livestock_type = $(this).find('#livestock_type option:selected').val();
            var farming_cost = $(this).find('#farming_cost').val();
            var output_egg = $(this).find('#output_egg option:selected').val();
            var egg_value = $(this).find('#egg_value').val();
            var output_meat = $(this).find('#output_meat option:selected').val();
            var meat_value = $(this).find('#meat_value').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<livestock_type>' + livestock_type + '</livestock_type>';
            xml_data += '<farming_cost>' + farming_cost + '</farming_cost>';
            xml_data += '<output_egg>' + output_egg + '</output_egg>';
            xml_data += '<egg_value>' + egg_value + '</egg_value>';
            xml_data += '<output_meat>' + output_meat + '</output_meat>';
            xml_data += '<meat_value>' + meat_value + '</meat_value>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_livestock_cost_production",
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

$(document).on('click', '#btn_store7', function (event) {

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