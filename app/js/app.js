/**
 * Author : Han-sik Choi
 * Blog   : http://hans.or.kr
 * Date   : 2014-06-07
 * Description : 최상위 module를 선언하고, app 에 사용되는 모듈을 로드한다.
 * define에는 주로 각 모듈별 top level에 해당하는 파일들을 선언한다.
 */

define([
    'angular',
    'uiRouter',
    './controller/index',
    './directive/index',
    './filter/index',
    './service/index'

], function (angular) {
    'use strict';

    // bootstrap.js에 설정한 App Name를 여기서 동일하게 설정
    var yourApp = angular.module('yourApp', [
        'yourApp.services',
        'yourApp.controllers',
        'yourApp.filters',
        'yourApp.directives',
        'ui.router'
        ], function () {
            // 여기서는 필요한 설정들을 진행.
        }
    );

    // yourApp에 사용할 전체 controller를 설정.
    // 지금은 불필요하므로 remark.
//    yourApp.controller('YourAppCtrl', function($scope) {
//    });

    return yourApp;

});
