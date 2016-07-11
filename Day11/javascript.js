var app = angular.module('movieApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('#/', {
		controller: 'MainCtrl',
		templateUrl: 'templates/home.html'
	})
	routeProvider.when('/', {
		controller: 'MovieCtrl',
		templateUrl: 'templates/movies.html'

	})
});

$scope.movieArray = [];

app.controller('MainCtrl', function($scope, $http){
	var search = function(){
		$http({
		url: 'http://www.omdbapi.com/?',
		method: 'GET',
		params:{
			s: "yes";
		}
	}).then(function(response){
		console.log(response);
		$scope.movieArray = response.data.Search;
	})
	};

	
});

app.controller('MovieCtrl', function($scope, $http , $routeParams){
	$http({
		url:
		method: 'GET'
	}).then(function(response){
		console.log(response);
	})
});