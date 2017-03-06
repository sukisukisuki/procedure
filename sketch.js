var scene;
var alien;
var bone;
var shiva;
var man;
var horse;
var gold;
var knife;
var sprite;
var choices;

function preload() {
    //background
    scene = loadAnimation("assets/background-1.png", "assets/background-2.png");
    //bone
    bone = loadImage("assets/bone.png");
    //shiva
    shiva = loadAnimation("assets/shiva-1.png", "assets/shiva-2.png");
    //gold coin
    gold = loadAnimation("assets/gold-1.png", "assets/gold-2.png", "assets/gold-3.png", "assets/gold-5.png");
    //knife
    knife = loadAnimation("assets/knife-1.png", "assets/knife-2.png")
    //man
    man = loadImage("assets/man.png");
    //horse
    horse = loadImage("assets/horse.png");
    //alien
    alien = loadImage("assets/alien.png");
    //font
    font8bit = loadFont("assets/8bit16.ttf");
}

function setup() {
    createCanvas(800, 500);
    sprite = 0; 
    choices = [animation(shiva),image(man), image(alien), image(horse)];
}

function draw() {
    frameRate(4);
    
    //background
    animation(scene, 290, 150);
    
    //bone
    image(bone, 400, 240);
    rotate(bone, 30, frameCount);
    //this did not work ^^, figure out how to tilt bone, could just animate it
    
    
    //gold coin
    animation(gold, 200, 282);
    //how do I make this gold coin smaller?
    
    //knife
    animation(knife, 350, 283);
    
    spriteAppearance(); 
    }

function spriteAppearance() {
    fill(0);
    textAlign(LEFT);
    textSize(8);
    textFont(font8bit);
    text("Click here to enter the cycle of life", 15, 200);
    if (mouseIsPressed && mouseX >=15 && mouseX <=290 && mouseY >=190 && mouseY <= 200) {
       sprite += 1
    }
    if (sprite == 1) {
       random(choices, 20, 262);
    } 
}
