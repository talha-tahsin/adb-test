<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Session;

use App\Models\User;
use App\Models\UserResets;

class AuthController extends Controller
{
    public function store(Request $request){

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);


        $data = array(
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password'])
        );

        $insrt = User::create($data);
        $insrt->save();

        $reset_data = array(
            'plain_password' => $request['password']
        );

        $insrt_reset = UserResets::create($reset_data);
        $insrt_reset->save();

        // return redirect("dashboard")->withSuccess('Registration Successful...');
        return redirect()->route('login');

    }

    public function get_login(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'password' => 'required|string|min:6',
        ]);
        // $credentials = $request->only('name', 'password');
        
        // if (Auth::attempt($credentials)) {
        //      return redirect()->route('dashboard');
        // }
        // else {
        //     return redirect("login");
        // }

        $check_name = DB::table('users')->select('id')
                                ->where('name', $request['name'])
                                ->count();
        if($check_name == 1)
        {
            $check_password = DB::table('users')->select('id')
                              ->where('name', $request['name'])
                              ->where('view_password', $request['password'])
                              ->count();
            if($check_password == 1){
                $credentials = $request->only('name', 'password');
                if (Auth::attempt($credentials)) {
                    return response()->json([ 'status' => 'SUCCESS', 'message' => 'login successful...' ]);
                }
            }
            else{
                return response()->json([ 'status' => 'ERROR', 'message' => 'Password is not correct...' ]);
            }
        }
        else{
            return response()->json([ 'status' => 'ERROR', 'message' => 'User name is not correct...' ]);
        }

    }

    public function get_logout()
    {
        Session()->flush();
        Auth::logout();

        return redirect()->route('login');
    }


}
