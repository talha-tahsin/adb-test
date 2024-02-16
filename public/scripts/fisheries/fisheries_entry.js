


// document.title = 'Livestock Entry';

$(document).ready(function () {

    console.log("hello talha..");

    // $('#watershedId').select2();
    // $('.select2').css({'border': '2px solid #898AEE', 'border-radius': '5px'});
    // $('#para_list').prop('disabled', true);
    
    insertTableRow();
    insertTableRow2();
    insertTableRow3();
    insertTableRow4();
    insertTableRow5();
    // insertTableRow6();

    tabData6 = {
        '001' : 'River',
        '002' : 'Stream/Chhara/Jhiri',
        '003' : 'Beel',
        '004' : 'Lake',
    };
    $.each(tabData6, function(key, value) {
        insertTableRow6(value);
        // insertTableRow7(value);
    });
    tabData7 = {
        '001' : 'Fish Pond (>10 Decimal)',
        '002' : 'Fish Pond (5-10 Decimal)',
        '003' : 'Fish Pond (1-5 Decimal)',
        '004' : 'Lake',
        '005' : 'Stream/Chhara/Jhiri',
        '006' : 'Others',
    };
    $.each(tabData7, function(key, value) {
        insertTableRow7(value);
    });

    $.ajax({
        url: "/get_livestock_type",
        type: "GET",
        data: { 'latrineList' : 'get_data'},
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == 'SUCCESS'){
                $.each(data.message, function (i, v) {
                    // insertTableRow4(v.livestock_name);
                    // insertTableRow5(v.livestock_name);
                });
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

$('#add_row').on('click', function(){
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

function insertTableRow() {

    var appendString = '';
    var rowCount = $('#my_table1 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="water_body_types" class="form-control" value="" style="width: 120px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="name" class="form-control" value="" style="width: 120px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="water_available_prsnt" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="avg_depth_prsnt" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="water_available_5yrs_ago" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="avg_depth_5yrs_ago" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="water_available_10yrs_ago" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="avg_depth_10yrs_ago" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="pollutaion_sources" class="form-control" value="" style="width: 120px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="consequences_pollution" class="form-control" value="" style="width: 120px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="changes_reason" class="form-control" value="" style="width: 120px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="adaptive_measures" class="form-control" value="" style="width: 120px;text-align: left;" placeholder="Text/Number">';
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
        
        var water_body_types = $(this).find('#water_body_types').val();
        var name = $(this).find('#name').val();
        var water_available_prsnt = $(this).find('#water_available_prsnt').val();
        var avg_depth_prsnt = $(this).find('#avg_depth_prsnt').val();
        var avg_depth_prsnt = $(this).find('#avg_depth_prsnt').val();
        var water_available_5yrs_ago = $(this).find('#water_available_5yrs_ago').val();
        var avg_depth_5yrs_ago = $(this).find('#avg_depth_5yrs_ago').val();
        var water_available_10yrs_ago = $(this).find('#water_available_10yrs_ago').val();
        var avg_depth_10yrs_ago = $(this).find('#avg_depth_10yrs_ago').val();
        var pollutaion_sources = $(this).find('#pollutaion_sources').val();
        var consequences_pollution = $(this).find('#consequences_pollution').val();
        var changes_reason = $(this).find('#changes_reason').val();
        var adaptive_measures = $(this).find('#adaptive_measures').val();

        // first binding data as xml string
        xml_data += '<row>';

        xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
        xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
        xml_data += '<para_id>' + para_id + '</para_id>';
        xml_data += '<para_name>' + para_name + '</para_name>';

        xml_data += '<water_body_types>' + water_body_types + '</water_body_types>';
        xml_data += '<name>' + name + '</name>';
        xml_data += '<water_available_prsnt>' + water_available_prsnt + '</water_available_prsnt>';
        xml_data += '<avg_depth_prsnt>' + avg_depth_prsnt + '</avg_depth_prsnt>';
        xml_data += '<water_available_5yrs_ago>' + water_available_5yrs_ago + '</water_available_5yrs_ago>';
        xml_data += '<avg_depth_5yrs_ago>' + avg_depth_5yrs_ago + '</avg_depth_5yrs_ago>';
        xml_data += '<water_available_10yrs_ago>' + water_available_10yrs_ago + '</water_available_10yrs_ago>';
        xml_data += '<avg_depth_10yrs_ago>' + avg_depth_10yrs_ago + '</avg_depth_10yrs_ago>';
        xml_data += '<pollutaion_sources>' + pollutaion_sources + '</pollutaion_sources>';
        xml_data += '<consequences_pollution>' + consequences_pollution + '</consequences_pollution>';
        xml_data += '<changes_reason>' + changes_reason + '</changes_reason>';
        xml_data += '<adaptive_measures>' + adaptive_measures + '</adaptive_measures>';

        xml_data += '<created_by>' + created_by + '</created_by>';

        xml_data += '</row>';
        
    });

    xml_data += '</head>';
    
    console.log(xml_data);

    // clear model message value for every ajax call provide single accurate message
    $('#success_msg').html('');
    $('#error_msg').html('');

    $.ajax({
        url: "/store_capture_fisheries",
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
    appendString += '<input type="text" id="river_species" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="river_composition" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="stream_species" class="form-control" value="" style="width: 110px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="stream_composition" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="lake_species" class="form-control" value="" style="width: 110px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="lake_compostion" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="beel_species" class="form-control" value="" style="width: 110px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="beel_composition" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Text/Number">';
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

$('#add_others').on('click', function(){
    $('#others_row').removeClass('hide');
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

            // var livestock_name = $(this).find('td:eq(1)').text(); 
            
            var river_species = $(this).find('#river_species').val();
            var river_composition = $(this).find('#river_composition').val();
            var stream_species = $(this).find('#stream_species').val();
            var stream_composition = $(this).find('#stream_composition').val();
            var lake_species = $(this).find('#lake_species').val();
            var lake_compostion = $(this).find('#lake_compostion').val();
            var beel_species = $(this).find('#beel_species').val();
            var beel_composition = $(this).find('#beel_composition').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<river_species>' + river_species + '</river_species>';
            xml_data += '<river_composition>' + river_composition + '</river_composition>';
            xml_data += '<stream_species>' + stream_species + '</stream_species>';
            xml_data += '<stream_composition>' + stream_composition + '</stream_composition>';
            xml_data += '<lake_species>' + lake_species + '</lake_species>';
            xml_data += '<lake_compostion>' + lake_compostion + '</lake_compostion>';
            xml_data += '<beel_species>' + beel_species + '</beel_species>';
            xml_data += '<beel_composition>' + beel_composition + '</beel_composition>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_biodiversity_composition",
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
    appendString += '<input type="text" id="name_of_species" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="habitat_river" class="form-control" value="" style="width: 120px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="habitat_stream" class="form-control" value="" style="width: 120px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="habitat_beel" class="form-control" value="" style="width: 120px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="habitat_lake" class="form-control" value="" style="width: 120px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="habitat_other" class="form-control" value="" style="width: 120px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="abundance_present" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="abundance_5yrs_back" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="abundance_10yrs_back" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="reason_of_changes" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Text/Number">';
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
            
            var name_of_species = $(this).find('#name_of_species').val();
            var habitat_river = $(this).find('#habitat_river').val();
            var habitat_stream = $(this).find('#habitat_stream').val();
            var habitat_beel = $(this).find('#habitat_beel').val();
            var habitat_lake = $(this).find('#habitat_lake').val();
            var habitat_other = $(this).find('#habitat_other').val();

            var abundance_present = $(this).find('#abundance_present').val();
            var abundance_5yrs_back = $(this).find('#abundance_5yrs_back').val();
            var abundance_10yrs_back = $(this).find('#abundance_10yrs_back').val();
            var reason_of_changes = $(this).find('#reason_of_changes').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<name_of_species>' + name_of_species + '</name_of_species>';
            xml_data += '<habitat_river>' + habitat_river + '</habitat_river>';
            xml_data += '<habitat_stream>' + habitat_stream + '</habitat_stream>';
            xml_data += '<habitat_beel>' + habitat_beel + '</habitat_beel>';
            xml_data += '<habitat_lake>' + habitat_lake + '</habitat_lake>';
            xml_data += '<habitat_other>' + habitat_other + '</habitat_other>';

            xml_data += '<abundance_present>' + abundance_present + '</abundance_present>';
            xml_data += '<abundance_5yrs_back>' + abundance_5yrs_back + '</abundance_5yrs_back>';
            xml_data += '<abundance_10yrs_back>' + abundance_10yrs_back + '</abundance_10yrs_back>';
            xml_data += '<reason_of_changes>' + reason_of_changes + '</reason_of_changes>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_threatened_fish_species",
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
    appendString += '<input type="text" id="name_of_gears" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="gear_size_length" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="gear_size_width" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="mesh_size" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fishing_habitat" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="depth_of_operation" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="fishing_time" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="gear_use_seasion" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="operate_person" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="haul_duration" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="avg_catch_present" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="avg_catch_5yrs_back" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="avg_catch_10yrs_back" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Text/Number">';
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
            
            var name_of_gears = $(this).find('#name_of_gears').val();
            var gear_size_length = $(this).find('#gear_size_length').val();
            var gear_size_width = $(this).find('#gear_size_width').val();
            var mesh_size = $(this).find('#mesh_size').val();
            var fishing_habitat = $(this).find('#fishing_habitat').val();
            var depth_of_operation = $(this).find('#depth_of_operation').val();
            var fishing_time = $(this).find('#fishing_time').val();
            var gear_use_seasion = $(this).find('#gear_use_seasion').val();
            var operate_person = $(this).find('#operate_person').val();
            var haul_duration = $(this).find('#haul_duration').val();
            var avg_catch_present = $(this).find('#avg_catch_present').val();
            var avg_catch_5yrs_back = $(this).find('#avg_catch_5yrs_back').val();
            var avg_catch_10yrs_back = $(this).find('#avg_catch_10yrs_back').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<name_of_gears>' + name_of_gears + '</name_of_gears>';
            xml_data += '<gear_size_length>' + gear_size_length + '</gear_size_length>';
            xml_data += '<gear_size_width>' + gear_size_width + '</gear_size_width>';
            xml_data += '<mesh_size>' + mesh_size + '</mesh_size>';
            xml_data += '<fishing_habitat>' + fishing_habitat + '</fishing_habitat>';
            xml_data += '<depth_of_operation>' + depth_of_operation + '</depth_of_operation>';

            xml_data += '<fishing_time>' + fishing_time + '</fishing_time>';
            xml_data += '<gear_use_seasion>' + gear_use_seasion + '</gear_use_seasion>';
            xml_data += '<operate_person>' + operate_person + '</operate_person>';
            xml_data += '<haul_duration>' + haul_duration + '</haul_duration>';
            xml_data += '<avg_catch_present>' + avg_catch_present + '</avg_catch_present>';
            xml_data += '<avg_catch_5yrs_back>' + avg_catch_5yrs_back + '</avg_catch_5yrs_back>';
            xml_data += '<avg_catch_10yrs_back>' + avg_catch_10yrs_back + '</avg_catch_10yrs_back>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_fishing_method_appliance",
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
    appendString += '<input type="text" id="host_fish_species" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="disease_name" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="syndrome" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="season" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Text/Number">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="reason" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Text/Number">';
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
            
            var host_fish_species = $(this).find('#host_fish_species').val();
            var disease_name = $(this).find('#disease_name').val();
            var syndrome = $(this).find('#syndrome').val();
            var season = $(this).find('#season').val();
            var reason = $(this).find('#reason').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<host_fish_species>' + host_fish_species + '</host_fish_species>';
            xml_data += '<disease_name>' + disease_name + '</disease_name>';
            xml_data += '<syndrome>' + syndrome + '</syndrome>';
            xml_data += '<season>' + season + '</season>';
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
            url: "/store_fish_diseases",
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

function insertTableRow6(name) {

    var appendString = '';
    var rowCount = $('#my_table6 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td style="width: 200px;text-align: left;">'+ name +'</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="name" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    // appendString += '<td>';
    // appendString += '<select type="text" id="output_meat" name="output_meat" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    // appendString += '<option value="" disabled> Select Option</option>';
    // appendString += '<option value="Meat">Meat</option>';
    // appendString += '<option value="No" selected>No</option>';
    // appendString += '</select>';
    // appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="type_of_management" class="form-control" value="" style="width: 220px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="coordinate_management" class="form-control" value="" style="width: 220px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="area_of_site" class="form-control" value="" style="width: 160px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="management_approach" class="form-control" value="" style="width: 160px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="management_activity" class="form-control" value="" style="width: 160px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="management_challenges" class="form-control" value="" style="width: 160px;text-align: left;" placeholder="Please fill up..">';
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
            var typeOf_water_body = $(this).find('td:eq(1)').text(); 
            
            var name = $(this).find('#name').val();
            var type_of_management = $(this).find('#type_of_management').val();
            var coordinate_management = $(this).find('#coordinate_management').val();
            var area_of_site = $(this).find('#area_of_site').val();
            var management_approach = $(this).find('#management_approach').val();
            var management_activity = $(this).find('#management_activity').val();
            var management_challenges = $(this).find('#management_challenges').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<typeOf_water_body>' + typeOf_water_body + '</typeOf_water_body>';
            xml_data += '<name>' + name + '</name>';
            xml_data += '<type_of_management>' + type_of_management + '</type_of_management>';
            xml_data += '<coordinate_management>' + coordinate_management + '</coordinate_management>';
            xml_data += '<area_of_site>' + area_of_site + '</area_of_site>';
            xml_data += '<management_approach>' + management_approach + '</management_approach>';
            xml_data += '<management_activity>' + management_activity + '</management_activity>';
            xml_data += '<management_challenges>' + management_challenges + '</management_challenges>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_fisheries_management",
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

    appendString += '<td style="width: 100px;text-align: left;">'+ name +'</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="sourceOf_water" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="">';
    appendString += '</td>';

    // appendString += '<td>';
    // appendString += '<select type="text" id="output_meat" name="output_meat" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    // appendString += '<option value="" disabled> Select Option</option>';
    // appendString += '<option value="Meat">Meat</option>';
    // appendString += '<option value="No" selected>No</option>';
    // appendString += '</select>';
    // appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="water_availability_present" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Write">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="water_availability_5yrs_ago" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Write">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="water_availability_10yrs_ago" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Write">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="water_depth_dry" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Write">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="water_depth_wet" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Write">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="aquaculture_type" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Write">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="technology_used" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Write">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="aquaculture_species" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Write">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="feed_used" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Write">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="avg_production_present" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Write">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="avg_production_5yrs_ago" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Write">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="avg_production_10yrs_ago" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Write">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="production_cost" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Write">';
    appendString += '</td>';
    appendString += '<td>';
    appendString += '<input type="text" id="selling_cost" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="Write">';
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

            // var farm_item_id = $(this).attr('center_id');
            var typeOf_water_body = $(this).find('td:eq(1)').text(); 
            
            var sourceOf_water = $(this).find('#sourceOf_water').val();
            var water_availability_present = $(this).find('#water_availability_present').val();
            var water_availability_5yrs_ago = $(this).find('#water_availability_5yrs_ago').val();
            var water_availability_10yrs_ago = $(this).find('#water_availability_10yrs_ago').val();
            var water_depth_dry = $(this).find('#water_depth_dry').val();
            var water_depth_wet = $(this).find('#water_depth_wet').val();

            var aquaculture_type = $(this).find('#aquaculture_type').val();
            var technology_used = $(this).find('#technology_used').val();
            var aquaculture_species = $(this).find('#aquaculture_species').val();
            var feed_used = $(this).find('#feed_used').val();

            var avg_production_present = $(this).find('#avg_production_present').val();
            var avg_production_5yrs_ago = $(this).find('#avg_production_5yrs_ago').val();
            var avg_production_10yrs_ago = $(this).find('#avg_production_10yrs_ago').val();

            var production_cost = $(this).find('#production_cost').val();
            var selling_cost = $(this).find('#selling_cost').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<typeOf_water_body>' + typeOf_water_body + '</typeOf_water_body>';
            xml_data += '<sourceOf_water>' + sourceOf_water + '</sourceOf_water>';
            xml_data += '<water_availability_present>' + water_availability_present + '</water_availability_present>';
            xml_data += '<water_availability_5yrs_ago>' + water_availability_5yrs_ago + '</water_availability_5yrs_ago>';
            xml_data += '<water_availability_10yrs_ago>' + water_availability_10yrs_ago + '</water_availability_10yrs_ago>';

            xml_data += '<water_depth_dry>' + water_depth_dry + '</water_depth_dry>';
            xml_data += '<water_depth_wet>' + water_depth_wet + '</water_depth_wet>';
            xml_data += '<aquaculture_type>' + aquaculture_type + '</aquaculture_type>';
            xml_data += '<technology_used>' + technology_used + '</technology_used>';
            xml_data += '<aquaculture_species>' + aquaculture_species + '</aquaculture_species>';

            xml_data += '<feed_used>' + feed_used + '</feed_used>';
            xml_data += '<avg_production_present>' + avg_production_present + '</avg_production_present>';
            xml_data += '<avg_production_5yrs_ago>' + avg_production_5yrs_ago + '</avg_production_5yrs_ago>';
            xml_data += '<avg_production_10yrs_ago>' + avg_production_10yrs_ago + '</avg_production_10yrs_ago>';

            xml_data += '<production_cost>' + production_cost + '</production_cost>';
            xml_data += '<selling_cost>' + selling_cost + '</selling_cost>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_aquaculture",
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