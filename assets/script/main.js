// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    const schedule = $('#schedule')
    var today = new Date();
    var currentDay = dayjs(today);
    var currentSecond = dayjs().second();
    var currentMinute = dayjs().minute();
    var currentHour = dayjs().hour();
    var currentTime = dayjs();
    var timeStamp = currentHour + ":" + currentMinute + ":" + currentSecond;
    
    //setInterval arrow function to display current time - set interval to 1 second to keep time running currently on screen
    setInterval(() => {
        currentTime = dayjs();
        $("#currentDay").text(currentDay.format("MMM DD, YYYY") + "  " + currentTime.format("h:mm:ss A"));
    }, 1000);
    
    //on click event that saves the text in the text box to local storage
    schedule.on("click", function(event){
        if($(event.target).is('button')){
        var currentText = $(event.target).siblings('input[type="text"]').val();
        var hourSlot = $(event.target).parent().attr('id');
        localStorage.setItem(hourSlot, currentText);
        } else{
            return;
        }
    });

    //on load function that gets the key/value pairs from storage and displays them
    

  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
