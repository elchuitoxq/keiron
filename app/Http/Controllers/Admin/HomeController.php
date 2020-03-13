<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\{User,Ticket,Role};

class HomeController extends Controller
{
    public function __construct(){
        $this->middleware('admin');
    }
    public function index(){
        return view('admin');
    }
    public function getData(){

        $users = User::orderBy('id','desc')->get();
        $data_users= [];
        foreach ($users as $user) {
            $row = $user;
            $row->role = $user->role;
            array_push($data_users, $row);
        }

        $tickets = Ticket::orderBy('id','desc')->get();
        $data_tickets = [];
        foreach ($tickets as $ticket) {
            $row = $ticket;
            $row->user = $ticket->user;
            array_push($data_tickets,$row);
        }

        return response()->json(['users'=>$data_users,'tickets'=>$data_tickets]);
    }
    public function setTicket(Request $request){
        function zero_fill($valor, $long = 0){
            return str_pad($valor, $long, '0', STR_PAD_LEFT);
        }
        $user = User::find($request->id);
        $ticket = new Ticket;
        $ticket->user_id = $user->id;
        $ticket->ticket = zero_fill(rand(1,99999999),8);
        if($ticket->save()){
            return response()->json(['status'=>'Exito','message'=>'Se ha generado el ticket ' . $ticket->ticket . ' de ' . $user->name . ' exitosamente' ],200);
        }else{
            return response()->json(['status'=>'Error','message'=>'Ha ocurrido un error al generar un ticket'],500);
        }

    }
}
