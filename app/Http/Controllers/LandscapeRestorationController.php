<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Session;

class LandscapeRestorationController extends Controller
{
    public function entry_landscape_restoration()
    {
        return view('landscape_restoration.entry_landscape_restoration');
    }
    public function agriculture_land_conservation_R3(Request $request)
    {
        $xml = $request['dataToSend'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_interventions_agriculture_land_conservation')->select('id')
                    ->where('watershed_id', $xmlstr->row->watershed_id)
                    ->count();

        if($found > 0){
            $message = 'Data already exists for this watershed, not possible to store the same watershed twice...';
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

                    'conservationMeasures' => $value->conservationMeasures,
                    'preferencesOfMeasure' => $value->preferencesOfMeasure,
                    'unitCost' => $value->unitCost,
                    'potentialUnitNetGain' => $value->potentialUnitNetGain,
                    'treeIncrease' => $value->treeIncrease,
                    'carbonSequestration' => $value->carbonSequestration,
                    'cropProduction' => $value->cropProduction,
                    'livestockProduction' => $value->livestockProduction,
                    'fisheriesProduction' => $value->fisheriesProduction,
                    'waterSupply' => $value->waterSupply,
                    'waterPurification' => $value->waterPurification,
                    'wildPlantFoodFibresMedicine' => $value->wildPlantFoodFibresMedicine,
                    'timberRevenue' => $value->timberRevenue,
                    'inorganicFertilizer' => $value->inorganicFertilizer,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_interventions_agriculture_land_conservation')->insert($store_data);
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
    public function forest_land_conservation_R3(Request $request)
    {
        $xml = $request['dataToSend'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_interventions_forest_land_conservation')->select('id')
                    ->where('watershed_id', $xmlstr->row->watershed_id)
                    ->count();

        if($found > 0){
            $message = 'Data already exists for this watershed, not possible to store the same watershed twice...';
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

                    'conservationMeasures' => $value->conservationMeasures,
                    'preferencesOfMeasure' => $value->preferencesOfMeasure,
                    'unitCost' => $value->unitCost,
                    'potentialUnitNetGain' => $value->potentialUnitNetGain,
                    'treeIncrease' => $value->treeIncrease,
                    'carbonSequestration' => $value->carbonSequestration,
                    'cropProduction' => $value->cropProduction,
                    'livestockProduction' => $value->livestockProduction,
                    'fisheriesProduction' => $value->fisheriesProduction,
                    'waterSupply' => $value->waterSupply,
                    'waterPurification' => $value->waterPurification,
                    'wildPlantFoodFibresMedicine' => $value->wildPlantFoodFibresMedicine,
                    'timberRevenue' => $value->timberRevenue,
                    'inorganicFertilizer' => $value->inorganicFertilizer,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_interventions_forest_land_conservation')->insert($store_data);
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
    public function degraded_soil_land_improvement_R3(Request $request)
    {
        $xml = $request['dataToSend'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_interventions_degraded_soil')->select('id')
                    ->where('watershed_id', $xmlstr->row->watershed_id)
                    ->count();

        if($found > 0){
            $message = 'Data already exists for this watershed, not possible to store the same watershed twice...';
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

                    'conservationMeasures' => $value->conservationMeasures,
                    'preferencesOfMeasure' => $value->preferencesOfMeasure,
                    'unitCost' => $value->unitCost,
                    'potentialUnitNetGain' => $value->potentialUnitNetGain,
                    'treeIncrease' => $value->treeIncrease,
                    'carbonSequestration' => $value->carbonSequestration,
                    'cropProduction' => $value->cropProduction,
                    'livestockProduction' => $value->livestockProduction,
                    'fisheriesProduction' => $value->fisheriesProduction,
                    'waterSupply' => $value->waterSupply,
                    'waterPurification' => $value->waterPurification,
                    'wildPlantFoodFibresMedicine' => $value->wildPlantFoodFibresMedicine,
                    'timberRevenue' => $value->timberRevenue,
                    'inorganicFertilizer' => $value->inorganicFertilizer,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_interventions_degraded_soil')->insert($store_data);
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
    public function stream_bank_protection_R3(Request $request)
    {
        $xml = $request['dataToSend'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_interventions_stream_bank')->select('id')
                    ->where('watershed_id', $xmlstr->row->watershed_id)
                    ->count();

        if($found > 0){
            $message = 'Data already exists for this watershed, not possible to store the same watershed twice...';
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

                    'conservationMeasures' => $value->conservationMeasures,
                    'preferencesOfMeasure' => $value->preferencesOfMeasure,
                    'unitCost' => $value->unitCost,
                    'potentialUnitNetGain' => $value->potentialUnitNetGain,
                    'treeIncrease' => $value->treeIncrease,
                    'carbonSequestration' => $value->carbonSequestration,
                    'cropProduction' => $value->cropProduction,
                    'livestockProduction' => $value->livestockProduction,
                    'fisheriesProduction' => $value->fisheriesProduction,
                    'waterSupply' => $value->waterSupply,
                    'waterPurification' => $value->waterPurification,
                    'wildPlantFoodFibresMedicine' => $value->wildPlantFoodFibresMedicine,
                    'timberRevenue' => $value->timberRevenue,
                    'inorganicFertilizer' => $value->inorganicFertilizer,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_interventions_stream_bank')->insert($store_data);
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
    public function water_resources_development_R3(Request $request)
    {
        $xml = $request['dataToSend'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_interventions_water_resources')->select('id')
                    ->where('watershed_id', $xmlstr->row->watershed_id)
                    ->count();

        if($found > 0){
            $message = 'Data already exists for this watershed, not possible to store the same watershed twice...';
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

                    'conservationMeasures' => $value->conservationMeasures,
                    'preferencesOfMeasure' => $value->preferencesOfMeasure,
                    'unitCost' => $value->unitCost,
                    'potentialUnitNetGain' => $value->potentialUnitNetGain,
                    'treeIncrease' => $value->treeIncrease,
                    'carbonSequestration' => $value->carbonSequestration,
                    'cropProduction' => $value->cropProduction,
                    'livestockProduction' => $value->livestockProduction,
                    'fisheriesProduction' => $value->fisheriesProduction,
                    'waterSupply' => $value->waterSupply,
                    'waterPurification' => $value->waterPurification,
                    'wildPlantFoodFibresMedicine' => $value->wildPlantFoodFibresMedicine,
                    'timberRevenue' => $value->timberRevenue,
                    'inorganicFertilizer' => $value->inorganicFertilizer,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_interventions_water_resources')->insert($store_data);
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
    public function capacity_development_demonstration_R3(Request $request)
    {
        $xml = $request['dataToSend'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_interventions_capacity_development')->select('id')
                    ->where('watershed_id', $xmlstr->row->watershed_id)
                    ->count();

        if($found > 0){
            $message = 'Data already exists for this watershed, not possible to store the same watershed twice...';
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

                    'conservationMeasures' => $value->conservationMeasures,
                    'preferencesOfMeasure' => $value->preferencesOfMeasure,
                    'unitCost' => $value->unitCost,
                    'potentialUnitNetGain' => $value->potentialUnitNetGain,
                    'treeIncrease' => $value->treeIncrease,
                    'carbonSequestration' => $value->carbonSequestration,
                    'cropProduction' => $value->cropProduction,
                    'livestockProduction' => $value->livestockProduction,
                    'fisheriesProduction' => $value->fisheriesProduction,
                    'waterSupply' => $value->waterSupply,
                    'waterPurification' => $value->waterPurification,
                    'wildPlantFoodFibresMedicine' => $value->wildPlantFoodFibresMedicine,
                    'timberRevenue' => $value->timberRevenue,
                    'inorganicFertilizer' => $value->inorganicFertilizer,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_interventions_capacity_development')->insert($store_data);
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

    public function agriculture_land_conservation_R4(Request $request)
    {
        $xml = $request['dataToSend'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_r4_agriculture_land_conservation')->select('id')
                    ->where('watershed_id', $xmlstr->row->watershed_id)
                    ->count();

        if($found > 0){
            $message = 'Data already exists for this watershed, not possible to store the same watershed twice...';
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

                    'conservationMeasures' => $value->conservationMeasures,
                    'implementationTimeMeasures' => $value->implementationTimeMeasures,
                    'landUnavailable' => $value->landUnavailable,
                    'supplyChainDisconnection' => $value->supplyChainDisconnection,
                    'landRightProblems' => $value->landRightProblems,
                    'highHumanInvestment' => $value->highHumanInvestment,
                    'insufficientInfrastructures' => $value->insufficientInfrastructures,
                    'lessDemandOfAgroforestry' => $value->lessDemandOfAgroforestry,
                    'environmentallyUnsustainable' => $value->environmentallyUnsustainable,
                    'sociallyUnacceptable' => $value->sociallyUnacceptable,
                    'lessBeneficial' => $value->lessBeneficial,
                    'actionsOvercomeBarrier' => $value->actionsOvercomeBarrier,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_r4_agriculture_land_conservation')->insert($store_data);
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
    public function forestOrShrubLandConservation_R4(Request $request)
    {
        $xml = $request['dataToSend'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_r4_forest_land_conservation')->select('id')
                    ->where('watershed_id', $xmlstr->row->watershed_id)
                    ->count();

        if($found > 0){
            $message = 'Data already exists for this watershed, not possible to store the same watershed twice...';
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

                    'conservationMeasures' => $value->conservationMeasures,
                    'implementationTimeMeasures' => $value->implementationTimeMeasures,
                    'landUnavailable' => $value->landUnavailable,
                    'supplyChainDisconnection' => $value->supplyChainDisconnection,
                    'landRightProblems' => $value->landRightProblems,
                    'highHumanInvestment' => $value->highHumanInvestment,
                    'insufficientInfrastructures' => $value->insufficientInfrastructures,
                    'lessDemandOfAgroforestry' => $value->lessDemandOfAgroforestry,
                    'environmentallyUnsustainable' => $value->environmentallyUnsustainable,
                    'sociallyUnacceptable' => $value->sociallyUnacceptable,
                    'lessBeneficial' => $value->lessBeneficial,
                    'actionsOvercomeBarrier' => $value->actionsOvercomeBarrier,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_r4_forest_land_conservation')->insert($store_data);
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
    public function degradedSoilLandImprovement_R4(Request $request)
    {
        $xml = $request['dataToSend'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_r4_degraded_soil_land')->select('id')
                    ->where('watershed_id', $xmlstr->row->watershed_id)
                    ->count();

        if($found > 0){
            $message = 'Data already exists for this watershed, not possible to store the same watershed twice...';
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

                    'conservationMeasures' => $value->conservationMeasures,
                    'implementationTimeMeasures' => $value->implementationTimeMeasures,
                    'landUnavailable' => $value->landUnavailable,
                    'supplyChainDisconnection' => $value->supplyChainDisconnection,
                    'landRightProblems' => $value->landRightProblems,
                    'highHumanInvestment' => $value->highHumanInvestment,
                    'insufficientInfrastructures' => $value->insufficientInfrastructures,
                    'lessDemandOfAgroforestry' => $value->lessDemandOfAgroforestry,
                    'environmentallyUnsustainable' => $value->environmentallyUnsustainable,
                    'sociallyUnacceptable' => $value->sociallyUnacceptable,
                    'lessBeneficial' => $value->lessBeneficial,
                    'actionsOvercomeBarrier' => $value->actionsOvercomeBarrier,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_r4_degraded_soil_land')->insert($store_data);
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
    public function streamBankProtection_R4(Request $request)
    {
        $xml = $request['dataToSend'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_r4_stream_bank_protection')->select('id')
                    ->where('watershed_id', $xmlstr->row->watershed_id)
                    ->count();

        if($found > 0){
            $message = 'Data already exists for this watershed, not possible to store the same watershed twice...';
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

                    'conservationMeasures' => $value->conservationMeasures,
                    'implementationTimeMeasures' => $value->implementationTimeMeasures,
                    'landUnavailable' => $value->landUnavailable,
                    'supplyChainDisconnection' => $value->supplyChainDisconnection,
                    'landRightProblems' => $value->landRightProblems,
                    'highHumanInvestment' => $value->highHumanInvestment,
                    'insufficientInfrastructures' => $value->insufficientInfrastructures,
                    'lessDemandOfAgroforestry' => $value->lessDemandOfAgroforestry,
                    'environmentallyUnsustainable' => $value->environmentallyUnsustainable,
                    'sociallyUnacceptable' => $value->sociallyUnacceptable,
                    'lessBeneficial' => $value->lessBeneficial,
                    'actionsOvercomeBarrier' => $value->actionsOvercomeBarrier,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_r4_stream_bank_protection')->insert($store_data);
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
    public function waterResourcesDevelopment_R4(Request $request)
    {
        $xml = $request['dataToSend'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_r4_water_resources_development')->select('id')
                    ->where('watershed_id', $xmlstr->row->watershed_id)
                    ->count();

        if($found > 0){
            $message = 'Data already exists for this watershed, not possible to store the same watershed twice...';
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

                    'conservationMeasures' => $value->conservationMeasures,
                    'implementationTimeMeasures' => $value->implementationTimeMeasures,
                    'landUnavailable' => $value->landUnavailable,
                    'supplyChainDisconnection' => $value->supplyChainDisconnection,
                    'landRightProblems' => $value->landRightProblems,
                    'highHumanInvestment' => $value->highHumanInvestment,
                    'insufficientInfrastructures' => $value->insufficientInfrastructures,
                    'lessDemandOfAgroforestry' => $value->lessDemandOfAgroforestry,
                    'environmentallyUnsustainable' => $value->environmentallyUnsustainable,
                    'sociallyUnacceptable' => $value->sociallyUnacceptable,
                    'lessBeneficial' => $value->lessBeneficial,
                    'actionsOvercomeBarrier' => $value->actionsOvercomeBarrier,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_r4_water_resources_development')->insert($store_data);
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
    public function capacityDevelopmentDemonstration_R4(Request $request)
    {
        $xml = $request['dataToSend'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_r4_capacity_dev_demonstration')->select('id')
                    ->where('watershed_id', $xmlstr->row->watershed_id)
                    ->count();

        if($found > 0){
            $message = 'Data already exists for this watershed, not possible to store the same watershed twice...';
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

                    'conservationMeasures' => $value->conservationMeasures,
                    'implementationTimeMeasures' => $value->implementationTimeMeasures,
                    'landUnavailable' => $value->landUnavailable,
                    'supplyChainDisconnection' => $value->supplyChainDisconnection,
                    'landRightProblems' => $value->landRightProblems,
                    'highHumanInvestment' => $value->highHumanInvestment,
                    'insufficientInfrastructures' => $value->insufficientInfrastructures,
                    'lessDemandOfAgroforestry' => $value->lessDemandOfAgroforestry,
                    'environmentallyUnsustainable' => $value->environmentallyUnsustainable,
                    'sociallyUnacceptable' => $value->sociallyUnacceptable,
                    'lessBeneficial' => $value->lessBeneficial,
                    'actionsOvercomeBarrier' => $value->actionsOvercomeBarrier,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_r4_capacity_dev_demonstration')->insert($store_data);
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
