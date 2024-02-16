


@extends('layouts.data_entry_dashboard._head2')

@section('current_page_css')

@endsection

@section('content')

<!-- Content Header (Page header) -->
    <div class="content-header" style="margin: 0px 0px -15px 0px;">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Value Chain & Business Model Dashboard</h1>
            
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item" style="margin-right: 5px;"> <h5><span>Go To : </span> <a href="{{ route('Data.Entry.Dashboard') }}" >Data Entry Dashboard</a></h5></li>
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

<div class="col-md-12">
  <div class="card card-info card-outline">
    <div class="card-body">
          
          <div class="row">

            <div class="col-lg-3 col-6">
              <a href="{{ route('ParaList.Business.Model') }}" >
                <div class="info-box mb-3 bg-info" style="background: linear-gradient(263deg, rgba(184,182,177,1) 34%, rgba(54,54,56,1) 100%);">
                  <span class="info-box-icon"><i class="fas fa-tag"></i></span>
                  <div class="info-box-content">
                    <span class="info-box-text"><h5>Business Model</h5></span>
                    <span class="info-box-number">Data Entry</span>
                  </div> 
                </div>
              </a>
            </div>

              <!-- <div class="col-lg-3 col-6">
                <a href="{{ route('Entry.Kii.Producer.Basic') }}" >
                  <div class="info-box mb-3 bg-info">
                    <span class="info-box-icon"><i class="fas fa-tag"></i></span>
                    <div class="info-box-content">
                      <span class="info-box-text"><h5>KII Checklist for Producer</h5></span>
                      <span class="info-box-number">Data Entry</span>
                    </div> 
                  </div>
                </a>
              </div> -->
        

          </div>
          <!-- end row -->

          <div class="row">

            <div class="col-lg-3 col-6">
              <a href="{{ route('Entry.Kii.Producer.Basic') }}" >
                <div class="info-box mb-3 bg-info">
                  <span class="info-box-icon"><i class="fas fa-tag"></i></span>
                  <div class="info-box-content">
                    <span class="info-box-text"><h5>KII Checklist for Producer</h5></span>
                    <span class="info-box-number">Data Entry</span>
                  </div> 
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-6">
              <a href="{{ route('Entry.Mobile.Financial') }}" >
                <div class="info-box mb-3 bg-info">
                  <span class="info-box-icon"><i class="fas fa-tag"></i></span>
                  <div class="info-box-content">
                    <span class="info-box-text"><h5>KII Checklist on Mobile Financial Services </h5></span>
                    <span class="info-box-number">(bKash, Nagad) and Courier Services</span>
                  </div> 
                </div>
              </a>
            </div>

          </div>
          <!-- end row -->

          <div class="row">

            <div class="col-lg-3 col-6">
              <a href="{{ route('Entry.Kii.Bepari') }}" >
                <div class="info-box mb-3 bg-info">
                  <span class="info-box-icon"><i class="fas fa-tag"></i></span>
                  <div class="info-box-content">
                    <span class="info-box-text"><h5>KII Checklist for Bepari</h5></span>
                    <span class="info-box-number">Data Entry</span>
                  </div> 
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-6">
              <a href="{{ route('Entry.Kii.Aaratdar') }}" >
                <div class="info-box mb-3 bg-info">
                  <span class="info-box-icon"><i class="fas fa-tag"></i></span>
                  <div class="info-box-content">
                    <span class="info-box-text"><h5>KII Checklist for Aaratdar</h5></span>
                    <span class="info-box-number">Data Entry</span>
                  </div> 
                </div>
              </a>
            </div>

          </div>
          <!-- end row -->

          <div class="row">

            <div class="col-lg-3 col-6">
                <a href="{{ route('Entry.Input.Supplier') }}" >
                  <div class="info-box mb-3 bg-info">
                    <span class="info-box-icon"><i class="fas fa-tag"></i></span>
                    <div class="info-box-content">
                      <span class="info-box-text"><h5>KII Checklist for Input Supplier</h5></span>
                      <span class="info-box-number">Data Entry</span>
                    </div> 
                  </div>
                </a>
              </div>

              <div class="col-lg-3 col-6">
                <a href="{{ route('Entry.Processing.Agent') }}" >
                  <div class="info-box mb-3 bg-info">
                    <span class="info-box-icon"><i class="fas fa-tag"></i></span>
                    <div class="info-box-content">
                      <span class="info-box-text"><h5>KII Checklist for Processing Agents</h5></span>
                      <span class="info-box-number">Data Entry</span>
                    </div> 
                  </div>
                </a>
              </div>

          </div>
          <!-- end row -->

          <div class="row">

            <div class="col-lg-3 col-6">
              <a href="{{ route('Entry.Transport.Agent') }}" >
                <div class="info-box mb-3 bg-info">
                  <span class="info-box-icon"><i class="fas fa-tag"></i></span>
                  <div class="info-box-content">
                    <span class="info-box-text"><h5>KII Checklist for Transport Agents</h5></span>
                    <span class="info-box-number">Data Entry</span>
                  </div> 
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-6">
              <a href="{{ route('Entry.Super.Shop.Customer') }}" >
                <div class="info-box mb-3 bg-info">
                  <span class="info-box-icon"><i class="fas fa-tag"></i></span>
                  <div class="info-box-content">
                    <span class="info-box-text"><h5>KII Checklist for Super Shops (Customer)</h5></span>
                    <span class="info-box-number">Data Entry</span>
                  </div> 
                </div>
              </a>
            </div>
          
          </div>

          <div class="row">

            <div class="col-lg-3 col-6">
              <a href="{{ route('Entry.Owner.Super.Shop') }}" >
                <div class="info-box mb-3 bg-info">
                  <span class="info-box-icon"><i class="fas fa-tag"></i></span>
                  <div class="info-box-content">
                    <span class="info-box-text"><h5>KII Checklist for Super Shops (Owner)</h5></span>
                    <span class="info-box-number">Data Entry</span>
                  </div> 
                </div>
              </a>
            </div>


          </div>
          <!-- end row -->


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
