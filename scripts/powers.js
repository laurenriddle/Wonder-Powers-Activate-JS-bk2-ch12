function activateButton (sectionID) {

    function buttons (constName) {
        constName.classList.remove("disabled")
        constName.classList.add("enabled")
    }
buttons(document.querySelector(sectionID))
}

// this function and event listener puts a class of enabled on the flight section when the button is clicked
document.querySelector("#activate-flight").addEventListener("click", function flight () {
    activateButton("#flight")
})


// this function and event listener puts a class of enabled on the mind reading section when the button is clicked
document.querySelector("#activate-mindreading").addEventListener("click", function mindReading () {
    activateButton("#mindreading")
})

// this function and event listener puts a class of enabled on the xray section when the button is clicked
document.querySelector("#activate-xray").addEventListener("click", function xray () {
    activateButton("#xray")
})



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


