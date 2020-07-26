const inputContainer = document.getElementById("input-container")
const countdownForm = document.getElementById("countdownForm")
const dateEl = document.getElementById("date-picker")

const countdownEl = document.getElementById("countdown")
const countdownElTitle = document.getElementById("countdown-title")
const countdownButton = document.getElementById("countdown-button")
const timeElements = document.querySelectorAll("span")

const completeEl = document.getElementById("complete")
const completeElInfo = document.getElementById("complete-info")
const completeBtn = document.getElementById("complete-button")


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

        // hide input
        inputContainer.hidden = true
        console.log(days, hours, minutes, seconds)

        // if the timer has ended , show complete
        if (distance < 0) {
            countdownEl.hidden = true
            clearInterval(countdownActive)
            completeElInfo.textContent = `${countdownTitle} finished on ${countdownDate}`
            completeEl.hidden = false
            
        } else {
            // show the countdown in progress
            // populate our countdown
            countdownElTitle.textContent = `${countdownTitle}`
            timeElements[0].textContent = `${days}`
            timeElements[1].textContent = `${hours}`
            timeElements[2].textContent = `${minutes}`
            timeElements[3].textContent = `${seconds}`
            completeEl.hidden = true
            countdownEl.hidden = false

        }    
    }, second)
}


// take values from form input
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