function setup() {
  createCanvas(450,300);  
  frameRate(24);  
}
function draw() {
  background(220);
//L 
  fill(0)
  beginShape();
  vertex(mouseX,110)
  vertex(30,280)
  vertex(110,280)
  vertex(110,270)
  vertex(40,270)
  vertex(40,110)
  endShape(close)
  
//O
  fill(0)
  beginShape()
  vertex(140,110)
  vertex(140,280)
  vertex(220,280)
  vertex(220,110)
  endShape(close)
  
  
  fill(220)
  beginShape()
  vertex(150,120)
  vertex(150,270)
  vertex(210,270)
  vertex(210,120)
  endShape(close)
  
  
//T
  fill(0)
  beginShape()
  vertex(250,110)
  vertex(250,120)
  vertex(285,120)
  vertex(mouseX,280)
  vertex(295,280)
  vertex(295,120)
  vertex(330,120)
  vertex(330,110)
  endShape(close)


}
