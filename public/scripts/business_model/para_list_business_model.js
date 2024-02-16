


document.title = 'para List busniess model';

$(document).ready(function () {

    console.log("hello talha from js.."); 

    // $('#watershedId').select2();
    // $('#para_list').select2();
    // $('#community').select2();
  
    // $('.select2').css({'border': '2px solid #898AEE', 'border-radius': '5px'});

    // $('.date').datepicker({ dateFormat: "yy-mm-dd" });
   

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

});

$(document).on('click', '#btn_data_entry', function(){

    var token = $("meta[name='csrf-token']").attr("content");
    // var row_id = $('#btn_data_entry').attr('row_id');
    var userName = $('#userName').val();

    var para_id = $(this).closest('tr').find('#btn_data_entry').attr('para_id');
    var para_name = $(this).closest('tr').find('#btn_data_entry').attr('para_name');
    console.log(para_id);

    // window.location.href = '/gps-point-of-para-boundary';
    window.open('/entry-busines-model', '_blank');

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


