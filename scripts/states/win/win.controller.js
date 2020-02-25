(function () {

    'use strict';

    angular
    .module('app.winState')
    .controller('winCtrl', winCtrl);

    winCtrl.$inject = [
        '$rootScope',
        '$state',
        'mqttService',
        'brokerDetails'
    ];

    function winCtrl() {
        var vm = angular.extend(this, {});
        return vm;
    }

})();