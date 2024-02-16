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
        Schema::create('key_active_map_unit', function (Blueprint $table) {
            $table->id();
            $table->string('user_name', 10);
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('map_unit', 20)->nullable();
            $table->string('areaOf_map_unit', 20)->nullable();
            $table->string('status', 20)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('key_active_map_unit');
    }
};
