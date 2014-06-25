// Code goes here

(function()
{


     var app=angular.module("githubviewer", []);

var hello=function($scope,$http)
{
  $scope.message="hello";
  
  var sucess=function(people)
  {
    $scope.user=people.data;
    console.log(people);
    console.log(user);
  };
  
  var error=function(reason)
  {
    $scope.error="Sorry there was an error";
  };
  
  $http.get("https://api.github.com/users/vdhulappanavar")
    .then(sucess, error);
    
    
};
   app.controller("hello"  , hello);
}());