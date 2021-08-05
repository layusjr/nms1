<?php

namespace App\Http\Middleware;
use Auth;
use Closure;
use Illuminate\Http\Request;

class Reader
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

    if (Auth::user()->role == admin) {
        return redirect()->route('admin-dash');
        
    }

    if (Auth::user()->role == author) {
        return redirect()->route('post/index');
    }

    if (Auth::user()->role == reader) {
        return $next($request);
    }
}
