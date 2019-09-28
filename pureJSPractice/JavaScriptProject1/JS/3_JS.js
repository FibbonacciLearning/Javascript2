

var myList = [];

function addTheThing() {
	var theThing = document.getElementById("iWant");

    addToTheList(theThing);
    theThing.value = '';

}

function addToTheList(theThing){
	myList.push(theThing.value);
	var newItem = document.createElement("li");
	newItem.innerHTML = myList[myList.length -1];
	myListArea.appendChild(newItem);
}


function printView(){
	myListArea.innerHTML = "";
	myList.sort();
	for (var i =0; i < myList.length; i++){
		var newItem = document.createElement("li");
		newItem.innerHTML = myList[i];
		myListArea.appendChild(newItem);
	}
}

