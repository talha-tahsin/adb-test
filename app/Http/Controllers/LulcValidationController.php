<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Session;

class LulcValidationController extends Controller
{
    public function lulc_validation_survey(){
        return view('lulc_validation.lulc_validation_survey');
    }
    public function store_first_ground_truth(Request $request)
    {
        $receiveData = $request['dataToSend'];
        $xmlstr = simplexml_load_string($receiveData);
        // dd($xmlstr->row);

        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);
        // Get unique id for every single image ::
        $timestamp1 = now()->timestamp;
        $randomNumber = mt_rand(1000000000, 9999999999);
        $image_id = (int) substr($timestamp1 . $randomNumber, -10);

        try 
        {
            DB::beginTransaction();
            foreach ($xmlstr->row as $value) 
            {
                $store_data = array(
                    'watershed_id' => $value->watershed_id,
                    'watershed_name' => $value->watershed_name,
                    'map_unit' => $value->map_unit,
                    'areaOf_map_unit' => $value->areaOf_map_unit,
                    'longitude_east' => $value->longitude_east,
                    'longitude_north' => $value->longitude_north,
                    'elevation' => $value->elevation,
                    'map_code' => $value->map_code,
                    'observed_code' => $value->observed_code,
                    'gcp_type' => $value->gcp_type,
                    'photo_id' => $value->photo_id,
                    'drive_link' => $value->drive_link,
                    'photo_aspect' => $value->photo_aspect,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                    
                DB::table('tbl_1st_ground_truth')->insert($store_data);
                DB::commit();
            }

            // if ($files = $request->file('up_image')) {
            //     $file = $image_id . "." .$files->getClientOriginalExtension();
            //     $path_str = $files->storeAs( 'upload', $file, 'public' );
            //     $store_image = array(
            //         'image' =>'/' . $path_str,
            //     );

            //     DB::table('tbl_1st_ground_truth')->where('watershed_id', $request['watershed_id'])->update($store_image);
            //     DB::commit();
            // }
            
            return response()->json([ 'status' => 'SUCCESS', 'message' => 'Data store successfully...' ]);
            
        }
        catch (\Exception $e) 
        {
            DB::rollBack();
            $message = "Opps!! Something is wrong, data not saved and rollback..";
            return response()->json([ 'status' => 'ERROR', 'message' => $message ]);
        }

    }
    public function store_second_ground_truth(Request $request)
    {
        $receiveData = $request['dataToSend'];
        $xmlstr = simplexml_load_string($receiveData);
        // dd($xmlstr->row);

        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);
        // Get unique id for every single image ::
        $timestamp1 = now()->timestamp;
        $randomNumber = mt_rand(1000000000, 9999999999);
        $image_id = (int) substr($timestamp1 . $randomNumber, -10);

        try 
        {
            DB::beginTransaction();
            foreach ($xmlstr->row as $value) 
            {
                $store_data = array(
                    'watershed_id' => $value->watershed_id,
                    'watershed_name' => $value->watershed_name,
                    'map_unit' => $value->map_unit,
                    'areaOf_map_unit' => $value->areaOf_map_unit,
                    'longitude_east' => $value->longitude_east,
                    'longitude_north' => $value->longitude_north,
                    'elevation' => $value->elevation,
                    'map_code' => $value->map_code,
                    'observed_code' => $value->observed_code,
                    'gcp_type' => $value->gcp_type,
                    'photo_id' => $value->photo_id,
                    'drive_link' => $value->drive_link,
                    'photo_aspect' => $value->photo_aspect,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                    
                DB::table('tbl_2nd_ground_truth')->insert($store_data);
                DB::commit();
            }
            
            return response()->json([ 'status' => 'SUCCESS', 'message' => 'Data store successfully...' ]);
            
        }
        catch (\Exception $e) 
        {
            DB::rollBack();
            $message = "Opps!! Something is wrong, data not saved and rollback..";
            return response()->json([ 'status' => 'ERROR', 'message' => $message ]);
        }

    }
    
}
