const inputContainer = document.getElementById("input-container")
const countdownForm = document.getElementById("countdownForm")
const dateEl = document.getElementById("date-picker")


let countdownTitle = ""
let countdownDate = ""

// set date input min with today's date
const today = new Date().toISOString().split("T")[0]

dateEl.setAttribute("min", today)


// take values forom form input
updateCountdown = (e) => {
    e.preventDefault()
    countdownTitle = e.srcElement[0].value
    countdownDate = e.srcElement[1].value
    console.log(countdownTitle)
    console.log(countdownDate)
}

// event listener
countdownForm.addEventListener("submit", updateCountdown)
