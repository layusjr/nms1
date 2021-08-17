<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/posts/indexs',[App\Http\Controllers\BlogController::class, 'indexs']);
Route::get('/posts/showID',[App\Http\Controllers\BlogController::class, 'showID']);
Route::post('/posts/delete',[App\Http\Controllers\BlogController::class, 'destroy']);
Route::post('/posts/update',[App\Http\Controllers\BlogController::class, 'update']);
Route::post('/posts/store',[App\Http\Controllers\BlogController::class, 'store']);
Route::get('/posts/create',[App\Http\Controllers\BlogController::class, 'create']);

//https://laravel-json-api.readthedocs.io/en/latest/basics/routing/