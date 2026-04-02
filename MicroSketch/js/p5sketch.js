let luckyCircle = 50;   
let unluckyCircle = 50; 
let luckyBet = "";
let unluckyBet = "";
let bettingStep = 0;  
let timer;
let mode = "BET"; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  timer = floor(random(5, 20)); 
}

function draw() {
  background(20);

  if (mode === "BET") {
    betScreen();
  } else if (mode === "PLAY") {
    playScreen();
  } else if (mode === "RESULT") {
    resultScreen();
  }
}

function betScreen() {

  
  fill(200);
  textSize(14);
  textAlign(CENTER);
  
  let instY = height / 2 + 150;
  text("Instructions:", width/2, instY);
  text("On the screen there will be two circles, everytime you click oin the screen they both have a chance to grow.\n You will be predicting the size each circle is at the end of the timer. \n One of the circles has a higher chance to grow than the other.\n First you will be betting on the lucky circle, then the unlucky circle.", width/2, instY + 20);

  
  fill(255);
  textAlign(CENTER);
  
  if (bettingStep === 0) {
    fill(0, 255, 120);
    textSize(24);
    text("Lucky winning predictions", width/2, height/2 - 100);
    textSize(48);
    text(luckyBet + "_", width/2, height/2);
  } else {
    fill(255, 60, 60);
    textSize(24);
    text("Unlucky winning predictions", width/2, height/2 - 100);
    textSize(48);
    text(unluckyBet + "_", width/2, height/2);
  }
  
  fill(150);
  textSize(14);
  text("Place your bets and press Enter!", width/2, height/2 + 100);
}

function playScreen() {
  if (frameCount % 60 === 0 && timer > 0) timer--;
  if (timer <= 0) mode = "RESULT";

  unluckyCircle -= 0.1; 
  unluckyCircle = max(unluckyCircle, 10);

  // Visuals
  let luckyGreen = map(luckyCircle, 50, 400, 100, 255);
  fill(0, luckyGreen, 120); 
  ellipse(width * 0.35, height / 2, luckyCircle, luckyCircle);
  
  let unluckyRed = map(unluckyCircle, 20, 400, 100, 255);
  fill(unluckyRed, 50, 50); 
  ellipse(width * 0.65, height / 2, unluckyCircle, unluckyCircle);

  // UI
  fill(255);
  textSize(16);
  text("Time " + timer, width/2, 50);
  text("Press R to restart", width/2, 100);


  text("Winnings: " + floor(luckyCircle), width * 0.35, height / 2 + 150);
  text("Winnings: " + floor(unluckyCircle), width * 0.65, height / 2 + 150);
  
  text("Bet: " + luckyBet, width * 0.35, height / 2 + 180);
  text("Bet: " + unluckyBet, width * 0.65, height / 2 + 180);


  textAlign(RIGHT);
  textSize(12);
  fill(150); 

  let xPos = width - 180;
  let yPos = height / 2 - 40;

  text("Lucky circle growth chances:", xPos, yPos);
  text("• 50% chance: +10", xPos, yPos + 20);
  text("• 1% chance: +1000", xPos, yPos + 40);

  yPos += 100;

  text("Unlucky circle growth chances:", xPos, yPos);
  text("• 25% chance: +10", xPos, yPos + 20);
  text("• 5% chance: reset to 20", xPos, yPos + 40);
  text("• 1% chance: +1000", xPos, yPos + 60);

}

function resultScreen() {
  fill(255);
  textSize(32);
  text("Final results! :D", width/2, 100);
  
  let diffL = abs(floor(luckyCircle) - int(luckyBet));
  let diffU = abs(floor(unluckyCircle) - int(unluckyBet));
  
  textSize(20);
  fill(0, 255, 120);
  text("Difference: " + diffL, width/2, height/2 - 20);
  
  fill(255, 50, 50);
  text("Difference: " + diffU, width/2, height/2 + 40);
  
  fill(150);
  textSize(14);
  text("Press 'R' to Restart", width/2, height - 50);
}






function keyPressed() {
  if (mode === "BET") {
    if (keyCode >= 48 && keyCode <= 57) {
      if (bettingStep === 0) luckyBet += key;
      else unluckyBet += key;
    } else if (keyCode === BACKSPACE) {

      if (bettingStep === 0) luckyBet = luckyBet.slice(0, -1);
      else unluckyBet = unluckyBet.slice(0, -1);
    } else if (keyCode === ENTER) {
      if (bettingStep === 0 && luckyBet.length > 0) bettingStep = 1;
      else if (bettingStep === 1 && unluckyBet.length > 0) mode = "PLAY";
    }
  }
  
  if (key === 'r' || key === 'R') {
    luckyCircle = 50;
    unluckyCircle = 50;
    luckyBet = "";
    unluckyBet = "";
    bettingStep = 0;
    timer = floor(random(5, 20));
    mode = "BET";
  }

    if( key === 'u' || key === 'U') {
    mode = 'RESULT';
  }
}


function mousePressed() {
  if (mode !== "PLAY") return;
  if (random(100) < 50) luckyCircle += 10;
  if (random(100) < 1) luckyCircle += 1000;
  if (random(100) < 25) unluckyCircle += 10;
  if (random(100) < 5) unluckyCircle = 20;
  if (random(100) < 1) unluckyCircle += 1000;

}