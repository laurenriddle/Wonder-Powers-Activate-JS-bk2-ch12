document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)

const flightSection = document.querySelector("#flight")

function flightHandlerFunction () {
    flightSection.classList.remove("disabled")
    flightSection.classList.add("enabled")
}


document.querySelector("#activate-mindreading").addEventListener("click", mindReadingHandlerFunction)

const mindReadingSection = document.querySelector("#mindreading")
function mindReadingHandlerFunction () {
    mindReadingSection.classList.remove("disabled")
    mindReadingSection.classList.add("enabled")
}


document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction)

const xraySection = document.querySelector("#xray")
function xrayHandlerFunction () {
    xraySection.classList.remove("disabled")
    xraySection.classList.add("enabled")
}