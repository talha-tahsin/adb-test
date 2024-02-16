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
        Schema::create('tbl_stakeholder_engagement_for_adaptation', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();

            $table->string('adaptationInterventions', 300)->nullable();
            $table->string('leadStakeholderforImplementing', 20)->nullable();
            $table->string('levelofStake', 20)->nullable();
            $table->string('motivationOfStakeholders', 20)->nullable();
            $table->string('abilityOfStakeholders', 20)->nullable();
            $table->string('anyActionNeedToBoostMOTA', 20)->nullable();
            $table->string('coleadStakeholders', 20)->nullable();
            $table->string('privateSectorEngagement', 20)->nullable();
            $table->string('potentialFinanceSource', 20)->nullable();

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
        Schema::dropIfExists('tbl_stakeholder_engagement_for_adaptation');
    }
};
