var app = angular.module('movieApp', ['ngRoute']); 
var GIPPY_API_KEY = 'dc6zaTOxFJmzC';

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'MainCtrl',
		templateUrl: 'templates/home.html',
	})
	$routeProvider.when('/movie/:movieId', {
		controller: 'MovieCtrl',
		templateUrl: 'templates/movie.html',
	})
});

app.controller('MainCtrl', function($scope, $http) {
	$scope.search = function(){
		$http({
			url: "http://www.omdbapi.com/?",
			method: "GET",
			params: {
				s: $scope.searchTerm
			}
		}).then(function(response) {
			//console.log(response);
		$scope.movieArray = response.data.Search;
	})
	};
});

app.controller('MovieCtrl', function($scope, $http, $routeParams) {
	$http({
		url: "http://www.omdbapi.com/?",
		params: {
			i: $routeParams.movieId
		}, 

		method: "GET",
	}).then(function(response) {
		//console.log(response);
		$scope.movie = response.data;

		$http({
			url: "http://api.giphy.com/v1/gifs/search?",
			method: "GET",
			params: {
				q: $scope.movie.Plot,
				api_key: 'dc6zaTOxFJmzC', 
			}

		}).then(function(response){
			console.log(response);
			$scope.giphy = response.data.data;
		})

	})
});