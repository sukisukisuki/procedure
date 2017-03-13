var scene;
//sprites 
var demon;
var shiva;
var alien;
var man;
var horse;
var cowboy;
var lowell;
var bird;
//gold coin
var gold;
var coin;
//cup
var cup;
var cupsprite;
//grapefruit
var grapefruit;
var grapesprite;
//roses
var rose;
var rosesprite;
//bone 
var bone;
var bonesprite;
//knife 
var knife;
var knifesprite;
var choices;
var player;
var randomSprite = (1, 9);
var x;

function preload() {
    //background
    scene = loadAnimation("assets/background-1.png", "assets/background-2.png");
    //bone
    bone = loadImage("assets/bone.png");
    //roses
    rose = loadImage("assets/rose.png");
    //shiva
    shiva = loadAnimation("assets/shiva-1.png", "assets/shiva-2.png");
    //gold coin
    gold = loadAnimation("assets/gold-1.png", "assets/gold-2.png", "assets/gold-3.png", "assets/gold-5.png");
    //knife
    knife = loadAnimation("assets/knife-1.png", "assets/knife-2.png");
    //grapefruit
    grapefruit = loadAnimation("assets/grapefruit.png", "assets/grapefruit-2.png");
    //cup
    cup = loadImage("assets/cup.png");
    //man
    man = loadImage("assets/man.png");
    //lowell
    lowell = loadImage("assets/lowell.png");
    //horse
    horse = loadImage("assets/horse.png");
    //alien
    alien = loadImage("assets/alien.png");
    //font
    font8bit = loadFont("assets/8bit16.ttf");
    //cowboy
    cowboy = loadImage("assets/cowboy.png");
    //roses
    rose = loadImage("assets/rose.png");
    //demon
    demon = loadAnimation("assets/demon.png", "assets/demon-2.png");
    //birdman
    bird = loadImage("assets/bird.png");
}

function setup() {
    createCanvas(580, 300);
    choices = [animation(shiva), image(man), image(alien), image(horse), image(cowboy), image(lowell), image(bird), animation(demon)];
    //players
    player = createSprite(50, 250);
    player.addAnimation("man", man);
    player.addAnimation("shiva", shiva);
    player.addAnimation("horse", horse);
    player.addAnimation("alien", alien);
    player.addAnimation("cowboy", cowboy);
    player.addAnimation("lowell", lowell);
    player.addAnimation("demon", demon);
    player.addAnimation("bird", bird);
    randomSprite = int(random(1, 9));
    if (randomSprite == 1) {
        player.changeAnimation("man");
    }
    if (randomSprite == 2) {
        player.changeAnimation("horse");
    }
    if (randomSprite == 3) {
        player.changeAnimation("cowboy");
    }
    if (randomSprite == 4) {
        player.changeAnimation("shiva");
    }
    if (randomSprite == 5) {
        player.changeAnimation("alien");
    }
    if (randomSprite == 6) {
        player.changeAnimation("lowell");
    }
    if (randomSprite == 7) {
        player.changeAnimation("demon");
    }
    if (randomSprite == 8) {
        player.changeAnimation("bird");
    }
    //coin sprite for coin
    coin = createSprite(200, 282);
    coin.addAnimation("gold", gold);
    //bone sprite 
    bonesprite = createSprite(300, 278);
    bonesprite.addImage("bone", bone);
    //knife sprite
    knifesprite = createSprite(350, 283);
    knifesprite.addAnimation("knife", knife);
    //rose
    rosesprite = createSprite(368, 55);
    rosesprite.addImage("rose", rose);
    //grapefruit
    grapesprite = createSprite(500, 282);
    grapesprite.addAnimation("grapefruit", grapefruit);
    //cup
    cupsprite = createSprite(415, 285);
    cupsprite.addImage("cup", cup);
}

