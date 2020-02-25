(function () {
    'use strict';

    angular
        .module('app.onboardingState')
        .controller('onboardingCtrl', onboardingCtrl);

    onboardingCtrl.$inject = [
        '$rootScope',
        '$state',
        'mqttService',
        'brokerDetails'
    ];
    
    function onboardingCtrl($rootScope, $state, mqttService, brokerDetails) {
        var vm = this;

        vm.channels = Array.apply(null, {
            length: 2
        }).map(Function.call, Number);
        vm.channel = 0;
        
        console.log(brokerDetails);
        
    vm.go = go;

    function go(valid) {
        if (!valid) {
            alert("Invalid Details")
        } else {
            mqttService.initialize(brokerDetails.HOST, brokerDetails.PORT);
            mqttService.onConnectionLost(function () {
                console.error("connection lost");
            });


            var mqttOptions = {};

            if (brokerDetails.SSL) { mqttOptions.useSSL = brokerDetails.SSL; }
            if (brokerDetails.USERNAME) {
                mqttOptions.userName = brokerDetails.USERNAME;
                if(brokerDetails.PASSWORD){
                    mqttOptions.password = brokerDetails.PASSWORD;
                }
            }
            mqttService.connect(function (success, error) {
                if (success) {
                    $state.transitionTo('casual',
                        {
                            channel: vm.channel,
                        });
                } else if (error) {
                    console.log(error)
                    alert(`Could Not Connect to ${brokerDetails.HOST}:${brokerDetails.PORT}`)
                }

            },mqttOptions)
        }
    }

        
        vm.goToQueue = function(){            
            $state.go('queue');
        }             
    }
})();
