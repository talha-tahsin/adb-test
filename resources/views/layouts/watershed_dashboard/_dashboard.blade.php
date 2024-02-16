


@extends('layouts.watershed_dashboard._head')

@section('current_page_css')

@endsection

@section('content')

<!-- Content Header (Page header) -->
    <div class="content-header" style="margin: 0px 0px -15px 0px;">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Watershed Dashboard</h1>
          </div><!-- /.col -->
          <div class="col-sm-6"></div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
   
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">

        <!-- Small boxes (Stat box) -->
        <div class="row">

        @php $i = 1; @endphp
        @foreach($data as $v)

          @if($v->id == 1 )
            <div class="col-lg-3 col-6">
              <a href="{{ route('Data.Entry.Dashboard') }}">
                <button type="submit" id="watershed1" name="watershed1" class="active_watershed" style="border: 5px;width: 100%;padding: 0px 0px 0px 0px;">
                  <div class="bg-info">
                    <div class="inner" style="padding: 20px 10px 5px 0px;">

                      <input type="hidden" name="userName" id="userName" value="{{ Auth::user()->name }}"/>
                      <input type="hidden" name="watershed_id" id="watershed_id" value="{{ $v->watershed_id }}"/>
                      <input type="hidden" name="watershed_name" id="watershed_name" value="{{ $v->watershed_name }}"/>
                      
                      <h2> Watershed No: {{  $i++ }} </h2>
                      <h5> Watershed Id: {{  $v->watershed_id }} </h5>
                      <h5> Watershed Name: {{  $v->watershed_name }} </h5>
                      <p> District: {{  $v->district }} </p>
                    
                      <!-- <p>New Orders</p> -->
                    </div>
                    <div class="icon">
                      <i class="ion ion-circle"></i>
                    </div>
                    
                  </div>
                </button>
              </a> 
            </div>
          @endif

          @if($v->id == 2 )
            <div class="col-lg-3 col-6">
              <a href="{{ route('Data.Entry.Dashboard') }}">
                <button type="submit" id="watershed2" name="watershed2" class="active_watershed" style="border: 5px;width: 100%;padding: 0px 0px 0px 0px;">
                  <div class="bg-info">
                    <div class="inner" style="padding: 20px 10px 5px 0px;">

                    <input type="hidden" name="userName2" id="userName2" value="{{ Auth::user()->name }}"/>
                    <input type="hidden" name="watershed_id2" id="watershed_id2" value="{{ $v->watershed_id }}"/>
                    <input type="hidden" name="watershed_name2" id="watershed_name2" value="{{ $v->watershed_name }}"/>
                      
                      <h2> Watershed No: {{  $i++ }} </h2>
                      <h5> Watershed Id: {{  $v->watershed_id }} </h5>
                      <h5> Watershed Name: {{  $v->watershed_name }} </h5>
                      <p>  District: {{  $v->district }} </p>
                    
                      <!-- <p>New Orders</p> -->
                    </div>
                    <div class="icon">
                      <i class="ion ion-circle"></i>
                    </div>
                    
                  </div>
                </button>
              </a> 
            </div>
          @endif

          @if($v->id == 3)
            <div class="col-lg-3 col-6">
              <a href="{{ route('Data.Entry.Dashboard') }}">
                <button type="submit" id="watershed3" name="watershed3" class="active_watershed" style="border: 5px;width: 100%;padding: 0px 0px 0px 0px;">
                  <div class="bg-info">
                    <div class="inner" style="padding: 20px 10px 5px 0px;">

                    <input type="hidden" name="userName3" id="userName3" value="{{ Auth::user()->name }}"/>
                    <input type="hidden" name="watershed_id3" id="watershed_id3" value="{{ $v->watershed_id }}"/>
                    <input type="hidden" name="watershed_name3" id="watershed_name3" value="{{ $v->watershed_name }}"/>
                      
                      <h2> Watershed No: {{  $i++ }} </h2>
                      <h5> Watershed Id: {{  $v->watershed_id }} </h5>
                      <h5> Watershed Name: {{  $v->watershed_name }} </h5>
                      <p>  District: {{  $v->district }} </p>
                    
                      <!-- <p>New Orders</p> -->
                    </div>
                    <div class="icon">
                      <i class="ion ion-circle"></i>
                    </div>
                    
                  </div>
                </button>
              </a> 
            </div>
          @endif

        @endforeach
          
          <!-- 

          <div class="col-lg-3 col-6">
            <div class="small-box bg-danger">
              <div class="inner">
                <h3>65</h3>

                <p>Unique Visitors</p>
              </div>
              <div class="icon">
                <i class="ion ion-pie-graph"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div> -->
          <!-- ./col -->
          
        </div>
        <!-- /.row -->

        </div>
    </section>

  
@endsection

@section('current_page_js')
<!-- this page js -->
<script src="{{ asset('scripts/dashboard/watershed_dashboard.js') }}"></script>

<script>

document.title = 'watershed dashboard';

$(document).ready(function () {

    console.log("hello talha blade.."); 

    // $('#watershedId').select2();
    // $('#para_list').select2();
    // $('#community').select2();
  
    // $('.select2').css({'border': '2px solid #898AEE', 'border-radius': '5px'});

    // $('#para_list').prop('disabled', true);

    // $('.date').datepicker({ dateFormat: "yy-mm-dd" });


});

</script>

@endsection

