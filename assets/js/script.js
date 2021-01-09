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

    var timeBlock = $("<div class='time-block'>")

    
        for (var i = 0; i < workHours.length; i++) {      
          var timeBlockRow = $("<div>");

          var timeBlockColHour = $("<div>")
          var timeBlockColDescription = $("<div>")
          var timeBlockColBtn = $("<button><i class='fa fa-save'></button>")

          var textArea = $("<textarea class='col-12'>")
        //   var saveBtn = $("<button><i class='fa fa-save'></button>")
          
          timeBlockColHour.addClass("hour col-2")
          timeBlockColDescription.addClass("description col-8")
          timeBlockColBtn.addClass("saveBtn col-2")
        //   saveBtn.addClass("saveBtn")
          timeBlockRow.addClass("row");
          timeBlockRow.attr("data-hours", workHours[i]);
          
          timeBlockColHour.text((workHours[i]));
          timeBlockColDescription.append(textArea)
        //   timeBlockColBtn.append(saveBtn)

          timeBlock.append(timeBlockRow)

          timeBlockRow.append(timeBlockColHour)
          timeBlockRow.append(timeBlockColDescription)
          timeBlockRow.append(timeBlockColBtn)


        }

    $(".container").append(timeBlock);

   
    

});

 

    //     // color coded to show past, present, future time block 

    //     // click into a time block 

    //     //  enter event into time block

    //     // click button to save event in time block 

    //     // when button is clicked event is saved to local storage

    //     // event persist if page is refreshed 
