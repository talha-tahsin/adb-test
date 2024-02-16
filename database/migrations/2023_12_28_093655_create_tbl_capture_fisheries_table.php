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
        Schema::create('tbl_capture_fisheries', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('water_body_types', 50)->nullable();
            $table->string('name', 50)->nullable();
            $table->string('water_available_prsnt', 20)->nullable();
            $table->string('avg_depth_prsnt', 20)->nullable();
            $table->string('water_available_5yrs_ago', 20)->nullable();
            $table->string('avg_depth_5yrs_ago', 20)->nullable();
            $table->string('water_available_10yrs_ago', 20)->nullable();
            $table->string('avg_depth_10yrs_ago', 20)->nullable();
            $table->string('pollutaion_sources', 50)->nullable();
            $table->string('consequences_pollution', 50)->nullable();
            $table->string('changes_reason', 50)->nullable();
            $table->string('adaptive_measures', 50)->nullable();
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
        Schema::dropIfExists('tbl_capture_fisheries');
    }
};
