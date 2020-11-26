

(function () {


    var app = angular.module('store', [ 'chart.js']);



    app.config(function ($httpProvider) {
console.log("OY")

    });

    app.controller('mainCtrl', ['$http', '$scope', '$timeout',  '$interval', '$window', function ($http, $scope, $timeout, $interval, $window) {

        $scope.chapelOpen = true;
        $scope.soundOpen = false;
        $scope.lightsPageOpen = false;
        $scope.zoomPageOpen = false;

        $scope.audio = new Audio('../audio/ui_tap-variant-01.wav')


        $scope.closeZoomPage = function(){
            $scope.audio.play()

            if(!$scope.zoomPageOpen){

                $scope.zoomPageOpen = true;
            }else{
$scope.zoomPageOpen = false;

            }
        }
        $scope.openZoomPage = function(){


        }
        $scope.openLightsPage = function(){

            console.log("OPen")
            $scope.audio.play()
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


