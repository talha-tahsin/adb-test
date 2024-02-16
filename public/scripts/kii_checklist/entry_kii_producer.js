


// document.title = 'Livestock Entry';

$(document).ready(function () {

    console.log("hello talha..");
    // $('#watershedId').select2();
    // $('.select2').css({'border': '2px solid #898AEE', 'border-radius': '5px'});
    // $('#para_list').prop('disabled', true);
    
    // $(document).on('change', '#watershedId', function(){
    //     $("#watershedId").siblings().children().children().css('background-color', 'transparent');
    // });

    $(document).on('keypress', '#answer1', function(){
        $("#answer1").css('background-color', 'transparent');
    });

    $(document).on('keypress', '#answer2', function(){
        $("#answer2").css('background-color', 'transparent');
    });

    $.ajax({
        url: "/get_all_para_name",
        type: "GET",
        data: { 'userNm' : 'get_data' },
        dataType: "html",
        cache: false,
        success: function (data) {
            // console.log(data);
            $('#para_name').html(data);

            // var option = '<option value="" selected disabled> Select Option</option>';
            // $.each(data.message, function(key, val) {
            //     option += '<option value="'+val.para_id+'">'+val.para_name+'</option>';
            //  });
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });

    var userNm = $('#userName').val();

    $.ajax({
        url: "/get_active_watershed",
        type: "GET",
        data: { 'userNm' : userNm },
        dataType: "json",
        cache: false,
        success: function (data) {
            // console.log(data);
            $.each(data.message, function (i, v) {
                $('#watershed_id').val(v.watershed_id);
                var waterShed_id = v.watershed_id;
                // console.log(waterShed_id);

                $.ajax({
                    url: "/get_active_kii_producer",
                    type: "GET",
                    data: { 'watershed_id' : waterShed_id },
                    dataType: "json",
                    cache: false,
                    success: function (data) {
                        // console.log(data);
                        $.each(data.message, function (i, v) {
                            $('#producer_id').val(v.producer_id);
                            $('#producer_name').val(v.producer_name);
                            $('#para_id').val(v.para_id);
                            $('#para_name').val(v.para_name);
                            $('#product_id').val(v.product_id);
                            $('#product_name').val(v.product_name);
                            // console.log(waterShed_id);
                        });
                    },
                    error: function(xhr, ajaxOptions, thrownError) {
                        console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
                    }
                });
            });
            
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });

    // insertTableRow1();
    insertTableRow2();

    insertTableRow4();
    insertTableRow5();

    // insertTableRow10();

    myTable1 = {
        '001' : 'Production activity calendar',
        '002' : 'Participation of women in this stage',
        '003' : 'Water demand',
        '004' : 'Manpower/labor (Nos.) necessity per acre at different stages',
        '005' : 'Hazard/Disaster Occurrence',
        '006' : 'Impact of Hazard',
        '007' : 'Average damage of production in percentage (%)',
        '008' : 'Harvest amount (kg) of product per acre (Fill at only in the harvest time)',
        '009' : 'Spoilage and waste (kg) amount in per unit production',
    };

    $.each(myTable1, function(key, value) {
        insertTableRow1(value);
    });

    myTable3 = {
        '001' : 'Packaging cost for per unit product in BDT',
        '002' : 'Transportation cost (farm gate to bazar or selling point) for per unit product in BDT',
        '003' : 'How many points of extortion in the way (number)',
        '004' : 'Approximate amount of extortion (BDT)',
        '005' : 'How many points of taxes are in the way (number of points)',
        '006' : 'Total tax and other fees (BDT)',
        '007' : 'Total production cost per acre (BDT)',
        '008' : 'Total farm gate price for per unit product (production cost, transportation cost and profit) in BDT',
        '009' : 'Percentage farm gate price change to the cost of production (%)',
    };

    $.each(myTable3, function(key, value) {
        insertTableRow3(value);
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


function insertTableRow1(name) {

    var appendString = '';
    var rowCount = $('#my_table1 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td style="width: 400px;text-align: left;">' + name + '</td>';
   
    appendString += '<td>';
    appendString += '<input "text" id="Poush" name="Poush" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input "text" id="Magh" name="Magh" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Falgun" name="Falgun" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Chaitra" name="Chaitra" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Boisakh" name="Boisakh" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Joishtho" name="Joishtho" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Ashar" name="Ashar" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Srabon" name="Srabon" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Vadro" name="Vadro" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Ashwin" name="Ashwin" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Kartik" name="Kartik" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="Agrahyan" name="Agrahyan" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up">';
    appendString += '</td>';


    // appendString += '<td style="text-align: center;">';
    // appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    // appendString += '</td>';

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

    var producer_id = $('#producer_id').val();
    var producer_name = $('#producer_name').val();
    var product_name = $('#product_name').val();

    var question1 = $('#label11').text().trim();
    var question2 = $('#label12').text().trim();

    var answer1 = $('#answer11').val();
    var answer2 = $('#answer12').val();

    if(answer1 == '' || answer1 == null || answer1 == undefined){
        alert("Please fill up marked input text....");
        $("#answer1").css('background-color', '#FFCECE');
    }
    else if(answer2 == '' || answer2 == null || answer2 == undefined){
        alert("Please fill up marked input text....");
        $("#answer2").css('background-color', '#FFCECE');
    }
    else
    {

        xml_data = '<head>';

        $('#my_table1 > tbody > tr').each(function () {

            var indicators = $(this).find('td:eq(1)').text(); 
            
            // var Poush = $(this).find("input:checkbox[name=Poush]:checked").val();
            var Poush = $(this).find("#Poush").val();
            var Magh = $(this).find("#Magh").val();
            var Falgun = $(this).find("#Falgun").val();
            var Chaitra = $(this).find("#Chaitra").val();
            var Boisakh = $(this).find("#Boisakh").val();
            var Joishtho = $(this).find("#Joishtho").val();
            var Ashar = $(this).find("#Ashar").val();
            var Srabon = $(this).find("#Srabon").val();
            var Vadro = $(this).find("#Vadro").val();
            var Ashwin = $(this).find("#Ashwin").val();
            var Kartik = $(this).find("#Kartik").val();
            var Agrahyan = $(this).find("#Agrahyan").val();

            if(Poush === undefined || Poush === null) Poush = '';
            if(Magh === undefined || Magh === null) Magh = '';
            if(Falgun === undefined || Falgun === null) Falgun = '';
            if(Chaitra === undefined || Chaitra === null) Chaitra = '';
            if(Boisakh === undefined || Boisakh === null) Boisakh = '';
            if(Joishtho === undefined || Joishtho === null) Joishtho = '';
            if(Ashar === undefined || Ashar === null) Ashar = '';
            if(Srabon === undefined || Srabon === null) Srabon = '';
            if(Vadro === undefined || Vadro === null) Vadro = '';
            if(Ashwin === undefined || Ashwin === null) Ashwin = '';
            if(Kartik === undefined || Kartik === null) Kartik = '';
            if(Agrahyan === undefined || Agrahyan === null) Agrahyan = '';

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<producer_id>' + producer_id + '</producer_id>';
            xml_data += '<producer_name>' + producer_name + '</producer_name>';
            xml_data += '<product_name>' + product_name + '</product_name>';

            xml_data += '<indicators>' + indicators + '</indicators>';
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

        xml2 = '<row>';
            xml2 += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml2 += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml2 += '<para_id>' + para_id + '</para_id>';
            xml2 += '<para_name>' + para_name + '</para_name>';

            xml2 += '<producer_id>' + producer_id + '</producer_id>';
            xml2 += '<producer_name>' + producer_name + '</producer_name>';
            xml2 += '<product_name>' + product_name + '</product_name>';

            xml2 += '<question1>' + question1 + '</question1>';
            xml2 += '<answer1>' + answer1 + '</answer1>';
            xml2 += '<question2>' + question2 + '</question2>';
            xml2 += '<answer2>' + answer2 + '</answer2>';
        xml2 += '</row>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_production_and_impact_of_hazards",
            type: "POST",
            data: { '_token' : token, 'xml_data' : xml_data, 'xml2': xml2 },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == 'SUCCESS'){
                    $('#myModal').modal({backdrop : 'static', keyboard : false});
                    $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                    $('#my_table1 td input[type=text]').val('');
                    $("#my_table1 td input[type='checkbox']").prop('checked', false);
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

function insertTableRow2() {

    var appendString = '';
    var rowCount = $('#my_table2 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="input_names" class="form-control resetSelect" value="" style="width: 280px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Labor">Labor</option>';
    appendString += '<option value="Seeds">Seeds</option>';
    appendString += '<option value="Fertilizer and pesticides/insecticides">Fertilizer and pesticides/insecticides</option>';
    appendString += '<option value="Medicine">Medicine</option>';
    appendString += '<option value="Supplements">Supplements</option>';
    appendString += '<option value="Fish/Livestock/Poultry Feeds">Fish/Livestock/Poultry Feeds</option>';
    appendString += '<option value="Water">Water</option>';
    appendString += '<option value="Others">Others</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="where_input_received" class="form-control resetSelect" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Local Market/City Center">Local Market/City Center</option>';
    appendString += '<option value="Government">Government</option>';
    appendString += '<option value="Community/Personal">Community/Personal</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="time_needed_received" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Always Available">Always Available</option>';
    appendString += '<option value="Often">Often</option>';
    appendString += '<option value="Rare">Rare</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="impediment" class="form-control resetSelect" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="Policy">Policy</option>';
    appendString += '<option value="Hazard">Hazard</option>';
    appendString += '<option value="Political">Political</option>';
    appendString += '<option value="Tips/ Bribes/stocking of products">Tips/ Bribes/stocking of products</option>';
    appendString += '<option value="others">others</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="na" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="others_name" class="form-control" value="" style="width: 180px;text-align: left;" placeholder="Please fill up...">';
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
            
            var input_names = $(this).find('#input_names option:selected').val();
            var where_input_received = $(this).find('#where_input_received option:selected').val();
            var time_needed_received = $(this).find('#time_needed_received option:selected').val();
            var impediment = $(this).find('#impediment option:selected').val();
            var na = $(this).find('#na').val();
            var others_name = $(this).find('#others_name').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<input_names>' + input_names + '</input_names>';
            xml_data += '<where_input_received>' + where_input_received + '</where_input_received>';
            xml_data += '<time_needed_received>' + time_needed_received + '</time_needed_received>';
            xml_data += '<impediment>' + impediment + '</impediment>';
            xml_data += '<na>' + na + '</na>';
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
            url: "/store_input_sources_of_production",
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

function insertTableRow3(name) {

    var appendString = '';
    var rowCount = $('#my_table3 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td style="width: 700px;text-align: left;">' + name + '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="input" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    // appendString += '<td style="text-align: center;">';
    // appendString += '<button type="button" class="btn btn-xs btn-danger btn-info removeHead"><i class="fa fa-remove"></i>Remove</button>';
    // appendString += '</td>';

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
            
            var items_name = $(this).find('td:eq(1)').text(); 
            var input = $(this).find('#input').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<items_name>' + items_name + '</items_name>';
            xml_data += '<input>' + input + '</input>';
            
            xml_data += '<created_by>' + created_by + '</created_by>';

            xml_data += '</row>';
            
        });

        xml_data += '</head>';
        
        console.log(xml_data);

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_economies_of_production",
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
    appendString += '<select type="text" id="training_topic" class="form-control resetSelect" value="" style="width: 500px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select Option --</option>';
    appendString += '<option value="The production process of HYV and Hybrid varieties/climate stress tolerant varieties">The production process of HYV and Hybrid varieties/climate stress tolerant varieties</option>';
    appendString += '<option value="Modern Technology">Modern Technology</option>';
    appendString += '<option value="Fertilizer & Pesticide management">Fertilizer & Pesticide management</option>';
    appendString += '<option value="Marketing and Sales">Marketing and Sales</option>';
    appendString += '<option value="Organic farming">Organic farming</option>';
    appendString += '<option value="Packaging and Grading">Packaging and Grading</option>';
    appendString += '<option value="Seed certification">Seed certification</option>';
    appendString += '<option value="Quality control">Quality control</option>';
    appendString += '<option value="Traceability">Traceability</option>';
    appendString += '<option value="E-commerce">E-commerce</option>';
    appendString += '<option value="Agriculture mechanization">Agriculture mechanization</option>';
    appendString += '<option value="Regenerative native tree plantation">Regenerative native tree plantation</option>';
    appendString += '<option value="Others">Others</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="training_received" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" disabled>-- Select --</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="where_received_training" class="form-control resetSelect" value="" style="width: 200px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select --</option>';
    appendString += '<option value="Agriculture/forestry office">Agriculture/forestry office</option>';
    appendString += '<option value="NGO">NGO</option>';
    appendString += '<option value="TV and Internet">TV and Internet</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="satisfaction_level" class="form-control resetSelect" value="" style="width: 150px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled>-- Select --</option>';
    appendString += '<option value="Low">Low</option>';
    appendString += '<option value="Medium" >Medium</option>';
    appendString += '<option value="High" >High</option>';
    appendString += '</select>';
    appendString += '</td>';
  
    appendString += '<td>';
    appendString += '<input type="text" id="receive_assistance" class="form-control" value="" style="width: 200px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';
    
    appendString += '<td>';
    appendString += '<input type="text" id="training_needed" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="others_name" class="form-control" value="" style="width: 150px;text-align: left;" placeholder="Please fill up...">';
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
            
            var training_topic = $(this).find('#training_topic option:selected').val();
            var training_received = $(this).find('#training_received option:selected').val();
            var where_received_training = $(this).find('#where_received_training option:selected').val();
            var satisfaction_level = $(this).find('#satisfaction_level option:selected').val();
            var receive_assistance = $(this).find('#receive_assistance').val();
            var training_needed = $(this).find('#training_needed').val();
            var others_name = $(this).find('#others_name').val();

            // first binding data as xml string
            xml_data += '<row>';

            xml_data += '<watershed_id>' + watershed_id + '</watershed_id>';
            xml_data += '<watershed_name>' + watershed_name + '</watershed_name>';
            xml_data += '<para_id>' + para_id + '</para_id>';
            xml_data += '<para_name>' + para_name + '</para_name>';

            xml_data += '<training_topic>' + training_topic + '</training_topic>';
            xml_data += '<training_received>' + training_received + '</training_received>';
            xml_data += '<where_received_training>' + where_received_training + '</where_received_training>';
            xml_data += '<satisfaction_level>' + satisfaction_level + '</satisfaction_level>';
            xml_data += '<receive_assistance>' + receive_assistance + '</receive_assistance>';
            xml_data += '<training_needed>' + training_needed + '</training_needed>';
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
            url: "/store_training_and_capacity_building",
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
    appendString += '<select type="text" id="sensitivity_factor" class="form-control resetSelect" value="" style="width: 600px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
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

    appendString += '<td>';
    appendString += '<select type="text" id="do_you_have" class="form-control resetSelect" value="" style="width: 100px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
    appendString += '<option value="Yes">Yes</option>';
    appendString += '<option value="No" selected>No</option>';
    appendString += '</select>';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<select type="text" id="items" class="form-control resetSelect" value="" style="width: 600px;text-align: center;border-radius: 5px;">';
    appendString += '<option value="" selected disabled> Select Option</option>';
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
    appendString += '<input type="text" id="quantity_or_number" class="form-control" value="" style="width: 280px;text-align: left;" placeholder="Please fill up..">';
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
        $('#my_table65> tbody > tr').each(function () {
            $(this).find('.sl').html(sl);
            sl++;
        });
        counter = sl - 1;

    });
}

$('#selectOption2i').on('change', function(){

    var selectOption2i = $('#selectOption2i option:selected').val();

    if(selectOption2i == 'Yes'){
        $('#input2i').removeClass('hide');
    }
    else{
        $('#input2i').addClass('hide');
    }

});

$('#selectOption').on('change', function(){

    var selectOption1 = $('#selectOption option:selected').val();

    if(selectOption1 == 'No'){
        $('#input1').removeClass('hide');
    }
    else{
        $('#input1').addClass('hide');
    }

});

$('#selectOption2').on('change', function(){

    var selectOption2 = $('#selectOption2 option:selected').val();

    if(selectOption2 == 'Yes'){
        $('#input2').removeClass('hide');
    }
    else{
        $('#input2').addClass('hide');
    }

});

$('#selectOption3').on('change', function(){

    var selectOption3 = $('#selectOption3 option:selected').val();

    if(selectOption3 == 'Yes'){
        $('#input3').removeClass('hide');
    }
    else{
        $('#input3').addClass('hide');
    }

});

$(document).on('click', '#btn_store5', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_id').val();
    var para_name = $('#para_name').val();
    var product_name = $('#product_name').val();

    v_master = '';

    v_master = '<row>';
        v_master += '<watershed_id>' + watershed_id + '</watershed_id>';
        v_master += '<watershed_name>' + watershed_name + '</watershed_name>';
        v_master += '<para_id>' + para_id + '</para_id>';
        v_master += '<para_name>' + para_name + '</para_name>';
        v_master += '<product_name>' + product_name + '</product_name>';
        v_master += '<created_by>' + created_by + '</created_by>';
    v_master += '</row>';

    // var labelValue = $('#label').text();
    var question2a = $('#label2a').text().trim();
    var question2b = $('#label2b').text().trim();
    var question2c = $('#label2c').text().trim();
    var question2d = $('#label2d').text().trim();
    var question2e = $('#label2e').text().trim();
    var question2f = $('#label2f').text().trim();
    var question2g = $('#label2g').text().trim();
    var question2h = $('#label2h').text().trim();
    var question2i = $('#label2i').text().trim();
    var question2j = $('#label2j').text().trim();

    var question1 = $('#label1').text().trim();
    var question2 = $('#label2').text().trim();
    var question3 = $('#label3').text().trim();
    var question4 = $('#label4').text().trim();
    var question5 = $('#label5').text().trim();
    var question6 = $('#label6').text().trim();
    var question7 = $('#label7').text().trim();
    var question8 = $('#label8').text().trim();
    var question9 = $('#label9').text().trim();

    var answer2a = $('#selectOption2a option:selected').val();
    var answer2b = $('#selectOption2b option:selected').val();
    var answer2c = $('#selectOption2c option:selected').val();
    var answer2d = $('#selectOption2d option:selected').val();
    var answer2e = $('#selectOption2e option:selected').val();
    var answer2f = $('#selectOption2f option:selected').val();
    var answer2g = $('#selectOption2g option:selected').val();
    var answer2h = $('#selectOption2h option:selected').val();
    var answer2i = $('#selectOption2i option:selected').val();
    var answer2j = $('#answer2j').val();

    var answer1 = $('#selectOption option:selected').val();
    var answer2 = $('#selectOption2 option:selected').val();
    var answer3 = $('#answer3').val();
    // var answer4 = $('#answer4').val();
    var answer5 = $('#answer5').val();
    var answer6 = $('#answer6').val();
    var answer7 = $('#selectOption3 option:selected').val();
    var answer8 = $('#answer8').val();
    var answer9 = $('#answer9').val();

    var answer4 = [];
    $("input:checkbox[name=type1]:checked").each(function(){
        answer4.push($(this).val());
    });

    if (answer4.length > 0) {
        answer4 = answer4.join(', ');
        // console.log('Checked values:', answer4);
    } else {
        alert('Please select at least one...');
    }

    var xml_data = '';
    var xml_data2 = '';

    xml_data += '<head>';

        xml_data += '<row>';
        xml_data += '<question>' + question2a + '</question>';
        xml_data += '<answer>' + answer2a + '</answer>';
        xml_data += '</row>';

        xml_data += '<row>';
        xml_data += '<question>' + question2b + '</question>';
        xml_data += '<answer>' + answer2b + '</answer>';
        xml_data += '</row>';

        xml_data += '<row>';
        xml_data += '<question>' + question2c + '</question>';
        xml_data += '<answer>' + answer2c + '</answer>';
        xml_data += '</row>';

        xml_data += '<row>';
        xml_data += '<question>' + question2d + '</question>';
        xml_data += '<answer>' + answer2d + '</answer>';
        xml_data += '</row>';

        xml_data += '<row>';
        xml_data += '<question>' + question2e + '</question>';
        xml_data += '<answer>' + answer2e + '</answer>';
        xml_data += '</row>';

        xml_data += '<row>';
        xml_data += '<question>' + question2f + '</question>';
        xml_data += '<answer>' + answer2f + '</answer>';
        xml_data += '</row>';

        xml_data += '<row>';
        xml_data += '<question>' + question2g + '</question>';
        xml_data += '<answer>' + answer2g + '</answer>';
        xml_data += '</row>';

        xml_data += '<row>';
        xml_data += '<question>' + question2h + '</question>';
        xml_data += '<answer>' + answer2h + '</answer>';
        xml_data += '</row>';

        xml_data += '<row>';
        xml_data += '<question>' + question2i + '</question>';

            if(answer2i == 'Yes') {
                var answer2i = $('#answer2i').val();
                xml_data += '<answer>' + answer2i + '</answer>';
            }
            else{
                xml_data += '<answer>' + answer2i + '</answer>';
            }
        xml_data += '</row>';

        xml_data += '<row>';
        xml_data += '<question>' + question2j + '</question>';
        xml_data += '<answer>' + answer2j + '</answer>';
        xml_data += '</row>';

    xml_data += '</head>';

    console.log(xml_data);

    xml_data2 += '<head>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question1 + '</question>';

            if(answer1 == 'No'){
                var answer1 = $('#answer1').val();
                xml_data2 += '<answer>' + answer1 + '</answer>';
            }
            else{
                xml_data2 += '<answer>' + answer1 + '</answer>';
            }
        xml_data2 += '</row>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question2 + '</question>';

            if(answer2 == 'Yes'){
                var answer2 = $('#answer2').val();
                xml_data2 += '<answer>' + answer2 + '</answer>';
            }
            else{
                xml_data2 += '<answer>' + answer2 + '</answer>';
            }
        xml_data2 += '</row>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question3 + '</question>';
        xml_data2 += '<answer>' + answer3 + '</answer>';
        xml_data2 += '</row>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question4 + '</question>';
        xml_data2 += '<answer>' + answer4 + '</answer>';
        xml_data2 += '</row>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question5 + '</question>';
        xml_data2 += '<answer>' + answer5 + '</answer>';
        xml_data2 += '</row>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question6 + '</question>';
        xml_data2 += '<answer>' + answer6 + '</answer>';
        xml_data2 += '</row>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question7 + '</question>';

            if(answer7 == 'Yes'){
                var answer7 = $('#answer7').val();
                xml_data2 += '<answer>' + answer7 + '</answer>';
            }
            else{
                xml_data2 += '<answer>' + answer7 + '</answer>';
            }
        xml_data2 += '</row>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question8 + '</question>';
        xml_data2 += '<answer>' + answer8 + '</answer>';
        xml_data2 += '</row>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question9 + '</question>';
        xml_data2 += '<answer>' + answer9 + '</answer>';
        xml_data2 += '</row>';

    xml_data2 += '</head>';

    console.log(xml_data2);

    // clear model message value for every ajax call provide single accurate message
    $('#success_msg').html('');
    $('#error_msg').html('');

    $.ajax({
        url: "/store_kii_producer_questionnaire_info",
        type: "POST",
        data: { '_token' : token, 'v_master' : v_master, 'xml_data' : xml_data, 'xml_data2' : xml_data2 },
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == 'SUCCESS'){
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message +'</p></span>');
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