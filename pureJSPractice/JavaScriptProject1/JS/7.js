/**
 * Function to calculate the values of Today's date time
 */

function calculate(){
	var enteredDate = new Date();
	document.getElementById("systemResponse").innerHTML =  "| Year is " + enteredDate.getYear() +  "| Month is " + enteredDate.getMonth() + "| Day is " + enteredDate.getDay() + "| Date is " + enteredDate.getDate() + "| Hours is " + enteredDate.getHours() + "| Minutes is " + enteredDate.getMinutes() + "| To_string is " + enteredDate.toString() ;
};

