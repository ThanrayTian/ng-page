var app = angular.module("APP");

app.controller('DefaultCtrl',function($scope) {
    //alert("hi1");
});

app.controller('FormCtrl',function($scope,$http,$log,UserService) {

    $scope.addUser = function(username, email) {
        var user = {"name":username,"email":email};
        UserService.addUser(user);
//        $http({
//           url: "/test/myget",
//            method: "post",
//            data: $.param(user),
//            headers: {"Content-type":"application/x-www-form-urlencoded"}
//        }).then(function(data) {
//            $log.debug(data);
//        });
    };

    $scope.submitForm = function(isValid) {
        if(!isValid) {
            alert("表单验证失败");
        }
    };

});

app.controller('SearchCtrl',function($scope,UserService) {
    $scope.users = UserService.users;
    $scope.$on("users.update",function(event) {
        $scope.users = UserService.users;
        $scope.apply();
    });
});

app.controller('TabCtrl',function($scope) {
    //alert("hi2");
});
