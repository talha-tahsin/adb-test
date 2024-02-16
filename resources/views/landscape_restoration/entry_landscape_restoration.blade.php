


@extends('layouts.pages.master')

@section('current_page_css')
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
            <h1 class="m-0">Agro-ecological Landscape Restoration Options Assessment</h1>
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
                    
                    <!-- <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                      <label class="control-label validate" for="map_unit"><span style="color: red;">★&nbsp;</span>Map Unit</label>
                      <input type="text" name="map_unit" id="map_unit" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                    </div>
                    <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                      <label class="control-label validate" for="area_of_map_unit"><span style="color: red;">★&nbsp;</span>Area of Map Unit (acre)</label>
                      <input type="text" name="area_of_map_unit" id="area_of_map_unit" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                    </div> -->

                  </div> 
                  <!-- end row -->
                  
                <!-- 2nd table -->
                <hr style="border-bottom: 2px solid teal;">
                <div class="col-md-12" style="margin: 0px 0px 0px 0px;">
                  <h5>Table R3. Preferences and cost-benefit of restoration interventions</h5>
                  
                  <label class="control-label">(a) Agriculture Land Conservation</label>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table1a">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th rowspan="2" style="text-align: center;">Serial</th>
                        <th rowspan="2" style="text-align: left;">Conservation Measures</th>
                        <th rowspan="2" style="text-align: center;">Preferences of Measure</th>
                        <th rowspan="2" style="text-align: center;">Unit Cost (Thousands BDT) of Measure</th>
                        <th rowspan="2" style="text-align: center;">Potential Unit Net Gain (Thousands BDT) in 5-10 years</th>
                        <th colspan="10" style="text-align: center;">Other qualitative benefits</th>
                        <th rowspan="2" style="text-align: center;">Action</th>
                      </tr>

                      <tr style="background-color: #d6eaf8;">
                        <th style="text-align:center;border-bottom: none;">Tree Increase</th>
                        <th style="text-align:center;border-bottom: none;">Carbon Sequestration</th>
                        <th style="text-align:center;border-bottom: none;">Crop Production</th>
                        <th style="text-align:center;border-bottom: none;">Livestock Production</th>
                        <th style="text-align:center;border-bottom: none;">Fisheries Production</th>
                        <th style="text-align:center;border-bottom: none;">Water Supply</th>
                        <th style="text-align:center;border-bottom: none;">Water Purification</th>
                        <th style="text-align:center;border-bottom: none;">Wild plant, food, fibres, medicine</th>
                        <th style="text-align:center;border-bottom: none;">Timber revenue</th>
                        <th style="text-align:center;border-bottom: none;">Inorganic Fertilizer</th>
                      </tr>
                        
                    </thead>

                    <tbody id="table_body"></tbody>
                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 20px 0px 30px 0px;">
                      <button type="submit" class="btn btn-secondary" id="add_row1a" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                    <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 20px 0px 20px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store1a" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>  
                  </div>

                  <!-- (b) table -->
                  <label class="control-label">(b) Forest / Shrub Land Conservation</label>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table1b">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th rowspan="2" style="text-align: center;">Serial</th>
                        <th rowspan="2" style="text-align: left;">Conservation Measures</th>
                        <th rowspan="2" style="text-align: center;">Preferences of Measure</th>
                        <th rowspan="2" style="text-align: center;">Unit Cost (Thousands BDT) of Measure</th>
                        <th rowspan="2" style="text-align: center;">Potential Unit Net Gain (Thousands BDT) in 5-10 years</th>
                        <th colspan="10" style="text-align: center;">Other qualitative benefits</th>
                        <th rowspan="2" style="text-align: center;">Action</th>
                      </tr>

                      <tr style="background-color: #d6eaf8;">
                        <th style="text-align:center;border-bottom: none;">Tree Increase</th>
                        <th style="text-align:center;border-bottom: none;">Carbon Sequestration</th>
                        <th style="text-align:center;border-bottom: none;">Crop Production</th>
                        <th style="text-align:center;border-bottom: none;">Livestock Production</th>
                        <th style="text-align:center;border-bottom: none;">Fisheries Production</th>
                        <th style="text-align:center;border-bottom: none;">Water Supply</th>
                        <th style="text-align:center;border-bottom: none;">Water Purification</th>
                        <th style="text-align:center;border-bottom: none;">Wild plant, food, fibres, medicine</th>
                        <th style="text-align:center;border-bottom: none;">Timber revenue</th>
                        <th style="text-align:center;border-bottom: none;">Inorganic Fertilizer</th>
                      </tr>
                        
                    </thead>

                    <tbody id="table_body"></tbody>
                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 20px 0px 30px 0px;">
                      <button type="submit" class="btn btn-secondary" id="add_row1b" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                    <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 20px 0px 20px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store1b" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>  
                  </div>

                  <!-- (c) table -->
                  <label class="control-label">(c) Degraded Soil & Land Improvement</label>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table1c">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th rowspan="2" style="text-align: center;">Serial</th>
                        <th rowspan="2" style="text-align: left;">Conservation Measures</th>
                        <th rowspan="2" style="text-align: center;">Preferences of Measure</th>
                        <th rowspan="2" style="text-align: center;">Unit Cost (Thousands BDT) of Measure</th>
                        <th rowspan="2" style="text-align: center;">Potential Unit Net Gain (Thousands BDT) in 5-10 years</th>
                        <th colspan="10" style="text-align: center;">Other qualitative benefits</th>
                        <th rowspan="2" style="text-align: center;">Action</th>
                      </tr>

                      <tr style="background-color: #d6eaf8;">
                        <th style="text-align:center;border-bottom: none;">Tree Increase</th>
                        <th style="text-align:center;border-bottom: none;">Carbon Sequestration</th>
                        <th style="text-align:center;border-bottom: none;">Crop Production</th>
                        <th style="text-align:center;border-bottom: none;">Livestock Production</th>
                        <th style="text-align:center;border-bottom: none;">Fisheries Production</th>
                        <th style="text-align:center;border-bottom: none;">Water Supply</th>
                        <th style="text-align:center;border-bottom: none;">Water Purification</th>
                        <th style="text-align:center;border-bottom: none;">Wild plant, food, fibres, medicine</th>
                        <th style="text-align:center;border-bottom: none;">Timber revenue</th>
                        <th style="text-align:center;border-bottom: none;">Inorganic Fertilizer</th>
                      </tr>
                        
                    </thead>

                    <tbody id="table_body"></tbody>
                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 20px 0px 30px 0px;">
                      <button type="submit" class="btn btn-secondary" id="add_row1c" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                    <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 20px 0px 20px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store1c" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>  
                  </div>

                  <!-- (d) table -->
                  <label class="control-label">(d) Stream Bank Protection</label>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table1d">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th rowspan="2" style="text-align: center;">Serial</th>
                        <th rowspan="2" style="text-align: left;">Conservation Measures</th>
                        <th rowspan="2" style="text-align: center;">Preferences of Measure</th>
                        <th rowspan="2" style="text-align: center;">Unit Cost (Thousands BDT) of Measure</th>
                        <th rowspan="2" style="text-align: center;">Potential Unit Net Gain (Thousands BDT) in 5-10 years</th>
                        <th colspan="10" style="text-align: center;">Other qualitative benefits</th>
                        <th rowspan="2" style="text-align: center;">Action</th>
                      </tr>

                      <tr style="background-color: #d6eaf8;">
                        <th style="text-align:center;border-bottom: none;">Tree Increase</th>
                        <th style="text-align:center;border-bottom: none;">Carbon Sequestration</th>
                        <th style="text-align:center;border-bottom: none;">Crop Production</th>
                        <th style="text-align:center;border-bottom: none;">Livestock Production</th>
                        <th style="text-align:center;border-bottom: none;">Fisheries Production</th>
                        <th style="text-align:center;border-bottom: none;">Water Supply</th>
                        <th style="text-align:center;border-bottom: none;">Water Purification</th>
                        <th style="text-align:center;border-bottom: none;">Wild plant, food, fibres, medicine</th>
                        <th style="text-align:center;border-bottom: none;">Timber revenue</th>
                        <th style="text-align:center;border-bottom: none;">Inorganic Fertilizer</th>
                      </tr>
                        
                    </thead>

                    <tbody id="table_body"></tbody>
                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 20px 0px 30px 0px;">
                      <button type="submit" class="btn btn-secondary" id="add_row1d" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                    <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 20px 0px 20px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store1d" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>  
                  </div>

                  <!-- (e) table -->
                  <label class="control-label">(e) Water Resources Development</label>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table1e">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th rowspan="2" style="text-align: center;">Serial</th>
                        <th rowspan="2" style="text-align: left;">Conservation Measures</th>
                        <th rowspan="2" style="text-align: center;">Preferences of Measure</th>
                        <th rowspan="2" style="text-align: center;">Unit Cost (Thousands BDT) of Measure</th>
                        <th rowspan="2" style="text-align: center;">Potential Unit Net Gain (Thousands BDT) in 5-10 years</th>
                        <th colspan="10" style="text-align: center;">Other qualitative benefits</th>
                        <th rowspan="2" style="text-align: center;">Action</th>
                      </tr>

                      <tr style="background-color: #d6eaf8;">
                        <th style="text-align:center;border-bottom: none;">Tree Increase</th>
                        <th style="text-align:center;border-bottom: none;">Carbon Sequestration</th>
                        <th style="text-align:center;border-bottom: none;">Crop Production</th>
                        <th style="text-align:center;border-bottom: none;">Livestock Production</th>
                        <th style="text-align:center;border-bottom: none;">Fisheries Production</th>
                        <th style="text-align:center;border-bottom: none;">Water Supply</th>
                        <th style="text-align:center;border-bottom: none;">Water Purification</th>
                        <th style="text-align:center;border-bottom: none;">Wild plant, food, fibres, medicine</th>
                        <th style="text-align:center;border-bottom: none;">Timber revenue</th>
                        <th style="text-align:center;border-bottom: none;">Inorganic Fertilizer</th>
                      </tr>
                        
                    </thead>

                    <tbody id="table_body"></tbody>
                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 20px 0px 30px 0px;">
                      <button type="submit" class="btn btn-secondary" id="add_row1e" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                    <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 20px 0px 20px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store1e" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>  
                  </div>

                  <!-- (f) table -->
                  <label class="control-label">(f) Capacity Development & Demonstration</label>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table1f">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th rowspan="2" style="text-align: center;">Serial</th>
                        <th rowspan="2" style="text-align: left;">Conservation Measures</th>
                        <th rowspan="2" style="text-align: center;">Preferences of Measure</th>
                        <th rowspan="2" style="text-align: center;">Unit Cost (Thousands BDT) of Measure</th>
                        <th rowspan="2" style="text-align: center;">Potential Unit Net Gain (Thousands BDT) in 5-10 years</th>
                        <th colspan="10" style="text-align: center;">Other qualitative benefits</th>
                        <th rowspan="2" style="text-align: center;">Action</th>
                      </tr>

                      <tr style="background-color: #d6eaf8;">
                        <th style="text-align:center;border-bottom: none;">Tree Increase</th>
                        <th style="text-align:center;border-bottom: none;">Carbon Sequestration</th>
                        <th style="text-align:center;border-bottom: none;">Crop Production</th>
                        <th style="text-align:center;border-bottom: none;">Livestock Production</th>
                        <th style="text-align:center;border-bottom: none;">Fisheries Production</th>
                        <th style="text-align:center;border-bottom: none;">Water Supply</th>
                        <th style="text-align:center;border-bottom: none;">Water Purification</th>
                        <th style="text-align:center;border-bottom: none;">Wild plant, food, fibres, medicine</th>
                        <th style="text-align:center;border-bottom: none;">Timber revenue</th>
                        <th style="text-align:center;border-bottom: none;">Inorganic Fertilizer</th>
                      </tr>
                        
                    </thead>

                    <tbody id="table_body"></tbody>
                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 20px 0px 30px 0px;">
                      <button type="submit" class="btn btn-secondary" id="add_row1f" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                    <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 20px 0px 20px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store1f" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>  
                  </div>

                </div>

                <!-- 2nd table -->
                <hr style="border-bottom: 2px solid teal;">
                <div class="col-md-12" style="margin: 0px 0px 0px 0px;">
                  <h5>Table R4. Implementation Challenges of Agro-ecological Landscape Restoration Options</h5>
                  
                  <!-- 2a table -->
                  <label class="control-label">(a) Agriculture Land Conservation</label>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table2a">
                    <thead>
                        <tr style="background-color: #8ed6f2;">
                          <th rowspan="2" style="text-align: center;">Serial</th>
                          <th rowspan="2" style="text-align: left;">Conservation Measures</th>
                          <th rowspan="2" style="text-align: center;">Implementation Time of Measures</th>
                          <th colspan="9" style="text-align: center;">Implementation Challenges and Barriers</th>
                          <th rowspan="2" style="text-align: center;">Actions to Overcome Barrier (bullet points/list)</th>
                          <th rowspan="2" style="text-align: center;">Action</th>
                        </tr>

                        <tr style="background-color: #d6eaf8;">
                          <th style="text-align:center;border-bottom: none;">Land unavailable/high land area required</th>
                          <th style="text-align:center;border-bottom: none;">Supply chain disconnection</th>
                          <th style="text-align:center;border-bottom: none;">Land right related problems</th>
                          <th style="text-align:center;border-bottom: none;">High human investment capital need</th>
                          <th style="text-align:center;border-bottom: none;">Insufficient infrastructures</th>
                          <th style="text-align:center;border-bottom: none;">Less demand of agro-forestry products</th>
                          <th style="text-align:center;border-bottom: none;">Environmentally unsustainable</th>
                          <th style="text-align:center;border-bottom: none;">Socially unacceptable</th>
                          <th style="text-align:center;border-bottom: none;">Less beneficial</th>
                        </tr>
                    </thead>

                    <tbody id="table_body"></tbody>

                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                      <button type="submit" class="btn btn-secondary" id="add_row2a" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                    <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store2a" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>  
                  </div>

                  <!-- 2b table -->
                  <label class="control-label">(b) Forest / Shrub Land Conservation</label>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table2b">
                    <thead>
                        <tr style="background-color: #8ed6f2;">
                          <th rowspan="2" style="text-align: center;">Serial</th>
                          <th rowspan="2" style="text-align: left;">Conservation Measures</th>
                          <th rowspan="2" style="text-align: center;">Implementation Time of Measures</th>
                          <th colspan="9" style="text-align: center;">Implementation Challenges and Barriers</th>
                          <th rowspan="2" style="text-align: center;">Actions to Overcome Barrier (bullet points/list)</th>
                          <th rowspan="2" style="text-align: center;">Action</th>
                        </tr>

                        <tr style="background-color: #d6eaf8;">
                          <th style="text-align:center;border-bottom: none;">Land unavailable/high land area required</th>
                          <th style="text-align:center;border-bottom: none;">Supply chain disconnection</th>
                          <th style="text-align:center;border-bottom: none;">Land right related problems</th>
                          <th style="text-align:center;border-bottom: none;">High human investment capital need</th>
                          <th style="text-align:center;border-bottom: none;">Insufficient infrastructures</th>
                          <th style="text-align:center;border-bottom: none;">Less demand of agro-forestry products</th>
                          <th style="text-align:center;border-bottom: none;">Environmentally unsustainable</th>
                          <th style="text-align:center;border-bottom: none;">Socially unacceptable</th>
                          <th style="text-align:center;border-bottom: none;">Less beneficial</th>
                        </tr>
                    </thead>

                    <tbody id="table_body"></tbody>

                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                      <button type="submit" class="btn btn-success" id="add_row2b" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                    <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store2b" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>  
                  </div>

                  <!-- 2c table -->
                  <label class="control-label">(c) Degraded Soil & Land Improvement</label>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table2c">
                    <thead>
                        <tr style="background-color: #8ed6f2;">
                          <th rowspan="2" style="text-align: center;">Serial</th>
                          <th rowspan="2" style="text-align: left;">Conservation Measures</th>
                          <th rowspan="2" style="text-align: center;">Implementation Time of Measures</th>
                          <th colspan="9" style="text-align: center;">Implementation Challenges and Barriers</th>
                          <th rowspan="2" style="text-align: center;">Actions to Overcome Barrier (bullet points/list)</th>
                          <th rowspan="2" style="text-align: center;">Action</th>
                        </tr>

                        <tr style="background-color: #d6eaf8;">
                          <th style="text-align:center;border-bottom: none;">Land unavailable/high land area required</th>
                          <th style="text-align:center;border-bottom: none;">Supply chain disconnection</th>
                          <th style="text-align:center;border-bottom: none;">Land right related problems</th>
                          <th style="text-align:center;border-bottom: none;">High human investment capital need</th>
                          <th style="text-align:center;border-bottom: none;">Insufficient infrastructures</th>
                          <th style="text-align:center;border-bottom: none;">Less demand of agro-forestry products</th>
                          <th style="text-align:center;border-bottom: none;">Environmentally unsustainable</th>
                          <th style="text-align:center;border-bottom: none;">Socially unacceptable</th>
                          <th style="text-align:center;border-bottom: none;">Less beneficial</th>
                        </tr>
                    </thead>

                    <tbody id="table_body"></tbody>

                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                      <button type="submit" class="btn btn-success" id="add_row2c" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                    <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store2c" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>  
                  </div>

                  <!-- 2d table -->
                  <label class="control-label">(d) Stream Bank Protection</label>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table2d">
                    <thead>
                        <tr style="background-color: #8ed6f2;">
                          <th rowspan="2" style="text-align: center;">Serial</th>
                          <th rowspan="2" style="text-align: left;">Conservation Measures</th>
                          <th rowspan="2" style="text-align: center;">Implementation Time of Measures</th>
                          <th colspan="9" style="text-align: center;">Implementation Challenges and Barriers</th>
                          <th rowspan="2" style="text-align: center;">Actions to Overcome Barrier (bullet points/list)</th>
                          <th rowspan="2" style="text-align: center;">Action</th>
                        </tr>

                        <tr style="background-color: #d6eaf8;">
                          <th style="text-align:center;border-bottom: none;">Land unavailable/high land area required</th>
                          <th style="text-align:center;border-bottom: none;">Supply chain disconnection</th>
                          <th style="text-align:center;border-bottom: none;">Land right related problems</th>
                          <th style="text-align:center;border-bottom: none;">High human investment capital need</th>
                          <th style="text-align:center;border-bottom: none;">Insufficient infrastructures</th>
                          <th style="text-align:center;border-bottom: none;">Less demand of agro-forestry products</th>
                          <th style="text-align:center;border-bottom: none;">Environmentally unsustainable</th>
                          <th style="text-align:center;border-bottom: none;">Socially unacceptable</th>
                          <th style="text-align:center;border-bottom: none;">Less beneficial</th>
                        </tr>
                    </thead>

                    <tbody id="table_body"></tbody>

                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                      <button type="submit" class="btn btn-success" id="add_row2d" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                    <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store2d" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>  
                  </div>

                  <!-- 2e table -->
                  <label class="control-label">(e) Water Resources Development</label>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table2e">
                    <thead>
                        <tr style="background-color: #8ed6f2;">
                          <th rowspan="2" style="text-align: center;">Serial</th>
                          <th rowspan="2" style="text-align: left;">Conservation Measures</th>
                          <th rowspan="2" style="text-align: center;">Implementation Time of Measures</th>
                          <th colspan="9" style="text-align: center;">Implementation Challenges and Barriers</th>
                          <th rowspan="2" style="text-align: center;">Actions to Overcome Barrier (bullet points/list)</th>
                          <th rowspan="2" style="text-align: center;">Action</th>
                        </tr>

                        <tr style="background-color: #d6eaf8;">
                          <th style="text-align:center;border-bottom: none;">Land unavailable/high land area required</th>
                          <th style="text-align:center;border-bottom: none;">Supply chain disconnection</th>
                          <th style="text-align:center;border-bottom: none;">Land right related problems</th>
                          <th style="text-align:center;border-bottom: none;">High human investment capital need</th>
                          <th style="text-align:center;border-bottom: none;">Insufficient infrastructures</th>
                          <th style="text-align:center;border-bottom: none;">Less demand of agro-forestry products</th>
                          <th style="text-align:center;border-bottom: none;">Environmentally unsustainable</th>
                          <th style="text-align:center;border-bottom: none;">Socially unacceptable</th>
                          <th style="text-align:center;border-bottom: none;">Less beneficial</th>
                        </tr>
                    </thead>

                    <tbody id="table_body"></tbody>

                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                      <button type="submit" class="btn btn-success" id="add_row2e" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                    <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store2e" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>  
                  </div>

                  <!-- 2f table -->
                  <label class="control-label">(f) Capacity Development & Demonstration</label>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table2f">
                    <thead>
                        <tr style="background-color: #8ed6f2;">
                          <th rowspan="2" style="text-align: center;">Serial</th>
                          <th rowspan="2" style="text-align: left;">Conservation Measures</th>
                          <th rowspan="2" style="text-align: center;">Implementation Time of Measures</th>
                          <th colspan="9" style="text-align: center;">Implementation Challenges and Barriers</th>
                          <th rowspan="2" style="text-align: center;">Actions to Overcome Barrier (bullet points/list)</th>
                          <th rowspan="2" style="text-align: center;">Action</th>
                        </tr>

                        <tr style="background-color: #d6eaf8;">
                          <th style="text-align:center;border-bottom: none;">Land unavailable/high land area required</th>
                          <th style="text-align:center;border-bottom: none;">Supply chain disconnection</th>
                          <th style="text-align:center;border-bottom: none;">Land right related problems</th>
                          <th style="text-align:center;border-bottom: none;">High human investment capital need</th>
                          <th style="text-align:center;border-bottom: none;">Insufficient infrastructures</th>
                          <th style="text-align:center;border-bottom: none;">Less demand of agro-forestry products</th>
                          <th style="text-align:center;border-bottom: none;">Environmentally unsustainable</th>
                          <th style="text-align:center;border-bottom: none;">Socially unacceptable</th>
                          <th style="text-align:center;border-bottom: none;">Less beneficial</th>
                        </tr>
                    </thead>

                    <tbody id="table_body"></tbody>

                  </table>

                  <div class="row">
                    <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                      <button type="submit" class="btn btn-success" id="add_row2f" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                    <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store2f" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>  
                  </div>
      
                </div>
                <!-- end div col-md -->

                <hr style="border-bottom: 2px solid teal;">
                <div class="row">
                      <!-- <div class="col-md-2" style="margin: 20px 0px 30px 0px;">
                        <a href="#" style="color: black;">
                          <button type="submit" class="btn btn-info" style="width: 100%;border-radius: 20px;">Previous : VCF GPS Point</button>
                        </a>
                      </div> -->

                  <div class="col-md-8"></div>

                  <div class="col-md-4" style="margin: 20px 0px 10px 0px;">
                    <div class="direct-chat-text">
                      <span style="color: #f86d06;">Landscape Restoration Entry end, thank you! &nbsp; </span> <span>Go To: &nbsp; </span>
                      <a href="{{ route('Data.Entry.Dashboard') }}" style="color: blue;">Data Entry Dashboard</a>
                    </div>
                  </div>

                </div>

    
              </div>  
              <!-- end card body -->
            </div>  
            <!-- end car-primary -->
          </div>  
          <!-- end col-md-12 -->

        </div> 
        <!-- end row -->


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
<script src="{{ asset('scripts/landscape_restoration/entry_landscape_restoration.js') }}"></script>
<!-- DataTables  & Plugins -->
<script src="{{ asset('plugins/datatables/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-responsive/js/dataTables.responsive.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-responsive/js/responsive.bootstrap4.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-buttons/js/dataTables.buttons.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-buttons/js/buttons.bootstrap4.min.js') }}"></script>


<script>

document.title = 'landscape degradation';

$(document).ready(function () {

    console.log("hello talha..");
    
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
            // $('#map_unit').val(v.map_unit);
            // $('#area_of_map_unit').val(v.areaOf_map_unit);
        });
            
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });


});


</script>



@endsection
