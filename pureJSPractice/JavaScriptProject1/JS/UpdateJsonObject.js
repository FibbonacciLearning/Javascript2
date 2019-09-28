var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
/*
Problem statement
1. Write generic fucntion to first understand if object contains properties 'id' and 'prop'
2. If id isn't found in the oject, create new record with 'id', 'prop' and 'value'
3. If Id found but prop is not found in the object, then create new record under 'id' with new 'prop' and 'value'  
4. Id id, prop, value found then don't do anything
5. The function returns the updated object
*/


function updateRecords(id, prop, value){
    if (collection.hasOwnProperty(id)){
        if(collection.id.hasOwnProperty(prop)){
            if (typeof(prop) == Array){
                prop.push(value);
            }
        }
    };
};
console.log(updateRecords(1245, tracks, "lokesh prabhakar"), collection);