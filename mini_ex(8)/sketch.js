var x;
var y;
var slider;

 

function setup() {
  createCanvas(400,400);
  background(51);
  x = 200;
  y = 200;
 
 slider = createSlider(0,30,60);
 slider.style('height','100px');
}

function draw() {
  
  stroke(255);
  strokeWeight(2);
  fill(234,210,92);
  point(x,y);
  
  var r = floor(random(0,4));
  
  switch (r) {
  case 0:
    x = x + 4;
    break;
  case 1:
    x = x - 4;
    break;
  case 2:
    y = y + 4;
    break;
  case 3:
    y = y - 4;
    break;
}

 var val = slider.value();
  frameRate(val);
}

