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
        Schema::create('tbl_agroforest_dependent_livelihoods', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();

            $table->string('impacts_name', 150)->nullable();
            $table->string('river_Flood', 20)->nullable();
            $table->string('flash_Flood', 20)->nullable();
            $table->string('drought', 20)->nullable();
            $table->string('heat_Wave', 20)->nullable();
            $table->string('cold_Wave', 20)->nullable();
            $table->string('tornado', 20)->nullable();
            $table->string('landslides', 20)->nullable();
            $table->string('lightning', 20)->nullable();
            $table->string('erratic_Rainfall', 20)->nullable();
            $table->string('Other', 20)->nullable();

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
        Schema::dropIfExists('tbl_agroforest_dependent_livelihoods');
    }
};
