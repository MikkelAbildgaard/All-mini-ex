var img;
function preload(){
  img = loadImage("assets/worldphysicalmap.jpg");
}

function setup() {
  // Remember to expand the canvas to see more of the map
  createCanvas(windowWidth, windowHeight); 
  background(0);  
  
  // The rate in which the storm "develops"
  frameRate(20);
  
  //Loading of the image
  image(img,0,0);
} 

function draw() {
  // Placement of the storm
  var p = createVector(width/2,height/2)
  //Random placement
  var v = createVector(0,-random(10))
  // Size of the storm and random placement
  branch(p,v,random(10,12),0.5)
}

function branch(p,v,thickness, alpha){
  //the reference for the p5js vector
  var newP = p5.Vector.add(p,v);
  //Rule 1 - the rotation is random, which is also characterized in a generative system
  var newV = v.rotate(random(0.3,0.3));
  //Indicates the thickness of the roots
  var newThickness = thickness*0.10;
  //The center of the storm
  var newAlpha = alpha*0.10;
  
  strokeWeight(thickness)
  NoFill;
  stroke(255,5);
  line(p.x,p.y,newP.x,newP.y);
  
  //Rule 2 - This keeps the storm regenerating
  if(thickness>1.0){
    branch(newP,newV,newThickness,newAlpha)
  }
}
// Extra function to make "the storm" more controllable 
function branch(p,v,thickness,alpha){
  var newP2 = p5.Vector.add(p,v);
  var newV2 = v.rotate(random(-0.2,0.1));
  var newThickness2 = thickness*0.995;
  var newAlpha2 = alpha*0.20;
  
  strokeWeight(thickness)
  noFill();
  stroke(255,5);
  line(p.x,p.y,newP2.x,newP2.y);
  
  if(thickness>1.0){
  branch(newP2,newV2,newThickness2,newAlpha2)
  }
}

//Randomness, repetition and regeneration. 

