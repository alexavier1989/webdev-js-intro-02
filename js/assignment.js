"use strict";

const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")

const resolution = "I will get a remote job as Web Developer and work from the beach"
const currentYear = 2025 // new Date().getFullYear();
let willMeetResolution = true

function updateYear() {
    yearElement.innerHTML = currentYear;
}

function updateResolution() {
    resolutionElement.innerHTML = resolution; 
}

function updateWillMeetResolution() {
    console.log(willMeetResolutionElement);
    willMeetResolutionElement.innerHTML = willMeetResolution; 

}

function render() {
    updateYear();
    updateResolution();
    updateWillMeetResolution();
}

submissionBtn.addEventListener("click", function () {
    render();

})
