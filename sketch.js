var tg1Song;
var tg1Image;
var earthImg;
var marsImg;
var saturnImg;
var spaceImg;

function preload() {
  tg1Song = loadSound("./TG1_new.mp3");
  tg1Img = loadImage("./tg1glitchy.png");
  earthImg = loadImage("./earth1.png");
  earth2Img = loadImage("./earth2.png");
  marsImg = loadImage("./mars1.png");
  mars2Img = loadImage("./mars2.png");
  saturnImg = loadImage("./saturn1.png");
  saturn2Img = loadImage("./saturn2.png");
  spaceImg = loadImage("./space.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  tg1Song.play();
  analyzer = new p5.Amplitude();
  analyzer.setInput(tg1Song);
  tg1Song.rate(2);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  //space background image
  background("black");

  //settings
  var volume = 0;
  volume = analyzer.getLevel();
  volume = map(volume, 0, 0.5, 1000, 2000);

  //earth image
  push();
  imageMode(CENTER);
  image(earthImg, width / 3 - 300, height / 3 + 50, volume / 6 + earthImg.height / 3, 0);
  pop();

  //saturn image
  push();
  imageMode(CENTER);
  image(saturnImg, width / 2 + 600, height / 3 + 50, 0, volume / 8 + saturnImg.height / 1.5);
  pop();

  //mars image
  push();
  imageMode(CENTER);
  image(marsImg, width / 2, height / 2 + 300, volume / 8 + marsImg.height / 1.5, 0);
  pop();

  //smaller versions
  //mars2 image
  push();
  imageMode(CENTER);
  image(mars2Img, width / 2, height / 3 - 130, volume / 8 + earthImg.height / 2, 0);
  pop();
  //earth2 image
  push();
  imageMode(CENTER);
  image(earth2Img, width / 2 + 500, height / 3 + 450, 0, volume / 5 + saturnImg.height / 1.5);
  pop();
  //saturn2 image
  push();
  imageMode(CENTER);
  image(saturn2Img, width / 2 - 600, height / 2 + 270, 0, volume / 8 + marsImg.height / 2);
  pop();



  //scattered stars
  push();
  noStroke();
  fill("white");
  ellipse(width / 2 - 200, height / 2 - 50, volume / 130)
  ellipse(width / 2 - 300, height / 2 + 80, volume / 170)
  ellipse(width / 2 + 200, height / 2 - 60, volume / 100)

  ellipse(width / 2 + 200, height / 2 + 50, volume / 130)
  ellipse(width / 2 + 300, height / 2 - 80, volume / 170)
  ellipse(width / 2 - 200, height / 2 + 60, volume / 100)

  ellipse(width / 2 - 100, height / 2 - 30, volume / 150)
  ellipse(width / 2 - 500, height / 2 + 70, volume / 170)
  ellipse(width / 2 + 420, height / 2 - 100, volume / 100)

  ellipse(width / 2 - 67, height / 2 - 140, volume / 150)
  ellipse(width / 2 - 100, height / 2 + 200, volume / 170)
  ellipse(width / 2 + 321, height / 2 - 260, volume / 100)

  ellipse(width / 2 + 67, height / 2 + 140, volume / 150)
  ellipse(width / 2 + 100, height / 2 - 200, volume / 170)
  ellipse(width / 2 - 321, height / 2 + 260, volume / 100)

  ellipse(width / 2 - 507, height / 2 - 540, volume / 150)
  ellipse(width / 2 - 400, height / 2 + 300, volume / 170)
  ellipse(width / 2 + 361, height / 2 + 260, volume / 100)

  ellipse(width / 2 - 207, height / 2 - 240, volume / 150)
  ellipse(width / 2 - 300, height / 2 + 500, volume / 170)
  ellipse(width / 2 + 461, height / 2 - 260, volume / 100)
  pop();

  //tg1 image
  push();
  imageMode(CENTER);
  image(tg1Img, width / 2, height / 2, 0, volume / 8 + tg1Img.height / 1.5);
  pop();

  //undertext settings
  var myText = "click to play anytime";
  textFont("Roboto Mono");
  textAlign(CENTER);
  textSize(20);
  fill("magenta");
  text(myText, windowWidth / 2, windowHeight / 2 - 140);

  //text settings
  var myText = "click to play anytime";
  textFont("Roboto Mono");
  textAlign(CENTER);
  textSize(20);
  fill("white");
  text(myText, windowWidth / 2 - 3, windowHeight / 2 - 138);

}

//click to play function
function mousePressed() {
  if (!tg1Song.isPlaying()) {
    tg1Song.play();
  } else {
    tg1Song.pause();
  }
}
