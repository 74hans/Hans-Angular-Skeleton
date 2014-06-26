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

    // 사용할 서비스를 주입
    controllers.controller('HelloCtrl', ['$scope', function ($scope) {
        // 여기에 controller의 내용을 구현
        $scope.helloWorld = "Hello World";
    }]);
});

