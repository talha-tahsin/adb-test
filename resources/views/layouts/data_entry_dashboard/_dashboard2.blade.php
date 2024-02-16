


@extends('layouts.data_entry_dashboard._head2')

@section('current_page_css')

@endsection

@section('content')

<!-- Content Header (Page header) -->
    <div class="content-header" style="margin: 0px 0px -15px 0px;">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Data Entry Dashboard</h1>
            
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item" style="margin-right: 5px;"> <h5><span>Go To : </span> <a href="{{ route('dashboard') }}" >Watershed Dashboard</a></h5></li>
              <!-- <li class="breadcrumb-item active">Dashboard v1</li> -->
            </ol>
          </div><!-- /.col -->
          
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
   
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">

        

<div class="row">

<div class="col-md-9">
  <div class="card card-info card-outline">
    <div class="card-body">
          
          <div class="row">

            <div class="col-lg-4 col-6">
              <a href="{{ route('Para.Boundary.Basic.Info') }}" class="small-box-footer">
                <div class="small-box bg-warning" style="background: linear-gradient(90deg, rgba(212,185,137,1) 28%, rgba(224,176,38,1) 100%);">
                  <div class="inner">
                    <h3>Para Wise </h3>
                    <h3>Information Entry</h3>
                    <!-- <p>Sample 3</p> -->
                  </div>
                  <div class="icon" ><i style="margin: 30px 0px 0px 0px;" class="fas fa-arrow-circle-right"></i></div>
                  <span style="text-align: center;">&nbsp;</span>
                </div>
              </a>
            </div>
            <!-- ./col -->

            <div class="col-lg-4 col-6">
              <a href="{{ route('VCF.Boundary.Basic.Info') }}" class="small-box-footer">
                <div class="small-box bg-warning" style="background: linear-gradient(90deg, rgba(212,185,137,1) 28%, rgba(224,176,38,1) 100%);">
                  <div class="inner">
                    <h3>VCF Wise </h3>
                    <h3>Information Entry</h3>
                    <!-- <p>Sample 3</p> -->
                  </div>
                  <div class="icon" ><i style="margin: 30px 0px 0px 0px;" class="fas fa-arrow-circle-right"></i></div>
                  <span style="text-align: center;">&nbsp;</span>
                </div>
              </a>
            </div>
            <!-- ./col -->

            <div class="col-lg-4 col-6">
              <a href="{{ route('Landscape.Basic') }}" class="small-box-footer">
                <div class="small-box bg-warning" style="background: linear-gradient(90deg, rgba(212,185,137,1) 28%, rgba(224,176,38,1) 100%);">
                  <div class="inner">
                    <h3>LULC and Landscape</h3>
                    <h3>Degradation Info</h3>
                    <!-- <p>Sample 3</p> -->
                  </div>
                  <div class="icon" ><i style="margin: 30px 0px 0px 0px;" class="fas fa-arrow-circle-right"></i></div>
                  <span style="text-align: center;">&nbsp;</span>
                </div>
              </a>
            </div>
            <!-- ./col -->

          </div>
          <!-- end row -->


          <div class="row">

            <div class="col-lg-4 col-6">
              <a href="{{ route('Watershed.Sample.Info') }}" class="small-box-footer">
                <div class="small-box bg-warning" style="background: linear-gradient(90deg, rgba(199,232,166,1) 28%, rgba(80,194,40,1) 100%);">
                  <div class="inner">
                    <h3>Water Quality Test</h3>
                    <h3>Data Entry</h3>
                    <!-- <p>Sample 3</p> -->
                  </div>
                  <div class="icon" ><i style="margin: 30px 0px 0px 0px;" class="fas fa-arrow-circle-right"></i></div>
                  <span style="text-align: center;">&nbsp;</span>
                </div>
              </a>
            </div>
            <!-- ./col -->

            <div class="col-lg-4 col-6">
              <a href="{{ route('Soil.Test.Basic.Info') }}" class="small-box-footer">
                <div class="small-box bg-warning" style="background: linear-gradient(90deg, rgba(199,232,166,1) 28%, rgba(80,194,40,1) 100%);">
                  <div class="inner">
                    <h3>Soil Test</h3>
                    <h3>Data Entry</h3>
                    <!-- <p>Sample 3</p> -->
                  </div>
                  <div class="icon" ><i style="margin: 30px 0px 0px 0px;" class="fas fa-arrow-circle-right"></i></div>
                  <span style="text-align: center;">&nbsp;</span>
                </div>
              </a>
            </div>
            <!-- ./col -->

            <div class="col-lg-4 col-6">
              <a href="{{ route('Value.Chain.Dashboard') }}" class="small-box-footer">
                <div class="small-box bg-warning" style="background: linear-gradient(90deg, rgba(199,232,166,1) 28%, rgba(80,194,40,1) 100%);">
                  <div class="inner">
                    <h3>Business Model and</h3>
                    <h3>Value Chain </h3>
                    <!-- <p>Sample 3</p> -->
                  </div>
                  <div class="icon" ><i style="margin: 30px 0px 0px 0px;" class="fas fa-arrow-circle-right"></i></div>
                  <span style="text-align: center;">&nbsp;</span>
                </div>
              </a>
            </div>
            <!-- ./col -->

          </div>
          <!-- end row -->

      </div>
    </div>
  </div>

  <div class="col-md-3">
    <div class="card card-info card-outline">
      <div class="card-body">

      <!-- Small boxes (Stat box) -->
      <div class="row">
          <div class="col-md-12">

            <div class="info-box bg-gradient-info">
              <span class="info-box-icon"><i class="far fa-bookmark"></i></span>
              
              <input type="hidden" name="userName" id="userName" value="{{ Auth::user()->name }}"/>

              
                <div class="info-box-content">
                  <span class="info-box-text"> <h4>Current</h4> </span>
                  <span class="info-box-number" > <h4 id="watershed_id"></h4> </span>

                  <div class="progress">
                    <div class="progress-bar" style="width: 70%"></div>
                  </div>
                  <span class="progress-description">
                  <h4 id="watershed_name" > </h4>
                  <!-- <a href="{{ route('dashboard') }}" class="nav-link" style="padding-left: 0px;"><h5 style="color: blue;">Go => Watershed Dashboard </h5></a>  -->
                  </span>
                </div>
                <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
        </div>

      </div>
    </div>
  </div>

</div>


        </div>
    </section>

  
@endsection

@section('current_page_js')

<script>

document.title = 'data entry dashboard';

$(document).ready(function () {

  var userNm = $('#userName').val();
  console.log(userNm);

  $.ajax({
      url: "/get_active_watershed",
      type: "GET",
      data: { 'userNm' : userNm },
      dataType: "json",
      cache: false,
      success: function (data) {
          console.log(data);
          $.each(data.message, function (i, v) {
              $('#watershed_id').text('Watershed: '+ v.watershed_id);
              $('#watershed_name').text('Name: ' + v.watershed_name);
          });
          
      },
      error: function(xhr, ajaxOptions, thrownError) {
          console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
      }
  });

});

</script>

@endsection
