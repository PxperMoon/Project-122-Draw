x = 0;
y = 0;


screen_width = 0;
screen_height = 0;


draw_starfruit = "";
starfruit = "";


speak_data = "";
to_number = "";


var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();


function preload() {
 starfruit = loadImage("downloadn-removebg-preview (1).png");
}


function start() {
 document.getElementById("status").innerHTML = "System is listening please speak"; 
 recognition.start();
}
recognition.onresult = function(event) {


 console.log(event);


 to_number = Number(content);
 if(Number.isInteger(to_number)) {
   document.getElementById("status").innerHTML = "Started drawing starfruit";
   draw_starfruit = "set";
 }
 else {
   document.getElementById("status").innerHTML = "The speech detector has not recognized a number";
 }


 content = event.results[0][0].transcript;


 document.getElementById("status").innerHTML = "The speech has been recognized: " + content;


}


function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas(screen_width, screen_height - 150);
 canvas.position(100, 100);
 }


function draw() {
 if(draw_starfruit == "set") {
   document.getElementById("status").innerHTML = to_number + " starfruits drawn";


   speak_data = "Starfruits Drawn = " + to_number;


   speak(speak_data);


   draw_starfruit = "";


   for(var i = 1; i <= to_number; i++) {
     x = Math.floor(Math.random() * 700);
     y = Math.floor(Math.random() * 400);
     image(starfruit, x, y, 25, 25);

 }
}


function speak() {
   var synth = window.speechSynthesis;


   var utterThis = new SpeechSynthesisUtterance(speak_data);


   synth.speak(utterThis);


   speak_data = "";
}}
