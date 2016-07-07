var app = angular.module("MyGroceryList", []); 

app.controller("GroceriesCtrl", function($scope) {
  $scope.groceryList = [];
  
  $scope.addListItem = function() {
  	var count = 0;
  	//search grocery list to check if item is present,  if (present) {add to quantity}
  	for(var i in $scope.groceryList){
  		if($scope.groceryList[i].name === $scope.itemName){
  			$scope.groceryList[i].quantity += parseInt($scope.itemQuantity);
  			count++;
  		}
  	}

  	//if (no instance of item found) create new item , set quantity
  	if(count === 0){
  		var newItem = {
		name: $scope.itemName,
		quantity: parseInt($scope.itemQuantity),
		};
		$scope.groceryList.push(newItem);
  	}
    
    $scope.itemName = "";
    $scope.itemQuantity = "";
  };

  $scope.increaseQuantity = function(item){
  	item.quantity = item.quantity + 1;
  };

  $scope.decreaseQuantity = function(item){
  	if(item.quantity > 0){
  		item.quantity = item.quantity -1;
  	}
  };

});