


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
    
    insertTableRow3a();
    insertTableRow3b();
    insertTableRow3c();
    insertTableRow3d();

    insertTableRow4();
    insertTableRow5();
    insertTableRow6();
    insertTableRow7();

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

    myTable4 = {
        '001' : 'Land selection',
        '002' : 'Land preparation/Clear',
        '003' : 'Sowing/planting',
        '004' : 'Weeding',
        '005' : 'Pest management',
        '006' : 'Vegetables harvesting',
        '007' : 'Cucumber, gourd harvesting',
        '008' : 'Maize, rice harvesting',
        '009' : 'Chilli harvesting',
        '009' : 'Pumpkin, Cheena harvesting',
    };

    var option5 = ' <option value="" selected disabled> Select Option </option>';
    $.each(myTable4, function(key, name) {
       option5 += '<option value="'+name+'">'+name+'</option>';
    });
    $('#jhum_type').html(option5);

});

$('#add_row2').on('click', function(){
    insertTableRow2();
});

$('#add_row3a').on('click', function(){
    insertTableRow3a();
});

$('#add_row3b').on('click', function(){
    insertTableRow3b();
});

$('#add_row3c').on('click', function(){
    insertTableRow3c();
});

$('#add_row3d').on('click', function(){
    insertTableRow3d();
});

