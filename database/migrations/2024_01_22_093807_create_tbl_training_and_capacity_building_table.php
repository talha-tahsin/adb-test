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
        Schema::create('tbl_training_and_capacity_building', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('training_topic', 200)->nullable();
            $table->string('training_received', 20)->nullable();
            $table->string('where_received_training', 20)->nullable();
            $table->string('satisfaction_level', 20)->nullable();
            $table->string('receive_assistance', 20)->nullable();
            $table->string('training_needed', 20)->nullable();
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
        Schema::dropIfExists('tbl_training_and_capacity_building');
    }
};
