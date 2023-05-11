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
    for(var i=0;i<schedule.children('div').length;i++){
        var timeSlot = schedule.children().eq(i).attr('id');
        var key = localStorage.getItem(timeSlot);
        schedule.children().eq(i).children('input').val(key);
        

        console.log(timeSlot + ":" + key);
    }


   
});
