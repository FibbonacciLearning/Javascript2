/**
 the indexOf() method in JavaScript to search for a specific string. For example, if you were to type the letter “i” into the search box and submit the form, every contact that contains that letter should be returned. The indexOf() method will either return a match or the number -1, so all you have to do is check for -1 and return the others.
 */

 //Basic HTML search form
 
//Data
var contacts = {
    "addressBook" : [
        {
            "name": "hillisha",
            "email": "hill@example.com", 
        },
        {
            "name": "paul",
            "email": "cleveland@example.com",
        },
        {
            "name": "vishaal",
            "email": "vish@example.com",
        },
        {
            "name": "mike",
            "email": "grady@example.com",
        },
        {
            "name": "jamie",
            "email": "dusted@example.com",
        }
    ]
};

/* define the adr object to hold your methods (aka functions) */
var adr = {

    getAllContacts : function(){

        /* save the DOM element we're putting the output in */
        var target = document.getElementById("output");
        /* clear the contents of #output just in case there's something in there */
        target.innerHTML = "";

        /* save the contacts JSON object to a variable */
        var book = contacts.addressBook;

        /* save the length to a variable outside the loop for performance */
        var count = book.length;

        /* as usual, check the count before looping */
        if(count > 0){
            /* loop through the contacts */
            for(i = 0; i < count; i++){

                var obj = book[i];

                target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>';

         } // end for loop
        } // end if count
    }, // end method
    
    // define the method (aka the function)
    addActiveSection : function() {

        // add a class of "active" to the wrapping div
        this.parentNode.setAttribute("class", "active");

    }, // end method, note the comma
    
 // define the method (aka the function)
    removeActiveSection: function() {

       // remove the class from the wrapping div
        this.parentNode.removeAttribute("class");

    }, //end method
    search: function(event){
    	event.preventDefault();

    	/* save the DOM element we're putting the output in */
        var target = document.getElementById("output");

        /* clear the contents of #output just in case there's something in there */
        target.innerHTML = ""; 
        
        // save the contacts JSON object to a variable 
        var book = contacts.addressBook;

         // save the length to a variable outside the loop for performance 
        var count = book.length;
        var searchQuery = document.getElementById("q").value;
        // as usual, check the count before looping 
        if(count > 0 && searchQuery !==""){
         // loop through the contacts 
            for(i= 0; (i < count); i++){
                // look through the name value to see if it contains the searchterm string
                    isItFound = book[i].name.indexOf(searchQuery);

                // anything other than -1 means we found a match
                if(isItFound !== -1) {
                    target.innerHTML += '<p>' + book[i].name + ', <a href="mailto:' + book[i].email + '">'+ book[i].email +'</a><p>';
                } // end if
                }
            }
 
    } //end method
} // end object

//save the button to a variable
var btn = document.getElementById("get-all");
// activate the click event on your button
btn.addEventListener("click", adr.getAllContacts, false);

//save the search box to a variable
var searchField = document.getElementById("q");

// activate the focus event on the search box
searchField.addEventListener("focus", adr.addActiveSection, false);

// activate the blur event on the search box
searchField.addEventListener("blur", adr.removeActiveSection, false);

var enterSearch = document.getElementById("btn-search");

enterSearch.addEventListener("click", adr.search, false);
