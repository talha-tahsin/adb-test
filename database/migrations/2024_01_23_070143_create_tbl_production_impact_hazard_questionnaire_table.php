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
        Schema::create('tbl_production_impact_hazard_questionnaire', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('producer_id', 10)->nullable();
            $table->string('producer_name', 10)->nullable();
            $table->string('product_name', 10)->nullable();
            $table->string('question1', 200)->nullable();
            $table->string('answer1', 50)->nullable();
            $table->string('question2', 200)->nullable();
            $table->string('answer2', 500)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbl_production_impact_hazard_questionnaire');
    }
};
