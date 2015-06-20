var app=angular.module("APP",['ngRoute']);

app.config(["$routeProvider",function($routeProvider) {
    $routeProvider
        .when("/default",{
            templateUrl:"../html/default.html",
            controller: "DefaultCtrl"
        })
        .when("/form",{
            templateUrl:"../html/form.html",
            controller: "FormCtrl"
        })
        .when("/search",{
            templateUrl:"../html/search.html",
            controller: "SearchCtrl"
        })
        .when("/tab",{
            templateUrl:"../html/tab.html",
            controller: "TabCtrl"
        })
        .otherwise({
            redirectTo:"/default"
        });
}]);

//    app.controller("MainCtrl",function($http){
//       $http.post("/html/spa.html",{"field1":"valu1","feild2":"value1"});
//    });
