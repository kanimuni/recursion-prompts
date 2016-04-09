// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
	if(n < 0) {
		return null;
	}

  if(n === 0) {
    return 1;
  }

  if(n === 1) {
    return 1;
  }

 return n * factorial(n-1);

};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

// using reduce 
// var sum = function(array) {
// 	return array.reduce(function(accumulator, item) {
// 		accumulator += item;
// 		return accumulator;
// 	}, 0);
// };

var sum = function(array, i, total) {
	i = i||0;
	total = total||0;
	if(i === array.length){
		return total;
	}
  total += array[i];
  return sum(array, i+1, total);
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15

// Recursion with an inner function
// var arraySum = function(array) {
//   var result = 0;
//   var innerFunction = function(array) {
//   	for(var i=0; i<array.length; i++) {
//   		if(Array.isArray(array[i])) {
//   			innerFunction(array[i]);
//   		} else {
//   			result += array[i];
//   		}
//   	}
//   };
//   innerFunction(array);
//   return result;
// };

// var arraySum = function(array, sum) {
//   sum = sum || 0;
//   debugger;
//   if(array.length === 0) {
//     return sum;
//   }
//   if(Array.isArray(array[0])) {
//     return arraySum(array[0], sum );
//   } else {
//     sum += array[0];
//   }
//   return arraySum(array.slice(1), sum);
// };

var arraySum = function(array) {
	var sum = 0;

	if(array.length === 0) {
		return sum;
	}

  for(var i=0; i<array.length; i++) {
  	if(Array.isArray(array[i])){
  		sum += arraySum(array[i]);
  	} else {
  		sum += array[i];
  	}
  }
  return sum;
};




// 4. Check if a number is even.
var isEven = function(n) {
	if(n < 0){
		return isEven(n * -1);
	}
	if(n === 0) {
		return true;
	}
	if(n === 1) {
		return false;
	}
	if(n === 2) {
		return true;
	}
	return isEven(n-2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n, sum) {
	sum = sum || 0;

  if(n < 0) {
    if(n === 0){
      return sum;
    }
    sum += (n+1);
    return sumBelow(n+1, sum);
  }

	if(n === 0){
		return sum;
	}
  sum += (n-1);
  return sumBelow(n-1, sum);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, result) {
  result = result||[];
  
  if(x > y) {
    if(x === y+1) {
      return result;
    }
    result.push(x-1);
    return range(x-1, y, result);
  }

  if(x === y) {
    return [];
  }

  if(x === y-1) {
    return result;
  }
  result.push(x+1);
  return range(x+1, y, result);
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if(exp === 0) {
    return 1;
  }
  if(exp === 1) {
    return base;
  }
  if(exp < 1) {
    return 1 / exponent(base, -exp);
  }

  return base * exponent(base, exp-1);

};


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if(n === 0) {
    return false;
  }
  if(n === 1) {
    return true;
  }
  if(n % 2 !== 0) {
    return false;
  }
  if(n % 2 === 0 && n === 2) {
    return true;
  }
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
if(string.length === 1) {
	return string;
}
return string[string.length-1] + reverse(string.slice(0, string.length-1));
};



// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  var cleanString = string.split(" ").join("").toLowerCase();
  
  if(cleanString.length === 1) {
   return true;
 }

  if(cleanString.length === 2) {
    if(cleanString[0] === cleanString[1]) {
      return true;
    }
  }

  if(cleanString.length === 3) {
    if(cleanString[0] === cleanString[2]) {
      return true;
    }
  }

 if(cleanString[0] === cleanString[cleanString.length-1]) {
   return palindrome(cleanString.slice(1, cleanString.length-1));
 } else {
   return false;
 }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y, times) {
  if(x === 0) {
    return 0;
  }
  if(y === 0) {
    return NaN;
  }
  if(y > x) {
    return x;
  }
  
  if(x > y) {
    if(x-y < 0) {
      return 
    }
  }
  

};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y, small) {
  var bigger = Math.max(x,y);
  var smaller = Math.min(x,y);
  small = small || smaller;
  if(x < 0) {
    return null;
  }
  if(y < 0) {
    return null;
  }
  if(bigger % smaller === 0 && small % smaller === 0 ) {
    return smaller;
  }
  return gcd(bigger, smaller-1, small);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	var s1L = str1.length;
	var s2L = str2.length;
  
  if(s1L === 0 && s2L === 0) {
    return true;
  }
  
	if(s1L !== s2L) {
		return false;
	}
  
  if(s1L === 1 && s2L === 1 && str1[0] === str2[0]) {
    return true;
  }
  
  if(str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1));
  } else {
    return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, result){
  result = result || [];
  if(str.length === 0) {
    return result;
  }
  result.push(str[0]);
  return createArray(str.slice(1), result);
};

