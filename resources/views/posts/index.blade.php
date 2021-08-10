
@extends('layouts.app')

@section('content')

<div  class="container">
<!--   <div class="form-group row">
  <div class="pull-right"> <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
    {{ __('Logout') }}
</a></div></div>
 -->

	 <div class="row justify-content-center">
    @if(Auth::user()->roles != 'reader')
    <div class="pull-right">
                
            </div> 
    @endif

	 	<div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Blogs') }}
                  @if(Auth::user()->roles != 'reader')
                <a class="btn btn-success pull-right" href="{{ route('create-post') }}" title="Create a Blog"> <i class="fas fa-plus-circle" value="Create"></i>
                    </a>
                    @endif
                </div>
         

                <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
      <th scope="col"></th>
      
    </tr>
  </thead>
  <tbody>
    @foreach($blogs as $blog)
        
      <td>{{$blog->title}}</td>
      <!-- <td>{{$blog->blogpost}}</td> -->
      <td>
        <form action="{{ route('destroy-post', $blog->id) }}" method="POST">

                        <a href="{{ route('show-post', $blog->id) }}" title="show">
                            <i class="fas fa-eye text-success  fa-lg"></i>
                        </a>
@if(Auth::user()->roles != 'reader')
                        <a href="{{ route('edit-post', $blog->id) }}">
                            <i class="fas fa-edit  fa-lg"></i>

                        </a>

                        @csrf
                        @method('delete')

                        <button type="submit" title="delete" style="border: none; background-color:transparent;">
                            <i class="fas fa-trash fa-lg text-danger"></i>

                        </button>
                        @endif
                    </form>
       </td>
    </tr>
    @endforeach
    
  </tbody>
</table>
</div>
</div>
</div>
     
   


	

 



@endsection