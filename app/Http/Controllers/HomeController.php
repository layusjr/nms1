<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use DB;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }
    public function logout()
    {
    Auth::logout();
return redirect()->route('login');
}

public function restricted() {
      $blogs = Blog::latest()->paginate(3);
      $blogs = Blog::get();
    return view('posts.index', compact('blogs'))->with('i',(request()->input('page',1)-1)*5)->withSuccess('Success message');
}
public function restricted1() {
    return view('admin.dashboard');
}

}
