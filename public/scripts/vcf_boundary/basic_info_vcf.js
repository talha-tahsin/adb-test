


// document.title = 'VCF basic info';

$(document).ready(function () {

    console.log("hello talha.."); 

    // $('#community').select2();
    // $('.select2').css({'border': '2px solid #898AEE', 'border-radius': '5px'});
    // $('#para_list').prop('disabled', true);

    $('.date').datepicker({ dateFormat: "yy-mm-dd" });
    $('#upozila').prop('disabled', true);
    $('#union').prop('disabled', true);

    $.ajax({
        url: "/get_all_para_name",
        type: "GET",
        data: { 'userNm' : 'get_data' },
        dataType: "html",
        cache: false,
        success: function (data) {
            // console.log(data);
            $('#vcf_dependent_para').html(data);

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
                    url: "/get_all_vcf_list",
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
                $('#upozila').prop('disabled', false);
                $('#upozila').html(data);
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }

});

$(document).on('change', '#upozila', function () {

    var upozila_code = $('#upozila option:selected').val();
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
    var dependent_para_id = $('#vcf_dependent_para option:selected').val();
    var dependent_para_name = $('#vcf_dependent_para option:selected').text();

    var union = $('#union option:selected').val();
    var upozila = $('#upozila option:selected').text();
    var district = $('#district option:selected').text();

    var accessilibity = $('#accessilibity option:selected').text();
    var overall_status = $('#overall_status option:selected').text();
    var forest_type = $('#forest_type option:selected').text();

    var form = $('#store_vcf_basic')[0];
    var formdata = new FormData(form);
    formdata.append( "_token", token);
    formdata.append( "watershed_id", watershed_id);
    formdata.append( "watershed_name", watershed_name);
    formdata.append( "upozila", upozila);
    formdata.append( "union", union);
    formdata.append( "district", district);
    formdata.append( "dependent_para_id", dependent_para_id);
    formdata.append( "dependent_para_name", dependent_para_name);
    formdata.append( "accessilibity", accessilibity);
    formdata.append( "overall_status", overall_status);
    formdata.append( "forest_type", forest_type);
    console.log(formdata);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');
    //  window.location.href = '/gps-point-of-vcf-boundary';

    var vcf_name = $('#vcf_name').val();
    var vcf_group_name = $('#vcf_group_name').val();
    var vcf_dependent_para = $('#vcf_dependent_para option:selected').val();
    var karbari_name = $('#karbari_name').val();
    var chairman_cell_no = $('#chairman_cell_no').val();

    var v_district = $('#district option:selected').val();
    var v_upazila = $('#upozila option:selected').val();
    var v_union = $('#union option:selected').val();
    var approx_vcf_area = $('#approx_vcf_area').val();
    var avg_distance = $('#avg_distance').val();

    var accessilibity = $('#accessilibity option:selected').val();
    var overall_status = $('#overall_status option:selected').val();
    var current_problem = $('#current_problem').val();
    var existing_conservation = $('#existing_conservation').val();
    var forest_type = $('#forest_type option:selected').val();

    if(vcf_name == '' || vcf_name == undefined){
        var errorMsg = 'Please enter VCF Name..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(vcf_group_name == '' || vcf_group_name == undefined) {
        var errorMsg = 'Please enter VCF group name..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(vcf_dependent_para == '' || vcf_dependent_para == undefined) {
        var errorMsg = 'Please select VCF dependant para..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(karbari_name == '' || karbari_name == undefined) {
        var errorMsg = 'Please enter Chairman/Karbari name..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(chairman_cell_no == '' || chairman_cell_no == undefined) {
        var errorMsg = 'Please enter chairman cell number..';
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
    else if(approx_vcf_area == '' || approx_vcf_area == undefined) {
        var errorMsg = 'Please enter para area..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(avg_distance == '' || avg_distance == undefined) {
        var errorMsg = 'Please enter Avg. distance from para center..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(accessilibity == '' || accessilibity == undefined) {
        var errorMsg = 'Please select accessilibity condition..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(overall_status == '' || overall_status == undefined) {
        var errorMsg = 'Please select overall status of VCF..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(current_problem == '' || current_problem == undefined) {
        var errorMsg = 'Please enter current problem of VCF..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(existing_conservation == '' || existing_conservation == undefined) {
        var errorMsg = 'Please enter major existing conservation..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else if(forest_type == '' || forest_type == undefined) {
        var errorMsg = 'Please select forest/plantation type..';
        $('#myModal').modal({backdrop : 'static', keyboard : false});
        $('#error_msg').html('<span style="color: red">ERROR!! <p>'+ errorMsg +'</p></span>');
    }
    else
    {
        $.ajax({
            url: "/store_basic_info_vcf_boundary",
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
                    // initial all value after success
                    $('.initialval').val('');
                    $('#kml_file').val('');
                    $('.initialSelectVal').val('').change();

                    $.ajax({
                        url: "/get_all_vcf_list",
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

                    // $('#btn_close').on('click', function(){
                    //     window.location.href = '/gps-point-of-vcf-boundary';
                    // });
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

/** VCF list action */

$(document).on('click', '#btn_data_entry', function(){

    // var row_id = $('#btn_data_entry').attr('row_id');
    var userName = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();

    var vcf_id = $(this).closest('tr').find('#btn_data_entry').attr('vcf_id');
    var vcf_name = $(this).closest('tr').find('#btn_data_entry').attr('vcf_name');
    var main_para_id = $(this).closest('tr').find('#btn_data_entry').attr('para_id');
    var main_para_name = $(this).closest('tr').find('#btn_data_entry').attr('para_name');
    console.log(vcf_id, vcf_name, main_para_name);

    // window.location.href = '/gps-point-of-para-boundary';
    window.open('/gps-point-of-vcf-boundary', '_blank');

    if(vcf_id == '' || vcf_id == null || vcf_id == undefined){
        alert("User name not found...");  
    }
    else 
    {
        jsonObj = {
            'userName' : userName,
            'watershed_id' : watershed_id,
            'watershed_name' : watershed_name,
            'vcf_id' : vcf_id,
            'vcf_name' : vcf_name,
            'main_para_id' : main_para_id,
            'main_para_name' : main_para_name,
        };
            
        $.ajax({
            url: "/store_vcf_for_random_entry",
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



