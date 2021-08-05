<?php

namespace App\Http\Middleware;
use Auth;
use Closure;
use DB;
use Illuminate\Http\Request;

class BlogMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
   public function handle(Request $request, Closure $next)
    {
    //$blogs= new Blog();
    //       if (! Auth::check()) {
    //     return redirect()->route('login');
    // }

    // if (Auth::user()->role == admin) {
    //     return redirect()->route('admin-dash');
    // }

    // if (Auth::user()->roles == 'author') {
    //     return $next($request);
    // }

    // if (Auth::user()->roles == 'reader') {
    //     return redirect()->route('/login');
    // }


 if (Auth::user()->roles == "author") { 
 // if the current role is Administrator
        return $next($request);
     }
     }
     
}
