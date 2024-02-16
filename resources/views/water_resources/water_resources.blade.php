


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
            <h1 class="m-0" style="font-family: Calibri;">Water Resources </h1>
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
              
                <hr style="border-bottom: 2px solid black;">
                <div class="row">
                  <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                    <h5> (1) Basic information of available waterbodies inside the Para </h5>
                    <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table1">
                      <thead>
                        <tr style="background-color: #8ed6f2;">
                          <th rowspan="2" style="text-align: center;">Serial</th>
                          <th rowspan="2" style="text-align: center;">Type</th>
                          <th rowspan="2" style="text-align: center;">Name</th>
                          <th colspan="2" style="text-align: left;">Location</th>
                          <th rowspan="2" style="text-align: center;">Source</th>
                          <th rowspan="2" style="text-align: center;">Outlet</th>
                          <th rowspan="2" style="text-align: center;">Distance from para center (km)</th>
                          <th rowspan="2" style="text-align: center;">Current Status</th>
                          <th colspan="2" style="text-align: center;">Average water depth(ft)</th>
                          <th colspan="5" style="text-align: center;">Purpose of use</th>
                          <th rowspan="2" style="text-align: center;">Action</th>
                        </tr>
                        <tr style="background-color: #99ccff;">
                          <th style="text-align:center;border-bottom: none;">Longitude, X (E)</th>
                          <th style="text-align:center;border-bottom: none;">Latitude, Y (N)</th>

                          <th style="text-align:center;border-bottom: none;">Dry Season</th>
                          <th style="text-align:center;border-bottom: none;">Wet Season</th>

                          <th style="text-align:center;border-bottom: none;">Drinking</th>
                          <th style="text-align:center;border-bottom: none;">Domestic</th>
                          <th style="text-align:center;border-bottom: none;">Irrigation</th>
                          <th style="text-align:center;border-bottom: none;">Cattle feeding</th>
                          <th style="text-align:center;border-bottom: none;">Others</th>
                        </tr>
                      </thead>

                        <tbody id="table_body"></tbody>

                    </table>

                    <div class="row">
                      <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                        <button type="submit" class="btn btn-success" id="add_row" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                      </div>
                      <div class="col-md-8"></div>
                      <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store" style="width: 100%;border-radius: 5px;color: black;">Save Details Info</button>
                      </div>
                    </div>

                  </div>
                  <!-- end col-md-12 -->

                </div>
                <!-- end of row -->

              <hr style="border-bottom: 2px solid black;">
              <div class="row">
                <div class="col-md-8" style="margin: 10px 0px 10px 0px;">

                  <label class="control-label">
                   (2) What are the current practice of conservation measures (major 3) for water resources/waterbodies management?
                  </label>

                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table2">
                      <thead>
                        <tr style="background-color: #8ed6f2;">
                          <th  style="text-align: center;">Serial</th>
                          <th  style="text-align: center;">Siltation Management</th>
                          <th  style="text-align: center;">Erosion Management</th>
                          <th  style="text-align: center;">Pollution Management</th>
                          <th  style="text-align: center;">Flood & drainage management</th>
                          <th  style="text-align: center;">Drought Management</th>
                          <th  style="text-align: center;">Encroachment Management</th>
                          <th  style="text-align: center;">Action</th>
                        </tr>
                      </thead>

                      <tbody id="table_body"></tbody>

                  </table>

                  <div class="row">
                    <!-- <div class="col-md-6"></div> -->
                      <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                        <button type="submit" class="btn btn-success" id="add_row2" style="width: 100%;border-radius: 5px;color: black;">Add More Row </button>
                      </div>
                      <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                        <button type="submit" class="btn btn" id="add_other" style="width: 100%;border-radius: 5px;color: black;background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 51%, #ffecd2 100%);">
                          Add Others
                        </button>
                      </div>
                      <div class="col-md-6"></div>
                      <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store2" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                      </div>  
                    </div>

                    <div class="col-md-12 hide" style="margin: 0px 0px 0px 0px;" id="otherDiv">
                      <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="myTableOther">
                        <thead>
                          <tr style="background-color: #8ed6f2;">
                            <th  style="text-align: center;">Serial</th>
                            <th  style="text-align: center;">Siltation Management</th>
                            <th  style="text-align: center;">Erosion Management</th>
                            <th  style="text-align: center;">Pollution Management</th>
                            <th  style="text-align: center;">Flood & drainage management</th>
                            <th  style="text-align: center;">Drought Management</th>
                            <th  style="text-align: center;">Encroachment Management</th>
                          </tr>
                        </thead>

                        <tbody id="table_body"></tbody>

                      </table>

                      <div class="row">
                        <div class="col-md-10"></div>
                        <div class="col-md-2" style="margin: 5px 0px 5px 0px;">
                          <button type="submit" class="btn btn" id="btn_other2" style="width: 100%;border-radius: 5px;background-image: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 51%, #a1c4fd 100%);background-color: #196BCA;color: black;">
                            Save for Other
                          </button>
                        </div>  
                      </div>

                    </div>

                </div>
              </div>
              <!-- 3rd table -->
              <hr style="border-bottom: 2px solid black;">
              <div class="row">
                <div class="col-md-8" style="margin: 10px 0px 10px 0px;">

                  <label class="control-label">(3) What are the recommended conservation measures (major 3) for water resources management? </label>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table3">
                      <thead>
                        <tr style="background-color: #8ed6f2;">
                          <th  style="text-align: center;">Serial</th>
                          <th  style="text-align: center;">Siltation Management</th>
                          <th  style="text-align: center;">Erosion Management</th>
                          <th  style="text-align: center;">Pollution Management</th>
                          <th  style="text-align: center;">Flood & drainage management</th>
                          <th  style="text-align: center;">Drought Management</th>
                          <th  style="text-align: center;">Encroachment Management</th>
                          <th  style="text-align: center;">Action</th>
                        </tr>
                      </thead>

                      <tbody id="table_body"></tbody>

                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                      <button type="submit" class="btn btn-success" id="add_row3" style="width: 100%;border-radius: 5px;color: black;">Add More Row </button>
                    </div>
                    <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                      <button type="submit" class="btn btn" id="add_other3" style="width: 100%;border-radius: 5px;color: black;background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 51%, #ffecd2 100%);">
                        Add Others
                      </button>
                    </div>
                    <div class="col-md-6"></div>
                    <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store3" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>  
                  </div>

                  <div class="col-md-12 hide" style="margin: 0px 0px 0px 0px;" id="otherDiv2">
                      <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="myTableOther3">
                        <thead>
                          <tr style="background-color: #8ed6f2;">
                            <th  style="text-align: center;">Serial</th>
                            <th  style="text-align: center;">Siltation Management</th>
                            <th  style="text-align: center;">Erosion Management</th>
                            <th  style="text-align: center;">Pollution Management</th>
                            <th  style="text-align: center;">Flood & drainage management</th>
                            <th  style="text-align: center;">Drought Management</th>
                            <th  style="text-align: center;">Encroachment Management</th>
                          </tr>
                        </thead>

                        <tbody id="table_body"></tbody>

                      </table>

                      <div class="row">
                        <div class="col-md-10"></div>
                        <div class="col-md-2" style="margin: 5px 0px 5px 0px;">
                          <button type="submit" class="btn btn" id="btn_other3" style="width: 100%;border-radius: 5px;background-image: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 51%, #a1c4fd 100%);background-color: #196BCA;color: black;">
                            Save for Other
                          </button>
                        </div>  
                      </div>

                    </div>

                </div>
              </div>

              <hr style="border-bottom: 2px solid black;">
                <div class="row">
                  <div class="col-md-6" style="margin: 0px 0px 10px 0px;">
                    <form id="my_form" method="POST">
                      <h5>(4)	Any other recommendation to improve water availability during dry season? </h5>

                      <div class="row">
                        <!-- <div class="col-md-1"></div> -->
                        <div class ="col-md-12" id="radioDiv" style="margin: 10px 0px 0px 0px;">
                          <textarea id="water_improve_recommendation" name="water_improve_recommendation" class="form-control" rows="3" placeholder="Please write like following example : For new line [shift+enter] &#10;1) Name &#10;2) Name &#10;3) Name \n "></textarea>
                        </div>
                      </div>

                      <div class="row">
                        <!-- <div class="col-md-9"></div> -->
                        <div class="col-md-3" style="margin: 20px 0px 10px 0px;">
                          <button type="submit" class="btn btn-primary" id="btn_store4" style="width: 100%;border-radius: 5px;color: black;">Save Info</button>
                        </div>  
                      </div>

                    </form>
                  </div>

                  <div class="col-md-6" style="margin: 0px 0px 10px 0px;">
                  </div>

                </div>

              <hr style="border-bottom: 2px solid black;">
              <div class="row">
                <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                  <a href="{{ route('View.Accessibility.Entry') }}" style="color: black;">
                    <button type="submit" class="btn btn-info" style="width: 100%;border-radius: 20px;">Previous : Transport</button>
                  </a>
                </div>
                <div class="col-md-8"></div>
                <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                  <a href="{{ route('Entry.Agriculture') }}">
                    <button type="submit" class="btn btn-info" style="color: black;width: 100%;border-radius: 20px;">Next : Baseline Agriculture</button>
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
<script src="{{ asset('scripts/water_resources/water_resources.js') }}"></script>
<!-- datepicker -->
<script src="{{ asset('plugins/datepicker/jquery-ui.js') }}"></script>

<script>

document.title = 'water resources';

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
