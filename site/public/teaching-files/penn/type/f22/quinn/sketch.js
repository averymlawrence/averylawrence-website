function setup() {
  createCanvas(470, 400);
}

function draw() {
  
  background(220);
  
  const serif = (mouseX + mouseY) / 30;
  noStroke();
  fill(0);
  
  beginShape();
  vertex(30 + serif, 130);
  vertex(30, 140)
  vertex(30, 270 + serif);
  vertex(40, 280 - serif);
  vertex(50, 270 + serif);
  vertex(50, 200);
  vertex(90, 200);
  vertex(90, 270 + serif);
  vertex(100, 280 - serif);
  vertex(110, 270 + serif);
  vertex(110, 210);
  vertex(100, 200);
  vertex(110, 190);
  vertex(110, 140);
  vertex(110 - serif, 130);
  vertex(100 + serif, 120);
  vertex(40 - serif, 120);
  beginContour();
  vertex(50, 140);
  vertex(90, 140);
  vertex(90, 180);
  vertex(50, 180);
  endContour();
  endShape();
  
  beginShape();
  vertex(150 - serif,120);
  vertex(140 + serif,130);
  vertex(150 - serif,140);
  vertex(170,140);
  vertex(170,260);
  vertex(150 - serif,260);
  vertex(140 + serif,270);
  vertex(150 - serif,280);
  vertex(210 + serif,280);
  vertex(220 - serif,270);
  vertex(210 + serif,260);
  vertex(190,260);
  vertex(190,140);
  vertex(210 + serif,140);
  vertex(220 - serif,130);
  vertex(210 + serif,120);
  vertex(150,120);
  endShape();
  
  beginShape();
  vertex(270 - serif,120);
  vertex(260 + serif,130);
  vertex(250,140);
  vertex(250,260);
  vertex(260 + serif,270);
  vertex(270 - serif,280);
  vertex(310 + serif,280);
  vertex(320 - serif,270);
  vertex(330,260);
  vertex(330,140);
  vertex(320 - serif,130)
  vertex(310 + serif,120);
  vertex(270,120);
  
  beginContour();
  vertex(270,140);
  vertex(310,140);
  vertex(310,260);
  vertex(270,260);
  endContour();
  endShape();
  
  beginShape();
  vertex(370 - serif,120);
  vertex(360 + serif,130);
  vertex(370 - serif,140);
  vertex(390,140);
  vertex(390,270 + serif);
  vertex(400,280 - serif);
  vertex(410,270 + serif);
  vertex(410,140);
  vertex(430 + serif,140);
  vertex(440 - serif,130);
  vertex(430 + serif,120);
  vertex(370,120);
  endShape();
  
  
}