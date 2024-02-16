<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserRoleController;

/** :: Societal Controller :: */
use App\Http\Controllers\Societal\SocietalViewController;
use App\Http\Controllers\Societal\PopulationController;
use App\Http\Controllers\Societal\HouseholdController;
use App\Http\Controllers\Societal\LandController;
use App\Http\Controllers\Societal\OccupationController;
use App\Http\Controllers\Societal\LivelihoodController;
use App\Http\Controllers\Societal\IncomeController;
use App\Http\Controllers\Societal\ExpenditureController;
use App\Http\Controllers\Societal\EconomicController;
use App\Http\Controllers\Societal\LivelihoodTrainingController;
use App\Http\Controllers\Societal\EducationController;
use App\Http\Controllers\Societal\HealthController;
use App\Http\Controllers\Societal\WaterController;
use App\Http\Controllers\Societal\SanitationController;
use App\Http\Controllers\Societal\AccessibilityController;

/** :: Water Resources Controller :: */
use App\Http\Controllers\WaterResources\WaterResourceController;
/** :: Livestock Controller :: */
use App\Http\Controllers\Livestock\LivestockController;

/** :: Para Boundary Controller :: */
use App\Http\Controllers\ParaBoundaryController;
/** :: VCF Boundary Controller :: */
use App\Http\Controllers\VCFBoundaryController;
/** :: LULC Validation Controller :: */
use App\Http\Controllers\LulcValidationController;
/** :: Land Degradation Controller :: */
use App\Http\Controllers\LandDegradationController;
use App\Http\Controllers\LandscapeRestorationController;
use App\Http\Controllers\WaterQualityController;
use App\Http\Controllers\SoilTestController;

use App\Http\Controllers\AgricultureController;
use App\Http\Controllers\FisheriesController;
use App\Http\Controllers\ParaEcosystemController;
use App\Http\Controllers\ForestController;
use App\Http\Controllers\ClimateChangeController;

use App\Http\Controllers\BusinessModelController;

use App\Http\Controllers\KiiChecklist\ProducerController;
use App\Http\Controllers\KiiChecklist\MobileFinancialController;
use App\Http\Controllers\KiiChecklist\BepariController;
use App\Http\Controllers\KiiChecklist\AaratdarController;
use App\Http\Controllers\KiiChecklist\InputSupplierController;
use App\Http\Controllers\KiiChecklist\ProcessingAgentController;
use App\Http\Controllers\KiiChecklist\TransportAgentController;
use App\Http\Controllers\KiiChecklist\CustomerShopController;
use App\Http\Controllers\KiiChecklist\OwnerShopController;


use App\Http\Controllers\ApiController;
use App\Http\Controllers\UtilsController;

// ========== * ========= * ========= * ======== * ========= * ========== * ========== * ==========

Route::get('/', [HomeController::class, 'view_dashboard'])->name('dashboard');
Route::get('/dashboard', [HomeController::class, 'view_dashboard'])->name('dashboard');

Route::get('/login', [HomeController::class, 'view_login'])->name('login');
Route::post('/get_login', [AuthController::class, 'get_login'])->name('get.login');

Route::get('/register', [HomeController::class, 'view_register'])->name('register');
Route::post('/get_register', [AuthController::class, 'store'])->name('get.register');

Route::post('/logout', [AuthController::class, 'get_logout'])->name('logout');

/** Start :: Api Route */
Route::post('/api-check', [ApiController::class, 'check_api'])->name('check');

/** Start :: Admin Route */
Route::group(['prefix' => '/',  'middleware' => 'admin_auth'], function(){
    Route::get('user_panel', [HomeController::class, 'view_userPanel'])->name('userPanel');
    Route::get('user_role', [UserRoleController::class, 'get_userRole'])->name('user_role');
    Route::post('updt_role', [UserRoleController::class, 'updt_userRole'])->name('updt_role');
    Route::post('delte_role', [UserRoleController::class, 'delte_userRole'])->name('delte_role');
}); 

Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('watershed-dashboard', [HomeController::class, 'watershed_view'])->name('Watershed.View');
    Route::get('data-entry-dashboard', [HomeController::class, 'data_entry_dashboard'])->name('Data.Entry.Dashboard');
    Route::get('value-chain-dashboard', [HomeController::class, 'value_chain_dashboard'])->name('Value.Chain.Dashboard');

    Route::get('get_active_watershed', [UtilsController::class, 'get_active_watershed'])->name('Get.Active.Watershed');
    Route::get('logout_current_watershed', [HomeController::class, 'logout_current_watershed'])->name('Logout.Watershed');
    
    // POST Route
    Route::post('store_watershed_info_for_entry', [HomeController::class, 'store_watershed_info_for_entry']);
});

