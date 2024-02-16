


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
            <h1 class="m-0" style="font-family: Serif;">Village Common Forest (Surveyed from the Dependent Para)</h1>
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
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Watershed Id</label> 
                    <input type="text" name="watershed_id" id="watershed_id" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                  </div>

                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Watershed Name</label>
                    <input type="text" name="watershed_name" id="watershed_name" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                  </div>
                
                  <input type="hidden" name="para_id" id="para_id" value=""/>
                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Para Name</label>
                    <input type="text" name="para_name" id="para_name" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                  </div> 
                </div> 
                <!-- end row -->
              
  
                <hr style="border-bottom: 2px solid teal;">
                <form id="my_form1" method="POST">
                  <div class="row">
                    <div class="col-md-8" style="margin: 0px 0px 10px 0px;">
                      <h5>(1)	Is your para a beneficiary of a VCF? If yes, provide information on that VCF</h5>
                        <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table11">
                            <thead>  
                              <tr style="background-color: #8ed6f2;">
                                <!-- <th style="text-align: center;">Serial</th> -->
                                <th style="text-align: left;">Name of the VCF</th>
                                <th style="text-align: left;">Area of the VCF (acre)</th>
                                <th style="text-align: left;">Distance from the para centre (km)</th>
                                <th style="text-align: center;">Overall Status w.r.t. past (10 years)</th>
                              </tr>
                            </thead>

                            <tbody id="table_body1"></tbody>

                        </table>

                        <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table12">
                            <thead>  
                              <tr style="background-color: #8ed6f2;">
                                <th colspan="8" style="text-align: center;">Harnessed products, if any (Put Tick)</th>
                              </tr>
                              <tr style="background-color: #99ccff;">
                                <th style="text-align: center;">Timber</th>
                                <th style="text-align: center;">Bamboo</th>
                                <th style="text-align: center;">Fruit/Vegetable</th>
                                <th style="text-align: center;">Fuel wood</th>
                                <th style="text-align: center;">Thatch (reeds, long grass, rice straw, and jute sticks)</th>
                                <th style="text-align: center;">Honey</th>
                                <th style="text-align: center;">Medicinal plants</th>
                                <th style="text-align: center;">Bush meat </th>
                              </tr>
                            </thead>

                            <tbody id="table_body2"></tbody>

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
                </form>
                
                <!-- table: 2 -->
                <hr style="border-bottom: 2px solid teal;">
                <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                  <h5>(2) State the name of the dominant plant species and their status in the VCF </h5>
                  <label>(a) Species type : Native species </label>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table21">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <!-- <th style="text-align: center;">Serial</th> -->
                        <th style="text-align: left;">Dominant species</th>
                        <th style="text-align: left;">Plant-Animal relationship</th>
                        <th style="text-align: left;">Production cost after 1st rotation (tk/acre)</th>
                        <th style="text-align: left;">Yield (gora/acre)</th>
                        <th style="text-align: center;">Selling price (tk/acre)</th>
                        <th style="text-align: center;">Profit (tk/acre)</th>
                        <th style="text-align: center;">Water demand of the species</th>
                        <th style="text-align: center;">Light demand</th>
                        <th style="text-align: center;">Root type (Tap, Fibrous, Both)</th>
                        <th style="text-align: center;">Slope</th>
                        <th style="text-align: center;">Tree/Timber demand</th>
                        <th style="text-align: center;">Soil and Water Retention Capacity</th>
                        <th style="text-align: center;">Present Coverage (% area)</th>
                        <th style="text-align: center;">Present Tree /acre (High=1)</th>
                        <th style="text-align: center;">Past Coverage (% area)</th>
                        <th style="text-align: center;">Action</th>
                      </tr>
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>
                  
                  <div class="row">
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-info" id="add_row21" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                      </div>
                      <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store21" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>
                  </div>

                  <!-- 2nd -->
                  <label>(b) Species type : Exotic/alien species</label>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table22">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <!-- <th style="text-align: center;">Serial</th> -->
                        <th style="text-align: left;">Dominant species</th>
                        <th style="text-align: left;">Plant-Animal relationship</th>
                        <th style="text-align: left;">Production cost after 1st rotation (tk/acre)</th>
                        <th style="text-align: left;">Yield (gora/acre)</th>
                        <th style="text-align: center;">Selling price (tk/acre)</th>
                        <th style="text-align: center;">Profit (tk/acre)</th>
                        <th style="text-align: center;">Water demand of the species</th>
                        <th style="text-align: center;">Light demand</th>
                        <th style="text-align: center;">Root type (Tap, Fibrous, Both)</th>
                        <th style="text-align: center;">Slope</th>
                        <th style="text-align: center;">Tree/Timber demand</th>
                        <th style="text-align: center;">Soil and Water Retention Capacity</th>
                        <th style="text-align: center;">Present Coverage (% area)</th>
                        <th style="text-align: center;">Present Tree /acre (High=1)</th>
                        <th style="text-align: center;">Past Coverage (% area)</th>
                        <th style="text-align: center;">Action</th>
                      </tr>
                      <!-- <tr style="background-color: #99ccff;">
                        <th style="text-align: center;">Yield (gora/acre)</th>
                        <th style="text-align: center;">Selling price (tk/acre)</th>
                        <th style="text-align: center;">Profit (tk/acre)</th>
                      </tr> -->
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>
                  
                  <div class="row">
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-info" id="add_row22" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                      </div>
                      <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store22" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>
                  </div>

                  <!-- 3rd -->
                  <label>(c) Species type : Medicinal Trees</label>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table23">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <!-- <th style="text-align: center;">Serial</th> -->
                        <th style="text-align: left;">Dominant species</th>
                        <th style="text-align: left;">Plant-Animal relationship</th>
                        <th style="text-align: left;">Production cost after 1st rotation (tk/acre)</th>
                        <th style="text-align: left;">Yield (gora/acre)</th>
                        <th style="text-align: center;">Selling price (tk/acre)</th>
                        <th style="text-align: center;">Profit (tk/acre)</th>
                        <th style="text-align: center;">Water demand of the species</th>
                        <th style="text-align: center;">Light demand</th>
                        <th style="text-align: center;">Root type (Tap, Fibrous, Both)</th>
                        <th style="text-align: center;">Slope</th>
                        <th style="text-align: center;">Tree/Timber demand</th>
                        <th style="text-align: center;">Soil and Water Retention Capacity</th>
                        <th style="text-align: center;">Present Coverage (% area)</th>
                        <th style="text-align: center;">Present Tree /acre (High=1)</th>
                        <th style="text-align: center;">Past Coverage (% area)</th>
                        <th style="text-align: center;">Action</th>
                      </tr>
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>
                  
                  <div class="row">
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-info" id="add_row23" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                      </div>
                      <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store23" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>
                  </div>

                  <!-- 4th -->
                  <label>(d) Species type : Fruit Trees</label>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table24">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <!-- <th style="text-align: center;">Serial</th> -->
                        <th style="text-align: left;">Dominant species</th>
                        <th style="text-align: left;">Plant-Animal relationship</th>
                        <th style="text-align: left;">Production cost after 1st rotation (tk/acre)</th>
                        <th style="text-align: left;">Yield (gora/acre)</th>
                        <th style="text-align: center;">Selling price (tk/acre)</th>
                        <th style="text-align: center;">Profit (tk/acre)</th>
                        <th style="text-align: center;">Water demand of the species</th>
                        <th style="text-align: center;">Light demand</th>
                        <th style="text-align: center;">Root type (Tap, Fibrous, Both)</th>
                        <th style="text-align: center;">Slope</th>
                        <th style="text-align: center;">Tree/Timber demand</th>
                        <th style="text-align: center;">Soil and Water Retention Capacity</th>
                        <th style="text-align: center;">Present Coverage (% area)</th>
                        <th style="text-align: center;">Present Tree /acre (High=1)</th>
                        <th style="text-align: center;">Past Coverage (% area)</th>
                        <th style="text-align: center;">Action</th>
                      </tr>
                      <!-- <tr style="background-color: #99ccff;">
                        <th style="text-align: center;">Yield (gora/acre)</th>
                        <th style="text-align: center;">Selling price (tk/acre)</th>
                        <th style="text-align: center;">Profit (tk/acre)</th>
                      </tr> -->
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>
                  
                  <div class="row">
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-info" id="add_row24" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                      </div>
                      <div class="col-md-8"></div>
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store24" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>
                  </div>

                </div>
                <!-- end div col -->

                <!-- table: 3 -->
                <hr style="border-bottom: 2px solid gray;">
                <div class="col-md-8" style="margin: 0px 0px 10px 0px;">
                  <h5>(3)	Status of wildlife in the VCF</h5>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table3">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th style="text-align: center;">Serial</th>
                        <th style="text-align: left;">Wildlife </th>
                        <th style="text-align: center;">Observed available wildlife in the VCF (choose from the left column list or write down the name)</th>
                        <th style="text-align: center;">Status with respect to the past 10 years</th>
                        <th style="text-align: center;">Preferable habitat trees name for wild life</th>
                        <th style="text-align: left;">Action</th>
                      </tr>
                      <!-- <tr style="background-color: #99ccff;">
                        <th style="text-align: center;">High</th>
                        <th style="text-align: center;">Medium</th>
                        <th style="text-align: center;">Low</th>
                      </tr> -->
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

                  <p style="margin: 0px 0px 0px 0px;"><strong>Noted:</strong></p>
                  <p style="margin: 0px 0px 0px 0px;"># For example: Hati, /Pahari kossop,/ Lojjaboti Banor /Ashmi/ultaleji Banor, Choshmapora banor/Mukhpora Honuman, Bono biral/Meso biral, Maya harin/Chitra harin, /Khek shial, Bonno shukor, Lal bonmurgi, Kath moyur/sabuj moyur</p>
                  <p style="margin: 0px 0px 0px 0px;"># Ajogor shap/Ghokhra shap, Laodoga shap (Sabuj Shap), Dudhraj/Kalnagini/Jolpaironga Daraj shap</p>
                  <p style="margin: 0px 0px 0px 0px;"># Pahari suichora/Beguni kokil/Babui/munia/Moyna/Bou-kotha Kow/Dhonesh</p>

                </div>
                <!-- end div col-6 -->

                <!-- table: 4 -->
                <hr style="border-bottom: 2px solid  black;">
                <div class="col-md-6" style="margin: 0px 0px 10px 0px;">
                  <h5>(4)	Identify the overall status of different components of the VCF (put tick) </h5>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table4">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th style="text-align: center;">Serial</th>
                        <th style="text-align: left;">Forest status</th>
                        <th style="text-align: center;">Status with respect to the past (10 years)</th>
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

                <hr style="border-bottom: 2px solid teal;">
                <div class="row">
                  <div class="col-md-6" style="margin: 0px 0px 10px 0px;">
                    <!-- <form id="my_form5" method="POST"> -->
                    
                      <label>	(e) What are the general rules to manage VCF ? </label>
                      <div class="row">
                        <div class ="col-md-12" id="radioDiv" style="margin: 0px 0px 10px 0px;">
                          <textarea id="vcf_manage_general_rule" name="vcf_manage_general_rule" class="form-control reset" rows="3" placeholder="Please write like following example : For new line [shift+enter] &#10;1) Rule1 &#10;2) Rule2 &#10;"></textarea>
                        </div>
                      </div>

                      <label>	(f)	Who manages VCF and what are the challenges to manage VCF ? </label>
                      <div class="row">
                        <div class ="col-md-12" id="radioDiv" style="margin: 0px 0px 10px 0px;">
                          <textarea id="vcf_manage_and_challenge" name="vcf_manage_and_challenge" class="form-control reset" rows="3" placeholder="Please write like following example : For new line [shift+enter] &#10;1) Answer1 &#10;2) Answer2 &#10;"></textarea>
                        </div>
                      </div>

                      <label>	(g)	Preference of tree species instead of teak in terms of economic return and environmental conservation</label>
                      <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table5">
                          <thead>  
                            <tr style="background-color: #8ed6f2;">
                              <th style="text-align: left;">Gamar & Sojne</th>
                              <th style="text-align: center;">Kadam & Kushum</th>
                              <th style="text-align: center;">Teli Garjan</th>
                              <th style="text-align: center;">Kanak and Tetul</th>
                              <th style="text-align: left;">If others write the name</th>
                            </tr>
                          </thead>

                          <tbody id="table_body"></tbody>

                      </table>

                      <div class="row">
                        <!-- <div class="col-md-9"></div> -->
                        <div class="col-md-3" style="margin: 20px 0px 10px 0px;">
                          <button type="submit" class="btn btn-primary" id="btn_store5" style="width: 100%;border-radius: 5px;color: black;">Save Info</button>
                        </div>  
                      </div>

                    <!-- </form> -->
                  </div>
                </div> 

                <!-- table : 5 -->
                <hr style="border-bottom: 2px solid  teal;">
                <div class="col-md-8" style="margin: 0px 0px 10px 0px;">
                  <h5>(5)	Is there any forest management practice available to conserve VCF in your locality? </h5>
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table6">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th style="text-align: center;">Tackling man-made forest fires</th>
                        <th style="text-align: left;">Multilayer plantation</th>
                        <th style="text-align: center;">Prohibition of logging, hunting, and livestock grazing inside VCF</th>
                        <th style="text-align: center;">Control of Jhum cultivation</th>
                        <th style="text-align: left;">If others write the name</th>
                      </tr>
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>
                </div>

                <div class="col-md-10" style="margin: 0px 0px 10px 0px;">
                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table7">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th style="text-align: center;">Enrichment Plantation with native/indigenous species</th>
                        <th style="text-align: left;">Transition pathway of teak tree</th>
                        <th style="text-align: center;">Forest silviculture operations</th>
                        <th style="text-align: center;">Forest chemical management</th>
                        <th style="text-align: center;">Establishment of community tree nurseries</th>
                        <th style="text-align: center;">Infrastructures development</th>
                        <th style="text-align: left;">If others write the name</th>
                      </tr>
                    </thead>

                      <tbody id="table_body"></tbody>

                  </table>
                

                  <div class="row">
                    <!-- <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-info" id="add_row5" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div> -->
                    <div class="col-md-10"></div>
                    <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                        <button type="submit" class="btn btn-primary" id="btn_store6" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                    </div>
                  </div>
                </div>

                

              <hr style="border-bottom: 2px solid teal;">
              <div class="row">
                <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                  <a href="{{ route('Para.EcoSystem') }}" style="color: black;">
                    <button type="submit" class="btn btn-success" style="width: 100%;border-radius: 20px;">Previous : Eco-System</button>
                  </a>
                </div>
                <div class="col-md-8"></div>
                <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                  <a href="{{ route('Entry.Climate.Change') }}">
                    <button type="submit" class="btn btn-success" style="color: black;width: 100%;border-radius: 20px;">Next : Climate Change</button>
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
<script src="{{ asset('scripts/ecology/forest.js') }}"></script>
<!-- datepicker -->
<script src="{{ asset('plugins/datepicker/jquery-ui.js') }}"></script>

<script>

document.title = 'forest';

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
