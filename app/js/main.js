/**
 * Author : Han-sik Choi
 * Blog   : http://hans.or.kr
 * Date   : 2014-06-07
 * Description : requireJS를 사용할 때 최초로 호출되는 파일로 requireJS의 설정을 한다.
 */

/**
 * require 설정
 */
require.config({

    // baseUrl은 JavaScript 파일들이 존재하는 base 위치를 지정한다.
    baseUrl:'js',

    // paths는 baseUrl에서 지정한 경로에 존재하지 않는 모듈을 찾기위해서 경로를 매핑해준다.
    // 보통 맨뒤 js확장자는 별도롤 붙이지 않으며, 맨 뒤에 js를 붙이지 않아도 자동으로 js를 붙여서 찾아준다.
    // 라이브러리 경로 선언을 위해서도 사용된다.
    paths: {
        'jquery': '../lib/jquery/jquery',
        'domReady': '../lib/domReady/domReady',
        'angular': '../lib/angular/angular',
        'uiRouter': '../lib/angular-ui/angular-ui-router'
    },

    // shim은 AMD를 지원하지 않는 외부 라이브러리를 모듈로 사용할 수 있게 한다.
    shim: {
        'angular': {
            deps:['jquery'],
            exports: 'angular'
        },
        'uiRouter':{
            deps: ['angular']
        }
    },

    // 부트스트랩 방법1
    // bootstrap.js 파일을 로드한다.
    deps: [
        './bootstrap'
    ]
});


// 부트스트랩 방법2
/**
 * requireJS를 활용하여 모듈 로드
 */
/*
/*
requirejs( [
        'require',
        'jquery',
        'angular',
        'app',
        'routes'
    ],
    function (require, $, angular) {
        'use strict';

        // 방법1 : require를 사용하는 방법
        // 페이지 로딩이 완료되면 실행
        require(['domReady!'], function (document) {
            // ng-app에 해당하는 Name를 여기서 설정
            // 앵귤러 부트스트래핑을 수행
            angular.bootstrap(document, ['yourApp']);
        });

        // 방법2 : jquery를 사용하는 방법
        // 페이지 로딩이 완료되면 실행
        //    $(document).ready(function () {
        //        // 앵귤러 부트스트래핑을 수행
        //        angular.bootstrap(document, ['yourApp']);
        //
        //    });

    }
);
*/