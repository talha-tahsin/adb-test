


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
            <h1 class="m-0" style="font-family: Serif;">LULC validation in a watershed</h1>
          </div><!-- /.col -->

          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item" style="margin-right: 5px;"> 
                <h5><span>Go To : </span> <a href="{{ route('Data.Entry.Dashboard') }}"> Data Entry Dashboard </a> </h5>
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

              <!-- <form id="form_body" method="POST"> -->
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
                  
                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label validate" for="map_unit"><span style="color: red;">★&nbsp;</span>Map Unit</label>
                    <input type="text" name="map_unit" id="map_unit" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                  </div>

                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label validate" for="area_of_map_unit"><span style="color: red;">★&nbsp;</span>Area of Map Unit (acre)</label>
                    <input type="text" name="area_of_map_unit" id="area_of_map_unit" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                  </div>

                </div> 
                <!-- end row -->
              
                <hr style="border-bottom: 2px solid black;">
                <div class="row">
                  <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                    <h5>Table L1. LULC Ground Truth</h5>
                    <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table">
                      <thead>
                        <tr style="background-color: #8ed6f2;">
                          <th rowspan="2" style="text-align: center;">Serial</th>
                          <!-- <th rowspan="2" style="text-align: center;">Map Unit Code</th> -->
                          <th colspan="3" style="text-align: center;">Information of the GCP</th>
                          <th colspan="2" style="text-align: center;">Land Use and Land  Cover Information</th>
                          <th rowspan="2" style="text-align: center;">GCP Type</th>
                          <th rowspan="2" style="text-align: center;">Photo Id</th>
                          <th rowspan="2" style="text-align: left;">Share Google Drive Link</th>
                          <th rowspan="2" style="text-align: center;">Photo Aspect</th>
                          <th rowspan="2" style="text-align: center;">Action</th>
                        </tr>

                        <tr style="background-color: #d6eaf8;">
                          <th style="text-align:center;border-bottom: none;">Longitude, E</th>
                          <th style="text-align:center;border-bottom: none;">Latitude, N</th>
                          <th style="text-align:center;border-bottom: none;">Elevation (m)</th>
                          <th style="text-align:center;border-bottom: none;">Map LULC Class Code</th>
                          <th style="text-align:center;border-bottom: none;">Observed LULC Class Code</th>
                        </tr>
                      </thead>

                        <tbody id="table_body"></tbody>

                      </table>

                      <div class="row">
                      
                        <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                          <button type="submit" class="btn btn-secondary" id="add_row" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                        </div>
                        <div class="col-md-8"></div>
                        <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                          <button type="submit" class="btn btn-primary" id="btn_store1" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                        </div>  
                      </div>
                    <!-- </form> -->
                  </div>
                  <!-- end div col-md -->
                </div>
                <!-- end row  -->

                <!-- <hr style="border-bottom: 2px solid black;">
                <div class="row">
                  <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                    <h5>Table L2. LULC Ground Truth (2nd Round)</h5>
                    <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table2">
                      <thead>
                        <tr style="background-color: #8ed6f2;">
                          <th rowspan="2" style="text-align: center;">Serial</th>
                          <th colspan="3" style="text-align: center;">Information of the GCP</th>
                          <th colspan="2" style="text-align: center;">Land Use and Land  Cover Information</th>
                          <th rowspan="2" style="text-align: center;">GCP Type</th>
                          <th rowspan="2" style="text-align: center;">Photo Id</th>
                          <th rowspan="2" style="text-align: left;">Share Google Drive Link</th>
                          <th rowspan="2" style="text-align: center;">Photo Aspect</th>
                          <th rowspan="2" style="text-align: center;">Action</th>
                        </tr>

                        <tr style="background-color: #d6eaf8;">
                          <th style="text-align:center;border-bottom: none;">Longitude, E</th>
                          <th style="text-align:center;border-bottom: none;">Latitude, N</th>
                          <th style="text-align:center;border-bottom: none;">Elevation (m)</th>
                          <th style="text-align:center;border-bottom: none;">Map LULC Class Code</th>
                          <th style="text-align:center;border-bottom: none;">Observed LULC Class Code</th>
                        </tr>
                      </thead>

                        <tbody id="table_body"></tbody>

                      </table>

                      <div class="row">
                      
                        <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                          <button type="submit" class="btn btn-secondary" id="add_row2" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                        </div>
                        <div class="col-md-8"></div>
                        <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                          <button type="submit" class="btn btn-primary" id="btn_store2" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                        </div>  
                      </div>
                 
                  </div>
                
                </div> -->
                <!-- end row  -->

                <hr style="border-bottom: 2px solid black;">
                <div class="row">

                  <!-- <div class="col-md-2" style="margin: 20px 0px 30px 0px;">
                    <a href="{{ route('VCF.Boundary.Basic.Info') }}" style="color: black;">
                      <button type="submit" class="btn btn-info" style="width: 100%;border-radius: 5px;">Previous : VCF Basic Info</button>
                    </a>
                  </div> -->

                  <div class="col-md-10"></div>

                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <a href="{{ route('Land.Degradation') }}">
                      <button type="submit" class="btn btn-info" style="color: black;width: 100%;border-radius: 20px;">Next : Land Degradation</button>
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
        <button type="button" id="btn_close" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
<script src="{{ asset('scripts/lulc_validation/lulc_validation_survey.js') }}"></script>
<!-- datepicker -->
<script src="{{ asset('plugins/datepicker/jquery-ui.js') }}"></script>

<script>

document.title = 'lulc-validation-survey';

$(document).ready(function () {

    console.log("hello talha23..");
    
    var userNm = $('#userName').val();

    $.ajax({
      url: "/get_active_map_unit",
      type: "GET",
      data: { 'userNm' : userNm },
      dataType: "json",
      cache: false,
      success: function (data) {
          // console.log(data);
        $.each(data.message, function (i, v) {
            $('#watershed_id').val(v.watershed_id);
            $('#watershed_name').val(v.watershed_name);
            $('#map_unit').val(v.map_unit);
            $('#area_of_map_unit').val(v.areaOf_map_unit);
        });
            
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });


});


</script> 

@endsection
