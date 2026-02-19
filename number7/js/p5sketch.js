var posA = 350;
var posB = 350;
var speed = 10;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240);
  
  fill(0);
  text("The lucky square", 130, 100);
  text("The unlucky square", 370, 100);
  
  fill(0, 100, 255);
  rect(150, posA, 50, 50);
  
  fill(150);
  rect(400, posB, 50, 50);
  
  if (posA < 350) posA += 0.5;
  if (posB < 350) posB += 0.5;
}

function mousePressed() {
  posA -= speed;
  speed += 0.5;
  posB -= 3;
}