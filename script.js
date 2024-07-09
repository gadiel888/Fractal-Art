let img; 

let redIntensity = 25;
let greenIntensity = 0;
let blueIntensity = 0;
let alphaValue = 100;


function preload() {
  img = loadImage('/images/punchingkids.png');  
}

function setup() {
    //THIS IS HOW BIG THE CANVAS SHOULD BE TO FIT IT IN THE SITE
    createCanvas(1365, 632.5);
    rectMode(CENTER)
    diagonal = dist(0,0,width,height)
  
    //idk what this is tbh
    centreX = width/2
    centreY = height/2
  }
  
  function draw() {
   //this changes the background
    background(img);
    //idk what this does look at this later
    noStroke()
    //retarded color thing? 
    
        //DONE HERE, THIS IS WHAT CONTROLS HOW BIG THE STUFF IS
    spacingX = width / 50
    spacingY = width / 50
    
    // Draw a grid of shapes
    for (x=0; x<=width; x += spacingX) {
      for (y=0; y<=height; y += spacingY) {
        
        // changes where the mouse is??
        mouseToShape = dist(x, y, mouseX, mouseY)
        mouseToCentre = dist(centreX, centreY, mouseX, mouseY)
        
        // size of shape
        size = map(mouseToShape, 0, diagonal, 0, 100)
        
        // Set fill color with RGBA transparency I DONT KNOW HOW TO WORK THIS ONE 
      fill(redIntensity, greenIntensity, blueIntensity, alphaValue);
      
        wobble = 0
      
        maxWobble = random(0,20)
    //circle color
        redIntensity = 255
      
        fill(redIntensity, 0, 0)
        
        // What?
        circle(x+wobble,y+wobble,size)
      
      }    
    }  
  }
  
  function rotateRect(x, y, w, h, rot) {
    push()
    translate(x, y)
    rotate(rot)
    rect(0, 0, w, h)
    pop()
  }

  