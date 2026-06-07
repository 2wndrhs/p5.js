function setup() {
  createCanvas(600, 400);
  background(230, 241, 255);
}

function draw() {
  noStroke();
  fill(74, 98, 168);
  ellipse(300, 420, 360, 250);
  rect(220, 255, 160, 85, 30);
  fill(56, 78, 140);
  ellipse(300, 315, 125, 105);

  fill(245, 208, 170);
  ellipse(220, 215, 28, 46);
  ellipse(380, 215, 28, 46);
  rect(272, 235, 56, 60, 14);

  fill(247, 214, 178);
  ellipse(300, 205, 170, 200);

  fill(58, 72, 128);
  ellipse(300, 150, 200, 120);
  rect(210, 165, 180, 30, 12);

  stroke(40);
  strokeWeight(4);
  noFill();
  ellipse(260, 212, 58, 46);
  ellipse(340, 212, 58, 46);
  line(289, 212, 311, 212);

  noStroke();
  fill(255);
  ellipse(260, 214, 25, 18);
  ellipse(340, 214, 25, 18);
  fill(35);
  ellipse(260, 214, 10, 10);
  ellipse(340, 214, 10, 10);

  stroke(70, 45, 35);
  strokeWeight(3);
  line(240, 186, 278, 190);
  line(322, 190, 360, 186);

  stroke(150, 110, 90);
  strokeWeight(2.5);
  line(300, 220, 300, 244);
  arc(300, 246, 18, 12, 0, PI);

  noStroke();
  fill(255, 170, 180);
  ellipse(244, 242, 22, 12);
  ellipse(356, 242, 22, 12);

  stroke(140, 60, 80);
  strokeWeight(3);
  noFill();
  arc(300, 266, 46, 24, 0, PI);

  stroke(230);
  strokeWeight(3);
  line(282, 300, 274, 336);
  line(318, 300, 326, 336);
}
