


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
            <h1 class="m-0" style="font-family: Serif;">Climate Change Risk and Adaptation Option Assessment</h1>
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
                  <!-- table: 01 -->
                   
                  <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                    <h5>(1)	Climate Hazards</h5>
                
                    <div class="row">
                      <div class="col-md-12" style="margin: 0px 0px 0px 10px;">
                        <label class="control-label">(a) What are the types of climate change induced hazards that are common in your area?</label>
                        <label class="control-label hide" id="question1">What are the types of climate change induced hazards that are common in your area?</label>
                        <div class="form-group" style="margin: 0px 0px 10px 10px;">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox1" value="River Flood">
                            <label class="form-check-label">River Flood</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox1" value="Flash Flood">
                            <label class="form-check-label">Flash Flood</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox1" value="Drought">
                            <label class="form-check-label">Drought</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox1" value="Cyclone">
                            <label class="form-check-label">Cyclone</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox1" value="Nor wester/Tornado">
                            <label class="form-check-label">Nor wester/Tornado</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox1" value="Lightning">
                            <label class="form-check-label">Lightning</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox1" value="Landslide">
                            <label class="form-check-label">Landslide</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox1" value="Heatwave">
                            <label class="form-check-label">Heatwave</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox1" value="Cold wave">
                            <label class="form-check-label">Cold wave</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox1" value="Erratic Rainfall">
                            <label class="form-check-label">Erratic Rainfall</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox1" value="Erosion">
                            <label class="form-check-label">Erosion</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12" style="margin: 0px 0px 0px 10px;">
                        <label class="control-label">(b) What are climate change anomalies that can be sensed or observed in recent years or among seasons?</label>
                        <label class="control-label hide" id="question2">What are climate change anomalies that can be sensed or observed in recent years or among seasons?</label>
                        <div class="form-group" style="margin: 0px 0px 10px 10px;">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox2" value="Extreme hot days/Heat waves">
                            <label class="form-check-label">Extreme hot days/Heat waves</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox2" value="Severe cold days">
                            <label class="form-check-label">Severe cold days</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox2" value="Foggy days">
                            <label class="form-check-label">Foggy days</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox2" value="Erratic rainfall/Wet days">
                            <label class="form-check-label">Erratic rainfall/Wet days</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12" style="margin: 0px 0px 0px 10px;">
                        <label class="control-label">(c)	What are most devastating climate change hazards in recent years?</label>
                        <label class="control-label hide" id="question3">What are most devastating climate change hazards in recent years?</label>
                        <div class="form-group" style="margin: 0px 0px 10px 10px;">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox3" value="River Flood">
                            <label class="form-check-label">River Flood</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox3" value="Flash Flood">
                            <label class="form-check-label">Flash Flood</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox3" value="Drought">
                            <label class="form-check-label">Drought</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox3" value="Cyclone">
                            <label class="form-check-label">Cyclone</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox3" value="Nor wester/Tornado">
                            <label class="form-check-label">Nor wester/Tornado</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox3" value="Lightning">
                            <label class="form-check-label">Lightning</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox3" value="Landslide">
                            <label class="form-check-label">Landslide</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox3" value="Heatwave">
                            <label class="form-check-label">Heatwave</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox3" value="Cold wave">
                            <label class="form-check-label">Cold wave</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox3" value="Erratic Rainfall">
                            <label class="form-check-label">Erratic Rainfall</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox3" value="Erosion">
                            <label class="form-check-label">Erosion</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row" style="margin: 0px 0px 0px 10px;">
                      <label class="control-label col-md-12">(d) When most devastating climate change hazards in recent years? Write Year</label>
                      <label class="control-label hide" id="question4">When most devastating climate change hazards in recent years? Write Year</label>
                        <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                          <input type="text" name="answer4" id="answer4" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Mention Years...">
                        </div>
                    </div>

                    <div class="row" style="margin: 0px 0px 0px 10px;">
                      <label class="control-label col-md-12" id="question5">(e) What is the overall climate resilience status of the Para Community?</label>
                        <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                          <select type="text" id="answer5" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                            <option value="" selected disabled> Select Option</option>
                            <option value="Adequate">Adequate</option> 
                            <option value="Progressive">Progressive</option> 
                            <option value="Inadequate">Inadequate</option> 
                          </select>
                        </div>
                    </div>

                    <div class="row" style="margin: 0px 0px 0px 10px;">
                      <label class="control-label col-md-12" id="question6">(f) What is the overall climate resilience status of the surrounding agro forestry ecosystem and biodiversity?</label>
                        <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                          <select type="text" id="answer6" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                            <option value="" selected disabled> Select Option</option>
                            <option value="Adequate">Adequate</option> 
                            <option value="Progressive">Progressive</option> 
                            <option value="Inadequate">Inadequate</option> 
                          </select>
                        </div>
                    </div>

                    <div class="row" style="margin: 0px 0px 0px 10px;">
                      <label class="control-label col-md-12" id="question7">(g) What is the overall climate resilience status of the women in the Para?</label>
                        <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                          <select type="text" id="answer7" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                            <option value="" selected disabled> Select Option</option>
                            <option value="Adequate">Adequate</option> 
                            <option value="Progressive">Progressive</option> 
                            <option value="Inadequate">Inadequate</option> 
                          </select>
                        </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12" style="margin: 0px 0px 0px 10px;">
                        <label class="control-label">(h) What are preferred alternative livelihoods generation activities?</label>
                        <label class="control-label hide" id="question8">What are preferred alternative livelihoods generation activities?</label>
                        <div class="form-group" style="margin: 0px 0px 10px 10px;">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox4" value="Handloom">
                            <label class="form-check-label">Handloom</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox4" value="Cottage">
                            <label class="form-check-label">Cottage</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox4" value="Sewing">
                            <label class="form-check-label">Sewing</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox4" value="Shop keeping">
                            <label class="form-check-label">Shop keeping</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox4" value="Day Labour">
                            <label class="form-check-label">Day Labour</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="checkBox4" value="Business">
                            <label class="form-check-label">Business</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <label class="control-label">(i) Overall climate risk score? </label> 
                      </div>
                    </div>

                    <div class="row" style="margin: 0px 0px 0px 10px;">
                      <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                        <label class="control-label" id="question91">Hazard</label>
                          <select type="text" id="answer91" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                            <option value="" selected disabled> Select Option</option>
                            <option value="Very Low">Very Low (1)</option> 
                            <option value="Low">Low (2)</option> 
                            <option value="Moderate">Moderate (3)</option> 
                            <option value="High">High (4)</option> 
                            <option value="Very High">Very High (5)</option> 
                          </select>
                      </div>
                      <div class="col-md-10"></div>
                      <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                        <label class="control-label" id="question92">Exposure (Element at Risk) to Hazards</label>
                          <select type="text" id="answer92" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                            <option value="" selected disabled> Select Option</option>
                            <option value="Very Low">Very Low (1)</option> 
                            <option value="Low">Low (2)</option> 
                            <option value="Moderate">Moderate (3)</option> 
                            <option value="High">High (4)</option> 
                            <option value="Very High">Very High (5)</option> 
                          </select>
                      </div>
                      <div class="col-md-10"></div>
                      <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                        <label class="control-label" id="question93">Sensitivity</label>
                          <select type="text" id="answer93" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                            <option value="" selected disabled> Select Option</option>
                            <option value="Very Low">Very Low (1)</option> 
                            <option value="Low">Low (2)</option> 
                            <option value="Moderate">Moderate (3)</option> 
                            <option value="High">High (4)</option> 
                            <option value="Very High">Very High (5)</option> 
                          </select>
                      </div>
                      <div class="col-md-10"></div>
                      <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                        <label class="control-label" id="question94">Adaptive Capacity</label>
                          <select type="text" id="answer94" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                            <option value="" selected disabled> Select Option</option>
                            <option value="Very Low">Very Low (1)</option> 
                            <option value="Low">Low (2)</option> 
                            <option value="Moderate">Moderate (3)</option> 
                            <option value="High">High (4)</option> 
                            <option value="Very High">Very High (5)</option> 
                          </select>
                      </div>
                    </div>

                    <div class="row" style="margin: 0px 0px 0px 10px;">
                      <label class="control-label col-md-12">(j) What are overall recommendations for Climate risk reduction?</label>
                      <label class="control-label hide" id="question10">What are overall recommendations for Climate risk reduction?</label>
                      <div class="col-md-3" style="margin: 0px 0px 10px 0px;">
                        <input type="text" name="answer10" id="answer10" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this field..">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-10"></div>
                      <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                          <button type="submit" class="btn btn-primary" id="btn_store1" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                      </div>
                    </div>    
                </div>

              </div>
              <!-- end row -->
                
              <!-- table: 02 -->
              <hr style="border-bottom: 2px solid teal;">
              <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                <div class="row">
                  <h5>(2)	Hazard Calendar</h5>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table2">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th style="text-align: center;">Serial</th>
                        <th style="text-align: center;">Hazard</th>
                        <th style="text-align: center;">Ranking</th>
                        <th style="text-align: center;">Trends/Frequency</th>
                        <th style="text-align: center;">Intensity</th>
                        <th style="text-align: center;">Timeline</th>
                        <th style="text-align: center;">Poush</th>
                        <th style="text-align: center;">Magh</th>
                        <th style="text-align: center;">Falgun</th>
                        <th style="text-align: center;">Chaitra</th>
                        <th style="text-align: center;">Boisakh</th>
                        <th style="text-align: center;">Joishtho</th>
                        <th style="text-align: center;">Ashar</th>
                        <th style="text-align: center;">Srabon</th>
                        <th style="text-align: center;">Vadro</th>
                        <th style="text-align: center;">Ashwin</th>
                        <th style="text-align: center;">Kartik</th>
                        <th style="text-align: center;">Agrahyan</th>
                        <th style="text-align: center;">Action</th>
                      </tr>
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>
                </div>

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
                <h5>(3)	Impact & Vulnerability Matrix</h5>
                <label>(a) Sector: Agro-forestry </label>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table3a">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: center;">Serial</th>
                      <th style="text-align: center;">Impacts</th>
                      <th style="text-align: center;">River flood</th>
                      <th style="text-align: center;">Flash flood</th>
                      <th style="text-align: center;">Drought</th>
                      <th style="text-align: center;">Heat wave</th>
                      <th style="text-align: center;">Cold wave</th>
                      <th style="text-align: center;">Tornado</th>
                      <th style="text-align: center;">Landslides</th>
                      <th style="text-align: center;">Lightning</th>
                      <th style="text-align: center;">Erratic rainfall</th>
                      <th style="text-align: center;">Other</th>
                      <th style="text-align: center;">Action</th>
                    </tr>
                  </thead>

                    <tbody id="table_body"></tbody>

                </table>
                
                <div class="row">
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-info" id="add_row3a" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                  </div>
                  <div class="col-md-8"></div>
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store3a" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                  </div>
                </div>

                <!-- 2nd  -->
                <label>(b) Sector: Agro-forestry dependent livelihoods </label>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table3b">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: center;">Serial</th>
                      <th style="text-align: center;">Impacts</th>
                      <th style="text-align: center;">River flood</th>
                      <th style="text-align: center;">Flash flood</th>
                      <th style="text-align: center;">Drought</th>
                      <th style="text-align: center;">Heat wave</th>
                      <th style="text-align: center;">Cold wave</th>
                      <th style="text-align: center;">Tornado</th>
                      <th style="text-align: center;">Landslides</th>
                      <th style="text-align: center;">Lightning</th>
                      <th style="text-align: center;">Erratic rainfall</th>
                      <th style="text-align: center;">Other</th>
                      <th style="text-align: center;">Action</th>
                    </tr>
                  </thead>

                    <tbody id="table_body"></tbody>

                </table>
                
                <div class="row">
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-info" id="add_row3b" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                  </div>
                  <div class="col-md-8"></div>
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store3b" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                  </div>
                </div>

                <!-- 3rd -->
                <label>(c) Sector: Market/Value chain & Business </label>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table3c">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: center;">Serial</th>
                      <th style="text-align: center;">Impacts</th>
                      <th style="text-align: center;">River flood</th>
                      <th style="text-align: center;">Flash flood</th>
                      <th style="text-align: center;">Drought</th>
                      <th style="text-align: center;">Heat wave</th>
                      <th style="text-align: center;">Cold wave</th>
                      <th style="text-align: center;">Tornado</th>
                      <th style="text-align: center;">Landslides</th>
                      <th style="text-align: center;">Lightning</th>
                      <th style="text-align: center;">Erratic rainfall</th>
                      <th style="text-align: center;">Other</th>
                      <th style="text-align: center;">Action</th>
                    </tr>
                  </thead>

                    <tbody id="table_body"></tbody>

                </table>
                
                <div class="row">
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-info" id="add_row3c" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                  </div>
                  <div class="col-md-8"></div>
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store3c" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                  </div>
                </div>

                <!-- 4th -->
                <label>(d) Sector: Gender/women</label>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table3d">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: center;">Serial</th>
                      <th style="text-align: center;">Impacts</th>
                      <th style="text-align: center;">River flood</th>
                      <th style="text-align: center;">Flash flood</th>
                      <th style="text-align: center;">Drought</th>
                      <th style="text-align: center;">Heat wave</th>
                      <th style="text-align: center;">Cold wave</th>
                      <th style="text-align: center;">Tornado</th>
                      <th style="text-align: center;">Landslides</th>
                      <th style="text-align: center;">Lightning</th>
                      <th style="text-align: center;">Erratic rainfall</th>
                      <th style="text-align: center;">Other</th>
                      <th style="text-align: center;">Action</th>
                    </tr>
                  </thead>

                    <tbody id="table_body"></tbody>

                </table>
                
                <div class="row">
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-info" id="add_row3d" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                  </div>
                  <div class="col-md-8"></div>
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store3d" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                  </div>
                </div>

              </div>
              <!-- end div -->

              <!-- table: 04 -->
              <hr style="border-bottom: 2px solid  black;">
              <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                <h5>(4)	Losses and damages due to different hazards</h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table4">
                  <thead>
                  <tr style="background-color: #8ed6f2;">
                    <th style="text-align: center;">Serial</th>
                    <th style="text-align: center;">Climate Hazard</th>
                    <th style="text-align: center;">Occurrence of hazard once in years</th>
                    <th style="text-align: center;">10 years ago</th>
                    <th style="text-align: center;">Present</th>
                    <th style="text-align: center;">Mention the year of last extreme event</th>
                    <th style="text-align: center;">Damages of Crop Land Area (acres)</th>
                    <th style="text-align: center;">No. of infrastructures damage (house/livestock shelter)</th>
                    <th style="text-align: center;">No. of Livestock/Poultry Dead</th>
                    <th style="text-align: center;">Fisheries Production Loss (Kg)</th>
                    <th style="text-align: center;">Timber Production Loss (ton)</th>
                    <th style="text-align: center;">Fruits Business Loss (Thousands BDT)</th>
                    <th style="text-align: center;">Total Income loss of a HHs (Thousands BDT)</th>
                    <th style="text-align: center;">Other losses</th>
                    <th style="text-align: center;">Any other remarks</th>
                    <th style="text-align: center;">Action</th>
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
                <h5>(5)	Preferences of Climate Change Adaptation for Reducing Climate Change Risks</h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table5">
                  <thead>
                  <tr style="background-color: #8ed6f2;">
                    <th style="text-align: center;">Serial</th>
                    <th style="text-align: center;">Sector</th>
                    <th style="text-align: center;">Adaptation Options</th>
                    <th style="text-align: center;">Women Engagement Potentiality (Y/N), If yes how women engagement can be increased</th>                      
                    <th style="text-align: center;">Action</th>
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
              <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                <h5>(06)	Implementation Challenges of Climate Change Adaptation </h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table6">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th rowspan="2" style="text-align: center;">Serial</th>
                      <th rowspan="2" style="text-align: left;">Adaptation Categories</th>
                      <th colspan="9" style="text-align: center;">Implementation Challenges and Barriers </th>
                      <th rowspan="2" style="text-align: left;">Actions to Overcome Barrier (bullet points/list)</th>
                      <th rowspan="2" style="text-align: left;">Action</th>
                    </tr>
                    <tr style="background-color: #99ccff;">
                      <th style="text-align:center;border-bottom: none;">Less investment capital/fund</th>
                      <th style="text-align:center;border-bottom: none;">Less institutional capacity</th>
                      <th style="text-align:center;border-bottom: none;">Less awareness and capacity of community/farmers/ fishermen/businessmen</th>
                      <th style="text-align:center;border-bottom: none;">Less incentives or subsidies mechanism</th>
                      <th style="text-align:center;border-bottom: none;">Insufficient infrastructures & accessibility</th>
                      <th style="text-align:center;border-bottom: none;">Less education</th>
                      <th style="text-align:center;border-bottom: none;">Less demand of agro- forestry product</th>
                      <th style="text-align:center;border-bottom: none;">High Poverty</th>
                      <th style="text-align:center;border-bottom: none;">Proper training and knowledge gap</th>
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

                <!-- <p style="margin: 0px 0px 0px 0px;"><strong>Noted:</strong></p>
                <p style="margin: 0px 0px 0px 0px;"><span style="color: teal;"># For Merits Items: </span> (1) Traditional and easy to cultivate (2) Planting materials found locally (3) Short rotation (4) Low cost of production (5) Cultural issue (6) Return in short duration </p>
                <p style="margin: 0px 0px 0px 0px;"> <span style="color: #FF0000;"># For Demerits Items: </span> (1) Decline productivity (2) Little profit margin (3) Need high amount of fertilizer and pesticide (4) Negative attitude by government agency (5) Deforestation and land degradation (6) Soil erosion (7) Loss of plant variety </p> -->

              </div>
              <!-- end div col-6 -->

              <!-- table: 07 -->
              <hr style="border-bottom: 2px solid teal;">
              <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                <h5>(07)	Stakeholder Engagement for Adaptation Options</h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table7">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: center;">Serial</th>
                      <th style="text-align: left;">Adaptation Interventions</th>
                      <th style="text-align: left;">Lead Stakeholder(s) for Implementing Adaptation Initiatives</th>
                      <th style="text-align: center;">Level of Stake/Influence</th>
                      <th style="text-align: left;">Motivation of Stakeholders</th>
                      <th style="text-align: left;">Ability of Stakeholders</th>
                      <th style="text-align: left;">Any Action Need to Boost MOTA</th>
                      <th style="text-align: left;">Co-lead stakeholders</th>
                      <th style="text-align: left;">Private Sector Engagement Potentiality (Y/N)</th>
                      <th style="text-align: left;">Potential Finance Source</th>
                      <th style="text-align: left;">Action</th>
                    </tr>
                    <!-- <tr style="background-color: #99ccff;">
                      <th style="text-align: center;">Construction of Kaptai Dam, many lowland people moved to high hill</th>
                      <th style="text-align: center;">Huge settlement of plain land people</th>
                      <th style="text-align: center;">Increasing population and declaration of protected areas</th>
                      <th style="text-align: center;">Increasing population and food/market demand</th>
                      <th style="text-align: center;">Increasing population and plantation of forest</th>
                      <th style="text-align: center;">Declaring of reserve forest</th>
                      <th style="text-align: center;">If any others</th>
                    </tr> -->
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

              </div>
              <!-- end div -->

              <hr style="border-bottom: 2px solid teal;">
              <div class="row">
                <!-- <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                  <a href="{{ route('Water.Resources.Entry') }}" style="color: black;">
                    <button type="submit" class="btn btn-success" style="width: 100%;border-radius: 20px;">Previous : Water Resources</button>
                  </a>
                </div> -->
                <div class="col-md-8"></div>
                <div class="col-md-4" style="margin: 0px 0px 10px 0px;">
                  <div class="direct-chat-text">
                        <span style="color: #f86d06;">Climate Change Entry end, thank you! &nbsp; Go To: &nbsp; </span>
                    <a href="{{ route('Data.Entry.Dashboard') }}" style="color: black;">Data Entry Dashborad</a>
                  </div>
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
<script src="{{ asset('scripts/climate_change/entry_climate_change.js') }}"></script>
<!-- datepicker -->
<script src="{{ asset('plugins/datepicker/jquery-ui.js') }}"></script>

<script>

document.title = 'Climate Change Risk';

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
