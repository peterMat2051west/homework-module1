function currentTime() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;

    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }

    if (hr == 12) {
        ampm = "PM";
    } else if (hr > 12) {
        hr -= 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    var utchr = d.getUTCHours();
    var timeDiff;
    var adjTimeDiff;
    var timeZone;

    timeDiff = utchr - hr;
    adjTimeDiff = Math.abs(timeDiff);

    if (adjTimeDiff == 8) {
        timeZone = "PT";
    } else if (adjTimeDiff == 7) {
        timeZone = "MT";
    } else if (adjTimeDiff == 6) {
        timeZone = "CT";
    } else if (adjTimeDiff == 5) {
        timeZone = "ET";
    } else {
        timeZone = "";
    }

    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    document.getElementById("clock").innerText = time;

    setInterval(currentTime, 1000);
}

currentTime();
