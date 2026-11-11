function setup() {
  createCanvas(470, 400);
}

function draw() {
  background(220);
  
  const serifLength = mouseX/50;
  fill(0);
  
  //h
  beginShape();
  vertex(40 - serifLength, 130);
  vertex(60, 130);
  vertex(60, 180);
  vertex(100 + serifLength, 180);
  vertex(100 + serifLength, 270);
  vertex(80, 270);
  vertex(80, 200);
  vertex(60, 200);
  vertex(60, 270);
  vertex(40 - serifLength, 270);
  endShape(CLOSE);
  
  //o
  beginShape();
  vertex(140, 180 - serifLength);
  vertex(210, 180 - serifLength);
  vertex(210, 270 + serifLength);
  vertex(140, 270 + serifLength);
  endShape(CLOSE);
  
  
  //m
  beginShape();
  vertex(240, 180 - 5*serifLength);
  vertex(340, 180 + serifLength);
  vertex(340, 270 - serifLength);
  vertex(320, 270);
  vertex(320, 210);
  vertex(300, 210);
  vertex(300, 270 + serifLength);
  vertex(280, 270 + 5*serifLength);
  vertex(280, 210);
  vertex(260, 210);
  vertex(260, 270);
  vertex(240, 270 - serifLength);
  endShape(CLOSE);
  
  
  //e
  beginShape();
  vertex(370 - serifLength, 180);
  vertex(430 + serifLength, 180);
  vertex(430 + serifLength, 230);
  vertex(390, 230);
  vertex(390, 250);
  vertex(410, 250);
  vertex(410, 240);
  vertex(430 + serifLength, 240);
  vertex(430 + serifLength, 270);
  vertex(370 - serifLength, 270);
  
  
  beginContour();
  vertex(390, 215);
  vertex(410, 215);
  vertex(410, 195);
  vertex(390, 195);
  endContour(CLOSE);
  
  endShape(CLOSE);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}