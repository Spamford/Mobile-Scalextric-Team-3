angular.module('myApp', [
    'ui.router',
    'app.queueState',
    'app.onboardingState',
]);

angular.module('myApp').config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
    // sets default state
    $urlRouterProvider.otherwise("/onboarding");
    // sets up all the other states of the app
    $stateProvider
        .state('onboarding', {
            url: '/onboarding',
            templateUrl : 'scripts/states/onboarding/onboarding.html',
            cache: false
    })
        .state('queue', {
            url: '/queue',
            templateUrl : 'scripts/states/queue/queue.html',
            controller: "queueCtrl as vm",
            cache: false
    })
        .state('race', {
            url: '/race',
            templateUrl : 'scripts/states/race/race.html',
            cache: false
    })
        .state('casual', {
            url: '/casual',
            templateUrl : 'scripts/states/casual/casual.html',
            cache: false
    })
        .state('singleplayer', {
            url: '/singleplayer',
            templateUrl : 'scripts/states/singleplayer/singleplayer.html',
            cache: false
    })
        .state('challenge', {
            url: '/challenge',
            templateUrl : 'scripts/states/challenge/challenge.html',
            cache: false
    })
        .state('win', {
            url: '/win',
            templateUrl : 'scripts/states/win/win.html',
            cache: false
    })
        .state('lose', {
            url: '/lose',
            templateUrl : 'scripts/states/lose/lose.html',
            cache: false
    })
}]);

angular.module("myApp").run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
