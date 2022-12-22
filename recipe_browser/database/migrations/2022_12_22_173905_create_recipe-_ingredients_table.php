<?php

use App\Models\Ingredient;
use App\Models\Recipe;
use App\Models\Measurement;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipe-_ingredients', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('recipe_id')->unsigned();
            $table->foreign('recipe_id')->references('id')->on('recipes')->constrained();
            $table->unsignedBigInteger('ingredient_id')->unsigned();
            $table->foreign('ingredient_id')->references('id')->on('ingredients')->constrained();
            $table->integer('amount');
            $table->unsignedBigInteger('measurement_id')->unsigned();
            $table->foreign('measurement_id')->references('id')->on('measurements')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recipe-_ingredients');
    }
};
