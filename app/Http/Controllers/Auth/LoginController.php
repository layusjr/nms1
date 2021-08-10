<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controller\BlogController;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    protected $redirectTo;
    public function redirectTo(){
        switch(Auth::user()->roles){


            case 'admin':
            $this->redirectTo = 'admin/dashboard';
            return $this->redirectTo;
                    
            break;

            case 'author':
            $this->redirectTo = '/author/posts/index';
            return $this->redirectTo;
            break;

             case 'reader':
            $this->redirectTo = '/posts/index';
            return $this->redirectTo;

            break;

            default:
            $this->redirectTo = '/login';
            return $this->redirectTo;
        }
//         if(Auth::user()->roles!='admin'){
//             return '/posts/index';
//             }
//             elseif(Auth::user()->roles=='admin'){
//                 return'/admin/dashboard';

               
//             }
//  return '/posts/index';
//         }

}
    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    // protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}
