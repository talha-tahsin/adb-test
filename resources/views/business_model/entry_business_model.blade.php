


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
            <h1 class="m-0" style="font-family: Serif;">Section B7.	Business Model </h1>
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
                  
                <div class="col-md-10" style="margin: 0px 0px 10px 0px;">
                  <h5>	Product List with codes </h5>
                    <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table1">
                        <thead>  
                          <tr style="background-color: #8ed6f2;">
                            <th colspan="6" style="text-align: center;">Product Type per Category</th>
                          </tr>
                          <tr style="background-color: #99ccff;">
                            <th style="text-align:center;border-bottom: none;">Staple food</th>
                            <th style="text-align:center;border-bottom: none;">Medicinal</th>
                            <th style="text-align:center;border-bottom: none;">Fruit</th>
                            <th style="text-align:center;border-bottom: none;">Vegetable</th>
                            <th style="text-align:center;border-bottom: none;">Commercial</th>
                            <th style="text-align:center;border-bottom: none;">Other Species</th>
                          </tr>
                        </thead>

                        <tbody id="table_body">
                          <tr>
                            <td style="text-align:center;border-bottom: none;">
                              1 = Rice (HYV) <br> 2 = Rice (Jhum/ Local) <br> 3 = Maize <br> 4 = Wheat
                            </td>
                            <td style="text-align:center;border-bottom: none;">
                              5 = Tamarind <br> 6 = Tulshi <br> 7 = Moringa <br> 8 = Neem <br> 9 = others
                            </td>
                            <td style="text-align:center;border-bottom: none;">
                              10 = Mango <br> 11 = Litchi <br> 12 = Jackfruit <br> 13 = Banana <br> 14 = Papaya <br> 15 = Dragon fruit 
                              <br> 16 = Pine Apple <br> 44 = Sweet orange (Malta)
                            </td>
                            <td style="text-align:center;border-bottom: none;">
                              17 = Cilantro <br> 18 = Culantro <br> 19 = Sweet gourd <br> 20 = Taro <br> 21 = French bean <br> 22 = Bottle gourd <br> 23 = Brinjal <br> 45 = Potato
                            </td>
                            <td style="text-align:center;border-bottom: none;">
                              24 = Teak <br> 25 = Other natural timbers <br> 26 = Rubber <br> 27 = Cashew <br> 28 = Coffee <br> 29 = Uluful (Broom Grass) <br> 
                              30 = Bamboo <br> 31 = Cane <br> 32 = Bamboo shoots
                            </td>
                            <td style="text-align:center;border-bottom: none;">
                              33= Sunflower <br> 34= Mustard <br> 35= Flaxseeds <br> 36= Chilli <br> 37= Turmeric & ginger <br> 38= Sugarcane <br> 39= Shimul 
                              <br> 40= Mushroom <br> 41=Fish <br> 42=Cattle/Pig <br> 43=Poultry (Hen/Pegion/Duck)
                            </td>
                          </tr>
                        </tbody>

                    </table>

                    <!-- <div class="row">
                      <div class="col-md-3" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-info" id="add_row1" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                      </div>
                      <div class="col-md-6"></div>
                      <div class="col-md-3" style="margin: 10px 0px 10px 0px;">
                          <button type="submit" class="btn btn-primary" id="btn_store1" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                      </div>
                    </div> -->
    
                </div>
                <!-- end col-md -->

              </div>
              <!-- end row -->
                
              <!-- table: 02 -->
              <hr style="border-bottom: 2px solid teal;">
              <div class="col-md-10" style="margin: 0px 0px 10px 0px;">
                <h5>(2)	Household storage and consumption pattern </h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table2">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th rowspan="2" style="text-align: center;">Serial</th>
                      <th rowspan="2" style="text-align: center;">Consumed Good</th>
                      <th rowspan="2" style="text-align: center;">Average number of persons in  Household </th>
                      <th colspan="2" style="text-align: center;">Quantity Bought at a time (kg) in a month for a Household</th>
                      <th rowspan="2" style="text-align: left;">Storage facility availability </th>
                      <th rowspan="2" style="text-align: center;">Maximum Number of days stored</th>
                      <th rowspan="2" style="text-align: center;">Consumption Frequency</th>
                      <th rowspan="2" style="text-align: left;">Action</th>
                    </tr>
                    <tr style="background-color: #99ccff;">
                      <th style="text-align:center;border-bottom: none;">Need</th>
                      <th style="text-align:center;border-bottom: none;">Ability to buy or source</th>
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
                <h5>(3)	Involvement of women in livelihood activity </h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table3">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th rowspan="2" style="text-align: center;">Serial</th>
                      <th rowspan="2" style="text-align: left;">Product Name/Code</th>
                      <th colspan="9" style="text-align: center;">Stages of activity (High/Medium/Low)</th>
                      <th rowspan="2" style="text-align: left;">Activities where women have more scope to be involved</th>
                      <th rowspan="2" style="text-align: left;">Action</th>
                    </tr>
                    <tr style="background-color: #99ccff;">
                      <th style="text-align:center;border-bottom: none;">Pre-production/Fish Fry Collection</th>
                      <th style="text-align:center;border-bottom: none;">Land/Pond/Livestock & poultry shelter preparation</th>
                      <th style="text-align:center;border-bottom: none;">Rearing (Feeding/Watering/Bathing)</th>
                      <th style="text-align:center;border-bottom: none;">Sowing Seeds</th>
                      <th style="text-align:center;border-bottom: none;">Weeding</th>
                      <th style="text-align:center;border-bottom: none;">Fertilizer and pesticides apply</th>
                      <th style="text-align:center;border-bottom: none;">Harvesting</th>
                      <th style="text-align:center;border-bottom: none;">Processing</th>
                      <th style="text-align:center;border-bottom: none;">Selling</th>
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
                <h5>(4)	Involvement of youth in livelihood activity </h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table4">
                  <thead>
                  <tr style="background-color: #8ed6f2;">
                      <th rowspan="2" style="text-align: center;">Serial</th>
                      <th rowspan="2" style="text-align: left;">Product Name/Code</th>
                      <th colspan="9" style="text-align: center;">Stages of activity (High/Medium/Low)</th>
                      <th rowspan="2" style="text-align: left;">Activities where youth have more scope to be involved</th>
                      <th rowspan="2" style="text-align: left;">Action</th>
                    </tr>
                    <tr style="background-color: #99ccff;">
                      <th style="text-align:center;border-bottom: none;">Pre-production/Fish Fry Collection</th>
                      <th style="text-align:center;border-bottom: none;">Land/Pond/Livestock & poultry shelter preparation</th>
                      <th style="text-align:center;border-bottom: none;">Rearing (Feeding/Watering/Bathing)</th>
                      <th style="text-align:center;border-bottom: none;">Sowing Seeds</th>
                      <th style="text-align:center;border-bottom: none;">Weeding</th>
                      <th style="text-align:center;border-bottom: none;">Fertilizer and pesticides apply</th>
                      <th style="text-align:center;border-bottom: none;">Harvesting</th>
                      <th style="text-align:center;border-bottom: none;">Processing</th>
                      <th style="text-align:center;border-bottom: none;">Selling</th>
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

              <!-- table : 05 -->
              <hr style="border-bottom: 2px solid  teal;">
              <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                <h5>(05)	Value chain sensitivity to sudden shock  </h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table5">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: center;">Serial</th>
                      <th style="text-align: left;">Sensitivity Factor</th>
                      <th style="text-align: left;">Items</th>
                      <th style="text-align: left;">Quantity/number/level of satisfaction</th>
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

                <!-- <p style="margin: 0px 0px 0px 0px;"><strong>Noted:</strong></p>
                <p style="margin: 0px 0px 0px 0px;"># if low satisfied put 1; if medium put 2; if highly satisfied put 3 </p> -->


              </div>
              <!-- end div -->

              <!-- table : 06 -->
              <hr style="border-bottom: 2px solid  teal;">
              <div class="col-md-6" style="margin: 0px 0px 10px 0px;">
                <h5>(06)	Express your preferences of certain agro-forestry products </h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table6">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: center;">Serial</th>
                      <th style="text-align: left;">Product Name </th>
                      <th style="text-align: left;">Degree of Preferences </th>
                      <th style="text-align: center;">Applicability of the product in this watershed </th>
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

                <!-- <p style="margin: 0px 0px 0px 0px;"><strong>Noted:</strong></p>
                <p style="margin: 0px 0px 0px 0px;"><span style="color: teal;"># For Merits Items: </span> (1) Traditional and easy to cultivate (2) Planting materials found locally (3) Short rotation (4) Low cost of production (5) Cultural issue (6) Return in short duration </p>
                <p style="margin: 0px 0px 0px 0px;"> <span style="color: #FF0000;"># For Demerits Items: </span> (1) Decline productivity (2) Little profit margin (3) Need high amount of fertilizer and pesticide (4) Negative attitude by government agency (5) Deforestation and land degradation (6) Soil erosion (7) Loss of plant variety </p> -->

              </div>
              <!-- end div -->

              <!-- table: 07 -->
              <hr style="border-bottom: 2px solid teal;">
              <div class="col-md-8" style="margin: 0px 0px 10px 0px;">
                <h5>(07)	Express your preferences on management practices </h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table7">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: center;">Serial</th>
                      <th style="text-align: left;">Product Name </th>
                      <th style="text-align: left;">Degree of Preferences </th>
                      <th style="text-align: center;">Applicability of the practice in this watershed</th>
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
                  <!-- <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-info" id="add_row7" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                  </div> -->
                  <div class="col-md-10"></div>
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store7" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                  </div>
                </div>

              </div>
              <!-- end div -->

              <!-- table : 08 -->
              <hr style="border-bottom: 2px solid  teal;">
              <div class="col-md-10" style="margin: 0px 0px 10px 0px;">
                <h5>(08)	Food Shortage Evaluation </h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table8">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: left;">Serial</th>
                      <th style="text-align: left;">Food shortage duration</th>
                      <th style="text-align: left;">Household (%)</th>
                      <th style="text-align: left;">Reason (Code)</th>
                      <th style="text-align: left;">Action</th>
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
              
                <p style="margin: 0px 0px 0px 0px;"><strong>Reason codes:</strong></p>
                <p style="margin: 0px 0px 0px 0px;">1= Tendency of crop damage 2= Less production 3= Irrigation problem, high cost 4= Low wage rate </p>
                <p style="margin: 0px 0px 0px 0px;">5= Lack in employment opportunities (Day labor) 6= Not being able to cultivate land on lease due to lack of capital </p>
                <p style="margin: 0px 0px 0px 0px;">7= Cultivating land not available for (Sharecropping) 8= Decrease in production due to lack of money to buy agricultural equipment </p>
              

              </div>
              <!-- end div -->

              <!-- table: 09 -->
              <hr style="border-bottom: 2px solid gray;">
              <div class="col-md-8" style="margin: 0px 0px 10px 0px;">
                <h5>(09)	Major 3-4 Occupational Change/addition due to hazards or sudden shocks</h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table9">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: center;">Serial</th>
                      <!-- <th style="text-align: left;">Category</th> -->
                      <th style="text-align: left;">Current/New/additional Occupation</th>
                      <th style="text-align: left;">Previous Occupation</th>
                      <th style="text-align: left;">Reason for switching/new addition/change</th>
                      <th style="text-align: left;">New Occupation Started in Which Year (Approximately)</th>
                      <th style="text-align: left;">Action</th>
                    </tr>
                  </thead>

                    <tbody id="table_body"></tbody>

                </table>

                <div class="row">
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-info" id="add_row9" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                  </div>
                  <div class="col-md-8"></div>
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store9" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                  </div>
                </div>

              </div>
              <!-- end div -->

              <!-- table: 10 example -->
              <!-- <hr style="border-bottom: 2px solid gray;">
              <div class="col-md-8" style="margin: 0px 0px 10px 0px;">
                <h5>(10) Private sector involvement:</h5>
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table10">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th style="text-align: left;">Question</th>
                      <th style="text-align: left;">Answer</th>
                    </tr>
                  </thead>

                    <tbody id="table_body">
                      <tr>
                        <td style="text-align: left;">
                          <label for="private_sector_support">Any private sector is engaged in supporting agro-forestry production in this watershed </label>
                        </td>
                        <td style="text-align: center;">
                          <select type="text" id="private_sector_support" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                            <option value="" selected disabled> Select Option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Do Not Know">Do Not Know</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>

                </table>

                <div class="row">
                  <div class="col-md-10"></div>
                  <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store9" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                  </div>
                </div>

              </div> -->

              <hr style="border-bottom: 2px solid teal;">
              <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                <h5>(10) Private sector involvement:</h5>
                <label for="private_sector_support">Any private sector is engaged in supporting agro-forestry production in this watershed </label>
                <div class="row">
                  <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                    <select type="text" id="private_sector_support" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                      <option value="" selected disabled> Select Option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Do Not Know">Do Not Know</option>
                    </select>
                  </div>

                  <div class="col-md-4 hide" id="input1" style="margin: 0px 0px 20px 0px;">
                    <input type="text" id="private_sector_companies" name="tendency_of_medicine" class="form-control initialVal" placeholder="If Yes, state the name of private sector companies.." style="border-radius: 5px;border:2px solid #898AEE;">
                  </div>
                  
                </div>

                <label for="how_private_sector_engaged">How private sector is engaged in this watershed? </label>
                 <div class="row">
                  <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                    <select type="text" id="how_private_sector_engaged" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                      <option value="" selected disabled> Select Option </option>
                      <option value="Buying products from producers">Buying products from producers</option>
                      <option value="Direct investment and production with the supervision of the private sector">Direct investment and production...</option>
                    </select>
                  </div>
                </div>

                  <label for="highly_preferred_product">Which products are highly preferred by private sector investment? </label>
                  <div class="row">
                    <div class="col-md-12">
                      <label>Note: (1) Rice (2) Vegetable (3) Spice (4) Fruits (5) Fish (6) Livestock (7) Poultry (8) Oil Seeds (9) Timber (10) Non-timber Forestry Products (11) Medicinal plants </label>
                    </div>

                    <div class="col-md-4" style="margin: 0px 0px 20px 0px;">
                      <input type="text" id="highly_preferred_product" name="tendency_of_medicine" class="form-control initialVal" placeholder="Please write with comma from the above sugesstion.." style="border-radius: 5px;border:2px solid #898AEE;">
                    </div>
                  </div>

                  <label for="if_not_interest_why">If the private sector is not interested, why? (state major 3 challenges) </label>
                  <div class="row">  
                    <div class="col-md-4" style="margin: 0px 0px 20px 0px;">
                      <input type="text" id="if_not_interest_why" name="tendency_of_medicine" class="form-control initialVal" placeholder="Please write.." style="border-radius: 5px;border:2px solid #898AEE;">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store10" style="width: 100%;border-radius: 5px;color: black;">Save All Answer</button>
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
<script src="{{ asset('scripts/business_model/entry_business_model.js') }}"></script>
<!-- datepicker -->
<script src="{{ asset('plugins/datepicker/jquery-ui.js') }}"></script>

<script>

document.title = 'business model';

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
