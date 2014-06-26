/**
 * Author : Han-sik Choi
 * Blog   : http://hans.or.kr
 * Date   : 2014-06-07
 * Description : 모든 controller를 포함할 controlers mudule 생성
 */

define([
    'angular'
], function (angular) {
    'use strict';

    // bootstrap.js에 설정한 App Name를 여기서 동일하게 설정
    var controllers = angular.module('yourApp.controllers', [

    ], function () {

    });

    return controllers;

});
