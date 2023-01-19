
var today = dayjs();
var timeBlockEl = document.querySelector('.time-block');
//Displays the current date in the header
$('#currentDay').text(today.format('MMMM DD YYYY '));


// TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

$(document).ready(function () {
  $(".saveBtn").on("click", function(){
     var task = $(this).siblings(".description").val();
     var time = $(this).parent().attr("id");
    
     // stores the newly created task in the local storage
     localStorage.setItem(time, task);
     checkTime();

    
  })

  
 // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    
    var checkTime = function(){
      var currentHour = dayjs().hour();
      $(".time-block").each(function(){
        var elementHour = parseInt($(this).attr("id").split("-")[1]);
        console.log (elementHour)
        console.log(currentHour)
        if (elementHour < currentHour){
          $(this).removeClass(["present", "future"]).addClass("past");
        }
        else if (elementHour === currentHour){
          $(this).removeClass(["past", "future"]).addClass("present");
        }

        else{
          $(this).removeClass(["present", "past"]).addClass("future");
        }
        
      })
    }
  
    
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

// gets any tasks stored in the local storage and puts it into the proper div
$('#hr9').val(localStorage.getItem('hour-9'))
$('#hr10').val(localStorage.getItem('hour-10'))
$('#hr11').val(localStorage.getItem('hour-11'))
$('#hr12').val(localStorage.getItem('hour-12'))
$('#hr13').val(localStorage.getItem('hour-13'))
$('#hr14').val(localStorage.getItem('hour-14'))
$('#hr15').val(localStorage.getItem('hour-15'))
$('#hr16').val(localStorage.getItem('hour-16'))
$('#hr17').val(localStorage.getItem('hour-17'))
    
    checkTime();

  });

  

  