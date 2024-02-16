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

class ProducerController extends Controller
{
    public function entry_kii_for_producer_basic()
    {
        return view('kii_checklist.basic_kii_producer'); 
    }
    public function entry_kii_for_producer()
    {
        return view('kii_checklist.entry_kii_producer'); 
    }
    public function store_kii_producer_basic(Request $request)
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
            // Get unique id for every single user ::
            $timestamp1 = now()->timestamp;
            $randomNumber = mt_rand(1000000000, 9999999999);
            $producer_id = (int) substr($timestamp1 . $randomNumber, -10);

            // Get unique id for every single user ::
            $timestamp2 = now()->timestamp;
            $randomNumber2 = mt_rand(1000000000, 9999999999);
            $product_id = (int) substr($timestamp2 . $randomNumber2, -10);

            // check dupliacte record in database ::
            // $found = DB::table('tbl_water_resources1')->select('id')
            //                     ->where('watershed_id', $value->watershed_id)
            //                     ->where('para_id', $value->para_id)
            //                     ->count();

            // if($found > 0){
            //     $message = 'Data already exsits for this watershed and para, not possible to store...';
            //     return response()->json([ 'status' => 'ERROR', 'message' => $message ]);
            // }

            try 
            {
                DB::beginTransaction();

                $store_data = array(
                    'watershed_id' => $request['watershed_id'],
                    'watershed_name' => $request['watershed_name'],
                    'para_id' => $request['para_id'],
                    'para_name' => $request['para_name'],
                    'producer_id' => $producer_id,            
                    'producer_name' => $request['producer_name'],            
                    'product_id' => $request['product_id'],            
                    'product_name' => $request['name_of_product'],            
                    'producer_cell_no' => $request['producer_cell_no'],
                    'product_varity' => $request['product_varity'],            
                    'producer_age' => $request['producer_age'],           
                    'gender' => $request['gender'],           
                    'producer_qualification' => $request['producer_qualification'],
                    'created_by' => $request['userName'],
                    'created_at' => $created_at,
                );

                DB::table('tbl_kii_producer_basic')->insert($store_data);
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
    public function get_all_kii_producer_list(Request $request)
    {
        $waterId = $request['watershed_id'];
        // dd($waterId);

        $sql_ret = DB::table('tbl_kii_producer_basic')->where('watershed_id', $waterId)->latest()->get();

        $tabStr = '';
        $serial=1;
 
        foreach ($sql_ret as $v) {
            
            $timestamp = strtotime($v->created_at);
            $date = date('d-M-Y', $timestamp);
          
            $tabStr .= '<tr>';
            $tabStr .= '<td style="text-align: center;">'.$serial++.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->producer_name.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->product_name.'</td>';
            // $tabStr .= '<td style="text-align: center;">'.$v->watershed_id.'</td>';
            $tabStr .= '<td style="text-align: left;">'.$v->watershed_name.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->para_name.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->producer_cell_no.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->producer_qualification.'</td>';
            // $tabStr .= '<td style="text-align: center;">'.$v->upazila.'</td>';
            // $tabStr .= '<td style="text-align: center;">'.$v->district.'</td>';

            $tabStr .= '<td style="text-align: center;">
            <button type="submit" id="btn_edit" class="btn btn-primary" row_id="'.$v->id.'">Edit Producer Basic</button></td>';
            $tabStr .= '<td style="text-align: center;">
                <button type="submit" id="btn_data_entry" class="btn btn-warning" product_id="'.$v->product_id.'" product_name="'.$v->product_name.'" producer_id="'.$v->producer_id.'" producer_name="'.$v->producer_name.'" para_id="'.$v->para_id.'" para_name="'.$v->para_name.'">
                    Data Entry
                </button>
            </td>';
            $tabStr .= '</tr>';
        }

        return $tabStr;
    }
    public function store_kii_active_producer(Request $request)
    {
        $receiveData = $request['dataToSend'];
        $value = json_decode($receiveData);
        $userName = $value->userName;
        // dd($userName);

        $store_data = array(
            'watershed_id' => $value->watershed_id,
            'watershed_name' => $value->watershed_name,
            'para_id' => $value->para_id,
            'para_name' => $value->para_name,
            'product_id' => $value->product_id,
            'product_name' => $value->product_name,
            'producer_id' => $value->producer_id,
            'producer_name' => $value->producer_name,
        );

        DB::table('key_active_kii_producer')->where('user_name', $userName)->update($store_data);
        DB::commit();

        return response()->json([ 'status' => 'SUCCESS', 'message' => 'data store...' ]);
    }
    public function get_active_kii_producer(Request $request)
    {
        $Watershed_id = $request['watershed_id'];
        $data = DB::table('key_active_kii_producer')->where('watershed_id', $Watershed_id)->get();
            
        return response()->json([ 'status' => 'SUCCESS', 'message' => $data ]);
    }

    public function store_production_and_impact_of_hazards(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);

        $xml2 = $request['xml2'];
        $value2 = simplexml_load_string($xml2);
        // dd($value2->answer1);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_production_and_impact_hazard')->select('id')
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
                    'producer_id' => $value->producer_id,
                    'producer_name' => $value->producer_name,
                    'product_name' => $value->product_name,
                    'indicators' => $value->indicators,
                    'Poush' => $value->Poush,
                    'Magh' => $value->Magh,
                    'Falgun' => $value->Falgun,
                    'Chaitra' => $value->Chaitra,
                    'Boisakh' => $value->Boisakh,
                    'Joishtho' => $value->Joishtho,
                    'Ashar' => $value->Ashar,
                    'Srabon' => $value->Srabon,
                    'Vadro' => $value->Vadro,
                    'Ashwin' => $value->Ashwin,
                    'Kartik' => $value->Kartik,
                    'Agrahyan' => $value->Agrahyan,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_production_and_impact_hazard')->insert($store_data);
                DB::commit();
            }

