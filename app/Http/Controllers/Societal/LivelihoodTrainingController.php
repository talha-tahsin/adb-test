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

class LivelihoodTrainingController extends Controller
{
    public function show_livelihoods_generation_training(){
        return view('societal_entry.livelihood_training');
    }
    public function get_training_list()
    {

        $data = DB::table('lookup_training')->select('training_id', 'training_name')
                    ->orderBy('training_id')
                    ->get();

        return response()->json([ 'message' => $data ]);

    }
    public function store_livelihood_training_info(Request $request)
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
                    'training_name' => $value->training_name,
                    'training_receive' => $value->training_receive,
                    'is_useful' => $value->is_useful,
                    'in_future' => $value->in_future,
                    'women_percentage' => $value->women_percentage,
                    'trainig_provided' => $value->trainig_provided,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_livelihood_training')->insert($store_data);
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
    public function update_livelihood_generation_other_option(Request $request)
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
                    'training_name' => $value->training_name,
                    'training_receive' => $value->training_receive,
                    'is_useful' => $value->is_useful,
                    'in_future' => $value->in_future,
                    'women_percentage' => $value->women_percentage,
                    'trainig_provided' => $value->trainig_provided,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_livelihood_training')->insert($store_data);
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
    public function store_altr_income_training(Request $request)
    {
        if (request()->ajax()) {
            $validator = Validator::make($request->all(), [
                'watershed_id' => 'required|string|max:255',
                'watershed_name' => 'required',
                'alt_income_training' => 'required',
            ], [],[]);

            if ($validator->fails()){
                return response()->json(['success' => false,'message' => strval(implode("<br>",$validator->errors()->all()))]);
            }
        
            $timestamp = time();
            $created_at = date("Y-m-d H:i:s", $timestamp);

            // check dupliacte record in database ::
            $found = DB::table('tbl_altr_income_training')->select('id')
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
                    'alt_income_training' => $request['alt_income_training'],         
                    'created_by' => $request['created_by'],
                    'created_at' => $created_at,
                );

                DB::table('tbl_altr_income_training')->insert($store_data);
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
