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
        Schema::create('tbl_details_mobile_financial', function (Blueprint $table) {
            $table->id();
            $table->string('info_id', 10)->nullable();
            $table->string('question', 200)->nullable();
            $table->string('answer', 500)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbl_details_mobile_financial');
    }
};
