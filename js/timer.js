var outTimer = document.getElementById('clock'),
    secEnd = 1 * 3600, // секунд до 1:00
    serDay = 24 * 3600; // секунд в сутках

setInterval(function () {
    var curDate = new Date(),
        curSec = curDate.getHours() * 3600 + curDate.getMinutes() * 60 + curDate.getSeconds() * 01,
        diff = secEnd - curSec;

    if (diff < 0) {
        diff = serDay + diff;
    }

    var hours = Math.floor(diff / 3600),
        minutes = Math.floor(diff / 60) % 60,
        seconds = Math.floor(diff) % 60;

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    outTimer.innerHTML = hours + ':' + minutes + ':' + seconds;
}, 1000);
