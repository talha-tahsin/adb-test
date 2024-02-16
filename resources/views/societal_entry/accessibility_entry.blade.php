


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
            <h1 class="m-0" style="font-family: Serif;">Transport and Communication Facilities  </h1>
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
              
                <hr style="border-bottom: 2px solid Maroon;">
                <div class="row">               
                  <div class="col-md-8" style="margin: 0px 0px 10px 0px;">
                    <label>(1)	What is the main mode of communication in your area?</label>
                      <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table">
                        <thead>                             
                          <tr style="background-color: #8ed6f2;">
                            <th style="text-align: center;">Serial</th>
                            <th style="text-align: left;">Mode</th>
                            <th style="text-align: center;">Earthen</th>
                            <th style="text-align: center;">Herringbone</th>
                            <th style="text-align: center;">Pucca</th>
                            <th style="text-align: center;">Water way</th>
                            <th style="text-align: center;">No transportation means</th>
                          </tr>                       
                        </thead>

                         <tfoot>
                            <tr style="background-color: #f1f5f5;">
                              <td style="text-align: center;">3</td>
                              <td id="mode3_name" style="text-align: left;">State the Condition of Main Mode</td>
                              <td>
                                <select type="text" id="condition_earthen" name="condition_earthen" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">
                                  <option value="" selected disabled> Select </option>
                                  <option value="Good">Good</option>
                                  <option value="Medium">Medium</option>
                                  <option value="Bad">Bad</option>
                                </select>
                              </td>
                              <td>
                                <select type="text" id="condition_herringbone" name="condition_herringbone" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">
                                  <option value="" selected disabled> Select </option>
                                  <option value="Good">Good</option>
                                  <option value="Medium">Medium</option>
                                  <option value="Bad">Bad</option>
                                </select>
                              </td>
                              <td>
                                <select type="text" id="condition_pucca" name="condition_pucca" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">
                                  <option value="" selected disabled> Select </option>
                                  <option value="Good">Good</option>
                                  <option value="Medium">Medium</option>
                                  <option value="Bad">Bad</option>
                                </select>
                              </td>
                              <td>
                                <select type="text" id="condition_water_way" name="condition_water_way" class="form-control resetSelect" value="" style="width: 120px;text-align: center;border-radius: 5px;">
                                  <option value="" selected disabled> Select </option>
                                  <option value="Good">Good</option>
                                  <option value="Medium">Medium</option>
                                  <option value="Bad">Bad</option>
                                </select>
                              </td>
                              <td>
                                <select type="text" id="condition_no_trans" name="condition_no_trans" class="form-control resetSelect" value="" style="width: 200px;text-align: center;border-radius: 5px;">
                                  <option value="" selected disabled> Select </option>
                                  <option value="Good">Good</option>
                                  <option value="Medium">Medium</option>
                                  <option value="Bad">Bad</option>
                                </select>
                              </td>
                            </tr>
                         </tfoot> 

                        <tbody id="table_body"></tbody>

                      </table>

                      <div class="row">
                        <div class="col-md-10"></div>
                        <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                          <button type="submit" class="btn btn-primary" id="btn_store1" style="width: 100%;border-radius: 5px;color: black;">Save Details Info</button>
                        </div>
                      </div>
                  </div>
                </div>

                <hr style="border-bottom: 2px solid Maroon;">
                <label>(2)	Is there any connecting road in the para, if yes, identify the type of roads and if not identify the road distance from para center?</label> 
                <div class="row">
                  <div class="col-md-4" style="margin: 10px 0px 10px 0px;">
                    <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table2">
                      <thead>
                        <tr style="background-color: #8ed6f2;">
                          <th style="text-align: center;">Serial</th>
                          <th style="text-align: left;">Connecting Road Type (if available)</th>
                          <th style="text-align: center;">Avg. distance of the disconnected roads from para center (km)</th>
                        </tr>
                      </thead>

                      <tbody id="table_body"></tbody>

                    </table>

                    <div class="row">
                      <div class="col-md-9"></div>
                      <div class="col-md-3" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store2" style="width: 100%;border-radius: 5px;color: black;">Save Details Info</button>
                      </div>  
                    </div>

                  </div>
                </div>

                <hr style="border-bottom: 2px solid black;">
                <div class="row">
                  <div class="col-md-6" style="margin: 10px 0px 10px 0px;">
                    <label>(3)	What types of transportation facilities are available in your area and overall condition of the route network?</label>
                      <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table3">
                        <thead>                             
                          <tr style="background-color: #8ed6f2;">
                            <th style="text-align: center;">Serial</th>
                            <th style="text-align: left;">Transportation mode</th>
                            <th style="text-align: center;">Currently in most use</th>
                            <th style="text-align: center;">Identify most preferable</th>
                            <th style="text-align: center;">Remarks</th>
                          </tr>                       
                        </thead>

                          <tbody id="table_body"></tbody>

                      </table>

                      <div class="row">
                        <div class="col-md-9"></div>
                        <div class="col-md-3" style="margin: 10px 0px 10px 0px;">
                          <button type="submit" class="btn btn-primary" id="btn_store3" style="width: 100%;border-radius: 5px;color: black;">Save Details Info</button>
                        </div>
                      </div>

                  </div>
                </div> 

                <hr style="border-bottom: 2px solid black;">
                <div class="row">
                  <div class="col-md-6" style="margin: 10px 0px 10px 0px;">
                    <label>(4) Status of the telecommunication & media facilities among community people in the Para</label>
                    <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table4">
                      <thead>
                        <tr style="background-color: #8ed6f2;">
                          <th style="text-align: center;">Serial</th>
                          <th style="text-align: left;">Facilities type</th>
                          <th style="text-align: center;">Select the Percentage</th>
                          <th style="text-align: center;">Remarks</th>
                        </tr>
                      </thead>

                      <tbody id="table_body"></tbody>

                    </table>

                    <div class="row">
                      <div class="col-md-9"></div>
                      <div class="col-md-3" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store4" style="width: 100%;border-radius: 5px;color: black;">Save Details Info</button>
                      </div>  
                    </div>

                  </div>
                </div>
                  

                <hr style="border-bottom: 2px solid black;">
                <div class="row">
                  <div class="col-md-6" style="margin: 0px 0px 10px 0px;">
                    <form id="my_form" method="POST">
                      <label>(5)	What are the means of transporting agro-forestry products from para to the nearest watershed bazar? </label>
                      <div class="row">
                        <!-- <div class="col-md-1"></div> -->
                        <div class ="col-md-10" id="radioDiv" style="margin: 0px 0px 0px 0px;">
                          <label class="control-label">(You can write multiple options) &nbsp;&nbsp;</label>
                          <label class="control-label">(1) Truck</label>
                          <label class="control-label">(2) Pickup Van</label>
                          <label class="control-label">(3) CNG</label>
                          <label class="control-label">(4) Boat </label>
                          <label class="control-label">(5) Head carrying</label>
                          <label class="control-label">(6) Others</label>
                        </div>
                      </div>

                      <div class="row">
                        <!-- <div class="col-md-1"></div> -->
                        <div class ="col-md-12" id="radioDiv" style="margin: 10px 0px 0px 0px;">
                          <textarea id="agro_forestry" name="agro_forestry" class="form-control" rows="3" placeholder="Please write like following example : For new line [shift+enter] &#10;1) Name &#10;2) Name &#10;3) Name \n "></textarea>
                        </div>
                      </div>

                      <div class="row">
                        <!-- <div class="col-md-9"></div> -->
                        <div class="col-md-3" style="margin: 20px 0px 10px 0px;">
                          <button type="submit" class="btn btn-primary" id="btn_store5" style="width: 100%;border-radius: 5px;color: black;">Save Info</button>
                        </div>  
                      </div>

                    </form>
                  </div>
                </div>    
                  
              <hr style="border-bottom: 2px solid black;">
              <div class="row">
                <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                  <a href="{{ route('View.Sanitation.Entry') }}" style="color: black;">
                    <button type="submit" class="btn btn-info" style="width: 100%;border-radius: 20px;">Previous : Societal Sanitation</button>
                  </a>
                </div>
                <div class="col-md-8"></div>
                <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                  <a href="{{ route('Water.Resources.Entry') }}">
                    <button type="submit" class="btn btn-info" style="color: black;width: 100%;border-radius: 20px;">Next : Water Resources</button>
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
<script src="{{ asset('scripts/societal_entry/accessibility_entry.js') }}"></script>
<!-- datepicker -->
<script src="{{ asset('plugins/datepicker/jquery-ui.js') }}"></script>

<script>

document.title = 'societal transport';

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
