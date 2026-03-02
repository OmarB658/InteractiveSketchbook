let luckyCircle = 50;   
let unluckyCircle = 50; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);
  noStroke();

  let luckyGreen = map(luckyCircle, 50, 400, 100, 255);
  fill(0, luckyGreen, 120); 
  ellipse(width * 0.35, height / 2, luckyCircle, luckyCircle);
  
  let unluckyRed = map(unluckyCircle, 50, 400, 100, 255);
  fill(unluckyRed, 50, 50); 
  ellipse(width * 0.65, height / 2, unluckyCircle, unluckyCircle);

  fill(255);
  textAlign(CENTER);
  textSize(16);
  text("Winnings: " + floor(luckyCircle), width * 0.35, height / 2 + 150);
  text("Winnings: " + floor(unluckyCircle), width * 0.65, height / 2 + 150);
  
  text("CLICK ANYWHERE", width/2, 50);
}

function mousePressed() {
  
  // Lucky growing
  if (random(100) < 50) {
    luckyCircle += 10;
  }

  //Lottery win
    if (random(100) < 1) {
    luckyCircle += 1000;
    }
  
  // Unlucky growing
  if (random(100) < 25) {
    unluckyCircle += 10;
  }

  // Reset size
  if (random(100) < 5) {
    unluckyCircle = 20;
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}