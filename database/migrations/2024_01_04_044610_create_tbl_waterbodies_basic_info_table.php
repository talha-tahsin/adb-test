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
        Schema::create('tbl_waterbodies_basic_info', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('waterbody_type', 30)->nullable();
            $table->string('name', 30)->nullable();
            $table->string('longitude', 30)->nullable();
            $table->string('latitude', 30)->nullable();
            $table->string('source', 30)->nullable();
            $table->string('outlet', 30)->nullable();
            $table->string('distance_from_para', 30)->nullable();
            $table->string('current_status', 30)->nullable();
            $table->string('dry_season_depth', 30)->nullable();
            $table->string('wet_season_depth', 30)->nullable();
            $table->string('drinking', 30)->nullable();
            $table->string('domestic', 30)->nullable();
            $table->string('irrigation', 30)->nullable();
            $table->string('cattle_fedding', 30)->nullable();
            $table->string('others_purpose', 30)->nullable();
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
        Schema::dropIfExists('tbl_waterbodies_basic_info');
    }
};
