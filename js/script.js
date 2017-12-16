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

            if (d < 10) {
                daysPlaceholder.innerHTML = "0" + d + "d";
            }else{
                daysPlaceholder.innerHTML = d + "d";
            } 
            if (h < 10) {
                hourPlaceholder.innerHTML = "0" + h + "h";
            }else{
                hourPlaceholder.innerHTML =  h + "h";
            } 
            if (m < 10) {
                minutesPlaceholder.innerHTML = "0" + m + "m";
            }else{
                minutesPlaceholder.innerHTML = m + "m";
            } 
            if (s < 10) {
                secondsPlaceholder.innerHTML = "0" + s + "s";
            }else{
                secondsPlaceholder.innerHTML = s + "s";
            }    
          
        
        }, interval);

    }

};



window.addEventListener("resize", runCarousel);
window.addEventListener("load", runCarousel);

function runCarousel() {
        $('.team__list').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1424,
                    settings: "unslick"
                  },
                {
                    breakpoint: 1224,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: true,
                      dots: true
                    }
                  },
                  {
                    breakpoint: 990,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                  },
                  {
                    breakpoint: 690,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
            ]
          });
}