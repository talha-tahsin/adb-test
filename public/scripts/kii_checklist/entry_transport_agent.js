

// document.title = 'VCF basic info';

$(document).ready(function () {

    console.log("hello talha.."); 

    // $('#community').select2();
    // $('.select2').css({'border': '2px solid #898AEE', 'border-radius': '5px'});
    // $('#para_list').prop('disabled', true);

    $('.date').datepicker({ dateFormat: "yy-mm-dd" });

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

    var userNm1 = $('#userName').val();

    // $.ajax({
    //     url: "/get_active_watershed",
    //     type: "GET",
    //     data: { 'userNm' : userNm1 },
    //     dataType: "json",
    //     cache: false,
    //     success: function (data) {
    //         // console.log(data);
    //         $.each(data.message, function (i, v) {
    //             $('#watershed_id').val(v.watershed_id);
    //             var waterShed_id = v.watershed_id;
    //             // console.log(waterShed_id);

    //             $.ajax({
    //                 url: "/get_all_kii_producer_list",
    //                 type: "GET",
    //                 data: { 'watershed_id' : waterShed_id },
    //                 dataType: "html",
    //                 cache: false,
    //                 success: function (data) {
    //                     // console.log(data);
    //                     $("#table_body").html(data);
    //                     $('#my_table').DataTable();
    //                 },
    //                 error: function(xhr, ajaxOptions, thrownError) {
    //                     console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
    //                 }
    //             });
                
    //         });
    //     },
    //     error: function(xhr, ajaxOptions, thrownError) {
    //         console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
    //     }
    // });

    myTable1 = {
        '001' : 'Timing of transportation of goods',
        '002' : 'Hazard/Disaster Occurrence',
        '003' : 'Impact of hazards or disasters',
        '004' : 'Cost of transporting products per km in one trip in BDT',
    };

    $.each(myTable1, function(key, value) {
        insertTableRow1(value);
    });

});

function insertTableRow1(name) {

    var appendString = '';
    var rowCount = $('#my_table1 > tbody > tr').length;
    rowCount++;

    appendString += '<tr>';

    appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';

    appendString += '<td style="width: 400px;text-align: left;">' + name + '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="jan" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="feb" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="mar" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="apr" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="may" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="jun" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="jul" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="aug" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="sep" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="oct" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="nov" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up...">';
    appendString += '</td>';

    appendString += '<td>';
    appendString += '<input type="text" id="dec" class="form-control" value="" style="width: 80px;text-align: left;" placeholder="fill up...">';
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

$(document).on('click', '#btn_store', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_name option:selected').val();
    var para_name = $('#para_name option:selected').text();

    var respondent_name = $('#respondent_name').val();
    var cell_no = $('#cell_no').val();
    var age = $('#age').val();
    var gender = $('#gender option:selected').val();
    var qualification = $('#qualification').val();
    var product_name = $('#product_name').val();
    var transport_vehicle = $('#transport_vehicle').val();

    // var input_names = [];
    // $("input:checkbox[name=type1]:checked").each(function(){
    //     input_names.push($(this).val());
    // });

    // if (input_names.length > 0) {
    //     input_names = input_names.join(', ');
    //     // console.log('Checked values:', input_names);
    // } else {
    //     alert('Usage of MFS account:: No checkboxes are checked.');
    // }

    var xml_data = '';
    var xml_data2 = '';
    var v_master = '';

    v_master = '<row>';
        v_master += '<watershed_id>' + watershed_id + '</watershed_id>';
        v_master += '<watershed_name>' + watershed_name + '</watershed_name>';
        v_master += '<para_id>' + para_id + '</para_id>';
        v_master += '<para_name>' + para_name + '</para_name>';

        v_master += '<respondent_name>' + respondent_name + '</respondent_name>';
        v_master += '<cell_no>' + cell_no + '</cell_no>';
        v_master += '<age>' + age + '</age>';
        v_master += '<gender>' + gender + '</gender>';
        v_master += '<qualification>' + qualification + '</qualification>';
        v_master += '<product_name>' + product_name + '</product_name>';
        v_master += '<transport_vehicle>' + transport_vehicle + '</transport_vehicle>';
        v_master += '<created_by>' + created_by + '</created_by>';
    v_master += '</row>';

    xml_data += '<head>';

        $('#my_table1 > tbody > tr').each(function () {
            
            var indicators = $(this).find('td:eq(1)').text(); 
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
                xml_data += '<indicators>' + indicators + '</indicators>';
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
            xml_data += '</row>';
            
        });

    xml_data += '</head>';
    
    // console.log(xml_data);

    // var labelValue = $('#private_sector_support').text();
    var question1 = $('#label1').text().trim();
    var question2 = $('#label2').text().trim();
    var question3 = $('#label3').text().trim();
    var question4 = $('#label4').text().trim();
    var question5 = $('#label5').text().trim();
    var question6 = $('#label6').text().trim();

    var answer1 = $('#answer1').val();
    var answer2 = $('#answer2').val();
    var answer3 = $('#answer3').val();
    var answer4 = $('#answer4').val();
    var answer5 = $('#answer5').val();
    var answer6 = $('#answer6').val();

    // var answer7 = [];
    // $("input:checkbox[name=type1]:checked").each(function(){
    //     answer7.push($(this).val());
    // });

    // if (answer7.length > 0) {
    //     answer7 = answer7.join(', ');
    //     // console.log('Checked values:', answer7);
    // } else {
    //     alert('Usage of MFS account:: No checkboxes are checked.');
    // }

    xml_data2 += '<head>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question1 + '</question>';
        xml_data2 += '<answer>' + answer1 + '</answer>';
        xml_data2 += '</row>';

        xml_data2 += '<row>';
        xml_data2 += '<question>' + question2 + '</question>';
        xml_data2 += '<answer>' + answer2 + '</answer>';
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

    xml_data2 += '</head>';

    console.log(xml_data);
    console.log(xml_data2);

    // clear model message value for every ajax call provide single accurate message
    $('#success_msg').html('');
    $('#error_msg').html('');

    $.ajax({
        url: "/store_transport_agent_info",
        type: "POST",
        data: { '_token' : token, 'v_master': v_master, 'xml_data' : xml_data, 'xml_data2' : xml_data2 },
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




