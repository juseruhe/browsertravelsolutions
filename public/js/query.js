
$(document).ready(function () {
    var url = "https://api.openweathermap.org/data/2.5/weather?q="
    var apiKey = "73e52b072e1dbf3b5261fa7d8f0f64fb"

    var humidity;
    var city;
    var country;
    var temperature;
    var search;
    

    // Estirar el mapa
  $(window).resize(function () {

        var canvaHeight = $('#map').parent().css('height');
        var canvaWidth = $('#map').parent().css('width');

        $('#map').css("height", canvaHeight);
        $('#map').css("width", canvaWidth);

    });



    // Enviar Datos al servicio
    $('#findHumidity').submit(function (e) {
        e.preventDefault();


        search = $('#city').val()

        $('.card').remove()
        $('#map').remove()

        $.ajax({
            type: "get",
            url: url + search + "&appid=" + apiKey,

            success: function (response) {

                humidity = response.main.humidity
                city = response.name
                country = response.sys.country
                temperature = response.main.temp

                console.log(response)

                $('#result').append("<div class='card mx-4'> <div class='card-body'> <h5 class='card-title'> Ciudad: " + city + "</h5> <p class='card-text'> Humedad: " + humidity + "%</p> <p> Temperatura: " + Math.round((temperature - 273.15)) + "°C</p> <p> País: " + country + "</p> </div> </div>");

                // Uso del mapa
                switch (city) {
                    case "Miami": $('#createMap').append("<div class='map' id='map'> </div>")

                        var map = new ol.Map({
                            target: 'map',
                            layers: [
                                new ol.layer.Tile({
                                    source: new ol.source.OSM()
                                })
                            ],
                            view: new ol.View({
                                center: ol.proj.fromLonLat([-80.2105, 25.7751]),
                                zoom: 12
                            })
                        });

                        break;

                    case "Orlando":

                        $('#createMap').append("<div class='map' id='map'> </div>")

                        var map = new ol.Map({
                            target: 'map',
                            layers: [
                                new ol.layer.Tile({
                                    source: new ol.source.OSM()
                                })
                            ],
                            view: new ol.View({
                                center: ol.proj.fromLonLat([-81.2988, 28.4159]),
                                zoom: 9
                            })
                        });

                          $(window).resize(function () {

            var canvaHeight = $('#map').parent().css('height');
            var canvaWidth = $('#map').parent().css('width');
    
            $('#map').css("height", canvaHeight);
            $('#map').css("width", canvaWidth);
    
        });

                        break;

                    case "New York":

                        $('#createMap').append("<div class='map' id='map'> </div>")

                        var map = new ol.Map({
                            target: 'map',
                            layers: [
                                new ol.layer.Tile({
                                    source: new ol.source.OSM()
                                })
                            ],
                            view: new ol.View({
                                center: ol.proj.fromLonLat([-73.9385, 40.6643]),
                                zoom: 10
                            })
                        });

                        break;

                    default: break;
                }


            }, error: function (response) {

                if (response.status == 404) {
                    $('#result').append("<div class='card  mx-4'> <div class='card-body'> <h5 class='card-title'> No se encontro la ciudad </h5> <p> Por Favor selecciona otra ciudad </p> </div> </div>");
                }
            }
        });



        // Agregar al historial
        if (search == "selecciona") {
            search = "Ciudad no encontrada"
        }

        $.ajax({
            type: "post",
            url: "/searches",
            data: {
                search: search
            },
            success: function (response) {
                console.log(response)

            }, error: function (error) {
                console.log(error)
            }
        });


    });

    //  Mostrar Historial

    var table = $('#table').DataTable({

        ajax: {
            "url": "searches",
            "dataSrc": "",
            "method": "GET",
            "destroy": true
        },

        columns: [
            { "data": "datetime" },
            { "data": "search" },

        ],

        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
        },
        lengthMenu: [
            [5, 10, 25, 50, -1],
            [5, 10, 25, 50, 'All']
        ],

        stateSave: true,
        "bDestroy": true

    })

    map.getSource().changed();

});