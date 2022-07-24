@extends('template.header')
<div class="row">
    <div class="col-lg-3"></div>
    <div class="col-lg-6">
        <h2 class="h2 text-success">Historial</h2>
    </div>
    <div class="col-lg-3"></div>
</div>

<div class="table-responsive">
    <table class="table table-success mx-4 my-4 table-fixed"  id="table">
        <thead>
            <tr>
                <th>Fecha y Hora</th>
                <th>Búsqueda</th>
            </tr>
        </thead>
    </table>
</div>

<div class="row">
    <div class="col-lg-3"></div>
    <div class="col-lg-6">
        <a href="{{url('/')}}" class="btn btn-link my-4">Buscar Ciudad</a>
    </div>
    <div class="col-lg-3"></div>
</div>
@extends('template.footer')
