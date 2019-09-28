/**
 * What does this program do?
This program displays capability to change the display 3 list items with user entries to 3 prompts
 */
//GLobal variables
var item1;
var item2;
var item3;
//Function called by button click
//This function initiates prompt and saves user entries to variables. If no user entry then variable stores undefined
function newlist(){

item1 = prompt('enter first name: ');
item2 = prompt('enter second name: ');
item3 = prompt('enter third name: ');
updatelist();
}

//Function called internally by newlist function
//This function actully updates the list with user enteries
function updatelist(){

document.getElementById("firstName").innerHTML = item1
document.getElementById("secondName").innerHTML = item2
document.getElementById("thirdName").innerHTML = item3
}
