// handle displaying the time
let timeDisplayEl = $("#currentDay");
let descriptionsEls = $(".description");

let displayTime = function () {
    var currentDateTime = moment().format('dddd, MMMM Do [at] hh:mm:ss a');
    timeDisplayEl.text(currentDateTime);
}

setInterval(displayTime, 1000);

let setCellColor = function () {
    const currentTime = moment().format("ha");
    const timeBlockEls = $(".time-block");
    console.log(currentTime);

    //Iterate through each of the time blocks to check the current hour
    for (var i = 0; i < timeBlockEls.length; i++) {
        console.log(timeBlockEls[i]);
    }


}

setCellColor();