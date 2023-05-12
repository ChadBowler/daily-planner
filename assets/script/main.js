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
        $("#currentDay").text(currentDay.format("dddd, MMM DD, YYYY"));
        $("#currentTime").text(currentTime.format("h:mm:ss A"));
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

    //for loop that gets the key/value pairs from storage and displays them
    for(var i=0;i<schedule.children('div').length;i++){
        var timeSlot = schedule.children().eq(i).attr('id');
        var currentSlot = schedule.children().eq(i).children();
        var key = localStorage.getItem(timeSlot);
        schedule.children().eq(i).children('input').val(key);
        console.log(timeSlot + ":" + key);
        //adding the classes for past, present, future
        //changing the time format to int because it was returning as string and not calculating if statements correctly
        if(parseInt(currentTime.format("H")) == timeSlot){
            currentSlot.addClass("present");
        } else if(parseInt(currentTime.format("H")) > timeSlot){
            currentSlot.addClass("past");
        } else if(parseInt(currentTime.format("H")) < timeSlot){
            currentSlot.addClass("future");
        }
    }
});
