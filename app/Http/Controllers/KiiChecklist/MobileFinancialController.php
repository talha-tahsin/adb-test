<?php

namespace App\Http\Controllers\KiiChecklist;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Session;

class MobileFinancialController extends Controller
{
    public function entry_mobile_financial()
    {
        return view('kii_checklist.entry_mobile_financial'); 
    }
    public function store_mobile_financial_courier_info(Request $request)
    {
        $xml = $request['xml_data'];
        $value = simplexml_load_string($xml);

        $xml2 = $request['xml_data2'];
        $xmlstr = simplexml_load_string($xml2);
        // dd($value);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

        // Get unique id for every single user ::
        $timestamp = now()->timestamp;
        $randomNumber = mt_rand(1000000000, 9999999999);
        $product_id = (int) substr($timestamp . $randomNumber, -10);

        // Get unique id for every single user ::
        $timestamp2 = now()->timestamp;
        $randomNumber2 = mt_rand(1000000000, 9999999999);
        $info_id = (int) substr($timestamp2 . $randomNumber2, -10);

         // check dupliacte record in database ::
        //  $found = DB::table('tbl_question_info')->select('id')
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

            $store_data = array(
                'info_id' => $info_id,
                'watershed_id' => $value->watershed_id,
                'watershed_name' => $value->watershed_name,
                'para_id' => $value->para_id,
                'para_name' => $value->para_name,
                'product_id' => $product_id,
                'product_name' => $value->product_name,
                'producer_name' => $value->producer_name,
                'product_varity' => $value->product_varity,
                'producer_cell_no' => $value->producer_cell_no,
                'producer_age' => $value->producer_age,
                'gender' => $value->gender,
                'producer_qualification' => $value->producer_qualification,
                'created_by' => $value->created_by,
                'created_at' => $created_at,
            );
            
            DB::table('tbl_master_mobile_financial')->insert($store_data);
            DB::commit();

            foreach ($xmlstr->row as $value) 
            {
                $store_data2 = array(
                    'info_id' => $info_id,
                    'question' => $value->question,
                    'answer' => $value->answer,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_details_mobile_financial')->insert($store_data2);
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
