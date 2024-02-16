@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center" style="margin: 150px 0px 0px 0px;">
        <div class="col-md-6">
            <!-- <h5>Center for Enviromental and Geographic Information Services (CEGIS)</h5> -->
            <div class="card">
                <div class="card-header" style="text-align: center;"> <strong>ADB004</strong></div>

                <div class="card-body">
                    <!-- <form id="my_form" method="POST" action="{{ route('get.login') }}"> -->
                    <form id="my_form" method="POST">
                        @csrf

                        <div class="row">
                            <div class="col-md-6 offset-md-3">
                                <label for="email" >{{ __('User Name') }}</label>
                                <input type="text" id="name" name="name" class="form-control @error('name') is-invalid @enderror initialVal" value="{{ old('name') }}" autocomplete="name" autofocus style="margin: 5px 0px 5px 0px;">

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            
                            <div class="col-md-6 offset-md-3">
                            <label for="password">{{ __('Password') }}</label>
                                <input type="password" id="password" name="password" class="form-control @error('password') is-invalid @enderror initialVal" autocomplete="current-password" style="margin: 5px 0px 0px 0px;">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6 offset-md-3">
                                <div class="row">
                                    <div class="col-md-6" style="margin: 10px 0px 0px 0px;">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                        <label class="form-check-label" for="remember">
                                            {{ __('Remember Me') }}
                                        </label>
                                    </div>

                                    <div class="col-md-6" style="margin: 0px 0px 0px 0px;text-align: right;">
                                        <button type="submit" id="btn_login" class="btn btn-primary">
                                            {{ __('Login') }}
                                        </button>

                                        @if (Route::has('password.request'))
                                            <a class="btn btn-link" href="{{ route('password.request') }}">
                                                {{ __('Forgot Your Password?') }}
                                            </a>
                                        @endif
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6 offset-md-3">
                                <div class="row">
                                    <div class="col-md-6" style="margin: 0px 0px 0px 0px;">
                                        <span>
                                            <a class="nav-link" href="#" style="padding: 5px 0px 5px 0px;">Forgot password?</a>
                                        </span>
                                    </div>
                                    <div class="col-md-6" style="margin: 0px 0px 0px 0px;text-align: right;">
                                        <span>
                                            <a class="nav-link" href="{{ route('register') }}" style="padding: 5px 0px 5px 0px;">Register?</a>
                                        </span>
                                    </div>
                                </div>            
                                
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


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

<!-- jQuery -->
<script src="{{ asset('plugins/jquery/jquery-3.6.0.min.js') }}"></script>
<!-- Bootstrap 4 -->
<script src="{{ asset('plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>

<script>
document.title = 'login';

$(document).ready(function () {

    console.log("hello from blade...");

    // var userNm = $('#userName').val();

});

$(document).on('click', '#btn_login', function (event) {

    event.preventDefault();
    var token = $("meta[name='csrf-token']").attr("content");

    var form = $('#my_form')[0];
    var formdata = new FormData(form);
    formdata.append( "_token", token);

    console.log(formdata);

    // clear model message value for every ajax call provide single accurate message
    $('#success_msg').html('');
    $('#error_msg').html('');

    $.ajax({
        url: "/get_login",
        type: "POST",
        enctype: 'multipart/form-data',
        dataType: 'json',
        data: formdata,
        processData: false,  // Important when file upload!
        contentType: false,
        cache: false,
        success: function (data) {
             console.log(data);
            if(data.status == 'SUCCESS'){
                window.location.href = '/dashboard';
                // $('#myModal').modal({backdrop : 'static', keyboard : false});
                // $('#success_msg').html('<span style="color: green;">SUCCESS !! <p>'+ data.message+'</p></span>' );
                $('.initialVal').val('');
            }
            else{
                $('#myModal').modal({backdrop : 'static', keyboard : false});
                $('#error_msg').html('<span style="color: red">ERROR!! <p>'+data.message+'</p></span>');
            }
            
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });


});

</script>

@endsection
