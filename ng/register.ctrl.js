angular.module('app')
    .controller('RegisterCtrl', function ($scope,UserSvc){
        $scope.CreateUser=function(username,password){
            UserSvc.createUser(username,password)   
        }
    })