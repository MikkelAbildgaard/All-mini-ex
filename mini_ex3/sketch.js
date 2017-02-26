
function setup() {
 
 createCanvas(800, 600);   
 background(10);
 frameRate (5); 
 
}

function draw() {
  
 fill(152,80);  
 rect(0, 0, width, height);
 drawThrobber(20);  
}

function drawThrobber(num) {  
  
  //rotate variable
  push();
  translate(width/2, height/2);
  var cir = 360/num*(frameCount%num);
  rotate(radians(cir));
  stroke(10);
  fill(255,204,102);
  
  //tail
 triangle(88, 200, 158, 120, 186, 175);
   pop();
  
  // eyes
 
 push();
    translate(width/2,height/2);
  var cir = 360/num*(frameCount%num);
  rotate(radians(cir));
stroke(10);
  fill(0,153,255);
  
  //body of the fish
  ellipse(40, 200, 100, 60);
  stroke(10);
  fill(255);
  ellipse(20, 200, 10, 10);
  fill(0);
  ellipse(20,200,5,5);
  
  // mouth
  line(20, 180, 2, 180);
  
  //fin
  ellipse(50,188,30,3);
 pop();
 
 
// Loading text
push();
  translate(width/3,height/3);
  textSize(32);
 fill(255);
text("Loading...", 70, 100);
pop();

console.log(mouseX + ", " + mouseY);
}




