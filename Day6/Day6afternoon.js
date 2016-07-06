// Return 'yes' if the sentence contains only unique characters, 'no' otherwise
function allUniqueCharacters(sentence) {
	var characters = sentence.toLowerCase().split("").sort().join("").trim();
	var isUnique = true;
	for(var i = 0; i < characters.length ; i++){
		for(var j = i + 1 ; j < characters.length - 1; j++){
			if(characters[i] == characters[j]){
  				isUnique = false;
  			}
		}	
	}

	if(isUnique === true){
		return "yes";
	}
	else
		return "no"; 
}

// One number 1-10 is missing. Return it!
function missingNum(numbers) {
	var numSorted = numbers.sort(function(a,b) { return a - b; });
	for(var i = 0; i <11 ; i++){
		if((i+1) !== numSorted[i]){
			return i+ 1;
		}		
	}
}

// Return 'yes' if array1 and array2 are rotated versions of each other, 'no' otherwise
// e.g. [1,2,3,6,7,8] and [3,6,7,8,1,2] are rotated versions of each other
function areRotatedVersions(array1, array2) {
	var array1Sorted = array1.sort(function(a,b) { return a - b; });
	var array2Sorted = array2.sort(function(a,b) { return a - b; });
	console.log(array1Sorted);
	console.log(array2Sorted);
	
	if(array1Sorted.length !=array2Sorted.length){
		return "no";
	}
	for(var i=0; i<array1Sorted.length; i++){
		if(array2Sorted[i] != array2Sorted[i])
        return "no";
        return "yes";
    }
}

// Return a string of the first n prime numbers, separated by commas
// e.g. "1,2,3,4"
function nPrimeNums(n) {
	var primes = [];
	for(var i = 2; primes.length < n; i++){
		var hasDivisor = false;
		for(var count = 2; count < i ; count ++){
			if(i % count === 0){
				hasDivisor = true;
				break;
			}
		}
		if(!hasDivisor){
			primes.push(i);
		}
	}
	return primes.join(",");

}

// Return the output of running the function f twice
// e.g. doitTwice(function f() {return 1;}) === 2
function doItTwice(f) {
	return f() + f(); 
}

// Return an object that has the properties: first name, last name, age, email, and favorite color
function objectFun(first, last, age, email, color) {
    var person = {
    	first_name: first,
    	last_name: last,
    	age: age,
    	email: email,
    	fav_color: color
    };
    return person;
}

// Return the number of "children" obj has
function numChildren(obj) {
	return obj.children.length;
}

function greeting(name) {
    return "Hello, " + name + "!";
}

// Say hello! This function takes a function as a parameter (greet should be a function)
// Say hello! This function takes a function as a parameter (greet should be a function)
function sayHello(first, last, greet) {
	return greet(first + " " + last);
	
}