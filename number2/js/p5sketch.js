function setup() {
    createCanvas(600,400);
}

function draw() {

    background(152, 55, 158);


    let x = constrain(mouseX, 100, 500);
    let y = constrain(mouseY, 100, 300);

    x += random(-5, 5);
    y += random(-5, 5);

    function drawHex(x, y, radius) {
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = PI / 3 * i; 
    let vx = x + cos(angle) * radius;
    let vy = y + sin(angle) * radius;
    vertex(vx, vy);
  }
  endShape(CLOSE);
}

drawHex(x, y, 25);
fill(129, 219, 158);
}