(function() {
    
    var app = angular.module('datatableApp', ['ngRoute','ngRows']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'DatatableController',
                templateUrl: 'app/views/datatable.html'
            })
           
            .otherwise( { redirectTo: '/' } );
    });
    
}());