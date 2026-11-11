function setup() {
  createCanvas(470, 400);
}

function draw() {
  background(0);

  fill(mouseY, mouseX, 0);
  noStroke();

  const Variant = mouseX / 10;

  //R
  beginShape();
  vertex(40 - Variant, 120);
  vertex(80 + Variant, 120);
  vertex(100 + Variant, 140);
  vertex(100 + Variant, 170);
  vertex(80 + Variant, 190);
  vertex(80 + Variant, 200);
  vertex(100 + Variant, 220);
  vertex(100 + Variant, 280);
  vertex(90, 280);
  vertex(90, 220);
  vertex(90, 220);
  vertex(70, 200);
  vertex(60, 200);
  vertex(60, 280);
  vertex(40 - Variant, 280);

  //R contour
  beginContour();
  vertex(90, 130);
  vertex(60, 130);
  vertex(60, 190 - Variant);
  vertex(70 + Variant / 2, 190 - Variant / 2);
  vertex(90, 170);
  vertex(90, 140);
  vertex(80, 130);
  endContour();
  endShape();

  //E
  beginShape();
  vertex(150 - Variant, 120);
  vertex(210 + Variant, 120);
  vertex(210 + Variant, 130 + Variant);
  vertex(170, 130);
  vertex(170, 200);
  vertex(200 + Variant, 200);
  vertex(200 + Variant, 210);
  vertex(170, 210);
  vertex(170, 270);
  vertex(210 + Variant, 270 - Variant);
  vertex(210 + Variant, 280);
  vertex(150 - Variant, 280);
  endShape();

  //A
  beginShape();
  vertex(260 - Variant, 150);
  vertex(280 - Variant, 120);
  vertex(310 + Variant, 120);
  vertex(320 + Variant, 140);
  vertex(320 + Variant, 280);
  vertex(310, 280);
  vertex(310, 210);
  vertex(280, 210);
  vertex(280, 280);
  vertex(260 - Variant, 280);

  //A contour
  beginContour();
  vertex(310, 200);
  vertex(310, 140);
  vertex(280, 140);
  vertex(280, 200 - Variant);
  endContour();
  endShape();

  //L

  beginShape();
  vertex(370 - Variant, 120);
  vertex(390, 120);
  vertex(390, 270);
  vertex(430 + Variant, 270 - Variant);
  vertex(430 + Variant, 280);
  vertex(370 - Variant, 280);
  endShape();
}
