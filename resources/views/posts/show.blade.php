

@extends('layouts.app')



<div class="row" style="padding:10px"button>
<div class="form-group row col-md-8" >
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Title:</strong>
                {{ $blog->title }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Description:</strong>
                {{ $blog->blogpost }}
            </div>
        </div>
    </div>
    <div class="form-group row col-md-4">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <button type="submit">Like</button>
                
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <button type='submit'>Comment</button>
                
            </div>
        </div>
    </div>

