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
        Schema::create('tbl_abundance_production', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('species_cat', 50)->nullable();
            $table->string('presenceOf_floral_species', 20)->nullable();
            $table->string('abundance', 20)->nullable();
            $table->string('production_cost', 20)->nullable();
            $table->string('yield', 20)->nullable();
            $table->string('selling_price', 20)->nullable();
            $table->string('profit', 20)->nullable();
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
        Schema::dropIfExists('tbl_abundance_production');
    }
};