// 17. Reverse the order of an array
var reverseArr = function (array, i, result) {
  i = i||0;
  result = result || [];
  if(i === array.length) {
    return result;
  }
  result.unshift(array[i]);
  return reverseArr(array, i+1, result);
};


// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, i, result) {
  i = i||0;
  result = result || [];
  if(i === length) {
    return result;
  }
  result.push(value);
  return buildList(value, length, i+1, result);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, i, count) {
  i = i||0;
  count = count||0;
  if(i === array.length) {
    return count;
  }
  if(array[i] === value) {
    count++;
  }
  return countOccurrence(array, value, i+1, count);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, i, result) {
  i = i || 0;
  result = result || [];
  if(i === array.length) {
    return result;
  }
  result.push(callback(array[i]));
  return rMap(array, callback, i+1, result);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  for(var k in obj) {
    if(k === key) {
      count++;
    }
    if(Object.prototype.toString.call(obj[k]) === "[object Object]") {
      count += countKeysInObj(obj[k], key);
    }
  }
  return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for(var k in obj) {
    if(obj[k] === value) {
      count++;
    }
    if(Object.prototype.toString.call(obj[k]) === "[object Object]") {
      count += countValuesInObj(obj[k], value);
    }
  }
  return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
  for(var k in obj) {
    if(Object.prototype.toString.call(obj[k]) === "[object Object]") {
      replaceKeysInObj(obj[k], key, newKey);
    }
    if(k === key) {
      obj[newKey] = obj[k];
      delete obj[k];
    }
  }
  return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n, count, result) {
  count = count||1;
  result = result||[0, 1];
  if(n <= 0) {
    return null;
  }		
  if(n === 1) {
    return result;
  }
  if(count === n) {
    return result;
  }
 result.push(result[count] + result[count-1]);
 return fibonacci(n, count+1, result);
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if(n < 0) {
    return null;
  }
  if(n === 0) {
    return 0;
  }
  if(n === 1) {
    return 1;
  }
  return nthFibo(n-1) + nthFibo(n-2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, i, result) {
  i = i||0;
  result = result||[];
  if(i === input.length) {
    return result;
  }
  result.push(input[i].toUpperCase());
  return capitalizeWords(input, i+1, result);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, i, result) {
  i = i||0;
  result = result||[];
  if(i === array.length) {
    return result;
  }
  var pushword = "" + array[i][0].toUpperCase() + array[i].slice(1).toLowerCase();
  result.push(pushword);
  return capitalizeFirst(array, i+1, result);
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;
  
  for(var key in obj) {
    if(Object.prototype.toString.call(obj[key]) === "[object Object]") {
      sum += nestedEvenSum(obj[key]);
    } else {
      if(obj[key] % 2 === 0) {
        sum += obj[key];
      }
    }
  }
  return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var flatArray = [];
  for(var i=0; i<array.length; i++) {
    if(Array.isArray(array[i])) {
      var result = [].concat( flatten(array[i]) );
      flatArray = flatArray.concat(result);
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj, i) {
  i=i||0;
  obj = obj||{};
  if(i === str.length) {
    return obj;
  }
  if(!obj[str[i]]) {
    obj[str[i]] = 1;
  } else {
    obj[str[i]]++;
  }
  return letterTally(str, obj, i+1);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, i, result) {
  i=i||0;
  result=result||[];
  if(i === list.length) {
    return result;
  }
  if(list[i] !== list[i+1]) {
    result.push(list[i]);
  }
  return compress(list, i+1, result);
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug, i, result) {
  i=i||0;
  result=result||[];
  if(i === array.length) {
    return result;
  }
  result.push(array[i].concat(aug));
  return augmentElements(array, aug, i+1, result);
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, i, result) {
  i=i||0;
  result=result||[];
  if(i === array.length) {
    return result;
  }
  if(array[i] === 0 && result[result.length-1] === 0) {
  } else {
    result.push(array[i]);
  }
  return minimizeZeroes(array, i+1, result);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, i, result) {
  i = i||0;
  result = result||[];
  if(i === array.length) {
    return result;
  }
  if( i%2 === 0 && array[i] < 0) {
    result.push(array[i] * -1);
  } else if(i%2 === 0 && array[i] > 0) {
    result.push(array[i]);
  }
  if( i%2 !== 0 && array[i] < 0) {
    result.push(array[i]);
  } else if(i%2 !== 0 && array[i] > 0) {
    result.push(array[i] * -1);
  }
  return alternateSign(array, i+1, result);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, i, result) {
  i = i||0;
  result = result||"";

  var lookUpObj = {
    0:"zero",
    1:"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five",
    6:"six",
    7:"seven",
    8:"eight",
    9:"nine"
  };

  if(i === str.length) {
    return result;
  }
  
  if(lookUpObj[str[i]]) {
    result += lookUpObj[str[i]];
  } else {
    result += str[i];
  }

  return numToText(str, i+1, result);
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};
