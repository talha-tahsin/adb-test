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
        Schema::create('tbl_livelihood', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('community', 30)->nullable();
            $table->string('jhum_male', 20)->nullable();
            $table->string('jhum_female', 20)->nullable();
            $table->string('plain_land_male', 20)->nullable();
            $table->string('plain_land_female', 20)->nullable();
            $table->string('orchard_male', 20)->nullable();
            $table->string('orchard_female', 20)->nullable();
            $table->string('fuel_wood_male', 20)->nullable();
            $table->string('fuel_wood_female', 20)->nullable();
            $table->string('wage_labour_male', 20)->nullable();
            $table->string('wage_labour_female', 20)->nullable();
            $table->string('poultry_male', 20)->nullable();
            $table->string('poultry_female', 20)->nullable();
            $table->string('livestock_male', 20)->nullable();
            $table->string('livestock_female', 20)->nullable();
            $table->string('aquaculture_male', 20)->nullable();
            $table->string('aquaculture_female', 20)->nullable();
            $table->string('service_holder_male', 20)->nullable();
            $table->string('service_holder_female', 20)->nullable();
            $table->string('handicraft_male', 20)->nullable();
            $table->string('handicraft_female', 20)->nullable();
            $table->string('others_male', 20)->nullable();
            $table->string('others_female', 20)->nullable();
            $table->string('others_name', 20)->nullable();
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
        Schema::dropIfExists('tbl_livelihood');
    }
};
