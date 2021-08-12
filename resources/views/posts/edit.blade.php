
@extends('layouts.app')

@section('content')
<div  class="container">
	 <div class="row justify-content-center">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Edit Blog</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('index-post') }}" title="Go back"> <i class="fas fa-backward "></i> </a>
            </div>
        </div>
    </div>

    @if ($errors->any())
        <div class="alert alert-danger">
            <strong>Whoops!</strong> There were some problems with your input.<br><br>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <form method="POST" action="{{ route('update-post', $blog->id) }} ">
        @csrf
       

        <div class="row">
            
          <div class="form-group row col-md-8" >
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Title:</strong>
                <input type="text" name="title" value="{{ $blog->title }}">
                <input type="hidden" name="id" value="{{$blog->id}}">
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Description:</strong>
              <textarea type="text" name="blogpost" >{{ $blog->blogpost }}</textarea>
            </div>
        </div>

          
           
            <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                <button type="submit" class="btn btn-primary">Update</button>
            </div>
        </div>

    </form>
@endsection