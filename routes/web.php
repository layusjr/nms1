<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\AdminController;
// use App\Http\Controllers\ReaderController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\UserController;
use App\Models\User;
use App\Models\Blog;


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

// json
Route::get('/rindex', function (Request $request){
    $users= User::Paginate(sizeof(User::all()));
    return $users;  
});
Route::get('/indexs', function (Request $request) {
   $blogs = Blog::Paginate(sizeof(Blog::all()));
   return $blogs;
});

Route::get('/showID/${id}', function (Request $request) {
    $blogs = Blog::Paginate(2);
    return $blogs;
 });



// view
Route::get('home', function () {
    return view('/home');
});
Route::get('react/userpage', function () {
    return view('react/userpage');
}); 
Route::get('react/loginpage', function () {
    return view('react/loginpage');
}); 
Route::get('react/registerpage', function () {
    return view('react/registerpage');
}); 
Route::get('react/indexblog', function () {
    return view('react/indexblog');
}); 

Route::get('react/createpost', function () {
    return view('/react/createpost')->with(['id'=>Auth::user()->id, 'name'=> Auth::user()->name]);
})->middleware(['admin']);


Route::get('react/createpost', function () {
    return view('/react/createpost')->with(['id'=>Auth::user()->id, 'name'=> Auth::user()->name]);
})->middleware(['admin']);




Route::get('/react/show/{id}', function () {
    return view('/react/showblog');
});


Route::get('/', function () {
    return view('welcome');
});
Route::get('/react', function () {
    return view('react');
});

Route::get('/react/showblog', function () {
    return view('react/showblog');
});

Route::get('/react/editblog', function () {
    return view('react/editblog');
});

Route::get('/react/editblog', function () {
    return view('react/editblog');
});




Route::get('db', function () {
    return view('db');
});

Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');





Auth::routes();
// Route::get('/blog', 'BlogController@index')->name('blog')->middleware('blog');
// // Route::get('/reader', 'ReaderController@index')->name('reader')->middleware('reader');


Route::get('logout', [App\Http\Controllers\HomeController::class, 'logout'])->name('logout');

Route::middleware(['admin'])->group(function (){
    // Route::get('admin/dashboard', 'UserController@index')->name('admin-dashboard');
    Route::get('/admin/dashboard',[App\Http\Controllers\UserController::class, 'index'])->name('admin-dashboard');
    Route::get('/admin/usercreate',[App\Http\Controllers\UserController::class, 'create'])->name('create-user');
    Route::post('admin/store',[App\Http\Controllers\UserController::class, 'store'])->name('store-user');
    Route::get('/admin/show/{id}',[App\Http\Controllers\UserController::class, 'show'])->name('show-user');
    Route::get('/admin/edit/{id}',[App\Http\Controllers\UserController::class, 'edit'])->name('edit-user');
    Route::post('/admin/update/{id}',[App\Http\Controllers\UserController::class, 'update'])->name('update-user');
    Route::delete('/admin/destroy/{id}',[App\Http\Controllers\UserController::class, 'destroy'])->name('destroy-user');

    Route::get('/posts/index',[App\Http\Controllers\BlogController::class, 'index'])->name('index-posts');
    Route::get('/posts/edit/{id}',[App\Http\Controllers\BlogController::class, 'edit'])->name('edit-post');
    Route::post('/posts/update/{id}',[App\Http\Controllers\BlogController::class, 'update'])->name('update-post');
    Route::delete('/posts/destroy/{id}',[App\Http\Controllers\BlogController::class, 'destroy'])->name('destroy-post');
    Route::get('/posts/show/{id}',[App\Http\Controllers\BlogController::class, 'show'])->name('show-post');
    Route::POST('/posts/create',[App\Http\Controllers\BlogController::class, 'create'])->name('create-post');
    Route::post('/posts/store',[App\Http\Controllers\BlogController::class, 'store'])->name('store-post');
});

// Route::get('/posts/showss/{id}',[App\Http\Controllers\BlogController::class, 'show'])->name('show-post');

Route::prefix('author')->group(function (){
    Route::get('/posts/edit/{id}',[App\Http\Controllers\BlogController::class, 'edit'])->name('edit-post');
    Route::post('/posts/update/{id}',[App\Http\Controllers\BlogController::class, 'update'])->name('update-post');
    Route::get('/posts/index',[App\Http\Controllers\BlogController::class, 'index'])->name('index-posts');
     Route::delete('/posts/destroy/{id}',[App\Http\Controllers\BlogController::class, 'destroy'])->name('destroy-post');
     Route::get('/posts/show/{id}',[App\Http\Controllers\BlogController::class, 'show'])->name('show-post');
     Route::POST('/posts/create',[App\Http\Controllers\BlogController::class, 'create'])->name('create-post');
    //  Route::post('/posts/store',[App\Http\Controllers\BlogController::class, 'store'])->name('store-post');
     Route::post('/store',[App\Http\Controllers\BlogController::class, 'store'])->name('store-post');
});

//  Route::get('/posts/indexs',[App\Http\Controllers\BlogController::class, 'index'])->name('index-post')->middleware('web');
Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


