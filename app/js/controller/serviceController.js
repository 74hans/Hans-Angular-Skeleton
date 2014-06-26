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
    controllers.controller('ServiceCtrl', ['$scope','yourService1','yourService2', function ($scope, yourService1, yourService2) {

        // 서비스를 이용한 호출
        $scope.service1 = yourService1.sayHello("Hans");
        $scope.service2 = yourService2.sayGoodbye("Hans");
    }]);
});

