<?php

namespace App\Http\Controllers;
// use App\Http\Controllers\Auth;
use Illuminate\Http\Request;
// use App\Http\Requests;
use App\Models\Blog;
use App\Models\User;
use DB;
use Auth;

class BlogController extends Controller
{
    //fetch json file/data
     public function indexs(){
         $id = auth()->id();
         $name = auth()->user()->name;
         dd($name);
         $blogs = Blog::latest()->paginate(5);
         $blogs = Blog::get();
         return response()->json([
          'blogs_data' => $blogs, 
        ]);  
    }

    //View Blog Index
    public function index()
    {
         $id = auth()->id();
         $name = auth()->user()->name;
        //  dd($name);
         $blogs = Blog::latest()->paginate(3);
         $blogs = Blog::get();
        //  return response()->json([
        //   'blogs_data' => $blogs, 
        // ]);
        
         return view('/posts/index', compact('blogs'))->with('i',(request()->input('page',1)-1)*5)->withSuccess('Success message');
    }

     public function create()
    {
      return response()->json([
        'status' => 'inserted', 
       ]);
    }
 /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

     
    public function store(Request $request)
    { 
        
        // $user= new User;
        $id = $request->id;
        $name =  $request->name;
        // Validate the Field
        $this->validate($request,[
          'title'=>'required',
          'blogpost'=>'required',
        ]);
        // Blog::create($request->all());
        $blog = new Blog();
        $blog->title=$request->title;
        $blog->blogpost=$request->blogpost;
        $blog->user_id=$id;
        $blog->user_name=$name;
        
        $blog->save();
        return response()->json([
            'status' => 'inserted', 
           ]);
    }
      
        //View one Blog
        public function show($id){
        $blog=DB::table('blogs')->where('id', $id)->first();
        // dd($blog);
        return view('posts.show', compact('blog'));
      }

      //JSON      
      public function showID($id){
        $blog=DB::table('blogs')->where('id', $id)->first();
        // dd($blog);
        // return view('posts.show', compact('blog'));
        return response()->json(['blogs_data' => $blog,]);
        }

      public function edit($id) {
      $blog=DB::table('blogs')->where('id', $id)->first();
      return view('posts.edit', compact('blog'));
      }
      
      public function update(Request $request)
      {
      // Validate the Field
    	$id = $request->id;
      $title = $request->title;
      $blogpost = $request->blogpost;

      $blog = Blog::find($request->id);
      $blog->title = $title;
      $blog->blogpost = $blogpost;

      $blog->save();
      return response()->json([
          'status' => 'updated', 
         ]);
        
    }


  public function destroy(Request $request)
  {
    
   $blog = Blog::find($request);
    foreach($blog as $index) {
      $index->delete();
    }
    return response()->json([
      'status' => 'success', 
    ]);  
    
}
}
