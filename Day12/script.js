var app = angular.module("chommiesApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'FeedCtrl',
		templateUrl: 'templates/home.html',
	}),
	$routeProvider.when("/me", {
		controller: "MeCtrl", 
		templateUrl:"templates/me.html",
	})
});

app.controller("FeedCtrl", function($scope, $http, $route){
	$http({
		url: "http://ixchommies.herokuapp.com/props",
		method:"GET",
		params: {
			"token":"1ac20a3216f1f25c22500cc862ca4247"
		}

	}).then(function(response){
		$scope.props = response.data;
		console.log(response);
	})

	$http({
		url: "http://ixchommies.herokuapp.com/brus",
		method:"GET",
		params: {
			token:"1ac20a3216f1f25c22500cc862ca4247"
		}

	}).then(function(response){
		$scope.brus = response.data;
		console.log(response);
	})

	$scope.sendProps = function(){
		console.log($scope.newProp);
		$http({
		url: "http://ixchommies.herokuapp.com/props",
		method:"POST",
		params: {
			token:"1ac20a3216f1f25c22500cc862ca4247"
		},
		data: {
			for: $scope.newProp.reciever.id,
			props: $scope.newProp.text,
			},

		}).then(function(response){
			console.log(response.data);
			$scope.newProp = {}
			
		}).catch(function(response) {
      		$scope.error = response.data.message;
    	});

	};
});

app.controller("MeCtrl", function($http, $scope, $route){
	var url = "http://ixchommies.herokuapp.com/props/me";

  	$http({
    	method: "GET",
    	url: url + "",
    	params: { token: "1ac20a3216f1f25c22500cc862ca4247" }
  	}).then(function(response) {
    	$scope.me = response.data;
    	console.log($scope.me);
    	console.log(response.data)
  	});
});