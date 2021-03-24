// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {

const takeoff = document.getElementById("takeoff");
const landing = document.getElementById("landing");
const missionAbort = document.getElementById("missionAbort");
const flightStatus = document.getElementById("flightStatus");
const shuttleBackground = document.getElementById("shuttleBackground");
const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
const upButton = document.getElementById("up");
const downButton = document.getElementById("down");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const rocket = document.getElementById("rocket");


function shuttleInFlight(){
    window.confirm("Confirm that the shuttle is ready for takeoff.");
    flightStatus.innerHTML ="Shuttle in flight.";
    shuttleBackground.style.backgroundColor = "blue";
    spaceShuttleHeight.innerHTML = 10000;
}
takeoff.addEventListener("click", shuttleInFlight);

function shuttleHasLanded(){
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = 0;
}
landing.addEventListener("click", shuttleHasLanded);

function missionAborted(){
    if (window.confirm("Confirm that you want to abort the mission.") === true) {
    flightStatus.innerHTML = "Mission aborted.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = 0;
    }
}
missionAbort.addEventListener("click", shuttleHasLanded);


// Move rocket
let position = 0;

function moveRight() {
    position +=10;
    rocket.style.left = position + 'px';
}
rightButton.addEventListener("click", moveRight);

function moveLeft() {
    position -=10;
    rocket.style.left = position + 'px';
}
leftButton.addEventListener("click", moveLeft);

function moveUp() {
    position -=10;
    rocket.style.top = position + "px";
    spaceShuttleHeight.innerHTML = 10000;
}
upButton.addEventListener("click", moveUp);

function moveDown() {
    position +=10;
    rocket.style.top = position + "px";
    spaceShuttleHeight.innerHTML = -10000;
}
downButton.addEventListener("click", moveDown);




}
window.addEventListener("load", init);


