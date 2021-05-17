// Set the date we're counting down to

var r1c1 = new Date("Jan 5, 2022 15:37:25").getTime();
var r1c3 = new Date("Jan 5, 2022 15:37:25").getTime();
var r1c4 = new Date("Jan 5, 2022 15:37:25").getTime();
var r1c5 = new Date("Jan 5, 2022 15:37:25").getTime();

var r2c1 = new Date("Jan 5, 2022 15:37:25").getTime();
var r2c2 = new Date("Jan 5, 2022 15:37:25").getTime();
var r2c3 = new Date("Jan 5, 2022 15:37:25").getTime();
var r2c4 = new Date("Jan 5, 2022 15:37:25").getTime();

var r3c1 = new Date("Jan 5, 2022 15:37:25").getTime();
var r3c5 = new Date("Jan 5, 2022 15:37:25").getTime();
var r4c1 = new Date("Jan 5, 2022 15:37:25").getTime();
var r4c5 = new Date("Jan 5, 2022 15:37:25").getTime();

var r5c1 = new Date("Jan 5, 2022 15:37:25").getTime();
var r5c2 = new Date("Jan 5, 2022 15:37:25").getTime();
var r5c3 = new Date("Jan 5, 2022 15:37:25").getTime();
var r5c5 = new Date("Jan 5, 2022 15:37:25").getTime();

var r6c2 = new Date("Jan 5, 2022 15:37:25").getTime();
var r6c3 = new Date("Jan 5, 2022 15:37:25").getTime();
var r6c4 = new Date("Jan 5, 2022 15:37:25").getTime();
var r6c5 = new Date("Jan 5, 2022 15:37:25").getTime();

var release = new Date("May 22, 2021 15:00:00").getTime();
var birthday = new Date("May 22, 2021 15:00:00").getTime();


function text(element, txt) {
  element.innerHTML = txt
  setTimeout(a,1);
}; 
isOnDiv=false;
// Update the count down every 1 second
function timer (dt, id, alt) {

  document.getElementById(id).addEventListener("mouseenter", function(  ) {
    elId = id
    isOnDiv=true;});
  document.getElementById(id).addEventListener("mouseout", function(  ) {isOnDiv=false;});

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

    if ( isOnDiv===true ) {
      document.getElementById(elId).innerHTML = alt ;
     } else {
      document.getElementById(id).innerHTML = days + "  " + hours + ":"
      + minutes + ":" + seconds ;

      return;
     }
  
    // Display the result in the element with id="demo"
  }, 1000);
  
}

var ids = {
  r1c1:{id:"r1c1", dt:r1c1, text:"heheh"}, r1c3:{id:"r1c3",dt:r1c3, text:"heheh"}, 
  r1c4:{id:"r1c4",dt:r1c4, text:"heheh"}, r1c5:{id:"r1c5",dt:r1c5, text:"heheh"}, 
  r2c1:{id:"r2c1",dt:r2c1, text:"heheh"}, r2c2:{id:"r2c2",dt:r2c2, text:"heheh"}, 
  r2c3:{id:"r2c3",dt:r2c3, text:"heheh"},r2c4:{id:"r2c4",dt:r2c4, text:"heheh"}, 
  r3c1:{id:"r3c1",dt:r3c1, text:"heheh"}, r3c5:{id:"r3c5",dt:r3c5, text:"heheh"}, 
  r4c1:{id:"r4c1",dt:r4c1, text:"heheh"}, r4c5:{id:"r4c5",dt:r4c5, text:"heheh"}, 
  r5c1:{id:"r5c1",dt:r5c1, text:"heheh"}, r5c2:{id:"r5c2",dt:r5c2, text:"heheh"}, 
  r5c3:{id:"r5c3",dt:r5c3, text:"heheh"}, r5c5:{id:"r5c5",dt:r5c5, text:"heheh"}, 
  r6c2:{id:"r6c2",dt:r6c2, text:"heheh"}, r6c3:{id:"r6c3",dt:r6c3, text:"heheh"},
  r6c4:{id:"r6c4",dt:r6c4, text:"heheh"}, r6c5:{id:"r6c5",dt:r6c5, text:"heheh"}, 
  release:{id:"release",dt:release, text:"heheh"}}

for (key in ids) {
  timer(ids[key]['dt'],ids[key]['id'],ids[key]['text'])
}
timer(release, "release", "text")
timer(r1c1, "r1c1", "text")
timer(birthday, "birthday", "text")