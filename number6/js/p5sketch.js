var awake = 400;

function preload() {
    images[0] = loadImage("../img/image1.jpg");
    images[1] = loadImage("../img/image2.jpg");
    images[2] = loadImage("../img/image3.jpg");
    images[3] = loadImage("../img/image4.jpg");
    images[4] = loadImage("../img/image5.jpg");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(20);

  if (mouseIsPressed) {
    awake += 2;
    fill(0, 100, 255);
  } else {
    awake -= 1;
    fill(255, 200, 0);
  }
  awake = constrain(awake, 10, 400);

  circle(mouseX, mouseY, awake);
}