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
        Schema::create('tbl_aquaculture', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('typeOf_water_body', 50)->nullable();
            $table->string('sourceOf_water', 50)->nullable();
            $table->string('water_availability_present', 20)->nullable();
            $table->string('water_availability_5yrs_ago', 20)->nullable();
            $table->string('water_availability_10yrs_ago', 20)->nullable();
            $table->string('water_depth_dry', 20)->nullable();
            $table->string('water_depth_wet', 20)->nullable();
            $table->string('aquaculture_type', 20)->nullable();
            $table->string('technology_used', 20)->nullable();
            $table->string('aquaculture_species', 20)->nullable();
            $table->string('feed_used', 20)->nullable();
            $table->string('avg_production_present', 20)->nullable();
            $table->string('avg_production_5yrs_ago', 20)->nullable();
            $table->string('avg_production_10yrs_ago', 20)->nullable();
            $table->string('production_cost', 20)->nullable();
            $table->string('selling_cost', 20)->nullable();
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
        Schema::dropIfExists('tbl_aquaculture');
    }
};
