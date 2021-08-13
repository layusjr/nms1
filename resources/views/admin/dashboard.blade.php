@extends('layouts.app')
@section('content')







	 <div class="row justify-content-center">


    <div class="pull-right">
            
            </div>

	 	<div class="col-md-8">
            <div class="card">
              <nav>

                <!-- <div class="tab">
  <button class="tablinks" onclick="openCity(event, 'Users')">Users List</button>
  <button  action="{{route('index-post')}}">Blog List</button>
   <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button> -->
</div>
              </nav>

                <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">User Type</th>
      <th scope="col"></th>
      
    </tr>
  </thead>
  <tbody>
    @foreach($users as $user)
        
      <td>{{$user->name}}</td>
      <td>{{$user->roles}}</td>
      <td>
        <form action="{{ route('destroy-user', $user->id) }}" method="POST">

                        <a href="{{ route('show-user', $user->id) }}" title="show">
                            <i class="fas fa-eye text-success  fa-lg"></i>
                        </a>

                        <a href="{{ route('edit-user', $user->id) }}">
                            <i class="fas fa-edit  fa-lg"></i>

                        </a>

                        @csrf
                        @method('delete')

                        <button type="submit" onclick="return confirm('Are you sure to delete this user??')" title="delete" style="border: none; background-color:transparent;">
                            <i class="fas fa-trash fa-lg text-danger"></i>

                        </button>
                    </form>
       </td>
    </tr>
    @endforeach
      </tbody>
</table>
            </div>
        </div>
    </div>
</div>

	

 



@endsection