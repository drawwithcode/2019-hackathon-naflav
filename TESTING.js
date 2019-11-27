

//mars image
push();
imageMode(CENTER);
image(marsImg, width / 2 - 20, height / 2 + 80, 100, volume / 8 + marsImg.height / 1.5);
pop();

//scattered stars
push();
noStroke();
fill("yellow");
ellipse(width / 2 - 230, height / 2 - 60, volume / 150)
ellipse(width / 2 - 455, height / 2 - 23, volume / 170)
pop();

//tg1 image
push();
imageMode(CENTER);
image(tg1Img, width / 2 - 10, height / 2 + 30, 100, volume / 8 + tg1Img.height / 1.5);
pop();
