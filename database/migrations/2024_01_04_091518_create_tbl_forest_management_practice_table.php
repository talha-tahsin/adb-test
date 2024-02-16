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
        Schema::create('tbl_forest_management_practice', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('tackling_manmade_forest_fires', 50)->nullable();
            $table->string('multilayer_plantation', 20)->nullable();
            $table->string('prohibitionOf_logging_hunting', 20)->nullable();
            $table->string('controlOf_jhum_cultivation', 20)->nullable();
            $table->string('teli_garjan', 20)->nullable();
            $table->string('kanak_and_tetul', 20)->nullable();
            $table->string('others_name', 20)->nullable();
            $table->string('enrichment_plantation', 20)->nullable();
            $table->string('transition_pathwayOf_teak_tree', 20)->nullable();
            $table->string('forest_silviculture_operations', 20)->nullable();
            $table->string('forest_chemical_management', 20)->nullable();
            $table->string('establishmentOf_community_tree', 20)->nullable();
            $table->string('infrastructures_development', 20)->nullable();
            $table->string('others_ngo_name', 20)->nullable();
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
        Schema::dropIfExists('tbl_forest_management_practice');
    }
};
