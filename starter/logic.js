// handle displaying the time
let timeDisplayEl = $("#currentDay");

let displayTime = function () {
    var currentDateTime = moment().format('dddd, MMMM Do [at] hh:mm:ss a');
    timeDisplayEl.text(currentDateTime);
}

// dddd, MMMM Do

setInterval(displayTime, 1000);