// handle displaying the time
let timeDisplayEl = $("#currentDay");
let descriptionsEls = $(".description");

let displayTime = function () {
    var currentDateTime = moment().format('dddd, MMMM Do [at] hh:mm:ss a');
    timeDisplayEl.text(currentDateTime);
}

setInterval(displayTime, 1000);

// const currentHour = moment().format("ha");

//Loop through the dates in HTML and store in an array
let pushDates = function () {
    const timeBlockEls = $(".time-block");
    var hoursArray = [];

    //Iterate through each time block stores hours from html into an array
    for (var i = 0; i < timeBlockEls.length; i++) {
        var formattedHours = moment(timeBlockEls[i].textContent, "ha").format("HH");
        hoursArray.push(formattedHours);
    }
    return hoursArray;
}

let handleDates = function () {
    //Reference our returned array
    var plannerHours = pushDates()
    //Test time
    const currentTimeTest = moment().hours(11).format("HH");
    var priorHoursArr = [];
    var futureHoursArr = [];
    var currentHour;

    const timeBlockEls = $(".time-block")

    for (var i = 0; i < plannerHours.length; i++) {
        //Ensure the hour is formatted correctly
        var hourIndex = moment(plannerHours[i], "HH").format("HH");

        //Check the values which indicate the current hour and use index to style the elements
        if (parseInt(hourIndex) < parseInt(currentTimeTest)) {
            priorHoursArr.push(hourIndex);
            $(timeBlockEls[i]).next().addClass("past");
        }
        if (parseInt(hourIndex) > parseInt(currentTimeTest)) {
            futureHoursArr.push(hourIndex);
            $(timeBlockEls[i]).next().addClass("future");
        }
        if (parseInt(hourIndex) === parseInt(currentTimeTest)) {
            currentHour = hourIndex;
            $(timeBlockEls[i]).next().addClass("present");
        }
    }

    //     //Store 
    //     var hoursObj = {
    //         priorHours: priorHoursArr,
    //         futureHours: futureHoursArr,
    //         currentHour: currentHour
    //     }

    //     return hoursObj;
    // }

    // let setTimeBlockColors = function () {
    //     const timeBlockEls = $(".time-block")
    //     const timeBlockElTxt = $(".time-block").text();
    //     var datesObj = handleDates();
    //     // console.log(datesObj);

    //     for (var i = 0; i < datesObj.priorHours.length; i++) {
    //         var priorHoursHa = moment(datesObj.priorHours[i], "HH").format("HH");
    //         console.log(priorHoursHa);

    //         var formattedTextBlock = moment(timeBlockEls[i], "ha").format("HH");

    //         console.log(formattedTextBlock);

    //         // Check if current hour
    //         if (formattedTextBlock === datesObj.currentHour) {
    //             console.log("WOOO");
    //         }


    //     }
    // }

}


let updateText = function () {
    const descriptionEls = $(".description");
    var clickableEl = $('.clickable-font');

    var nearestDes = clickableEl.last('.description');

    // console.log(descriptionEls);

    // console.log(clickableEl);

    clickableEl.on('click', function () {

        var nearestDes = $(this).closest('.description');
        console.log(nearestDes);
        nearestDes.text("Hello");
        // if (descriptionEls.indexOf(clickableEl)) {
        //     descriptionEls.textContent = "Hello";
        // }

        // console.log(clickableEl.)

        // descriptionEls.textContent = "Hello";



        descriptionEls[2].textContent = '2';
        console.log("Clicked");
        nearestDes.textContent = "";
    });


}

handleDates();

updateText();

// setTimeBlockColors();





