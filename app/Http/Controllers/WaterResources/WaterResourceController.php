<?php

namespace App\Http\Controllers\WaterResources;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Session;



class WaterResourceController extends Controller
{
    public function water_resource_entry(){
        return view('water_resources.water_resources');
    }
    public function water_resource_entry2(){
        return view('water_resources.water_resources_entry2');
    }

    public function store_waterbodies_basic_info(Request $request)
    {
        $xml = $request['dataToSend'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_waterbodies_basic_info')->select('id')
                    ->where('watershed_id', $xmlstr->row->watershed_id)
                    ->where('para_id', $xmlstr->row->para_id)
                    ->count();

        if($found > 0){
            $message = 'Data already exsits for this watershed and para, not possible to store...';
            return response()->json([ 'status' => 'ERROR', 'message' => $message ]);
        }

        try 
        {
            DB::beginTransaction();

            foreach ($xmlstr->row as $value) 
            {

                $store_data = array(
                    'watershed_id' => $value->watershed_id,
                    'watershed_name' => $value->watershed_name,
                    'para_id' => $value->para_id,
                    'para_name' => $value->para_name,
                    'waterbody_type' => $value->waterbody_type,
                    'name' => $value->name,
                    'longitude' => $value->longitude,
                    'latitude' => $value->latitude,
                    'source' => $value->source,
                    'outlet' => $value->outlet,
                    'distance_from_para' => $value->distance_from_para,
                    'current_status' => $value->current_status,
                    'dry_season_depth' => $value->dry_season_depth,
                    'wet_season_depth' => $value->wet_season_depth,
                    'drinking' => $value->drinking,
                    'domestic' => $value->domestic,
                    'irrigation' => $value->irrigation,
                    'cattle_fedding' => $value->cattle_fedding,
                    'others_purpose' => $value->others_purpose,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_waterbodies_basic_info')->insert($store_data);
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
    public function store_current_practice_conservation(Request $request)
    {
        $receiveData = $request['dataToSend'];
        $xmlstr = simplexml_load_string($receiveData);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

        // check dupliacte record in database ::
        // $found = DB::table('tbl_water_current_conversation')->select('id')
        //             ->where('watershed_id', $xmlstr->row->watershed_id)
        //             ->where('para_id', $xmlstr->row->para_id)
        //             ->count();

        // if($found > 0){
        //     $message = 'Data already exsits for this watershed and para, not possible to store...';
        //     return response()->json([ 'status' => 'ERROR', 'message' => $message ]);
        // }

        try 
        {
            DB::beginTransaction();

            foreach ($xmlstr->row as $value) 
            {
                $store_data = array(
                    'watershed_id' => $value->watershed_id,
                    'watershed_name' => $value->watershed_name,
                    'para_id' => $value->para_id,
                    'para_name' => $value->para_name,
                    'siltation' => $value->siltation,
                    'erosion' => $value->erosion,
                    'pollution' => $value->pollution,            
                    'flood_drainage' => $value->flood_drainage,                      
                    'drought' => $value->drought,                      
                    'encroachment' => $value->encroachment,                      
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );

                DB::table('tbl_water_current_conversation')->insert($store_data);
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
    public function add_other_practiceOfConservationMeasures(Request $request)
    {
        $receiveData = $request['dataToSend'];
        $xmlstr = simplexml_load_string($receiveData);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

        try 
        {
            $dupCount = 0;
            $newCount = 0;
            $cname = '';
            
            DB::beginTransaction();

            foreach ($xmlstr->row as $value) 
            {
                $store_data = array(
                    'watershed_id' => $value->watershed_id,
                    'watershed_name' => $value->watershed_name,
                    'para_id' => $value->para_id,
                    'para_name' => $value->para_name,

                    'siltation' => $value->siltation,
                    'erosion' => $value->erosion,
                    'pollution' => $value->pollution,            
                    'flood_drainage' => $value->flood_drainage,                      
                    'drought' => $value->drought,                      
                    'encroachment' => $value->encroachment,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_water_current_conversation')->insert($store_data);
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
    public function store_recommended_conservation(Request $request)
    {
        $receiveData = $request['dataToSend'];
        $xmlstr = simplexml_load_string($receiveData);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

        // check dupliacte record in database ::
        // $found = DB::table('tbl_recommended_conversation')->select('id')
        //             ->where('watershed_id', $xmlstr->row->watershed_id)
        //             ->where('para_id', $xmlstr->row->para_id)
        //             ->count();

        // if($found > 0){
        //     $message = 'Data already exsits for this watershed and para, not possible to store...';
        //     return response()->json([ 'status' => 'ERROR', 'message' => $message ]);
        // }

        try 
        {
            DB::beginTransaction();

            foreach ($xmlstr->row as $value) 
            {
                $store_data = array(
                    'watershed_id' => $value->watershed_id,
                    'watershed_name' => $value->watershed_name,
                    'para_id' => $value->para_id,
                    'para_name' => $value->para_name,
                    'siltation' => $value->siltation,
                    'erosion' => $value->erosion,
                    'pollution' => $value->pollution,            
                    'flood_drainage' => $value->flood_drainage,                      
                    'drought' => $value->drought,                      
                    'encroachment' => $value->encroachment,                      
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );

                DB::table('tbl_recommended_conversation')->insert($store_data);
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
    public function add_other_recommendedConservationMeasures(Request $request)
    {
        $receiveData = $request['dataToSend'];
        $xmlstr = simplexml_load_string($receiveData);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

        try 
        {
            $dupCount = 0;
            $newCount = 0;
            $cname = '';
            
            DB::beginTransaction();

            foreach ($xmlstr->row as $value) 
            {
                $store_data = array(
                    'watershed_id' => $value->watershed_id,
                    'watershed_name' => $value->watershed_name,
                    'para_id' => $value->para_id,
                    'para_name' => $value->para_name,

                    'siltation' => $value->siltation,
                    'erosion' => $value->erosion,
                    'pollution' => $value->pollution,            
                    'flood_drainage' => $value->flood_drainage,                      
                    'drought' => $value->drought,                      
                    'encroachment' => $value->encroachment,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_recommended_conversation')->insert($store_data);
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
    public function store_improve_water_availability(Request $request)
    {
        if (request()->ajax()) {
            $validator = Validator::make($request->all(), [
                'watershed_id' => 'required|string|max:255',
                'watershed_name' => 'required',
                'water_improve_recommendation' => 'required',
            ], [],[]);

            if ($validator->fails()){
                return response()->json(['success' => false,'message' => strval(implode("<br>",$validator->errors()->all()))]);
            }
        
            $timestamp = time();
            $created_at = date("Y-m-d H:i:s", $timestamp);

            // check dupliacte record in database ::
            $found = DB::table('tbl_water_improve_recommendation')->select('id')
                                ->where('watershed_id',  $request['watershed_id'])
                                ->where('para_id', $request['para_id'])
                                ->count();

            if($found > 0){
                $message = 'Data already exsits for this watershed and para, not allow to store again...';
                return response()->json([ 'status' => 'ERROR', 'message' => $message ]);
            }

            try 
            {
                DB::beginTransaction();

                $store_data = array(
                    'watershed_id' => $request['watershed_id'],
                    'watershed_name' => $request['watershed_name'],
                    'para_id' => $request['para_id'],
                    'para_name' => $request['para_name'],
                    'water_improve_recommendation' => $request['water_improve_recommendation'],          
                    'created_by' => $request['created_by'],
                    'created_at' => $created_at,
                );

                DB::table('tbl_water_improve_recommendation')->insert($store_data);
                DB::commit();
                
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

}
