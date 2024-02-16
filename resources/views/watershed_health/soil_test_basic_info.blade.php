


@extends('layouts.pages.master')

@section('current_page_css')
<!-- datepicker -->
<link rel="stylesheet" href="{{ asset('plugins/datepicker/css/jquery-ui-1.9.2.custom.min.css') }}">
<!-- dataTables -->
<link rel="stylesheet" href="{{ asset('plugins/datatables-bs4/css/dataTables.bootstrap4.min.css') }}">
<link rel="stylesheet" href="{{ asset('plugins/datatables-responsive/css/responsive.bootstrap4.min.css') }}">
<link rel="stylesheet" href="{{ asset('plugins/datatables-buttons/css/buttons.bootstrap4.min.css') }}">

@endsection

@section('content')

<!-- Content Header (Page header) -->
    <div class="content-header" style="margin: 0px 0px -15px 0px;">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0" style="font-family: Serif;">Soil Test Basic Info </h1>
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

              <form id="form_body" method="POST">
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
                </div> 
                <!-- end row -->

                <hr style="border-bottom: 2px solid black;">

                <div class="row">
                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label validate" for="para_name"><span style="color: red;">★&nbsp;</span>Para Name</label>
                    <select id="para_name" name="para_name" class="custom-select form-control initialSelectVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;" > 
                    </select>
                  </div> 
                  
                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>District</label>
                    <select id="district" name="district" class="custom-select form-control initialSelectVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;" > 
                    </select>
                  </div> 

                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Upazila</label>
                    <select id="upazila" name="upazila" class="custom-select form-control initialSelectVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;" > 
                    </select>
                  </div>
                  
                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Union</label>
                    <select id="union" name="union" class="custom-select form-control initialSelectVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;" > 
                    </select>
                  </div>                            
                        
                </div>
                <!-- end row -->

                <hr style="border-bottom: 2px solid black;">

                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th rowspan="2" style="text-align: left;">Sample Collection Date</th>
                      <th rowspan="2" style="text-align: left;">Sample Collection Time</th>
                      <th rowspan="2" style="text-align: left;">Soil Sample ID</th>
                      <th rowspan="2" style="text-align: left;">Name of Farmer/Forester</th>
                      <th rowspan="2" style="text-align: left;">Cell No of Farmer/Forester</th>
                      <th colspan="2" style="text-align: center;">Sample Location</th>
                    </tr>
                    <tr style="background-color: #99ccff;">
                      <th style="text-align:center;border-bottom: none;">Longitude, X (Easting)</th>
                      <th style="text-align:center;border-bottom: none;">Latitude, Y (Northing)</th>
                    </tr>
                  </thead>

                  <tbody id="table_body">

                    <tr>
                      <td style="text-align: center;width: 10%"><input type="text" id="collection_date" name="collection_date" class="form-control date" placeholder="Write collection date"></td> 
                      <td style="text-align: center;width: 10%"><input type="text" id="collection_time" name="collection_time" class="form-control" placeholder="Write like 12:10 Am"></td> 
                      <td style="text-align: center;width: 10%"><input type="text" id="soil_sample_id" name="soil_sample_id" class="form-control" placeholder="0"></td>
                      <td style="text-align: center;width: 10%"><input type="text" id="farmer_name" name="farmer_name" class="form-control" placeholder="Write farmar name"></td>
                      <td style="text-align: center;width: 10%"><input type="text" id="farmer_cell_no" name="farmer_cell_no" class="form-control" placeholder="0"></td>

                      <td style="text-align: center;width: 10%"><input type="text" id="longitude" name="longitude" class="form-control" placeholder="0"></td>
                      <td style="text-align: center;width: 10%"><input type="text" id="latitude" name="latitude" class="form-control" placeholder="0"></td>
                    </tr>

                  </tbody>

                </table>

                <div class="row">
                  <div class="col-md-10"></div>
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-primary" id="btn_store" style="width: 100%;border-radius: 5px;color: black;">Save Info Details </button>
                  </div>
                </div>
              </form> 

                <hr style="border-bottom: 2px solid black;">
                <div class="col-md-12">
                <label class="control-label"><span style="color: green;">★&nbsp;</span> 
                  Show All Soil Test list according to avobe watershed:
                </label>

                  <input type="hidden" name="userName" id="userName" value="{{ Auth::user()->name }}"/>
                  <input type="hidden" name="watershed_id" id="watershed_id" value=""/>
                  <input type="hidden" name="watershed_name" id="watershed_name" value=""/>
                  
                <table width="100%" class="table table-bordered table-striped datatable dtr-inline" id="my_table2">
                  <thead>
                    <tr style="background-color: #6bbfd9;">
                      <th style="text-align: center;width: 5%;">Serial</th>
                      <!-- <th style="text-align: center;width: 6%;">Survey Date</th> -->
                      <th style="text-align: center;width: 5%;">Watershed Id</th>
                      <th style="text-align: left;width: 8%;">Watershed Name</th>
                      <th style="text-align: left;width: 8%;">Para Name</th>
                      <th style="text-align: center;width: 6%;">Soil Sample ID</th>
                      <th style="text-align: center;width: 6%;">Farmer Name</th>
                      <th style="text-align: center;width: 6%;">Farmer Cell No</th>
                      <th style="text-align: center;width: 8%;">Longitude, X (Easting)</th>
                      <th style="text-align: center;width: 8%;">Latitude, Y (Northing)</th>
                      <th style="text-align: center;width: 6%;">Edit Basic Info</th>
                      <th style="text-align: center;width: 6%;">Action</th>
                    </tr>
                  </thead>
                
                  <tbody id="table_body2"></tbody>

                </table>

              </div>
                <!-- <div class="row">
                  <div class="col-md-12" style="margin: 10px 0px 10px 0px;">

                    <div class="row">
                      <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <label class="control-label validate" for="jhum_male">
                        <span style="color: red;">★&nbsp;</span>Soil Depth (cm)</label>
                        <input type="text" name="soil_depth" id="soil_depth" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this field">
                      </div>
                      <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <label class="control-label validate" for="jhum_male">
                        <span style="color: red;">★&nbsp;</span>Inundation depth (cm)</label>
                        <input type="text" name="inundation_depth" id="inundation_depth" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Write when normal flooding">
                      </div>
                      
                      <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <label class="control-label validate" for="land_form">
                      <span style="color: red;">★&nbsp;</span>Land Form </label>
                        <select id="land_form" name="land_form" class="form-control initialSelectBoxVal" style="border-radius: 5px;border:2px solid #898AEE;">
                          <option value="" selected disabled>Select Option</option>
                          <option value="Hill Top">Hill Top</option>
                          <option value="Valley">Valley</option>
                          <option value="Low Lying Flat Land">Low Lying Flat Land</option>
                          <option value="Sloping Land">Sloping Land</option>
                        </select>
                      </div> 
                      
                      <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <label class="control-label validate" for="jhum_male">
                        <span style="color: red;">★&nbsp;</span>Land Type (tbf by CEGIS)</label>
                        <input type="text" name="land_type" id="land_type" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this field">
                      </div>

                      <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                        <label class="control-label validate" for="any_remarks"><span style="color: red;">★&nbsp;</span>Any Remarks</label>
                        <textarea class="form-control initialval" id="any_remark" name="any_remark" rows="2" style="resize: vertical; border: 2px solid #898AEE;border-radius: 5px;" placeholder="Please write something"></textarea>
                      </div>

                      <div class="col-md-2" style="margin: 40px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store" style="width: 100%;border-radius: 5px;color: black;">Save Details Info</button>
                      </div>

                    </div>
                                          
                
                  </div>
                </div> -->
                <!-- end main row -->

            </form>

    
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
<script src="{{ asset('scripts/watershed_health/soil_test_basic_info.js') }}"></script>
<!-- datepicker -->
<script src="{{ asset('plugins/datepicker/jquery-ui.js') }}"></script>
<!-- DataTables  & Plugins -->
<script src="{{ asset('plugins/datatables/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-responsive/js/dataTables.responsive.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-responsive/js/responsive.bootstrap4.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-buttons/js/dataTables.buttons.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-buttons/js/buttons.bootstrap4.min.js') }}"></script>

<script>

document.title = 'soil test basic info';

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
                // $('#para_id').val(v.para_id);
                // $('#para_name').val(v.para_name);
            });
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });

    $.ajax({
        url: "/get_district_name",
        type: "GET",
        data: { 'userNm' : 'get_data' },
        dataType: "html",
        cache: false,
        success: function (data) {
            console.log(data);
            $('#district').html(data);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });


});

</script>

@endsection