/** Start :: Para Boundary Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('basic-info-of-para-boundary', [ParaBoundaryController::class, 'show_basic_info'])->name('Para.Boundary.Basic.Info');
    Route::get('view_para_list', [ParaBoundaryController::class, 'show_para_list'])->name('Show.Para.List');
    Route::get('gps-point-of-para-boundary', [ParaBoundaryController::class, 'show_gps_point'])->name('Para.Boundary.GPS.Point');

    // GET Method Route
    Route::get('get_all_para_list_paraBasic', [ParaBoundaryController::class, 'get_all_para_list']);
    Route::get('get_para_details_for_edit', [ParaBoundaryController::class, 'get_para_details_for_edit']);
    Route::get('get_district_name', [UtilsController::class, 'get_district_name']);
    Route::get('get_upazila_list', [UtilsController::class, 'get_upazila_list']);
    Route::get('get_union_list', [UtilsController::class, 'get_union_list']);
   
    // POST Method Route
    Route::post('store_basic_info_para_boundary', [ParaBoundaryController::class, 'store_basic_info_para_boundary']);
    Route::post('store_gps_point_para', [ParaBoundaryController::class, 'store_gps_point_para']);
    Route::post('store_para_name_for_entry', [ParaBoundaryController::class, 'store_para_name_for_entry']);
    Route::post('updt_para_basic_info', [ParaBoundaryController::class, 'updt_para_basic_info']);
   
});

/** Start :: VCF Boundary Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('basic-info-of-vcf-boundary', [VCFBoundaryController::class, 'show_basic_info'])->name('VCF.Boundary.Basic.Info');
    Route::get('gps-point-of-vcf-boundary', [VCFBoundaryController::class, 'show_gps_point'])->name('VCF.Boundary.GPS.Point');
    Route::get('dominant-plant-vcf-boundary', [VCFBoundaryController::class, 'show_dominant_plant'])->name('VCF.Boundary.Dominant.Plant');

    // GET Method Route 
    Route::get('get_all_vcf_list', [VCFBoundaryController::class, 'get_all_vcf_list']);
    Route::get('get_all_para_name', [VCFBoundaryController::class, 'get_all_para_name']);
    Route::get('get_active_watershed_vcf', [VCFBoundaryController::class, 'get_active_watershed_vcf']);

    // POST Method Route
    Route::post('store_basic_info_vcf_boundary', [VCFBoundaryController::class, 'store_basic_info_vcf_boundary']);
    Route::post('store_gps_point_vcf', [VCFBoundaryController::class, 'store_gps_point_vcf']);
    Route::post('store_plot1_dominant_plants', [VCFBoundaryController::class, 'store_plot1_dominant_plants']);
    Route::post('store_plot2_dominant_plants', [VCFBoundaryController::class, 'store_plot2_dominant_plants']);
    Route::post('store_plot3_dominant_plants', [VCFBoundaryController::class, 'store_plot3_dominant_plants']);
    Route::post('store_vcf_for_random_entry', [VCFBoundaryController::class, 'store_vcf_for_random_entry']);
 
});

/** Start :: watershed health survey Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('water-sample-info', [WaterQualityController::class, 'watershed_sample_info'])->name('Watershed.Sample.Info');
    Route::get('water-quality-entry', [WaterQualityController::class, 'water_quality_entry'])->name('Water.Quality.Entry');

    Route::get('soil-test-basic-info', [SoilTestController::class, 'soil_test_basic_info'])->name('Soil.Test.Basic.Info');
    Route::get('entry-soil-test', [SoilTestController::class, 'soil_sample_lab_test'])->name('Soil.Sample.Lab.Test');
    
    // GET Method 
    Route::get('get_all_water_sample_list', [WaterQualityController::class, 'get_all_water_sample_list']);
    Route::get('get_active_water_sampleid', [WaterQualityController::class, 'get_active_water_sampleid']);
    Route::get('get_all_soil_test_list', [SoilTestController::class, 'get_all_soil_test_list']);
    Route::get('get_active_soil_sample', [SoilTestController::class, 'get_active_soil_sample']);

    // POST Method
    Route::post('store_sample_id_random_entry', [WaterQualityController::class, 'store_sample_id_random_entry']);
    Route::post('store_water_quality_basic', [WaterQualityController::class, 'store_water_quality_basic']);
    Route::post('store_water_quality_entry1', [WaterQualityController::class, 'store_water_quality_entry1']);
    Route::post('store_water_test_report', [WaterQualityController::class, 'store_water_test_report']);

    Route::post('store_soil_sample_id_random_entry', [SoilTestController::class, 'store_soil_sample_id_random_entry']);
    Route::post('store_soil_test_basic_info', [SoilTestController::class, 'store_soil_test_basic_info']);
    Route::post('store_soil_test_entry', [SoilTestController::class, 'store_soil_test_entry']);
    Route::post('store_soil_test_result', [SoilTestController::class, 'store_soil_test_result']);
    Route::post('store_soil_texture_class', [SoilTestController::class, 'store_soil_texture_class']);
});

/** Start :: Map Unit Wise Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('show-landscape-basic-info', [LandDegradationController::class, 'basic_info_landscape_degradation'])->name('Landscape.Basic');
    Route::get('show-lulc-validation-survey', [LulcValidationController::class, 'lulc_validation_survey'])->name('LULC.Validation');

    Route::get('show-land-degradation', [LandDegradationController::class, 'show_land_degradation'])->name('Land.Degradation');
    Route::get('show-map-unit-list', [LandDegradationController::class, 'show_map_unit_list'])->name('Map.Unit.List');

    Route::get('entry-landscape-restoration', [LandscapeRestorationController::class, 'entry_landscape_restoration'])->name('Landscape.Restoration');

    // GET Method Route 
    Route::get('getindicator1List', [LandDegradationController::class, 'getindicator1List']);
    Route::get('getindicator2List', [LandDegradationController::class, 'getindicator2List']);
    Route::get('getindicator3List', [LandDegradationController::class, 'getindicator3List']);
    Route::get('get_map_unit_list', [LandDegradationController::class, 'get_map_unit_list']);
    Route::get('get_active_map_unit', [LandDegradationController::class, 'get_active_map_unit']);


    // POST Method Route
    Route::post('store_first_ground_truth', [LulcValidationController::class, 'store_first_ground_truth']);
    Route::post('store_second_ground_truth', [LulcValidationController::class, 'store_second_ground_truth']);
    Route::post('store_degradation_info', [LandDegradationController::class, 'store_degradation_info']);
    Route::post('store_existing_conversation', [LandDegradationController::class, 'store_existing_conversation']);
    Route::post('store_future_conversation', [LandDegradationController::class, 'store_future_conversation']);
    Route::post('store_map_unit_random_entry', [LandDegradationController::class, 'store_map_unit_random_entry']);

    Route::post('agriculture_land_conservation_R3', [LandscapeRestorationController::class, 'agriculture_land_conservation_R3']);
    Route::post('forest_land_conservation_R3', [LandscapeRestorationController::class, 'forest_land_conservation_R3']);
    Route::post('degraded_soil_land_improvement_R3', [LandscapeRestorationController::class, 'degraded_soil_land_improvement_R3']);
    Route::post('stream_bank_protection_R3', [LandscapeRestorationController::class, 'stream_bank_protection_R3']);
    Route::post('water_resources_development_R3', [LandscapeRestorationController::class, 'water_resources_development_R3']);
    Route::post('capacity_development_demonstration_R3', [LandscapeRestorationController::class, 'capacity_development_demonstration_R3']);

    Route::post('agriculture_land_conservation_R4', [LandscapeRestorationController::class, 'agriculture_land_conservation_R4']);
    Route::post('forestOrShrubLandConservation_R4', [LandscapeRestorationController::class, 'forestOrShrubLandConservation_R4']);
    Route::post('degradedSoilLandImprovement_R4', [LandscapeRestorationController::class, 'degradedSoilLandImprovement_R4']);
    Route::post('streamBankProtection_R4', [LandscapeRestorationController::class, 'streamBankProtection_R4']);
    Route::post('waterResourcesDevelopment_R4', [LandscapeRestorationController::class, 'waterResourcesDevelopment_R4']);
    Route::post('capacityDevelopmentDemonstration_R4', [LandscapeRestorationController::class, 'capacityDevelopmentDemonstration_R4']);

});

/** Start :: Population View Page */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('population', [SocietalViewController::class, 'population_entry'])->name('Population.Entry');
    Route::get('view_population', [SocietalViewController::class, 'view_population'])->name('View.Population');
   
    // GET Method Route 
    Route::get('/get_population_list', [PopulationController::class, 'get_population_list']);
    Route::get('/get_population_details', [PopulationController::class, 'get_population_details']);

    // POST Method Route 
    Route::post('/insert_populatioin_entry', [PopulationController::class, 'insert_community_population']);
    Route::post('/update_population_details', [PopulationController::class, 'update_population_details']);
    Route::post('/delete_population', [PopulationController::class, 'delete_population']);
});

