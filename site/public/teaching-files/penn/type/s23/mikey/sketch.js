function setup() {
  createCanvas(470,400);
}

function draw() {
  background(220);
fill(0)

beginShape();
  vertex(30,110);
  vertex(30,200);
  vertex(30 + mouseX/8,290);
  vertex(50 + mouseX/8,290);
  vertex(50,200);
  vertex(100,200);
  vertex(110,190);
  vertex(110,120);
  vertex(100,110);

beginContour();
  vertex(50,180);
  vertex(50,130);
  vertex(90,130);
  vertex(90,180);
endContour();
  
endShape();
  
  
beginShape();
  vertex(140,110);
  vertex(140,130);
  vertex(170,130);
  vertex(170,200);
  vertex(170 + mouseX/8,270);
  vertex(140 + mouseX/8,270);
  vertex(140 + mouseX/8,290);
  vertex(220 + mouseX/8,290);
  vertex(220 + mouseX/8,270);
  vertex(190 + mouseX/8,270);
  vertex(190,200);
  vertex(190,130);
  vertex(220,130);
  vertex(220,110);
endShape();
  
  
  
beginShape();
  vertex(250,110);
  vertex(250,130);
  vertex(280,130);
  vertex(280,200);
  vertex(280 + mouseX/8,290);
  vertex(300 + mouseX/8,290);
  vertex(300,200);
  vertex(300,130);
  vertex(330,130);
  vertex(330,110);
endShape();
}