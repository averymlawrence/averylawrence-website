function setup() {
  createCanvas(470, 400);
}

function draw() {
  background(200, 200, 255);
  
  const Variant = mouseX/10;
  
  fill(0);
  noStroke();
  
  // C
  beginShape();
  vertex(20, 150);
  vertex(120, 150);
  vertex(120, 200);
  vertex(100, 200);
  vertex(100, 170);
  vertex(40, 170);
  vertex(40, 270);
  vertex(100, 270);
  vertex(100, 240);
  vertex(120, 240);
  vertex(120, 290);
  vertex(20, 290);
  endShape();
  
  // A
  beginShape();
  vertex(130, 150);
  vertex(230, 150);
  vertex(230, 290);
  vertex(210, 290);
  vertex(210, 220);
  vertex(150, 220);
  vertex(150, 290);
  vertex(130, 290);
  
  // A Contour
  beginContour();
  vertex(150, 200);
  vertex(210, 200);
  vertex(210, 170);
  vertex(150, 170);
  endContour();
  endShape();
  
  // T
  beginShape();
  vertex(240, 150);
  vertex(340, 150);
  vertex(340, 170);
  vertex(300, 170);
  vertex(300, 290);
  vertex(280, 290);
  vertex(280, 170);
  vertex(240, 170);
  endShape();
  
  // Ears
  
  // C
  beginShape();
  vertex(20, 150);
  vertex(40, 150 - Variant);
  vertex(60, 150);
  vertex(20, 150);
  endShape();
  
  beginShape();
  vertex(80, 150);
  vertex(100, 150 - Variant);
  vertex(120, 150);
  vertex(80, 150);
  endShape();
  
  // A
  beginShape();
  vertex(130, 150);
  vertex(150, 150 - Variant);
  vertex(170, 150);
  vertex(130, 150);
  endShape();
  
  beginShape();
  vertex(190, 150);
  vertex(210, 150 - Variant);
  vertex(230, 150);
  vertex(190, 150);
  endShape();
  
  // T
  beginShape();
  vertex(240, 150);
  vertex(260, 150 - Variant);
  vertex(280, 150);
  vertex(240, 150);
  endShape();
  
  beginShape();
  vertex(300, 150);
  vertex(320, 150 - Variant);
  vertex(340, 150);
  vertex(300, 150);
  endShape();
  

}