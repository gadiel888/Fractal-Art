  // holds image
let img;

  // changes color 
let redIntensity = 25;
let greenIntensity = 0;
let blueIntensity = 100;

 // changes transparency of the background squares (no change is visible since they are the background squares)
let alphaValue = 230;

//nnnnnnnudsnvdndvvd??OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
let spacingX;
let spacingY;
let diagonal;
let centerX;
let centerY;

//MAYBEYEAIUBIVBIJBIBIODSNOIBIDIVB??OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
let offset = 10;

  // color offset seems to enable movement of the shapes (maybe expand on these notes)
let colorOffset=0;  

  // image loading function
function preload() {
  img = loadImage('/images/maybe.gif ');  }

  // this thing sets up the canvas
function setup() {
createCanvas(windowWidth, windowHeight);
rectMode(CENTER)
diagonal = dist(0,0,width,height)

  // center of the canvas
centerX = width/2
centerY = height/2

  // changes how many shapes appear on the screen
spacingX = width / 50;
spacingY = width / 50;}

  //puts image in background
function draw() {
background(img);

  // noStroke basically decides if the squares have an outline or not (right now noStroke is off because I want to keep the squares outline)
//noStroke()  

  // changing the width and height number allows you to add more squares to the sides (had to adjust from 0 because it was missing squares)
for (let x = 0; x <= width+137; x += spacingX) {
for (let y = 0; y <= height+137; y += spacingY) {

  // this calculates the distance from the mouse to each shape
let mouseToShape = dist(x, y, mouseX, mouseY);

  // changes the size of the circle that the mouse hovers over (DO NOT CHANGE THIS)
let maxSize = 250;

  // also changes the size of the circle  (DONT CHANGE THIS ONE)
let size = map(mouseToShape, 0, diagonal, 0, maxSize);

  // controls how the squares pulse (higher number higher the pulse)
let sizeOffset = 50; 

  //controls how fast the breathing is (if you make the number higher the whole thing starts tweaking out)(SEIZURE WARNING)
let animatedSize = size + sizeOffset * sin(frameCount * 0.03); 



      // changes how the blobs are shown by lumping the blobs together more or making them take up the whole screen
      // 0.1 makes it look like each block is its own blob
      // 0.01 makes the blobs be very seperated (sort of rapid movement in the blobs is observed)
      // 0.005 makes the blobs be a bit more seperated (movement is not very smooth though) (many more blobs are visible)
      // 0 makes the entire screen be taken by one big blob that makes the whole screen change colors (og setting)
      // anything above 0.1 changes nothing and the pattern will look like each block is its own blob
    let noiseFactor = 0; 



  // changing this number changes how colorful the blocks are (goes from 0-360 degrees)
let hue = noise(x * noiseFactor, y * noiseFactor, colorOffset) * 360;

  // self explanatory (turning up brightness makes the block colors lighter)
let saturation = 40;

//FINISH THIS TOOOOOOOO)OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
let brightness = 80;

  // changes the transparency of the first squares (lowering the number makes it more transparent)
let alphaValue = 105;

//FINISH THIS OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
fill(hue, saturation, brightness, alphaValue);

  // you can pick between circle and square here
square(x, y, animatedSize);}}

  // this is where you change how fast the color changing goes
colorOffset += 0.05; }

  //this makes it so that the screen adjusts itself automatically to any screen (if it works)
function windowResized() {
resizeCanvas(windowWidth, windowHeight);
diagonal = dist(0, 0, width, height);
centerX = width / 2;
centerY = height / 2;
spacingX = width / 50;
spacingY = width / 50;
}



