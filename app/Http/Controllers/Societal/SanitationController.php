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

use App\Models\Sanitation1;

class SanitationController extends Controller
{
    
    public function store_sanitation1_info(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);
       

        $found = DB::table('tbl_sanitation1')->select('id')
                        ->where('watershed_id', $xmlstr->row->watershed_id)
                        ->where('para_id', $xmlstr->row->para_id)
                        ->count();

        if($found > 0){
            $message = 'Data already exsits for this watershed and para, not possible to store...';
            return response()->json([ 'status' => 'ERROR', 'message' => $message ]);
        }

        // $validator = Validator::make($value, [
        //     'jhum_male' => 'required|numeric|regex:/^([0-9\s\-\+\(\)]*)$/|min:11|max:11',
        // ]);

        // if ($validator->fails()){
        //     return response()->json(['status' => 'ERROR', 
        //         'message' => strval(implode("<br>",$validator->errors()->all()))
        //     ]);
        // }

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
                    'latrine_type_name' => $value->latrineType_name,
                    'own' => $value->own,
                    'shared' => $value->shared,
                    'total' => $value->total,
                    'requried_latrine' => $value->requried_latrine,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_sanitation1')->insert($store_data);
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

    public function store_sanitation2_info(Request $request)
    {
        $xml = $request['dataToSend'];
        $xmlStr = simplexml_load_string($xml);
        // dd($value);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

        $found = DB::table('tbl_sanitation_questionnaire')->select('id')
                            ->where('watershed_id', $xmlStr->row->watershed_id)
                            ->where('para_id', $xmlStr->row->para_id)
                            ->count();

        if($found > 0){
            $message = 'Data already exsits for this watershed and para, not possible to store...';
            return response()->json([ 'status' => 'ERROR', 'message' => $message ]);
        }

        // $validator = Validator::make($value, [
        //     'jhum_male' => 'required|numeric|regex:/^([0-9\s\-\+\(\)]*)$/|min:11|max:11',
        // ]);

        // if ($validator->fails()){
        //     return response()->json(['status' => 'ERROR', 
        //         'message' => strval(implode("<br>",$validator->errors()->all()))
        //     ]);
        // }

        try 
        {
            DB::beginTransaction();

            foreach ($xmlStr->row as $value) 
            {
                $store_data = array(
                    'watershed_id' => $value->watershed_id,
                    'watershed_name' => $value->watershed_name,
                    'para_id' => $value->para_id,
                    'para_name' => $value->para_name,
                    'question' => $value->question,
                    'answer' => $value->answer,           
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );

                DB::table('tbl_sanitation_questionnaire')->insert($store_data);
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
