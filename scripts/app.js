angular.module('myApp', [
    'ui.router',
    'app.queueState',
    'app.onboardingState',
    'app.raceState',
    'app.singleplayerState',
    'app.winState',
    'app.loseState',
    'app.casualState',
    'app.challengeState',
]);

angular.module('myApp').config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
    // sets default state
    $urlRouterProvider.otherwise("/onboarding");
    // sets up all the other states of the app
    $stateProvider
        .state('onboarding', {
            url: '/onboarding',
            Url: '/onboarding?uuid&brokerHost&brokerPort&username&password&ssl',
            templateUrl : 'scripts/states/onboarding/onboarding.html',
            controller: "onboardingCtrl as vm",
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
            controller: "raceCtrl as vm",
            cache: false
    })
        .state('casual', {
            url: '/casual',
            templateUrl : 'scripts/states/casual/casual.html',
            controller: "casualCtrl as vm",
            cache: false
    })
        .state('singleplayer', {
            url: '/singleplayer',
            templateUrl : 'scripts/states/singleplayer/singleplayer.html',
            controller: "singleplayerCtrl as vm",
            cache: false
    })
        .state('challenge', {
            url: '/challenge',
            templateUrl : 'scripts/states/challenge/challenge.html',
            controller: "challengeCtrl as vm",
            cache: false
    })
        .state('win', {
            url: '/win',
            templateUrl : 'scripts/states/win/win.html',
            controller: "winCtrl as vm",
            cache: false
    })
        .state('lose', {
            url: '/lose',
            templateUrl : 'scripts/states/lose/lose.html',
            controller: "loseCtrl as vm",
            cache: false
    })
}]);

angular.module("myApp").run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
