<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Session;

class WaterQualityController extends Controller
{
    public function watershed_sample_info(){
        return view('watershed_health.water_sample_basic');
    }
    public function water_quality_entry(){
        return view('watershed_health.water_quality_entry');
    }
    public function water_quality_entry2(){
        return view('watershed_health.water_sample_quality');
    }
   
    public function store_sample_id_random_entry(Request $request)
    {
        $receiveData = $request['dataToSend'];
        $value = json_decode($receiveData);
        $userName = $value->userName;
        // dd($receiveData);

        $store_data = array(
            'watershed_id' => $value->watershed_id,
            'watershed_name' => $value->watershed_name,
            'sample_id' => $value->sample_id,
            'para_id' => $value->para_id,
            'para_name' => $value->para_name,
        );

        DB::table('key_active_water_sampleid')->where('user_name', $userName)->update($store_data);
        DB::commit();

        return response()->json([ 'status' => 'SUCCESS', 'message' => 'data store...' ]);
    }
    public function get_active_water_sampleid(Request $request)
    {
        $userNm = $request['userNm'];
        $data = DB::table('key_active_water_sampleid')->where('user_name', $userNm)->get();
            
        return response()->json([ 'status' => 'SUCCESS', 'message' => $data ]);
    }
    public function get_all_water_sample_list(Request $request)
    {
        $waterId = $request['watershed_id'];
        // dd($waterId);

        $sql_ret = DB::table('tbl_water_quality_basic')->where('watershed_id', $waterId)->latest()->get();

        $tabStr = '';
        $serial=1;
 
        foreach ($sql_ret as $v) {
            
            $timestamp = strtotime($v->collection_date);
            $date = date('d-M-Y', $timestamp);
          
            $tabStr .= '<tr>';
            $tabStr .= '<td style="text-align: center;">'.$serial++.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->sample_id.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->watershed_id.'</td>';
            $tabStr .= '<td style="text-align: left;">'.$v->watershed_name.'</td>';
            $tabStr .= '<td style="text-align: left;">'.$v->para_name.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->approx_area.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->farmar_name.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->longitude.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->latitude.'</td>';

            $tabStr .= '<td style="text-align: center;">
            <button type="submit" id="btn_edit" class="btn btn-primary" row_id="'.$v->id.'">Edit Basic Info</button></td>';
            $tabStr .= '<td style="text-align: center;">
                <button type="submit" id="btn_data_entry" class="btn btn-warning" para_id="'.$v->para_id.'" para_name="'.$v->para_name.'">
                    Data Entry
                </button>
            </td>';
            $tabStr .= '</tr>';
        }

        return $tabStr;
    }
    public function store_water_quality_basic(Request $request)
    {
        if (request()->ajax()) {
            $validator = Validator::make($request->all(), [
                'watershed_id' => 'required|string|max:255',
                'watershed_name' => 'required',
            ], [],[]);

            if ($validator->fails()){
                return response()->json(['success' => false,'message' => strval(implode("<br>",$validator->errors()->all()))]);
            }
        
            $timestamp = time();
            $created_at = date("Y-m-d H:i:s", $timestamp);

            // check dupliacte record in database ::
            $found = DB::table('tbl_water_quality_basic')->select('id')
                                ->where('watershed_id',  $request['watershed_id'])
                                ->where('para_id', $request['para_id'])
                                ->count();

            if($found > 0){
                return response()->json([ 'status' => 'ERROR', 'message' => 'Data already exsits for this watershed and para, not possible to store...' ]);
            }

            DB::beginTransaction();

            $store_data = array(
                'watershed_id' => $request['watershed_id'],
                'watershed_name' => $request['watershed_name'],
                'para_id' => $request['para_id'],
                'para_name' => $request['para_name'],
                'district_name' => $request['district'],
                'upazila_name' => $request['upazila'],
                'union_name' => $request['union'],
                'collection_date' => $request['collection_date'],           
                'collection_time' => $request['collection_time'],            
                'farmar_name' => $request['farmar_name'],            
                'sample_id' => $request['sample_id'],                        
                'approx_area' => $request['approx_area'],            
                'longitude' => $request['longitude'],            
                'latitude' => $request['latitude'],
                'created_by' => $request['userName'],
                'created_at' => $created_at,
            );

            DB::table('tbl_water_quality_basic')->insert($store_data);
            DB::commit();

            // if ($files = $request->file('up_image')) {
            //     $file = $image_id . "." .$files->getClientOriginalExtension();
            //     $path_str = $files->storeAs( 'upload', $file, 'public' );
            //     $store_image = array(
            //         'image' =>'/' . $path_str,
            //     );

            //     DB::table('tbl_water_sample_quality')
            //                 ->where('watershed_id', $request['watershed_id'])
            //                 ->where('para_id', $request['para_id'])
            //                 ->update($store_image);
            //     DB::commit();
            // }
            
            return response()->json([ 'status' => 'SUCCESS', 'message' => 'Data store successfully...' ]);

        }
    }
    public function store_water_quality_entry1(Request $request)
    {
        if (request()->ajax()) {
            $validator = Validator::make($request->all(), [
                'watershed_id' => 'required|string|max:255',
                'watershed_name' => 'required',
                'up_image' => 'required|image|mimes:jpeg,png,jpg',
            ], [],[]);

            if ($validator->fails()){
                return response()->json(['success' => false,'message' => strval(implode("<br>",$validator->errors()->all()))]);
            }
        
            $timestamp = time();
            $created_at = date("Y-m-d H:i:s", $timestamp);
            // Get unique id for every single image ::
            $timestamp1 = now()->timestamp;
            $randomNumber = mt_rand(1000000000, 9999999999);
            $image_id = (int) substr($timestamp1 . $randomNumber, -10);

            // check dupliacte record in database ::
            $found = DB::table('tbl_water_quality_entry1')->select('id')
                                ->where('watershed_id',  $request['watershed_id'])
                                ->where('para_id', $request['para_id'])
                                ->where('sample_id', $request['sample_id'])
                                ->count();

            if($found > 0){
                return response()->json([ 'status' => 'ERROR', 'message' => 'Data already exsits for this watershed and para, not possible to store...' ]);
            }

            DB::beginTransaction();

            $store_data = array(
                'watershed_id' => $request['watershed_id'],
                'watershed_name' => $request['watershed_name'],
                'para_id' => $request['para_id'],
                'para_name' => $request['para_name'],                          
                'sample_id' => $request['sample_id'],                   
                'weather_condition' => $request['weather_condition'],
                'sediment_type' => $request['sediment_type'],
                'water_flow_status' => $request['water_flow_status'],
                'dry_season' => $request['dry_season'],
                'wet_season' => $request['wet_season'],
                'lulc_type' => $request['lulc_type'],
                'intervention_upstream' => $request['intervention_upstream'],
                'intervention_nearby' => $request['intervention_nearby'],
                'navigation_practice' => $request['navigation_practice'],
                'fishing_practice' => $request['fishing_practice'],
                'use_of_wetland' => $request['use_of_wetland'],
                'waste_discharge' => $request['waste_discharge'],
                'major_mollusks' => $request['major_mollusks'],
                'overall_wetland' => $request['overall_wetland'],
                'any_remark' => $request['any_remark'],
                'created_by' => $request['userName'],
                'created_at' => $created_at,
            );

            DB::table('tbl_water_quality_entry1')->insert($store_data);
            DB::commit();

            if ($files = $request->file('up_image')) {
                $file = $image_id . "." .$files->getClientOriginalExtension();
                $path_str = $files->storeAs( 'upload', $file, 'public' );
                $store_image = array(
                    'image' =>'/' . $path_str,
                );

                DB::table('tbl_water_quality_entry1')
                            ->where('watershed_id', $request['watershed_id'])
                            ->where('para_id', $request['para_id'])
                            ->update($store_image);
                DB::commit();
            }
            
            return response()->json([ 'status' => 'SUCCESS', 'message' => 'Data store successfully...' ]);

        }
    }
    public function store_water_test_report(Request $request)
    {
        $receiveData = $request['dataToSend'];
        $xmlstr = simplexml_load_string($receiveData);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

        try 
        {
            DB::beginTransaction();

            foreach ($xmlstr->row as $value) 
            {
                $store_data = array(
                    'sample_id' => $value->sample_id,
                    'watershed_id' => $value->watershed_id,
                    'watershed_name' => $value->watershed_name,
                    'para_id' => $value->para_id,
                    'para_name' => $value->para_name,
                    'test_name' => $value->test_name,
                    'test_1st' => $value->test_1st,
                    'test_2nd' => $value->test_2nd,
                    'test_3rd' => $value->test_3rd,
                    'average' => $value->average,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_water_test_report')->insert($store_data);
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
