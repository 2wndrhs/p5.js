function setup() {
  createCanvas(600, 400);
  background('#222222');
  noStroke();

  fill(180, 210, 255, 50);
  arc(300, 172, 176, 192, PI, TWO_PI, CHORD);
  rect(212, 172, 176, 108);
  circle(244, 280, 52);
  circle(300, 292, 54);
  circle(356, 280, 52);

  fill(255);
  arc(300, 165, 154, 170, PI, TWO_PI, CHORD);
  rect(223, 165, 154, 104);
  circle(248, 269, 42);
  circle(300, 281, 46);
  circle(352, 269, 42);

  stroke(20, 28, 90);
  strokeWeight(11);

  line(258, 154, 284, 170);
  line(258, 186, 284, 170);
  line(312, 170, 342, 170);
}
