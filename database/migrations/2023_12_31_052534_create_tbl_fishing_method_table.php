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
        Schema::create('tbl_fishing_method', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('name_of_gears', 30)->nullable();
            $table->string('gear_size_length', 30)->nullable();
            $table->string('gear_size_width', 30)->nullable();
            $table->string('mesh_size', 30)->nullable();
            $table->string('fishing_habitat', 30)->nullable();
            $table->string('depth_of_operation', 30)->nullable();
            $table->string('fishing_time', 30)->nullable();
            $table->string('gear_use_seasion', 30)->nullable();
            $table->string('operate_person', 30)->nullable();
            $table->string('haul_duration', 30)->nullable();
            $table->string('avg_catch_present', 30)->nullable();
            $table->string('avg_catch_5yrs_back', 30)->nullable();
            $table->string('avg_catch_10yrs_back', 30)->nullable();
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
        Schema::dropIfExists('tbl_fishing_method');
    }
};
