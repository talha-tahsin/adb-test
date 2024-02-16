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

use App\Models\Income;

class IncomeController extends Controller
{
    
    public function store_income_info(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);

        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

        // check dupliacte record in database ::
        $found = DB::table('tbl_income')->select('id')
                    ->where('watershed_id', $xmlstr->row->WatershedId)
                    ->where('para_id', $xmlstr->row->ParaId)
                    ->count();

        if($found > 0){
            $message = 'Data already exsits for this watershed and para, not possible to store...';
            return response()->json([ 'status' => 'ERROR', 'message' => $message ]);
        }

        try {
                DB::beginTransaction();

                foreach ($xmlstr->row as $value) 
                { 
                    // dd($checkCommunityId);

                    $store_data = array(
                        'watershed_id' => $value->WatershedId,
                        'watershed_name' => $value->watershed_name,
                        'para_id' => $value->ParaId,
                        'para_name' => $value->para_name,
                        'community_id' => $value->CommunityId,
                        'community_name' => $value->CommunityName,
                        'avg_per_house' => $value->avgPerHouse,
                        'income_1to6' => $value->v_1to6,
                        'income_7to10' => $value->v_7to10,
                        'income_11to15' => $value->v_11to15,
                        'income_16to20' => $value->v_16to20,
                        'income_21to25' => $value->v_21to25,
                        'income_26to30' => $value->v_26to30,
                        'income_30Up' => $value->v_30Up,
                        'male' => $value->v_male,
                        'female' => $value->v_female,
                        'created_by' => $value->CreatedBy,
                        'created_at' => $created_at,
                    );

                    // $store = Land::insert($store_data);
                    DB::table('tbl_income')->insert($store_data);
                    DB::commit();                   
                    
                }

                return response()->json([ 'status' => 'SUCCESS', 'message' => 'Data save successfully...' ]);
              
            }
            catch (\Exception $e) 
            {
                DB::rollBack();
                $message = "Opps!! Something is wrong, data not saved and rollback..";
                return response()->json([ 'status' => 'ERROR', 'message' => $message ]);
            }

                
            
    }
    
}
