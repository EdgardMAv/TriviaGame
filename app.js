// var endDate = new Date("May 28, 2019 12:00:00").getTime();

// var timer = setInterval(function(){
//     // here ill put my code
//     let now = new Date().getTime();
//     let t = endDate - now;

//     if(t >= 0){
//         let days = Math.floor(t / (1000 * 60 * 60 * 24));
//         let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         let mins = Math.floor9((t % (1000 * 60 * 60)) / (1000 * 60));
//         let secs = Math.floor((t % (1000 * 60 * 60))/ 1000);

//     document.getElementById("timer-days").innerHTML = days + 
//     "<span class='label'>DAY(s)</span>";
//     document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) +
//     "<span class='label'>HR(s)</span>";
//     document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) +
//     "<span class='label'>HR(s)</span>";
//     document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2) +
//     "<span class='label'>HR(s)</span>";

// } else {
//         document.getElementById("timer").innerHTML = "The time is over you lose!";
//     };

// }, 1000);
var dalayButtonAlert;
var windowTimeout = setTimeout(function(){
    alert("Aler #1: Called automatically 60 second after page load.");
} ,1000);
$("#start").on("click", function(){
    delayButtonAlert = setTimeout(function(){
        alert("Alert #2: Called 10 seconds after the start button is clicked.");
    },3000);
});

$("#cancel").on("click", function(){
    clearTimeout(delayButtonAlert);
});
$("#window-cancel").on("click", function(){
    clearTimeout(windowTimeout);
})
// it wast working like this so i put it in the index
// var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();
// var x = setInterval(function() {
// var now = new Date().getTime();
// var distance = countDownDate - now;

  
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s "; 
 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);