<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Session;

class ForestController extends Controller
{
    public function entry_village_common_forest()
    {
        return view('ecology.forest');
    }
    public function store_beneficiaryOf_vcf_for_para(Request $request)
    {
        // dd($request->all());
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
            $found = DB::table('tbl_vcf_beneficiary_for_para')->select('id')
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
                    'nameOf_vcf' => $request['nameOf_vcf'],
                    'areaOf_vcf' => $request['areaOf_vcf'],
                    'distance_from_para' => $request['distance_from_para'],
                    'overall_status' => $request['overall_status'],
                    'timber' => $request['timber'],          
                    'bamboo' => $request['bamboo'],          
                    'fruit' => $request['fruit'],          
                    'fuel_wood' => $request['fuel_wood'],          
                    'thatch' => $request['thatch'],          
                    'honey' => $request['honey'],          
                    'medical_plant' => $request['medical_plant'],          
                    'bush_meat' => $request['bush_meat'],          
                    'created_by' => $request['created_by'],
                    'created_at' => $created_at,
                );

                DB::table('tbl_vcf_beneficiary_for_para')->insert($store_data);
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
    public function store_native_species_dominant_plant_and_status(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_native_species_info')->select('id')
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

                    'dominantSpecies' => $value->dominantSpecies,
                    'plant_animalRelationship' => $value->plant_animalRelationship,
                    'productionCostAfter1stRotation' => $value->productionCostAfter1stRotation,
                    'yield' => $value->yield,
                    'sellingPrice' => $value->sellingPrice,
                    'profit' => $value->profit,
                    'waterDemandOftheSpecies' => $value->waterDemandOftheSpecies,
                    'lightDemand' => $value->lightDemand,
                    'rootType' => $value->rootType,
                    'slope' => $value->slope,
                    'tree_timberDemand' => $value->tree_timberDemand,
                    'soilandWaterRetentionCapacity' => $value->soilandWaterRetentionCapacity,
                    'presentCoverage' => $value->presentCoverage,
                    'presentTree_acre' => $value->presentTree_acre,
                    'pastCoverage' => $value->pastCoverage,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_native_species_info')->insert($store_data);
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
    public function store_ExoticOralien_species_dominant_plant_and_status(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_exotic_species_info')->select('id')
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

                    'dominantSpecies' => $value->dominantSpecies,
                    'plant_animalRelationship' => $value->plant_animalRelationship,
                    'productionCostAfter1stRotation' => $value->productionCostAfter1stRotation,
                    'yield' => $value->yield,
                    'sellingPrice' => $value->sellingPrice,
                    'profit' => $value->profit,
                    'waterDemandOftheSpecies' => $value->waterDemandOftheSpecies,
                    'lightDemand' => $value->lightDemand,
                    'rootType' => $value->rootType,
                    'slope' => $value->slope,
                    'tree_timberDemand' => $value->tree_timberDemand,
                    'soilandWaterRetentionCapacity' => $value->soilandWaterRetentionCapacity,
                    'presentCoverage' => $value->presentCoverage,
                    'presentTree_acre' => $value->presentTree_acre,
                    'pastCoverage' => $value->pastCoverage,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_exotic_species_info')->insert($store_data);
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
    public function store_medicinal_trees_species_dominant_plant_and_status(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_medicinal_trees_species_info')->select('id')
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

                    'dominantSpecies' => $value->dominantSpecies,
                    'plant_animalRelationship' => $value->plant_animalRelationship,
                    'productionCostAfter1stRotation' => $value->productionCostAfter1stRotation,
                    'yield' => $value->yield,
                    'sellingPrice' => $value->sellingPrice,
                    'profit' => $value->profit,
                    'waterDemandOftheSpecies' => $value->waterDemandOftheSpecies,
                    'lightDemand' => $value->lightDemand,
                    'rootType' => $value->rootType,
                    'slope' => $value->slope,
                    'tree_timberDemand' => $value->tree_timberDemand,
                    'soilandWaterRetentionCapacity' => $value->soilandWaterRetentionCapacity,
                    'presentCoverage' => $value->presentCoverage,
                    'presentTree_acre' => $value->presentTree_acre,
                    'pastCoverage' => $value->pastCoverage,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_medicinal_trees_species_info')->insert($store_data);
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
    public function store_fruit_trees_species_dominant_plant_and_status(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_fruit_trees_species_info')->select('id')
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

                    'dominantSpecies' => $value->dominantSpecies,
                    'plant_animalRelationship' => $value->plant_animalRelationship,
                    'productionCostAfter1stRotation' => $value->productionCostAfter1stRotation,
                    'yield' => $value->yield,
                    'sellingPrice' => $value->sellingPrice,
                    'profit' => $value->profit,
                    'waterDemandOftheSpecies' => $value->waterDemandOftheSpecies,
                    'lightDemand' => $value->lightDemand,
                    'rootType' => $value->rootType,
                    'slope' => $value->slope,
                    'tree_timberDemand' => $value->tree_timberDemand,
                    'soilandWaterRetentionCapacity' => $value->soilandWaterRetentionCapacity,
                    'presentCoverage' => $value->presentCoverage,
                    'presentTree_acre' => $value->presentTree_acre,
                    'pastCoverage' => $value->pastCoverage,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_fruit_trees_species_info')->insert($store_data);
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
    public function store_statusOf_wildlife_inVcf(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_wildlife_status')->select('id')
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
                    'wildlife_name' => $value->wildlife_name,
                    'observed_wildlife_inVcf' => $value->observed_wildlife_inVcf,
                    'status_past_10yrs' => $value->status_past_10yrs,
                    'preferable_habitat' => $value->preferable_habitat,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_wildlife_status')->insert($store_data);
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
    public function store_overall_statusOf_different_components(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_different_components_status')->select('id')
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
                    'forest_status' => $value->forest_status,
                    'status_past_10yrs' => $value->status_past_10yrs,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_different_components_status')->insert($store_data);
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
    public function store_fisheries_question_info(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_fisheries_question_info')->select('id')
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
                    'vcf_manage_general_rule' => $value->vcf_manage_general_rule,
                    'vcf_manage_and_challenge' => $value->vcf_manage_and_challenge,
                    'gamer_and_sojne' => $value->gamer_and_sojne,
                    'kadam_and_kushum' => $value->kadam_and_kushum,
                    'teli_garjan' => $value->teli_garjan,
                    'kanak_and_tetul' => $value->kanak_and_tetul,
                    'others_name' => $value->others_name,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_fisheries_question_info')->insert($store_data);
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
    public function store_forest_management_practice(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_forest_management_practice')->select('id')
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
                    'tackling_manmade_forest_fires' => $value->tackling_manmade_forest_fires,
                    'multilayer_plantation' => $value->multilayer_plantation,
                    'prohibitionOf_logging_hunting' => $value->prohibitionOf_logging_hunting,
                    'controlOf_jhum_cultivation' => $value->controlOf_jhum_cultivation,
                    'teli_garjan' => $value->teli_garjan,
                    'kanak_and_tetul' => $value->kanak_and_tetul,
                    'others_name' => $value->others_name,

                    'enrichment_plantation' => $value->enrichment_plantation,
                    'transition_pathwayOf_teak_tree' => $value->transition_pathwayOf_teak_tree,
                    'forest_silviculture_operations' => $value->forest_silviculture_operations,
                    'forest_chemical_management' => $value->forest_chemical_management,
                    'establishmentOf_community_tree' => $value->establishmentOf_community_tree,
                    'infrastructures_development' => $value->infrastructures_development,
                    'others_ngo_name' => $value->others_ngo_name,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_forest_management_practice')->insert($store_data);
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
