/**
 * 
 */

var daySelected = document.getElementById("daySelected").value

function calculate(daySelected){
	var optionSelected = document.getElementById("daySelected").value;
	var result;
	
	switch(optionSelected){
		case "Tuesday":
			result = "Jai Shree Ram";
			break;
		case "Wednesday":
			result = "Budh sab shudh";
			break;
		case "Thursday":
			result = "Guru vaar";
			break;
		case "Friday":
			result = "Jai Mata Di";
			break;
		case "Saturday":
			result = "First holiday";
			break;
		case "Sunday":
			result = "Sunday is holiday";
			break;
		default:
			result = "Please do a selection";
			break;
	}
	document.getElementById("systemResponse").innerHTML = result;
	if(optionSelected != "Monday"){	
		document.getElementById("selectedOption").innerHTML = "You selected: "+ optionSelected;
};
}
