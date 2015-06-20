var app = angular.module("APP");

app.directive("tabs",function() {
    return {
        restrict: "E",
        transclude: true,
        controller: function($scope) {
            var panes = $scope.panes = [];

            $scope.select = function(pane) {
                angular.forEach(panes, function(pane) {
                    pane.selected = false;
                });
                pane.selected = true;
            }

            this.addPane = function(pane) {
                if(panes.length == 0) {
                    pane.selected = true;
                }
                panes.push(pane);
            };
        },
        template: '<div class="tabbable">' +
                        '<ul class="nav nav-tabs">' +
                            '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">' +
                                '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
                            '</li>' +
                        '</ul>' +
                        '<div ng-transclude>' +
                        '</div>' +
                  '</div>',
        replace: true
    };
});

app.directive("pane",function() {
    return{
        restrict: "E",
        transclude: true,
        scope: {title: '@'},
        require: "^tabs",
        link: function($scope,$element,$attris,tabsCtrl) {
            tabsCtrl.addPane($scope);
        },
        template: '<div class="tab-content">' +
                        '<div class="tab-pane" ng-class="{active:selected}" ng-transclude>' +
                        '</div>' +
                    '</div>',
        replace: true
    };
});

app.directive("emailValidation",function() {
    return {
        restrict:"A",
        require:"ngModel",
        link: function($scope,$element,$attris,ngModel) {
            var emailRegex = /^[0-9a-zA-Z_]+@[0-9a-zA-Z_]+\.[a-zA-Z._]+$/;
            var emailValidator = function(val) {
                var isValid = !ngModel.$isEmpty(val) && emailRegex.test(val);
                ngModel.$setValidity("email",isValid);
                return isValid ? val : undefined;
            };
            ngModel.$parsers.push(emailValidator);
        }
    };
});