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
Route::get('/admin/showID',[App\Http\Controllers\BlogController::class, 'showID']);

Route::get('/admin/dashboard',[App\Http\Controllers\UserController::class, 'index']);
Route::get('/admin/usercreate',[App\Http\Controllers\UserController::class, 'create']);
Route::post('admin/store',[App\Http\Controllers\UserController::class, 'store']);
Route::get('/admin/show/{id}',[App\Http\Controllers\UserController::class, 'show']);
Route::get('/admin/edit/{id}',[App\Http\Controllers\UserController::class, 'edit']);
Route::post('/admin/update',[App\Http\Controllers\UserController::class, 'update']);


Route::get('logout', [App\Http\Controllers\HomeController::class, 'logout'])->name('logout');