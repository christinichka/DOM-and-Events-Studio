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


let xPosition = 350;
let yPosition = 250;


const score = spaceShuttleHeight.innerHTML;
let count = Number(score);

// console.log(originalPosition);

// Takeoff Button Events
function shuttleInFlight(){
    window.confirm("Confirm that the shuttle is ready for takeoff.");
    flightStatus.innerHTML ="Shuttle in flight.";
    shuttleBackground.style.backgroundColor = "blue";
    spaceShuttleHeight.innerHTML = count + 10000;
    rocket.style.top = (yPosition -=10) + "px"; /*move rocket up 1*/
}
takeoff.addEventListener("click", shuttleInFlight);
// Landing Button Events
function shuttleHasLanded(){
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = 0;
     /*go back to original position*/
    //  rocket.style.left = (xPosition) + 'px';
    //  rocket.style.top = (yPosition) + "px";
}
     
landing.addEventListener("click", shuttleHasLanded);
// Mission Aborted Button Events
function missionAborted(){
    if (window.confirm("Confirm that you want to abort the mission.") === true) {
    flightStatus.innerHTML = "Mission aborted.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = 0;
    /*go back to original position*/

    }
}
missionAbort.addEventListener("click", missionAborted);

// Move rocket using the 4 directional buttons
function moveRight() {
    if (xPosition < 700) {
        rocket.style.left = (xPosition +=10) + 'px'; 
    }
}
rightButton.addEventListener("click", moveRight);


function moveLeft() {
    if (xPosition > 0) {
    rocket.style.left = (xPosition -=10) + 'px';
    }
}
leftButton.addEventListener("click", moveLeft);


function moveUp() {
    if (yPosition > 0 && yPosition < 400) {
    rocket.style.top = (yPosition -=10) + "px";
    spaceShuttleHeight.innerHTML = count += 10000; /*+10000 miles every time the button is clicked*/
    }
}
upButton.addEventListener("click", moveUp);

function moveDown() {
    if (yPosition < 250) {
    rocket.style.top = (yPosition +=10) + "px";
        if (count > 0) {
            spaceShuttleHeight.innerHTML = count -= 10000; /*-10000 miles every time the button is clicked*/
        } else {
            spaceShuttleHeight.innerHTML = count;
        }
    
    }
}
downButton.addEventListener("click", moveDown);

}
// Page loading
window.addEventListener("load", init);