/** Start :: Household View Page Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('entry-household', [SocietalViewController::class, 'view_household_entry'])->name('View.Entry.Household');
    Route::get('view_household', [SocietalViewController::class, 'get_household_view'])->name('View.Household.Info');
 
    // GET Method Route 
    Route::get('/get_household_info_list', [HouseholdController::class, 'get_household_info_list']);
    Route::get('/get_household_info_edit', [HouseholdController::class, 'get_household_info_edit']);

    // POST Method Route
    Route::post('/entry_household_info', [HouseholdController::class, 'store_household_info']);
    Route::post('/update_household_info', [HouseholdController::class, 'update_household_info']);
    Route::post('/delete_household_info', [HouseholdController::class, 'delete_household_info']);
});

/** Start :: Land View Page Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('land', [SocietalViewController::class, 'view_land_entry'])->name('View.Land.Entry');
    Route::get('view_land_info', [SocietalViewController::class, 'view_land_info'])->name('View.Land.Info');
    // GET Method Route 
    Route::get('/get_land_info_list', [LandController::class, 'get_land_info_list']);
    Route::get('/get_land_info_edit', [LandController::class, 'get_land_info_edit']);
    // POST Method Route
    Route::post('/store_land_info', [LandController::class, 'store_land_info']);
    Route::post('/update_land_info', [LandController::class, 'update_land_info']);
    Route::post('/delete_land_info', [LandController::class, 'delete_land_info']);

});

/** Start :: Occupation View Page Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('occupation', [SocietalViewController::class, 'view_occupation_entry'])->name('View.Occupation.Entry');
    //Route::get('view_occupation_info', [SocietalViewController::class, 'view_occupation_info'])->name('View.Occupation.Info');
    
    // GET Method Route 
    Route::get('/get_occupation_info_list', [OccupationController::class, 'get_occupation_info_list']);
    Route::get('/get_occupation_info_edit', [OccupationController::class, 'get_occupation_info_edit']);

    // POST Method Route
    Route::post('/store_occupation_info', [OccupationController::class, 'store_occupation_info']);
    Route::post('/update_occupation_info', [OccupationController::class, 'update_occupation_info']);
    Route::post('/delete_occupation_info', [OccupationController::class, 'delete_occupation_info']);
});

/** Start :: Livelihood View Page Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('livelihood', [SocietalViewController::class, 'view_livelihood_entry'])->name('View.Livelihood.Entry');
    //Route::get('view_occupation_info', [SocietalViewController::class, 'view_occupation_info'])->name('View.Occupation.Info');
    
    // GET Method Route
    Route::get('/check_livelihood_duplicate', [LivelihoodController::class, 'check_duplicate_record']); 
    Route::get('/get_livelihood_info_list', [LivelihoodController::class, 'get_livelihood_info_list']);
    Route::get('/get_livelihood_info_edit', [LivelihoodController::class, 'get_livelihood_info_edit']);

    // POST Method Route
    Route::post('/store_livelihood_info', [LivelihoodController::class, 'store_livelihood_info']);
    Route::post('/update_livelihood_info', [LivelihoodController::class, 'update_livelihood_info']);
    Route::post('/delete_livelihood_info', [LivelihoodController::class, 'delete_livelihood_info']);

});

/** Start :: Income View Page Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('income', [SocietalViewController::class, 'view_income_entry'])->name('View.Income.Entry');
    
    // GET Method Route 
    Route::get('/get_income_info_list', [IncomeController::class, 'get_income_info_list']);
    Route::get('/get_income_info_edit', [IncomeController::class, 'get_income_info_edit']);

    // POST Method Route
    Route::post('/store_income_info', [IncomeController::class, 'store_income_info']);
    Route::post('/update_income_info', [IncomeController::class, 'update_income_info']);
    Route::post('/delete_income_info', [IncomeController::class, 'delete_income_info']);

});

/** Start :: Expenditure View Page Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('expenditure', [SocietalViewController::class, 'view_expenditure_entry'])->name('View.Expenditure.Entry');
    //Route::get('view_occupation_info', [SocietalViewController::class, 'view_occupation_info'])->name('View.Occupation.Info');
    
    // GET Method Route 
    Route::get('get_expenditure_info_list', [ExpenditureController::class, 'get_expenditure_info_list']);
    Route::get('get_expenditure_info_edit', [ExpenditureController::class, 'get_expenditure_info_edit']);

    // POST Method Route
    Route::post('store_expenditure_info', [ExpenditureController::class, 'store_expenditure_info']);
    Route::post('store_expenditure_major_area', [ExpenditureController::class, 'store_expenditure_major_area']);
});

/** Start :: Economic Status View Page Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('economic', [SocietalViewController::class, 'view_economic_entry'])->name('View.Economic.Entry');
    //Route::get('view_economic_info', [SocietalViewController::class, 'view_economic_info'])->name('View.Economic.Info');
    
    // GET Method Route 
    Route::get('/get_economic_info_list', [EconomicController::class, 'get_economic_info_list']);
    Route::get('/get_economic_info_edit', [EconomicController::class, 'get_economic_info_edit']);

    // POST Method Route
    Route::post('/store_economic_info', [EconomicController::class, 'store_economic_info']);
    Route::post('/update_economic_info', [EconomicController::class, 'update_economic_info']);
    Route::post('/delete_economic_info', [EconomicController::class, 'delete_economic_info']);

});

/** Start :: Livelihoods Generation Training  Page Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('livelihood-generation-trainig', [LivelihoodTrainingController::class, 'show_livelihoods_generation_training'])->name('Livelihood.Training');
    //Route::get('view_economic_info', [LivelihoodTrainingController::class, 'view_economic_info'])->name('View.Economic.Info');
    
    // GET Method Route 
    Route::get('/get_training_list', [LivelihoodTrainingController::class, 'get_training_list']);

    // POST Method Route
    Route::post('/store_livelihood_training_info', [LivelihoodTrainingController::class, 'store_livelihood_training_info']);
    Route::post('/store_altr_income_training', [LivelihoodTrainingController::class, 'store_altr_income_training']);
    Route::post('/update_livelihood_generation_other_option', [LivelihoodTrainingController::class, 'update_livelihood_generation_other_option']);
});

/** Start :: Education View Page Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('education_entry', [SocietalViewController::class, 'view_education_part1_entry'])->name('View.EducationPart1.Entry');
    Route::get('education_part2_entry', [SocietalViewController::class, 'view_education_part2_entry'])->name('View.EducationPart2.Entry');
    //Route::get('view_education_info', [SocietalViewController::class, 'view_education_info'])->name('View.education.Info');
    // GET Method Route 
    Route::get('/get_education_info_list', [EducationController::class, 'get_education_info_list']);
    Route::get('/get_education_info_edit', [EducationController::class, 'get_education_info_edit']);

    // POST Method Route
    Route::post('/store_literacy_rate_level', [EducationController::class, 'store_literacy_rate_level']);
    Route::post('/update_education_info', [EducationController::class, 'update_education_info']);
    Route::post('/delete_education_info', [EducationController::class, 'delete_education_info']);

    Route::post('/store_availability_education_institution', [EducationController::class, 'store_availability_education_institution']);
});

/** Start :: Health View Page Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('societal-health', [SocietalViewController::class, 'view_health_entry'])->name('View.Health.Entry');
    //Route::get('view_education_info', [SocietalViewController::class, 'view_education_info'])->name('View.education.Info');
    // GET Method Route 
    Route::get('/get_health_info_list', [HealthController::class, 'get_health_info_list']);
    Route::get('/get_health_info_edit', [HealthController::class, 'get_health_info_edit']);

    // POST Method Route
    Route::post('/store_tendency_health_services', [HealthController::class, 'store_tendency_health_services']);
    Route::post('/store_health_additional_info', [HealthController::class, 'store_health_additional_info']);
    Route::post('/store_electricity_info', [HealthController::class, 'store_electricity_info']);
    Route::post('/store_diseases_ranking_frequency', [HealthController::class, 'store_diseases_ranking_frequency']);
   
});

/** Start :: Water Supply View Page Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('water_entry', [SocietalViewController::class, 'view_water_entry'])->name('View.Water.Entry');
    
    // GET Method Route 
    Route::get('get_water_info_list', [WaterController::class, 'get_water_info_list']);
    Route::get('get_water_info_edit', [WaterController::class, 'get_water_info_edit']);

    // POST Method Route
    Route::post('store_major_drinking_water', [WaterController::class, 'store_major_drinking_water']);
    Route::post('store_water_availability_quality', [WaterController::class, 'store_water_availability_quality']);
    Route::post('store_water_supply_questionnaire', [WaterController::class, 'store_water_supply_questionnaire']);
});

/** Start :: Sanitation Page Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('societal-sanitation', [SocietalViewController::class, 'view_sanitation_entry'])->name('View.Sanitation.Entry');
    //Route::get('view_education_info', [SocietalViewController::class, 'view_education_info'])->name('View.education.Info');
    // GET Method Route 
    Route::get('/get_sanitation_duplicate', [SanitationController::class, 'check_duplicate_record']);
    Route::get('/get_sanitation_info_list', [SanitationController::class, 'get_sanitation_info_list']);
    Route::get('/get_sanitation_info_edit', [SanitationController::class, 'get_sanitation_info_edit']);

    // POST Method Route
    Route::post('/store_sanitation1_info', [SanitationController::class, 'store_sanitation1_info']);
    Route::post('/store_sanitation2_info', [SanitationController::class, 'store_sanitation2_info']);
});

/** Start :: Transport and Communication Page Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('accessibility', [SocietalViewController::class, 'view_accessibility_entry'])->name('View.Accessibility.Entry');
    //Route::get('view_education_info', [SocietalViewController::class, 'view_education_info'])->name('View.education.Info');
    
    // GET Method Route 
    Route::get('/get_accessibility_duplicate', [AccessibilityController::class, 'check_duplicate_record']);
    Route::get('/get_accessibility_info_list', [AccessibilityController::class, 'get_accessibility_info_list']);
    Route::get('/get_accessibility_info_edit', [AccessibilityController::class, 'get_accessibility_info_edit']);

    // POST Method Route
    Route::post('/store_transportation_facilities', [AccessibilityController::class, 'store_transportation_facilities']);
    Route::post('/store_road_distance_from_para', [AccessibilityController::class, 'store_road_distance_from_para']);
    Route::post('/store_available_transportation_facilities', [AccessibilityController::class, 'store_available_transportation_facilities']);
    Route::post('/store_telecommunication_media_facilities', [AccessibilityController::class, 'store_telecommunication_media_facilities']);
    Route::post('/store_transporting_agro_forestry', [AccessibilityController::class, 'store_transporting_agro_forestry']);
});

/** Start :: Water Resources View Page Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('water-resource-entry', [WaterResourceController::class, 'water_resource_entry'])->name('Water.Resources.Entry');
    
    // GET Method Route 
    Route::get('/get_accessibility_info_list', [WaterResourceController::class, 'get_accessibility_info_list']);
    Route::get('/get_accessibility_info_edit', [WaterResourceController::class, 'get_accessibility_info_edit']);

    // POST Method Route
    Route::post('/store_waterbodies_basic_info', [WaterResourceController::class, 'store_waterbodies_basic_info']);
    Route::post('/store_current_practice_conservation', [WaterResourceController::class, 'store_current_practice_conservation']);
    Route::post('/store_recommended_conservation', [WaterResourceController::class, 'store_recommended_conservation']);
    Route::post('/store_improve_water_availability', [WaterResourceController::class, 'store_improve_water_availability']);
    Route::post('/add_other_practiceOfConservationMeasures', [WaterResourceController::class, 'add_other_practiceOfConservationMeasures']);
    Route::post('/add_other_recommendedConservationMeasures', [WaterResourceController::class, 'add_other_recommendedConservationMeasures']);
});

/** Start :: Agriculture Page Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('agriculture', [AgricultureController::class, 'entry_agriculture'])->name('Entry.Agriculture');

    // GET Method Route 
    // Route::get('get_livestock_list', [AgricultureController::class, 'get_livestock_list']);

    // POST Method Route
    Route::post('store_farming_typeOf_community', [AgricultureController::class, 'store_farming_typeOf_community']);
    Route::post('store_existing_cropping_pattern', [AgricultureController::class, 'store_existing_cropping_pattern']);
    Route::post('store_major_crop_in_area', [AgricultureController::class, 'store_major_crop_in_area']);
    Route::post('store_JhumOrShifting_cultivation_process', [AgricultureController::class, 'store_JhumOrShifting_cultivation_process']);
    Route::post('store_sloping_land_farming_practices', [AgricultureController::class, 'store_sloping_land_farming_practices']);
    Route::post('store_jhum_farm_size', [AgricultureController::class, 'store_jhum_farm_size']);
    Route::post('store_TrendOf_jhum_cycle_period', [AgricultureController::class, 'store_TrendOf_jhum_cycle_period']);
    Route::post('store_merits_demeritsOf_cultivation', [AgricultureController::class, 'store_merits_demeritsOf_cultivation']);
    Route::post('store_detrimental_crops_hilly', [AgricultureController::class, 'store_detrimental_crops_hilly']);
    Route::post('store_damage_existing_coping_mechanism', [AgricultureController::class, 'store_damage_existing_coping_mechanism']);
    Route::post('store_surface_water_and_area_coverage', [AgricultureController::class, 'store_surface_water_and_area_coverage']);
    Route::post('store_ground_water_and_area_coverage', [AgricultureController::class, 'store_ground_water_and_area_coverage']);
    Route::post('store_irrigation_crisis_period', [AgricultureController::class, 'store_irrigation_crisis_period']);
    Route::post('store_farm_mechanization_status', [AgricultureController::class, 'store_farm_mechanization_status']);
    Route::post('store_agroforestry_farming_system', [AgricultureController::class, 'store_agroforestry_farming_system']);
});

/** Start :: Livestock View Page Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('livestock', [LivestockController::class, 'livestock_entry'])->name('View.livestock.Entry');

    // GET Method Route 
    Route::get('get_livestock_list', [LivestockController::class, 'get_livestock_list']);
    Route::get('get_livestock_edit', [LivestockController::class, 'get_livestock_edit']);

    // POST Method Route
    Route::post('store_type_population_livestock', [LivestockController::class, 'store_type_population_livestock']);
    Route::post('store_pest_diseases_livestock', [LivestockController::class, 'store_pest_diseases_livestock']);
    Route::post('store_damage_of_livestock', [LivestockController::class, 'store_damage_of_livestock']);
    Route::post('store_overall_mortality_livestock', [LivestockController::class, 'store_overall_mortality_livestock']);
    Route::post('store_livestock_rearing_methods', [LivestockController::class, 'store_livestock_rearing_methods']);
    Route::post('store_livestock_cost_production', [LivestockController::class, 'store_livestock_cost_production']);
    Route::post('store_livestock_recommendation', [LivestockController::class, 'store_livestock_recommendation']);
});

/** Start :: Fisheries and Aquaculture Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('fisheries', [FisheriesController::class, 'fisheries_entry'])->name('Entry.Fisheries');

    // GET Method Route 
    // Route::get('get_livestock_list', [FisheriesController::class, 'get_livestock_list']);

    // POST Method Route
    Route::post('store_capture_fisheries', [FisheriesController::class, 'store_capture_fisheries']);
    Route::post('store_biodiversity_composition', [FisheriesController::class, 'store_biodiversity_composition']);
    Route::post('store_threatened_fish_species', [FisheriesController::class, 'store_threatened_fish_species']);
    Route::post('store_fishing_method_appliance', [FisheriesController::class, 'store_fishing_method_appliance']);
    Route::post('store_fish_diseases', [FisheriesController::class, 'store_fish_diseases']);
    Route::post('store_fisheries_management', [FisheriesController::class, 'store_fisheries_management']);
    Route::post('store_aquaculture', [FisheriesController::class, 'store_aquaculture']);
});

/** Start :: Para Eco-System  Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('para-ecosystem', [ParaEcosystemController::class, 'show_para_ecosystem'])->name('Para.EcoSystem');

    // GET Method Route 
    // Route::get('get_livestock_list', [ParaEcosystemController::class, 'get_livestock_list']);

    // POST Method Route
    Route::post('store_terrestrial_ecosystem', [ParaEcosystemController::class, 'store_terrestrial_ecosystem']);
    Route::post('store_abundance_production_economics', [ParaEcosystemController::class, 'store_abundance_production_economics']);
    Route::post('store_abundance_wildlife', [ParaEcosystemController::class, 'store_abundance_wildlife']);
    Route::post('store_statusOf_aquatic_habitats', [ParaEcosystemController::class, 'store_statusOf_aquatic_habitats']);
    Route::post('store_abundanceOf_aquatic_vegetation', [ParaEcosystemController::class, 'store_abundanceOf_aquatic_vegetation']);
    Route::post('store_abundanceOf_aquatic_fauna', [ParaEcosystemController::class, 'store_abundanceOf_aquatic_fauna']);
});

/** Start :: Forest  Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('forest', [ForestController::class, 'entry_village_common_forest'])->name('Village.Common.Forest');

    // GET Method Route 
    // Route::get('get_livestock_list', [ForestController::class, 'get_livestock_list']);

    // POST Method Route
    Route::post('store_beneficiaryOf_vcf_for_para', [ForestController::class, 'store_beneficiaryOf_vcf_for_para']);
    Route::post('store_native_species_dominant_plant_and_status', [ForestController::class, 'store_native_species_dominant_plant_and_status']);
    Route::post('store_ExoticOralien_species_dominant_plant_and_status', [ForestController::class, 'store_ExoticOralien_species_dominant_plant_and_status']);
    Route::post('store_medicinal_trees_species_dominant_plant_and_status', [ForestController::class, 'store_medicinal_trees_species_dominant_plant_and_status']);
    Route::post('store_fruit_trees_species_dominant_plant_and_status', [ForestController::class, 'store_fruit_trees_species_dominant_plant_and_status']);

    Route::post('store_statusOf_wildlife_inVcf', [ForestController::class, 'store_statusOf_wildlife_inVcf']);
    Route::post('store_overall_statusOf_different_components', [ForestController::class, 'store_overall_statusOf_different_components']);
    Route::post('store_fisheries_question_info', [ForestController::class, 'store_fisheries_question_info']);
    Route::post('store_forest_management_practice', [ForestController::class, 'store_forest_management_practice']);
});

/** Start :: Climate Change Risk  Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('climate-change', [ClimateChangeController::class, 'entry_climate_change_risk'])->name('Entry.Climate.Change');

    // GET Method Route 
    // Route::get('get_livestock_list', [ClimateChangeController::class, 'get_livestock_list']);

    // POST Method Route
    Route::post('store_climate_change_questionnaire', [ClimateChangeController::class, 'store_climate_change_questionnaire']);
    Route::post('store_hazard_calendar', [ClimateChangeController::class, 'store_hazard_calendar']);
    Route::post('store_agroforestry_impactVulnerabilityMatrix', [ClimateChangeController::class, 'store_agroforestry_impactVulnerabilityMatrix']);
    Route::post('store_agroforestry_dependent_livelihoods', [ClimateChangeController::class, 'store_agroforestry_dependent_livelihoods']);
    Route::post('store_market_and_business', [ClimateChangeController::class, 'store_market_and_business']);
    Route::post('store_women_impactVulnerabilityMatrix', [ClimateChangeController::class, 'store_women_impactVulnerabilityMatrix']);

    Route::post('store_lossesAndDamagesDueToDifferentHazards', [ClimateChangeController::class, 'store_lossesAndDamagesDueToDifferentHazards']);
    Route::post('store_ClimateChangeAdaptationforReducingClimateChangeRisks', [ClimateChangeController::class, 'store_ClimateChangeAdaptationforReducingClimateChangeRisks']);
    Route::post('store_implementationChallengesofClimateChangeAdaptation', [ClimateChangeController::class, 'store_implementationChallengesofClimateChangeAdaptation']);
    Route::post('store_stakeholderEngagementForAdaptationOptions', [ClimateChangeController::class, 'store_stakeholderEngagementForAdaptationOptions']);
});

/** Start :: Business Model  Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('entry-busines-model', [BusinessModelController::class, 'entry_business_model'])->name('Entry.Business.Model');
    Route::get('para-list-busines-model', [BusinessModelController::class, 'paraList_business_model'])->name('ParaList.Business.Model');

    // GET Method Route 
    Route::get('get_all_para_list', [BusinessModelController::class, 'get_all_para_list']);

    // POST Method Route
    Route::post('store_existing_cropping_pattern', [BusinessModelController::class, 'store_existing_cropping_pattern']);
    Route::post('store_women_livelihood_activity_involvement', [BusinessModelController::class, 'store_women_livelihood_activity_involvement']);
    Route::post('store_involvementOf_youth_livelihood_activity', [BusinessModelController::class, 'store_involvementOf_youth_livelihood_activity']);
    Route::post('store_value_chain_sensitivity_to_sudden_shock', [BusinessModelController::class, 'store_value_chain_sensitivity_to_sudden_shock']);
    Route::post('store_preferencesOf_certain_agro_forestry_products', [BusinessModelController::class, 'store_preferencesOf_certain_agro_forestry_products']);
    Route::post('store_preferences_on_management_practices', [BusinessModelController::class, 'store_preferences_on_management_practices']);
    Route::post('store_food_shortage_evaluation', [BusinessModelController::class, 'store_food_shortage_evaluation']);
    Route::post('store_occupational_change_due_to_hazards', [BusinessModelController::class, 'store_occupational_change_due_to_hazards']);
    Route::post('store_question_info', [BusinessModelController::class, 'store_question_info']);
});

/** Start :: KII Producer  Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('kii-producer-basic', [ProducerController::class, 'entry_kii_for_producer_basic'])->name('Entry.Kii.Producer.Basic');
    Route::get('kii-checklist-for-producer', [ProducerController::class, 'entry_kii_for_producer'])->name('Entry.Kii.Producer');

    Route::get('entry-mobile-financial', [MobileFinancialController::class, 'entry_mobile_financial'])->name('Entry.Mobile.Financial');

    // GET Method Route 
    Route::get('get_all_kii_producer_list', [ProducerController::class, 'get_all_kii_producer_list']);
    Route::get('get_active_kii_producer', [ProducerController::class, 'get_active_kii_producer']);

    // POST Method Route
    Route::post('store_kii_producer_basic', [ProducerController::class, 'store_kii_producer_basic']);
    Route::post('store_kii_active_producer', [ProducerController::class, 'store_kii_active_producer']);

    Route::post('store_production_and_impact_of_hazards', [ProducerController::class, 'store_production_and_impact_of_hazards']);
    Route::post('store_input_sources_of_production', [ProducerController::class, 'store_input_sources_of_production']);
    Route::post('store_economies_of_production', [ProducerController::class, 'store_economies_of_production']);
    Route::post('store_training_and_capacity_building', [ProducerController::class, 'store_training_and_capacity_building']);
    Route::post('store_kii_producer_questionnaire_info', [ProducerController::class, 'store_kii_producer_questionnaire_info']);

});

/** Start :: Mobile financial  Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('entry-mobile-financial', [MobileFinancialController::class, 'entry_mobile_financial'])->name('Entry.Mobile.Financial');

    // POST Method Route
    Route::post('store_mobile_financial_courier_info', [MobileFinancialController::class, 'store_mobile_financial_courier_info']);

});

/** Start :: Kii Bepari  Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('entry-kii-bepari', [BepariController::class, 'entry_kii_bepari'])->name('Entry.Kii.Bepari');

    // GET Method Route 

    // POST Method Route
    Route::post('store_kii_bepari_info', [BepariController::class, 'store_kii_bepari_info']);
});

/** Start :: Kii Aaratdar  Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('entry-kii-aaratdar', [AaratdarController::class, 'entry_kii_aaratdar'])->name('Entry.Kii.Aaratdar');

    // GET Method Route 

    // POST Method Route
    Route::post('store_kii_aaratdar_info', [AaratdarController::class, 'store_kii_aaratdar_info']);
});

/** Start :: Input Supplier + Processing Agent + Transport Agent  Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('entry-input-supplier', [InputSupplierController::class, 'entry_input_supplier'])->name('Entry.Input.Supplier');
    Route::post('store_input_supplier_info', [InputSupplierController::class, 'store_input_supplier_info']);

    /** Processing Agent */
    Route::get('entry-processing-agent', [ProcessingAgentController::class, 'entry_processing_agent'])->name('Entry.Processing.Agent');
    Route::post('store_processing_agent_info', [ProcessingAgentController::class, 'store_processing_agent_info']);

    /** Transport Agent */
    Route::get('entry-transport-agent', [TransportAgentController::class, 'entry_transport_agent'])->name('Entry.Transport.Agent');
    Route::post('store_transport_agent_info', [TransportAgentController::class, 'store_transport_agent_info']);
});

