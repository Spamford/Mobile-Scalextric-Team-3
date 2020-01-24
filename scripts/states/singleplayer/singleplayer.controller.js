(function () {

  'use strict';

 var app = angular.module('app.singleplayerState', []);
  
  app.controller('singleplayerCtrl', singleplayerCtrl);

  singleplayerCtrl.$inject = [
    '$state'
  ];

  function singleplayerCtrl($state) {
    $state.go("singleplayer");
  }

})();
