function setup() {
  createCanvas(470, 400);
}

function draw() {
  background(225);
  
  const Variant = mouseX/2; 
  
  fill(0);
  noStroke();
  
  //F
  beginShape();
  vertex(20,100 + Variant);
  vertex(120,100 + Variant);
  vertex(120,120 + Variant);
  vertex(40,120 + Variant);
  vertex(40,180 + Variant);
  vertex(120,180 + Variant);
  vertex(120,200 + Variant);
  vertex(40,200 + Variant);
  vertex(40,290 + Variant);
  vertex(20,290 + Variant);
  endShape();
  
  //A
  beginShape();
  vertex(130,100 + Variant);
  vertex(130,290+ Variant);
  vertex(150,290+ Variant);
  vertex(150,200+ Variant);
  vertex(210,200+ Variant);
  vertex(210,290+ Variant);
  vertex(230,290+ Variant);
  vertex(230,100+ Variant);
  
  beginContour();
  vertex(150,120+ Variant);
  vertex(210,120+ Variant);
  vertex(210,180+ Variant);
  vertex(150,180+ Variant);
  endContour();
  endShape();

  
  //L 
  beginShape();
  vertex(240,100 + Variant);
  vertex(240,290+ Variant);
  vertex(340,290+ Variant);
  vertex(340,270+ Variant);
  vertex(260,270+ Variant);
  vertex(260,100+ Variant);
  endShape();
  
  //L 
  beginShape();
  vertex(350,100+ Variant);
  vertex(350,290+ Variant);
  vertex(450,290+ Variant);
  vertex(450,270+ Variant);
  vertex(370,270+ Variant);
  vertex(370,100+ Variant);
  endShape();
  
  
}