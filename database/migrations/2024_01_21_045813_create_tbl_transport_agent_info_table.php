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
        Schema::create('tbl_transport_agent_info', function (Blueprint $table) {
            $table->id();
            $table->string('row_join_id', 10);
            $table->string('indicators', 200);
            $table->string('jan', 20)->nullable();
            $table->string('feb', 20)->nullable();
            $table->string('mar', 20)->nullable();
            $table->string('apr', 20)->nullable();
            $table->string('may', 20)->nullable();
            $table->string('jun', 20)->nullable();
            $table->string('jul', 20)->nullable();
            $table->string('aug', 20)->nullable();
            $table->string('sep', 20)->nullable();
            $table->string('oct', 20)->nullable();
            $table->string('nov', 20)->nullable();
            $table->string('dec', 20)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbl_transport_agent_info');
    }
};
