// CALCULATION

const dateField = document.querySelector(".chooseDate input");
const celebrateName = document.querySelector(".chooseDate")


let celebrateDay;
// for another page(with input)
if (dateField != null) {
    console.log(typeof dateField.type);
    const calculateButton = document.querySelector(".calendar button");

    // add min/value=tomorrow for input.
    function minDate() {
        let dd = String(celebrateDay.getDate()).padStart(0, "0");
        let mm = String(celebrateDay.getMonth() + 1).padStart(2, "0"); //January is 0!
        let yyyy = celebrateDay.getFullYear();
        let tomorrow = yyyy + "-" + mm + "-" + dd;
        dateField.setAttribute("min", tomorrow);
        dateField.setAttribute("value", tomorrow);
    }

    celebrateDay = new Date();
    celebrateDay.setHours(0, 0, 0, 0);
    celebrateDay.setDate(celebrateDay.getDate() + 1);
    minDate();

    // if we change value of input celebrateDay===new value
    dateField.addEventListener("change", function () {
        if (dateField.value === "") {
            return;
        }
        celebrateDay = new Date(dateField.value);
        celebrateDay.setHours(0, 0, 0, 0);

        let today = new Date();
        if (celebrateDay - today > 0) {
            timerOn = setInterval(calculateDaysBeforeCelebrateDay, 1000);
        }
    });
}

else if (celebrateName.className === "chooseDate newYear") {
    celebrateDay = new Date("January25,2022,2022 00:00");
}

else if (celebrateName.className === "chooseDate starWars") {
    celebrateDay = new Date("May4,2022,2022 00:00");
}

else if (celebrateName.className === "chooseDate valentinesDay") {
    celebrateDay = new Date("February14,2022,2022 00:00");
}

else if (celebrateName.className === "chooseDate sleepDay") {
    celebrateDay = new Date("Martch14,2022,2022 00:00");
}

else if (celebrateName.className === "chooseDate halloween") {
    celebrateDay = new Date("October31,2021,2021 00:00");
}

function calculateDaysBeforeCelebrateDay() {
    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const today = new Date();
    const difference = celebrateDay - today;

    let days = Math.floor(difference / msInDay);
    document.querySelector(".days").textContent = days;

    let hours = Math.floor((difference % msInDay) / msInHour);
    document.querySelector(".hours").textContent = hours;

    let minutes = Math.floor((difference % msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = minutes;

    let seconds = Math.floor((difference % msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = seconds;

    if (difference <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerOn);
    }
}

let timerOn = setInterval(calculateDaysBeforeCelebrateDay, 1000);


