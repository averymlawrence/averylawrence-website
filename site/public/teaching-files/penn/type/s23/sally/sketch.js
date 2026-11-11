function setup() {
  createCanvas(470, 400);
}

function draw() {
  background(mouseX, mouseY, mouseX);
  
  strokeWeight(12);
  stroke(mouseY, mouseX, 0);
  strokeCap(ROUND);
  
  // L
  line(50 + mouseX/5, 130, 50, 270);
  line(50, 270, 90, 270);
  
  // M
  line(160 + mouseX/5, 130, 160, 270);
  line(200 + mouseX/5, 130, 200, 270);
  line(160 + mouseX/5, 130, 180 + mouseX/10, 200);
  line(200 + mouseX/5, 130, 180 + mouseX/10, 200);
  
  
  // A 
  line(290 + mouseX/5, 130, 270, 270);
  line(290 + mouseX/5, 130, 310, 270);
  line(280 + mouseX/10, 200, 300 + mouseX/10, 200);
  
  // O
  line(380 + mouseX/5, 130, 380, 270);
  line(380, 270, 420, 270);
  line(420  + mouseX/5, 130, 420, 270);
  line(380  + mouseX/5, 130, 420 + mouseX/5, 130);
  
}