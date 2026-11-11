function setup() {
  createCanvas(470, 400);
}

function draw() {
  background(255);
  
  const Maura = mouseY/15;
  
  fill(0);
  noStroke();
  
  //Z
  beginShape();
  vertex(30,120 + Maura);
  vertex(110,120 + Maura);
  vertex(110,130 + Maura);
  vertex(40,270 - Maura);
  vertex(110,270 - Maura);
  vertex(110,280 - Maura);
  vertex(30,280 - Maura);
  vertex(30,270 - Maura);
  vertex(100,130 + Maura);
  vertex(30,130 + Maura);
  endShape();
  
  //E
  beginShape();
  vertex(140,120 + Maura);
  vertex(220,120 + Maura);
  vertex(220,130 + Maura);
  vertex(150,130 + Maura);
  vertex(150,190);
  vertex(190,190);
  vertex(190,200);
  vertex(150,200);
  vertex(150,270 - Maura);
  vertex(220,270 - Maura);
  vertex(220,280 - Maura);
  vertex(140,280 - Maura);
   endShape();
  
  //R
  beginShape();
  vertex(250,120 + Maura);
  vertex(300,120 + Maura);
  vertex(310,130 + Maura);
  vertex(320,140 + Maura);
  vertex(320,170 + Maura);
  vertex(300,190 + Maura);
  vertex(270,190 + Maura);
  vertex(335,280 - Maura);
  vertex(325,280 - Maura);
  vertex(260,195 + Maura);
  vertex(260,280 - Maura);
  vertex(250,280 - Maura);

  //R counter shape
  beginContour();
  vertex(260,130 + Maura);
  vertex(260,180 + Maura);
  vertex(300,180 + Maura);
  vertex(310,170 + Maura);
  vertex(310,140 + Maura);
  vertex(300,130 + Maura);
 
  endContour();
  endShape();

  //0
  beginShape();
  vertex(360,120 + Maura);
  vertex(440,120 + Maura);
  vertex(440,280 - Maura);
  vertex(360,280 - Maura);
  
  //0 counter shape
  beginContour();
  vertex(370,130 + Maura);
  vertex(370,270 - Maura);
  vertex(430,270 - Maura);
  vertex(430,130 + Maura);

  endContour();
  endShape();}

               
  