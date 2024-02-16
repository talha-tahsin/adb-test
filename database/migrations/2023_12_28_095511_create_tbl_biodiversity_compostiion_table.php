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
        Schema::create('tbl_biodiversity_compostiion', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('river_species', 20)->nullable();
            $table->string('river_composition', 20)->nullable();
            $table->string('stream_species', 20)->nullable();
            $table->string('stream_composition', 20)->nullable();
            $table->string('lake_species', 20)->nullable();
            $table->string('lake_compostion', 20)->nullable();
            $table->string('beel_species', 20)->nullable();
            $table->string('beel_composition', 20)->nullable();
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
        Schema::dropIfExists('tbl_biodiversity_compostiion');
    }
};
