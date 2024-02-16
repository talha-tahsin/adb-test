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
        Schema::create('tbl_r4_stream_bank_protection', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();

            $table->string('conservationMeasures', 200)->nullable();
            $table->string('implementationTimeMeasures', 30)->nullable();
            $table->string('landUnavailable', 50)->nullable();
            $table->string('supplyChainDisconnection', 20)->nullable();
            $table->string('landRightProblems', 20)->nullable();
            $table->string('highHumanInvestment', 20)->nullable();
            $table->string('insufficientInfrastructures', 20)->nullable();
            $table->string('lessDemandOfAgroforestry', 20)->nullable();
            $table->string('environmentallyUnsustainable', 20)->nullable();
            $table->string('sociallyUnacceptable', 20)->nullable();
            $table->string('lessBeneficial', 20)->nullable();
            $table->string('actionsOvercomeBarrier', 20)->nullable();

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
        Schema::dropIfExists('tbl_r4_stream_bank_protection');
    }
};
