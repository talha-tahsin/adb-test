
// developed by : talha || date : 14-dec-2023 

// document.title = 'Livelihood Entry';

$(document).ready(function () {

    // console.log("hello talha.."); 
    // $('#community').select2();
    // $('.select2').css({'border': '2px solid #898AEE', 'border-radius': '5px'});
    $('.date').datepicker({ dateFormat: "yy-mm-dd" });
    $('#upazila').prop('disabled', true);
    $('#union').prop('disabled', true);
    
    $.ajax({
        url: "/get_all_para_name",
        type: "GET",
        data: { 'userNm' : 'get_data' },
        dataType: "html",
        cache: false,
        success: function (data) {
            // console.log(data);
            $('#para_name').html(data);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });

    var userNm1 = $('#userName').val();
    $.ajax({
        url: "/get_active_watershed",
        type: "GET",
        data: { 'userNm' : userNm1 },
        dataType: "json",
        cache: false,
        success: function (data) {
            // console.log(data);
            $.each(data.message, function (i, v) {
                $('#watershed_id').val(v.watershed_id);
                var waterShed_id = v.watershed_id;
                // console.log(waterShed_id);

                $.ajax({
                    url: "/get_all_soil_test_list",
                    type: "GET",
                    data: { 'watershed_id' : waterShed_id },
                    dataType: "html",
                    cache: false,
                    success: function (data) {
                        // console.log(data);
                        $("#table_body2").html(data);
                        $('#my_table2').DataTable();
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

});

$(document).on('change', '#district', function () {

    var district_code = $('#district option:selected').val();
    // console.log(district_code);

    if(district_code)
    {
        $.ajax({
            url: "/get_upazila_list",
            type: "GET",
            data: { 'district_code' : district_code },
            dataType: "html",
            cache: false,
            success: function (data) {
                // console.log(data);
                $('#upazila').prop('disabled', false);
                $('#upazila').html(data);
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }

});

$(document).on('change', '#upazila', function () {

    var upozila_code = $('#upazila option:selected').val();
    // console.log(district_code);

    if(upozila_code)
    {
        $.ajax({
            url: "/get_union_list",
            type: "GET",
            data: { 'upozila_code' : upozila_code },
            dataType: "html",
            cache: false,
            success: function (data) {
                // console.log(data);
                $('#union').prop('disabled', false);
                $('#union').html(data);
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }

});

$(document).on('click', '#btn_store', function (event) {

    event.preventDefault();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_name option:selected').val();
    var para_name = $('#para_name option:selected').text();

    var district = $('#district option:selected').text();
    var upazila = $('#upazila option:selected').text();
    var union = $('#union option:selected').text();

    var form = $('#form_body')[0];
    var formdata = new FormData(form);
    formdata.append( "_token", token);
    formdata.append( "watershed_id", watershed_id);
    formdata.append( "watershed_name", watershed_name);
    formdata.append( "para_id", para_id);
    formdata.append( "para_name", para_name);

    formdata.append( "district", district);
    formdata.append( "upazila", upazila);
    formdata.append( "union", union);

    console.log(formdata);
    
    var v_para = $('#para_name option:selected').val();
    var v_district = $('#district option:selected').val();
    var v_upazila = $('#upazila option:selected').val();
    var v_union = $('#union option:selected').val();
    
    var v_date = $('#collection_date').val();
    var v_time = $('#collection_time').val();
    var soil_sample_id = $('#soil_sample_id').val();
    var longitude = $('#longitude').val();
    var farmer_name = $('#farmer_name').val();

    if(v_para == '' || v_para == undefined){
        var errorMsg = 'Please select para name..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(v_district == '' || v_district == undefined) {
        var errorMsg = 'Please enter district name..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(v_upazila == '' || v_upazila == undefined) {
        var errorMsg = 'Please select upazila name..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(v_union == '' || v_union == undefined) {
        var errorMsg = 'Please select union name..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(v_date == '' || v_date == undefined) {
        var errorMsg = 'Please enter collection date..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(v_time == '' || v_time == undefined) {
        var errorMsg = 'Please enter collection time..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(soil_sample_id == '' || soil_sample_id == undefined) {
        var errorMsg = 'Please enter soil sample id..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(farmer_name == '' || farmer_name == undefined) {
        var errorMsg = 'Please enter farmer name..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(longitude == '' || longitude == undefined) {
        var errorMsg = 'Please enter longitude..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else {

        // clear model message value for every ajax call provide single accurate message
        $('#success_msg').html('');
        $('#error_msg').html('');

        $.ajax({
            url: "/store_soil_test_basic_info",
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
                    $('.initialSelectBoxVal').val('').change();
                    $('.initialVal').val('');
                    $('#my_table td input[type=text]').val('');
                    $('#any_remark').val();

                    $.ajax({
                        url: "/get_all_soil_test_list",
                        type: "GET",
                        data: { 'watershed_id' : watershed_id },
                        dataType: "html",
                        cache: false,
                        success: function (data) {
                            // console.log(data);
                            $("#table_body2").html(data);
                            $('#my_table2').DataTable();
                        },
                        error: function(xhr, ajaxOptions, thrownError) {
                            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
                        }
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
    }

});

/** Data entry action */
$(document).on('click', '#btn_data_entry', function(){

    // var row_id = $('#btn_data_entry').attr('row_id');
    // $(this).closest('tr').find('td:eq(1)').text();
    var userName = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");

    var waterShed_id = $(this).closest('tr').find('td:eq(1)').text();
    var waterShed_name = $(this).closest('tr').find('td:eq(2)').text();
    var soil_sample_id = $(this).closest('tr').find('td:eq(4)').text();

    var para_id = $(this).closest('tr').find('#btn_data_entry').attr('para_id');
    var para_name = $(this).closest('tr').find('#btn_data_entry').attr('para_name');
    console.log(waterShed_id, waterShed_name, soil_sample_id, para_id, para_name);

    // window.location.href = '/gps-point-of-para-boundary';
    window.open('/entry-soil-test', '_blank');

    if(soil_sample_id == '' || soil_sample_id == null || soil_sample_id == undefined){
        alert("User name not found...");  
    }
    else 
    {
        jsonObj = {
            'userName' : userName,
            'watershed_id' : waterShed_id,
            'watershed_name' : waterShed_name,
            'soil_sample_id' : soil_sample_id,
            'para_id' : para_id,
            'para_name' : para_name,
        };
            
        $.ajax({
            url: "/store_soil_sample_id_random_entry",
            type: "POST",
            data: { '_token' : token, 'dataToSend' : JSON.stringify(jsonObj) },
            dataType: "json",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == "SUCCESS") {
                    console.log(data.message);   
                }
                else {
                    alert(data.message);
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }
        
    
});



