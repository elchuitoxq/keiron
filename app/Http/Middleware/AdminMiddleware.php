<?php

namespace App\Http\Middleware;

use Closure;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(!auth()->check())
            return redirect('/login')->with('error','No tienes los permisos necesarios');

        if(auth()->user()->role->name != 'admin')
            return redirect('/')->with('error','No tienes los permisos necesarios para acceder a este contenido');

        return $next($request);
    }
}
