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
        if (! Auth::check()) {
            return redirect()->route('login');
        }
    
            if($request->user() && $request->user()->roles == 'author' || $request->user()->roles == 'reader'){
                return $next($request);
            }
            Auth::logout();
            return redirect()->route('index-post');
    
            
    
    }
    }
