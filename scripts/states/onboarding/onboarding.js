(function () {
    'use strict';


        angular.module('app.onboardingState', [])
        
})();

        function nickname() {
            var name = document.getElementById("name").value;
            sessionStorage.setItem("nickname", name);
        }

