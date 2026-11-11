function setup() {
  createCanvas(470, 400);
}

function draw() {
  background(220);
  
  const serifLength = mouseX /10;
  
  noStroke();
  fill(0);
  
  beginShape();
  vertex(40, 280 -serifLength);//serif left
  vertex(40, 270);
  vertex(40, 130);
  vertex(50, 120);
  vertex(90, 120);
  vertex(100, 130);
  vertex(100, 270);
  vertex(100, 280 - serifLength);//serif right

  
  beginContour();
  vertex(50, 130);
  vertex(50, 190);
  vertex(90, 190);
  vertex(90,130);
  endContour();
  
  beginContour();
  vertex(50,200);
  vertex(50,280 - serifLength);
  vertex(90,280 - serifLength);
  vertex(90,200);
  endContour();
  
  endShape(CLOSE); 
  
  beginShape();
  vertex(170, 280 -serifLength); //serif left
  vertex(170, 270);
  vertex(170, 130);
  vertex(140, 130);
  vertex(140, 120);
  vertex(210, 120);
  vertex(210, 130);
  vertex(180, 130);
  vertex(180, 270);
  vertex(180, 280 -serifLength);
  endShape(CLOSE);
  
  beginShape();
  vertex(260, 280);
  vertex(260, 120);
  vertex(320, 120 +serifLength);
  vertex(320, 130 +serifLength);
  vertex(270, 130 +serifLength);
  vertex(270, 190);
  vertex(310, 190);
  vertex(310, 200);
  vertex(270, 200);
  vertex(270, 270 -serifLength);
  vertex(320, 270 - serifLength);
  vertex(320, 280 -serifLength);
  endShape(CLOSE);
  
}