            $store_data2 = array(
                'watershed_id' => $value2->watershed_id,
                'watershed_name' => $value2->watershed_name,
                'para_id' => $value2->para_id,
                'para_name' => $value2->para_name,
                'producer_id' => $value2->producer_id,
                'producer_name' => $value2->producer_name,
                'product_name' => $value2->product_name,
                'question1' => $value2->question1,
                'answer1' => $value2->answer1,
                'question2' => $value2->question2,
                'answer2' => $value2->answer2,
                'created_at' => $created_at,
            );
            
            DB::table('tbl_production_impact_hazard_questionnaire')->insert($store_data2);
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
    public function store_input_sources_of_production(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_input_sources_of_production')->select('id')
                    ->where('watershed_id', $xmlstr->row->watershed_id)
                    ->where('para_id', $xmlstr->row->para_id)
                    ->count();

        if($found > 0){
            $message = 'Data already exsits for this watershed and para, not possible to store...';
            return response()->json([ 'status' => 'ERROR', 'message' => $message ]);
        }

        // try 
        // {
            DB::beginTransaction();

            foreach ($xmlstr->row as $value) 
            {
                $store_data = array(
                    'watershed_id' => $value->watershed_id,
                    'watershed_name' => $value->watershed_name,
                    'para_id' => $value->para_id,
                    'para_name' => $value->para_name,
                    'input_names' => $value->input_names,
                    'where_input_received' => $value->where_input_received,
                    'time_needed_received' => $value->time_needed_received,
                    'impediment' => $value->impediment,
                    'na' => $value->na,
                    'others_name' => $value->others_name,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_input_sources_of_production')->insert($store_data);
                DB::commit();
            }
            
            return response()->json([ 'status' => 'SUCCESS', 'message' => 'Data store successfully...' ]);
            
        // }
        // catch (\Exception $e) 
        // {
        //     DB::rollBack();
        //     $message = "Opps!! Something is wrong, data not saved and rollback..";
        //     return response()->json([ 'status' => 'ERROR', 'message' => $message ]);
        // } 
    }
    public function store_economies_of_production(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_economies_of_production')->select('id')
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
                    'items_name' => $value->items_name,
                    'input' => $value->input,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_economies_of_production')->insert($store_data);
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
    public function store_training_and_capacity_building(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_training_and_capacity_building')->select('id')
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
                    'training_topic' => $value->training_topic,
                    'training_received' => $value->training_received,
                    'where_received_training' => $value->where_received_training,
                    'satisfaction_level' => $value->satisfaction_level,
                    'receive_assistance' => $value->receive_assistance,
                    'training_needed' => $value->training_needed,
                    'others_name' => $value->others_name,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_training_and_capacity_building')->insert($store_data);
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
    public function store_kii_producer_questionnaire_info(Request $request)
    {
        $v_xml = $request['v_master'];
        $value = simplexml_load_string($v_xml);

        $xml1 = $request['xml_data'];
        $xmlstr1 = simplexml_load_string($xml1);

        $xml = $request['xml_data2'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr1->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

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

        // try 
        // {
            DB::beginTransaction();

            $store_data1 = array(
                'row_join_id' => $row_join_id,
                'watershed_id' => $value->watershed_id,
                'watershed_name' => $value->watershed_name,
                'para_id' => $value->para_id,
                'para_name' => $value->para_name,
                'product_name' => $value->product_name,
                'created_by' => $value->created_by,
                'created_at' => $created_at,
            );
            
            DB::table('tbl_master_kii_producer')->insert($store_data1);
            DB::commit();

            foreach ($xmlstr1->row as $value1) 
            {
                $store_data2 = array(
                    'row_join_id' => $row_join_id,
                    'question' => $value1->question,
                    'answer' => $value1->answer,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_kii_producer_questionnaire')->insert($store_data2);
                DB::commit();
            }

            foreach ($xmlstr->row as $value) 
            {
                $store_data3 = array(
                    'row_join_id' => $row_join_id,
                    'question' => $value->question,
                    'answer' => $value->answer,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_kii_producer_questionnaire')->insert($store_data3);
                DB::commit();
            }
            
            return response()->json([ 'status' => 'SUCCESS', 'message' => 'Data store successfully...' ]);
            
        // }
        // catch (\Exception $e) 
        // {
        //     DB::rollBack();
        //     $message = "Opps!! Something is wrong, data not saved and rollback..";
        //     return response()->json([ 'status' => 'ERROR', 'message' => $message ]);
        // } 
    }
}
