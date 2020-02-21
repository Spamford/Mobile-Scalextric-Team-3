(function () {
    'use strict';

    angular
        .module('app.onboardingState')
        .controller('onboardingCtrl', onboardingCtrl);

    onboardingCtrl.$inject = [];
    
    function onboardingCtrl(
        $state,
    ) {
        var vm = angular.extend(this, {});        

        
        vm.goToQueue = function(){            
            $state.go('queue');
        }             
    }
})();
