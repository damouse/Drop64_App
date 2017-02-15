angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

/*
  Controller does one main thing: convert button touches to keyboard presses
  based on mupen64plus' input scheme, recorded below. These inputs are sent to the display through the server

  Input buttons, associated keys, and keyCodes
    Analog stick        Arrow keys      38, 40, 37, 39 (U/D/L/R)
    B                   F               70
    A                   G               71
    Z                   Z               90
    L/R                 X,C             88, 67
    C buttons U/D/L/R   I,K,J,L         73, 75, 74, 76
    Start               Enter           13
    DPAD U/D/L/R        W,S,A,D         87, 83, 65, 68
*/
.controller('RootController', function($scope) {
  // Touch started
  var socket = io.connect('localhost:3000');

  $scope.press = function(b, k) {
    socket.emit("controller", { event: 'keydown', button: b, code: k });
  };

  // Touch stopped
  $scope.release = function(b, k) {
    socket.emit("controller", { event: 'keyup', button: b, code: k });
  };


  // socket.on('connect', function() {
  //   console.log("Connected");

  //   setInterval(function() {
  //     socket.emit("controller", "Enter");
  //   }, 1000);
  // });
})



/*
Todo: 
  - Have controller indicate connection

*/
