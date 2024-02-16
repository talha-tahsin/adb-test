


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
            <h1 class="m-0" style="font-family: Serif;">Dominant Plant VCF Boundary </h1>
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
                    <!-- <div class="col-md-1"></div>  -->

                    <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                      <label class="control-label validate" for="community_id"><span style="color: red;">★&nbsp;</span>Watershed Id</label> 
                      <input type="text" name="watershed_id" id="watershed_id" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                    </div> 
                    <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                      <label class="control-label validate" for="watershed_name"><span style="color: red;">★&nbsp;</span>Watershed Name</label>
                      <input type="text" name="watershed_name" id="watershed_name" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                    </div>
                    <!-- <div class="col-md-1"></div> -->

                    <input type="hidden" name="vcf_id" id="vcf_id" value=""/>
                    <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                      <label class="control-label validate" for="vcf_name"><span style="color: red;">★&nbsp;</span>VCF Name</label>
                      <input type="text" name="vcf_name" id="vcf_name" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                    </div>
                    
                    <input type="hidden" name="main_para_id" id="main_para_id" value=""/>
                    <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                      <label class="control-label validate" for="para_name"><span style="color: red;">★&nbsp;</span>Dependant (Main) Para Name</label>
                      <input type="text" name="main_para_name" id="main_para_name" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                    </div>  

                  </div> 
                  <!-- end row -->
            
                  <hr style="border-bottom: 2px solid black;">

                    <div class="row">
                      <div class="col-md-6" style="margin: 10px 0px 10px 0px;">

                        <label class="control-label validate"><span style="color: black;"></span>
                        Table V3. State the 5 names of the dominant plant species, measurement and their coverage in 1st Plot</label>

                        <div class="row">
                          <div class="col-md-4" style="margin: 0px 0px 10px 0px;">
                            <label class="control-label validate" for="plot1_location"><span style="color: red;">★&nbsp;</span>latitude </label>
                            <input type="text" name="latitude1" id="latitude1" class="form-control resetVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this field">
                          </div>

                          <div class="col-md-4" style="margin: 0px 0px 10px 0px;">
                            <label class="control-label validate" for="plot1_location"><span style="color: red;">★&nbsp;</span>longitude </label>
                            <input type="text" name="longitude1" id="longitude1" class="form-control resetVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this field">
                          </div>
                        </div>

                        <label class="control-label">Plot Dimensions</label>
                        <div class="row">
                          <div class="col-md-4" style="margin: 0px 0px 10px 0px;">
                            <label class="control-label validate"><span style="color: red;">★&nbsp;</span>Length (m)</label>
                            <input type="text" name="plot1_dimension_height" id="plot1_dimension_height" class="form-control resetVal plot1" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this field">
                          </div>
                          <div class="col-md-4" style="margin: 0px 0px 10px 0px;">
                            <label class="control-label validate"><span style="color: red;">★&nbsp;</span>Width (m)</label>
                            <input type="text" name="plot1_dimension_weight" id="plot1_dimension_weight" class="form-control resetVal plot1" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this field">
                          </div>
                          <div class="col-md-4" style="margin: 0px 0px 10px 0px;">
                            <label class="control-label validate"><span style="color: green;">★&nbsp;</span>Area (sq/m)</label>
                            <input type="text" name="plot1_area" id="plot1_area" class="form-control resetVal plot1_tot" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  disabled>
                          </div>
                        </div>

                        <table width="80%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table">
                            <thead>
                              <tr style="background-color: #8ed6f2;">
                                <th  style="text-align: center;">Serial</th>
                                <th  style="text-align: center;">Tree Species Names</th>
                                <th  style="text-align: center;">Number of Tree</th>
                                <th  style="text-align: center;">Tree Diameter at Breast Height</th>
                                <th  style="text-align: center;">Avg. Tree Height</th>
                                <th  style="text-align: center;">Action</th>
                              </tr>
                            </thead>

                            <tbody id="table_body"></tbody>

                        </table>

                        <div class="row">
                          <div class="col-md-3" style="margin: 20px 0px 10px 0px;">
                            <button type="submit" class="btn btn-info" id="add_row1" style="width: 100%;border-radius: 5px;color: black;">Add More Row </button>
                          </div>
                          <div class="col-md-6"></div>
                          <div class="col-md-3" style="margin: 20px 0px 10px 0px;">
                            <button type="submit" class="btn btn-primary" id="btn_store_plot1" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                          </div>  
                        </div>
                      </div>
                    </div>

                    <hr style="border-bottom: 2px solid black;">
                    <div class="row">
                      <div class="col-md-6" style="margin: 10px 0px 10px 0px;">

                          <label class="control-label validate" for="para_name"><span style="color: black;"></span>
                          Table V4. State the 5 names of the dominant plant species, measurement and their coverage in 2nd Plot </label>

                        <div class="row">
                          <div class="col-md-4" style="margin: 0px 0px 10px 0px;">
                            <label class="control-label validate" for="plot1_location"><span style="color: red;">★&nbsp;</span>latitude </label>
                            <input type="text" name="latitude2" id="latitude2" class="form-control resetVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this field">
                          </div>

                          <div class="col-md-4" style="margin: 0px 0px 10px 0px;">
                            <label class="control-label validate" for="plot1_location"><span style="color: red;">★&nbsp;</span>longitude </label>
                            <input type="text" name="longitude2" id="longitude2" class="form-control resetVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this field">
                          </div>
                        </div>
                          
                        <label class="control-label">Plot Dimensions</label>
                        <div class="row">
                          <div class="col-md-4" style="margin: 0px 0px 10px 0px;">
                            <label class="control-label validate"><span style="color: red;">★&nbsp;</span>Length (m)</label>
                            <input type="text" name="plot2_dimension_height" id="plot2_dimension_height" class="form-control resetVal plot2" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this field">
                          </div>
                          <div class="col-md-4" style="margin: 0px 0px 10px 0px;">
                            <label class="control-label validate"><span style="color: red;">★&nbsp;</span>Width (m)</label>
                            <input type="text" name="plot2_dimension_weight" id="plot2_dimension_weight" class="form-control resetVal plot2" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this field">
                          </div>
                          <div class="col-md-4" style="margin: 0px 0px 10px 0px;">
                            <label class="control-label validate"><span style="color: green;">★&nbsp;</span>Area (sq/m)</label>
                            <input type="text" name="plot2_area" id="plot2_area" class="form-control resetVal plot2_tot" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  disabled>
                          </div>
                        </div>

                        <table width="80%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table2">
                            <thead>
                              <tr style="background-color: #8ed6f2;">
                              <th  style="text-align: center;">Serial</th>
                                <th  style="text-align: center;">Tree Species Names</th>
                                <th  style="text-align: center;">Number of Tree</th>
                                <th  style="text-align: center;">Tree Diameter at Breast Height</th>
                                <th  style="text-align: center;">Avg. Tree Height</th>
                                <th  style="text-align: center;">Action</th>
                              </tr>
                            </thead>

                            <tbody id="table_body"></tbody>

                        </table>

                          <div class="row">
                            <div class="col-md-3" style="margin: 20px 0px 10px 0px;">
                              <button type="submit" class="btn btn-info" id="add_row2" style="width: 100%;border-radius: 5px;color: black;">Add More Row </button>
                            </div>
                            <div class="col-md-6"></div>
                            <div class="col-md-3" style="margin: 20px 0px 10px 0px;">
                              <button type="submit" class="btn btn-primary" id="btn_store_plot2" style="width: 100%;border-radius: 5px;color: black;">Save Info Details</button>
                            </div>  
                          </div>
                      </div>
                    </div>

                      <hr style="border-bottom: 2px solid black;">
                      <div class="row">
                        <div class="col-md-6" style="margin: 10px 0px 10px 0px;">       

                          <label class="control-label validate" for="para_name"><span style="color: black;"></span>
                          Table V5. State the 5 names of the dominant plant species, measurement and their coverage in 3rd Plot </label>

                          <div class="row">
                          <div class="col-md-4" style="margin: 0px 0px 10px 0px;">
                            <label class="control-label validate" for="plot1_location"><span style="color: red;">★&nbsp;</span>latitude </label>
                            <input type="text" name="latitude3" id="latitude3" class="form-control resetVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this field">
                          </div>

                          <div class="col-md-4" style="margin: 0px 0px 10px 0px;">
                            <label class="control-label validate" for="plot1_location"><span style="color: red;">★&nbsp;</span>longitude </label>
                            <input type="text" name="longitude3" id="longitude3" class="form-control resetVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this field">
                          </div>
                        </div>
                            
                        <label class="control-label">Plot Dimensions</label>
                        <div class="row">
                          <div class="col-md-4" style="margin: 0px 0px 10px 0px;">
                            <label class="control-label validate"><span style="color: red;">★&nbsp;</span>Length (m)</label>
                            <input type="text" name="plot3_dimension_height" id="plot3_dimension_height" class="form-control resetVal plot3" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this field">
                          </div>
                          <div class="col-md-4" style="margin: 0px 0px 10px 0px;">
                            <label class="control-label validate"><span style="color: red;">★&nbsp;</span>Width (m)</label>
                            <input type="text" name="plot3_dimension_weight" id="plot3_dimension_weight" class="form-control resetVal plot3" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this field">
                          </div>
                          <div class="col-md-4" style="margin: 0px 0px 10px 0px;">
                            <label class="control-label validate"><span style="color: green;">★&nbsp;</span>Area (sq/m)</label>
                            <input type="text" name="plot3_area" id="plot3_area" class="form-control resetVal plot1_tot" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  disabled>
                          </div>
                        </div>

                        <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table3">
                            <thead>
                              <tr style="background-color: #8ed6f2;">
                              <th  style="text-align: center;">Serial</th>
                                <th  style="text-align: center;">Tree Species Names</th>
                                <th  style="text-align: center;">Number of Tree</th>
                                <th  style="text-align: center;">Tree Diameter at Breast Height</th>
                                <th  style="text-align: center;">Avg. Tree Height</th>
                                <th  style="text-align: center;">Action</th>
                              </tr>
                            </thead>

                            <tbody id="table_body"></tbody>

                          </table>

                          <div class="row">
                            <div class="col-md-3" style="margin: 20px 0px 10px 0px;">
                              <button type="submit" class="btn btn-info" id="add_row3" style="width: 100%;border-radius: 5px;color: black;">Add More Row </button>
                            </div>
                            <div class="col-md-6"></div>
                            <div class="col-md-3" style="margin: 20px 0px 10px 0px;">
                              <button type="submit" class="btn btn-primary" id="btn_store_plot3" style="width: 100%;border-radius: 5px;color: black;">Save Details Info</button>
                            </div>  
                          </div>
        
                      </div>
                      <!-- end div col-md -->


                    </div>
                    <!-- end row  -->

                    <hr style="border-bottom: 2px solid black;">
                      <div class="row">
                      <div class="col-md-2" style="margin: 20px 0px 30px 0px;">
                        <a href="{{ route('VCF.Boundary.GPS.Point') }}" style="color: black;">
                          <button type="submit" class="btn btn-info" style="width: 100%;border-radius: 20px;">Previous : VCF GPS Point</button>
                        </a>
                      </div>

                      <div class="col-md-6"></div>

                      <div class="col-md-4" style="margin: 20px 0px 30px 0px;">
                        <div class="direct-chat-text">
                          <span style="color: #f86d06;">VCF Wise Entry end here, thank you! &nbsp; </span> <span>Go To: &nbsp; </span>
                          <a href="{{ route('Data.Entry.Dashboard') }}" style="color: blue;">Data Entry Dashboard</a>
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

