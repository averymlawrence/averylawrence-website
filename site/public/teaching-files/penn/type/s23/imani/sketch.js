function setup() {
  createCanvas(470, 400);
}
     
function draw() {
  background(148,156,255);
  
  const ImaniX = mouseX/2;
  const ImaniY = mouseY/2;
  
  fill(242-ImaniX,255,148);
  noStroke();
  
  //J
  beginShape();
  vertex(40,210-ImaniY);
  vertex(50,210-ImaniY);
  vertex(50,270-ImaniY);
  vertex(90,270-ImaniY);
  vertex(90,120-ImaniY);
  vertex(100,120-ImaniY);
  vertex(100,280-ImaniY);
  vertex(40,280-ImaniY);
  endShape();
  
  //U
  beginShape();
  vertex(150,120-ImaniY);
  vertex(160,120-ImaniY);
  vertex(160,270-ImaniY);
  vertex(200,270-ImaniY);
  vertex(200,120-ImaniY);
  vertex(210,120-ImaniY);
  vertex(210,280-ImaniY);
  vertex(150,280-ImaniY);
  endShape();
  
  //M
  beginShape();
  vertex(250,120-ImaniY);
  vertex(270,120-ImaniY);
  vertex(270,140-ImaniY);
  vertex(280,140-ImaniY);
  vertex(280,160-ImaniY);
  vertex(300,160-ImaniY);
  vertex(300,140-ImaniY);
  vertex(310,140-ImaniY);
  vertex(310,120-ImaniY);
  vertex(330,120-ImaniY);
  vertex(330,280-ImaniY);
  vertex(320,280-ImaniY);
  vertex(320,140-ImaniY);
  vertex(310,140-ImaniY);
  vertex(310,160-ImaniY);
  vertex(300,160-ImaniY);
  vertex(300,170-ImaniY);
  vertex(280,170-ImaniY);
  vertex(280,160-ImaniY);
  vertex(270,160-ImaniY);
  vertex(270,140-ImaniY);
  vertex(260,140-ImaniY);
  vertex(260,280-ImaniY);
  vertex(250,280-ImaniY);
  endShape();
  
  //P
  beginShape();
  vertex(370,120-ImaniY);
  vertex(430,120-ImaniY);
  vertex(430,190-ImaniY);
  vertex(390,190-ImaniY);
  vertex(390,180-ImaniY);
  vertex(420,180-ImaniY);
  vertex(420,130-ImaniY);
  vertex(380,130-ImaniY);
  vertex(380,280-ImaniY);
   vertex(370,280-ImaniY);
  endShape();                       
}