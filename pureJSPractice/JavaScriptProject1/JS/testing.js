var pageCounter = 1;
function loadXMLDoc() {
  var xmlhttp;
    if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for older browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	var output = JSON.parse(xmlhttp.responseText);
    	for(i=0; i<output.length; i++){
    		document.getElementById("demo").insertAdjacentHTML("beforeend", "<p>" + output[i].foods.likes[i] + " is the name of animal " + output[i].species + "</p>");
    	};
    	
    };
  };
  xmlhttp.open("GET","https://learnwebcode.github.io/json-example/animals-" + pageCounter + ".json", true);
  xmlhttp.send(); 
  pageCounter++;
};
