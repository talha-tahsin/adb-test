


@extends('layouts.pages.master')

@section('current_page_css')
<!-- datepicker -->
<link rel="stylesheet" href="{{ asset('plugins/datepicker/css/jquery-ui-1.9.2.custom.min.css') }}">

@endsection

@section('content')
 
<!-- Content Header (Page header) -->
    <div class="content-header" style="margin: 0px 0px -15px 0px;">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0" style="font-family: Serif;">Societal Sanitation </h1>
          </div><!-- /.col -->
          
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item" style="margin-right: 5px;"> 
                <h5><span>Go To : </span> <a href="{{ route('Data.Entry.Dashboard') }}" >Data Entry Dashboard</a> </h5>
              </li>
              <!-- <li class="breadcrumb-item active">Dashboard v1</li> -->
            </ol>
          </div>

        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">

        <div class="row">
          <div class="col-md-12">
            <div class="card card-primary card-outline">
              <div class="card-body">

                  <input type="hidden" name="userName" id="userName" value="{{ Auth::user()->name }}"/>

                  <div class="row"> 
                    <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                      <label class="control-label validate" for="community_id"><span style="color: red;">★&nbsp;</span>Watershed Id</label> 
                      <input type="text" name="watershed_id" id="watershed_id" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                    </div> 
                    <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                      <label class="control-label validate" for="watershed_name"><span style="color: red;">★&nbsp;</span>Watershed Name</label>
                      <input type="text" name="watershed_name" id="watershed_name" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                    </div>
                  
                    <input type="hidden" name="para_id" id="para_id" value=""/>
                    <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                      <label class="control-label validate" for="para_name"><span style="color: red;">★&nbsp;</span>Para Name</label>
                      <input type="text" name="para_name" id="para_name" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                    </div> 
                  </div> 
                  <!-- end row -->
              
                <hr style="border-bottom: 2px solid teal;">
                <div class="col-md-7" style="margin: 0px 0px 10px 0px;">
                  <label>(1) Sanitation Information</label>
                    <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table">
                      <thead>                            
                        <tr style="background-color: #8ed6f2;">
                          <th style="text-align: center;">Serial</th>
                          <th style="text-align: left;">Latrine type</th>
                          <th style="text-align: center;">Household Owned</th>
                          <th style="text-align: center;">Shared</th>
                          <th style="text-align: center;">Total</th>
                          <th style="text-align: center;">Nos. of required latrines</th>
                        </tr>                                  
                      </thead>

                        <tbody id="table_body"></tbody>
                    </table>

                    <div class="row">
                      <div class="col-md-9"></div>
                      <div class="col-md-3" style="margin: 20px 0px 10px 0px;">
                          <button type="submit" class="btn btn-primary" id="btn_store1" style="width: 100%;border-radius: 5px;color: black;">Save Details Info</button>
                      </div>  
                    </div>
                    
                </div>
                <!-- end div col-7 -->

                <hr style="border-bottom: 2px solid teal;">
                <div class="col-md-8" style="margin: 10px 0px 10px 0px;">
                
                  <label class="control-label">(2) Number of users per latrine </label>
                  <label class="hide" id="question1">Number of users per latrine </label>
                  <div class="row">
                    <div class="col-md-3" style="margin: 0px 0px 10px 0px;">   
                      <input type="text" name="answer1" id="answer1" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild..">
                    </div> 
                  </div> 
    
                  <label class="control-label">(3) Are community people aware on washing hands, using sandals</label>
                  <p style="margin: 0px 0px 0px 0px;"><label class="control-label">If yes, please state the disaggregated average percentage of awareness of community people in the Para</label></p>
                
                  <label class="control-label"><span style="color: red;">★&nbsp;</span>Male</label>
                  <div class="row">
                    <div class="col-md-3" style="margin: 0px 0px 10px 0px;">
                      <label class="control-label hide" id="question2">Male disaggregated average percentage of awareness on washing hands, using sandals</label>
                      <input type="text" name="answer3" id="answer2" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up..">
                    </div>
                  </div> 
                  
                  <label class="control-label"><span style="color: red;">★&nbsp;</span>Female</label>
                  <div class="row">
                    <div class="col-md-3" style="margin: 0px 0px 10px 0px;">
                      <label class="control-label hide" id="question3">Female disaggregated average percentage of awareness on washing hands, using sandals</label>
                      <input type="text" name="answer4" id="answer3" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up..">
                    </div> 
                  </div> 
                  

                </div>
                <!-- end div col-6 -->

                <div class="row">
                  <!-- <div class="col-md-10"></div> -->
                  <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store2" style="width: 100%;border-radius: 5px;color: black;">Save Details Info</button>
                  </div>  
                </div>
                    

                <hr style="border-bottom: 2px solid teal;">
                <div class="row">
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <a href="{{ route('View.Water.Entry') }}" style="color: black;">
                      <button type="submit" class="btn btn-info" style="width: 100%;border-radius: 20px;">Previous : Societal Water Supply</button>
                    </a>
                  </div>
                  <div class="col-md-8"></div>
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <a href="{{ route('View.Accessibility.Entry') }}">
                      <button type="submit" class="btn btn-info" style="color: black;width: 100%;border-radius: 20px;">Next : Transport and Communication</button>
                    </a>
                  </div>
                </div>

    
      </div>  
      <!-- end card body -->
    </div>  
    <!-- end car-primary -->
  </div>  
  <!-- end col-md-9 -->

</div> 
<!-- end main content row -->

<!-- Popup Message Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <h5 id="success_msg"><h5>
        <h5 id="error_msg"><h5>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>



    </div>
</section>

  
@endsection

@section('current_page_js')
<!-- this page js -->
<script src="{{ asset('scripts/societal_entry/sanitation_entry.js') }}"></script>
<!-- datepicker -->
<script src="{{ asset('plugins/datepicker/jquery-ui.js') }}"></script>

<script>

document.title = 'societal sanitation';

$(document).ready(function () {

    console.log("hello from blade script..");
    
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
                $('#para_id').val(v.para_id);
                $('#para_name').val(v.para_name);
            });
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });

    // insertTableRow();

    // for (var i = 0; i < 3; i++) {
    //     insertTableRow();
    // }


});

</script>


@endsection
