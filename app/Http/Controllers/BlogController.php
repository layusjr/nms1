<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Auth;
use Illuminate\Http\Request;
// use App\Http\Requests;
use App\Models\Blog;
use App\Models\User;
use DB;

class BlogController extends Controller
{
    //fetch json file/data
    //  public function index(){
    //      $id = auth()->id();
    //      $name = auth()->user()->name;
    //      dd($name);
    //      $blogs = Blog::latest()->paginate(3);
    //      $blogs = Blog::get();
    //      return response()->json([
    //       'blogs_data' => $blogs, 
    //     ]);  
    // }

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
        return view('posts.create');
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
            $id = auth()->id();
            $name = auth()->user()->name;
            // Validate the Field
            //dd($idi);
            $this->validate($request,[
          
            'title'=>'required',
            'blogpost'=>'required',
            
            
        ]);
       // Blog::create($request->all());
          $blog = new Blog();
          $blog->title=$request->title;
          $blog->blogpost=$request->blogpost;
          $blog->user_name=$name;
          $blog->save();
          return redirect()->route('index-posts')->with('message','New Blog Created Successfull !');

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
       DB::table('blogs')->where('id', $id )->update([
             'title' => $title,
             'blogpost' => $blogpost,
         ]);
         return redirect()->route('index-posts')->with('message','Blog Updated');
        //  return response()->json([
        //   'blogs_data' => $blogs, 
        //  ]);
        
    }


  public function destroy($id)
    {

      $blog=DB::table('blogs')->where('id', $id)->delete();
      
        //$blog->delete();


          return redirect()->route('index-posts')->with('success', 'Blog Deleted Successfully!');
    }
}
