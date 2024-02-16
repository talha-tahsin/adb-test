<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Session;

class VCFBoundaryController extends Controller
{
    
    public function show_basic_info(){
        return view('vcf_boundary.basic_info_vcf');
    }
    public function show_gps_point(){
        return view('vcf_boundary.gps_points_vcf');
    }
    public function show_dominant_plant(){
        return view('vcf_boundary.dominant_plant_vcf');
    }
    public function get_all_para_name()
    {
        $sql_ret = DB::table('tbl_para_basic_info')->select('para_id', 'para_name')->orderBy('para_name')->get();

        $option = '';
        $option .= '<option value="" selected disabled>Select Para Name</option>';

        foreach($sql_ret as $v){
            $option .= '<option value="'.$v->para_id.'">'.$v->para_name.'</option>';
        }
        return $option;
    }

    public function store_basic_info_vcf_boundary(Request $request)
    {
        if (request()->ajax()) {
            $validator = Validator::make($request->all(), [
                'watershed_id' => 'required|string|max:255',
                'watershed_name' => 'required',
                'kml_file' => 'required',
            ], [],[]);

            if ($validator->fails()){
                return response()->json(['success' => false,'message' => strval(implode("<br>",$validator->errors()->all()))]);
            }
        
            $timestamp = time();
            $created_at = date("Y-m-d H:i:s", $timestamp);
            // Get unique id for every single user ::
            $timestamp1 = now()->timestamp;
            $randomNumber = mt_rand(1000000000, 9999999999);
            $vcf_id = (int) substr($timestamp1 . $randomNumber, -10);

            // check dupliacte record in database ::
            // $found = DB::table('tbl_water_resources1')->select('id')
            //                     ->where('watershed_id', $value->watershed_id)
            //                     ->where('para_id', $value->para_id)
            //                     ->count();

            // if($found > 0){
            //     $message = 'Data already exsits for this watershed and para, not possible to store...';
            //     return response()->json([ 'status' => 'ERROR', 'message' => $message ]);
            // }

            // try 
            // {
                DB::beginTransaction();

                $store_data = array(
                    'watershed_id' => $request['watershed_id'],
                    'watershed_name' => $request['watershed_name'],
                    'dependent_para_id' => $request['dependent_para_id'],
                    'dependent_para_name' => $request['dependent_para_name'],
                    'union_name' => $request['union'],            
                    'upazila' => $request['upozila'],            
                    'district' => $request['district'],
                    'vcf_id' => $vcf_id,           
                    'vcf_name' => $request['vcf_name'],           
                    'vcf_group_name' => $request['vcf_group_name'],            
                    'chairman_name' => $request['karbari_name'],            
                    'chairman_cell' => $request['chairman_cell_no'],                        
                    'approx_area' => $request['approx_vcf_area'],            
                    'average_distance' => $request['avg_distance'],            
                    'accessibility' => $request['accessilibity'],
                    'overall_status' => $request['overall_status'],
                    'current_problem' => $request['current_problem'],
                    'forest_type' => $request['forest_type'],
                    'observed_wild_birds' => $request['observed_wild_birds'],
                    'exist_conversation' => $request['existing_conservation'],
                    'any_remarks' => $request['any_remarks'],
                    'created_by' => $request['userName'],
                    'created_at' => $created_at,
                );

                DB::table('tbl_vcf_basic_info')->insert($store_data);
                DB::commit();

                if ($files = $request->file('kml_file')) {
                    $file = $vcf_id . "." .$files->getClientOriginalExtension();
                    $path_str = $files->storeAs( 'upload', $file, 'public' );
                    // dd($path_str);
                    $store_image = array(
                        'kml_file' =>'/' . $path_str,
                    );

                    DB::table('tbl_vcf_basic_info')
                        ->where('watershed_id', $request['watershed_id'])
                        ->where('dependent_para_id', $request['dependent_para_id'])
                        ->where('vcf_id', $vcf_id)
                        ->update($store_image);

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
    public function get_all_vcf_list(Request $request)
    {
        $waterId = $request['watershed_id'];
        // dd($waterId);

        $sql_ret = DB::table('tbl_vcf_basic_info')->where('watershed_id', $waterId)->latest()->get();

        $tabStr = '';
        $serial=1;
 
        foreach ($sql_ret as $v) {
            
            $timestamp = strtotime($v->created_at);
            $date = date('d-M-Y', $timestamp);
          
            $tabStr .= '<tr>';
            $tabStr .= '<td style="text-align: center;">'.$serial++.'</td>';
            $tabStr .= '<td style="text-align: left;">'.$v->vcf_name.'</td>';
            $tabStr .= '<td style="text-align: left;">'.$v->watershed_name.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->approx_area.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->dependent_para_name.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->chairman_name.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->district.'</td>';
            $tabStr .= '<td style="text-align: center;">'.$v->upazila.'</td>';

            $tabStr .= '<td style="text-align: center;">
            <button type="submit" id="btn_edit" class="btn btn-primary" row_id="'.$v->id.'">Edit VCF Basic</button></td>';
            $tabStr .= '<td style="text-align: center;">
                <button type="submit" id="btn_data_entry" class="btn btn-warning" vcf_name="'.$v->vcf_name.'" vcf_id="'.$v->vcf_id.'" para_id="'.$v->dependent_para_id.'" para_name="'.$v->dependent_para_name.'">
                    Data Entry
                </button>
            </td>';
            $tabStr .= '</tr>';
        }

        return $tabStr;
    }
    public function store_vcf_for_random_entry(Request $request)
    {
        $receiveData = $request['dataToSend'];
        $value = json_decode($receiveData);
        $userName = $value->userName;
        // dd($userName);

        $store_data = array(
            'watershed_id' => $value->watershed_id,
            'watershed_name' => $value->watershed_name,
            'vcf_id' => $value->vcf_id,
            'vcf_name' => $value->vcf_name,
            'main_para_id' => $value->main_para_id,
            'main_para_name' => $value->main_para_name,
        );

        DB::table('key_active_vcf')->where('user_name', $userName)->update($store_data);
        DB::commit();

        return response()->json([ 'status' => 'SUCCESS', 'message' => 'data store...' ]);
    }
    public function get_active_watershed_vcf(Request $request)
    {
        $userNm = $request['userNm'];
        $data = DB::table('key_active_vcf')->where('user_name', $userNm)->get();
            
        return response()->json([ 'status' => 'SUCCESS', 'message' => $data ]);
    }
    public function store_gps_point_vcf(Request $request)
    {
        $receiveData = $request['dataToSend'];
        $xmlstr = simplexml_load_string($receiveData);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
        //  $found = DB::table('tbl_livestock1')->select('id')
        //                         ->where('watershed_id', $xmlstr->row->watershed_id)
        //                         ->where('para_id', $xmlstr->row->para_id)
        //                         ->count();

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
                    'vcf_id' => $value->vcf_id,
                    'vcf_name' => $value->vcf_name,
                    'main_para_id' => $value->main_para_id,
                    'main_para_name' => $value->main_para_name,
                    'east_degree' => $value->east_degree,
                    'east_minute' => $value->east_minute,
                    'east_second' => $value->east_second,
                    'north_degree' => $value->north_degree,
                    'north_minute' => $value->north_minute,
                    'north_second' => $value->north_second,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_vcf_gps_point')->insert($store_data);
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
    public function store_plot1_dominant_plants(Request $request)
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
                    'watershed_id' => $value->watershed_id,
                    'watershed_name' => $value->watershed_name,
                    'vcf_id' => $value->vcf_id,
                    'vcf_name' => $value->vcf_name,
                    'main_para_id' => $value->main_para_id,
                    'main_para_name' => $value->main_para_name,
                    'latitude1' => $value->latitude1,
                    'longitude1' => $value->longitude1,
                    'dimension_length' => $value->plot1_dimension_length,
                    'dimension_width' => $value->plot1_dimension_width,
                    'species_name1' => $value->species_name1,
                    'diameter_height1' => $value->diameter_height1,
                    'avg_height1' => $value->avg_height1,
                    'number_tree1' => $value->number_tree1,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_plot1_dominant_plant')->insert($store_data);
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
    public function store_plot2_dominant_plants(Request $request)
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
                    'watershed_id' => $value->watershed_id,
                    'watershed_name' => $value->watershed_name,
                    'vcf_id' => $value->vcf_id,
                    'vcf_name' => $value->vcf_name,
                    'main_para_id' => $value->main_para_id,
                    'main_para_name' => $value->main_para_name,
                    'latitude2' => $value->latitude2,
                    'longitude2' => $value->longitude2,
                    'dimension_length' => $value->plot2_dimension_length,
                    'dimension_width' => $value->plot2_dimension_width,
                    'species_name2' => $value->species_name2,
                    'diameter_height2' => $value->diameter_height2,
                    'avg_height2' => $value->avg_height2,
                    'number_tree2' => $value->number_tree2,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_plot2_dominant_plant')->insert($store_data);
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
    public function store_plot3_dominant_plants(Request $request)
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
                    'watershed_id' => $value->watershed_id,
                    'watershed_name' => $value->watershed_name,
                    'vcf_id' => $value->vcf_id,
                    'vcf_name' => $value->vcf_name,
                    'main_para_id' => $value->main_para_id,
                    'main_para_name' => $value->main_para_name,
                    'latitude3' => $value->latitude3,
                    'longitude3' => $value->longitude3,
                    'dimension_length' => $value->plot3_dimension_length,
                    'dimension_width' => $value->plot3_dimension_width,
                    'species_name3' => $value->species_name3,
                    'diameter_height3' => $value->diameter_height3,
                    'avg_height3' => $value->avg_height3,
                    'number_tree3' => $value->number_tree3,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_plot3_dominant_plant')->insert($store_data);
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
