// Set the date we're counting down to
var demodt = new Date("Jan 5, 2022 15:37:25").getTime();
var release = new Date("May 22, 2021 15:00:00").getTime();
var birthday = new Date("March 11, 2022 00:00:00").getTime();


// Update the count down every 1 second
function timer (dt, id) {

  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = dt - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById(id).innerHTML = days + "  " + hours + ":"
    + minutes + ":" + seconds ;
  }, 1000);
  
}

timer(release, "release")
timer(demodt, "demo")
timer(birthday, "birthday")