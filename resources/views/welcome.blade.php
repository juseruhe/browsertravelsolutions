@extends('template.header')

    <div class="row">
        <div class="col-lg-3 div-col-xl-3 col-md-3 col-sm-12-col-xs-12"></div>
        <div class="col-lg-9 div-col-xl-9 col-md-9 col-sm-12-col-xs-12">
            <form id="findHumidity">
                <div class="form-group my-4 mx-4">
                    <label for="city" class="label">Buscar Ciudad: </label>
                   <select name="city" id="city" class="custom-select">
                   <option value="selecciona" selected>Selecciona una Ciudad</option>
                    <option value="Miami">Miami</option>
                    <option value="Orlando">Orlando</option>
                    <option value="New York">New York</option>
                   </select>
                </div>
                <div class="form-group my-4 mx-4">
                    <button type="submit" class="btn btn-success btn-block">Buscar:</button>
                </div>
            </form>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12">
           <div id="result">

           </div>
        </div>
        <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12">
        <div id="createMap">

        </div>
        </div>
    </div>

    <div class="row">
    <div class="col-lg-3 div-col-xl-3 col-md-3 col-sm-12-col-xs-12"></div>
    <div class="col-lg-9 div-col-xl-9 col-md-9 col-sm-12-col-xs-12">
    <a href="{{route('record')}}" class="btn btn-link my-4"> Ver Historial</a>
    </div>
    </div>
@extends('template.footer')

   