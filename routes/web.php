<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\SearchesController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Searches
Route::get('record',[SearchesController::class,'record'])->name('record');
Route::post('searches',[SearchesController::class,'store']);
Route::get('searches',[SearchesController::class,'index']);
