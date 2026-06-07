function setup() {
  createCanvas(600, 400);
}

function draw() {
  let headX = 300;
  let headY = 205;
  let lookX = map(mouseX, 0, width, -7, 7);
  let lookY = map(mouseY, 0, height, -5, 5);

  if (keyIsDown(LEFT_ARROW)) {
    headX = 288;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    headX = 312;
  }
  if (keyIsDown(UP_ARROW)) {
    headY = 197;
  }
  if (keyIsDown(DOWN_ARROW)) {
    headY = 213;
  }

  background(230, 241, 255);

  noStroke();
  fill(74, 98, 168);
  ellipse(300, 420, 360, 250);
  rect(220, 255, 160, 85, 30);
  fill(56, 78, 140);
  ellipse(300, 315, 125, 105);

  fill(245, 208, 170);
  ellipse(headX - 80, headY + 10, 28, 46);
  ellipse(headX + 80, headY + 10, 28, 46);
  rect(headX - 28, headY + 30, 56, 60, 14);

  fill(247, 214, 178);
  ellipse(headX, headY, 170, 200);

  fill(58, 72, 128);
  ellipse(headX, headY - 55, 200, 120);
  rect(headX - 90, headY - 40, 180, 30, 12);

  stroke(40);
  strokeWeight(4);
  noFill();
  ellipse(headX - 40, headY + 7, 58, 46);
  ellipse(headX + 40, headY + 7, 58, 46);
  line(headX - 11, headY + 7, headX + 11, headY + 7);

  noStroke();
  fill(255);
  ellipse(headX - 40, headY + 9, 25, 18);
  ellipse(headX + 40, headY + 9, 25, 18);
  fill(35);
  ellipse(headX - 40 + lookX, headY + 9 + lookY, 10, 10);
  ellipse(headX + 40 + lookX, headY + 9 + lookY, 10, 10);

  stroke(70, 45, 35);
  strokeWeight(3);
  line(headX - 60, headY - 19, headX - 22, headY - 15);
  line(headX + 22, headY - 15, headX + 60, headY - 19);

  stroke(150, 110, 90);
  strokeWeight(2.5);
  line(headX, headY + 15, headX, headY + 39);
  arc(headX, headY + 41, 18, 12, 0, PI);

  noStroke();
  fill(255, 170, 180, 190);
  ellipse(headX - 56, headY + 37, 22, 12);
  ellipse(headX + 56, headY + 37, 22, 12);

  stroke(140, 60, 80);
  strokeWeight(3);
  noFill();
  arc(headX, headY + 61, 46, 24, 0, PI);

  stroke(230);
  strokeWeight(3);
  line(headX - 18, headY + 95, headX - 26, 336);
  line(headX + 18, headY + 95, headX + 26, 336);
}

function keyPressed() {
  if (key === "g" || key === "G") {
    saveGif("assignment3-character-motion", 5);
  }
}