/** Start :: Super Shop (Customer) + Super Shop (Owner)  Route */
Route::group(['prefix' => '/',  'middleware' => 'User_Auth'], function(){
    Route::get('entry-super-shop-customer', [CustomerShopController::class, 'entry_super_shop_customer'])->name('Entry.Super.Shop.Customer');
    Route::post('store_super_shop_customer_info', [CustomerShopController::class, 'store_super_shop_customer_info']);

    /** Super Shop (Owner) */
    Route::get('entry-super-shop-owner', [OwnerShopController::class, 'entry_owner_super_shop'])->name('Entry.Owner.Super.Shop');
    Route::post('store_owner_super_shop_info', [OwnerShopController::class, 'store_owner_super_shop_info']);
});

// get all utils (global) function data 
Route::get('/get_watershedId', [UtilsController::class, 'getWatershedId']);
Route::get('/get_paraList', [UtilsController::class, 'getParaList']);
Route::get('/get_community_list', [UtilsController::class, 'get_community_list']);


Route::get('/CommunityList', [UtilsController::class, 'getCommunityList']);
Route::get('/get_health_center_list', [UtilsController::class, 'get_health_center_list']);

Route::get('/get_latrine_type', [UtilsController::class, 'get_latrine_type']);
Route::get('/get_transportation', [UtilsController::class, 'get_transportation_list']);
Route::get('/get_water_source', [UtilsController::class, 'get_water_source']);

Route::get('/get_livestock_type', [UtilsController::class, 'get_livestock_type']);
Route::get('/get_farm_item', [UtilsController::class, 'get_farm_item']);

Route::get('/get_active_community_list', [UtilsController::class, 'get_active_community_list']);