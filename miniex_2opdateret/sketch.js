function setup() {
  createCanvas(800,600);




//hat
 
fill(128,165,254);  
triangle(363,154,414,77,445,156);

//hat linjer

fill(0);
strokeCap(round);
line(371,142,440,145);
strokeCap(round);
line(381,126,434,128);
strokeCap(round);
line(392,111,428,113);


//krop


fill(0);
  ellipse(400,275,100,50);

  
  
//grønt hoved med ændring

  
        fill (195, 225, 35);
        ellipse(400,200,200,100);

 
  //øjne
  
 
  fill(255);
  ellipse(360,181,20,20);
  ellipse(440,180,20,20);
  
  //øjenæbler
  
  
  fill(0);
  ellipse(355,180,10,10);
  ellipse(435,180,10,10);
  
  
  
  //mund

  ellipse(400,220,60,35);

  //fødder
  
 
  fill(137,118,101);
  ellipse(370,308,50,25);
  ellipse(430,308,50,25);
  
  


  
}

var xoff = 0.0;

function draw() {
  
	
//noise function 1
  fill(215,111,169);
  xoff = xoff + .01;
  var n = noise(xoff) * 500;
  line(n, 110, n, 400);
  
  // noise function 2
  fill(215,111,169);
  xoff = xoff + .01;
  var n = noise(xoff) * 600;
  line(n, 90, n, 300);
  
  // noise function 3
  fill(215,111,169);
  xoff = xoff + .02;
  var n = noise(xoff) * 700;
  line(n, 200, n, 300);
  
  //noise function 4
  
  fill(215,111,169);
  xoff = xoff + .02;
  var n = noise(xoff) * 800;
  line(n, 200, n, 300);
  
  
  
textSize(32);
text("HELP", 10, 30);
fill(0, 102, 153);
text("ME", 40, 60);
fill(0, 102, 153, 51);
text("BREATH", 70, 90);
fill(0,134,214,143);
text("CLICK",160,120);
  
  
frameRate(60);



//hat
  if(mouseIsPressed){
fill(128,165,254);  
triangle(363,154,414,77,445,156);
}
//hat linjer
if(mouseIsPressed){
fill(0);
strokeCap(round);
line(371,142,440,145);
strokeCap(round);
line(381,126,434,128);
strokeCap(round);
line(392,111,428,113);
}

//krop

if(mouseIsPressed){
fill(0);
  ellipse(400,275,100,50);
}
  
  
//grønt hoved med ændring

  if (mouseIsPressed){
        fill (195, 225, 35);
        ellipse(400,200,200,100);
}


 
  //øjne
  
  if(mouseIsPressed){
  fill(255);
  ellipse(360,181,20,20);
  ellipse(440,180,20,20);
  }
  //øjenæbler
  
  if(mouseIsPressed){
  fill(0);
  ellipse(355,180,10,10);
  ellipse(435,180,10,10);
  }
  
  
  //mund
if(mouseIsPressed){
  ellipse(400,220,60,35);
}
  //fødder
  
  if(mouseIsPressed){
  fill(137,118,101);
  ellipse(370,308,50,25);
  ellipse(430,308,50,25);
  
    
  }
  



  
  console.log(mouseX + ", " + mouseY);
  

 
}
