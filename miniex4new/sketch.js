// Where are the circles variable
var x, y;

var a,b;

var c,d;

var r,g,b;

var img;
function preload(){
img = loadImage('assets/songoku.png');
}

var song; 
function preload(){
song = loadSound('assets/dragonball.mp3'); 

}

function setup() {
  createCanvas(720, 400);
 // Circles starting position
  x = width / 2;
  y = height;
  
  a = width / 3
  b = height;
  
  c = width / 6
  d = height; 
  
  song.play();
  
  confirm ("Press once to help Son Goku!"); 
  
  
   r = random(255);
  g = random(255);
  b = random(255);
  

 
}

function draw() {
  background(200);
  
 
 
  // The Dancing Circles
  stroke(50);
  fill(r,g,b);
  ellipse(x, y, 24, 24);
  
  stroke(50);
  fill(r,g,b);
  ellipse(a,b,50,50);
  
  stroke(50);
  fill(r,g,b);
  ellipse(x/2,y,64,64);
  
  stroke(50);
  fill(r,g,b);
  ellipse(c,d,30,30);
  
  stroke(50)
  fill(r,g,b);
  ellipse(x,y,70,70);
  
  stroke(50)
  fill(r,g,b);
  ellipse(360,50,300,100);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-3, 3);
  // Moving up at a constant speed
  y = y - 1;
  
  a = a + random(-4,4);
  
  b = y - 2;
  
  c = c + random(-2,2);
  
  d = y - 3;
  
  
  // Resets at the bottom
  if (y < 0) {
    y = height;
  }
}