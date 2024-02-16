


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
            <h1 class="m-0" style="font-family: Serif;">KII Checklist for Producer </h1>
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
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Para Name</label>
                    <input type="text" name="para_name" id="para_name" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                  </div>
                  
                  <input type="hidden" name="producer_id" id="producer_id" value=""/>
                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Producer Name</label>
                    <input type="text" name="producer_name" id="producer_name" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                  </div>

                  <input type="hidden" name="product_id" id="product_id" value=""/>
                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Product Name</label>
                    <input type="text" name="product_name" id="product_name" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                  </div>

                </div> 
                <!-- end row -->
                
                <!-- table: 01 -->
                <hr style="border-bottom: 2px solid teal;">
                <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                  <h5>(1)	Production and impact of hazards</h5>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table1">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th  style="text-align: center;">Serial</th>
                        <th  style="text-align: left;">Indicators</th>
                        <th  style="text-align: center;">Poush</th>
                        <th  style="text-align: center;">Magh</th>
                        <th  style="text-align: center;">Falgun</th>
                        <th  style="text-align: center;">Chaitra</th>
                        <th  style="text-align: center;">Boisakh</th>
                        <th  style="text-align: center;">Joishtho</th>
                        <th  style="text-align: center;">Ashar</th>
                        <th  style="text-align: center;">Srabon</th>
                        <th  style="text-align: center;">Vadro</th>
                        <th  style="text-align: center;">Ashwin</th>
                        <th  style="text-align: center;">Kartik</th>
                        <th  style="text-align: center;">Agrahyan</th>
                      </tr>
                      <!-- <tr style="background-color: #99ccff;">
                        <th style="text-align:center;border-bottom: none;">Need</th>
                        <th style="text-align:center;border-bottom: none;">Ability to buy or source</th>
                      </tr> -->
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>

                  <div class="row"> 
                      <label class="control-label col-md-12" id="label11">Frequency of Hazards</label>
                    <div class="col-md-3" style="margin: 0px 0px 10px 0px;"> 
                      <input type="text" id="answer11" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up...">
                    </div>
                  </div>
                  
                  <div class="row"> 
                      <label class="control-label col-md-12" id="label12">Selling price of intermediate and value-added goods</label>
                    <div class="col-md-3" style="margin: 0px 0px 10px 0px;"> 
                      <input type="text" id="answer12" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up...">
                    </div>
                  </div>

                  <div class="row">
                    <!-- <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-info" id="add_row1" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div> -->
                    <div class="col-md-10"></div>
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store1" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>
                  </div>

                </div>
                <!-- end div -->

                <!-- table: 02 -->
                <hr style="border-bottom: 2px solid gray;">
                <div class="col-md-10" style="margin: 0px 0px 10px 0px;">
                  <h5>(2)	Input sources of production </h5>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table2">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th style="text-align: center;">Serial</th>
                        <th style="text-align: left;">Input Name</th>
                        <th style="text-align: center;">From where input is received</th>
                        <th style="text-align: center;">The time needed to receive (frequency)</th>
                        <th style="text-align: center;">Impediment</th>
                        <th style="text-align: left;">Not Applicable</th>
                        <th style="text-align: left;">Other Name (If select others)</th>
                        <th style="text-align: left;">Action</th>
                      </tr>
                      <!-- <tr style="background-color: #99ccff;">
                        <th style="text-align:center;border-bottom: none;">Local Market/ City Center</th>
                        <th style="text-align:center;border-bottom: none;">Government</th>
                        <th style="text-align:center;border-bottom: none;">Community /Personal</th>

                        <th style="text-align:center;border-bottom: none;">Always Available</th>
                        <th style="text-align:center;border-bottom: none;">Often</th>
                        <th style="text-align:center;border-bottom: none;">Rare</th>

                        <th style="text-align:center;border-bottom: none;">Policy</th>
                        <th style="text-align:center;border-bottom: none;">Hazard</th>
                        <th style="text-align:center;border-bottom: none;">Political</th>
                        <th style="text-align:center;border-bottom: none;">Tips/ Bribes/stocking of products</th>
                        <th style="text-align:center;border-bottom: none;">others</th>
                      </tr> -->
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
                <hr style="border-bottom: 2px solid  black;">
                <div class="col-md-6" style="margin: 0px 0px 10px 0px;">
                  <h5>(3)	Economies of production </h5>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table3">
                    <thead>
                    <tr style="background-color: #8ed6f2;">
                        <th style="text-align: center;">Serial</th>
                        <th style="text-align: left;">Items</th>
                        <th style="text-align: left;">Input</th>
                      </tr>
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>

                  <div class="row">
                    <!-- <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-info" id="add_row3" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div> -->
                    <div class="col-md-10"></div>
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store3" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>
                  </div>

                </div>
                <!-- end div -->

                <!-- table : 04 -->
                <hr style="border-bottom: 2px solid  teal;">
                <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                  <h5>(04)	Training and capacity building </h5>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table4">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th style="text-align: center;">Serial</th>
                        <th style="text-align: left;">Training topic</th>
                        <th style="text-align: left;">Training Received?</th>
                        <th style="text-align: left;">If Yes, from where did you receive training or information related to your product and production process?</th>
                        <th style="text-align: left;">Satisfaction level on received training</th>
                        <th style="text-align: left;">From where do you receive assistance on product marketing and sales?</th>
                        <th style="text-align: left;">Training needed on (Please mention)</th>
                        <th style="text-align: left;">Name (if select others)</th>
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
                      <button type="submit" class="btn btn-info" id="add_row4" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                    <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store4" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>
                  </div>

                </div>
                <!-- end div -->

                <!-- table : 05 -->
                <hr style="border-bottom: 2px solid teal;">
                <div class="col-md-12" style="margin: 20px 0px 10px 0px;">
                    <h5>(5) Processing, storage, quality control, traceability, marketing and distribution</h5>

                    <label id="label2a">What is the nature of the Grading for the primary product?</label>
                    <div class="row">
                      <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                        <select type="text" id="selectOption2a" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                          <option value="" selected disabled>-- Select Option --</option>
                          <option value="No grading, sell overall bulk">No grading, sell overall bulk</option>
                          <option value="Some farmers do grading others do not">Some farmers do grading others do not</option>
                          <option value="Overall, most farmers do grading">Overall, most farmers do grading</option>
                          <option value="Very few farmers do grading">Very few farmers do grading</option>
                        </select>
                      </div>
                    </div>

                    <label id="label2b">Production type</label>
                    <div class="row">
                      <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                        <select type="text" id="selectOption2b" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                          <option value="" selected disabled>-- Select Option --</option>
                          <option value="Subsistence farming/Homestead">Subsistence farming/Homestead</option>
                          <option value="Commercial Farming">Commercial Farming</option>
                          <option value="Jhum">Jhum</option>
                        </select>
                      </div>
                    </div>

                    <label id="label2c">Distance from nearest market/selling point from the farm gate</label>
                    <div class="row">
                      <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                        <select type="text" id="selectOption2c" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                          <option value="" selected disabled>-- Select Option --</option>
                          <option value="Less than 1 km">Less than 1 km</option>
                          <option value="1-2 km">1-2 km</option>
                          <option value="2-3 km">2-3 km</option>
                          <option value="3-4 km">3-4 km</option>
                          <option value="4-5 km">4-5 km</option>
                          <option value="5-6 km">5-6 km</option>
                          <option value="More than 5 km">More than 5 km</option>
                        </select>
                      </div>
                    </div>

                    <label id="label2d">Shelf life (The time needed to perish or diminish the Quality)</label>
                    <div class="row">
                      <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                        <select type="text" id="selectOption2d" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                          <option value="" selected disabled>-- Select Option --</option>
                          <option value="Low">Low</option>
                          <option value="Moderate">Moderate</option>
                          <option value="High">High</option>
                          <option value="Very High">Very High</option>
                        </select>
                      </div>
                    </div>

                    <label id="label2e">How many days does the product remain in your hand?</label>
                    <div class="row">
                      <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                        <select type="text" id="selectOption2e" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                          <option value="" selected disabled>-- Select Option --</option>
                          <option value="Less than one day">Less than one day</option>
                          <option value="1 to 3 days">1 to 3 days</option>
                          <option value="Greater than 3 days">Greater than 3 days</option>
                        </select>
                      </div>
                    </div>

                    <label id="label2f">How much you are interested in producing the product</label>
                    <div class="row">
                      <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                        <select type="text" id="selectOption2f" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                          <option value="" selected disabled>-- Select Option --</option>
                          <option value="Low">Low</option>
                          <option value="Moderate">Moderate</option>
                          <option value="High">High</option>
                        </select>
                      </div>
                    </div>

                    <label id="label2g">Necessity for storage site?</label>
                    <div class="row">
                      <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                        <select type="text" id="selectOption2g" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                          <option value="" selected disabled>-- Select Option --</option>
                          <option value="Low">Low</option>
                          <option value="Moderate">Moderate</option>
                          <option value="High">High</option>
                        </select>
                      </div>
                    </div>

                    <label id="label2h">Necessity for Processing site?</label>
                    <div class="row">
                      <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                        <select type="text" id="selectOption2h" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                          <option value="" selected disabled>-- Select Option --</option>
                          <option value="Low">Low</option>
                          <option value="Moderate">Moderate</option>
                          <option value="High">High</option>
                        </select>
                      </div>
                    </div>

                    <label id="label2i">Are you aware about quality and safety standard of the products?</label>
                    <div class="row">
                      <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                        <select type="text" id="selectOption2i" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                          <option value="" selected disabled>-- Select Option --</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>

                      <div class="col-md-2 hide" id="input2i" style="margin: 0px 0px 10px 0px;">
                        <input type="text" id="answer2i" name="answer2i" class="form-control initialVal" placeholder="If Yes, Why?.." style="border-radius: 5px;border:2px solid #898AEE;">
                      </div>
                    </div>

                    <!-- (j) -->
                    <label id="label2j">What kind of initiatives you take to maintain product quality and safety? (state major 3)</label>
                    <div class="row">
                      <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                        <input type="text" id="answer2j" name="answer2j" class="form-control initialVal" placeholder="Please write something relevent.." style="border-radius: 5px;border:2px solid #898AEE;">
                      </div>
                    </div>
                    
                    <!-- +++ -->
                    <label id="label1">(i) Do you prefer to have smart traceability system at farm level to track that you have met the standards set by certification bodies? </label>
                    <div class="row">
                      <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                        <select type="text" id="selectOption" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                          <option value="" selected disabled>-- Select Option --</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>

                      <div class="col-md-4 hide" id="input1" style="margin: 0px 0px 10px 0px;">
                        <input type="text" id="answer1" name="answer1" class="form-control initialVal" placeholder="If No, Why?.." style="border-radius: 5px;border:2px solid #898AEE;">
                      </div>
                    </div>

                    <label id="label2">Any private sector is engaged in supporting agro-forestry production in this watershed? </label>
                    <div class="row">
                      <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                        <select type="text" id="selectOption2" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                          <option value="" selected disabled> Select Option</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>

                      <div class="col-md-4 hide" id="input2" style="margin: 0px 0px 10px 0px;">
                        <input type="text" id="answer2" name="answer2" class="form-control initialVal" placeholder="If Yes, state the name of private sector companies.." style="border-radius: 5px;border:2px solid #898AEE;">
                      </div>
                    </div>
                
                  <label id="label3">How private sector is engaged in this watershed? </label>
                  <div class="row">
                    <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                      <select type="text" id="answer3" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                        <option value="" selected disabled> Select Option </option>
                        <option value="Buying products from producers">Buying products from producers</option>
                        <option value="Direct investment and production with the supervision of the private sector">Direct investment and production...</option>
                      </select>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12" style="margin: 0px 0px 0px 10px;">
                      <label class="control-label" id="label4">What are the expectations and criteria for your preference for hill and organic products?</label>
                      <div class="form-group">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" name="type1" value="Rice">
                          <label class="form-check-label">Rice</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" name="type1" value="Vegetable">
                          <label class="form-check-label">Vegetable</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" name="type1" value="Fruits">
                          <label class="form-check-label">Fruits</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" name="type1" value="Fish">
                          <label class="form-check-label">Fish</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" name="type1" value="Livestock">
                          <label class="form-check-label">Livestock</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" name="type1" value="Poultry">
                          <label class="form-check-label">Poultry</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" name="type1" value="Oil Seeds">
                          <label class="form-check-label">Oil Seeds</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" name="type1" value="Timber">
                          <label class="form-check-label">Timber</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" name="type1" value="Non-timber Forestry Products">
                          <label class="form-check-label">Non-timber Forestry Products</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" name="type1" value="Medicinal plants">
                          <label class="form-check-label">Medicinal plants</label>
                        </div>
                        
                      </div>
                    </div>
                  </div>

                    <label id="label5">If the private sector is not interested, why? (state major 3 challenges) </label>
                    <div class="row">
                      <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                        <input type="text" id="answer5" name="answer5" class="form-control initialVal" placeholder="Please write something relevent to the provided question.." style="border-radius: 5px;border:2px solid #898AEE;">
                      </div>
                    </div>

                    <label id="label6">How much you are interested in private sector engagement? </label>
                    <div class="row">
                      <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                        <select type="text" id="answer6" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                          <option value="" selected disabled> Select Option </option>
                          <option value="Low">Low</option>
                          <option value="Moderate">Moderate</option>
                          <option value="High">High</option>
                        </select>
                      </div>
                    </div>

                    <label id="label7">Are there any e-commerce facilities to support selling your product? </label>
                    <div class="row">
                      <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                        <select type="text" id="selectOption3" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                          <option value="" selected disabled> Select Option</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <div class="col-md-2 hide" id="input3" style="margin: 0px 0px 10px 0px;">
                        <input type="text" id="answer7" name="answer7" class="form-control initialVal" placeholder="If Yes, state the name of private sector companies.." style="border-radius: 5px;border:2px solid #898AEE;">
                      </div>
                    </div>

                    <label id="label8">How much you are interested to sell through e-commerce? </label>
                    <div class="row">
                      <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                        <select type="text" id="answer8" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                          <option value="" selected disabled> Select Option </option>
                          <option value="Low">Low</option>
                          <option value="Moderate">Moderate</option>
                          <option value="High">High</option>
                        </select>
                      </div>
                    </div>

                    <label id="label9">What are barriers for e-commerce based marketing and distribution of products? (state major 3 barriers) </label>
                    <div class="row">
                      <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                        <input type="text" id="answer9" name="answer9" class="form-control initialVal" placeholder="Please write something relevent.." style="border-radius: 5px;border:2px solid #898AEE;">
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-10"></div>
                      <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store5" style="width: 100%;border-radius: 5px;color: black;">Save All Answer </button>
                      </div>  
                    </div>
                  <!-- </form> -->

                </div>


              <hr style="border-bottom: 2px solid teal;">
              <div class="row">
                <!-- <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                  <a href="{{ route('Water.Resources.Entry') }}" style="color: black;">
                    <button type="submit" class="btn btn-success" style="width: 100%;border-radius: 20px;">Previous : Base-line Forest</button>
                  </a>
                </div> -->
                <div class="col-md-8"></div>
                <div class="col-md-4" style="margin: 0px 0px 10px 0px;">
                  <div class="direct-chat-text">
                        <span style="color: #f86d06;">Business Model Entry end here, thank you! &nbsp; Go To: &nbsp; </span>
                    <a href="{{ route('Value.Chain.Dashboard') }}" style="color: black;">Value Chain Dashboard</a>
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
<script src="{{ asset('scripts/kii_checklist/entry_kii_producer.js') }}"></script>
<!-- datepicker -->
<script src="{{ asset('plugins/datepicker/jquery-ui.js') }}"></script>

<script>

document.title = 'kii for producer';

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

    // insertTableRow();

    // for (var i = 0; i < 3; i++) {
    //     insertTableRow();
    // }


});

</script>



@endsection
