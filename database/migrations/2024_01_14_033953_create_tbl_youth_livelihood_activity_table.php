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
        Schema::create('tbl_youth_livelihood_activity', function (Blueprint $table) {
            $table->id();
            $table->string('watershed_id', 10);
            $table->string('watershed_name', 30)->nullable();
            $table->string('para_id', 10)->nullable();
            $table->string('para_name', 30)->nullable();
            $table->string('product_name', 30)->nullable();
            $table->string('pre_production', 20)->nullable();
            $table->string('shelter_preparation', 20)->nullable();
            $table->string('rearing', 20)->nullable();
            $table->string('showing_seeds', 20)->nullable();
            $table->string('weeding', 20)->nullable();
            $table->string('fertilizer_and_pesticides_apply', 20)->nullable();
            $table->string('harvesting', 20)->nullable();
            $table->string('processing', 20)->nullable();
            $table->string('selling', 20)->nullable();
            $table->string('youth_involved_scope_activities', 20)->nullable();
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
        Schema::dropIfExists('tbl_youth_livelihood_activity');
    }
};
