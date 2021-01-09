$(document).ready(function() {

    var currentDay = moment().format('MMMM Do YYYY, h:mm a');

    $("#currentDay").text(currentDay);

    var now = moment().format("h a");

    var workHours = [
        { time: "9am", event: "" },
        { time: "10am", event: "" },
        { time: "11am", event: "" },
        { time: "12pm", event: "" },
        { time: "1pm", event: "" },
        { time: "2pm", event: "" },
        { time: "3pm", event: "" },
        { time: "4pm", event: "" },
        { time: "5pm", event: "" }
    ];

    var savedEvents = JSON.parse(localStorage.getItem("events"));

    if (savedEvents !== null) {
        workHours = savedEvents;
    }

    var timeBlock = $("<div class='time-block'>")
    
        for (var i = 0; i < workHours.length; i++) {      
            var timeBlockRow = $("<div class='row'>");
            var timeBlockColHour = $("<div class='hour col-2'>");
            var relativeTime = "";
            var currentTime = moment(now, "h a");
            var timeBlockTime = moment(workHours[i].time, "h a");
            
            if (currentTime.isBefore(timeBlockTime) === true) {
                relativeTime = "future";
            } else if (currentTime.isAfter(timeBlockTime) === true) {
                relativeTime = "past";
            } else {
                relativeTime = "present";
            } 
            var timeBlockColDescription = $("<textarea class='description col-8 " + relativeTime + "'>");
            timeBlockColDescription.val(workHours[i].event);
            var timeBlockColBtn = $("<button class='saveBtn col-2'><i class='fa fa-save'></button>");
      
            timeBlockRow.attr("data-hours", workHours[i].time);            
            timeBlockColHour.text((workHours[i].time));
            timeBlock.append(timeBlockRow);
            timeBlockRow.append(timeBlockColHour);
            timeBlockRow.append(timeBlockColDescription);
            timeBlockRow.append(timeBlockColBtn);
        }

    $(".container").append(timeBlock);

    $(".saveBtn").on("click", function() {
        var saveTime = $(this).parent().attr("data-hours");
        var saveText = $(this).siblings("textarea").val();

        for (i= 0; i< workHours.length; i++) {
            if (saveTime === workHours[i].time)
            {
                workHours[i].event = saveText;
            }
        }
        storeEvents();       
    });

    function storeEvents() {
        localStorage.setItem("events", JSON.stringify(workHours));
      }   
});
 