/**
 * Author : Han-sik Choi
 * Blog   : http://hans.or.kr
 * Date   : 2014-06-07
 * Description : Directive 선언
 */
define(['./directives'], function (directives) {
    'use strict';
    directives.directive('yourDirective1',  ['yourDirective1', function (yourDirective1) {
        return function (scope, element) {

        };
    }]);
});