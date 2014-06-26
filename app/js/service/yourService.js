/**
 * Author : Han-sik Choi
 * Blog   : http://hans.or.kr
 * Date   : 2014-06-07
 * Description : service 선언
 */
define(['./services'], function (services) {
    'use strict';

    services.service('yourService2', function(){
        this.sayHello= function(text){
            return "Service says \"Hello " + text + "\"";
        };

        this.sayGoodbye = function(text){
            return "Service says \"Goodbye " + text + "\"";
        };
    });
});
