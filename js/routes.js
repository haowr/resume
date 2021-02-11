(function () {

   console.log("routes.js loaded");

    var app = angular.module("appRoutes", ['ngRoute']);

    app.config(function ($routeProvider, $locationProvider) {
        //Only providers in config phase... no $rootScope or any other instances...


        $routeProvider

        .when('/shinebright', {
            templateUrl: '../shinebright.html',
            controller: 'mainCtrl',
            name: "SHINE BRIGHT COACHING | HOME",
            resolve: {
                init: function ($route) {
                    //console.log("index")
                }
            }
        })
            .when('/rose', {
                templateUrl: '../rose.html',
                controller: 'mainCtrl',
                name: "SHINE BRIGHT COACHING | HOME",
                resolve: {
                    init: function ($route) {
                        //console.log("index")
                    }
                }
            })
            .when('/qlh', {
                templateUrl: '../qlh.html',
                controller: 'mainCtrl',
                name: "SHINE BRIGHT COACHING | HOME",
                resolve: {
                    init: function ($route) {
                        //console.log("index")
                    }
                }
            })
            .when('/cryptowatch', {
                templateUrl: '../cryptowatch.html',
                controller: 'mainCtrl',
                name: "SHINE BRIGHT COACHING | HOME",
                resolve: {
                    init: function ($route) {
                        //console.log("index")
                    }
                }
            })
            .when('/', {
                templateUrl: '../index.html',
                name: "SHINE BRIGHT COACHING | FORMS",
                controller: "mainCtrl",
                controllerAs: 'main',
                resolve: {
                    init: function ($route) {
                        console.log("ohh")
                    }
                }
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requiredBase: false
            //now no more # required before routes
        })



    })

    app.run(['$rootScope', function ($rootScope, $routeUpdate, $routeParams) {
        
                $rootScope.$on('$locationChangeStart', function (event, next, current) {
                    //console.log(Auth.isLoggedIn());
                   console.log("Oy")
                  
                    //if($routeParams.name == )
        
                });
        
        
    }]);

}())