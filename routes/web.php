<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::group(['middleware' => 'auth'], function () {
    Route::get('/home', 'HomeController@index')->name('home');
    Route::post('/home/data', 'HomeController@getData')->name('home.data');
    Route::post('/home/ticketset','HomeController@setTicket')->name('home.ticketset');
});

Route::group(['middleware' => 'admin'], function () {
    Route::get('/admin', 'Admin\HomeController@index')->name('admin.home');
    Route::post('/admin/data', 'Admin\HomeController@getData')->name('admin.data');
    Route::post('/admin/ticketset','Admin\HomeController@setTicket')->name('admin.ticketset');
});
