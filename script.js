const inputContainer = document.getElementById("input-container")
const countdownForm = document.getElementById("countdownForm")
const dateEl = document.getElementById("date-picker")

const countdownEl = document.getElementById("countdown")
const countdownElTitle = document.getElementById("countdown-title")
const countdownButton = document.getElementById("countdown-button")
const timeElements = document.querySelectorAll("span")


let countdownTitle = ""
let countdownDate = ""
let countdownValue = Date
let countdownActive

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

// set date input min with today's date
const today = new Date().toISOString().split("T")[0]
dateEl.setAttribute("min", today)


// populate countdown and complete ui
updateDom = () => {
    countdownActive = setInterval(() => {
        const now = new Date().getTime()
        const distance = countdownValue - now
        console.log("distance", distance)

        const days = Math.floor(distance / day)
        const hours = Math.floor((distance % day) / hour)
        const minutes = Math.floor((distance % hour) / minute)
        const seconds = Math.floor((distance % minute) / second)

        console.log(days, hours, minutes, seconds)

        // populate our countdown
        countdownElTitle.textContent = `${countdownTitle}`
        timeElements[0].textContent = `${days}`
        timeElements[1].textContent = `${hours}`
        timeElements[2].textContent = `${minutes}`
        timeElements[3].textContent = `${seconds}`

        // hide input
        inputContainer.hidden = true

        // show countdown
        countdownEl.hidden = false
    }, second)
}


// take values forom form input
updateCountdown = (e) => {
    e.preventDefault()
    countdownTitle = e.srcElement[0].value
    countdownDate = e.srcElement[1].value
    console.log(countdownTitle)
    console.log(countdownDate)
    // check for valid date
    if (countdownDate === "") {
        alert("please select the date for countdown")
    } else {
         // get the number version of current date
    countdownValue = new Date(countdownDate).getTime()
    console.log("countdownValue" ,countdownValue)
    updateDom()
    }

}

// reset all values
reset = () => {
    // hide countdowns and show inputs
    countdownEl.hidden = true
    inputContainer.hidden = false

    // stop the countdown
    clearInterval(countdownActive)

    // explicitly reset values for countdown title
    countdownTitle = ""
    countdownDate = ""
}

// event listener
countdownForm.addEventListener("submit", updateCountdown)
countdownButton.addEventListener("click", reset)