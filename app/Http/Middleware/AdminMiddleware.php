<?php

namespace App\Http\Middleware;
use Auth;
use Closure;
use Illuminate\Http\Request;

class AdminMiddleware
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
         if (! Auth::check()) {
        return redirect()->route('login');
    }

        if($request->user() && $request->user()->roles == 'admin'){
            return $next($request);
        }
        Auth::logout();
        return redirect()->route('admin-dashboard');
      
        

}
}