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

use App\Models\Land;

class LandController extends Controller
{
    
    public function store_land_info(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);

        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

        // check dupliacte record in database ::
        $found = DB::table('tbl_land')->select('id')
                    ->where('watershed_id', $xmlstr->row->WatershedId)
                    ->where('para_id', $xmlstr->row->ParaId)
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
                    'watershed_id' => $value->WatershedId,
                    'watershed_name' => $value->watershed_name,
                    'para_id' => $value->ParaId,
                    'para_name' => $value->para_name,
                    'community_id' => $value->community_id,
                    'community_name' => $value->community_name,
                    'landless' => $value->Landless,
                    'self_owned' => $value->Self_owned,
                    'community_land' => $value->Community_Land,
                    'lease' => $value->Lease,
                    'sharecropping' => $value->Sharecropping,
                    'occupation_land' => $value->Occupation_Land,
                    'grove_land' => $value->Grove_Land,
                    'valley' => $value->Valley,
                    'plain_land' => $value->Plain_Land,
                    'hilly' => $value->Hilly,
                    'fringe' => $value->Fringe,
                    'mixed' => $value->Mixed,
                    'profit_value' => $value->Profit,
                    'profit_name' => $value->ProfitName,
                    'created_by' => $value->CreatedBy,
                    'created_at' => $created_at,
                );
            
                // $store = Land::insert($store_data);
                DB::table('tbl_land')->insert($store_data);
                DB::commit();
                
            }

            return response()->json([ 'status' => 'SUCCESS', 'message' => 'Data save successfully...' ]);
  
        // }
        // catch (\Exception $e) 
        // {
        //     DB::rollBack();
        //     $message = "Opps!! Something is wrong, data not saved and rollback..";
        //     return response()->json([ 'status' => 'ERROR', 'message' => $message ]);
        // }       
            
    }



}
