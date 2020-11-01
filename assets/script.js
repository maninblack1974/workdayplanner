// Declare variables need for Workday Planner.
var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#13");
var hour2 = $("#14");
var hour3 = $("#15");
var hour4 = $("#16");
var hour5 = $("#17");
var time = moment();

// When planner is open the Current Date should display at the top of the page.
//When user refreshes the page it should display the saved events.

function setPlanner() {

    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

// After the user clicks the save button it will be saved in local storage.
setPlanner();
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});

// Blocks are color coded to tell the user if it is in the past gray), present(red), and future(green).
// Time blocks display for standard business hours.
function pastPresentFuture() {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

pastPresentFuture();