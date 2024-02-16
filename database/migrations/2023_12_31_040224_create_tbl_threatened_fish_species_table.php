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
        Schema::create('tbl_threatened_fish_species', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('name_of_species', 50)->nullable();
            $table->string('habitat_river', 30)->nullable();
            $table->string('habitat_stream', 30)->nullable();
            $table->string('habitat_beel', 30)->nullable();
            $table->string('habitat_lake', 30)->nullable();
            $table->string('habitat_other', 30)->nullable();
            $table->string('abundance_present', 30)->nullable();
            $table->string('abundance_5yrs_back', 30)->nullable();
            $table->string('abundance_10yrs_back', 30)->nullable();
            $table->string('reason_of_changes', 30)->nullable();
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
        Schema::dropIfExists('tbl_threatened_fish_species');
    }
};
