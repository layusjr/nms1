<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use App\Http\Requests;
use App\Models\Blog;
use DB;

class BlogController extends Controller
{
     public function index()
    {
         $blogs = Blog::latest()->paginate(3);
      $blogs = Blog::get();
      
        
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
        // Validate the Field
        $this->validate($request,[
            'title'=>'required',
            'blogpost'=>'required',
            
        ]);
       // Blog::create($request->all());
         $blog = new Blog();
        
        
        $blog->title=$request->title;
       $blog->blogpost=$request->blogpost;
        
        
        $blog->save();
        return redirect()->route('index-post')->with('message','New Blog Created Successfull !');

    }
      
    public function show($id)

{
	$blogs= new Blog;
	foreach ($blogs as $blog)  {
	
	
   $blog=DB::table('blogs')->where('id', $id)->first();
}
    return view('posts.show', compact('blog'));

}
public function edit($id)
    {
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
         return redirect()->route('index-post')->with('message','Blog Updated');
    }


  public function destroy($id)
    {

      $blog=DB::table('blogs')->where('id', $id)->delete();
      
        //$blog->delete();


          return redirect()->route('index-post')->with('success', 'Blog Deleted Successfully!');
    }
}
