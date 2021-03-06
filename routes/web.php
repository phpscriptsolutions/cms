<?php

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

Route::get('/_debugbar/assets/stylesheets', [
    'as' => 'debugbar-css',
    'uses' => '\Barryvdh\Debugbar\Controllers\AssetController@css'
]);

Route::get('/_debugbar/assets/javascript', [
    'as' => 'debugbar-js',
    'uses' => '\Barryvdh\Debugbar\Controllers\AssetController@js'
]);

Route::get('/_debugbar/clockwork/{id}', [
    'as' => 'debugbar-clockwork',
    'uses' => '\Barryvdh\Debugbar\Controllers\OpenHandlerController@clockwork'
]);

Route::get('/_debugbar/open', [
    'as' => 'debugbar-open',
    'uses' => '\Barryvdh\Debugbar\Controllers\OpenController@handler'
]);

Route::get('lang/{lang}', ['as'=>'lang.switch', 'uses'=>'LanguageController@index']);

Route::get('/test', [
    'as' => 'test',
    'uses' => 'TestController@index'
]);


//-------

Route::get('/', 'ProductController@getProduct');
Route::get('/showCart', 'ProductController@showShopCart');
Route::post('/addCart', 'ProductController@xhrAddCart');
Route::post('/removeCart', 'ProductController@xhrRemoveCart');
Route::post('/updateCart', 'ProductController@xhrUpdateCart');