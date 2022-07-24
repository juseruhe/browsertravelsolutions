<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Search;

class SearchesController extends Controller
{
    public function record(){
        return view('record');
    }

    public function store(Request $request){

       $search = Search::create($request->all());

       return response()->json($search);
    }

    public function index(){
        $searches = Search::all();
        return response()->json($searches);
    }

}
