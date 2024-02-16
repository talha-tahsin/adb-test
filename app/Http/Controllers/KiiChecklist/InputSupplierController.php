<?php

namespace App\Http\Controllers\KiiChecklist;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Session;

class InputSupplierController extends Controller
{
    public function entry_input_supplier()
    {
        return view('kii_checklist.entry_input_supplier'); 
    }
    public function store_input_supplier_info(Request $request)
    {
        $v_xml = $request['v_master'];
        $value = simplexml_load_string($v_xml);

        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);

        $xml2 = $request['xml_data2'];
        $xmlstr2 = simplexml_load_string($xml2);
        // dd($value);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

        // Get unique id for every single user ::
        // $timestamp = now()->timestamp;
        // $randomNumber = mt_rand(1000000000, 9999999999);
        // $product_id = (int) substr($timestamp . $randomNumber, -10);

        // Get unique id for every single user ::
        $timestamp2 = now()->timestamp;
        $randomNumber2 = mt_rand(1000000000, 9999999999);
        $row_join_id = (int) substr($timestamp2 . $randomNumber2, -10);

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

            $store_data1 = array(
                'row_join_id' => $row_join_id,
                'watershed_id' => $value->watershed_id,
                'watershed_name' => $value->watershed_name,
                'para_id' => $value->para_id,
                'para_name' => $value->para_name,
                'respondent_name' => $value->respondent_name,
                'cell_no' => $value->cell_no,
                'age' => $value->age,
                'gender' => $value->gender,
                'distanceOf_supplier' => $value->distanceOf_supplier,
                'input_names' => $value->input_names,
                'created_by' => $value->created_by,
                'created_at' => $created_at,
            );
            
            DB::table('tbl_master_input_supplier')->insert($store_data1);
            DB::commit();

            foreach ($xmlstr->row as $value) 
            {
                $store_data2 = array(
                    'row_join_id' => $row_join_id,
                    'indicators' => $value->indicators,
                    'jan' => $value->jan,
                    'feb' => $value->feb,
                    'mar' => $value->mar,
                    'apr' => $value->apr,
                    'may' => $value->may,
                    'jun' => $value->jun,
                    'jul' => $value->jul,
                    'aug' => $value->aug,
                    'sep' => $value->sep,
                    'oct' => $value->oct,
                    'nov' => $value->nov,
                    'dec' => $value->dec,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_input_supplier_info')->insert($store_data2);
                DB::commit();
            }

            foreach ($xmlstr2->row as $value) 
            {
                $store_data3 = array(
                    'row_join_id' => $row_join_id,
                    'question' => $value->question,
                    'answer' => $value->answer,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_input_supplier_questionnaire')->insert($store_data3);
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
