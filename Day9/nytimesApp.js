var app = angular.module("nytimesApp", []);

var NY_TIMES_API_KEY = "823ae4e312c44551a8d8b391c5f77822";

app.controller("MainCtrl", function($scope, $http){
	$scope.search = function(){
		$http({
		url:  "https://api.nytimes.com/svc/search/v2/articlesearch.json",
		method: "GET",
		params: {
			"api-key": NY_TIMES_API_KEY,
			'q': $scope.searchTerm
		}
		}).then(function(response){
			$scope.articles= response.data.response.docs;
			console.log(response.data.response.docs);
		});
	};

	$scope.searchArticles = function(){
		$http({
		url:  "https://api.nytimes.com/svc/topstories/v1/home.json",
		method: "GET",
		params: {
			"api-key": NY_TIMES_API_KEY,
		}
	}).then(function(response){
		$scope.articles= response.data.results;
	});
	};

	
});