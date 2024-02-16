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

use App\Models\Livelihood;

class LivelihoodController extends Controller
{

    public function store_livelihood_info(Request $request)
    {
        $receiveData = $request['dataToSend'];
        $xmlstr = simplexml_load_string($receiveData);
        // dd($xmlstr->row);
        
        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

        // check dupliacte record in database ::
        $found = DB::table('tbl_livelihood')->select('id')
                ->where('watershed_id', $xmlstr->row->watershed_id)
                ->where('para_id', $xmlstr->row->para_id)
                ->where('community_id', $xmlstr->row->community_id)
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
                    'community_id' => $value->community_id,
                    'community_name' => $value->community_name,
                    'jhum_male' => $value->jhum_male,
                    'jhum_female' => $value->jhum_female,
                    'plain_land_male' => $value->plain_land_male,
                    'plain_land_female' => $value->plain_land_female,
                    'orchard_male' => $value->orchard_male,
                    'orchard_female' => $value->orchard_female,
                    'fuel_wood_male' => $value->fuel_wood_male,
                    'fuel_wood_female' => $value->fuel_wood_female,
                    'wage_labour_male' => $value->wage_labour_male,
                    'wage_labour_female' => $value->wage_labour_female,
                    'poultry_male' => $value->poultry_male,
                    'poultry_female' => $value->poultry_female,
                    'livestock_male' => $value->livestock_male,
                    'livestock_female' => $value->livestock_female,
                    'aquaculture_male' => $value->aquaculture_male,
                    'aquaculture_female' => $value->aquaculture_female,
                    'service_holder_male' => $value->service_male,
                    'service_holder_female' => $value->service_female,
                    'handicraft_male' => $value->handicraft_male,
                    'handicraft_female' => $value->handicraft_female,
                    'others_male' => $value->others_male,
                    'others_female' => $value->others_female,
                    'others_name' => $value->others_name,
                    'created_by' => $value->created_by,
                    'created_at' => $created_at,
                );

                DB::table('tbl_livelihood')->insert($store_data);
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
