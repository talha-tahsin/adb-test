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
        Schema::create('tbl_fisheries_question_info', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('vcf_manage_general_rule', 100)->nullable();
            $table->string('vcf_manage_and_challenge', 100)->nullable();
            $table->string('gamer_and_sojne', 20)->nullable();
            $table->string('kadam_and_kushum', 20)->nullable();
            $table->string('teli_garjan', 20)->nullable();
            $table->string('kanak_and_tetul', 20)->nullable();
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
        Schema::dropIfExists('tbl_fisheries_question_info');
    }
};
