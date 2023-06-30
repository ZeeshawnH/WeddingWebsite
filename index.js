const homeButton = document.getElementById("home");
const programInfo = document.getElementById("programInfo");
var container = document.getElementById("container");

// Countdown
const date = new Date("Jul 7, 2023 18:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(function() {
    let now = new Date().getTime();

    let diff = date - now;
    let secs = Math.floor(diff / 1000);
    let mins = Math.floor(secs / 60);
    let hours = Math.floor(mins / 60);
    let days = Math.floor(hours / 24);


    countdown.innerHTML = `Time left: ${days}:${hours % 24}:${mins % 60}:${secs % 60}`;

});