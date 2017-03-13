
var lines, markov, text1, text2, x = 140, y = 240; 

function preload() {

  text1 = loadStrings('../../data/miceandmen.txt');
  text2 = loadStrings('../../data/fiftyshades.txt');
  font = loadFont('../../fonts/Quickfrog.ttf');
  img = loadImage("assets/miceandmen.jpg")
}

function setup() {

// Setup
  createCanvas(500, 500);
  textFont(font, 20);
  textAlign(LEFT);
  
 replaceword = new RiString;
  
  lines = ["click to (re)generate!"];

// Creates the Markov Model 
  markov = new RiMarkov(4);

// Loads "Of mice and men" and "Fifty Shades of Grey" into the Markov Model
  markov.loadText(text1.join(' '));
  markov.loadText(text2.join(' '));

  drawText();
}

function draw() {
  

}

function drawText() {

  background(210);
  text(lines.join(' '), x, y, 400, 400);
}

// Every time the mouse is clicked random text pieces are generated
function mouseClicked() {

  x = y = 50;
  lines = markov.generateSentences(8);
  drawText();
  
}

