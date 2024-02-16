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
        Schema::create('tbl_super_shop_customer_questionnaire', function (Blueprint $table) {
            $table->id();
            $table->string('row_join_id', 10);
            $table->string('question', 200)->nullable();
            $table->string('answer', 200)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbl_super_shop_customer_questionnaire');
    }
};
