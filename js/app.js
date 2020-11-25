

(function () {


    var app = angular.module('store', [ 'chart.js']);



    app.config(function ($httpProvider) {
console.log("OY")

    });

    app.controller('mainCtrl', ['$http', '$scope', '$timeout',  '$interval', '$window', function ($http, $scope, $timeout, $interval, $window) {

        $scope.chapelOpen = true;
        $scope.soundOpen = false;

        $scope.openLightsPage = function(){

            console.log("OPen")
            if(!$scope.chapelOpen){

                if( $scope.soundOpen){
                    $scope.chapelOpen = true;

                    $scope.soundOpen = false;

                }

            }else{

                if( !$scope.soundOpen){
                    $scope.chapelOpen = false;

                    $scope.soundOpen = true;
                    console.log("should run")

                }

            }

        }
    }]);


}());


