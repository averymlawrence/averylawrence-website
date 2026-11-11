function setup() {
  createCanvas(470, 400);
}

function draw() {
  background(0, 0, 0);

  const VariantX = mouseX / 10;
  const VariantY = mouseY / 10;

  noStroke();
  fill(100, 100, 100);

  strokeWeight(VariantY);
  strokeCap(ROUND);
  stroke(100, 100, 255 - VariantY);

 
  //first O
   strokeWeight(VariantY);
  stroke(0, 168, 72);
  noFill();
  ellipse(80, 200, 70 + VariantX, 160);
  

  //second O
  strokeWeight(VariantY);
  stroke(255, 100 - VariantY, 255);
  noFill();
  ellipse(185, 200, 70 + VariantX, 160);

  //P
   noStroke();
  fill(58, 53, 255);
  stroke(58, 53, 255);
  strokeWeight(VariantY);
  
  line(320 + VariantX, 120, 250, 120);
  line(320 + VariantX, 200, 250, 200);
  line(250, 200, 250, 280);
  line(320 + VariantX, 200, 320 + VariantX, 120);
  line(250, 200, 250, 120);
  
  
  //S
   noStroke();
  fill(255, 241, 63);
  stroke(255, 241, 63);
  strokeWeight(VariantY);
  
  line(360, 120, 400 + VariantX, 120);
  line(360, 200, 400 + VariantX, 200);
  line(400 + VariantX, 200, 400 + VariantX, 280);
  line(400 + VariantX, 280, 360, 280);
  line(360, 200, 360, 120);
  
 
}
