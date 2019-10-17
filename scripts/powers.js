// this function and event listener puts a class of enabled on the flight section when the button is clicked
document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)

const flightSection = document.querySelector("#flight")

function flightHandlerFunction () {
    flightSection.classList.remove("disabled")
    flightSection.classList.add("enabled")
}

// this function and event listener puts a class of enabled on the mind reading section when the button is clicked
document.querySelector("#activate-mindreading").addEventListener("click", mindReadingHandlerFunction)

const mindReadingSection = document.querySelector("#mindreading")
function mindReadingHandlerFunction () {
    mindReadingSection.classList.remove("disabled")
    mindReadingSection.classList.add("enabled")
}

// this function and event listener puts a class of enabled on the xray section when the button is clicked
document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction)

const xraySection = document.querySelector("#xray")
function xrayHandlerFunction () {
    xraySection.classList.remove("disabled")
    xraySection.classList.add("enabled")
}



// this function and event listener removes the class of enabled from all sections and adds a class of disabled
document.querySelector("#deactivate-all").addEventListener("click", disableAll)

const disableAllSections = document.querySelectorAll(".disabled")

function disableAll () {
for (let i = 0; i < disableAllSections.length; i++) {
    disableAllSections[i].classList.remove("enabled")
    disableAllSections[i].classList.add("disabled");
   }
}


// this function and event listener adds the class of enabled from all sections and removes a class of disabled

document.querySelector("#activate-all").addEventListener("click", enableAll)

const enableAllSections = document.querySelectorAll(".disabled")

function enableAll () {
for (let i = 0; i < enableAllSections.length; i++) {
    enableAllSections[i].classList.add("enabled");
    enableAllSections[i].classList.remove("disabled")
   }
}


