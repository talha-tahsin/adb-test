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

class SoilTestController extends Controller
{
    public function soil_test_basic_info(){
        return view('watershed_health.soil_test_basic_info');
    }
    public function soil_sample_lab_test(){
        return view('watershed_health.soil_sample_lab_test');
    }
    public function get_all_soil_test_list(Request $request)
    {
        $waterId = $request['watershed_id'];
        // dd($waterId);

        $sql_ret = DB::table('tbl_soil_test_basic')->where('watershed_id', $waterId)->latest()->get();

        $tabStr = '';
        $serial=1;
 
        foreach ($sql_ret as $v) {
            
            $timestamp = strtotime($v->collection_date);
            $date = date('d-M-Y', $timestamp);
          
            $tabStr .= '<tr>';
            $tabStr .= '<td style="text-align: center;">'.$serial++.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->watershed_id.'</td>';
            $tabStr .= '<td style="text-align: left;">'.$v->watershed_name.'</td>';
            $tabStr .= '<td style="text-align: left;">'.$v->para_name.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->soil_sample_id.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->farmer_name.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->farmer_cell_no.'</td>';
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
    public function store_soil_sample_id_random_entry(Request $request)
    {
        $receiveData = $request['dataToSend'];
        $value = json_decode($receiveData);
        $userName = $value->userName;
        // dd($receiveData);

        $store_data = array(
            'watershed_id' => $value->watershed_id,
            'watershed_name' => $value->watershed_name,
            'soil_sample_id' => $value->soil_sample_id,
            'para_id' => $value->para_id,
            'para_name' => $value->para_name,
        );

        DB::table('key_active_soil_sampleid')->where('user_name', $userName)->update($store_data);
        DB::commit();

        return response()->json([ 'status' => 'SUCCESS', 'message' => 'data store...' ]);
    }
    public function get_active_soil_sample(Request $request)
    {
        $userNm = $request['userNm'];
        $data = DB::table('key_active_soil_sampleid')->where('user_name', $userNm)->get();
            
        return response()->json([ 'status' => 'SUCCESS', 'message' => $data ]);
    }
    public function store_soil_test_basic_info(Request $request)
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
            $found = DB::table('tbl_soil_test_basic')->select('id')
                                ->where('watershed_id',  $request['watershed_id'])
                                ->where('para_id', $request['para_id'])
                                ->where('soil_sample_id', $request['soil_sample_id'])
                                ->count();

            if($found > 0){
                $message = 'Data already exsits for this watershed and para, not possible to store...';
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
                    'district_name' => $request['district'],
                    'upazila_name' => $request['upazila'],
                    'union_name' => $request['union'],
                    'soil_sample_id' => $request['soil_sample_id'],            
                    'collection_date' => $request['collection_date'],           
                    'collection_time' => $request['collection_time'],            
                    'farmer_name' => $request['farmer_name'],            
                    'farmer_cell_no' => $request['farmer_cell_no'],                        
                    'longitude' => $request['longitude'],            
                    'latitude' => $request['latitude'],
                    'created_by' => $request['userName'],
                    'created_at' => $created_at,
                );

                DB::table('tbl_soil_test_basic')->insert($store_data);
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
    public function store_soil_test_entry(Request $request)
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
            $found = DB::table('tbl_soil_test_info')->select('id')
                        ->where('watershed_id',  $request['watershed_id'])
                        ->where('para_id', $request['para_id'])
                        ->count();

            if($found > 0){
                $message = 'Data already exsits for this watershed and para, not possible to store...';
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
                    'soil_sample_id' => $request['soil_sample_id'],
                    'kharif_1' => $request['kharif_1'],
                    'kharif_2' => $request['kharif_2'],
                    'rabi' => $request['rabi'],
                    'soil_depth' => $request['soil_depth'],
                    'inundation_depth' => $request['inundation_depth'],
                    'land_form' => $request['land_form'],
                    'land_type' => $request['land_type'],
                    'any_remark' => $request['any_remark'],
                    'created_by' => $request['userName'],
                    'created_at' => $created_at,
                );

                DB::table('tbl_soil_test_info')->insert($store_data);
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
    public function store_soil_test_result(Request $request)
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
            $found = DB::table('tbl_soil_test_result')->select('id')
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
                    'soil_sample_id' => $request['soil_sample_id'],
                    'soil_reaction' => $request['soil_reaction'],           
                    'organic_matter' => $request['organic_matter'],            
                    'water_holding' => $request['water_holding'],            
                    'percolation' => $request['percolation'],                        
                    'nitrogen' => $request['nitrogen'],            
                    'phosphorus' => $request['phosphorus'],            
                    'potassium' => $request['potassium'],
                    'sulphur' => $request['sulphur'],
                    'calcium' => $request['calcium'],
                    'magnesium' => $request['magnesium'],
                    'iron' => $request['iron'],
                    'manganese' => $request['manganese'],
                    'copper' => $request['copper'],
                    'molybdenum' => $request['molybdenum'],
                    'zinc' => $request['zinc'],
                    'boron' => $request['boron'],
                    'cadmium' => $request['cadmium'],
                    'lead' => $request['lead'],
                    'created_by' => $request['created_by'],
                    'created_at' => $created_at,
                );

                DB::table('tbl_soil_test_result')->insert($store_data);
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
    public function store_soil_texture_class(Request $request)
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
                    'soil_sample_id' => $value->soil_sample_id,
                    'watershed_id' => $value->watershed_id,
                    'watershed_name' => $value->watershed_name,
                    'para_id' => $value->para_id,
                    'para_name' => $value->para_name,
                    'soil_texture_class' => $value->soil_texture_class,
                    'sand' => $value->sand,
                    'slit' => $value->slit,
                    'clay' => $value->clay,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_soil_texture_class')->insert($store_data);
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
