


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
            <h1 class="m-0" style="font-family: Serif;">Para Ecosystem and Biodiversity (Outside the VCF) </h1>
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
                <div class="row">
                  
                  <div class="col-md-8" style="margin: 0px 0px 10px 0px;">
                    <h5>(1)	E1. Status of terrestrial ecosystem </h5>
                      <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table1">
                          <thead>  
                            <tr style="background-color: #8ed6f2;">
                              <th style="text-align: center;">Serial</th>
                              <th style="text-align: left;">Habitat type</th>
                              <th style="text-align: center;">Vegetation density present status</th>
                              <th style="text-align: center;">Past status  (10 years ago)</th>
                              <th style="text-align: center;">Reasons for degradation/improvement</th>
                              <th style="text-align: left;">Action</th>
                            </tr>
                          </thead>

                          <tbody id="table_body"></tbody>

                      </table>

                      <div class="row">
                        <div class="col-md-9"></div>
                        <div class="col-md-3" style="margin: 10px 0px 10px 0px;">
                            <button type="submit" class="btn btn-primary" id="btn_store1" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                        </div>
                      </div>
      
                  </div>
                  <!-- end col-md -->

                </div>
                <!-- end row -->
                
                <!-- table: 2 -->
                <hr style="border-bottom: 2px solid teal;">
                <div class="col-md-8" style="margin: 0px 0px 10px 0px;">
                  <h5>(2)	E2. Abundance and production economics </h5>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table2">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th rowspan="2" style="text-align: center;">Serial</th>
                        <th rowspan="2" style="text-align: left;">Species Category </th>
                        <th rowspan="2" style="text-align: left;">Presence of Floral species (major 3 in each category)</th>
                        <th rowspan="2" style="text-align: left;">Abundance </th>
                        <th rowspan="2" style="text-align: left;">Production cost / acre after 1st rotation (tk/acre)</th>
                        <th colspan="3" style="text-align: center;">Economics of Production</th>
                        <th rowspan="2" style="text-align: center;">Action</th>
                      </tr>
                      <tr style="background-color: #99ccff;">
                        <th style="text-align: center;">Yield (gora/acre)</th>
                        <th style="text-align: center;">Selling price (tk/acre)</th>
                        <th style="text-align: center;">Profit (tk/acre)</th>
                      </tr>
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-info" id="add_row2" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                      </div>
                      <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store2" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>
                  </div>

                </div>
                <!-- end div col -->

                <!-- table: 3 -->
                <hr style="border-bottom: 2px solid gray;">
                <div class="col-md-8" style="margin: 0px 0px 10px 0px;">
                  <h5>(3)	Abundance of wildlife in and around the Para </h5>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table3">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th rowspan="2" style="text-align: center;">Serial</th>
                        <th rowspan="2" style="text-align: left;">Wildlife often seen in the locality or Para</th>
                        <th colspan="3" style="text-align: center;">Present Abundance</th>
                        <th rowspan="2" style="text-align: left;">Other Name</th>
                        <th rowspan="2" style="text-align: left;">Action</th>
                      </tr>
                      <tr style="background-color: #99ccff;">
                        <th style="text-align: center;">High</th>
                        <th style="text-align: center;">Medium</th>
                        <th style="text-align: center;">Low</th>
                      </tr>
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-info" id="add_row3" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                      <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store3" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>
                  </div>

                </div>
                <!-- end div col-6 -->

                <!-- table: 4 -->
                <hr style="border-bottom: 2px solid  black;">
                <div class="col-md-8" style="margin: 0px 0px 10px 0px;">
                  <h5>(4)	E4. Status of aquatic habitats </h5>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table4">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th style="text-align: center;">Serial</th>
                        <th style="text-align: left;">Habitat type</th>
                        <th style="text-align: center;">Nos. of Habitat Presence in the Para</th>
                        <th style="text-align: left;">Overall status of habitat than previous 10 years</th>
                        <th style="text-align: left;">Reasons for degradation/improvement</th>
                        <th style="text-align: left;">Others Name</th>
                        <th style="text-align: left;">Action</th>
                      </tr>
                      <!-- <tr style="background-color: #99ccff;">
                        <th style="text-align:center;border-bottom: none;">less than 5%</th>
                        <th style="text-align:center;border-bottom: none;">5-15%</th>
                        <th style="text-align:center;border-bottom: none;">15-30%</th>
                        <th style="text-align:center;border-bottom: none;">30% or above</th>
                      </tr> -->
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-info" id="add_row4" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                    <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store4" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>
                  </div>

                </div>
                <!-- end div col-6 -->

                <!-- table : 5 -->
                <hr style="border-bottom: 2px solid  teal;">
                <div class="col-md-8" style="margin: 0px 0px 10px 0px;">
                  <h5>(5.1)	Aquatic Vegetation (Flora) species [ List bangla name of 5 major species]</h5>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table5">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th style="text-align: center;">Serial</th>
                        <th style="text-align: left;">Aquatic Vegetation (Flora)</th>
                        <th style="text-align: left;">Present Status</th>
                        <th style="text-align: center;">Past Status (10 years ago)</th>
                        <th style="text-align: left;">Others Aquatic name</th>
                        <th style="text-align: left;">Action</th>
                      </tr>
                      <!-- <tr style="background-color: #99ccff;">
                        <th style="text-align: center;">Feed</th>
                        <th style="text-align: center;">Farming shed</th>
                        <th style="text-align: center;">Graze in the wilderness</th>
                        <th style="text-align: center;">Others</th>
                      </tr> -->
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-info" id="add_row5" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                    <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store5" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>
                  </div>

                </div>
                <!-- end div col-6 -->

                <!-- table : 6 -->
                <hr style="border-bottom: 2px solid  teal;">
                <div class="col-md-8" style="margin: 0px 0px 10px 0px;">
                  <h5>(5.2)	Aquatic Fauna species [ List bangla name of 5 major species]</h5>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table6">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th style="text-align: center;">Serial</th>
                        <th style="text-align: left;">Aquatic Fauna</th>
                        <th style="text-align: left;">Present Status</th>
                        <th style="text-align: center;">Past Status (10 years ago)</th>
                        <th style="text-align: left;">Others Aquatic name</th>
                        <th style="text-align: left;">Action</th>
                      </tr>
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-info" id="add_row6" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                    <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store6" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>
                  </div>

                </div>
                <!-- end div col-6 -->

              <hr style="border-bottom: 2px solid teal;">
              <div class="row">
                <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                  <a href="{{ route('Entry.Fisheries') }}" style="color: black;">
                    <button type="submit" class="btn btn-success" style="width: 100%;border-radius: 20px;">Previous : Fisheries</button>
                  </a>
                </div>
                <div class="col-md-8"></div>
                <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                  <a href="{{ route('Village.Common.Forest') }}">
                    <button type="submit" class="btn btn-success" style="color: black;width: 100%;border-radius: 20px;">Next : Baseline Forest</button>
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
<script src="{{ asset('scripts/ecology/para_ecosystem.js') }}"></script>
<!-- datepicker -->
<script src="{{ asset('plugins/datepicker/jquery-ui.js') }}"></script>

<script>

document.title = 'para ecosysteam';

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
