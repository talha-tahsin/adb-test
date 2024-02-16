<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tbl_medicinal_trees_species_info', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            
            $table->string('dominantSpecies', 50)->nullable();
            $table->string('plant_animalRelationship', 20)->nullable();
            $table->string('productionCostAfter1stRotation', 20)->nullable();
            $table->string('yield', 20)->nullable();
            $table->string('sellingPrice', 20)->nullable();
            $table->string('profit', 20)->nullable();
            $table->string('waterDemandOftheSpecies', 20)->nullable();
            $table->string('lightDemand', 20)->nullable();
            $table->string('rootType', 20)->nullable();
            $table->string('slope', 20)->nullable();
            $table->string('tree_timberDemand', 20)->nullable();
            $table->string('soilandWaterRetentionCapacity', 20)->nullable();
            $table->string('presentCoverage', 20)->nullable();
            $table->string('presentTree_acre', 20)->nullable();
            $table->string('pastCoverage', 20)->nullable();

            $table->string('created_by', 10)->nullable();
            $table->string('updated_by', 10)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbl_medicinal_trees_species_info');
    }
};
