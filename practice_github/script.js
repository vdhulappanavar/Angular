// Code goes here

// Code goes here

var main=function($scope,$http) {
  $scope.message="hello";
  
  
  var esCallback=function(response){

    
    $scope.github = response.data;
	
	console.log(github);
  };
   var search=function(username)
   {
   $http.get("https://api.github.com/users/" + username).then(esCallback);
  };
   
};