<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ReaderController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\UserController;

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

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('db', function () {
    return view('db');
});
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Route::get('/posts', [App\Http\Controllers\loginController::class, 'index']);

// Route::get('/login', [App\Http\Controllers\HomeController::class, 'logout'])->name('logout');

//  Route::get("posts",[BlogController::class,"index"]);
// // Route::get("posts",[BlogController::class,"create"]);
// // Route::get("posts",[BlogController::class,"store"]);
// Route::get("posts/create",[BlogController::class,"create"]);

// Route::get('/posts', function () {
  
//     return view("sample");
// });
// Route::view('posts', 'sample'); 

// Route::resource('posts', BlogController::class);

//POST
Route::get('/posts/edit/{id}',[BlogController::class, 'edit'])->name('edit-post');
 Route::post('/posts/update/{id}',[BlogController::class, 'update'])->name('update-post');

Route::get('/posts/index',[BlogController::class, 'index'])->name('index-post');

Route::delete('/posts/destroy/{id}',[BlogController::class, 'destroy'])->name('destroy-post');

Route::get('/posts/show{id}',[BlogController::class, 'show'])->name('show-post');

Route::get('/posts/create',[BlogController::class, 'create'])->name('create-post');
Route::post('/posts/store',[BlogController::class, 'store'])->name('store-post');



//Role
// Route::get('role',[
//    'middleware' => 'Role:editor',
//    'uses' => 'RoleController@index',
// ]);
Route::get('/rindex', [ReaderContorller::class, 'index'])->name('role-index');



// AAAAAAAAAAAADDDDDDDDDDDDMMMMMMMMMMMMMMIIIIIIIIIIINNNNNNNNNNNNNN
Route::get('/posts/dashboard',[AdminController::class, 'index'])->name('index-admin');
// Route::get('/posts/dashboard',[UserController::class, 'index'])->name('index-post');


Route::get('/admin/show{id}',[UserController::class, 'show'])->name('show-user');
Route::get('/admin/edit/{id}',[UserController::class, 'edit'])->name('edit-user');
Route::post('/admin/update/{id}',[UserController::class, 'update'])->name('update-user');

// Auth::routes();
// Route::get('/admin', [AdminController::class,'index'])->name('admin-dash')->middleware('admin');
 // Route::get('/posts/index',[BlogController::class, 'index'])->name('index-post')->middleware('blog');


// Route::get('/posts/index', [BlogController::class,'index'])->middleware('auth');  

// Route::get('/rindex', [ReaderController::class,'index'])->middleware('reader');

// Route::middleware(['auth','blog'])->group(function (){
// 	Route::get('/posts/index', function(){
// 		return view('posts/index');
// 	});

// });
Route::get('/index-post', [App\Http\Controllers\HomeController::class, 'restricted'])->middleware(['blog']);

// Route::get('/admin', [App\Http\Controllers\HomeController::class, 'restricted1'])->middleware(['admin']);

// Route::get('/admin/dashboard', [App\Http\Controllers\HomeController::class, 'restricted1'])->middleware(['admin']);

Route::get('/admin/dashboard',[App\Http\Controllers\UserController::class, 'index']);