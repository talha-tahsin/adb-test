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
        Schema::create('tbl_losses_damages_dueto_different_hazard', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();

            $table->string('climateHazard', 50)->nullable();
            $table->string('occurrenceOnceInYears', 20)->nullable();
            $table->string('tenYearsAgo', 20)->nullable();
            $table->string('present', 20)->nullable();
            $table->string('yearOfLastExtremeEvent', 20)->nullable();
            $table->string('damagesOfCropLandArea', 20)->nullable();
            $table->string('no_Of_InfrastructuresDamage', 20)->nullable();
            $table->string('no_Of_LivestockPoultryDead', 20)->nullable();
            $table->string('fisheriesProductionLoss', 20)->nullable();
            $table->string('timberProductionLoss', 20)->nullable();
            $table->string('fruitsBusinessLoss', 20)->nullable();
            $table->string('totalIncomeLoss', 20)->nullable();
            $table->string('otherLosses', 20)->nullable();
            $table->string('anyOtherRemarks', 20)->nullable();

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
        Schema::dropIfExists('tbl_losses_damages_dueto_different_hazard');
    }
};
