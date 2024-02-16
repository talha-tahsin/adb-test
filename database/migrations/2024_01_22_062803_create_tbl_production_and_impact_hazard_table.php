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
        Schema::create('tbl_production_and_impact_hazard', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('indicators', 200)->nullable();
            $table->string('Poush', 20)->nullable();
            $table->string('Magh', 20)->nullable();
            $table->string('Falgun', 20)->nullable();
            $table->string('Chaitra', 20)->nullable();
            $table->string('Boisakh', 20)->nullable();
            $table->string('Joishtho', 20)->nullable();
            $table->string('Ashar', 20)->nullable();
            $table->string('Srabon', 20)->nullable();
            $table->string('Vadro', 20)->nullable();
            $table->string('Ashwin', 20)->nullable();
            $table->string('Kartik', 20)->nullable();
            $table->string('Agrahyan', 20)->nullable();
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
        Schema::dropIfExists('tbl_production_and_impact_hazard');
    }
};
