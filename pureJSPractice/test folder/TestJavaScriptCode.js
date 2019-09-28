//This functons returns an array of 10 random numbers between two numbers provided as arguments to the function.
//There is a check if first number is big or the second one. 
//If any/both numbers is/are equal or is/are non empty strings, then a message is displayed instead 
function returnArrayOfRandomNumbers(x, y){
if(x > y){
    var max = x;
    var min = y;
    arr =[];
    for(i=0 ; i<10 ; i++){
       arr.push(Math.floor(Math.random() * (max - min + 1) + min)); 
        }
    return arr
} else if(x < y){
    var max = y;
    var min = x;
    arr =[];
    for(i=0 ; i<10 ; i++){
       arr.push(Math.floor(Math.random() * (max - min + 1) + min)); 
        }
    return arr
} else(x == y);{
    return "Please enter valid range"
}
};

// console.log(returnArrayOfRandomNumbers(199,12))
// console.log(returnArrayOfRandomNumbers(20,""))
// console.log(returnArrayOfRandomNumbers(20000,"2000mgr"))
// console.log(returnArrayOfRandomNumbers(20000, 2000mgr)) /*this will return syntax error as system understands the 2000mgr 
// as an undeclared variable */
// console.log(returnArrayOfRandomNumbers("","")) // returns defined message

/**************************************************************************************************************************/

//ternanry operator

function checkEqual(a,b){
    message1 = "Values are equal and of same data type";
    message2 = "Values are equal but not of same data type";
    message3 = "Values don't match";
    return a === b ? message1 : a==b ? message2 : message3;
}
//console.log(checkEqual(122,'122')) - returns 

/**************************************************************************************************************************/
// this functions returns the reverse of a string

function reverseString(str) 
{
  return str.split('').reverse().join('');
}

console.log(reverseString("hello"));

// another way to write the same function

function reverse2(str2)
{
    let z = str2.split('');
    console.log(typeof(z)); //Object
    z.reverse();
    str2 = z.join('');
    return str2;
}
console.log(reverse2('join'));
/****************************************************************************************************************/
//this function finds the longest word from the sentence provided in the argument

function findLongestWordLength(str) {
    var arr = str.split(' ');
    //console.log(arr);
    //console.log(arr[0]);
    //console.log(arr[0].length);
    var j = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i].length > j)
        {
            j = arr[i].length;
        }
    }
    return j;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

/****************************************************************************************************************/
//this funxtion can return largest number in sub array of 2 dimensional array. it can also be tweeked easily to return the minimum or smallest number

  function largestOfFour(arr) {
    var newArray = [];
    for(let i = 0; i < arr.length; i++)
    {
      newArray.push(Math.max.apply(null, arr[i]))
    }
    return newArray;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [-13, -27, -18, -26], [32, 35, 37, 39], [1000, 1001, 857, -10], [32, 35, -37, -39]]));
  
  /****************************************************************************************************************/
// functions to check if a string starts with / ends with another string. characters are case sensitive. 
function confirmEnding(str, target) 
{
  if(str.endsWith(target))
    {
      return str;
    }

}

console.log(confirmEnding("Bastian", "an"));

function confirmStarting(str, target)
{
  if(str.startsWith(target))
  {
    return str;
  }
}

console.log(confirmStarting('Lokesh', 'L'));

// Another more laborious way to write the same function is as below

function confirmEnding(str, target) 
{
  //console.log(str[str.length -1])
  var counter = 0;
  for(var i = str.length - 1, j = target.length -1; i >= 0 && j >= 0; i--, j--)
  {
//    console.log(str[i] + " " + target[j]);
    if(str[i] !== target[j])
    {
      counter++;
    }
  }
  if(counter > 0)
  {
    return false;    
  }
  else 
  {
    return true;
  }
}

console.log(confirmEnding("Bastian", "an"));


/****************************************************************************************************************/
//function to capitalize each word of a string passed as input

//SHORTEST WAY
function capitalize(str){
  return str = str[0].toUpperCase() + str.slice(1);
};

