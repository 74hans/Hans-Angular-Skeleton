/**
 * Author : Han-sik Choi
 * Blog   : http://hans.or.kr
 * Date   : 2014-06-07
 * Description : service factory 선언
 */
define(['./services'], function (services) {
    'use strict';
    services.factory('yourService1', function(){
        return {
            sayHello: function(text){
                return "Factory says \"Hello " + text + "\"";
            },
            sayGoodbye: function(text){
                return "Factory says \"Goodbye " + text + "\"";
            }
        }
    });
});
