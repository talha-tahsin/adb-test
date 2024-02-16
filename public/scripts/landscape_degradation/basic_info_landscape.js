


document.title = 'land degradation';

$(document).ready(function () {

    console.log("hello talha23..");
    
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
                    url: "/get_map_unit_list",
                    type: "GET",
                    data: { 'watershed_id' : waterShed_id },
                    dataType: "html",
                    cache: false,
                    success: function (data) {
                        // console.log(data);
                        $("#table_body").html(data);
                        $('#my_table_list').DataTable();
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

$('#add_row').on('click', function () {
    insertTableRow();
});

/** data entry action */

$(document).on('click', '#btn_entry', function(){

    var userName = $('#userName').val();
    var token = $("meta[name='csrf-token']").attr("content");
    var watershed_id = $('#watershed_id').val();
    var watershed_name = $('#watershed_name').val();

    var map_unit = $(this).closest('tr').find('td:eq(1)').text();
    var areaOf_map_unit = $(this).closest('tr').find('td:eq(4)').text();
    // var vcf_id = $(this).closest('tr').find('#btn_data_entry').attr('vcf_id');
    // var vcf_name = $(this).closest('tr').find('#btn_data_entry').attr('vcf_name');
    console.log(map_unit, areaOf_map_unit);

     // window.location.href = '/gps-point-of-para-boundary';
     window.open('/show-lulc-validation-survey', '_blank');

     if(map_unit == '' || map_unit == null || map_unit == undefined){
        alert("map_unit not found...");  
    }
    else 
    {
        jsonObj = {
            'userName' : userName,
            'watershed_id' : watershed_id,
            'watershed_name' : watershed_name,
            'map_unit' : map_unit,
            'areaOf_map_unit' : areaOf_map_unit,
        };
            
        $.ajax({
            url: "/store_map_unit_random_entry",
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

function removeTableRow() {

    $(document).on('click', '.removeHead', function () {

        $(this).parent().parent().remove();
        reOrderTable();

        if ($('#amount').length == '0') {
            $('#total_amount').text((0).toFixed(2));
        }

        // $('#amount').trigger('change');
        var totalAmount = 0;
        $('#my_table > tbody > tr').each(function () {

            var tem_total = $(this).find('#amount').val();

            if (tem_total == undefined || tem_total == null || tem_total == '') tem_total = 0;

            totalAmount += parseFloat(tem_total);

        });

        // console.log("888..", totalAmount);

        if (totalAmount == '' || totalAmount == null || totalAmount == undefined)
            $('#total_amount').text('0.00');
        else
            $('#total_amount').text(totalAmount.toFixed(2));

    });
}

function reOrderTable() {
    var sl = 1;
    $('#my_table > tbody > tr').each(function () {
        $(this).find('.sl').html(sl);
        sl++;
    });
    counter = sl - 1;
}