function titleCase(str){
  return str.split(' ').map(capitalize).join(' ');  
  //str.split converts string into array, map method applies capitalize function on each element of the array and after entire array has been iterated by the map method, join function joins the array elements to form a string again. We can also use Reduce method instead of join to do the same job.
};

//SHORTER WAY
function capitalize(str){
  return str = str[0].toUpperCase() + str.slice(1);
};
// capitalize('home and office') returns Home and office

function titleCase(str){
  str = str.split(' ');
  let tempstr = '';
  for(i in str){
    tempstr += capitalize(str[i]) + ' ';
  }
  return tempstr
};
console.log(titleCase("I'm a little tea pot"));



//LONNGER WAY
function titleCase(str) {
  let str1 = str.toLowerCase().split(' ');
  let arr1 = [];
  //arr1.push(str.toLowerCase().split(' '))
  //console.log(str1.length);
  //console.log(str1[0]);
  for(let i = 0; i < str1.length; i++)
  {
    arr1.push(str1[i]);
    //console.log(arr1[i]);
  }
  //console.log(str1);
  //arr1[0] = "I'am";
  //console.log(arr1);
  //console.log(str1);
  //console.log(arr1.join(" "));
  //console.log(arr1);
  //console.log(arr1[0][0].toUpperCase()+arr1[0].slice(1 , arr1[0].length));
  for(let i = 0; i < arr1.length; i++)
  {
    arr1[i] = arr1[i][0].toUpperCase() + arr1[i].slice(1 , arr1[i].length);
    //console.log(arr1);


  }
  return arr1.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

/****************************************************************************************************************/
// some notes on string slice (string method)

var str = 'abcdefghijklmnopqrstuvwxyz';

console.log(str.length);
console.log(str[0]);
console.log(str[25]);
console.log(str.slice(-str.length));
console.log(str.slice(-5));
console.log(str.slice(-5, -4));
console.log(str.slice(4, -4));
console.log(str.slice(0, -1));

if(str === str.slice(-str.length) && str === str.slice(0))
{
  console.log(1);
}else {
  console.log(2);
}

/****************************************************************************************************************/
// some notes on string splice (array method)

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

months.splice(1, 0, 'Feb'); // at array index = 1, remove 0 elements and add 'Feb' 
console.log(months);

months.splice(3, 2, 'May', 'Lokesh'); // at array index = 3, remove 2 elements and add 'may' and 'lokesh' 
console.log(months);

/****************************************************************************************************************/
//Function to remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  return arr.filter(Boolean);
}

/****************************************************************************************************************/
// how to sort an array
arr.sort(function(a,b){
  return a - b;
});

//another way using ES6 
arr.sort((curr, next) => curr > next)

var x = [1, -4, 51, -55, 100, 6, 4, 23];

console.log(x.sort()); //returns -4,-55,1,100,23,4,51,6 (here default behavior considers the numbers like a string)

console.log(x.sort(function(a,b){return a-b;})); //returns -55,-4,1,4,6,23,51,100

console.log(x.sort(function(a,b){return b-a;})); //returns 100,51,23,6,4,1,-4,-55

/****************************************************************************************************************/
// Function to return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

//first method - using str.indexOf() 

function mutation(arr) {
  let str1 = arr[0].toLowerCase(), str2 = arr[1].toLowerCase(), count = 0;
  for(let j in str2)
    {
      if(str1.indexOf(str2[j]) == -1)
      {
        return false;
      }
    }
  return true;
}
console.log(mutation(["voodoodvoovnosvnosasca", 'ddoooooooooooooooov']));

//second method - using str.indexOf() and array.every() methods

function mutation(arr) {
  return arr[1].toLowerCase()  //second string is lower cased
    .split('')                  // the string is converted to array of string characters
    .every(function(letter) {   // array. every method passes each string character of the array to the function
      return arr[0].toLowerCase() // the first string is lowercased
        .indexOf(letter) != -1;   // and string.indexOf method is used to check is there is no match. if this check return false,                               then fucntion returns false
    });
}
console.log(mutation(["voodoodvoovnosvnosasca", 'ddoooooooooooooooov']));

