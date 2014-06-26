/**
 * Author : Han-sik Choi
 * Blog   : http://hans.or.kr
 * Date   : 2014-06-07
 * Description : Controller선언
 */

define([
    './controllers'
], function (controllers) {
    'use strict';

    controllers.controller('directiveCtrl', ['$scope', function ($scope) {
        // youtube URL의 마지막 Value
        $scope.code = 'fVXEGlT9UBU';
    }]);
});

