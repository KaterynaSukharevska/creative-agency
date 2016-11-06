(function(){
    'use strict';

    angular.module("creativeAgency").directive('projectDirective', function () {
        return {
            restrict : 'E',
            templateUrl : 'app/shared/projectDirective/projectDirective.html',
            scope : {
                photoName : '@',
                photographerName : '@'
            }
        };
    })
})();
