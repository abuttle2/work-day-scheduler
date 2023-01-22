// handle displaying the time
let timeDisplayEl = $("#currentDay");
let descriptionsEls = $(".description");

let displayTime = function () {
    var currentDateTime = moment().format('dddd, MMMM Do [at] hh:mm:ss a');
    timeDisplayEl.text(currentDateTime);
}

setInterval(displayTime, 1000);

//Loop through the dates in HTML and store in an array
let pushDates = function () {
    const testTime = moment("1pm", "ha").format("ha");
    const currentHour = moment().format("ha");

    const timeBlockEls = $(".time-block");

    var priorHoursArr = [];
    var futureHoursArr = [];

    //Iterate through each time block
    for (var i = 0; i < timeBlockEls.length; i++) {
        //Get the current hour and subtract for the number of time blocks (so we get the prior hours)
        var sbtrHours = moment(testTime, "ha").subtract(i + 1, 'hours').format("ha");
        var addHours = moment(testTime, "ha").add(i + 1, 'hours').format("ha");

        const start = moment("9am", "ha");
        const end = moment("5pm", "ha");

        if (moment(sbtrHours, "ha").isBetween(start, end, 'hours')) {
            priorHoursArr.push(sbtrHours);


            // if (currentHour.isBetween(start, end, 'hours')) {

            // }

        }

        //Push to a new array to check

        // console.log(addHours);
        // // console.log(testTime)
        // console.log(priorHoursArr);
        // console.log(futureHoursArr);

        //Create an object containing the previous and future hours array to return
        // var datesObj = {
        //     priorHours: priorHoursArr,
        //     futureHours: futureHoursArr
        // };

        // return datesObj;
    }
    console.log(priorHoursArr);
}

//     let handleDates = function () {
//         //Reference our returned array
//         // var dates = pushDates();

//         // console.log("Dates: " + dates);

//         const currentHour = moment().format("ha");
//         const timeBlockEls = $(".time-block");
//         // console.log(currentTime);
//         var timeArray = [];
//         //Iterate through each of the time blocks to check the current hour
//         for (var i = 0; i < timeBlockEls.length; i++) {
//             timeArray.push(timeBlockEls[i].textContent);
//             // // console.log(timeBlockEls[i]);
//             // if (timeBlockEls[i].textContent.isBefore(currentHour)) {
//             //     $(timeBlockEls[i]).next().addClass("past");
//             //     // console.log("Current: " + timeBlockEls[i].textContent);
//             // }

//             // if (timeBlockEls[i].textContent === currentHour) {
//             //     //Applies the style to the next td (being the description parent)
//             //     $(timeBlockEls[i]).next().addClass("present");
//             //     console.log("Current: " + timeBlockEls[i].textContent);
//             // }
//             // else {
//             //     $(timeBlockEls[i]).next().addClass("past");
//             //     console.log("Other: " + timeBlockEls[i].textContent);
//             // }
//             // //TODO: Filter out hours prior and future hours
//         }
//     }
// }
pushDates();
// handleDates();

// console.log(timeArray);