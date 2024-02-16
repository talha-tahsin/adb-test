


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
            <h1 class="m-0" style="font-family: Serif;">Agriculture </h1>
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
                  
                <div class="col-md-7" style="margin: 0px 0px 10px 0px;">
                  <h5>(1)	Farming types of the community</h5>
                    <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table1">
                        <thead>  
                          <tr style="background-color: #8ed6f2;">
                            <th style="text-align: center;">Serial</th>
                            <th style="text-align: left;">Farming types</th>
                            <th style="text-align: left;">No. of household of the community</th>
                            <th style="text-align: left;">Total Household of the community</th>
                            <th style="text-align: left;">Action</th>
                          </tr>
                        </thead>

                        <tbody id="table_body"></tbody>

                    </table>

                    <div class="row">
                      <div class="col-md-3" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-info" id="add_row1" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                      </div>
                      <div class="col-md-6"></div>
                      <div class="col-md-3" style="margin: 10px 0px 10px 0px;">
                          <button type="submit" class="btn btn-primary" id="btn_store1" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                      </div>
                    </div>
    
                </div>
                <!-- end col-md -->

              </div>
              <!-- end row -->
                
              <!-- table: 02 -->
              <hr style="border-bottom: 2px solid teal;">
              <div class="col-md-8" style="margin: 0px 0px 10px 0px;">
                <h5>(2)	Existing cropping pattern (major ten)</h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table2">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: center;">Serial</th>
                      <th style="text-align: center;">Kharif- 1 (March - June)</th>
                      <th style="text-align: center;">Kharif- 2 (July - October)</th>
                      <th style="text-align: center;">Rabi (November - February)</th>
                      <th style="text-align: left;">Practicing site (write just number) 1. Valley 2. Hill slope 3. Floodplains</th>
                      <th style="text-align: center;">% of cultivated area (approx..) of the para/community</th>
                      <th style="text-align: left;">Action</th>
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
              <!-- end div -->

              <!-- table: 03 -->
              <hr style="border-bottom: 2px solid gray;">
              <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                <h5>(3)	Major crops (variety name, production cost, yield and price) of the area</h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table3">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: center;">Serial</th>
                      <th style="text-align: left;">Crop Category</th>
                      <th style="text-align: left;">Crop name</th>
                      <th style="text-align: left;">Unit</th>
                      <th style="text-align: left;">Variety name</th>
                      <th style="text-align: left;">Production Amount in One Acre Land</th>
                      <th style="text-align: left;">Production cost (BDT/acre)</th>
                      <th style="text-align: left;">Per Unit Selling Price (BDT)</th>
                      <th style="text-align: left;">Action</th>
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
              <!-- end div -->

              <!-- table: 04 -->
              <hr style="border-bottom: 2px solid  black;">
              <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                <h5>(4)	Jhum/Shifting cultivation process (calendar)</h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table4">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th rowspan="2" style="text-align: center;">Serial</th>
                      <th rowspan="2" style="text-align: left;">Jhum cultivation process</th>
                      <th colspan="12" style="text-align: center;">Months</th>
                      <th rowspan="2" style="text-align: center;">Action</th>
                    </tr>
                    <tr style="background-color: #99ccff;">
                      <th style="text-align:center;border-bottom: none;">Jan</th>
                      <th style="text-align:center;border-bottom: none;">Feb</th>
                      <th style="text-align:center;border-bottom: none;">Mar</th>
                      <th style="text-align:center;border-bottom: none;">Apr</th>
                      <th style="text-align:center;border-bottom: none;">May</th>
                      <th style="text-align:center;border-bottom: none;">June</th>
                      <th style="text-align:center;border-bottom: none;">July</th>
                      <th style="text-align:center;border-bottom: none;">Aug</th>
                      <th style="text-align:center;border-bottom: none;">Sep</th>
                      <th style="text-align:center;border-bottom: none;">Oct</th>
                      <th style="text-align:center;border-bottom: none;">Nov</th>
                      <th style="text-align:center;border-bottom: none;">Dec</th>
                    </tr>
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
              <!-- end div -->

              <!-- table: 05 -->
              <hr style="border-bottom: 2px solid  black;">
              <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                <h5>(5)	Sloping-land farming practices </h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table5">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th rowspan="2" style="text-align: center;">Serial</th>
                      <th rowspan="2" style="text-align: left;">Slope category</th>
                      <th colspan="6" style="text-align: center;">Crop type</th>
                      <th rowspan="2" style="text-align: center;">Action</th>
                    </tr>
                    <tr style="background-color: #99ccff;">
                      <th style="text-align:center;border-bottom: none;">Annual cereal/tuber</th>
                      <th style="text-align:center;border-bottom: none;">Annual vegetable</th>
                      <th style="text-align:center;border-bottom: none;">Annual pulse</th>
                      <th style="text-align:center;border-bottom: none;">Annual spice/herb/oilseed/other</th>
                      <th style="text-align:center;border-bottom: none;">Annual fruits</th>
                      <th style="text-align:center;border-bottom: none;">Perennial fruit</th>
                    </tr>
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
              <!-- end div -->

              <!-- table : 06 -->
              <hr style="border-bottom: 2px solid  teal;">
              <div class="col-md-8" style="margin: 0px 0px 10px 0px;">
                <h5>(06)	Jhum farm size </h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table6">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: center;">Serial</th>
                      <th style="text-align: left;">Jhum farm size (acre)</th>
                      <th style="text-align: left;">Number of Jhumians</th>
                      <th style="text-align: left;">% of respondents of the community</th>
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
                    <button type="submit" class="btn btn-info" id="add_row6" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                  </div>
                  <div class="col-md-8"></div>
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store6" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                  </div>
                </div>

                <!-- <p style="margin: 0px 0px 0px 0px;"><strong>Noted:</strong></p>
                <p style="margin: 0px 0px 0px 0px;"># Jhum farm Size: (1) Up to 1 acre (2) 1-2 acres (3) 2-4 acres (4) Above 4 acres </p> -->


              </div>
              <!-- end div -->

              <!-- table : 07 -->
              <hr style="border-bottom: 2px solid  teal;">
              <div class="col-md-8" style="margin: 0px 0px 10px 0px;">
                <h5>(07)	Merits and demerits of Jhum cultivation (community response)</h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table7">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: center;">Serial</th>
                      <th style="text-align: left;">Type</th>
                      <th style="text-align: left;">Items</th>
                      <th style="text-align: center;">Response (no. of people responded yes)</th>
                      <th style="text-align: left;">Presence (no. of peoples of the community)</th>
                      <th style="text-align: left;">Action</th>
                    </tr>
                  </thead>

                    <tbody id="table_body"></tbody>

                </table>

                <div class="row">
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-info" id="add_row7" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                  </div>
                  <div class="col-md-8"></div>
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store7" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                  </div>
                </div>

                <p style="margin: 0px 0px 0px 0px;"><strong>Noted:</strong></p>
                <p style="margin: 0px 0px 0px 0px;"><span style="color: teal;"># For Merits Items: </span> (1) Traditional and easy to cultivate (2) Planting materials found locally (3) Short rotation (4) Low cost of production (5) Cultural issue (6) Return in short duration </p>
                <p style="margin: 0px 0px 0px 0px;"> <span style="color: #FF0000;"># For Demerits Items: </span> (1) Decline productivity (2) Little profit margin (3) Need high amount of fertilizer and pesticide (4) Negative attitude by government agency (5) Deforestation and land degradation (6) Soil erosion (7) Loss of plant variety </p>

              </div>
              <!-- end div col-6 -->

              <!-- table: 08 -->
              <hr style="border-bottom: 2px solid teal;">
              <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                <h5>(08)	Trend of Jhum cycle period (fallow time) for shifting cultivation</h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table8">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th rowspan="2" style="text-align: center;">Serial</th>
                      <th rowspan="2" style="text-align: left;">Period</th>
                      <th rowspan="2" style="text-align: left;">Fallow period (years)</th>
                      <th colspan="7" style="text-align: center;">Causes for reduction of fallow period</th>
                      <th rowspan="2" style="text-align: left;">Action</th>
                    </tr>
                    <tr style="background-color: #99ccff;">
                      <th style="text-align: center;">Construction of Kaptai Dam, many lowland people moved to high hill</th>
                      <th style="text-align: center;">Huge settlement of plain land people</th>
                      <th style="text-align: center;">Increasing population and declaration of protected areas</th>
                      <th style="text-align: center;">Increasing population and food/market demand</th>
                      <th style="text-align: center;">Increasing population and plantation of forest</th>
                      <th style="text-align: center;">Declaring of reserve forest</th>
                      <th style="text-align: center;">If any others</th>
                    </tr>
                  </thead>

                    <tbody id="table_body"></tbody>

                </table>

                <div class="row">
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-info" id="add_row8" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                  </div>
                  <div class="col-md-8"></div>
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store8" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                  </div>
                </div>

              </div>
              <!-- end div -->

              <!-- table : 09 -->
              <hr style="border-bottom: 2px solid  teal;">
              <form id="my_form1" method="POST">
                <div class="col-md-8" style="margin: 0px 0px 10px 0px;">
                  <h5>(09)	Major 5 detrimental crops for hilly areas (based on soil, water scarcity and environment)</h5>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table9">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th style="text-align: left;">Name-1</th>
                        <th style="text-align: left;">Name-2</th>
                        <th style="text-align: left;">Name-3</th>
                        <th style="text-align: left;">Name-4</th>
                        <th style="text-align: left;">Name-5</th>
                      </tr>
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>

                  <div class="row">
                    <!-- <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-info" id="add_row6" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div> -->
                    <div class="col-md-10"></div>
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store9" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>
                  </div>

                </div>
                <!-- end div -->
              </form>

              <!-- table: 10 -->
              <hr style="border-bottom: 2px solid gray;">
              <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                <h5>(10)	Crop damage and existing coping mechanism</h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table10">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: center;">Serial</th>
                      <!-- <th style="text-align: left;">Category</th> -->
                      <th style="text-align: left;">Pest and Disease name/Natural hazard name</th>
                      <th style="text-align: left;">Crop name</th>
                      <th style="text-align: left;">Frequency of Damage (1= each year, 2= once in two years, 3= once in five years)</th>
                      <th style="text-align: left;">% of damage in affected year/crop season</th>
                      <th style="text-align: left;">Existing coping mechanism (pesticide name, biological method, mechanical method, etc.)</th>
                      <th style="text-align: left;">Action</th>
                    </tr>
                  </thead>

                    <tbody id="table_body"></tbody>

                </table>

                <div class="row">
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-info" id="add_row10" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                  </div>
                  <div class="col-md-8"></div>
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store10" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                  </div>
                </div>

              </div>
              <!-- end div -->

              <!-- table : 11 -->
              <hr style="border-bottom: 2px solid  teal;">
              <div class="col-md-6" style="margin: 0px 0px 10px 0px;">
                <h5>(11) Irrigation water source and area coverage (%) in the area </h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table11a">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: left;">Serial</th>
                      <th style="text-align: left;">Surface water</th>
                      <th style="text-align: left;">Area (%)</th>
                      <th style="text-align: left;">If select Others, write name</th>
                      <th style="text-align: left;">Action</th>
                    </tr>
                  </thead>

                    <tbody id="table_body"></tbody>

                </table>

                <div class="row">
                  <div class="col-md-3" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-info" id="add_row11" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                  </div>
                  <div class="col-md-6"></div>
                  <div class="col-md-3" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-primary" id="btn_store11a" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                  </div>
                </div>

              </div>
              <!-- end div -->

              <div class="col-md-6" style="margin: 0px 0px 10px 0px;">
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table11b">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: left;">Serial</th>
                      <th style="text-align: left;">Ground water</th>
                      <th style="text-align: left;">Area (%)</th>
                      <th style="text-align: left;">If select Others, write name</th>
                      <th style="text-align: left;">Action</th>
                    </tr>
                  </thead>

                    <tbody id="table_body"></tbody>

                </table>

                <div class="row">
                  <div class="col-md-3" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-info" id="add_row11b" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                  </div>
                  <div class="col-md-6"></div>
                  <div class="col-md-3" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-primary" id="btn_store11b" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                  </div>
                </div>

              </div>
              <!-- end div -->

              <!-- table : 12 -->
              <hr style="border-bottom: 2px solid  teal;">
              <div class="col-md-10" style="margin: 0px 0px 10px 0px;">
                <h5>(12)	Irrigation crisis period time of the year (put tick mark in the box)</h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table12">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: left;">Jan</th>
                      <th style="text-align: left;">Feb</th>
                      <th style="text-align: left;">Mar</th>
                      <th style="text-align: left;">Apr</th>
                      <th style="text-align: left;">May</th>
                      <th style="text-align: left;">Jun</th>
                      <th style="text-align: left;">Jul</th>
                      <th style="text-align: left;">Aug</th>
                      <th style="text-align: left;">Sep</th>
                      <th style="text-align: left;">Oct</th>
                      <th style="text-align: left;">Nov</th>
                      <th style="text-align: left;">Dec</th>
                    </tr>
                  </thead>

                    <tbody id="table_body"></tbody>

                </table>

                <div class="row">
                  <!-- <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-info" id="add_row6" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                  </div> -->
                  <div class="col-md-10"></div>
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-primary" id="btn_store12" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                  </div>
                </div>

              </div>
              <!-- end div -->

              <!-- table : 13 -->
              <hr style="border-bottom: 2px solid  teal;">
              <div class="col-md-8" style="margin: 0px 0px 10px 0px;">
                <h5>(13)	Farm mechanization status & future preferences (Machinery used in agricultural practices)</h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table13">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: left;">Serial</th>
                      <th style="text-align: left;">Machineries</th>
                      <th style="text-align: left;">Current Use</th>
                      <th style="text-align: left;">Future Preferences</th>
                      <th style="text-align: left;">If others? Wrtite name </th>
                      <th style="text-align: left;">Action</th>
                    </tr>
                  </thead>

                    <tbody id="table_body"></tbody>

                </table>

                <div class="row">
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-info" id="add_row13" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                  </div>
                  <div class="col-md-8"></div>
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-primary" id="btn_store13" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                  </div>
                </div>

              </div>
              <!-- end div -->

              <!-- table : 14 -->
              <hr style="border-bottom: 2px solid  teal;">
              <div class="col-md-10" style="margin: 0px 0px 10px 0px;">
                <h5>(14)	Currently Practicing & Future Preferences of Agroforestry farming system.</h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table14">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: left;">Serial</th>
                      <th style="text-align: left;">Agro-forestry system</th>
                      <th style="text-align: left;">Current Use</th>
                      <th style="text-align: left;">Future Preferences</th>
                      <th style="text-align: left;">If others? Wrtite name </th>
                      <th style="text-align: left;">Action</th>
                    </tr>
                  </thead>

                    <tbody id="table_body"></tbody>

                </table>

                <div class="row">
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-info" id="add_row14" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                  </div>
                  <div class="col-md-8"></div>
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-primary" id="btn_store14" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                  </div>
                </div>

              </div>
              <!-- end div -->

          

              <hr style="border-bottom: 2px solid teal;">
              <div class="row">
                <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                  <a href="{{ route('Water.Resources.Entry') }}" style="color: black;">
                    <button type="submit" class="btn btn-success" style="width: 100%;border-radius: 20px;">Previous : Water Resources</button>
                  </a>
                </div>
                <div class="col-md-8"></div>
                <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                  <a href="{{ route('View.livestock.Entry') }}">
                    <button type="submit" class="btn btn-success" style="color: black;width: 100%;border-radius: 20px;">Next : Livestock</button>
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
<script src="{{ asset('scripts/agriculture/entry_agriculture.js') }}"></script>
<!-- datepicker -->
<script src="{{ asset('plugins/datepicker/jquery-ui.js') }}"></script>

<script>

document.title = 'agriculture';

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
