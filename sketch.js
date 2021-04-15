var song;
var gui;
let r, g, b;
var WTPO1, WTPO2;
var button;


function preload()
  {
    WTPO1 = loadImage("photos/WTPO1.jpg");
    WTPO2 = loadImage("photos/WTPO2.jpg");
  }

//built in function to p5js, it runs once
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  d = select('.div-block');
  d.position(windowWidth/2,windowHeight/4);
  
 r = random(255);
  g = random(255);
  b = random(255);
  
  song = loadSound("music/WTPOaudio.mp3", loaded);
  button = createButton ("play");
  button.mousePressed(togglePlaying);
  
 
  
   gui = new Gui();
  let gui_setup = new dat.GUI();
 
  
 
 
  gui_setup.add(gui, 'showDescription').onChange(description);
 
  
  
  
}

function togglePlaying() {
  song.play();
  song.setVolume(.5);
}

 function loaded(){
  song.play();
   song.loop();
   
   
  }


function draw() {
  background(r, g, b, 127);
  
  
  
  
  noFill();
  
  image(WTPO1, 0, 0);
  
  image(WTPO1, windowWidth, windowHeight);
  
 
  
 
  
  for(let i = windowWidth * .25; i <= windowWidth * .75; i+=windowWidth * .25){
    for(let y = windowHeight/2-windowHeight/4; y <= windowHeight/2 + windowHeight/4; y+=windowHeight/4){
      
     
  }
  }
  
  print(windowWidth/2 - 100,"mod");
  print(windowWidth/2,"width/2");
  noLoop();
}



//create function with 4 arguments/variables to use later


function mousePressed(){
  redraw();
  
   
    
    r = random(255);
    g = random(255);
    b = random(255);

}

function mouseDragged(){
  redraw();
}

function description(){
  if(gui.showDescription){
    d.style('display','block');
     
  } else {
    d.style('display','none');
  }
}

function Gui(){
  
  this.showDescription = true;
  
  
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

