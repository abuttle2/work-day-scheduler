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
    const testTime = moment("10am", "ha").format("ha");
    const currentHour = moment().format("ha");
    const timeBlockEls = $(".time-block");
    var hoursArray = []


    //Iterate through each time block
    for (var i = 0; i < timeBlockEls.length; i++) {
        //Get the current hour and subtract for the number of time blocks (so we get the prior hours)
        // var sbtrHours = moment(testTime, "ha").subtract(i, 'hours').format("ha");
        // // var addHours = moment(testTime, "ha").add(i + 1, 'hours').format("ha");

        // // const start = moment().hour("8am", "ha");
        // // const end = moment().hour("6pm", "ha");

        var testFormat = moment(timeBlockEls[i].textContent, "ha").format("HH");
        console.log()
        hoursArray.push(testFormat);

        // var test = moment().hour(testTime).format("ha");

        // var testFormat = moment(timeBlockEls[i].textContent, "ha").format("ha");

        // if (testFormat.isBefore(currentHour)) {
        //     priorHoursArr.push(timeBlockEls[i].textContent);
        // }
        // // if (timeBlockEls[i].textContent == currentHour) {
        //     console.log("Equal!");
        // }
        // if (timeBlockEls[i].textContent > testTime) {
        //     futureHoursArr.push(timeBlockEls[i].textContent);
        // }

        // if (moment(sbtrHours, "ha").isBetween(start, end, 'hours')) {
        //     priorHoursArr.push(sbtrHours);
        //     // if (currentHour.isBetween(start, end, 'hours')) {
        //     // }
        // }
        // if (moment(sbtrHours, "ha").isBefore(start)) {
        //     console.log("Before");
        // }
        // if (moment(sbtrHours, "ha").isAfter(start)) {
        //     console.log("aFTER");
        // }



        // Do something for hours before 9am
        // else if (moment(sbtrHours, "ha").isAfter(end)) {
        //     console.log("After");
        // }

        // else if (moment(sbtrHours).isBefore(start, 'hours')) {
        //     console.log("Out of scope!");
        // }
        // else if (sbtrHours.isAfter(end, 'hours')) {
        //     console.log("Out of scope!");
        // }



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
    // console.log("prior: " + priorHoursArr);
    // console.log("Other" + futureHoursArr);



    return hoursArray;
}

let handleDates = function () {
    //Reference our returned array
    var plannerHours = pushDates()
    //Test time
    const currentTimeTest = moment().hours(10).format("HH");
    var priorHoursArr = [];
    var futureHoursArr = [];
    var currentHour = [];

    console.log(plannerHours);

    // console.log("Dates: " + dates);

    for (var i = 0; i < plannerHours.length; i++) {
        var hourIndex = moment(plannerHours[i], "HH").format("HH");

        console.log(plannerHours);
        console.log(hourIndex);

        //Check the values which indicate the current hour
        if (parseInt(hourIndex) < parseInt(currentTimeTest)) {
            priorHoursArr.push(hourIndex);
        }
        if (parseInt(hourIndex) > parseInt(currentTimeTest)) {
            futureHoursArr.push(hourIndex);
        }
        if (parseInt(hourIndex) === parseInt(currentTimeTest)) {
            currentHour.push(hourIndex);
        }
    }

    console.log(priorHoursArr);
    console.log(futureHoursArr);
    console.log(currentHour);

    // const currentHour = moment().format("ha");
    // const timeBlockEls = $(".time-block");
    // // console.log(currentTime);
    // var timeArray = [];
    // //Iterate through each of the time blocks to check the current hour
    // for (var i = 0; i < timeBlockEls.length; i++) {
    //     timeArray.push(timeBlockEls[i].textContent);
    //     // // console.log(timeBlockEls[i]);
    //     // if (timeBlockEls[i].textContent.isBefore(currentHour)) {
    //     //     $(timeBlockEls[i]).next().addClass("past");
    //     //     // console.log("Current: " + timeBlockEls[i].textContent);
    //     // }

    //     // if (timeBlockEls[i].textContent === currentHour) {
    //     //     //Applies the style to the next td (being the description parent)
    //     //     $(timeBlockEls[i]).next().addClass("present");
    //     //     console.log("Current: " + timeBlockEls[i].textContent);
    //     // }
    //     // else {
    //     //     $(timeBlockEls[i]).next().addClass("past");
    //     //     console.log("Other: " + timeBlockEls[i].textContent);
    //     // }
    //     // //TODO: Filter out hours prior and future hours
    // }
}

handleDates();

// console.log(timeArray);