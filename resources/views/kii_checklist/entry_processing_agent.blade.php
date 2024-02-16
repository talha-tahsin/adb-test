


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
            <h1 class="m-0" style="font-family: Serif;">KII Checklist for Processing Agents</h1>
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
                
                  <!-- <input type="hidden" name="para_id" id="para_id" value=""/>
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
                  </div> -->

                </div> 
                <!-- end row -->

                <hr style="border-bottom: 2px solid teal;">
                <div class="row">
                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Para Name</label>
                    <select id="para_name" name="para_name" class="custom-select form-control resetSelect" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;" > 
                    </select>
                  </div>

                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Respondent Name</label>
                    <input type="text" name="respondent_name" id="respondent_name" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild">
                  </div>

                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Cell No</label>
                    <input type="text" name="cell_no" id="cell_no" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild">
                  </div>

                </div>
                <!-- end row -->

                <div class="row">
                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Age</label>
                    <input type="text" name="age" id="age" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild">
                  </div> 

                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Gender</label>
                    <select id="gender" name="gender" class="custom-select form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;" > 
                      <option value="" selected disabled> Select Option</option>  
                      <option value="Male"> Male</option>  
                      <option value="Female"> Female</option>  
                    </select>
                  </div> 

                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Qualifications of agents</label>
                    <input type="text" name="qualification" id="qualification" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild">
                  </div> 

                </div>
                <!-- end row -->
                  
                <div class="row">
                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Product Name</label>
                    <input type="text" name="product_name" id="product_name" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild">
                  </div>
         
                </div>

                <!-- table: 09 -->
              <hr style="border-bottom: 2px solid teal;">
              <div class="col-md-12" style="margin: 0px 0px 10px 0px;">
                <!-- <h5></h5> -->
                <table width="100%" class="table table-bordered table-striped table-hover tableFixHead" id="my_table1">
                  <thead>
                    <tr style="background-color: #8ed6f2;">
                      <th rowspan="2" style="text-align: center;">Serial</th>
                      <th rowspan="2" style="text-align: left;">Indicators</th>
                      <th colspan="12" style="text-align: center;">Product calendar</th>
                      <!-- <th rowspan="2" style="text-align: left;">Action</th> -->
                    </tr>
                    <tr style="background-color: #99ccff;">
                      <th style="text-align: center;">Jan</th>
                      <th style="text-align: center;">Feb</th>
                      <th style="text-align: center;">March</th>
                      <th style="text-align: center;">April</th>
                      <th style="text-align: center;">May</th>
                      <th style="text-align: center;">June</th>
                      <th style="text-align: center;">July</th>
                      <th style="text-align: center;">Aug</th>
                      <th style="text-align: center;">Sep</th>
                      <th style="text-align: center;">Oct</th>
                      <th style="text-align: center;">Nov</th>
                      <th style="text-align: center;">Dec</th>
                    </tr>
                  </thead>

                    <tbody id="table_body"></tbody>

                </table>

              </div>
              <!-- end div -->

             
              <hr style="border-bottom: 2px solid teal;">
              <div class="col-md-12" style="margin: 20px 0px 10px 0px;">
                
                <!-- <div class="row">
                <label class="control-label col-md-12" id="label2">How much interest do the farmers have in adopting organic measures (fertilizers, Pesticides, feed)?</label>
                  <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                    <select type="text" id="answer2" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                      <option value="" selected disabled> Select Option</option>
                      <option value="Low">Low</option> 
                      <option value="Medium">Medium</option> 
                      <option value="High">High</option> 
                    </select>
                  </div>
                </div> -->

                <div class="row">
                  <label class="control-label col-md-12" id="label1">Time of product processing related activities</label>
                  <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                    <input type="text" id="answer1" name="answer1" class="form-control initialVal" placeholder="Please write as relevent to the question" style="border-radius: 5px;border:2px solid #898AEE;">
                  </div>
                </div> 

                <div class="row">
                  <label class="control-label col-md-12" id="label2">Capacity (kg/ton) of processing per day</label>
                  <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                    <input type="text" id="answer2" name="answer2" class="form-control initialVal" placeholder="Please write as relevent to the question" style="border-radius: 5px;border:2px solid #898AEE;">
                  </div>
                </div> 

                <div class="row">
                  <label class="control-label col-md-12" id="label3">Product wise per unit processing cost in BDT</label>
                  <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                    <input type="text" id="answer3" name="answer3" class="form-control initialVal" placeholder="Please write as relevent to the question" style="border-radius: 5px;border:2px solid #898AEE;">
                  </div>
                </div>

                <div class="row">
                  <label class="control-label col-md-12" id="label4">Tax and other fees</label>
                  <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                    <input type="text" id="answer4" name="answer4" class="form-control initialVal" placeholder="Please write as relevent to the question" style="border-radius: 5px;border:2px solid #898AEE;">
                  </div>
                </div> 

                <div class="row">
                  <label class="control-label col-md-12" id="label5">Any capacity development need? (state preferred 5 topics)</label>
                  <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                    <input type="text" id="answer5" name="answer5" class="form-control initialVal" placeholder="Please write as relevent to the question" style="border-radius: 5px;border:2px solid #898AEE;">
                  </div>
                </div>                 

                <div class="row">
                  <div class="col-md-10"></div>
                  <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                    <button type="submit" class="btn btn-primary" id="btn_store" style="width: 100%;border-radius: 5px;color: black;">Save All Answer </button>
                  </div>  
                </div>
              

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
                        <span style="color: #f86d06;">Processing Agent Entry end, thank you! &nbsp; Go To: &nbsp; </span>
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
<script src="{{ asset('scripts/kii_checklist/entry_processing_agent.js') }}"></script>
<!-- datepicker -->
<script src="{{ asset('plugins/datepicker/jquery-ui.js') }}"></script>

<script>

document.title = 'Processing Agent';

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
