


document.title = 'basic info';

$(document).ready(function () {

    console.log("hello talha from js.."); 

    // $('#watershedId').select2();
    // $('#para_list').select2();
    // $('#community').select2();
  
    // $('.select2').css({'border': '2px solid #898AEE', 'border-radius': '5px'});

    $('#upazila').prop('disabled', true);
    $('#union').prop('disabled', true);

    $('.date').datepicker({ dateFormat: "yy-mm-dd" });

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
                $('#watershed_name').val(v.watershed_name);
            });
            
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
                    url: "/get_all_para_list_paraBasic",
                    type: "GET",
                    data: { 'watershed_id' : waterShed_id },
                    dataType: "html",
                    cache: false,
                    success: function (data) {
                        // console.log(data);
                        $("#table_body").html(data);
                        $('#my_table').DataTable();
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
    // var created_by = $('#userName').val();

    survey_date = $('#survey_date').val();
    watershed_id = $('#watershed_id').val();
    watershed_name = $('#watershed_name').val();
    para_name = $('#para_name').val();

    union = $('#union option:selected').val();
    upazila = $('#upazila option:selected').text();
    district = $('#district option:selected').text();

    var form = $('#my_form')[0];
    var formdata = new FormData(form);
    formdata.append( "_token", token);
    formdata.append( "watershed_id", watershed_id);
    formdata.append( "watershed_name", watershed_name);
    formdata.append( "upazila", upazila);
    formdata.append( "union", union);
    formdata.append( "district", district);
    console.log(formdata);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');
    //  window.location.href = '/view_para_list';

    var mouza_name = $('#mouza_name').val();
    var v_upazila = $('#upazila option:selected').val();
    var v_district = $('#district option:selected').val();
    var headman_name = $('#headman_name').val();
    var karbari_name = $('#karbari_name').val();
    var chairman_name = $('#chairman_name').val();

    var para_area = $('#para_area').val();
    // var para_area = $('#para_area').val();
    // console.log(survey_date, para_name, v_upazila, v_district);

    if(survey_date == '' || survey_date == undefined){
        var errorMsg = 'Please enter survey date..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(para_name == '' || para_name == undefined) {
        var errorMsg = 'Please enter para name..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(v_district == '' || v_district == undefined) {
        var errorMsg = 'Please enter district name..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(mouza_name == '' || mouza_name == undefined) {
        var errorMsg = 'Please enter mouza name..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(v_upazila == '' || v_upazila == undefined) {
        var errorMsg = 'Please enter upazila name..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(headman_name == '' || headman_name == undefined) {
        var errorMsg = 'Please enter Head-man name..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(karbari_name == '' || karbari_name == undefined) {
        var errorMsg = 'Please enter Karbari name..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(chairman_name == '' || chairman_name == undefined) {
        var errorMsg = 'Please enter Chairman name..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(para_area == '' || para_area == undefined) {
        var errorMsg = 'Please enter para area..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else
    {
        $.ajax({
            url: "/store_basic_info_para_boundary",
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
                    $('.selectBox').val('').change();
                    $('.initial').val('');
                    $('#any_remarks').val('');
                    $('#kml_file').val('');
                
                    $.ajax({
                        url: "/get_all_para_list_paraBasic",
                        type: "GET",
                        data: { 'watershed_id' : watershed_id },
                        dataType: "html",
                        cache: false,
                        success: function (data) {
                            // console.log(data);
                            $("#table_body").html(data);
                            $('#my_table').DataTable();
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

$(document).on('click', '#btn_store_old', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var created_by = $('#userName').val();

    survey_date = $('#survey_date').val();
    watershed_id = $('#watershed_id').val();
    watershed_name = $('#watershed_name').val();
    para_name = $('#para_name').val();
    mouza_name = $('#mouza_name').val();
    union = $('#union option:selected').val();
    upozila = $('#upozila option:selected').text();
    district = $('#district option:selected').text();
    headman_name = $('#headman_name').val();
    karbari_name = $('#karbari_name').val();
    chairman_name = $('#chairman_name').val();
    para_area = $('#para_area').val();
    any_remarks = $('#any_remarks').val();

    jsonObj = {
        'survey_date' : survey_date,
        'watershed_id' : watershed_id,
        'watershed_name' : watershed_name,
        'para_name' : para_name,
        'mouza_name' : mouza_name,
        'union' : union,
        'upozila' : upozila,
        'district' : district,
        'headman_name' : headman_name,
        'karbari_name' : karbari_name,
        'chairman_name' : chairman_name,
        'para_area' : para_area,
        'any_remarks' : any_remarks,
        'created_by' : created_by,
    };
    
    console.log(jsonObj);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');
    //  window.location.href = '/view_para_list';

    $.ajax({
        url: "/store_basic_info_para_boundary",
        type: "POST",
        data: { '_token' : token, 'dataToSend' : JSON.stringify(jsonObj) },
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == 'SUCCESS'){
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                // alert(data.message);
                $('.initial').val('');
                $('#any_remarks').val('');
            
                $.ajax({
                    url: "/get_all_para_list",
                    type: "GET",
                    data: { 'watershed_id' : watershed_id },
                    dataType: "html",
                    cache: false,
                    success: function (data) {
                        // console.log(data);
                        $("#table_body").html(data);
                        $('#my_table').DataTable();
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



});

/*  ======== * ======== * ======== * ======== * ========= * ========= * ========= */


$(document).on('click', '#btn_edit', function(){

    var row_id = $(this).closest('tr').find('#btn_edit').attr('row_id');
    console.log(row_id);
    
    if(row_id == '' || row_id == null || row_id == undefined){
        alert("Row id not found...");  
    }
    else{
        $('#myModal_edit').modal({backdrop : 'static', keyboard : false});
        $("#row_id").val(row_id);

        $.ajax({
            url: '/get_para_details_for_edit',
            type: "GET",
            data: { 'row_id' : row_id },
            dataType: "JSON",
            cache: false,
            success: function (data) {
                // console.log(data);
                if(data.status == "SUCCESS") {
                    $.each(data.message, function (i, v) {
                        $('#m_para_nm').val(v.para_name);
                        $('#m_para_area').val(v.para_area);
                        $('#m_karbari').val(v.karbari_name);
                        $('#m_chairman').val(v.chairman_name);
                        $('#m_headman').val(v.headman_name);
                        $('#m_mouza').val(v.mouza_name);
                    });
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

$(document).on('click', '#btn_updt', function(){

    var token = $("meta[name='csrf-token']").attr("content");
    var userNme = $('#userName').val();
    var mRowId = $("#row_id").val();
    var m_para_nam = $('#m_para_nm').val();
    var m_para_area = $('#m_para_area').val();
    var m_karbari = $('#m_karbari').val();
    var m_headman = $('#m_headman').val();
    var m_chairman = $('#m_chairman').val();
    var m_mouza = $('#m_mouza').val();

    // console.log(usrId, userStatus);

    var send_data = {
        'row_id' : mRowId,
        'para_name' : m_para_nam,
        'para_area' : m_para_area,
        'karbari_name' : m_karbari,
        'headman_name' : m_headman, 
        'chairman_name' : m_chairman, 
        'mouza_name' : m_mouza, 
    };

    $.ajax({
        url: '/updt_para_basic_info',
        type: "POST",
        data: {'_token' : token, 'dataToSend' : JSON.stringify(send_data)},
        dataType: "JSON",
        cache: false,
        success: function (data) {
            // console.log(data);
            if(data.status == "SUCCESS") {
                $('#myModal_edit').modal('hide'); 
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                
                
                $.ajax({
                    url: "/get_active_watershed",
                    type: "GET",
                    data: { 'userNm' : userNme },
                    dataType: "json",
                    cache: false,
                    success: function (data) {
                        // console.log(data);
                        $.each(data.message, function (i, v) {
                            var waterShed_id = v.watershed_id;
            
                            $.ajax({
                                url: "/get_all_para_list",
                                type: "GET",
                                data: { 'watershed_id' : waterShed_id },
                                dataType: "html",
                                cache: false,
                                success: function (data) {
                                    // console.log(data);
                                    $("#table_body").html(data);
                                    $('#my_table').DataTable();
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
            }
            else {
                alert(data.message);
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });

});

$(document).on('click', '#btn_data_entry', function(){

    var token = $("meta[name='csrf-token']").attr("content");
    // var row_id = $('#btn_data_entry').attr('row_id');
    var userName = $('#userName').val();

    var para_id = $(this).closest('tr').find('#btn_data_entry').attr('para_id');
    var para_name = $(this).closest('tr').find('#btn_data_entry').attr('para_name');
    console.log(para_id);

    // window.location.href = '/gps-point-of-para-boundary';
    window.open('/gps-point-of-para-boundary', '_blank');

    if(para_id == '' || para_id == null || para_id == undefined){
        alert("User name not found...");  
    }
    else 
    {
        jsonObj = {
            'user_name' : userName,
            'para_id' : para_id,
            'para_name' : para_name
        };
            
        $.ajax({
            url: "/store_para_name_for_entry",
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


