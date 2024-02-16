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
        Schema::create('tbl_fisheries_management', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('typeOf_water_body', 50)->nullable();
            $table->string('name', 30)->nullable();
            $table->string('type_of_management', 30)->nullable();
            $table->string('coordinate_management', 30)->nullable();
            $table->string('area_of_site', 30)->nullable();
            $table->string('management_approach', 30)->nullable();
            $table->string('management_activity', 30)->nullable();
            $table->string('management_challenges', 30)->nullable();
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
        Schema::dropIfExists('tbl_fisheries_management');
    }
};
