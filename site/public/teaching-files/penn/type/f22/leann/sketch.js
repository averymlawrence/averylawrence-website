function setup() {
  createCanvas(500, 400);
}

function draw() {
  
  const LeannY = mouseY / 10;
  const LeannX = mouseX / 10;
  
  background(220,220-LeannX/2,100,100);

 

  noStroke();
  fill(0);

  //L
  beginShape();
  vertex(40, 250 + LeannY);
  vertex(40, 120);
  vertex(60, 120);
  vertex(60, 230);
  vertex(110, 230);
  vertex(110, 250 + LeannY);
  endShape();
  
  //A
  beginShape();
  vertex(150,250 + LeannY);
  vertex(150, 120);
  vertex(210, 120);
  vertex(210,250 + LeannY);
  vertex(190,250 + LeannY);
  vertex(190,190+LeannY);
  vertex(170,190+LeannY);
  vertex(170,250 + LeannY);
  beginContour();
  vertex(170,170+LeannY);
  vertex(190,170+LeannY);
  vertex(190,140);
  vertex(170,140);
  endContour();
  endShape();
  
   //Z
  beginShape();
  vertex(260,120);
  vertex(320,120);
  vertex(320,190+LeannY);
  vertex(280,190+LeannY);
  vertex(280,230+LeannY);
  vertex(320,230+LeannY);
  vertex(320,250+LeannY);
  vertex(260,250+LeannY);
  vertex(260,170+LeannY);
  vertex(300,170+LeannY);
  vertex(300,140);
  vertex(260,140);
  endShape();
  
  //Y
  beginShape();
  vertex(370,120);
  vertex(390,120);
  vertex(390,170);
  vertex(410,170);
  vertex(410,120);
  vertex(430,120);
  vertex(430,190+LeannY);
  vertex(410,190+LeannY);
  vertex(410,250+LeannY);
  vertex(390,250+LeannY);
  vertex(390,190+LeannY);
  vertex(370,190+LeannY);
  endShape();
  
}