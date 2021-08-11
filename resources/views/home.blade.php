@extends('layouts.app')
@extends('layouts.main')
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Blog List') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                 
                </div>
            </div>
        </div>
      

<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">button>
    </div>
</div>
@endsection
