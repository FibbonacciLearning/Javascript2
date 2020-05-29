



/* //simple to-do list using just html and plain js
let myForm = document.getElementById("10");
let myentry = document.getElementById("10.1");
let myOutput = document.getElementById("listed");
myForm.addEventListener("submit", (e) => {
    e.preventDefault(); //this is added to prevent data to be sent anywhere the event info
    addToList(myentry.value);
});

function addToList(x) {
    myOutput.insertAdjacentHTML('beforeend',`<li> ${x} <button onclick = "removeFromList(this)">Delete</button></li>`);
    myentry.value = "";
    myentry.focus();
    //console.log(myOutput.children);
}

function removeFromList(element) {
    element.parentElement.remove();
}
 */
/* function execute() {
    console.log(this.firstName + ' ' + this.lastName + ' is a nice person')
}
//execute.call(lokesh); returns error. You cannot call object without first defining it. 
//Place this after defining the lokesh object and then only it will work

lokesh = {
    firstName: 'lokesh',
    lastName: 'prabhakar',
    firstFunction() {
        function secondFunction() {
            console.log(this.lokesh); //returns lokesh object. If just 'this', then returns the window object
        }
        secondFunction();
        console.log (this.firstName + ' ' + this.lastName);
    }
};
//if secondFunction is written as an arrow function then console.log(this) will return lokesh object. 
//this is due to fact that arrow functions don't change the context of this.
//It means that, js will always check local scope first and then go to higher scope. 

execute.call(lokesh); //this will run the execute function only and no other function

lokesh.firstFunction(); //second function runs before first function 
//as it is defined within the scope of first function
 */

/* let myName = 'brad 1';
function one () {
    if(1){
        myName = 'brad 2'; //no variable declaration; only assignation. 
        //During code parsing, first declaration is checked and then only assignation is taken.
        //Declaration is global and assgination is both global and local.
        //first preference is given to local assignation. As local as possible
        //let considers block scope, whereas Var uses function scope 
        console.log('the local scope', myName);
    }
};
one();
console.log('the global scope', myName);
 */

/* function findVowels(name){
    let result = 0;
    let vovelArr = [a, e, i , o , u]
    let temp = toLowerCase(name);
    for (i = 0; i <= name.length; i++)

    return result;
}
 */

/* function findAverage (n){
    let arr = [];
    let result = 0;
    for (let i = 1; i <= n; i++){
        if(arr.length <= 10){
            arr.push(i);
        }
    }
    //console.log(arr);
    for (j in arr){
        result += parseInt(j);
    }
    //console.log(result);
    return (result / arr.length);
}

console.log(findAverage(10));

 */


/* function sumofTen (a){
    let result = 0;
    if(a < 0){
        return result;
    }
    else{
        for(let i = 1; i <=a; i++){
            if(i <=10){
            result += i;
            }
        }
    }
    return result;
};
console.log(sumofTen(9));
 */
/* function factorial (a){
    let result = 1
    for (let i = 1; i <=a; i++){
        result *= i;
    }
    return result;
};

console.log(factorial(6));
 */

/* var i = 0;
var j = 0
console.log(i, j); // 0 0 
//j = i++; // j = i and then i ++

//j = ++i; // j = i + 1 and then i ++

console.log(i, j); // 1 0 
 */

//alert("hello world");

//document.getElementById("1").innerHTML += "running";

/* var first = 1;
var second = 0;

 console.log(first || second);
 console.log(second || first);
 console.log(first && second);
 console.log(second && first);
 */


/* function calculator (a, b, operator){
    let result = 0;
    if (operator == '+'){
        result = a + b;
    }else if (operator == '-'){
        result = a - b;
    }else if (operator == '*'){
        result = a * b;
    }else if (operator == '/'){
        result = a / b;
    }
    return result;
};

console.log(calculator(21, 31,"-"));
 */
