var app = angular.module("APP");

app.service("UserService",['$rootScope',function($rootScope) {
    var service = {};
    service.users=[
        {"name":"alan","email":"alen@qq.com"},
        {"name":"ben","email":"ben@qq.com"},
        {"name":"carl","email":"carl@qq.com"}
    ];
    service.addUser = function(user) {
        service.users.push(user);
        $rootScope.$broadcast('users.update');
    }
    return service;
}]);