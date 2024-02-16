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
        Schema::create('tbl_soil_test_basic', function (Blueprint $table) {
            $table->id();
            $table->string('soil_sample_id', 10);
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('district_name', 30)->nullable();
            $table->string('upazila_name', 30)->nullable();
            $table->string('union_name', 30)->nullable();
            $table->date('collection_date', 20)->nullable();
            $table->string('collection_time', 20)->nullable();
            $table->string('farmer_name', 20)->nullable();
            $table->string('farmer_cell_no', 20)->nullable();
            $table->string('longitude', 20)->nullable();
            $table->string('latitude', 20)->nullable();
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
        Schema::dropIfExists('tbl_soil_test_basic');
    }
};