/****************************************************************************************************************/
// function to split into sub arrays, an array passed in argument by size passed in argument

function chunkArrayInGroups(arr, size) 
{
  var arr2 = [];
  for (var i = 0; i < arr.length; i += size) // i = i + size. this will make i jump to right iteration of i   
  {
    arr2.push(arr.slice(i , i+size)); // take slice of array and push into arr2
    //console.log(i);
    //console.log(arr.slice(i, i + size))
    //console.log(arr2)
  }
  return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

/****************************************************************************************************************/
// the function below is the contructor function (aka class) which when instantiated give the object a reusable structure. this example also contains an example of use of prototype for extending the properties of the function

function person (name, surname, height)
{
  this.name = name;
  this.surname = surname;
  this.height = height;
  this.toString = function ()
  {
    return this.name + " " + this.surname + " " + this.height;  
  };
};

var x = new person('Lokesh', 'Prabhakar', '173');
var y = new person('archna', 'Prabhakar', '73');
var z = new person('ishita', 'prabhakar', '3');

/*Prototype is used when you can't change the function or constructor function definition, you are accessing. Prototype is here used to extend an extra property somethingNew into the function object. this property was not part of the object */
person.prototype.somethingNew = 5;

//setting value of div with id = first
document.getElementById("first").innerHTML = x.somethingNew + "</br>" + y.somethingNew + "</br>" + z.somethingNew;

/****************************************************************************************************************/
//Function to add numbers passed as arguments to it

function addNumbers()
{
  let sum = 0;
  for (let i in arguments)
  {
    sum += arguments[i];
  }
  return sum;
};

console.log(addNumbers(1,2,300,4,-14));

/****************************************************************************************************************/
// sum of numbers in array with forEach array method

var sum = function (arr)
{
  var s = 0;
  arr.forEach(function(number)
  {
    s = s + number;
  });
  return s;
};
sum([1,2,3,4,5]); // returns 15

/****************************************************************************************************************/
/*Using array map method mltiply each element of an integer array with an integer passed as argument
The map() method creates a new array with the results of calling a function for every array element.

The map() method calls the provided function once for each element in an array, in order.

Note: map() does not execute the function for array elements without values.

Note: this method does not change the original array.
*/
var result = function (arr, int){
  return arr.map(function(number){
    return number * int;  
  });
};
result([1,2,3,4,5], 10); //returns [10, 20, 30, 40, 50]
/****************************************************************************************************************/
// Using array map method return array of contactenated first and last names
var persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

var newPersons = persons.map(function getFullName(item)
{
  return [item.firstname, item.lastname].join(" ");
});

console.log(newPersons); //returns ["Malcom Reynolds", "Kaylee Frye", "Jayne Cobb"]

/****************************************************************************************************************/
//Using array map method return numbers to power 3

var arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr.map(function(number){
  return Math.pow(number, 3);
}));

/****************************************************************************************************************/
// forEach and Map in a chain 

var double = function (n){
  return n * 2;
};

var concat = function(n){
    console.log("this is concatenated string " + n);
};

var concat1 = function(n){
  return "this is concatenated string " + n;
};

[1,2,3,4,5].map(double).forEach(concat); /*returns 
this is concatenated string 2
this is concatenated string 4
this is concatenated string 6
this is concatenated string 8
this is concatenated string 10 
*/

[1,2,3,4,5].map(double).map(concat); /*returns
this is concatenated string 2
this is concatenated string 4
this is concatenated string 6
this is concatenated string 8
this is concatenated string 10
(5) [undefined, undefined, undefined, undefined, undefined]
*/
[1,2,3,4,5].map(double).map(concat1) /*Returns
["this is concatenated string 2", "this is concatenated string 4", "this is concatenated string 6", "this is concatenated string 8", "this is concatenated string 10"]
*/

