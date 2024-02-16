


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
                    url: "/get_all_kii_producer_list",
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

$(document).on('click', '#btn_store', function (event) {

    event.preventDefault();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();
    var para_id = $('#para_name option:selected').val();
    var para_name = $('#para_name option:selected').text();
    var gender = $('#gender option:selected').text();

    var form = $('#my_form')[0];
    var formdata = new FormData(form);
    formdata.append( "_token", token);
    formdata.append( "watershed_id", watershed_id);
    formdata.append( "watershed_name", watershed_name);
    formdata.append( "para_id", para_id);
    formdata.append( "para_name", para_name);
    formdata.append( "gender", gender);
    console.log(formdata);

     // clear model message value for every ajax call provide single accurate message
     $('#success_msg').html('');
     $('#error_msg').html('');
    //  window.location.href = '/gps-point-of-vcf-boundary';

    $.ajax({
        url: "/store_kii_producer_basic",
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


});

/**Kii producer basic action */

$(document).on('click', '#btn_data_entry', function(){

    // var row_id = $('#btn_data_entry').attr('row_id');
    var userName = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();

    var para_id = $(this).closest('tr').find('#btn_data_entry').attr('para_id');
    var para_name = $(this).closest('tr').find('#btn_data_entry').attr('para_name');
    var producer_id = $(this).closest('tr').find('#btn_data_entry').attr('producer_id');
    var producer_name = $(this).closest('tr').find('#btn_data_entry').attr('producer_name');
    var product_id = $(this).closest('tr').find('#btn_data_entry').attr('product_id');
    var product_name = $(this).closest('tr').find('#btn_data_entry').attr('product_name');
    console.log(producer_id, producer_name);

    // window.location.href = '/gps-point-of-para-boundary';
    window.open('/kii-checklist-for-producer', '_blank');

  
    jsonObj = {
        'userName' : userName,
        'watershed_id' : watershed_id,
        'watershed_name' : watershed_name,
        'para_id' : para_id,
        'para_name' : para_name,
        'product_id' : product_id,
        'product_name' : product_name,
        'producer_id' : producer_id,
        'producer_name' : producer_name,
    };
        
    $.ajax({
        url: "/store_kii_active_producer",
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
    
        
    
});



