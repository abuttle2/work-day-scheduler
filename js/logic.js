let timeDisplayEl = $("#currentDay");
let descriptionsEls = $(".description");

let getSavedText = function () {
    var textArr = [];
    if (localStorage.getItem("descriptions")) {
        textArr = JSON.parse(localStorage.getItem("descriptions"));

        //Check if the object ID matches, and update the description to the saved localStorage description
        for (let i = 0; i < descriptionsEls.length; i++) {
            for (let j = 0; j < textArr.length; j++) {
                if (textArr[j].id === i) {
                    descriptionsEls[i].textContent = textArr[j].description;
                    break;
                }
            }
        }
    }
}

//Update text with current time
let displayTime = function () {
    var currentDateTime = moment().format('dddd, MMMM Do [at] hh:mm:ss a');
    timeDisplayEl.text(currentDateTime);
}

//Loop through the dates in HTML and store in an array
let pushDates = function () {
    const timeBlockEls = $(".time-block");
    var hoursArray = [];

    //Iterate through each time block. stores hours from html into an array
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
    const currentTime = moment().format("HH");
    var priorHoursArr = [];
    var futureHoursArr = [];
    var currentHour;

    const timeBlockEls = $(".time-block")

    for (var i = 0; i < plannerHours.length; i++) {
        //Ensure the hour is formatted correctly
        var hourIndex = moment(plannerHours[i], "HH").format("HH");

        //Check the values which indicate the current hour and use index to style the elements
        if (parseInt(hourIndex) < parseInt(currentTime)) {
            priorHoursArr.push(hourIndex);
            $(timeBlockEls[i]).next().addClass("past");
        }
        if (parseInt(hourIndex) > parseInt(currentTime)) {
            futureHoursArr.push(hourIndex);
            $(timeBlockEls[i]).next().addClass("future");
        }
        if (parseInt(hourIndex) === parseInt(currentTime)) {
            currentHour = hourIndex;
            $(timeBlockEls[i]).next().addClass("present");
        }
    }
}

let updateText = function () {
    var clickableEl = $('.clickable-font');
    var descriptionArr = [];
    let header = $("header");
    var storageTxt = $("<p>");

    clickableEl.on('click', function () {
        storageTxt.fadeIn();
        var index = clickableEl.index(this);
        var nearestDes = $(this).closest('tr').find('.description');
        var getDes = nearestDes.val();
        //Check if in storage
        if (localStorage.getItem("descriptions")) {
            descriptionArr = JSON.parse(localStorage.getItem("descriptions"));
        }
        //Replace existing data if the same element is saved again.
        for (var i = 0; i < descriptionArr.length; i++) {
            if (descriptionArr[i].id === index) {
                descriptionArr.splice(i, 1);
            }
        }
        //Push current ID and description to description array
        descriptionArr.push({
            id: index,
            description: getDes
        });
        //Save as a string in local storage
        localStorage.setItem("descriptions", JSON.stringify(descriptionArr));
        storageTxt.text("Data added to localStorage");
        header.append(storageTxt);
        storageTxt.fadeOut(1000);

    });

    console.log(header);
}
setInterval(displayTime, 1000);
getSavedText();
handleDates();
updateText();





