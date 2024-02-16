


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
            <h1 class="m-0" style="font-family: Serif;">Section B5.	Fisheries and Aquaculture</h1>
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
                  
                  <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                    <h5>(1)	Capture Fisheries </h5>
                      <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table1">
                          <thead>  
                            <tr style="background-color: #8ed6f2;">
                              <th rowspan="2" style="text-align: center;">Serial</th>
                              <th rowspan="2" style="text-align: left;">Types of water body</th>
                              <th rowspan="2" style="text-align: left;">Name</th>
                              <th colspan="2" style="text-align: center;">Habitat condition (Present)</th>
                              <th colspan="2" style="text-align: center;">Habitat condition (5 yrs ago)</th>
                              <th colspan="2" style="text-align: center;">Habitat condition (10 yrs ago)</th>
                              <th rowspan="2" style="text-align: left;">Pollution sources (if any)</th>
                              <th rowspan="2" style="text-align: left;">Consequences of pollution</th>
                              <th rowspan="2" style="text-align: left;">Reason of changes of habitat condition</th>
                              <th rowspan="2" style="text-align: left;">Adaptive measures</th>
                              <th rowspan="2" style="text-align: left;">Action</th>
                            </tr>
                            <tr style="background-color: #99ccff;">
                              <th style="text-align: center;">Months of Water Availability</th>
                              <th style="text-align: center;">Avg. Depth (ft)</th>
                              <th style="text-align: center;">Months of Water Availability</th>
                              <th style="text-align: center;">Avg. Depth (ft)</th>
                              <th style="text-align: center;">Months of Water Availability</th>
                              <th style="text-align: center;">Avg. Depth (ft)</th>
                            </tr>
                          </thead>

                          <tbody id="table_body"></tbody>

                      </table>

                      <div class="row">
                        <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                          <button type="submit" class="btn btn-secondary" id="add_row" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                        </div>
                        <div class="col-md-8"></div>
                        <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                            <button type="submit" class="btn btn-primary" id="btn_store1" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                        </div>
                      </div>

                      <p style="margin: 0px 0px 0px 0px;"><strong>Noted:</strong></p>
                      <p style="margin: 0px 0px 0px 0px;"># Type of waterbody: River, Chhara, Open water Lake, Beel, Jhiri </p>
                      <p style="margin: 0px 0px 0px 0px;"># Months of water availability: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec</p>
                      <p style="margin: 0px 0px 0px 0px;"># Pollution Sources: (a) Agro-chemical (b) industrial waste (c) flash flood (d) decomposition due to excessive rainfall/heat (e) domestic waste </p>
                      <p style="margin: 0px 0px 0px 0px;"># Consequences of Pollution: (a) suffocation (b) fish disease (c) fish death (d) others </p>
                      <p style="margin: 0px 0px 0px 0px;"># Adaptive Measure: Example: Re-excavation of river/stream/Chhara/Lake etc, Plantation of trees, construction of deep pool, stop illegal dumping of waste etc </p>

      
                  </div>
                  <!-- end col-md -->

                </div>
                <!-- end row -->
                
                <!-- table: 2 -->
                <hr style="border-bottom: 2px solid teal;">
                <div class="col-md-10" style="margin: 0px 0px 10px 0px;">
                  <h5>(2)	Fish biodiversity and composition (in terms of per kg weight from each fish habitat) </h5>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table2">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th rowspan="2" style="text-align: center;">Serial</th>
                        <th colspan="2" style="text-align: center;">River</th>
                        <th colspan="2" style="text-align: center;">Stream/Chhara</th>
                        <th colspan="2" style="text-align: center;">Lake</th>
                        <th colspan="2" style="text-align: center;">Beel</th>
                        <th rowspan="2" style="text-align: center;">Action</th>
                      </tr>
                      <tr style="background-color: #99ccff;">
                        <th style="text-align: center;">Species</th>
                        <th style="text-align: center;">Composition (fraction of 1 kg)</th>
                        <th style="text-align: center;">Species</th>
                        <th style="text-align: center;">Composition (fraction of 1 kg)</th>
                        <th style="text-align: center;">Species</th>
                        <th style="text-align: center;">Composition (fraction of 1 kg)</th>
                        <th style="text-align: center;">Species</th>
                        <th style="text-align: center;">Composition (fraction of 1 kg)</th>
                      </tr>
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>

                  <div class="row hide" id="others_row"> 
                    <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                      <label class="control-label"><span style="color: red;">★&nbsp;</span>Others Name</label> 
                      <input type="text" name="others_name" id="others_name" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up..">
                    </div> 
                    <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                      <label class="control-label"><span style="color: red;">★&nbsp;</span>Species</label>
                      <input type="text" name="others_species" id="others_species" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up..">
                    </div>
                  
                    <input type="hidden" name="para_id" id="para_id" value=""/>
                    <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                      <label class="control-label"><span style="color: red;">★&nbsp;</span>Composition (fraction of 1 kg)</label>
                      <input type="text" name="others_compositiion" id="others_compositiion" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up..">
                    </div> 
                  </div> 

                  <div class="row">
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-secondary" id="add_row2" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                    <!-- <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-info" id="add_others" style="width: 100%;border-radius: 5px;color: black;">Add Others</button>
                    </div> -->
                    <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store2" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>
                  </div>

                </div>
                <!-- end div col -->

                <!-- table: 3 -->
                <hr style="border-bottom: 2px solid gray;">
                <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                  <h5>(3)	Threatened fish species  </h5>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table3">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th rowspan="2" style="text-align: center;">Serial</th>
                        <th rowspan="2" style="text-align: left;">Name of species</th>
                        <th colspan="5" style="text-align: center;">Available in which Habitat</th>
                        <th colspan="3" style="text-align: center;">Abundance</th>
                        <th rowspan="2" style="text-align: center;">Reasons of Change (Decreased only)</th>
                        <th rowspan="2" style="text-align: left;">Action</th>
                      </tr>
                      <tr style="background-color: #99ccff;">
                        <th style="text-align: center;">River</th>
                        <th style="text-align: center;">Stream/Chhara</th>
                        <th style="text-align: center;">Beel</th>
                        <th style="text-align: center;">Lake</th>
                        <th style="text-align: center;">Other</th>
                        <th style="text-align: center;">Present</th>
                        <th style="text-align: center;">5 years ago</th>
                        <th style="text-align: center;">10 years ago</th>
                      </tr>
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-secondary" id="add_row3" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                      </div>
                      <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 20px 0px 30px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store3" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>
                  </div>

                  <p style="margin: 0px 0px 0px 0px;"><strong>Noted:</strong></p>
                  <p style="margin: 0px 0px 0px 0px;"># Abundance: 1. Common; 2. Frequent; 3. Rare</p>
                  <p style="margin: 0px 0px 0px 0px;"># Reason of change: 1. Siltation 2. Pollution 3. Use of destructive fishing gear 4. Water unavailability 5. Over harvesting 6. Flash floods 7. Others</p>

                </div>
                <!-- end div col-6 -->

                <!-- table: 4 -->
                <hr style="border-bottom: 2px solid  black;">
                <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                  <h5>(4)	Fishing Method and Appliance (Gears)</h5>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table4">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th rowspan="2" style="text-align: center;">Serial</th>
                        <th rowspan="2" style="text-align: left;">Name of gears</th>
                        <th colspan="2" style="text-align: center;">Gear size (feet)</th>
                        <th rowspan="2" style="text-align: left;">Mesh size (inch)</th>
                        <th rowspan="2" style="text-align: left;">Fishing Habitat (river/beel/lake etc)</th>
                        <th rowspan="2" style="text-align: left;">Depth (ft) of operation</th>
                        <th rowspan="2" style="text-align: left;">Fishing time (minutes/day)</th>
                        <th rowspan="2" style="text-align: left;">Gear Use Seasion (from - to -)</th>
                        <th rowspan="2" style="text-align: left;">Nos. of Persons Required to Operate</th>
                        <th rowspan="2" style="text-align: left;">Haul duration (hour)</th>
                        <th colspan="3" style="text-align: left;">Average catch (Kg/Day)</th>
                        <th rowspan="2" style="text-align: left;">Action</th>
                      </tr>
                      <tr style="background-color: #99ccff;">
                        <th style="text-align:center;border-bottom: none;">Length</th>
                        <th style="text-align:center;border-bottom: none;">Width</th>
                        <th style="text-align:center;border-bottom: none;">Present</th>
                        <th style="text-align:center;border-bottom: none;">5 yrs ago</th>
                        <th style="text-align:center;border-bottom: none;">10 yrs ago</th>
                      </tr>
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-secondary" id="add_row4" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
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
                  <h5>(5)	Fish Diseases</h5>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table5">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th style="text-align: center;">Serial</th>
                        <th style="text-align: left;">Host fish species</th>
                        <th style="text-align: left;">Disease name</th>
                        <th style="text-align: left;">Syndrome</th>
                        <th style="text-align: left;">Season</th>
                        <th style="text-align: left;">Reason</th>
                        <th style="text-align: left;">Action</th>
                      </tr>
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-secondary" id="add_row5" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                    <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store5" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>
                  </div>

                  <p style="margin: 0px 0px 0px 0px;"><strong>Noted:</strong></p>
                  <p style="margin: 0px 0px 0px 0px;"># Reason: 1. Increasing temperature, 2. Severe cold, 3. Excessive rainfall, 4. Pollution, 5. Others (if specify)</p>

                </div>
                <!-- end div col-6 -->

                <!-- table : 6 -->
                <hr style="border-bottom: 2px solid  teal;">
                <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                  <h5>(6)	Fisheries Management </h5>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table6">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th style="text-align: center;">Serial</th>
                        <th style="text-align: left;">Type of water body</th>
                        <th style="text-align: left;">Name</th>
                        <th style="text-align: left;">Type of management Measures Implementation (if any)</th>
                        <th style="text-align: left;">Coordinates management Measures Implementation (if any) [X,Y]</th>
                        <th style="text-align: center;">Area (acre) of the site</th>
                        <th style="text-align: left;">Management approach</th>
                        <th style="text-align: left;">Management activity</th>
                        <th style="text-align: left;">Management challenges</th>
                        <th style="text-align: left;">Action</th>
                      </tr>
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-secondary" id="add_row5" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                    <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store6" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>
                  </div>

                </div>
                <!-- end div col-6 -->

                <!-- table: 07 -->
                <hr style="border-bottom: 2px solid teal;">
                <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                  <h5>(7)	Aquaculture </h5>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table7">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th rowspan="2" style="text-align: center;">Serial</th>
                        <th rowspan="2" style="text-align: left;">Water body type</th>
                        <th rowspan="2" style="text-align: center;">Source of water</th>
                        <th colspan="3" style="text-align: center;">Time of Water Availability (months name)</th>
                        <th colspan="2" style="text-align: center;">Water depth (foot)</th>
                        <th rowspan="2" style="text-align: left;">Aquaculture type</th>
                        <th rowspan="2" style="text-align: left;">Technology used</th>
                        <th rowspan="2" style="text-align: left;">Aquaculture species</th>
                        <th rowspan="2" style="text-align: left;">Feed used (name and quantity in kg)</th>
                        <th colspan="3" style="text-align: left;">Avg. Production of Fish (kg/acre)</th>
                        <th rowspan="2" style="text-align: left;">Production cost (Tk./acre)</th>
                        <th rowspan="2" style="text-align: left;">Selling Price (Tk/acre)</th>
                        <th rowspan="2" style="text-align: left;">Action</th>
                      </tr>
                      <tr style="background-color: #99ccff;">
                        <th style="text-align:center;border-bottom: none;">Present</th>
                        <th style="text-align:center;border-bottom: none;">5 yrs ago</th>
                        <th style="text-align:center;border-bottom: none;">10 yrs ago</th>
                        <th style="text-align:center;border-bottom: none;">Dry season</th>
                        <th style="text-align:center;border-bottom: none;">Wet season</th>
                        <th style="text-align:center;border-bottom: none;">Present</th>
                        <th style="text-align:center;border-bottom: none;">5 yrs ago</th>
                        <th style="text-align:center;border-bottom: none;">10 yrs ago</th>
                      </tr>
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-secondary" id="add_row4" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                    <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store7" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>
                  </div>

                </div>
                <!-- end div col-6 -->

                <hr style="border-bottom: 2px solid teal;">
                <div class="row">
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <a href="{{ route('View.livestock.Entry') }}" style="color: black;">
                      <button type="submit" class="btn btn-info" style="width: 100%;border-radius: 20px;">Previous : Livestock</button>
                    </a>
                  </div>
                  <div class="col-md-8"></div>
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <a href="{{ route('Para.EcoSystem') }}">
                      <button type="submit" class="btn btn-info" style="color: black;width: 100%;border-radius: 20px;">Next : Para Eco-system</button>
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
<script src="{{ asset('scripts/fisheries/fisheries_entry.js') }}"></script>
<!-- datepicker -->
<script src="{{ asset('plugins/datepicker/jquery-ui.js') }}"></script>

<script>

document.title = 'fisheries, aquaculture';

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
