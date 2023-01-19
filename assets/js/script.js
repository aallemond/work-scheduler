
var today = dayjs();

//Displays the current date in the header
$('#currentDay').text(today.format('MMMM DD, YYYY '));



//When the save button is clicked, save the text input to local storage along with the id of the div it was entered in.
$(document).ready(function () {
  $(".saveBtn").on("click", function(){
     var task = $(this).siblings(".description").val();
     var time = $(this).parent().attr("id");
    
    
    // Stores the newly created task in the local storage
     localStorage.setItem(time, task);
     

    
  })

  
 
 //Checks the current time and then compares it with the hour of each time block element and applies the appropriate class   
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
  
    
    

// Gets any tasks stored in the local storage and puts it into the proper div
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

  

  