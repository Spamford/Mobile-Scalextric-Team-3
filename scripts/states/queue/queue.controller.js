(function () {

    'use strict';

    angular
    .module('app.queueState')
    .controller('queueCtrl', queueCtrl);

    queueCtrl.$inject = [];

    function queueCtrl() {

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

        setInterval(weaponBox, 5000)


        return vm;
    }

})();

