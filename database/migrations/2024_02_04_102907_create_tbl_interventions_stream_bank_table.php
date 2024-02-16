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
        Schema::create('tbl_interventions_stream_bank', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();

            $table->string('conservationMeasures', 200)->nullable();
            $table->string('preferencesOfMeasure', 30)->nullable();
            $table->string('unitCost', 50)->nullable();
            $table->string('potentialUnitNetGain', 20)->nullable();
            $table->string('treeIncrease', 20)->nullable();
            $table->string('carbonSequestration', 20)->nullable();
            $table->string('cropProduction', 20)->nullable();
            $table->string('livestockProduction', 20)->nullable();
            $table->string('fisheriesProduction', 20)->nullable();
            $table->string('waterSupply', 20)->nullable();
            $table->string('waterPurification', 20)->nullable();
            $table->string('wildPlantFoodFibresMedicine', 20)->nullable();
            $table->string('timberRevenue', 20)->nullable();
            $table->string('inorganicFertilizer', 20)->nullable();

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
        Schema::dropIfExists('tbl_interventions_stream_bank');
    }
};
