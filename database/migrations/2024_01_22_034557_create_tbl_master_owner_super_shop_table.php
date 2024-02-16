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
        Schema::create('tbl_master_owner_super_shop', function (Blueprint $table) {
            $table->id();
            $table->string('row_join_id', 10);
            $table->string('district', 20);
            $table->string('upazila_name', 30)->nullable();
            $table->string('union_name', 30)->nullable();

            $table->string('respondent_name', 30)->nullable();
            $table->string('cell_no', 12)->nullable();
            $table->string('age', 10)->nullable();
            $table->string('gender', 10)->nullable();
            $table->string('shop_name', 30)->nullable();
            $table->string('shop_location', 30)->nullable();
            $table->string('qualification', 20)->nullable();
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
        Schema::dropIfExists('tbl_master_owner_super_shop');
    }
};
