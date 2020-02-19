(function () {

    'use strict';

    var app = angular.module('app.queueState', ['ui.router']);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('queue', {
            url: '/queue',
            templateUrl: 'scripts/states/about/about.html',
            controller: 'queueCtrl as vm',
            cache: false
        })
        $urlRouterProvider.otherwise('/onboarding');
    });

})();

function weaponBox() {



var myArray = [
"Oil Slick",
"Smart Bomb",
"Puncture"
];

var randomWeapon = myArray[Math.floor(Math.random()*myArray.length)]; 
  
document.getElementById('weapon').innerHTML = randomWeapon;


setInterval(weaponBox, 5000)

}

