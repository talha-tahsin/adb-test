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
        Schema::create('tbl_overall_mortality_livestock', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('livestock_type', 20)->nullable();
            $table->string('less_than_5', 20)->nullable();
            $table->string('between_5_to_15', 20)->nullable();
            $table->string('between_15_to_30', 20)->nullable();
            $table->string('above30_or_30', 20)->nullable();
            $table->string('major_3_cauese', 50)->nullable();
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
        Schema::dropIfExists('tbl_overall_mortality_livestock');
    }
};
