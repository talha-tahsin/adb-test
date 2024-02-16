<?php

namespace App\Http\Controllers\Societal;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Session;

class AccessibilityController extends Controller
{
    public function store_transportation_facilities(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);

        $jsonData = $request['dataToSend'];
        $value = json_decode($jsonData);
        // dd($xmlstr->row, $value);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);
       
        // check dupliacte record in database ::
        $found = DB::table('tbl_transportation_facilities')->select('id')
                        ->where('watershed_id', $xmlstr->row->watershed_id)
                        ->where('para_id', $xmlstr->row->para_id)
                        ->count();

        if($found > 0){
            $message = 'Data already exsits for this watershed and para, not possible to store...';
            return response()->json([ 'status' => 'ERROR', 'message' => $message ]);
        }

        try 
        {
            foreach ($xmlstr->row as $value) 
            {
                DB::beginTransaction();

                $store_data = array(
                    'watershed_id' => $value->watershed_id,
                    'watershed_name' => $value->watershed_name,
                    'para_id' => $value->para_id,
                    'para_name' => $value->para_name,
                    'mode_name' => $value->mode_name,
                    'earthen' => $value->earthen,
                    'herringbone' => $value->herringbone,
                    'pucca' => $value->pucca,
                    'water_way' => $value->water_way,
                    'no_transportation' => $value->no_transportation,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_transportation_facilities')->insert($store_data);
                DB::commit();
             
            }

            $store_data2 = array(
                'watershed_id' => $value->watershed_id,
                'watershed_name' => $value->watershed_name,
                'para_id' => $value->para_id,
                'para_name' => $value->para_name,
                'mode_name' => $value->mode3_name,
                'earthen' => $value->earthen,
                'herringbone' => $value->herringbone,
                'pucca' => $value->pucca,
                'water_way' => $value->water_way,
                'no_transportation' => $value->no_transportation,
                'created_by' => $value->created_by,
                'created_at' => $created_at,
            );
            DB::table('tbl_transportation_facilities')->insert($store_data2);
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

    public function store_road_distance_from_para(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

        // check dupliacte record in database ::
        $found = DB::table('tbl_road_distance')->select('id')
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
                    'connecting_road' => $value->connecting_road,
                    'avg_distance' => $value->avg_distance,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_road_distance')->insert($store_data);
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
    public function store_available_transportation_facilities(Request $request)
    {
        $xml = $request['dataToSend'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

        // check dupliacte record in database ::
        $found = DB::table('tbl_available_trans_facility')->select('id')
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
                    'transportation_mode' => $value->transportation_mode,
                    'most_use' => $value->most_use,
                    'preferable' => $value->preferable,
                    'remarks' => $value->remarks,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_available_trans_facility')->insert($store_data);
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
    public function store_telecommunication_media_facilities(Request $request)
    {
        $xml = $request['dataToSend'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

        // check dupliacte record in database ::
        $found = DB::table('tbl_telecommunication_media')->select('id')
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
                    'facilities_type' => $value->facilities_type,
                    'percentage' => $value->percentage,
                    'remarks' => $value->remarks,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_telecommunication_media')->insert($store_data);
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
    public function store_transporting_agro_forestry(Request $request)
    {
        if (request()->ajax()) {
            $validator = Validator::make($request->all(), [
                'watershed_id' => 'required|string|max:255',
                'watershed_name' => 'required',
                'agro_forestry' => 'required',
            ], [],[]);

            if ($validator->fails()){
                return response()->json(['success' => false,'message' => strval(implode("<br>",$validator->errors()->all()))]);
            }
        
            $timestamp = time();
            $created_at = date("Y-m-d H:i:s", $timestamp);

            // check dupliacte record in database ::
            $found = DB::table('tbl_transporting_agro_forestry')->select('id')
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
                    'agro_forestry' => $request['agro_forestry'],        
                    'created_by' => $request['created_by'],
                    'created_at' => $created_at,
                );

                DB::table('tbl_transporting_agro_forestry')->insert($store_data);
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
