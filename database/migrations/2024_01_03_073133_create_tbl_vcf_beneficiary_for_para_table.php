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
        Schema::create('tbl_vcf_beneficiary_for_para', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('nameOf_vcf', 50)->nullable();
            $table->string('areaOf_vcf', 20)->nullable();
            $table->string('distance_from_para', 20)->nullable();
            $table->string('overall_status', 20)->nullable();
            $table->string('timber', 20)->nullable();
            $table->string('bamboo', 20)->nullable();
            $table->string('fruit', 20)->nullable();
            $table->string('fuel_wood', 20)->nullable();
            $table->string('thatch', 20)->nullable();
            $table->string('honey', 20)->nullable();
            $table->string('medical_plant', 20)->nullable();
            $table->string('bush_meat', 20)->nullable();
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
        Schema::dropIfExists('tbl_vcf_beneficiary_for_para');
    }
};
