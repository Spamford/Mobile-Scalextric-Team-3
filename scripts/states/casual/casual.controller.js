(function () {

    'use strict';

    angular
    .module('app.casualState')
    .controller('casualCtrl', casualCtrl);

    casualCtrl.$inject = [
        '$scope',
        '$state',
        '$stateParams',
        'mqttService',
        'brokerDetails'
    ];

    function casualCtrl($scope, $state, $stateParams, mqttService, brokerDetails) {
        var vm = this;

        var changed = false;
    
        var channel = $stateParams.channel;
    
        //Car control starts here
        const DEFAULT_THROTTLE = 0;
    
        vm.throttle = DEFAULT_THROTTLE;
        vm.actualThrottle = DEFAULT_THROTTLE;
        vm.resources = [];
    
        vm.targetChannels = Array.apply(null, {
            length: 2
        }).map(Function.call, Number);;
    
        vm.targetChannels = vm.targetChannels.filter(targetChannel => targetChannel !== channel );
        console.log(vm.targetChannels);
    
        vm.targetChannel = -1;
    
        vm.throttleError = false;
    
        vm.stop = stop;
        vm.fireSpecialWeapon = fireSpecialWeapon;
    
    
    
    
        var throttleTopic = `${brokerDetails.UUID}/control/${channel}/throttle`;
        var getResourcesTopic = `${brokerDetails.UUID}/resources`;
        var resourceStateTopic = `${brokerDetails.UUID}/control/{channel}/{resourceId}/state`;
    
        mqttService.subscribe(throttleTopic);
    
        mqttService.subscribe(getResourcesTopic);
    
        function stop() {
    
            var payload = {
                set : 0
            }
            mqttService.publish(throttleTopic, JSON.stringify(payload));
            
            mqttService.disconnect();
            $state.transitionTo('onboarding', {});
        }
    
        function fireSpecialWeapon(resourceId) {
            let payload = {
                state: "requested",
                target: vm.targetChannel
            };
            mqttService.publish(resourceStateTopic.replace(/\{resourceId\}/, resourceId).replace(/\{channel\}/, channel), JSON.stringify(payload));
        }
    
        window.onhashchange = function () {
            if (changed) {
                console.log('changed');
                stop();
            } else {
                changed = true;
            }
        }
    
        mqttService.onMessageArrived(function (message) {
    
            console.log(message);
    
            if (message.topic === throttleTopic) {
                var throttle  = JSON.parse(message.payloadString);
    
                if(throttle.hasOwnProperty("throttle")){
                    vm.actualThrottle = throttle.throttle;
                }
            } else if (message.topic === getResourcesTopic) {
                vm.resources = JSON.parse(message.payloadString);
                vm.resources.forEach(resource => {
    
                    mqttService.subscribe(resourceStateTopic.replace(/\{resourceId\}/, resource.id));
                });
                $scope.$apply();
            }
    
            if (vm.resources !== undefined) {
                vm.resources.forEach(resource => {
                    if (message.topic === resourceStateTopic.replace(/\{resourceId\}/, resource.id)) {
                        console.log(message);
                    }
                })
            }
    
        });
    
        $scope.$watch("casual.throttle", function (newThrottle, oldThrottle) {
            if (newThrottle != oldThrottle) {
                var payload = {
                    set : newThrottle
                }
                mqttService.publish(throttleTopic, JSON.stringify(payload));
            }
        })
    
    }
    

})();