function draw() {
    frameRate(4);
    background(0);
    animation(scene, 290, 150);
    fill(0);
    textSize(5);
    textFont(font8bit);
    text("Each change of form = death and rebirth", 5, 7);
    text("Use letter keys, arrow keys, and mouse to navigate", 5, 12)
        //bone
        // image(bone, 400, 240);
        //gold coin
        //animation(gold, 200, 282);
        //knife
        //animation(knife, 350, 283);
        //alien
        //image(alien, 100, 232);
        //shiva
        //animation(shiva, 30, 260);
        //horse
        //image(horse, 500, 230);
        //man
        //  image(man, 350, 230);
    if (coin.overlapPoint(mouseX, mouseY)) {
        fill(0);
        textSize(5);
        textFont(font8bit);
        text("A) Steal", 190, 250);
        if (key == "A") {
            player.changeAnimation("alien");
        }
        fill(0);
        textSize(5);
        textFont(font8bit);
        text("B) Leave", 190, 255);
        if (key == "B") {
            player.changeAnimation("horse");
        }
        fill(0);
        textSize(5);
        textFont(font8bit);
        text("C) Give", 190, 260);
        if (key == "C") {
            player.changeAnimation("man");
        }
    }
    if (grapesprite.overlapPoint(mouseX, mouseY)) {
        fill(0);
        textSize(5);
        textFont(font8bit);
        text("A) Eat all of the pulp", 455, 255);
        if (key == "A") {
            player.changeAnimation("lowell");
        }
        fill(0);
        textSize(5);
        textFont(font8bit);
        text("B) Feed to a baby", 455, 260);
        if (key == "B") {
            player.changeAnimation("demon");
        }
        fill(0);
        textSize(5);
        textFont(font8bit);
        text("C) Plant seeds", 455, 265);
        if (key == "C") {
            player.changeAnimation("bird");
        }
    }
    if (rosesprite.overlapPoint(mouseX, mouseY)) {
        fill(0);
        textSize(5);
        textFont(font8bit);
        text("A) Eat", 395, 55);
        if (key == "A") {
            player.changeAnimation("lowell");
        }
        fill(0);
        textSize(5);
        textFont(font8bit);
        text("B) Hold onto for life", 395, 60);
        if (key == "B") {
            player.changeAnimation("alien");
        }
        fill(0);
        textSize(5);
        textFont(font8bit);
        text("C) Make them into something beautiful", 395, 65);
        if (key == "C") {
            player.changeAnimation("shiva");
        }
    }
    if (bonesprite.overlapPoint(mouseX, mouseY)) {
        fill(0);
        textSize(5);
        textFont(font8bit);
        text("A) Throw", 285, 240);
        if (key == "A") {
            player.changeAnimation("cowboy");
        }
        fill(0);
        textSize(5);
        textFont(font8bit);
        text("B) Eat Marrow", 285, 245);
        if (key == "B") {
            player.changeAnimation("horse");
        }
        fill(0);
        textSize(5);
        textFont(font8bit);
        text("C) Bury", 285, 250);
        if (key == "C") {
            player.changeAnimation("shiva");
        }
    }
    if (knifesprite.overlapPoint(mouseX, mouseY)) {
        fill(0);
        textSize(5);
        textFont(font8bit);
        text("A) Stab nearest being", 330, 255);
        if (key == "A") {
            player.changeAnimation("horse");
        }
        fill(0);
        textSize(5);
        textFont(font8bit);
        text("B) Swallow", 330, 260);
        if (key == "B") {
            player.changeAnimation("demon");
        }
        fill(0);
        textSize(5);
        textFont(font8bit);
        text("C) Put in pocket", 330, 265);
        if (key == "C") {
            player.changeAnimation("man");
        }
    }
    if (cupsprite.overlapPoint(mouseX, mouseY)) {
        fill(0);
        textSize(5);
        textFont(font8bit);
        text("A) Sip tea slowly", 385, 260);
        if (key == "A") {
            player.changeAnimation("lowell");
        }
        fill(0);
        textSize(5);
        textFont(font8bit);
        text("B) Throw hot tea in the face of a stranger", 385, 265);
        if (key == "B") {
            player.changeAnimation("bird");
        }
        fill(0);
        textSize(5);
        textFont(font8bit);
        text("C) Poison tea", 385, 270);
        if (key == "C") {
            player.changeAnimation("demon");
        }
    }
    if (player.position.x > 550) {
        player.setSpeed(2.5, 180);
    }
    if (player.position.x < 30) {
        player.setSpeed(2.5, 0);
    }
    if (player.position.y > 280) {
        player.setSpeed(2.5, 280);
    }
    if (player.position.y < 30) {
        player.setSpeed(2.5, 80);
    }
    drawSprites();
}

function keyPressed() {
    if (keyCode == RIGHT_ARROW) {
        player.setSpeed(2.5, 0);
    }
    else if (keyCode == DOWN_ARROW) {
        player.setSpeed(2.5, 90);
    }
    else if (keyCode == LEFT_ARROW) {
        player.setSpeed(2.5, 180);
    }
    else if (keyCode == UP_ARROW) {
        player.setSpeed(2.5, 270);
    }
    else if (key == ' ') {
        player.setSpeed(0, 0);
    }
    return false;
}
