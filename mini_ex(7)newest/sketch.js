var input;
var checkbox1;
var checkbox2;
var angle = 0;
var button1;
var button2;
var sliders = [];
var img;
var img1;
var themesong;

function preload(){
  
  themesong = loadSound('assets/themesong.mp3');
}

function setup() {
 createCanvas(800,800);
	
	//adding buttons
	button1 = createButton('add dancing Spongebob');
	button1.mousePressed(addsponge);
	button1.position(250,300);
	
	button2 = createButton('add music');
	button2.mousePressed(addmusic);
	button2.position(400,300);

	//input text
	input = createInput('Fast or slow waves?');
	input.position(150,260);
	
	//the sliders - 66 indicates the number of sliders
	for (var i = 0; i < 66; i ++) { 
		sliders [i] = createSlider(20, 255, 50);
		
		// used to help positioning the sliders
		sliders[i].position(140+i*18, 600);
		sliders[i].style('rotate',-50); 
	}
	
	//checkboxes
	checkbox1 = createCheckbox('', false);
	checkbox1.position(150,300);
	checkbox2 = createCheckbox('', false);
	checkbox2.position(200, 300);
	
}

function draw() {

// Had problems adding normal text, so this was a second solution
  text(input.value());
  
	var offset = 0;
	
	for(var i = 0; i < sliders.length; i++) {
		var x = map(sin(angle + offset), -1, 1, 0, 255);  
		sliders[i].value(x); //the value of the slider
		//offset determines how the sliders position
		offset += 0.15; 
	}
	//angle defines the speed of the sliders - depends on the which checkbox is checked
	
	if (checkbox1.checked()) {
	angle += 0.20;
	} else {
	angle += 0.025;
	}
	
	if (checkbox2.checked()) {
	angle += 0.015;
	} else {
	angle += 0.05;
	}
}

function addsponge(){
  img = createImage('assets/dancingspongebob.gif');
  img.position(400,400);
  
}

function addmusic(){
  themesong.play();
  themesong.setVolume(1);
}








