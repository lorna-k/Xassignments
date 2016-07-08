var app = angular.module("MyGroceryList", []); 

app.controller("GroceriesCtrl", function($scope) {
  $scope.groceryList = [];
  var count = 0;
  //var isPresent = false;
  
  $scope.addListItem = function() {
  	//search grocery list to check if item is present,  if (present) {add to quantity}
  	for(var i in $scope.groceryList){
  		if($scope.groceryList[i].name.toLowerCase() === $scope.itemName.toLowerCase()){
  			$scope.groceryList[i].quantity += parseInt($scope.itemQuantity);
  			count++;
  			//isPresent = true;
  		}
  	}

  	//if (no instance of item found) create new item , set quantity
  	if(count === 0){
  		var newItem = {
		name: $scope.itemName,
		quantity: parseInt($scope.itemQuantity),
		"isEditing": false
		};
		$scope.groceryList.push(newItem);
  	}
    
    $scope.itemName = "";
    $scope.itemQuantity = "";
  };

  $scope.increaseQuantity = function(item){
  	item.quantity ++;
  };

  $scope.decreaseQuantity = function(item){
  	if(item.quantity > 0){
  		item.quantity --;
  	}
  };

  $scope.deleteItem = function(i){
  	$scope.groceryList.splice(i, 1);
  };

  $scope.clearCart = function(){
  	$scope.groceryList = [];
  };

});