<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Session;

class ClimateChangeController extends Controller
{
    public function entry_climate_change_risk()
    {
        return view('climate_change.entry_climate_change');
    }
    public function store_climate_change_questionnaire(Request $request)
    {
        $v_xml = $request['v_master'];
        $value1 = simplexml_load_string($v_xml);
        // dd($value1);

        $xml = $request['xml_data'];
        $xmlstr2 = simplexml_load_string($xml);
        // dd($request['xml_data']);
        
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
                'watershed_id' => $value1->watershed_id,
                'watershed_name' => $value1->watershed_name,
                'para_id' => $value1->para_id,
                'para_name' => $value1->para_name,
                'created_by' => $value1->created_by,
                'created_at' => $created_at,
            );
            
            DB::table('tbl_master_climate_questionnaire')->insert($store_data1);
            DB::commit();

            foreach ($xmlstr2->row as $value) 
            {
                $store_data2 = array(
                    'row_join_id' => $row_join_id,
                    'question' => $value->question,
                    'answer' => $value->answer,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_details_climate_questionnaire')->insert($store_data2);
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
    public function store_hazard_calendar(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_hazard_calendar')->select('id')
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
                    'hazard' => $value->hazard,
                    'ranking' => $value->ranking,
                    'trends_frequency' => $value->trends_frequency,
                    'intensity' => $value->intensity,
                    'timeline' => $value->timeline,

                    'poush' => $value->Poush,
                    'magh' => $value->Magh,
                    'falgun' => $value->Falgun,
                    'chaitra' => $value->Chaitra,
                    'boisakh' => $value->Boisakh,
                    'joishtho' => $value->Joishtho,
                    'ashar' => $value->Ashar,
                    'srabon' => $value->Srabon,
                    'vadro' => $value->Vadro,
                    'ashwin' => $value->Ashwin,
                    'kartik' => $value->Kartik,
                    'agrahyan' => $value->Agrahyan,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_hazard_calendar')->insert($store_data);
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
    public function store_agroforestry_impactVulnerabilityMatrix(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_agroforest_impact_vulnerability')->select('id')
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

                    'impacts_name' => $value->impacts_name,
                    'river_Flood' => $value->river_Flood,
                    'flash_Flood' => $value->flash_Flood,
                    'drought' => $value->drought,
                    'heat_Wave' => $value->heat_Wave,
                    'cold_Wave' => $value->cold_Wave,
                    'tornado' => $value->tornado,
                    'landslides' => $value->landslides,
                    'lightning' => $value->lightning,
                    'erratic_Rainfall' => $value->erratic_Rainfall,
                    'Other' => $value->Other,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_agroforest_impact_vulnerability')->insert($store_data);
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
    public function store_agroforestry_dependent_livelihoods(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_agroforest_dependent_livelihoods')->select('id')
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

                    'impacts_name' => $value->impacts_name,
                    'river_Flood' => $value->river_Flood,
                    'flash_Flood' => $value->flash_Flood,
                    'drought' => $value->drought,
                    'heat_Wave' => $value->heat_Wave,
                    'cold_Wave' => $value->cold_Wave,
                    'tornado' => $value->tornado,
                    'landslides' => $value->landslides,
                    'lightning' => $value->lightning,
                    'erratic_Rainfall' => $value->erratic_Rainfall,
                    'Other' => $value->Other,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_agroforest_dependent_livelihoods')->insert($store_data);
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
    public function store_market_and_business(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_market_and_business')->select('id')
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

                    'impacts_name' => $value->impacts_name,
                    'river_Flood' => $value->river_Flood,
                    'flash_Flood' => $value->flash_Flood,
                    'drought' => $value->drought,
                    'heat_Wave' => $value->heat_Wave,
                    'cold_Wave' => $value->cold_Wave,
                    'tornado' => $value->tornado,
                    'landslides' => $value->landslides,
                    'lightning' => $value->lightning,
                    'erratic_Rainfall' => $value->erratic_Rainfall,
                    'Other' => $value->Other,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_market_and_business')->insert($store_data);
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
    public function store_women_impactVulnerabilityMatrix(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_women_impact_vulnerability')->select('id')
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

                    'impacts_name' => $value->impacts_name,
                    'river_Flood' => $value->river_Flood,
                    'flash_Flood' => $value->flash_Flood,
                    'drought' => $value->drought,
                    'heat_Wave' => $value->heat_Wave,
                    'cold_Wave' => $value->cold_Wave,
                    'tornado' => $value->tornado,
                    'landslides' => $value->landslides,
                    'lightning' => $value->lightning,
                    'erratic_Rainfall' => $value->erratic_Rainfall,
                    'Other' => $value->Other,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_women_impact_vulnerability')->insert($store_data);
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
    public function store_lossesAndDamagesDueToDifferentHazards(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_losses_damages_dueto_different_hazard')->select('id')
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

                    'climateHazard' => $value->climateHazard,
                    'occurrenceOnceInYears' => $value->occurrenceOnceInYears,
                    'tenYearsAgo' => $value->tenYearsAgo,
                    'present' => $value->present,
                    'yearOfLastExtremeEvent' => $value->yearOfLastExtremeEvent,

                    'damagesOfCropLandArea' => $value->damagesOfCropLandArea,
                    'no_Of_InfrastructuresDamage' => $value->no_Of_InfrastructuresDamage,
                    'no_Of_LivestockPoultryDead' => $value->no_Of_LivestockPoultryDead,
                    'fisheriesProductionLoss' => $value->fisheriesProductionLoss,
                    'timberProductionLoss' => $value->timberProductionLoss,
                    'fruitsBusinessLoss' => $value->fruitsBusinessLoss,
                    'totalIncomeLoss' => $value->totalIncomeLoss,
                    'otherLosses' => $value->otherLosses,
                    'anyOtherRemarks' => $value->anyOtherRemarks,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_losses_damages_dueto_different_hazard')->insert($store_data);
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
    public function store_ClimateChangeAdaptationforReducingClimateChangeRisks(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_climate_change_adaption')->select('id')
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

                    'climateChangeRisksSector' => $value->climateChangeRisksSector,
                    'adaptationOptions' => $value->adaptationOptions,
                    'howToIncreaseEngagement' => $value->ifYesHowToIncreaseEngagement,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_climate_change_adaption')->insert($store_data);
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
    public function store_implementationChallengesofClimateChangeAdaptation(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_implementation_challengesof_climate_change')->select('id')
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

                    'adaptationCategories' => $value->adaptationCategories,
                    'lessInvestmentCapital' => $value->lessInvestmentCapital,
                    'lessInstitutionalCapacity' => $value->lessInstitutionalCapacity,
                    'lessAwarenessCapacityofCommunity' => $value->lessAwarenessCapacityofCommunity,
                    'lessIncentivesorSubsidiesMechanism' => $value->lessIncentivesorSubsidiesMechanism,
                    'insufficientInfrastructures' => $value->insufficientInfrastructures,
                    'lessEducation' => $value->lessEducation,
                    'lessDemandAgroforestryProduct' => $value->lessDemandAgroforestryProduct,
                    'highPoverty' => $value->highPoverty,
                    'properTrainingAndKnowledge' => $value->properTrainingAndKnowledge,
                    'actionsToOverComebarrier' => $value->actionsToOverComebarrier,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_implementation_challengesof_climate_change')->insert($store_data);
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
    public function store_stakeholderEngagementForAdaptationOptions(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

         // check dupliacte record in database ::
         $found = DB::table('tbl_stakeholder_engagement_for_adaptation')->select('id')
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

                    'adaptationInterventions' => $value->adaptationInterventions,
                    'leadStakeholderforImplementing' => $value->leadStakeholderforImplementing,
                    'levelofStake' => $value->levelofStake,
                    'motivationOfStakeholders' => $value->motivationOfStakeholders,
                    'abilityOfStakeholders' => $value->abilityOfStakeholders,
                    'anyActionNeedToBoostMOTA' => $value->anyActionNeedToBoostMOTA,
                    'coleadStakeholders' => $value->coleadStakeholders,
                    'privateSectorEngagement' => $value->privateSectorEngagement,
                    'potentialFinanceSource' => $value->potentialFinanceSource,

                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );
                
                DB::table('tbl_stakeholder_engagement_for_adaptation')->insert($store_data);
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
