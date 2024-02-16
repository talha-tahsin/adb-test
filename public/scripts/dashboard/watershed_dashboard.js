

// developed by : Talha || date : 15-Jan-2024

$(document).ready(function () {

    console.log("hello talha from js..");
    

    

});

$(document).on('click', '#watershed1', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var userName = $('#userName').val();
    var waterShed_id = $('#watershed_id').val();
    var waterShed_name = $('#watershed_name').val();
    console.log(waterShed_id, waterShed_name);
    
    dataToSend = {
      'user_name' : userName,
      'watershed_id' : waterShed_id,
      'watershed_name' : waterShed_name,
    };
    
    $.ajax({
        url: "/store_watershed_info_for_entry",
        type: "POST",
        data: { '_token' : token, 'dataToSend' : JSON.stringify(dataToSend) },
        dataType: "json",
        cache: false,
        success: function (data) {
            console.log(data);
           
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });
    
});

$(document).on('click', '#watershed2', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var userName = $('#userName2').val();
    var waterShed_id = $('#watershed_id2').val();
    var waterShed_name = $('#watershed_name2').val();
    console.log(waterShed_id, waterShed_name);

    dataToSend = {
      'user_name' : userName,
      'watershed_id' : waterShed_id,
      'watershed_name' : waterShed_name,
    };

    $.ajax({
        url: "/store_watershed_info_for_entry",
        type: "POST",
        data: { '_token' : token, 'dataToSend' : JSON.stringify(dataToSend) },
        dataType: "json",
        cache: false,
        success: function (data) {
            console.log(data);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });

});

$(document).on('click', '#watershed3', function () {

    var token = $("meta[name='csrf-token']").attr("content");
    var userName = $('#userName3').val();
    var waterShed_id = $('#watershed_id3').val();
    var waterShed_name = $('#watershed_name3').val();
    console.log(waterShed_id, waterShed_name);

    dataToSend = {
      'user_name' : userName,
      'watershed_id' : waterShed_id,
      'watershed_name' : waterShed_name,
    };

    $.ajax({
        url: "/store_watershed_info_for_entry",
        type: "POST",
        data: { '_token' : token, 'dataToSend' : JSON.stringify(dataToSend) },
        dataType: "json",
        cache: false,
        success: function (data) {
            console.log(data);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });

});