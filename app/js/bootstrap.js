/**
 * Author : Han-sik Choi
 * Blog   : http://hans.or.kr
 * Date   : 2014-06-07
 * Description : angular bootstrap하는 파일
 * 이렇게 여기서 수동으로 bootstrap를 설정하면 별도로 index의 ng-app attribute는 설정이 불필요.
 * 보통은 한개의 app을 bootstrap하지만, 이러한 방식으로 수동으로 설정하면 여러개의 app을 bootstrap할 수 있다.
 */

/**
 * define에 선언된 것들이 먼저 load되고, function이 실행된다.
 */
define([
    'require',
    'jquery',
    'angular',
    'app',
    'routes'
], function (require, $, angular) {
    'use strict';

    // 방법1 : require를 사용하는 방법
    // 페이지 로딩이 완료되면 실행
    require(['domReady!'], function (document) {
        // ng-app에 해당하는 자신의 App Name을 설정
        // 앵귤러 부트스트래핑을 수행
        angular.bootstrap(document, ['yourApp']);
    });

    // 방법2 : jquery를 사용하는 방법
    // 페이지 로딩이 완료되면 실행
//    $(document).ready(function () {
//        // ng-app에 해당하는 자신의 App Name을 설정
//        // 앵귤러 부트스트래핑을 수행
//        angular.bootstrap(document, ['yourApp']);
//    });
});
