<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\{User,Ticket,Role};

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function getData(){
        $tickets = Ticket::where('user_id', Auth::user()->id)->orderBy('id','desc')->get();
        return response()->json(['tickets'=>$tickets],200);
    }
    public function setTicket(Request $request){
        $ticket = Ticket::where('id',$request->id)->where('user_id',Auth::user()->id)->first();
        $ticket->pedido = true;
        if($ticket->save()){
            return response()->json(['status'=>'Exito','message'=>'Se ha usado el ticket ' . $ticket->ticket],200);
        } else {
            return response()->json(['status'=>'Error','message'=>'Hubo un error al usar el ticket'],200);
        }
    }
}
