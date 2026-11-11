function setup() {
  createCanvas(470, 400);
}

function draw() {
  const Jocelyn = abs(mouseY/10);
  const JocelynX = abs(mouseX/20);
  
  background(200+Jocelyn-JocelynX);
  
  fill(200-JocelynX*10, 100 - Jocelyn*10, 80+JocelynX*10);
  noStroke();
  
  //big W
  beginShape();
  vertex(240,120 + Jocelyn);
  vertex(250,120 + Jocelyn);
  vertex(265,240 - Jocelyn/5);
  vertex(290,180 + Jocelyn/5);
  vertex(315,240 - Jocelyn/5);
  vertex(330,120 + Jocelyn);
  vertex(340,120 + Jocelyn);
  vertex(320,280 - Jocelyn);
  vertex(290,210);
  vertex(260,280 - Jocelyn);
  vertex(240,120 + Jocelyn);
  endShape();
  
  //little W  
  beginShape();
  vertex(20,120 - Jocelyn);
  vertex(30,120 - Jocelyn);
  vertex(45,240 + Jocelyn/5);
  vertex(70,180 - Jocelyn/5);
  vertex(95,240 + Jocelyn/5);
  vertex(110,120 - Jocelyn);
  vertex(120,120 - Jocelyn);
  vertex(100,280 + Jocelyn);
  vertex(70,210);
  vertex(40,280 + Jocelyn);
  vertex(20,120 - Jocelyn);
  endShape();
  
  //O
  beginShape();
  vertex(150-JocelynX,170-JocelynX);
  vertex(210+JocelynX,170-JocelynX);
  vertex(210+JocelynX,240+JocelynX);
  vertex(150-JocelynX,240+JocelynX); 
  vertex(150-JocelynX,170-JocelynX);
  
  //O contour
  beginContour();
  vertex(160+JocelynX,180+JocelynX);
  vertex(160+JocelynX,230-JocelynX);
  vertex(200-JocelynX,230-JocelynX);
  vertex(200-JocelynX,180+JocelynX);
  vertex(160+JocelynX,180+JocelynX);
  endContour();
  endShape();
  
  //exclamation point
  beginShape();
  vertex(380+JocelynX,120-Jocelyn);
  vertex(420-JocelynX,120-Jocelyn);
  vertex(405-JocelynX,240+Jocelyn);
  vertex(395+JocelynX,240+Jocelyn);
  vertex(380+JocelynX,120-Jocelyn);
  endShape();
  
  beginShape();
  vertex(395+JocelynX,260-Jocelyn);
  vertex(405-JocelynX,260-Jocelyn);
  vertex(405-JocelynX,280+Jocelyn);
  vertex(395+JocelynX,280+Jocelyn);
  vertex(395+JocelynX,260-Jocelyn);
  endShape();

}