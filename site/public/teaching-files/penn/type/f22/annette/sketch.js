function setup() {
  createCanvas(470, 400);
}

function draw() {
  const AnnetteX = mouseX / 10;
  const AnnetteY = mouseY / 10;

  background(148 - AnnetteX * 7, 255 - AnnetteX * 7, 255);

  fill(148 - AnnetteX / 7, 255 - AnnetteX / 7, 255);
  noStroke();

  //B
  beginShape();
  vertex(40, 120);
  vertex(90, 120);
  vertex(90, 130);
  vertex(100, 130);
  vertex(100, 190);
  vertex(90, 190);
  vertex(90, 200);
  vertex(100, 200);
  vertex(100, 270);
  vertex(90, 270);
  vertex(90, 280);
  vertex(40, 280);

  //B counter #1
  beginContour();
  vertex(50, 130 + AnnetteY * 4);
  vertex(50, 190);
  vertex(90, 190);
  vertex(90, 130 + AnnetteY * 4);
  endContour();

  beginContour();
  vertex(50, 200);
  vertex(50, 270);
  vertex(90, 270);
  vertex(90, 200);
  endContour();

  endShape();

  //L
  beginShape();

  vertex(150, 120);
  vertex(160, 120);
  vertex(160, 270 - AnnetteY * 4);
  vertex(210, 270 - AnnetteY * 4);
  vertex(210, 280);
  vertex(150, 280);

  endShape();

  //U
  beginShape();

  vertex(260, 120);
  vertex(270, 120);
  vertex(270, 270 - AnnetteY * 4);
  vertex(310, 270 - AnnetteY * 4);
  vertex(310, 120);
  vertex(320, 120);
  vertex(320, 280);
  vertex(260, 280);

  endShape();

  //E
  beginShape();

  vertex(370, 120);
  vertex(430, 120);
  vertex(430, 130);
  vertex(380 + AnnetteY * 4, 130);
  vertex(380 + AnnetteY * 4, 190);
  vertex(430 + AnnetteY * 4, 190);
  vertex(430 + AnnetteY * 4, 200);
  vertex(380 + AnnetteY * 4, 200);
  vertex(380 + AnnetteY * 4, 270);
  vertex(430, 270);
  vertex(430, 280);
  vertex(370, 280);

  endShape();
}
