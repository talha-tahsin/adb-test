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

use App\Models\Expenditure;

class ExpenditureController extends Controller
{
    
    public function store_expenditure_info(Request $request)
    {
        $xml = $request['xml_data'];
        $xmlstr = simplexml_load_string($xml);

        $timestamp = time();
        $created_at = date("Y-m-d H:i:s", $timestamp);

        try {
                $dupCount = 0;
                $cname = '';
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
                        'expenses_1to6' => $value->v_1to6,
                        'expenses_7to10' => $value->v_7to10,
                        'expenses_11to15' => $value->v_11to15,
                        'expenses_16to20' => $value->v_16to20,
                        'expenses_21to25' => $value->v_21to25,
                        'expenses_26to30' => $value->v_26to30,
                        'expenses_30Up' => $value->v_30Up,
                        // 'male' => $value->v_male,
                        // 'female' => $value->v_female,
                        'created_by' => $value->CreatedBy,
                        'created_at' => $created_at,
                    );

                    // check duplicate record for community
                    $exist_watershed_id = $value->WatershedId;
                    $exist_para_id = $value->ParaId;
                    $exist_community_id = $value->CommunityId;
            
                    $found = DB::table('tbl_expenses')->select('id')
                                    ->where('watershed_id', $exist_watershed_id)
                                    ->where('para_id', $exist_para_id)
                                    ->where('community_id', $exist_community_id)
                                    ->count();
                   
                    $get_community =json_encode($value->CommunityName);
                    $jsonData = json_decode($get_community, TRUE);
                    $tem_cname = $jsonData[0];

                    if($found == 0){
                        // $store = Land::insert($store_data);
                        DB::table('tbl_expenses')->insert($store_data);
                    }
                    else
                    {
                        $dupCount++;

                        if($cname == ''){
                            $cname = $tem_cname;
                        }
                        else{
                            $cname = $cname.', '.$tem_cname;
                        }
                        $found = 0;
                    }
                    
                    
                }

                DB::commit();

                if($dupCount > 0){ 
                    return response()->json([ 'status' => 'SUCCESS', 'message' => '['.$cname.'] community already exsits for same selected watershed and para...' ]);
                }
                else{ 
                    return response()->json([ 'status' => 'SUCCESS', 'message' => 'Data save successfully without duplicate...' ]);
                }
            }
            catch (\Exception $e) 
            {
                DB::rollBack();
                $message = "Opps!! Something is wrong, data not saved and rollback..";
                return response()->json([ 'status' => 'ERROR', 'message' => $message ]);
            }

                
            
    }

    public function store_expenditure_major_area(Request $request)
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
            $found = DB::table('tbl_expenditure_major_area')->select('id')
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
                    'food' => $request['food'],           
                    'medication' => $request['medication'],          
                    'education' => $request['education'],          
                    'savings' => $request['savings'],          
                    'investment' => $request['investment'],          
                    'clothing' => $request['clothing'],          
                    'debt' => $request['debt'],          
                    'housing' => $request['housing'],          
                    'disaster' => $request['disaster'],          
                    'created_by' => $request['created_by'],
                    'created_at' => $created_at,
                );

                DB::table('tbl_expenditure_major_area')->insert($store_data);
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

}
