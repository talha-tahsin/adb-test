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
        Schema::create('tbl_master_bepari', function (Blueprint $table) {
            $table->id();
            $table->string('row_join_id', 10);
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('product_id', 10)->nullable();
            $table->string('product_name', 30)->nullable();
            $table->string('bepari_name', 30)->nullable();
            $table->string('bepari_cell_no', 12)->nullable();
            $table->string('age', 10)->nullable();
            $table->string('gender', 10)->nullable();
            $table->string('qualification', 30)->nullable();
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
        Schema::dropIfExists('tbl_master_bepari');
    }
};
