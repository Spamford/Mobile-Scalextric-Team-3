(function () {

    'use strict';

    angular
    .module('app.raceState')
    .controller('raceCtrl', raceCtrl);

    raceCtrl.$inject = [];

    function raceCtrl() {
        var vm = angular.extend(this, {});

        function weaponBox() {

            var myArray = [
            "Oil Slick",
            "Smart Bomb",
            "Puncture"
            ];
        
            var randomWeapon = myArray[Math.floor(Math.random()*myArray.length)]; 
            
            document.getElementById('weapon').innerHTML = randomWeapon;
        
        }

        setInterval(weaponBox, 3000)


        return vm;
    
    }
})();
