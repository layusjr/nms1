<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use DB;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::latest()->paginate(3);
        $users = User::get();
      
        
        return view('admin.dashboard', compact('users'))->with('i',(request()->input('page',1)-1)*5)->withSuccess('Success message');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    return view('admin.usercreate');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate the Field
        $this->validate($request,[
            'name'=>'required',
            'email'=>'required',
            'password'=>'required',
            'roles'=>'required',
            
        ]);
       // Blog::create($request->all());
         $user = new User();
        
        
        $user->name=$request->name;
       $user->email=$request->email;
       $user->password=$request->password;
       $user->roles=$request->roles;
        
        
        $user->save();
        return redirect()->route('index-post')->with('message','New Blog Created Successfull !');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user= new User;
        $users = User::get();
        foreach($users as $user){
            $user=DB::table('users')->where('id', $id)->first();
        }
        return view('admin.show', compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       $user=DB::table('users')->where('id', $id)->first();
       return view('admin.edit', compact('user')); 
}
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $id = $request->id;
        $name = $request->name;
        $roles = $request->roles;

       DB::table('users')->where('id', $id )->update([
             'name' => $name,
             'roles' => $roles,
         ]);
       $user= new User;
        $users = User::get();
        foreach($users as $user){
            $user=DB::table('users')->where('id', $id)->first();
        }
        return redirect('/admin/dashboard')->withSuccess('User Updated!');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
    $user=DB::table('users')->where('id', $id)->delete();
    echo("sample");
   // return redirect()->route('index-admin')->with('message', 'User Deleted Successfully!');
  //  return redirect('admin.dashboard', compact('users'));
    return redirect('/admin/dashboard')->with('message','User Deleted Succesfully');

    }
}
