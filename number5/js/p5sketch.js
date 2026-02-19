
let eye = 100;

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
}

function draw() {
  background(20, 24, 35);

  eye = 100; 
  fill(255);


  if (mouseIsPressed) {
    eye = 5; 
    fill(50);
  }
  else {
    let d = dist(mouseX, mouseY, width/2, height/2);
    fill(255, 255 - d, 255 - d);
  }
  rect(mouseX, mouseY, 150, eye);
}