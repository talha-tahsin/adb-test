


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
            <h1 class="m-0">Basic info of LULC and Landscape Degradation </h1>
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
                    
                    <!-- <input type="hidden" name="para_id" id="para_id" value=""/> -->
                    <!-- <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                      <label class="control-label validate" for="map_unit"><span style="color: red;">★&nbsp;</span>Map Unit</label>
                      <input type="text" name="map_unit" id="map_unit" class="form-control" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" disabled>
                    </div>  -->

                  </div> 
                  <!-- end row -->

                  <hr style="border-bottom: 2px solid black;">
                  <div class="col-md-7">
                    <table width="100%" class="table table-bordered table-striped datatable dtr-inline" id="my_table_list">
                      <thead>
                        <tr style="background-color: #6bbfd9;">
                          <th style="text-align: center;width: 3%;">Serial</th>
                          <th style="text-align: center;width: 5%;">Watershed Id</th>
                          <th style="text-align: center;width: 8%;">Watershed Name</th>
                          <th style="text-align: center;width: 5%;">Map Unit</th>
                          <th style="text-align: center;width: 10%;">Area Of Map Unit (acre)</th>
                          <th style="text-align: center;width: 10%;">Action</th>
                        </tr>
                      </thead>
                  
                      <tbody id="table_body"></tbody>

                    </table>
                  </div>

                  <hr style="border-bottom: 2px solid teal;">
                  <div class="row">
                    
                    <div class="col-md-4" style="margin: 10px 0px 10px 0px;">
                      <p style="margin: 0px 0px 0px 0px;color: red;">Note: This entry should be one time against a watershed</p>
                      <a href="{{ route('Landscape.Restoration') }}" style="color: black;">
                        <button type="submit" class="btn btn" id="btn_store1" style="width: 100%;border-radius: 5px;color: black;background-image: linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%);">
                          Click for Entry: Agro-ecological Landscape Restoration Options Assessment 
                        </button>
                      </a>
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
<script src="{{ asset('scripts/landscape_degradation/basic_info_landscape.js') }}"></script>
<!-- DataTables  & Plugins -->
<script src="{{ asset('plugins/datatables/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-responsive/js/dataTables.responsive.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-responsive/js/responsive.bootstrap4.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-buttons/js/dataTables.buttons.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-buttons/js/buttons.bootstrap4.min.js') }}"></script>


<script>

document.title = 'basic info of lulc and landscape degradation';

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
