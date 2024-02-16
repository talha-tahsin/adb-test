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
        Schema::create('tbl_hazard_calendar', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('hazard', 50)->nullable();
            $table->string('ranking', 30)->nullable();
            $table->string('trends_frequency', 50)->nullable();
            $table->string('intensity', 50)->nullable();
            $table->string('timeline', 20)->nullable();

            $table->string('poush', 20)->nullable();
            $table->string('magh', 20)->nullable();
            $table->string('falgun', 20)->nullable();
            $table->string('chaitra', 20)->nullable();
            $table->string('boisakh', 20)->nullable();
            $table->string('joishtho', 20)->nullable();
            $table->string('ashar', 20)->nullable();
            $table->string('srabon', 20)->nullable();
            $table->string('vadro', 20)->nullable();
            $table->string('ashwin', 20)->nullable();
            $table->string('kartik', 20)->nullable();
            $table->string('agrahyan', 20)->nullable();
            
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
        Schema::dropIfExists('tbl_hazard_calendar');
    }
};
