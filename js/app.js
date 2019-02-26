'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),            
            new Route('getCars', 'getCars.html'),
            new Route('postCars', 'postCars.html'),
            new Route('idGetCar', 'idGetCar.html'),
            new Route('idPutCar', 'idPutCar.html'),
            new Route('deleteCar', 'deleteCar.html')
        ]);
    }
    init();
}());
