/* var p = document.createElement("p");
p.innerHTML = 'something is there in this new node p';

var div = document.getElementById("one");
//body.appendChild(p);

function changeColor()
{
    this.className = "changeColor1";
};

function changeColorOut()
{
    this.className = "changeColor2";
};

function changeFontSize()
{
    var x = parseInt(window.getComputedStyle(this).fontSize);
    this.style.fontSize = x + 2 + "px";
};

div.addEventListener("click", changeFontSize);
div.addEventListener("mouseover", changeColor);
div.addEventListener("mouseleave", changeColorOut);

 */
/*
In the below mentioned mini-program we have a function called makeCalendar which accepts a single parameter (a name of the calendar owner) and returns an object. This object has several methods defined on it to add and list calendar events. These methods, through closure, have access to a private calendar object that is defined in the overall function scope. This object is only accessible to those methods and not to the program as a whole. We see this in action at the bottom of the snippet where we create and interact with an object called babbageCalendar.
What is interesting about this pattern is that the calendar object that babbageCalendar is interacting with is completely private. There is no way to directly manipulate the calendar.events array or the calendar.owner string — we can only do so by using the explicitly defined interface that is returned by makeCalendar. This can be very powerful, but it has downsides as well. What if we wanted a way to change the date on a particular event? Well, we can only do that by going back to the original code and adding a changeDate method to the interface. As a result, this pattern is not particularly easy to extend, but for our purposes, it illustrates the power of closure.
*/
function makeCalendar(name) 
{
    var calendar = 
    {
      owner: name,
      events: [],
    };
    
    return 
    {
        addEvent: (event, dateString) =>
      {
        var eventInfo = 
        {
          event: event,
          date: new Date(dateString),
        };
        calendar.events.push(eventInfo);
        calendar.events.sort(function(a, b) 
        {
          return a.date - b.date;
        });
      };
      
        listEvents: () => 
      {
        if (calendar.events.length > 0) 
        {
          console.log(calendar.owner + "'s events are: ");
          
          calendar.events.forEach(function(eventInfo) 
          {
            var dateStr = eventInfo.date.toLocaleDateString();
            var description = dateStr + ": " + eventInfo.event;
            
            console.log(description);
          });
        } 
        else 
        {
          console.log(calendar.owner + " has no events.");
        }
      };
    };
};
  
  var babbageCalendar = makeCalendar("Charles Babbage");
  
  babbageCalendar.addEvent("Coffee with Ada.", "8/7/2018");
  babbageCalendar.addEvent("Difference Engine presentation.", "8/2/2018");
  
  babbageCalendar.listEvents();
    /*
      Logs:
      Charles Babbage's events are: 
      8/2/2018: Difference Engine presentation.
      8/7/2018: Coffee with Ada.
    */

