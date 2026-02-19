
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

  rect(mouseX, mouseY, 150, eye);
}