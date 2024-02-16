


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
            <h1 class="m-0" style="font-family: Serif;">KII Checklist on Mobile Financial and Courier Services </h1>
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
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Name of Product</label>
                    <input type="text" name="name_of_product" id="name_of_product" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild">
                  </div>

                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Producer Name</label>
                    <input type="text" name="producer_name" id="producer_name" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild">
                  </div>

                </div>
                <!-- end row -->

                <div class="row">
                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Product variety</label>
                    <input type="text" name="product_varity" id="product_varity" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild">
                  </div>

                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Producer Cell No</label>
                    <input type="text" name="producer_cell_no" id="producer_cell_no" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild">
                  </div> 
                  
                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Producer Age</label>
                    <input type="text" name="producer_age" id="producer_age" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild">
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
                    <input type="text" name="producer_qualification" id="producer_qualification" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild">
                  </div>
                  <!-- <div class="col-md-2" style="margin: 30px 0px 10px 0px;">
                    <button type="submit" class="btn btn-primary" id="btn_store" style="width: 100%;border-radius: 5px;color: black;">Save Details Info</button>
                  </div>                            -->
                    
                </div>
                <!-- end row -->

              <!-- table : 05 -->
              <hr style="border-bottom: 2px solid teal;">
              <div class="col-md-12" style="margin: 20px 0px 10px 0px;">
                <!-- <form id="form1_body" method="POST"> -->
             
                  <div class="row">
                    
                    <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                      <label class="control-label" for="own_phone">Do you have your own mobile phone?</label>
                      <select type="text" id="own_phone" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                        <option value="" selected disabled> Select Option</option>
                        <option value="Yes (Own Mobile)">Yes (Own Mobile)</option>
                        <option value="Yes (Family Mobile)">Yes (Family Mobile)</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <!-- <div class="col-md-1"></div> -->

                    <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                      <label class="control-label" for="types_of_phone">Types of mobile phone?</label>
                      <select type="text" id="types_of_phone" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                        <option value="" selected disabled> Select Option</option>
                        <option value="Analog">Analog</option>
                        <option value="Smartphone">Smartphone</option>
                        <option value="Both">Both</option>
                      </select>
                    </div>

                  </div>

                  <div class="row">
                    <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                      <label class="control-label" for="internet_access">Have regular internet access in mobile?</label>
                      <select type="text" id="internet_access" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                        <option value="" selected disabled> Select Option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>

                    <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                      <label class="control-label" for="transact_account_of">Transact money-using account of- </label>
                      <select type="text" id="transact_account_of" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                        <option value="" selected disabled> Select Option </option>
                        <option value="Agent of MFS">Agent of MFS</option>
                        <option value="Family member">Family member</option>
                        <option value="Own MFS account">Own MFS account</option>
                      </select>
                    </div>

                  </div>
              
                 <div class="row">
                  <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                    <label class="control-label" for="pattern_of_mfs_account">Usage pattern of those with MFS account </label>
                    <select type="text" id="pattern_of_mfs_account" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                      <option value="" selected disabled> Select Option </option>
                      <option value="Own an account and use it independently">Own an account and use it independently</option>
                      <option value="Own an account and use it with others help">Own an account and use it with others help</option>
                      <option value="No A/C and use others A/C">No A/C and use others A/C</option>
                    </select>
                  </div>

                  <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                  <label class="control-label" for="agent_distance">Distance of Agent</label>
                    <select type="text" id="agent_distance" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                      <option value="" selected disabled> Select Option </option>
                      <option value="Less than 1 km">Less than 1 km</option>
                      <option value="1-2 km">1-2 km</option>
                      <option value="2-3 km">2-3 km</option>
                      <option value="3-4 km">3-4 km</option>
                      <option value="4-5 km">4-5 km</option>
                      <option value="greater than 5 km">greater than 5 km</option>
                    </select>
                  </div>

                </div>

                <div class="row">
                  <div class="col-md-4" style="margin: 0px 0px 0px 0px;">
                    <label class="control-label" id="label7">Usage of MFS account</label>
                    <div class="form-group">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type1" value="Digital Transaction and Withdraw">
                        <label class="form-check-label">Digital Transaction and Withdraw</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type1" value="Money sending">
                        <label class="form-check-label">Money sending</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type1" value="SSNP benefit received">
                        <label class="form-check-label">SSNP benefit received</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type1" value="Payment of Bills">
                        <label class="form-check-label">Payment of Bills</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type1" value="Educational payment and stipend receiving">
                        <label class="form-check-label">Educational payment and stipend receiving</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type1" value="Other usage">
                        <label class="form-check-label">Other usage</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4" style="margin: 0px 0px 0px 0px;">
                    <label class="control-label" id="label8">Saving media</label>
                    <div class="form-group">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type2" value="MFS">
                        <label class="form-check-label">MFS</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type2" value="Bank">
                        <label class="form-check-label">Bank</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type2" value="Insurance">
                        <label class="form-check-label">Insurance</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type2" value="NGOs">
                        <label class="form-check-label">NGOs</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type2" value="Local Samite">
                        <label class="form-check-label">Local Samite</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type2" value="Self arrangement">
                        <label class="form-check-label">Self arrangement</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4" style="margin: 0px 0px 0px 0px;">
                    <label class="control-label" id="label9">Barrier to use own MFS</label>
                    <div class="form-group">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type3" value="Complexity of transaction">
                        <label class="form-check-label">Complexity of transaction</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type3" value="Unavailability of mobile phones">
                        <label class="form-check-label">Unavailability of mobile phones</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type3" value="Lack of guidance on MFS">
                        <label class="form-check-label">Lack of guidance on MFS</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type3" value="Unavailability of electricity">
                        <label class="form-check-label">Unavailability of electricity</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type3" value="High service fee">
                        <label class="form-check-label">High service fee</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type3" value="Lack of education">
                        <label class="form-check-label">Lack of education</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type3" value="Own account is not required as a family member has an account">
                        <label class="form-check-label">Own account is not required as a family member has an account</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type3" value="A very few number of agents in the area">
                        <label class="form-check-label">A very few number of agents in the area</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type3" value="Fear of security breach/ fraudulence">
                        <label class="form-check-label">Fear of security breach/ fraudulence</label>
                      </div>
                    </div>
                  </div>
                </div>

                  <label id="label10">Do the Courier services provide special and extra services during peak season (Mango, Lychee)? </label>
                  <div class="row">
                    <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                      <select type="text" id="courier_services" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                        <option value="" selected disabled> Select Option </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Occasionally">Occasionally</option>
                      </select>
                    </div>
                  </div>

                  <label id="label11">Proximity of Courier Services from the farm </label>
                  <div class="row">
                    <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                      <select type="text" id="proximity_of_courier_services" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                      <option value="" selected disabled> Select Option </option>
                      <option value="Less than 1 km">Less than 1 km</option>
                      <option value="1-2 km">1-2 km</option>
                      <option value="2-3 km">2-3 km</option>
                      <option value="3-4 km">3-4 km</option>
                      <option value="4-5 km">4-5 km</option>
                      <option value="greater than 5 km">greater than 5 km</option>
                      </select>
                    </div>
                  </div>

                  
                <div class="row">
                  <label class="control-label col-md-12" id="label12">Are any e-courier services available in the area?</label>
                  <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                    <select type="text" id="ecourier_serivce" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                      <option value="" selected disabled> Select Option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  
                </div>

                <div class="row">
                  <div class="col-md-4 hide" id="input1" style="margin: 0px 0px 20px 0px;">
                    <input type="text" id="ecourier_name" name="tendency_of_medicine" class="form-control initialVal" placeholder="If Yes, state the name..." style="border-radius: 5px;border:2px solid #898AEE;">
                  </div>
                </div>
                 

                  <div class="row">
                    <!-- <div class="col-md-4"></div> -->
                    <div class="col-md-2" style="margin: 20px 0px 10px 0px;">
                      <button type="submit" class="btn btn-primary" id="btn_store" style="width: 100%;border-radius: 5px;color: black;">Save All Answer </button>
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
                        <span style="color: #f86d06;">Mobile Financial Entry end here, thank you! &nbsp; Go To: &nbsp; </span>
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
<script src="{{ asset('scripts/kii_checklist/entry_mobile_financial.js') }}"></script>
<!-- datepicker -->
<script src="{{ asset('plugins/datepicker/jquery-ui.js') }}"></script>

<script>

document.title = 'Mobile Financial and Courier';

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
