
@extends('layouts.app')
@extends('layouts.main')
@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Edit User</h2>
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
    @if(Session::has('success'))
    <div class="alert alert-success">
        {{Session::get('success')}}
    </div>
@endif
    <form method="POST" action="{{ route('update-user', $user->id) }} ">
        @csrf
       

        <div class="row">
            
          <div class="form-group row col-md-8" >
            <input type="hidden" name="id" value="{{$user->id}}">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Name:</strong>
                <input type="text" name="name" value="{{ $user->name }}">
                
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Role:</strong>
              <input type="text" name="roles" value=" {{ $user->roles }}">
            </div>
        </div>
          
           
            <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                <button type="submit" class="btn btn-primary">Update</button>
            </div>
        </div>

    </form>
@endsection