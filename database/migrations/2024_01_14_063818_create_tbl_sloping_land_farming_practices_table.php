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
        Schema::create('tbl_sloping_land_farming_practices', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('slope_category', 100)->nullable();
            $table->string('annual_cereal_or_tuber', 300)->nullable();
            $table->string('annual_vegetable', 300)->nullable();
            $table->string('annual_pulse', 300)->nullable();
            $table->string('annual_spice_herb_oilseed_other', 300)->nullable();
            $table->string('annual_fruits', 300)->nullable();
            $table->string('perennial_fruit', 300)->nullable();
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
        Schema::dropIfExists('tbl_sloping_land_farming_practices');
    }
};
