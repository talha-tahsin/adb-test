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
        Schema::create('tbl_existing_cropping_pattern', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('consumed_good', 20)->nullable();
            $table->string('avg_numberOf_persons_in_household', 20)->nullable();
            $table->string('monthly_ability_to_buyOr_source', 20)->nullable();
            $table->string('storage_facility_availability', 20)->nullable();
            $table->string('max_num_Of_days_stored', 20)->nullable();
            $table->string('consumption_frequency', 20)->nullable();
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
        Schema::dropIfExists('tbl_existing_cropping_pattern');
    }
};