/****************************************************************************************************************/
// concatOfDouble Function call double and concat functions internally and return array
var double = function (n){
  return n * 2;
};

var concat = function(n){
  return "this is concatenated string " + n;
};

concatOfDouble = function (arr){
  let newarr = [];
  for(i in arr.map(double))
  {
    newarr.push(concat(arr.map(double)[i]));
  };
  return newarr;
};

concatOfDouble([1,2,3,4,5]); 
// returns ["this is concatenated string 2", "this is concatenated string 4", "this is concatenated string 6", "this is concatenated string 8", "this is concatenated string 10"]

/****************************************************************************************************************/
// Use of array filter method

var arr = returnArrayOfRandomNumbers(100,10);

console.log(arr);
console.log(arr.filter((number) => number > 20));

// returns 
/*
(10) [75, 88, 86, 24, 35, 58, 81, 51, 100, 14]
(9) [75, 88, 86, 24, 35, 58, 81, 51, 100]
*/
console.log(arr);
console.log(arr.filter((number) => number > 20 && number % 2 === 0));

/*
returns
(10) [97, 75, 15, 51, 72, 30, 75, 44, 71, 42]
(4) [72, 30, 44, 42]
*/

/****************************************************************************************************************/
// Use of array filter to get prime numbers in returned array

var isPrime = function (n)
{
  let answer = true;
  if(n !== 1)
  {
    for(i = 2; i < n; i++)
    {
      if(n % i === 0)
      {
        answer = false;
      }
    }
  } 
  else
  {
    answer = false;
  }
return answer;
};

var arr = [];
for (let i = 1; i < 50; i++){
  arr.push(i);
}
console.log(arr);
console.log(arr.filter(isPrime));

/* Returns
(49) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]

(15) [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
*/
/****************************************************************************************************************/
// Use of Array method = some. It returns true / false based on condition being on "ANY" of elements of the array

var arr = [];
for (let i = 1; i < 50; i++){
  arr.push(i);
}
console.log(arr);
console.log(arr.some((number) => number % 2 === 0));  //true
console.log(arr.every((number) => number % 2 === 0)); //false
console.log(arr.every((number) => number % 1 === 0)); //true
/****************************************************************************************************************/
// Use of Reduce method. sumSoFar is keeping the sum result of the last iteration. At the start of iteration it is assigned the first element of the array. 

function sumWithReduceMethod (arr){
  var result = arr.reduce((sumSoFar, number) => (sumSoFar + number));
  return result;
};

// This function finds smallest number in a number array. smallesstSoFar is always set value from the array by the reduce. So, to store result of last iteration if condition of the iteration is True, we create a temoVar variable to store that value.  
function findSmallestNumberWithReduceMethod (arr){
  var result = arr.reduce((smallestNumberSoFar, number) => 
  {
    let tempVar = smallestNumberSoFar;
    if(smallestNumberSoFar > number){tempVar = number}
    return tempVar;
  });
  return result;
};

// Below example shows the use of index syntax in reduce method. 
//Here we are setting the index to ''. That means, the initial value of existingElement is ''

var arr1 = ['string 1', 'string 2', 'string 3', 'string 4' , 'string 5'];

function capitalize(str){
  return str = str[0].toUpperCase() + str.slice(1);
};

function paragraphify(arr)
{
  return arr.reduce((existingElement, currentElement) => 
  {
    return existingElement + capitalize(currentElement) + '. ';
  }, ''); 
    
};

paragraphify(arr1);
//returns "String 1. String 2. String 3. String 4. String 5. "

// another example of Reduce method 

function capitalize(str){
  return str = str[0].toUpperCase() + str.slice(1);
};

function titleCase(str){
  return str.split(' ').map(capitalize).reduce((a, b) => (a + ' ' + b));  
};
//console.log(titleCase("I'm a little tea pot")); 
// returns I'm A Little Tea Pot

/****************************************************************************************************************/
//

