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
        Schema::create('key_active_vcf', function (Blueprint $table) {
            $table->id();
            $table->string('user_name', 10);
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('main_para_id', 10)->nullable();
            $table->string('main_para_name', 30)->nullable();
            $table->string('vcf_id', 10)->nullable();
            $table->string('vcf_name', 30)->nullable();
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
        Schema::dropIfExists('key_active_vcf');
    }
};
