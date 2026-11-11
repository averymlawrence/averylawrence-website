function setup() {
  createCanvas(470, 400);
}

function draw() {
  background(255);
    
  const VariantX = mouseX/10;
  const VariantY = mouseY/10;
  
  fill(0);
  noStroke();
  
  //J dot
  beginShape();
  vertex(80+VariantX,120);
  vertex(100+VariantX,120);
  vertex(100+VariantX,140);
  vertex(80+VariantX,140);
  endShape();
  
   //J body
  beginShape();
  vertex(80+VariantX,150);
  vertex(100+VariantX,150);
   vertex(100,280);
     vertex(40,280);
  vertex(40,240);
   vertex(60,240);
     vertex(60,260);
      vertex(80,260);
  endShape();
    
   //U body
  beginShape();
  vertex(140-VariantX,190);
  vertex(160-VariantX,190);
   vertex(160-VariantX,260);
     vertex(190-VariantX,260);
  vertex(190-VariantX,190);
   vertex(210-VariantX,190);
     vertex(210-VariantX,280);
      vertex(140-VariantX,280);

  
  endShape();
  
     
   //n body
  beginShape();
  vertex(250-VariantX,190+VariantY);
  vertex(320-VariantX,190+VariantY);
   vertex(320-VariantX,280+VariantY);
     vertex(300-VariantX,280+VariantY);
  vertex(300-VariantX,210+VariantY);
   vertex(270-VariantX,210+VariantY);
     vertex(270-VariantX,280+VariantY);
      vertex(250-VariantX,280+VariantY);
  
  
    endShape();
  
      
   // body
   beginShape();
  vertex(350-VariantX,130);
  vertex(370-VariantX,130);
   vertex(370-VariantX,210);
     vertex(380-VariantX,210);
  vertex(380-VariantX,180);
   vertex(400-VariantX,180);
   vertex(400-VariantX,280);
     vertex(400-VariantX,280);
   vertex(380-VariantX,280);
  vertex(380-VariantX,230);
  vertex(370-VariantX,230);
  vertex(370-VariantX,280);
   vertex(370-VariantX,280);
  vertex(350-VariantX,280);
  
    endShape();
}