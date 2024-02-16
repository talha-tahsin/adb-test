<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Session;

class BusinessModelController extends Controller
{
    public function entry_business_model()
    {
        return view('business_model.entry_business_model');
    }
    public function paraList_business_model()
    {
        return view('business_model.para_list_business_model');
    }
    public function get_all_para_list(Request $request)
    {
        // $userNm = $request['user_name'];
        $waterId = $request['watershed_id'];
        // dd($waterId);

        $sql_ret = DB::table('tbl_para_basic_info')->where('watershed_id', $waterId)
                        ->latest()->get();

        $tabStr = '';
        $serial=1;
 
        foreach ($sql_ret as $v) {
            
            $timestamp = strtotime($v->created_at);
            $date = date('d-M-Y', $timestamp);
          
            $tabStr .= '<tr>';
            $tabStr .= '<td style="text-align: center;">'.$serial++.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->watershed_id.'</td>';
            $tabStr .= '<td style="text-align: left;">'.$v->watershed_name.'</td>';
            $tabStr .= '<td style="text-align: left;">'.$v->para_name.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->para_area.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->karbari_name.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->headman_name.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->district.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->upazila.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->union_name.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->mouza_name.'</td>';

            $tabStr .= '<td style="text-align: center;">
            <button type="submit" id="btn_data_entry" class="btn btn-warning" para_name="'.$v->para_name.'" para_id="'.$v->para_id.'">Data Entry</button></td>';
            $tabStr .= '</tr>';
        }

        return $tabStr;

    }
    public function store_existing_cropping_pattern(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_existing_cropping_pattern')->select('id')
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
                    'consumed_good' => $value->consumed_good,
                    'avg_numberOf_persons_in_household' => $value->avg_numberOf_persons_in_household,
                    'monthly_ability_to_buyOr_source' => $value->monthly_ability_to_buyOr_source,
                    'storage_facility_availability' => $value->storage_facility_availability,
                    'max_num_Of_days_stored' => $value->max_num_Of_days_stored,
                    'consumption_frequency' => $value->consumption_frequency,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_existing_cropping_pattern')->insert($store_data);
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
    public function store_women_livelihood_activity_involvement(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_women_livelihood_activity')->select('id')
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
                    'product_name' => $value->product_name,
                    'pre_production' => $value->pre_production,
                    'shelter_preparation' => $value->shelter_preparation,
                    'rearing' => $value->rearing,
                    'showing_seeds' => $value->showing_seeds,
                    'weeding' => $value->weeding,
                    'fertilizer_and_pesticides_apply' => $value->fertilizer_and_pesticides_apply,
                    'harvesting' => $value->harvesting,
                    'processing' => $value->processing,
                    'selling' => $value->selling,
                    'women_involved_scope_activities' => $value->women_involved_scope_activities,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_women_livelihood_activity')->insert($store_data);
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
    public function store_involvementOf_youth_livelihood_activity(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_youth_livelihood_activity')->select('id')
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
                    'product_name' => $value->product_name,
                    'pre_production' => $value->pre_production,
                    'shelter_preparation' => $value->shelter_preparation,
                    'rearing' => $value->rearing,
                    'showing_seeds' => $value->showing_seeds,
                    'weeding' => $value->weeding,
                    'fertilizer_and_pesticides_apply' => $value->fertilizer_and_pesticides_apply,
                    'harvesting' => $value->harvesting,
                    'processing' => $value->processing,
                    'selling' => $value->selling,
                    'youth_involved_scope_activities' => $value->youth_involved_scope_activities,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_youth_livelihood_activity')->insert($store_data);
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
    public function store_value_chain_sensitivity_to_sudden_shock(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_value_chain_sensitivity')->select('id')
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
                    'sensitivity_factor' => $value->sensitivity_factor,
                    'items' => $value->items,
                    'quantity_or_number' => $value->quantity_or_number,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_value_chain_sensitivity')->insert($store_data);
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
    public function store_preferencesOf_certain_agro_forestry_products(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_certain_agro_foresty_products')->select('id')
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
                    'product_name' => $value->product_name,
                    'degreeOf_preferences' => $value->degreeOf_preferences,
                    'applicabilityOf_product' => $value->applicabilityOf_product,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_certain_agro_foresty_products')->insert($store_data);
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
    public function store_preferences_on_management_practices(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_preferences_on_management_practices')->select('id')
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
                    'product_name' => $value->product_name,
                    'degreeOf_preferences' => $value->degreeOf_preferences,
                    'applicabilityOf_practice' => $value->applicabilityOf_practice,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_preferences_on_management_practices')->insert($store_data);
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
    public function store_food_shortage_evaluation(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_food_shortage_evaluation')->select('id')
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
                    'food_shortage_duration' => $value->food_shortage_duration,
                    'household' => $value->household,
                    'reason' => $value->reason,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_food_shortage_evaluation')->insert($store_data);
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
    public function store_occupational_change_due_to_hazards(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_occupational_change')->select('id')
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
                    'current_occupation' => $value->current_occupation,
                    'previous_occuption' => $value->previous_occuption,
                    'reason_for_switching' => $value->reason_for_switching,
                    'new_occupation_started_year' => $value->new_occupation_started_year,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_occupational_change')->insert($store_data);
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
    public function store_question_info(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_question_info')->select('id')
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
                    'question' => $value->question,
                    'answer' => $value->answer,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_question_info')->insert($store_data);
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
