(function () {

    'use strict';

    var app = angular.module('app.singleplayerState');

    app.controller('singleplayerCtrl', singleplayerCtrl);

    singleplayerCtrl.$inject = [ '$scope' ];

    function singleplayerCtrl() {
        var vm = angular.extend(this, {});
        return vm;
    }

})();
