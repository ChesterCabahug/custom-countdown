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


// set date input min with today's date
const today = new Date().toISOString().split("T")[0]
dateEl.setAttribute("min", today)


// populate countdown and complete ui
updateDom = () => {
    const now = new Date().getTime()
    const distance = countdownValue - now
    console.log("distance", distance)

}


// take values forom form input
updateCountdown = (e) => {
    e.preventDefault()
    countdownTitle = e.srcElement[0].value
    countdownDate = e.srcElement[1].value
    console.log(countdownTitle)
    console.log(countdownDate)
    // get the number version of current date
    countdownValue = new Date(countdownDate).getTime()
    console.log("countdownValue" ,countdownValue)
    updateDom()
}

// event listener
countdownForm.addEventListener("submit", updateCountdown)
