// Code goes here

var main=function($scope,$http) {
  $scope.message="hello";
  
  
  var driverCallback=function(response){
    
  
  console.log(response);  
    console.log(response.data.MRData);
    
  $scope.driversListStatic = [
      {
          Driver: {
              givenName: 'Sebastian',
              familyName: 'Vettel'
          },
          points: 322,
          nationality: "German",
          Constructors: [
              {name: "Red Bull"}
          ]
      },
      {
          Driver: {
          givenName: 'Fernando',
              familyName: 'Alonso'
          },
          points: 207,
          nationality: "Spanish",
          Constructors: [
              {name: "Ferrari"}
          ]
      }
    ];
    
    $scope.driversListDynamic = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  };
  
   $http({
     method:"JSONP",
      url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      }).then(driverCallback);
   
};