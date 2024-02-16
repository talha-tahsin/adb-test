


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
            <h1 class="m-0" style="font-family: Serif;">Community-wise disaggregated livelihood preferences</h1>
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
              
              <!-- <form id="my_form" method="POST"> -->
                  <input type="hidden" name="userName" id="userName" value="{{ Auth::user()->name }}"/>

                  <div class="row"> 
                    <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                      <label class="control-label" for="community_id"><span style="color: red;">★&nbsp;</span>Watershed Id</label> 
                      <input type="text" name="watershed_id" id="watershed_id" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                    </div> 
                    <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                      <label class="control-label" for="watershed_name"><span style="color: red;">★&nbsp;</span>Watershed Name</label>
                      <input type="text" name="watershed_name" id="watershed_name" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                    </div>
                    
                    <input type="hidden" name="para_id" id="para_id" value=""/>
                    <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                      <label class="control-label" for="para_name"><span style="color: red;">★&nbsp;</span>Para Name</label>
                      <input type="text" name="para_name" id="para_name" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                    </div> 
                  </div> 
                  <!-- end row -->
              
              <hr style="border-bottom: 2px solid black;">

              <div class="form-group" id="table_div">
              <h5>Section B1.2.2.	Community-wise disaggregated livelihood preferences (number of people)</h5>
                <div class="row" style="margin: 0px 0px 10px 0px;">
                  <!-- <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                    <label class="control-label" for="occupation"><span style="color: red;">★&nbsp;</span>Community</label>
                    <select id="community" name="community" class="custom-select form-control" style="border-radius: 5px;border:2px solid #898AEE;">                      
                    </select>
                  </div> -->

                  <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table">
                    <thead>
                      <tr style="background-color: #8ed6f2;">
                        <th rowspan="2" style="text-align: left;">Community List</th>
                        <th colspan="2" style="text-align: center;">Jhum</th>
                        <th colspan="2" style="text-align: center;">Plain land</th>
                        <th colspan="2" style="text-align: center;">Orchard</th>
                        <th colspan="2" style="text-align: center;">Fuel wood</th>
                        <th colspan="2" style="text-align: center;">Wage labour</th>
                        <th colspan="2" style="text-align: center;">Poultry rearing</th>
                        <th colspan="2" style="text-align: center;">Livestock rearing</th>
                        <th colspan="2" style="text-align: center;">Aquaculture</th>
                        <th colspan="2" style="text-align: center;">Service holder</th>
                        <th colspan="2" style="text-align: center;">Handicraft/loom</th>
                        <th colspan="3" style="text-align: center;">Others</th>
                        <!-- <th rowspan="2" style="text-align: center;">Others Occupation Name</th> -->
                      </tr>
                      <tr style="background-color: #99ccff;">
                        <th style="text-align:center;border-bottom: none;">M</th>
                        <th style="text-align:center;border-bottom: none;">F</th>
                        <th style="text-align:center;border-bottom: none;">M</th>
                        <th style="text-align:center;border-bottom: none;">F</th>
                        <th style="text-align:center;border-bottom: none;">M</th>
                        <th style="text-align:center;border-bottom: none;">F</th>
                        <th style="text-align:center;border-bottom: none;">M</th>
                        <th style="text-align:center;border-bottom: none;">F</th>

                        <th style="text-align:center;border-bottom: none;">M</th>
                        <th style="text-align:center;border-bottom: none;">F</th>
                        <th style="text-align:center;border-bottom: none;">M</th>
                        <th style="text-align:center;border-bottom: none;">F</th>
                        <th style="text-align:center;border-bottom: none;">M</th>
                        <th style="text-align:center;border-bottom: none;">F</th>
                        <th style="text-align:center;border-bottom: none;">M</th>
                        <th style="text-align:center;border-bottom: none;">F</th>

                        <th style="text-align:center;border-bottom: none;">M</th>
                        <th style="text-align:center;border-bottom: none;">F</th>
                        <th style="text-align:center;border-bottom: none;">M</th>
                        <th style="text-align:center;border-bottom: none;">F</th>

                        <th style="text-align:center;border-bottom: none;">Others Name</th>
                        <th style="text-align:center;border-bottom: none;">M</th>
                        <th style="text-align:center;border-bottom: none;">F</th>

                      </tr>
                    </thead>

                    <tbody id="table_body">

                      <!-- <tr>
                        <td style="text-align: center;"><input type="text" id="jhum_male" name="jhum_male" class="form-control" placeholder="0"></td> 
                        <td style="text-align: center;"><input type="text" id="jhum_female" name="jhum_female" class="form-control" placeholder="0"></td> 
                        <td style="text-align: center;"><input type="text" id="plain_land_male" name="plain_land_male" class="form-control" placeholder="0"></td>
                        <td style="text-align: center;"><input type="text" id="plain_land_female" name="plain_land_female" class="form-control" placeholder="0"></td>
                        <td style="text-align: center;"><input type="text" id="orchard_male" name="orchard_male" class="form-control" placeholder="0"></td>
                        <td style="text-align: center;"><input type="text" id="orchard_female" name="orchard_female" class="form-control" placeholder="0"></td>

                        <td style="text-align: center;"><input type="text" id="fuel_wood_male" name="fuel_wood_male" class="form-control" placeholder="0"></td>
                        <td style="text-align: center;"><input type="text" id="fuel_wood_female" name="fuel_wood_female" class="form-control" placeholder="0"></td> 
                        <td style="text-align: center;"><input type="text" id="wage_labour_male" name="wage_labour_male" class="form-control" placeholder="0"></td> 
                        <td style="text-align: center;"><input type="text" id="wage_labour_female" name="wage_labour_female" class="form-control" placeholder="0"></td>

                        <td style="text-align: center;"><input type="text" id="poultry_male" name="poultry_male" class="form-control" placeholder="0"></td> 
                        <td style="text-align: center;"><input type="text" id="poultry_female" name="poultry_female" class="form-control" placeholder="0"></td>

                        <td style="text-align: center;"><input type="text" id="livestock_male" name="livestock_male" class="form-control" placeholder="0"></td> 
                        <td style="text-align: center;"><input type="text" id="livestock_female" name="livestock_female" class="form-control" placeholder="0"></td> 
                        <td style="text-align: center;"><input type="text" id="aquaculture_male" name="aquaculture_male" class="form-control" placeholder="0"></td> 
                        <td style="text-align: center;"><input type="text" id="aquaculture_female" name="aquaculture_female" class="form-control" placeholder="0"></td>

                        <td style="text-align: center;"><input type="text" id="service_holder_male" name="service_holder_male" class="form-control" placeholder="0"></td> 
                        <td style="text-align: center;"><input type="text" id="service_holder_female" name="service_holder_female" class="form-control" placeholder="0"></td> 
                        <td style="text-align: center;"><input type="text" id="handicraft_male" name="handicraft_male" class="form-control" placeholder="0"></td> 
                        <td style="text-align: center;"><input type="text" id="handicraft_female" name="handicraft_female" class="form-control" placeholder="0"></td>

                        <td style="text-align: center;"><input type="text" id="others_male" name="others_male" class="form-control" placeholder="0"></td> 
                        <td style="text-align: center;"><input type="text" id="others_female" name="others_female" class="form-control" placeholder="0"></td>

                        <td style="text-align: center;"><input type="text" id="others_name" name="others_name" class="form-control" placeholder="0"></td> 
                      </tr> -->

                    </tbody>

                </table>


              </div>
              <!-- col-md-12 -->

              <div class="row">
                <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                      <button type="submit" class="btn btn-secondary" id="add_row" style="width: 100%;border-radius: 5px;color: black;">Add More Row</button>
                    </div>
                  <div class="col-md-8"></div>
                <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                    <button type="submit" class="btn btn-primary" id="btn_store" style="width: 100%;border-radius: 5px;color: black;">Save All Details Info</button>
                </div>  
              </div>
            <!-- </form> -->
            </div>
            <!-- end main table div -->

              <hr style="border-bottom: 2px solid black;">

            <div class="row">

              <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                <a href="{{ route('View.Occupation.Entry') }}" style="color: black;">
                  <button type="submit" class="btn btn-success" style="width: 100%;border-radius: 20px;">Previous : Societal Occupation</button>
                </a>
              </div>

              <div class="col-md-8"></div>

              <div class="col-md-2" style="margin: 10px 0px 10px 0px;">
                <a href="{{ route('View.Income.Entry') }}">
                  <button type="submit" class="btn btn-success" style="color: black;width: 100%;border-radius: 20px;">Next : Societal Income</button>
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
<script src="{{ asset('scripts/societal_entry/livelihood_entry.js') }}"></script>
<!-- datepicker -->
<script src="{{ asset('plugins/datepicker/jquery-ui.js') }}"></script>

<script>

document.title = 'Livelihood';

$(document).ready(function () {

    console.log("hello talha..");
    
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


});

</script>

@endsection
