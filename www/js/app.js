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

.controller('RootController', function($scope) {
  var socket = io.connect('localhost:3000');

  socket.on('connect', function() {
    console.log("Connected");
    setInterval(function() {
      socket.emit("controller", "Controller");
    }, 1000);
  });

})
