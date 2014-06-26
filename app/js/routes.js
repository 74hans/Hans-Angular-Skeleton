/**
 * Author : Han-sik Choi
 * Blog   : http://hans.or.kr
 * Date   : 2014-06-07
 * Description : route 설정.
 * Menu Click에 따라서 화면이 바뀌는 경우에 여기서 선언해서 화면과 Controller를 지정해서 사용한다.
 * 다만 WebApp의 경우 단일 페이지에서 처리가 발생하는 경우가 많을 것으므로, 이 파일은 별로 사용되지 않을 수 있다.
 */

define(['./app'], function(app) {
    'use strict';
    return app.config(function($stateProvider, $urlRouterProvider) {

        // 무조건 처음에 호출하고 싶은 것이 있으면 여기서 호출
        // $urlRouterProvider.otherwise('/YouApp');

        
        $stateProvider.state('hello',{
            url: '/hello',
            templateUrl: 'partial/helloWorld.html',
            controller:'HelloCtrl'
        })
        .state('filter',{
            url: '/filter',
            templateUrl: 'partial/filter.html',
            controller: 'FilterCtrl'
        })
        .state('directive',{
            url: '/directive',
            templateUrl: 'partial/directive.html',
            controller: 'directiveCtrl'
        })
        .state('service',{
            url: '/service',
            templateUrl: 'partial/service.html',
            controller: 'ServiceCtrl'
        })
        .state('yourCtrl1',{
            url: '/yourCtrl1',
            templateUrl: 'partial/yourPartial1.html',
            controller: 'YoutubeCtrl1'
        })
        .state('yourCtrl2',{
            url: '/yourCtrl2',
            templateUrl: 'partial/yourPartial2.html',
            controller: 'YoutubeCtrl2'
        })
        .state("otherwise", {
            url: "*path",
            templateUrl: 'partial/helloWorld.html',
            controller:'HelloCtrl'
        });

    })
});