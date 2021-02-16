

(function () {


    var app = angular.module('store', [ 'chart.js','appRoutes']);



    app.config(function ($httpProvider) {

    });

    app.controller('mainCtrl', ['$http', '$scope', '$timeout',  '$interval', '$window', function ($http, $scope, $timeout, $interval, $window) {

        $scope.chapelOpen = true;
        $scope.soundOpen = false;
        $scope.shopOpen = false;
        $scope.lightsPageOpen = false;
        $scope.contactPageOpen = false;
        $scope.zoomPageOpen = false;
        $scope.volumeOn = false;
        $scope.zoomPageOpen = false;

        $scope.audio = new Audio('../audio/ui_tap-variant-01.wav')

        $scope.openShopPage = function(){

            $scope.bgaudio.play()

        }
        $scope.openShopPage()

        $scope.toppa = function(){

            console.log("oooooo")
            $( 'html, body' ).animate( { scrollTop: 0 }, 500 );

        }
        $scope.toggleMusic = function(){
            console.log('clicked')

            if(!$scope.volumeOn){

                $scope.volumeOn = true;
                $scope.bgaudio.play()

            }else{

                $scope.volumeOn = false;
            }
        }

        $scope.closeZoomPage = function(){
            //$scope.audio.play()

            if(!$scope.zoomPageOpen){

                $scope.zoomPageOpen = true;
            }else{

                $scope.zoomPageOpen = false;

            }
        }

        $scope.contactPageOpen  = false;
        $scope.soundPageOpen    =   false;
        $scope.lightPageOpen    = false;
        $scope.homePageOpen     = true;

        $scope.openContactPage     = function(){

                if(!$scope.contactPageOpen){

                    $scope.contactPageOpen  = true;
                    $scope.homePageOpen = false;
                    $scope.soundOpen        = false;
                    $scope.soundPageOpen = false;
                    $scope.lightsPageOpen    = false;

                }

        }
        
        $scope.openShopPage = function(){


            $scope.audio.play()


                if( !$scope.shopOpen){

                    $scope.homePageOpen = false;
                    $scope.soundOpen = false;
                    $scope.shopOpen = true;

                    console.log("should run")

                }

        }

        $scope.openSoundPage = function(){


            //$scope.audio.play()
            console.log('clicked')
            if(!$scope.soundOpen){

                    $scope.soundOpen = true;
                    $scope.homePageOpen = false;
                    $scope.contactPageOpen = false;
                    $scope.lightsPageOpen = false;


            }

        }

        $scope.openLightsPage = function(){

          //  $scope.audio.play()
            if(!$scope.lightsPageOpen){

               $scope.lightsPageOpen = true;
                $scope.soundOpen = false;
                $scope.contactPageOpen = false;
                $scope.homePageOpen = false;

            }

        }

        $scope.openHomePage = function(){


            if(!$scope.homePageOpen){

                $scope.homePageOpen = true;
                $scope.contactPageOpen = false;
                $scope.soundOpen = false;
                $scope.lightsPageOpen = false;

            }

        }


    }]);


}());


