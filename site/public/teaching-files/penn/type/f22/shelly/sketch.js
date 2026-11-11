function setup() {
  createCanvas(470, 400);
}

function draw() {
   background(255,255,255);
  
  const VariantX = mouseX/20;
  const VariantY = mouseY;
  
  fill(100+VariantY,100+VariantX,200);
  noStroke();
  
  //B
  beginShape();
  vertex(40,120);
  vertex(90,120);
  vertex(90,130);
  vertex(100+VariantX*10,130);
  vertex(100+VariantX*10,190);
  vertex(90,190);
  vertex(90,200);
  vertex(100+VariantX*10,200);
  vertex(100+VariantX*10,270);
  vertex(90,270);
  vertex(90,280);             
  vertex(40,280);

  
  //B counter shape
  beginContour();
  vertex(50,130);
  vertex(50,190);
  vertex(90-VariantX,190);
  vertex(90-VariantX,130);
  endContour();
   beginContour();
  vertex(50,200);
  vertex(50,270);
  vertex(90-VariantX,270);
  vertex(90-VariantX,200);
  endContour();
  endShape();
  
  //01
  beginShape();
  vertex(150+VariantX*8,120);
  vertex(210+VariantX*8,120);
  vertex(210+VariantX*8,280);
  vertex(150+VariantX*8,280); 
  
  //01 counter shape
  beginContour();
  vertex(160+VariantX*8,130);
  vertex(160+VariantX*8,270-VariantY/10);
  vertex(200+VariantX*8,270-VariantY/10);
  vertex(200+VariantX*8,130);

 
  endContour();
  endShape();
  
  
  //02
  beginShape();
  vertex(260+VariantX*8,120);
  vertex(320+VariantX*8,120);
  vertex(320+VariantX*8,280);
  vertex(260+VariantX*8,280); 
  
  //02 counter shape
  beginContour();
  vertex(270+VariantX*8,130);
  vertex(270+VariantX*8,270-VariantY/10);
  vertex(310+VariantX*8,270-VariantY/10);
  vertex(310+VariantX*8,130);

 
  endContour();
  endShape();
  
  
  //m
  beginShape();
  vertex(370+VariantX*8,120);
  vertex(380+VariantX*8,120);
  vertex(400+VariantX*8,140);
  vertex(420+VariantX*8,120);
  vertex(430+VariantX*8,120);
  vertex(430+VariantX*8,280);
  vertex(420+VariantX*8,280);
  vertex(420+VariantX*8,130);
  vertex(400+VariantX*8,150-VariantY/10);
  vertex(380+VariantX*8,130);
  vertex(380+VariantX*8,280);
  vertex(370+VariantX*8,280);


  endShape()
  
      
  
}
