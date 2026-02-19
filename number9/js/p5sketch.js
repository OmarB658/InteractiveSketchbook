let images = [];
let currentIndex = 0;
let opacity = 255;
let access = 0;

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
    handleSystemLogic();
    displayMainImage();
    displayInterface();
}

function handleSystemLogic() {
    let fadeSpeed = map(currentIndex, 0, 4, 1, 8);
    opacity -= fadeSpeed;
    opacity = constrain(opacity, 0, 255);

    if (keyIsPressed && key === ' ') {
        access += 2;
    } else {
        access -= 1; 
    }
    access = constrain(access, 0, 100);
}

function displayMainImage() {
    let img = images[currentIndex];
    let imgRatio = img.width / img.height;
    let h = height * 0.6;
    let w = h * imgRatio;
    tint(255, opacity);
    image(img, width / 2, height / 2, w, h);
    noTint();
}

function displayInterface() {
    fill(255);
    textAlign(CENTER);
    textSize(18);
    text("Kitty Cat #" + (currentIndex + 1) + " / 5", width / 2, 50);

    let progressBar = 300;
    let completeBar= map(access, 0, 100, 0, progressBar);
    
    fill(50);
    rect(width/2 - progressBar/2, height - 80, progressBar, 10);
    fill(255 , 0, 255);
    rect(width/2 - progressBar/2, height - 80, completeBar, 10);

    if (opacity <= 0) {
        fill(255, 0, 0);
        text("  Kitty cat gone :(", width / 2, height / 2);
    }
    
    fill(255);
    textSize(14);
    text("Hold SPACE then press right or left arrow when bar is filled ", width/2, height - 90);

    if (access < 100) {
        fill(255, 0, 0);
        text("LOCKED", width/2 + progressBar/2 + 40, height - 72);
    } else {
        fill(0, 255, 0);
        text("READY", width/2 + progressBar/2 + 40, height - 72);
    }
}

function keyPressed() {
    if (access >= 100) {
        if (keyCode === RIGHT_ARROW) {
            navigate(1);
        } else if (keyCode === LEFT_ARROW) {
            navigate(-1);
        }
    }
}

function navigate(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    opacity = 255;   
    accessCharge = 0;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}