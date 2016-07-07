var app = angular.module("CalculatorApp", []);
app.controller("CalculatorCtrl", function($scope){
	$scope.multiply = function() {
		var numX = parseInt($scope.x);
		var numY = parseInt($scope.y);
		$scope.result = numX * numY; 
	}
	$scope.doAdd = function() {
		var numX = parseInt($scope.x);
		var numY = parseInt($scope.y);
		$scope.result = numX + numY; 
	}
});