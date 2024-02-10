<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PlaceController;
use App\Http\Controllers\GroupController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/places', [PlaceController::class, 'getPlaces'])->name('get.places');
Route::post('/places', [PlaceController::class, 'createPlace'])->name('create.place');
Route::patch('/places/{id}/status/{status}', [PlaceController::class, 'updatePlaceStatus'])->name('update.place.status');

Route::get('/groups', [GroupController::class, 'getGroups'])->name('get.groups');
Route::get('/groups/{group_id}', [GroupController::class, 'getGroup'])->name('get.group');
Route::post('/groups', [GroupController::class, 'createGroup'])->name('create.group');
Route::put('/groups/{group_id}', [GroupController::class, 'updateGroup'])->name('update.group');
Route::delete('/groups/{group_id}', [GroupController::class, 'deleteGroup'])->name('delete.group');