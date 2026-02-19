let images = [];
let currentIndex = 0;
let opacity = 255;

function preload() {
    images[0] = loadImage("../img/image1.jpg");
    images[1] = loadImage("../img/image2.jpg");
    images[2] = loadImage("../img/image3.jpg");
    images[3] = loadImage("../img/image4.jpg");
    images[4] = loadImage("../img/image5.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
}

function draw() {
    background(20); 

    let fadeSpeed = map(currentIndex, 0, 4, 1, 10);
    opacity -= fadeSpeed;
    
    opacity = max(opacity, 0);

    let img = images[currentIndex];
    let imgRatio = img.width / img.height;
    let h = height * 0.7;
    let w = h * imgRatio;

    tint(255, opacity); 
    image(img, width / 2, height / 2, w, h);

    fill(255);
    textAlign(CENTER);
    text("Lil kitty cat " + (currentIndex + 1), width / 2, height - 50);
    
    if (opacity <= 0) {
        fill(255, 0, 0);
        text("No more cat :(", width / 2, height / 2);
    }
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        currentIndex = (currentIndex + 1) % images.length;
        opacity = 255; 
    } else if (keyCode === LEFT_ARROW) {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        opacity = 255;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}