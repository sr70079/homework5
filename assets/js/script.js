$(document).ready(function() {
// variable and funtion to display current day at the top

    var currentDay = moment().format('MMMM Do YYYY, h:mm a');

    $("#currentDay").text(currentDay);

    // time block for each standard business hour



    // var past = $(".past");
    // var present = $(".present");
    // var future = $(".future");    
    // var textArea = $("<textarea></textarea>");
    // var description = $(".description");

      
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

    var timeBlock = $("<div>")

    
        for (var i = 0; i < workHours.length; i++) {      
          var timeBlockRow = $("<div>");
        //   var timeBlockColHour = $("<td></td>")
        //   var timeBlockColDescription = $("<td></td>")
        //   var timeBlockColBtn = $("<td></td>")
          var textArea = $("<textarea>")
          var saveBtn = $("<button>")
        //   timeBlockColHour.addClass("hour")
        //   timeBlockColDescription.addClass("descrption")
        //   timeBlockColBtn.addClass("saveBtn")
          saveBtn.addClass("saveBtn")
          timeBlockRow.addClass = ("time-block row hour ");
          timeBlockRow.attr("data-hours", workHours[i]);
          timeBlockRow.text((workHours[i]));
          timeBlockRow.append(textArea, saveBtn)
        //   timeBlockRow.append(saveBtn)
          timeBlock.append(timeBlockRow)

        }

    $(".container").append(timeBlock);
    
    console.log(timeBlock)

});

 

    //     // color coded to show past, present, future time block 

    //     // click into a time block 

    //     //  enter event into time block

    //     // click button to save event in time block 

    //     // when button is clicked event is saved to local storage

    //     // event persist if page is refreshed 
