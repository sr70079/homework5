$(document).ready(function() {

    var currentDay = moment().format('MMMM Do YYYY, h:mm a');

    $("#currentDay").text(currentDay);

    var now = moment().format("h a");

    var workHours = [
            "9am",
            "10am",
            "11am",
            "12pm",
            "1pm",
            "2pm",
            "3pm",
            "4pm",
            "5pm"
        ];

    var timeBlock = $("<div class='time-block'>")
    
        for (var i = 0; i < workHours.length; i++) {      
            var timeBlockRow = $("<div class='row'>");
            var timeBlockColHour = $("<div class='hour col-2'>");
            var relativeTime = "";
            var currentTime = moment(now, "h a");
            var timeBlockTime = moment(workHours[i], "h a");
            
            if (currentTime.isBefore(timeBlockTime) === true) {
                relativeTime = "future";
            } else if (currentTime.isAfter(timeBlockTime) === true) {
                relativeTime = "past";
            } else {
                relativeTime = "present";
            } 

            var timeBlockColDescription = $("<textarea class='description col-8 " + relativeTime + "'>");
            var timeBlockColBtn = $("<button class='saveBtn col-2'><i class='fa fa-save'></button>");
      
            timeBlockRow.attr("data-hours", workHours[i]);            
            timeBlockColHour.text((workHours[i]));
            timeBlock.append(timeBlockRow);
            timeBlockRow.append(timeBlockColHour);
            timeBlockRow.append(timeBlockColDescription);
            timeBlockRow.append(timeBlockColBtn);
        }

    $(".container").append(timeBlock);

    $(".saveBtn").on("click", function() {
        var saveTime = $(this).parent().attr("data-hours");
        var saveText = $(this).siblings("textarea").val();

        console.log(saveTime)
        console.log(saveText)

       
    });

    // function storeEvents() {

    //     localStorage.setItem("events", JSON.stringify(workHours));
    //   }
    
    //   storeEvents();

});

 

 



  

  

    //     // when button is clicked event is saved to local storage

    //     // event persist if page is refreshed 
