/**
 * Author : Han-sik Choi
 * Blog   : http://hans.or.kr
 * Date   : 2014-06-07
 * Description : youtube Directive 선언
 */
define(['./directives'], function (directives) {
    'use strict';
    directives.directive('youtube', function($sce) {
        return {
            restrict: 'EA',
            scope: { code:'=' },
            replace: true,
            template: '<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
            link: function (scope) {
                scope.$watch('code', function (newVal) {
                    if (newVal) {
                        scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
                    }
                });
            }
        };
    });
});
