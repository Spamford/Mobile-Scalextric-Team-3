(function () {
    'use strict';

    angular
        .module('app.onboardingState', [
            'ui.router'
        ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('onboarding', {
                    cache: false,
                    url: '/onboarding',
                    templateUrl: 'scripts/states/onboarding/onboarding.html',
                    controller: 'onboardingCtrl as vm'
                })
            $urlRouterProvider.otherwise('/onboarding');
        });
})();



    function name() {
    
    var name = document.getElementById('name').value;
};
