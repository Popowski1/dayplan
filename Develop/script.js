// Display today's day and date
var timeToday = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(timeToday);

$(document).ready(function () {

    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })
    function counter() {
        var time = moment().hour();

            $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            if (blockTime < time) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === time) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
    $("#hour8am .description").val(localStorage.getItem("hour8am"));
    $("#hour9am .description").val(localStorage.getItem("hour9am"));
    $("#hour10am .description").val(localStorage.getItem("hour10am"));
    $("#hour11am .description").val(localStorage.getItem("hour11am"));
    $("#hour12pm .description").val(localStorage.getItem("hour12pm"));
    $("#hour1pm .description").val(localStorage.getItem("hour1pm"));
    $("#hour2pm .description").val(localStorage.getItem("hour2pm"));
    $("#hour3pm .description").val(localStorage.getItem("hour3pm"));
    $("#hour4pm .description").val(localStorage.getItem("hour4pm"));
    $("#hour5pm .description").val(localStorage.getItem("hour5pm"));

    counter();
})