


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
            <h1 class="m-0" style="font-family: Serif;">KII Checklist for Super Shops (Owner)</h1>
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
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>District</label> 
                    <input type="text" name="district" id="district" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild">
                  </div> 

                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Upazila Name</label>
                    <input type="text" name="upazila_name" id="upazila_name" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild">
                  </div>

                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Union Name</label>
                    <input type="text" name="union_name" id="union_name" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Please fill up this feild">
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
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Super shop Name</label>
                    <input type="text" name="shop_name" id="shop_name" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Supplier shop from the Para">
                  </div> 

                </div>
                <!-- end row -->
                  
                <div class="row">
                
                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Super shop Location</label>
                    <input type="text" name="shop_location" id="shop_location" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Supplier shop from the Para">
                  </div>

                  <div class="col-md-2" style="margin: 0px 0px 10px 0px;">
                    <label class="control-label"><span style="color: red;">★&nbsp;</span>Qualifications of respondents</label>
                    <input type="text" name="qualification" id="qualification" class="form-control initialVal" style="border-radius: 5px;border: 2px solid #898AEE;padding: 0px 15px 0px 15px;"  value="" placeholder="Supplier shop from the Para">
                  </div> 
                    
                </div>
                <!-- end row -->

             
              <hr style="border-bottom: 2px solid teal;">
              <div class="col-md-12" style="margin: 20px 0px 10px 0px;">

                <div class="row">
                <label class="control-label col-md-12" id="label1">How much interest do you have in selling hill products in your super shop?</label>
                  <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                    <select type="text" id="answer1" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                      <option value="" selected disabled> Select Option</option>
                      <option value="Very Low interest">Very Low interest</option> 
                      <option value="Low interest">Low interest</option> 
                      <option value="Moderate interest">Moderate interest</option> 
                      <option value="High interest">High interest</option> 
                      <option value="Very High Interest">Very High Interest</option> 
                    </select>
                  </div>
                </div>
             
                <div class="row">
                  <div class="col-md-12" style="margin: 0px 0px 0px 10px;">
                    <label class="control-label" id="label2">What are the impediments and challenges the super shop faces that make them discouraged and reluctant?</label>
                    <div class="form-group">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type1" value="Unavailability">
                        <label class="form-check-label">Unavailability</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type1" value="High cost">
                        <label class="form-check-label">High cost</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type1" value="Lack of interest from the customers">
                        <label class="form-check-label">Lack of interest from the customers</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type1" value="Lack of availability">
                        <label class="form-check-label">Lack of availability</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type1" value="Hardship in transporting">
                        <label class="form-check-label">Hardship in transporting</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type1" value="Natural disaster">
                        <label class="form-check-label">Natural disaster</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type1" value="ultural and language barrier">
                        <label class="form-check-label">ultural and language barrier</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="type1" value="Lack of necessary vendors">
                        <label class="form-check-label">Lack of necessary vendors</label>
                      </div>

                    </div>
                  </div>
                </div>
                
                <div class="row">
                <label class="control-label col-md-12" id="label3">How much is the customer demand?</label>
                  <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                    <select type="text" id="answer3" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                      <option value="" selected disabled> Select Option</option>
                      <option value="Very Low demand">Very Low demand</option> 
                      <option value="Low demand">Low demand</option> 
                      <option value="Moderate demand">Moderate demand</option> 
                      <option value="High demand">High demand</option> 
                      <option value="Very High demand">Very High demand</option> 
                    </select>
                  </div>
                </div>

                <div class="row">
                  <label class="control-label col-md-12" id="label4">What are the products you brought to sell from the CHT (serial as per the demand)?</label>
                  <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                    <input type="text" id="answer4" name="answer4" class="form-control initialVal" placeholder="Please write as relevent to the question" style="border-radius: 5px;border:2px solid #898AEE;">
                  </div>
                </div>

                <div class="row">
                  <label class="control-label col-md-12" id="label5">Selling price per unit product at Super shop (BDT)</label>
                  <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                    <input type="text" id="answer5" name="answer5" class="form-control initialVal" placeholder="Please write as relevent to the question" style="border-radius: 5px;border:2px solid #898AEE;">
                  </div>
                </div>

                <div class="row">
                  <label class="control-label col-md-12" id="label6">From where you source the product (Name of places)</label>
                  <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                    <input type="text" id="answer6" name="answer6" class="form-control initialVal" placeholder="Please write as relevent to the question" style="border-radius: 5px;border:2px solid #898AEE;">
                  </div>
                </div>

                <div class="row">
                  <label class="control-label col-md-12" id="label7">What are the quality control criteria for your product selection? (Put in words )</label>
                  <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                    <input type="text" id="answer7" name="answer7" class="form-control initialVal" placeholder="Please write as relevent to the question" style="border-radius: 5px;border:2px solid #898AEE;">
                  </div>
                </div>

                <div class="row">  
                  <label class="control-label col-md-12" id="label8">Do you avail e-commerce facilities to deliver products to customer?</label>
                  <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                    <select type="text" id="selectOption" class="form-control resetSelect" value="" style="border-radius: 5px;border:2px solid #898AEE;">
                      <option value="" selected disabled> Select Option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  
                </div>

                <div class="row hide" id="input1">
                  <label class="control-label col-md-12">If Yes, state the name of companies</label>
                  <div class="col-md-2" style="margin: 0px 0px 20px 0px;">
                    <input type="text" id="answer8" name="answer8" class="form-control initialVal" placeholder="Please write as relevent to the question" style="border-radius: 5px;border:2px solid #898AEE;">
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
                        <span style="color: #f86d06;">Owner Super Shop Entry end, thank you! &nbsp; Go To: &nbsp; </span>
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
<script src="{{ asset('scripts/kii_checklist/entry_owner_super_shop.js') }}"></script>
<!-- datepicker -->
<script src="{{ asset('plugins/datepicker/jquery-ui.js') }}"></script>

<script>

document.title = 'Owner Super Shop';

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
