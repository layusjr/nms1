<?php

namespace App\Http\Middleware;
use Auth;
use Closure;
use Illuminate\Http\Request;

class Admin
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
    //      if (! Auth::check()) {
    //     return redirect()->route('login');
    // }

    // if (Auth::user()->role == admin) {
    //     return $next($request);
    // }

    // if (Auth::user()->role == author) {
    //     return redirect()->route('post/index');
    // }

    // if (Auth::user()->role == reader) {
    //     return redirect()->route('reader-dash');
    // }
 //        if (Auth::user()->roles == "admin") { 
 // // if the current role is Administrator
 //        return $next($request);
 //     }

        
         if (Auth::user()->roles == "admin") { 
 // if the current role is Administrator
        return $next($request);
     }

}
}