$('#add_row4').on('click', function(){
    insertTableRow4();

    myTable4 = {
        '001' : 'Land selection',
        '002' : 'Land preparation/Clear',
        '003' : 'Sowing/planting',
        '004' : 'Weeding',
        '005' : 'Pest management',
        '006' : 'Vegetables harvesting',
        '007' : 'Cucumber, gourd harvesting',
        '008' : 'Maize, rice harvesting',
        '009' : 'Chilli harvesting',
        '009' : 'Pumpkin, Cheena harvesting',
    };

    var option5 = ' <option value="" selected disabled> Select Option</option>';
    $.each(myTable4, function(key, name) {
       option5 += '<option value="'+name+'">'+name+'</option>';
    });
    $('.more4').html(option5);

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

$(document).on('click', '#btn_store1', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var v_master = '';

    v_master = '<row>';
        v_master += '<watershed_id>' + watershed_id + '</watershed_id>';
        v_master += '<watershed_name>' + watershed_name + '</watershed_name>';
        v_master += '<para_id>' + para_id + '</para_id>';
        v_master += '<para_name>' + para_name + '</para_name>';
        v_master += '<created_by>' + created_by + '</created_by>';
    v_master += '</row>';

    var question1 = $('#question1').text().trim();
    var question2 = $('#question2').text().trim();
    var question3 = $('#question3').text().trim();
    var question4 = $('#question4').text().trim();
    var question5 = $('#question5').text().trim();
    var question6 = $('#question6').text().trim();
    var question7 = $('#question7').text().trim();
    var question8 = $('#question8').text().trim();

    var question91 = $('#question91').text().trim();
    var question92 = $('#question92').text().trim();
    var question93 = $('#question93').text().trim();
    var question94 = $('#question94').text().trim();

    var question10 = $('#question10').text().trim();

    var answer1 = [];
    $("input:checkbox[name=checkBox1]:checked").each(function(){
        answer1.push($(this).val());
    });

    if (answer1.length > 0) {
        answer1 = answer1.join(', ');
    } else {
        alert('Please select at least one option for question 1..');
    }
    var answer2 = [];
    $("input:checkbox[name=checkBox2]:checked").each(function(){
        answer2.push($(this).val());
    });

    if (answer2.length > 0) {
        answer2 = answer2.join(', ');
    } else {
        alert('Please select at least one option for question 2..');
    }

    var answer3 = [];
    $("input:checkbox[name=checkBox3]:checked").each(function(){
        answer3.push($(this).val());
    });

    if (answer3.length > 0) {
        answer3 = answer3.join(', ');
    } else {
        alert('Please select at least one option for question 3..');
    }

    var answer4 = $('#answer4').val();
    var answer5 = $('#answer5 option:selected').val();
    var answer6 = $('#answer6 option:selected').val();
    var answer7 = $('#answer7 option:selected').val();

    var answer8 = [];
    $("input:checkbox[name=checkBox4]:checked").each(function(){
        answer8.push($(this).val());
    });

    if (answer8.length > 0) {
        answer8 = answer8.join(', ');
    } else {
        alert('Please select at least one option for question 3..');
    }

    var answer91 = $('#answer91 option:selected').val();
    var answer92 = $('#answer92 option:selected').val();
    var answer93 = $('#answer93 option:selected').val();
    var answer94 = $('#answer94 option:selected').val();

    var answer10 = $('#answer10').val();

    var xml_data = '<head>';

    xml_data += '<row>';
    xml_data += '<question>' + question1 + '</question>';
    xml_data += '<answer>' + answer1 + '</answer>';
    xml_data += '</row>';

    xml_data += '<row>';
    xml_data += '<question>' + question2 + '</question>';
    xml_data += '<answer>' + answer2 + '</answer>';
    xml_data += '</row>';

    xml_data += '<row>';
    xml_data += '<question>' + question3 + '</question>';
    xml_data += '<answer>' + answer3 + '</answer>';
    xml_data += '</row>';

    xml_data += '<row>';
    xml_data += '<question>' + question4 + '</question>';
    xml_data += '<answer>' + answer4 + '</answer>';
    xml_data += '</row>';

    xml_data += '<row>';
    xml_data += '<question>' + question5 + '</question>';
    xml_data += '<answer>' + answer5 + '</answer>';
    xml_data += '</row>';

    xml_data += '<row>';
    xml_data += '<question>' + question6 + '</question>';
    xml_data += '<answer>' + answer6 + '</answer>';
    xml_data += '</row>';

    xml_data += '<row>';
    xml_data += '<question>' + question7 + '</question>';
    xml_data += '<answer>' + answer7 + '</answer>';
    xml_data += '</row>';

    xml_data += '<row>';
    xml_data += '<question>' + question8 + '</question>';
    xml_data += '<answer>' + answer8 + '</answer>';
    xml_data += '</row>';

    xml_data += '<row>';
    xml_data += '<question>' + question91 + '</question>';
    xml_data += '<answer>' + answer91 + '</answer>';
    xml_data += '</row>';

    xml_data += '<row>';
    xml_data += '<question>' + question92 + '</question>';
    xml_data += '<answer>' + answer92 + '</answer>';
    xml_data += '</row>';

    xml_data += '<row>';
    xml_data += '<question>' + question93 + '</question>';
    xml_data += '<answer>' + answer93 + '</answer>';
    xml_data += '</row>';

    xml_data += '<row>';
    xml_data += '<question>' + question94 + '</question>';
    xml_data += '<answer>' + answer94 + '</answer>';
    xml_data += '</row>';

    xml_data += '<row>';
    xml_data += '<question>' + question10 + '</question>';
    xml_data += '<answer>' + answer10 + '</answer>';
    xml_data += '</row>';
 
    xml_data += '</head>';
    
    console.log(xml_data);

    // clear model message value for every ajax call provide single accurate message
    $('#success_msg').html('');
    $('#error_msg').html('');

    $.ajax({
        url: "/store_climate_change_questionnaire",
        type: "POST",
        data: { '_token' : token, 'v_master': v_master, 'xml_data' : xml_data },
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
                $('input[type="checkbox"]').prop('checked', false);
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
    appendString += '<select type="text" id="hazard" name="hazard" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected>-- Select --</option>';
    appendString += '<option value="River Flood">River Flood</option>';
    appendString += '<option value="Flash Flood">Flash Flood</option>';
    appendString += '<option value="Drought">Drought</option>';
    appendString += '<option value="Heat wave">Heat wave</option>';
    appendString += '<option value="Cold wave">Cold wave</option>';
    appendString += '<option value="Landslide">Landslide</option>';
    appendString += '<option value="Tornado/Nor wester">Tornado/Nor wester</option>';
    appendString += '<option value="Lightning">Lightning</option>';
    appendString += '<option value="Erratic Rain">Erratic Rain</option>';
    appendString += '<option value="Others_hazard">Others</option>';
    appendString += '</select>';
    // appendString += '<div class="hide" id="div_if_other_hazard">';
    // appendString += '<input type="text" id="other_hazard_name" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="if others">';
    // appendString += '</div>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="ranking" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Ranking">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="trends_frequency" name="trends_frequency" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected>-- Select --</option>';
    appendString += '<option value="Increasing">Increasing (↑)</option>';
    appendString += '<option value="Decreasing">Decreasing (↓)</option>';
    appendString += '<option value="Static">Static (↔)</option>';   
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="intensity" name="intensity" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected>-- Select --</option>';
    appendString += '<option value="High">High (3)</option>';
    appendString += '<option value="Moderate">Moderate (2)</option>';
    appendString += '<option value="Low">Low (1)</option>';   
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="timeline" name="timeline" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected>-- Select --</option>';
    appendString += '<option value="Past">Past</option>';
    appendString += '<option value="Present">Present</option>'; 
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<input type="checkbox" id="Poush" name="Poush" value="Yes"/>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<input type="checkbox" id="Magh" name="Magh" value="Yes"/>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<input type="checkbox" id="Falgun" name="Falgun" value="Yes"/>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<input type="checkbox" id="Chaitra" name="Chaitra" value="Yes"/>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<input type="checkbox" id="Boisakh" name="Boisakh" value="Yes"/>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<input type="checkbox" id="Joishtho" name="Joishtho" value="Yes"/>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<input type="checkbox" id="Ashar" name="Ashar" value="Yes"/>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<input type="checkbox" id="Srabon" name="Srabon" value="Yes"/>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<input type="checkbox" id="Vadro" name="Vadro" value="Yes"/>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<input type="checkbox" id="Ashwin" name="Ashwin" value="Yes"/>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<input type="checkbox" id="Kartik" name="Kartik" value="Yes"/>';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<input type="checkbox" id="Agrahyan" name="Agrahyan" value="Yes"/>';
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
            var hazard = $(this).find('#hazard option:selected').val();

            var ranking = $(this).find('#ranking').val();
            var trends_frequency = $(this).find('#trends_frequency option:selected').val();
            var intensity = $(this).find('#intensity option:selected').val();
            var timeline = $(this).find('#timeline option:selected').val();

            // var Poush = $(this).find('#Poush').val();
            var Poush = $(this).find("input:checkbox[name=Poush]:checked").val();
            var Magh = $(this).find("input:checkbox[name=Magh]:checked").val();
            var Falgun = $(this).find("input:checkbox[name=Falgun]:checked").val();
            var Chaitra = $(this).find("input:checkbox[name=Chaitra]:checked").val();
            var Boisakh = $(this).find("input:checkbox[name=Boisakh]:checked").val();
            var Joishtho = $(this).find("input:checkbox[name=Joishtho]:checked").val();
            var Ashar = $(this).find("input:checkbox[name=Ashar]:checked").val();
            var Srabon = $(this).find("input:checkbox[name=Srabon]:checked").val();
            var Vadro = $(this).find("input:checkbox[name=Vadro]:checked").val();
            var Ashwin = $(this).find("input:checkbox[name=Ashwin]:checked").val();
            var Kartik = $(this).find("input:checkbox[name=Kartik]:checked").val();
            var Agrahyan = $(this).find("input:checkbox[name=Agrahyan]:checked").val();

            if(Poush == undefined || Poush == null) Poush = 'No';
            if(Magh == undefined || Magh == null) Magh = 'No';
            if(Falgun == undefined || Falgun == null) Falgun = 'No';
            if(Chaitra == undefined || Chaitra == null) Chaitra = 'No';
            if(Boisakh == undefined || Boisakh == null) Boisakh = 'No';
            if(Joishtho == undefined || Joishtho == null) Joishtho = 'No';
            if(Ashar == undefined || Ashar == null) Ashar = 'No';
            if(Srabon == undefined || Srabon == null) Srabon = 'No';
            if(Vadro == undefined || Vadro == null) Vadro = 'No';
            if(Ashwin == undefined || Ashwin == null) Ashwin = 'No';
            if(Kartik == undefined || Kartik == null) Kartik = 'No';
            if(Agrahyan == undefined || Agrahyan == null) Agrahyan = 'No';

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<hazard>' + hazard + '</hazard>';
            xml_data += '<ranking>' + ranking + '</ranking>';
            xml_data += '<trends_frequency>' + trends_frequency + '</trends_frequency>';
            xml_data += '<intensity>' + intensity + '</intensity>';
            xml_data += '<timeline>' + timeline + '</timeline>';

            xml_data += '<Poush>' + Poush + '</Poush>';
            xml_data += '<Magh>' + Magh + '</Magh>';
            xml_data += '<Falgun>' + Falgun + '</Falgun>';
            xml_data += '<Chaitra>' + Chaitra + '</Chaitra>';
            xml_data += '<Boisakh>' + Boisakh + '</Boisakh>';
            xml_data += '<Joishtho>' + Joishtho + '</Joishtho>';
            xml_data += '<Ashar>' + Ashar + '</Ashar>';
            xml_data += '<Srabon>' + Srabon + '</Srabon>';
            xml_data += '<Vadro>' + Vadro + '</Vadro>';
            xml_data += '<Ashwin>' + Ashwin + '</Ashwin>';
            xml_data += '<Kartik>' + Kartik + '</Kartik>';
            xml_data += '<Agrahyan>' + Agrahyan + '</Agrahyan>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_hazard_calendar",
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
                    $("#my_table2 td input[type='checkbox']").prop('checked', false);
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

function insertTableRow3a() {

    var appendString = '';
    var rowCount = $('#my_table3a > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="impacts" name="impacts" class="form-control resetSelect" style="width: 500px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select --</option>';   
    appendString += '<option value="0101">Changing crop flowering time</option>';
    appendString += '<option value="0102">Change in crop/livestock/fish/plant diversity and growth</option>';
    appendString += '<option value="0103">Increased pest and diseases</option>';
    appendString += '<option value="0104">Migration or extinction of climate stressed species and biodiversity</option>';
    appendString += '<option value="0105">Reduced water availability</option>';
    appendString += '<option value="0106">Unexpected high water volume</option>';
    appendString += '<option value="0107">Top soil erosion</option>';
    appendString += '<option value="0108">Siltation and soil quality degradation</option>';
    appendString += '<option value="0109">Degraded habitat quality of wildlife and biodiversity</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="river_Flood" name="river_Flood" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="flash_Flood" name="flash_Flood" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="drought" name="drought" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="heat_Wave" name="heat_Wave" class="form-control" value="" style="text-align: left;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="cold_Wave" name="cold_Wave" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="tornado" name="tornado" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="landslides" name="landslides" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="lightning" name="lightning" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="erratic_Rainfall" name="erratic_Rainfall" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="Other" name="Other" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';

    $('#my_table3a > tbody:last-child').append(appendString);
    
    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table3a > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store3a', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var xml_data = '';
    var isValid = '';

    xml_data = '<head>';

    $('#my_table3a > tbody > tr').each(function () {

        // var farm_item_id = $(this).attr('center_id');
        // var livestock = $(this).find('td:eq(1)').text();

        var impacts = $(this).find('#impacts option:selected').val();
        var impacts_name = $(this).find('#impacts option:selected').text();
        var river_Flood = $(this).find('#river_Flood').val();
        var flash_Flood = $(this).find('#flash_Flood').val();
        var drought = $(this).find('#drought').val();
        var heat_Wave = $(this).find('#heat_Wave').val();

        var cold_Wave = $(this).find('#cold_Wave').val();
        var tornado = $(this).find('#tornado').val();
        var landslides = $(this).find('#landslides').val();
        var lightning = $(this).find('#lightning').val();
        var erratic_Rainfall = $(this).find('#erratic_Rainfall').val();
        var Other = $(this).find('#Other').val();

        if(impacts == '' || river_Flood == '') {
            var errorMsg = 'Please enter some value in each visible row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else { 

            isValid = true;
            xml_data += '<row>';
            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<impacts_name>' + impacts_name + '</impacts_name>';
            xml_data += '<river_Flood>' + river_Flood + '</river_Flood>';
            xml_data += '<flash_Flood>' + flash_Flood + '</flash_Flood>';
            xml_data += '<drought>' + drought + '</drought>';
            xml_data += '<heat_Wave>' + heat_Wave + '</heat_Wave>';

            xml_data += '<cold_Wave>' + cold_Wave + '</cold_Wave>';
            xml_data += '<tornado>' + tornado + '</tornado>';
            xml_data += '<landslides>' + landslides + '</landslides>';
            xml_data += '<lightning>' + lightning + '</lightning>';
            xml_data += '<erratic_Rainfall>' + erratic_Rainfall + '</erratic_Rainfall>';
            xml_data += '<Other>' + Other + '</Other>';

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
            url: "/store_agroforestry_impactVulnerabilityMatrix",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table3a td input[type=text]').val('');
                    $('#my_table3a td').find('.resetSelect').prop("selectedIndex", 0);
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

function insertTableRow3b() {

    var appendString = '';
    var rowCount = $('#my_table3b > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="impacts" name="impacts" class="form-control resetSelect" style="width: 500px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select --</option>';   
    appendString += '<option value="0101">Loss of income</option>';
    appendString += '<option value="0102">Increased social conflicts</option>';
    appendString += '<option value="0103">Internal migration</option>';
    appendString += '<option value="0104">Shifting occupation</option>';
    appendString += '<option value="0105">Increased poverty and inequality</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="river_Flood" name="river_Flood" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="flash_Flood" name="flash_Flood" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="drought" name="drought" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="heat_Wave" name="heat_Wave" class="form-control" value="" style="text-align: left;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="cold_Wave" name="cold_Wave" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="tornado" name="tornado" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="landslides" name="landslides" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="lightning" name="lightning" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="erratic_Rainfall" name="erratic_Rainfall" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="Other" name="Other" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';

    $('#my_table3b > tbody:last-child').append(appendString);
    
    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table3b > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store3b', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var xml_data = '';
    var isValid = '';

    xml_data = '<head>';

    $('#my_table3b > tbody > tr').each(function () {

        // var farm_item_id = $(this).attr('center_id');
        // var livestock = $(this).find('td:eq(1)').text();

        var impacts = $(this).find('#impacts option:selected').val();
        var impacts_name = $(this).find('#impacts option:selected').text();
        var river_Flood = $(this).find('#river_Flood').val();
        var flash_Flood = $(this).find('#flash_Flood').val();
        var drought = $(this).find('#drought').val();
        var heat_Wave = $(this).find('#heat_Wave').val();

        var cold_Wave = $(this).find('#cold_Wave').val();
        var tornado = $(this).find('#tornado').val();
        var landslides = $(this).find('#landslides').val();
        var lightning = $(this).find('#lightning').val();
        var erratic_Rainfall = $(this).find('#erratic_Rainfall').val();
        var Other = $(this).find('#Other').val();

        if(impacts == '' || river_Flood == '') {
            var errorMsg = 'Please enter some value in each visible row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else { 

            isValid = true;
            xml_data += '<row>';
            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<impacts_name>' + impacts_name + '</impacts_name>';
            xml_data += '<river_Flood>' + river_Flood + '</river_Flood>';
            xml_data += '<flash_Flood>' + flash_Flood + '</flash_Flood>';
            xml_data += '<drought>' + drought + '</drought>';
            xml_data += '<heat_Wave>' + heat_Wave + '</heat_Wave>';

            xml_data += '<cold_Wave>' + cold_Wave + '</cold_Wave>';
            xml_data += '<tornado>' + tornado + '</tornado>';
            xml_data += '<landslides>' + landslides + '</landslides>';
            xml_data += '<lightning>' + lightning + '</lightning>';
            xml_data += '<erratic_Rainfall>' + erratic_Rainfall + '</erratic_Rainfall>';
            xml_data += '<Other>' + Other + '</Other>';

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
            url: "/store_agroforestry_dependent_livelihoods",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table3b td input[type=text]').val('');
                    $('#my_table3b td').find('.resetSelect').prop("selectedIndex", 0);
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

function insertTableRow3c() {

    var appendString = '';
    var rowCount = $('#my_table3c > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="impacts" name="impacts" class="form-control resetSelect" style="width: 500px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select --</option>';   
    appendString += '<option value="0101">Agro-forestry input scarcity</option>';
    appendString += '<option value="0102">Disruptions in processing, carrying and transportation</option>';
    appendString += '<option value="0103">Disruptions in storage and distribution</option>';
    appendString += '<option value="0104">Investment loss</option>';
    appendString += '<option value="0105">Production loss</option>';
    appendString += '<option value="0106">Labour force scarcity</option>';
    appendString += '<option value="0107">Hampered food and nutrition security</option>';
    appendString += '<option value="0109">Income loss of producers</option>';
    appendString += '<option value="0110">Business opportunity loss</option>';
    appendString += '<option value="0111">Loss of day labor income</option>';
    appendString += '<option value="0112">Employment loss</option>';
    appendString += '<option value="0113">Disruption in product supply and demand</option>';
    appendString += '<option value="0113">Price fluctuation</option>';
    appendString += '<option value="0113">Economic loss or GDP loss of country</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="river_Flood" name="river_Flood" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="flash_Flood" name="flash_Flood" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="drought" name="drought" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="heat_Wave" name="heat_Wave" class="form-control" value="" style="text-align: left;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="cold_Wave" name="cold_Wave" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="tornado" name="tornado" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="landslides" name="landslides" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="lightning" name="lightning" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="erratic_Rainfall" name="erratic_Rainfall" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="Other" name="Other" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';

    $('#my_table3c > tbody:last-child').append(appendString);
    
    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table3c > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store3c', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var xml_data = '';
    var isValid = '';

    xml_data = '<head>';

    $('#my_table3c > tbody > tr').each(function () {

        // var farm_item_id = $(this).attr('center_id');
        // var livestock = $(this).find('td:eq(1)').text();

        var impacts = $(this).find('#impacts option:selected').val();
        var impacts_name = $(this).find('#impacts option:selected').text();
        var river_Flood = $(this).find('#river_Flood').val();
        var flash_Flood = $(this).find('#flash_Flood').val();
        var drought = $(this).find('#drought').val();
        var heat_Wave = $(this).find('#heat_Wave').val();

        var cold_Wave = $(this).find('#cold_Wave').val();
        var tornado = $(this).find('#tornado').val();
        var landslides = $(this).find('#landslides').val();
        var lightning = $(this).find('#lightning').val();
        var erratic_Rainfall = $(this).find('#erratic_Rainfall').val();
        var Other = $(this).find('#Other').val();

        if(impacts == '' || river_Flood == '') {
            var errorMsg = 'Please enter some value in each visible row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else { 

            isValid = true;
            xml_data += '<row>';
            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<impacts_name>' + impacts_name + '</impacts_name>';
            xml_data += '<river_Flood>' + river_Flood + '</river_Flood>';
            xml_data += '<flash_Flood>' + flash_Flood + '</flash_Flood>';
            xml_data += '<drought>' + drought + '</drought>';
            xml_data += '<heat_Wave>' + heat_Wave + '</heat_Wave>';

            xml_data += '<cold_Wave>' + cold_Wave + '</cold_Wave>';
            xml_data += '<tornado>' + tornado + '</tornado>';
            xml_data += '<landslides>' + landslides + '</landslides>';
            xml_data += '<lightning>' + lightning + '</lightning>';
            xml_data += '<erratic_Rainfall>' + erratic_Rainfall + '</erratic_Rainfall>';
            xml_data += '<Other>' + Other + '</Other>';

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
            url: "/store_market_and_business",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table3c td input[type=text]').val('');
                    $('#my_table3c td').find('.resetSelect').prop("selectedIndex", 0);
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

function insertTableRow3d() {

    var appendString = '';
    var rowCount = $('#my_table3d > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="impacts" name="impacts" class="form-control resetSelect" style="width: 500px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected>-- Select --</option>';   
    appendString += '<option value="0101">Changing crop flowering time</option>';
    appendString += '<option value="0102">Change in crop/livestock/fish/plant diversity and growth</option>';
    appendString += '<option value="0103">Increased pest and diseases</option>';
    appendString += '<option value="0104">Migration or extinction of climate stressed species and biodiversity</option>';
    appendString += '<option value="0105">Reduced water availability</option>';
    appendString += '<option value="0106">Unexpected high water volume</option>';
    appendString += '<option value="0107">Top soil erosion</option>';
    appendString += '<option value="0108">Siltation and soil quality degradation</option>';
    appendString += '<option value="0109">Degraded habitat quality of wildlife & biodiversity</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="river_Flood" name="river_Flood" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="flash_Flood" name="flash_Flood" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="drought" name="drought" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="heat_Wave" name="heat_Wave" class="form-control" value="" style="text-align: left;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="cold_Wave" name="cold_Wave" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="tornado" name="tornado" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="landslides" name="landslides" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="lightning" name="lightning" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="erratic_Rainfall" name="erratic_Rainfall" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="Other" name="Other" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';

    $('#my_table3d > tbody:last-child').append(appendString);
    
    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();

        var sl = 1;
        $('#my_table3d > tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$(document).on('click', '#btn_store3d', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();

    var xml_data = '';
    var isValid = '';

    xml_data = '<head>';

    $('#my_table3d > tbody > tr').each(function () {

        // var farm_item_id = $(this).attr('center_id');
        // var livestock = $(this).find('td:eq(1)').text();

        var impacts = $(this).find('#impacts option:selected').val();
        var impacts_name = $(this).find('#impacts option:selected').text();
        var river_Flood = $(this).find('#river_Flood').val();
        var flash_Flood = $(this).find('#flash_Flood').val();
        var drought = $(this).find('#drought').val();
        var heat_Wave = $(this).find('#heat_Wave').val();

        var cold_Wave = $(this).find('#cold_Wave').val();
        var tornado = $(this).find('#tornado').val();
        var landslides = $(this).find('#landslides').val();
        var lightning = $(this).find('#lightning').val();
        var erratic_Rainfall = $(this).find('#erratic_Rainfall').val();
        var Other = $(this).find('#Other').val();

        if(impacts == '' || river_Flood == '') {
            var errorMsg = 'Please enter some value in each visible row.';
            var errorMsg2 = 'Full empty row can not allow to store..';
            $('#myModal').modal({backdrop : 'static', keyboard : false});
            $('#error_msg').html('<span style="color: red"><p>ERROR!! </p> <p>'+ errorMsg +'</p> <p>'+ errorMsg2 +'</p> </span>');
            isValid = false;
        }
        else { 

            isValid = true;
            xml_data += '<row>';
            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<impacts_name>' + impacts_name + '</impacts_name>';
            xml_data += '<river_Flood>' + river_Flood + '</river_Flood>';
            xml_data += '<flash_Flood>' + flash_Flood + '</flash_Flood>';
            xml_data += '<drought>' + drought + '</drought>';
            xml_data += '<heat_Wave>' + heat_Wave + '</heat_Wave>';

            xml_data += '<cold_Wave>' + cold_Wave + '</cold_Wave>';
            xml_data += '<tornado>' + tornado + '</tornado>';
            xml_data += '<landslides>' + landslides + '</landslides>';
            xml_data += '<lightning>' + lightning + '</lightning>';
            xml_data += '<erratic_Rainfall>' + erratic_Rainfall + '</erratic_Rainfall>';
            xml_data += '<Other>' + Other + '</Other>';

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
            url: "/store_women_impactVulnerabilityMatrix",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS') {
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table3d td input[type=text]').val('');
                    $('#my_table3d td').find('.resetSelect').prop("selectedIndex", 0);
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
    appendString += '<select type="text" id="climateHazard" name="climateHazard" class="form-control resetSelect" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected>-- Select --</option>';   
    appendString += '<option value="River Flood">River Flood</option>';
    appendString += '<option value="Flash Flood">Flash Flood</option>';
    appendString += '<option value="Drought">Drought</option>';
    appendString += '<option value="Heat wave">Heat wave</option>';
    appendString += '<option value="Cold wave">Cold wave</option>';
    appendString += '<option value="Landslide">Landslide</option>';
    appendString += '<option value="Tornado/Nor wester">Tornado/Nor wester</option>';
    appendString += '<option value="Lightning">Lightning</option>';
    appendString += '<option value="Erratic Rain">Erratic Rain</option>';
    appendString += '<option value="Others_hazard">Others</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="occurrenceOnceInYears" name="occurrenceOnceInYears" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="tenYearsAgo" name="tenYearsAgo" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="present" name="present" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="yearOfLastExtremeEvent" name="yearOfLastExtremeEvent" class="form-control" value="" style="text-align: left;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="damagesOfCropLandArea" name="damagesOfCropLandArea" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="no_Of_InfrastructuresDamage" name="no_Of_InfrastructuresDamage" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="no_Of_LivestockPoultryDead" name="no_Of_LivestockPoultryDead" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="fisheriesProductionLoss" name="fisheriesProductionLoss" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="timberProductionLoss" name="timberProductionLoss" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="fruitsBusinessLoss" name="fruitsBusinessLoss" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="totalIncomeLoss" name="totalIncomeLoss" class="form-control" value="" style="text-align: center;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="otherLosses" name="otherLosses" class="form-control" value="" style="text-align: center;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="anyOtherRemarks" name="anyOtherRemarks" class="form-control" value="" style="text-align: center;" placeholder="Please fill up...">';
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
            
            var climateHazard = $(this).find('#climateHazard option:selected').val();
            var occurrenceOnceInYears = $(this).find('#occurrenceOnceInYears').val();
            var tenYearsAgo = $(this).find('#tenYearsAgo').val();
            var present = $(this).find('#present').val();
            var yearOfLastExtremeEvent = $(this).find('#yearOfLastExtremeEvent').val();
            var damagesOfCropLandArea = $(this).find('#damagesOfCropLandArea').val();
            var no_Of_InfrastructuresDamage = $(this).find('#no_Of_InfrastructuresDamage').val();
            var no_Of_LivestockPoultryDead = $(this).find('#no_Of_LivestockPoultryDead').val();

            var fisheriesProductionLoss = $(this).find('#fisheriesProductionLoss').val();
            var timberProductionLoss = $(this).find('#timberProductionLoss').val();
            var fruitsBusinessLoss = $(this).find('#fruitsBusinessLoss').val();
            var totalIncomeLoss = $(this).find('#totalIncomeLoss').val();
            var otherLosses = $(this).find('#otherLosses').val();

            var anyOtherRemarks = $(this).find('#anyOtherRemarks').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<climateHazard>' + climateHazard + '</climateHazard>';
            xml_data += '<occurrenceOnceInYears>' + occurrenceOnceInYears + '</occurrenceOnceInYears>';
            xml_data += '<tenYearsAgo>' + tenYearsAgo + '</tenYearsAgo>';
            xml_data += '<present>' + present + '</present>';
            xml_data += '<yearOfLastExtremeEvent>' + yearOfLastExtremeEvent + '</yearOfLastExtremeEvent>';
            xml_data += '<damagesOfCropLandArea>' + damagesOfCropLandArea + '</damagesOfCropLandArea>';
            xml_data += '<no_Of_InfrastructuresDamage>' + no_Of_InfrastructuresDamage + '</no_Of_InfrastructuresDamage>';
            xml_data += '<no_Of_LivestockPoultryDead>' + no_Of_LivestockPoultryDead + '</no_Of_LivestockPoultryDead>';

            xml_data += '<fisheriesProductionLoss>' + fisheriesProductionLoss + '</fisheriesProductionLoss>';
            xml_data += '<timberProductionLoss>' + timberProductionLoss + '</timberProductionLoss>';
            xml_data += '<fruitsBusinessLoss>' + fruitsBusinessLoss + '</fruitsBusinessLoss>';
            xml_data += '<totalIncomeLoss>' + totalIncomeLoss + '</totalIncomeLoss>';
            xml_data += '<otherLosses>' + otherLosses + '</otherLosses>';

            xml_data += '<anyOtherRemarks>' + anyOtherRemarks + '</anyOtherRemarks>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_lossesAndDamagesDueToDifferentHazards",
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
    appendString += '<select type="text" id="climateChangeRisksSector" name="climateChangeRisksSector" class="form-control resetSelect" style="width: 700px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected>-- Select --</option>';   
    appendString += '<option value="Agriculture (Crop Land, Orchard, Shifting Cultivation)">Agriculture (Crop Land, Orchard, Shifting Cultivation)</option>';
    appendString += '<option value="Livestock & Poultry">Livestock & Poultry</option>';
    appendString += '<option value="Fisheries & Aquaculture">Fisheries & Aquaculture</option>';
    appendString += '<option value="Forestry, Ecosystem and biodiversity">Forestry, Ecosystem and biodiversity</option>';
    appendString += '<option value="Value Chain/Business">Value Chain/Business</option>';
    appendString += '<option value="Women">Women</option>';
    appendString += '<option value="Livelihood’s improvement, climate resilience increases and disaster risk reduction">Livelihood’s improvement, climate resilience increases and disaster risk reduction</option>';    
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<textarea id="adaptationOptions" name="adaptationOptions" class="form-control resetVal" rows="2" style="width: 500px;text-align: center;"></textarea>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="ifYesHowToIncreaseEngagement" name="ifYesHowToIncreaseEngagement" class="form-control" value="" style="width: 400px;text-align: center;" placeholder="Please fill up...">';
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

            // var livestock_type = $(this).find('td:eq(1)').text(); 
            
            var climateChangeRisksSector = $(this).find('#climateChangeRisksSector option:selected').val();
            var adaptationOptions = $(this).find('#adaptationOptions').val();
            var ifYesHowToIncreaseEngagement = $(this).find('#ifYesHowToIncreaseEngagement').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<climateChangeRisksSector>' + climateChangeRisksSector + '</climateChangeRisksSector>';
            xml_data += '<adaptationOptions>' + adaptationOptions + '</adaptationOptions>';
            xml_data += '<ifYesHowToIncreaseEngagement>' + ifYesHowToIncreaseEngagement + '</ifYesHowToIncreaseEngagement>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_ClimateChangeAdaptationforReducingClimateChangeRisks",
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
                    $('.resetVal').val('');
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
    appendString += '<select type="text" id="adaptationCategories" name="adaptationCategories" class="form-control resetSelect" value="" style="width: 400px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Adaptation for Agro- forestry resources Management">Adaptation for Agro- forestry resources Management</option>';
    appendString += '<option value="Adaptation for Agro- forestry based Livelihoods Improvement">Adaptation for Agro- forestry based Livelihoods Improvement</option>';
    appendString += '<option value="Adaptation for Sustainable Value Chain Development">Adaptation for Sustainable Value Chain Development</option>';
    appendString += '<option value="Adaptation for Women">Adaptation for Women</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lessInvestmentCapital" name="lessInvestmentCapital" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> -- Select --</option>';
    appendString += '<option value="Low">Low (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="High">High (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lessInstitutionalCapacity" name="lessInstitutionalCapacity" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Low">Low (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="High">High (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lessAwarenessCapacityofCommunity" name="lessAwarenessCapacityofCommunity" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Low">Low (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="High">High (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lessIncentivesorSubsidiesMechanism" name="lessIncentivesorSubsidiesMechanism" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Low">Low (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="High">High (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="insufficientInfrastructures" name="insufficientInfrastructures" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Low">Low (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="High">High (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lessEducation" name="lessEducation" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Low">Low (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="High">High (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="lessDemandAgroforestryProduct" name="lessDemandAgroforestryProduct" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Low">Low (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="High">High (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="highPoverty" name="highPoverty" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select</option>';
    appendString += '<option value="Low">Low (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="High">High (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="properTrainingAndKnowledge" name="properTrainingAndKnowledge" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Low">Low (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="High">High (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="actionsToOverComebarrier" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Please fill up..">';
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

            // var livestock_type = $(this).find('td:eq(1)').text(); 
            
            var adaptationCategories = $(this).find('#adaptationCategories option:selected').val();
            var lessInvestmentCapital = $(this).find('#lessInvestmentCapital option:selected').val();
            var lessInstitutionalCapacity = $(this).find('#lessInstitutionalCapacity option:selected').val();
            var lessAwarenessCapacityofCommunity = $(this).find('#lessAwarenessCapacityofCommunity option:selected').val();
            var lessIncentivesorSubsidiesMechanism = $(this).find('#lessIncentivesorSubsidiesMechanism option:selected').val();
            var insufficientInfrastructures = $(this).find('#insufficientInfrastructures option:selected').val();
            var lessEducation = $(this).find('#lessEducation option:selected').val();
            var lessDemandAgroforestryProduct = $(this).find('#lessDemandAgroforestryProduct option:selected').val();
            var highPoverty = $(this).find('#highPoverty option:selected').val();
            var properTrainingAndKnowledge = $(this).find('#properTrainingAndKnowledge option:selected').val();
            var actionsToOverComebarrier = $(this).find('#actionsToOverComebarrier').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<adaptationCategories>' + adaptationCategories + '</adaptationCategories>';
            xml_data += '<lessInvestmentCapital>' + lessInvestmentCapital + '</lessInvestmentCapital>';
            xml_data += '<lessInstitutionalCapacity>' + lessInstitutionalCapacity + '</lessInstitutionalCapacity>';
            xml_data += '<lessAwarenessCapacityofCommunity>' + lessAwarenessCapacityofCommunity + '</lessAwarenessCapacityofCommunity>';
            xml_data += '<lessIncentivesorSubsidiesMechanism>' + lessIncentivesorSubsidiesMechanism + '</lessIncentivesorSubsidiesMechanism>';
            xml_data += '<insufficientInfrastructures>' + insufficientInfrastructures + '</insufficientInfrastructures>';
            xml_data += '<lessEducation>' + lessEducation + '</lessEducation>';
            xml_data += '<lessDemandAgroforestryProduct>' + lessDemandAgroforestryProduct + '</lessDemandAgroforestryProduct>';
            xml_data += '<highPoverty>' + highPoverty + '</highPoverty>';
            xml_data += '<properTrainingAndKnowledge>' + properTrainingAndKnowledge + '</properTrainingAndKnowledge>';
            xml_data += '<actionsToOverComebarrier>' + actionsToOverComebarrier + '</actionsToOverComebarrier>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_implementationChallengesofClimateChangeAdaptation",
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
    appendString += '<select type="text" id="adaptationInterventions" name="adaptationInterventions" class="form-control resetSelect" value="" style="width: 400px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Climate smart Agriculture and livestock (Crop Land, Orchard, Shifting Cultivation)">Climate smart Agriculture and livestock (Crop Land, Orchard, Shifting Cultivation)</option>';
    appendString += '<option value="Climate resilient Fisheries and Aquaculture">Climate resilient Fisheries and Aquaculture</option>';
    appendString += '<option value="Forestry, Ecosystem and biodiversity Conservation">Forestry, Ecosystem and biodiversity Conservation</option>';
    appendString += '<option value="Value Chain Improvement">Value Chain Improvement</option>';
    appendString += '<option value="Resilience Increase of Women">Resilience Increase of Women</option>';
    appendString += '<option value="Livelihoods improvement, climate resilience increase and disaster risk reduction">Livelihoods improvement, climate resilience increase and disaster risk reduction</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="leadStakeholderforImplementing" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="levelofStake" name="levelofStake" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Low">Low (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="High">High (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="motivationOfStakeholders" name="motivationOfStakeholders" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Low">Low (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="High">High (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="abilityOfStakeholders" name="abilityOfStakeholders" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select </option>';
    appendString += '<option value="Low">Low (1)</option>';
    appendString += '<option value="Medium">Medium (2)</option>';
    appendString += '<option value="High">High (3)</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="anyActionNeedToBoostMOTA" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="coleadStakeholders" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="privateSectorEngagement" name="privateSectorEngagement" class="form-control resetSelect" value="" style="width: 80px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No">No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="potentialFinanceSource" class="form-control" value="" style="width: 100px;text-align: left;" placeholder="Please fill up..">';
    appendString += '</td>';

    appendString += '<td style="text-align: center;">';
    appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    appendString += '</td>';

    appendString += '</tr>';


    $('#my_table7 > tbody:last-child').append(appendString);
    
    // 
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

            // var livestock_type = $(this).find('td:eq(1)').text(); 
            
            var adaptationInterventions = $(this).find('#adaptationInterventions option:selected').val();
            var leadStakeholderforImplementing = $(this).find('#leadStakeholderforImplementing').val();
            var levelofStake = $(this).find('#levelofStake option:selected').val();
            var motivationOfStakeholders = $(this).find('#motivationOfStakeholders option:selected').val();
            var abilityOfStakeholders = $(this).find('#abilityOfStakeholders option:selected').val();
            var anyActionNeedToBoostMOTA = $(this).find('#anyActionNeedToBoostMOTA').val();
            var coleadStakeholders = $(this).find('#coleadStakeholders').val();
            var privateSectorEngagement = $(this).find('#privateSectorEngagement option:selected').val();
            var potentialFinanceSource = $(this).find('#potentialFinanceSource').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<adaptationInterventions>' + adaptationInterventions + '</adaptationInterventions>';
            xml_data += '<leadStakeholderforImplementing>' + leadStakeholderforImplementing + '</leadStakeholderforImplementing>';
            xml_data += '<levelofStake>' + levelofStake + '</levelofStake>';
            xml_data += '<motivationOfStakeholders>' + motivationOfStakeholders + '</motivationOfStakeholders>';
            xml_data += '<abilityOfStakeholders>' + abilityOfStakeholders + '</abilityOfStakeholders>';
            xml_data += '<anyActionNeedToBoostMOTA>' + anyActionNeedToBoostMOTA + '</anyActionNeedToBoostMOTA>';
            xml_data += '<coleadStakeholders>' + coleadStakeholders + '</coleadStakeholders>';
            xml_data += '<privateSectorEngagement>' + privateSectorEngagement + '</privateSectorEngagement>';
            xml_data += '<potentialFinanceSource>' + potentialFinanceSource + '</potentialFinanceSource>';

            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_stakeholderEngagementForAdaptationOptions",
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

// kept as example::
$(document).on('click', '#btn_store8', function (event) {

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
