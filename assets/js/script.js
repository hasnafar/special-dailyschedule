// Variables for current date and current time
var currentDayEl = moment ().format("dddd, MMMM Do, YYYY")
var currentTime=moment().format('h');

// Setting Current Day at the header
$("#currentDay").html(currentDayEl);

// Setting color of text area based on current time
function timeSetter() {


  $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id"));
      

      if (timeBlock < currentTime || timeBlock > 5) {
          $(this).children("textarea").removeClass("future");
          $(this).children("textarea").removeClass("present");
          $(this).children("textarea").addClass("past");
      }
      else if (timeBlock == currentTime) {
        $(this).children("textarea").removeClass("past");
        $(this).children("textarea").removeClass("future");
        $(this).children("textarea").addClass("present");
      }
      else {
          $(this).children("textarea").removeClass("present");
          $(this).children("textarea").removeClass("past");
          $(this).children("textarea").addClass("future");

      }
  })
}

// Getting value of textarea and storing it in localstorage with key-value pairs of parent id
$('button').on("click", function() {
  var picker=$(this).parent();
  var text = picker.children("textarea").val();
  var key=picker.attr("id");
  localStorage[key]=text;
});

//Displaying data from localStorage upon refresh
$(window).on('load', function(){

  var vals = Object.values(localStorage);
  var keys = Object.keys(localStorage);
  var sizeofLocalStorage = Object.keys(localStorage).length;

      for(var i=0;i<sizeofLocalStorage;i++) {
          var picker=$('*[id='+keys[i]+']');
          picker.children("textarea").val(vals[i]);
      }
});


timeSetter();

