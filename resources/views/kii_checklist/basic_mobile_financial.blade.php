


@extends('layouts.pages.master')

@section('current_page_css')
<!-- datepicker -->
<link rel="stylesheet" href="{{ asset('plugins/datepicker/css/jquery-ui-1.9.2.custom.min.css') }}">
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
            <h1 class="m-0" style="font-family: Serif;">Basic of KII Checklist for Producer</h1>
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

                <div class="row">
                  <div class="col-md-12" style="margin: 10px 0px 10px 0px;">

                    <form id="my_form" method="POST">
                      <input type="hidden" name="userName" id="userName" value="{{ Auth::user()->name }}"/>
                      
                      <div class="row">
                        
                        <!-- <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                          <label class="control-label validate" for="survey_date"><span style="color: red;">★&nbsp;</span>Survey Date</label>
                          <input type="text" name="survey_date" id="survey_date" class="form-control date" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please enter date">
                        </div> -->

                        <!-- <div class="col-md-1"></div> -->
                        
                        <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                          <label class="control-label validate" for="watershed_id"><span style="color: red;">★&nbsp;</span>Watershed Id</label>
                          <input type="text" name="watershed_id" id="watershed_id" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                        </div> 

                        <!-- <div class="col-md-1"></div>  -->
                        
                        <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                          <label class="control-label validate" for="watershed_name"><span style="color: red;">★&nbsp;</span>Watershed Name</label>
                          <input type="text" name="watershed_name" id="watershed_name" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                        </div>
                          
                      </div>
                      <!-- end row -->

                      <hr style="border-bottom: 2px solid black;">

                      <div class="row">
                        <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                          <label class="control-label"><span style="color: red;">★&nbsp;</span>Para Name</label>
                          <select id="para_name" name="para_name" class="custom-select form-control initialSelectVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;" > 
                          </select>
                        </div>

                        <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                          <label class="control-label"><span style="color: red;">★&nbsp;</span>Name of Product</label>
                          <input type="text" name="name_of_product" id="name_of_product" class="form-control initialval" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild">
                        </div>

                        <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                          <label class="control-label"><span style="color: red;">★&nbsp;</span>Producer Name</label>
                          <input type="text" name="producer_name" id="producer_name" class="form-control initialval" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild">
                        </div>

                      </div>
                      <!-- end row -->

                      <div class="row">
                        <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                          <label class="control-label"><span style="color: red;">★&nbsp;</span>Product variety</label>
                          <input type="text" name="product_varity" id="product_varity" class="form-control initialval" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild">
                        </div>

                        <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                          <label class="control-label"><span style="color: red;">★&nbsp;</span>Producer Cell No</label>
                          <input type="text" name="producer_cell_no" id="producer_cell_no" class="form-control initialval" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild">
                        </div> 
                        
                        <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                          <label class="control-label"><span style="color: red;">★&nbsp;</span>Producer Age</label>
                          <input type="text" name="producer_age" id="producer_age" class="form-control initialval" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild">
                        </div> 

                      </div>
                      <!-- end row -->
                        
                      <div class="row">
                        <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                          <label class="control-label"><span style="color: red;">★&nbsp;</span>Producer Gender</label>
                          <select id="gender" name="gender" class="custom-select form-control initialSelectVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;" > 
                            <option value="" selected disabled> Select Option</option>  
                            <option value="Male"> Male</option>  
                            <option value="Female"> Female</option>  
                          </select>
                        </div> 
                        <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                          <label class="control-label"><span style="color: red;">★&nbsp;</span>Qualifications of Producer</label>
                          <input type="text" name="producer_qualification" id="producer_qualification" class="form-control initialval" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild">
                        </div>
                        <div class="col-md-2" style="margin: 30px 0px 10px 0px;">
                          <button type="submit" class="btn btn-primary" id="btn_store" style="width: 100%;border-radius: 5px;color: black;">Save Details Info</button>
                        </div>                           
                          
                      </div>
                      <!-- end row -->
          
                    </form>
                      
                  </div>
                </div>

              <hr style="border-bottom: 2px solid teal;">
              <div class="col-md-12">
                <label class="control-label">
                  <span style="color: green;">★&nbsp;</span> 
                  Show All VCF list with details according to avobe watershed:
                </label>

                  <input type="hidden" name="userName" id="userName" value="{{ Auth::user()->name }}"/>
                  <input type="hidden" name="watershed_id" id="watershed_id" value=""/>
                  <input type="hidden" name="watershed_name" id="watershed_name" value=""/>
                  
                <table width="100%" class="table table-bordered table-striped datatable dtr-inline" id="my_table">
                  <thead>
                    <tr style="background-color: #6bbfd9;">
                      <th style="text-align: center;width: 5%;">Serial</th>
                      <th style="text-align: center;width: 6%;">Producer Name</th>
                      <th style="text-align: center;width: 6%;">Name of Product</th>
                      <!-- <th style="text-align: center;width: 6%;">Watershed Id</th> -->
                      <th style="text-align: left;width: 10%;">Watershed Name</th>
                      <th style="text-align: center;width: 5%;">Para Name</th>
                      <th style="text-align: center;width: 6%;">Producer Cell No</th>
                      <th style="text-align: center;width: 6%;">Prodeucer Qualifications</th>
                      <!-- <th style="text-align: center;width: 6%;">Upazila</th>
                      <th style="text-align: center;width: 6%;">District</th> -->
                      <th style="text-align: center;width: 6%;">Edit Producer Info</th>
                      <th style="text-align: center;width: 6%;">Action</th>
                    </tr>
                  </thead>
                
                  <tbody id="table_body"></tbody>

                </table>

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
<!-- this page js -->
<script src="{{ asset('scripts/kii_checklist/kii_producer_basic.js') }}"></script>
<!-- datepicker -->
<script src="{{ asset('plugins/datepicker/jquery-ui.js') }}"></script>
<!-- DataTables  & Plugins -->
<script src="{{ asset('plugins/datatables/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-responsive/js/dataTables.responsive.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-responsive/js/responsive.bootstrap4.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-buttons/js/dataTables.buttons.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-buttons/js/buttons.bootstrap4.min.js') }}"></script>

<script>

document.title = 'kii producer basic';

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
                // $('#dependent_para_id').val(v.para_id);
                // $('#vcf_dependent_para').val(v.para_name);
            });
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });

   


});

</script>


@endsection
