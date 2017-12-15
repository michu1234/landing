window.onload = function (e) {

    // SET DATE TO COUNTDOWND...
    let eventTime = moment('24-12-2017 00:00:00', 'DD-MM-YYYY HH:mm:ss').unix(),
        currentTime = moment().unix(),
        diffTime = eventTime - currentTime,
        duration = moment.duration(diffTime * 1000, 'milliseconds'),
        interval = 1000;
    daysPlaceholder = document.querySelector(".inputForm__timer-item:first-child");
    hourPlaceholder = document.querySelector(".inputForm__timer-item:nth-of-type(2)");
    minutesPlaceholder = document.querySelector(".inputForm__timer-item:nth-of-type(3)");
    secondsPlaceholder = document.querySelector(".inputForm__timer-item:nth-of-type(4)");


    if (diffTime > 0) {
        setInterval(function () {

            duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
            var d = moment.duration(duration).days(),
                h = moment.duration(duration).hours(),
                m = moment.duration(duration).minutes(),
                s = moment.duration(duration).seconds();

            daysPlaceholder.innerHTML = d + "d";
            hourPlaceholder.innerHTML = h + "h";
            minutesPlaceholder.innerHTML = m + "m";
            secondsPlaceholder.innerHTML = s + "s";
        }, interval);

    }

};