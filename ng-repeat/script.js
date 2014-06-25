// Code goes here

(function()
{
   var app=angular.module("hello", [])
   
  var maincontroller=function($scope,$http)
  {
    var sucess=function(person)
    {
      $scope.user=person.data;
      $http.get($scope.user.repos_url)
        .then(sucess1 , error);
      
      
    };
    
    var sucess1=function(person)
    {
      $scope.repos=person.data
    };
    
    var error=function(reason)
    {
       $scope.error="sorry there was an error";
    };
    
    $scope.search=function(username){
    $http.get("https://api.github.com/users/"+username)
      .then(sucess,error)
    }
    $scope.reposortorder=""
  };
  app.controller("maincontroller", maincontroller);
}());