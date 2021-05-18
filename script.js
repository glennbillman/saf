function displayTime(inc) {
  if (inc.toString().length < 2) {
    return "0" + inc.toString();
  } else {
    return inc;
  }
}

var i = 0;

function timer(date, id, alt) {
  // get date
  var dt = new Date(date).getTime();

  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = dt - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var n = document.getElementById("new");
    var music = document.getElementById("music");
    var colors = [
      "#3AD5C4",
      "#ECFD36",
      "#70FD56",
      "#FD45A5",
      "#AB53C4",
      "#0A4BB8",
    ];
    n.style.color = colors[Math.floor(Math.random() * colors.length)];
    music.style.color = colors[Math.floor(Math.random() * colors.length)];

    document.getElementById("new").innerHTML = "new new new";
    document.getElementById("music").innerHTML = "music music music";

    if (seconds < 0) {
      document.getElementById(id).innerHTML = "00 00:00:00";
    } else {
      document.getElementById(id).innerHTML =
        displayTime(days) +
        "  " +
        displayTime(hours) +
        ":" +
        displayTime(minutes) +
        ":" +
        displayTime(seconds);

      if (document.getElementById(id + "Text")) {
        document.getElementById(id + "Text").innerHTML = alt;
      }
    }
  }, 1000);
}

var ids = {
  r1c1: { id: "r1c1", dt: "May 26, 2021 07:14:00", text: "NEXT FULL MOON" },
  r1c3: {
    id: "r1c3",
    dt: "May 18, 2021 22:00:00",
    text: "CRUEL SUMMER EP 5 AIRS",
  },
  r1c4: {
    id: "r1c4",
    dt: "July 5, 2021 9:15:32",
    text: "BACK TO SCHOOL SALES BEGIN",
  },
  r1c5: { id: "r1c5", dt: "Sept 23, 2021 00:00:00", text: "LIBRA SZN" },
  r2c1: {
    id: "r2c1",
    dt: "Dec 12, 2021 03:02:28",
    text: "TOTAL SOLAR ECLIPSE",
  },
  r2c2: { id: "r2c2", dt: "July 23, 2021 07:00:00", text: "TOKYO OLYMPICS" },
  r2c3: {
    id: "r2c3",
    dt: "Sept 3, 2022 15:37:12",
    text: "SOLAR ORBITER'S 3RD VENUS FLYBY",
  },
  r2c4: {
    id: "r2c4",
    dt: "May 13, 2022 23:22:25",
    text: "ROBERT PATTINSON'S BIRTHDAY",
  },
  r5c1: { id: "r5c1", dt: "Sept 09, 2022 00:00:00", text: "AFTER WE FELL" },
  r5c2: { id: "r5c2", dt: "May 21, 2021 00:00:00", text: "BUTTER" },
  r5c3: { id: "r5c3", dt: "April 22, 2022 00:00:00", text: "EARTH DAY 2022" },
  r5c5: {
    id: "r5c5",
    dt: "June 7, 2021 20:00:00",
    text: "BACHELORETTE SZN 17 AIRS",
  },
  r6c2: { id: "r6c2", dt: "Dec 1, 2021 12:01:21", text: "12 01 21 12:01:12" },
  r6c3: { id: "r6c3", dt: "MAY 23, 2021 18:03:41", text: "NEXT FAMILY DINNER" },
  r6c4: { id: "r6c4", dt: "Feb 19, 2022 00:00:00", text: "PISCES SZN" },
  r6c5: { id: "r6c5", dt: "Jan 1, 2022 00:00:00", text: "NYE 2022" },
  release: { id: "release", dt: "May 22, 2021 15:00:00", text: "SAF COMEBACK" },
};

for (key in ids) {
  timer(ids[key]["dt"], ids[key]["id"], ids[key]["text"]);
}