<!-- datepicker -->
<script src="{{ asset('plugins/datepicker/jquery-ui.js') }}"></script>

<script>

document.title = 'VCF dominant plants';

$(document).ready(function () {

    console.log("hello from blade..");
    
    var userNm = $('#userName').val();

    $.ajax({
        url: "/get_active_watershed_vcf",
        type: "GET",
        data: { 'userNm' : userNm },
        dataType: "json",
        cache: false,
        success: function (data) {
            // console.log(data);
            $.each(data.message, function (i, v) {
                $('#watershed_id').val(v.watershed_id);
                $('#watershed_name').val(v.watershed_name);
                $('#vcf_id').val(v.vcf_id);
                $('#vcf_name').val(v.vcf_name);
                $('#main_para_id').val(v.main_para_id);
                $('#main_para_name').val(v.main_para_name);
            });
            
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });

    for (var i = 0; i < 3; i++) {
        insertTableRow();
    }
    for (var j = 0; j < 3; j++) {
        insertTableRow2();
    }
    for (var i = 0; i < 3; i++) {
        insertTableRow3();
    }


});

function insertTableRow() {

  var appendString = '';
  var rowCount = $('#my_table > tbody > tr').length;
  rowCount++;
  // console.log(accountName);

  appendString += '<tr>';
  appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';
  appendString += '<td>';
  appendString += '<input type="text" id="species_name1" name="species_name1" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="0">';
  appendString += '</td>';    
  appendString += '<td>';
  appendString += '<input type="text" id="number_tree1" name="number_tree1" class="form-control" value="" style="width: 120px;text-align: center;" placeholder="0">';
  appendString += '</td>';
  appendString += '<td>';
  appendString += '<input type="text" id="diameter_height1" name="diameter_height1" class="form-control" value="" style="width: 250px;text-align: center;" placeholder="0">';
  appendString += '</td>';
  appendString += '<td>';
  appendString += '<input type="text" id="avg_height1" name="avg_height1" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="0">';
  appendString += '</td>';

  appendString += '<td style="text-align: center;">';
  appendString += '<button type="button" class="btn btn-xs btn-danger removeHead"><i class="fa fa-remove"></i>Remove</button>';
  appendString += '</td>';

  appendString += '</tr>';


  $('#my_table > tbody:last-child').append(appendString);
  // $("#my_table tr:last").scrollintoview();
  removeTableRow();
}

function insertTableRow2() {

  var appendString = '';
  var rowCount = $('#my_table2 > tbody > tr').length;
  rowCount++;
  // console.log(accountName);

  appendString += '<tr>';
  appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';
  appendString += '<td>';
  appendString += '<input type="text" id="species_name2" name="species_name2" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="0">';
  appendString += '</td>';    
  appendString += '<td>';
  appendString += '<input type="text" id="number_tree2" name="number_tree2" class="form-control" value="" style="width: 120px;text-align: center;" placeholder="0">';
  appendString += '</td>';
  appendString += '<td>';
  appendString += '<input type="text" id="diameter_height2" name="diameter_height2" class="form-control" value="" style="width: 250px;text-align: center;" placeholder="0">';
  appendString += '</td>';
  appendString += '<td>';
  appendString += '<input type="text" id="avg_height2" name="avg_height2" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="0">';
  appendString += '</td>';

  appendString += '<td style="text-align: center;">';
  appendString += '<button type="button" class="btn btn-xs btn-danger removeHead"><i class="fa fa-remove"></i>Remove</button>';
  appendString += '</td>';

  appendString += '</tr>';


  $('#my_table2 > tbody:last-child').append(appendString);
  // $("#my_table tr:last").scrollintoview();
  removeTableRow();
}

function insertTableRow3() {
  var appendString = '';
  var rowCount = $('#my_table3 > tbody > tr').length;
  rowCount++;
  // console.log(accountName);

  appendString += '<tr>';
  appendString += '<td class="sl" style="width: 20px;text-align: center;">' + rowCount + '</td>';
  appendString += '<td>';
  appendString += '<input type="text" id="species_name3" name="species_name3" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="0">';
  appendString += '</td>';    
  appendString += '<td>';
  appendString += '<input type="text" id="number_tree3" name="number_tree3" class="form-control" value="" style="width: 120px;text-align: center;" placeholder="0">';
  appendString += '</td>';
  appendString += '<td>';
  appendString += '<input type="text" id="diameter_height3" name="diameter_height3" class="form-control" value="" style="width: 250px;text-align: center;" placeholder="0">';
  appendString += '</td>';
  appendString += '<td>';
  appendString += '<input type="text" id="avg_height3" name="avg_height3" class="form-control" value="" style="width: 150px;text-align: center;" placeholder="0">';
  appendString += '</td>';

  appendString += '<td style="text-align: center;">';
  appendString += '<button type="button" class="btn btn-xs btn-danger removeHead"><i class="fa fa-remove"></i>Remove</button>';
  appendString += '</td>';

  appendString += '</tr>';


  $('#my_table3 > tbody:last-child').append(appendString);
  // $("#my_table tr:last").scrollintoview();
  removeTableRow();
}

</script>

<!-- this page js -->
<script src="{{ asset('scripts/vcf_boundary/dominant_plant_vcf.js') }}"></script>

@endsection
