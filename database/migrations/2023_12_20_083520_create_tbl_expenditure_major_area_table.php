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
        Schema::create('tbl_expenditure_major_area', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('food', 50)->nullable();
            $table->string('medication', 50)->nullable();
            $table->string('education', 50)->nullable();
            $table->string('savings', 50)->nullable();
            $table->string('investment', 50)->nullable();
            $table->string('clothing', 50)->nullable();
            $table->string('debt', 50)->nullable();
            $table->string('housing', 50)->nullable();
            $table->string('disaster', 50)->nullable();
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
        Schema::dropIfExists('tbl_expenditure_major_area');
    }
};
