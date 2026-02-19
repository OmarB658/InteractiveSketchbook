let boxX = 0;
let boxY = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(100);
    
    boxX = lerp(boxX, mouseX, 0.03);
    boxY = lerp(boxY, mouseY, 0.03);
    
    ellipse(boxX, boxY, 80, 80);
}
