var app = angular.module("lightBoxApp", []);

app.controller("LightBoxCtrl", function($scope){
	$scope.showNames = function(){
		var name = $scope.firstName;
		var last = $scope.lastName;
		console.log(name, last);
	}
	$scope.showBack = false;

	$scope.showBackground = function(){
		$scope.showBack = true;
	}

	$scope.remove = function(){
		$scope.showBack = false;
	}
});