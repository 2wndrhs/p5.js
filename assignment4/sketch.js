let cloudColorA;
let cloudColorB;
let lineColorA;
let lineColorB;

function setup() {
  createCanvas(600, 400);
  noStroke();
  cloudColorA = color(255, 255, 255);
  cloudColorB = color(180, 210, 255);
  lineColorA = color(20, 28, 90);
  lineColorB = color(90, 40, 160);
}

function draw() {
  background('#222222');
  let t = frameCount * 0.04;
  let floatY = sin(t) * 10;
  let floatX = cos(t * 0.7) * 6;
  let sizePulse = 1 + sin(t * 1.3) * 0.05;
  let colorMix = (sin(t) + 1) / 2;
  let cloudColor = lerpColor(cloudColorA, cloudColorB, colorMix);
  let shadowColor = color(180, 210, 255, 50 + 25 * colorMix);
  let lineColor = lerpColor(lineColorA, lineColorB, colorMix);

  push();
  translate(300 + floatX, 220 + floatY);
  scale(sizePulse);
  translate(-300, -220);
  noStroke();
  fill(shadowColor);
  arc(300, 172, 176, 192, PI, TWO_PI, CHORD);
  rect(212, 172, 176, 108);
  circle(244, 280, 52);
  circle(300, 292, 54);
  circle(356, 280, 52);
  fill(cloudColor);
  arc(300, 165, 154, 170, PI, TWO_PI, CHORD);
  rect(223, 165, 154, 104);
  circle(248, 269, 42);
  circle(300, 281, 46);
  circle(352, 269, 42);
  stroke(lineColor);
  strokeWeight(11);
  line(258, 154, 284, 170);
  line(258, 186, 284, 170);
  line(312, 170, 342, 170);
  pop();
}

function keyPressed() {
  if (key === 'g' || key === 'G') {
    saveGif('moving_ghostty', 5);
  }
}
