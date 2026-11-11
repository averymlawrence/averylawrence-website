function setup() {
  createCanvas(470, 400);
}

function draw() {
  background(220);

  const MsangwaX = mouseX / 45;
   const OgadaY = mouseY /20;
  

background('rgba(0,255,0, 0.25)');
  
  fill (200, 200, 255)
stroke (0,0, 225);
  strokeWeight (3)
 
  

  //M
  beginShape();
  vertex(30-MsangwaX,290);
  vertex(30-MsangwaX,120);
  vertex (40,120+OgadaY)
  vertex(50,120);
  vertex(70,160);
  vertex(90,120);
  vertex (100,120+OgadaY);
  vertex(110+MsangwaX,120);
  vertex(110+MsangwaX,290);
  vertex (100,290-OgadaY)
  vertex(90,290);
  vertex(90,150);
  vertex(75,180);
  vertex(65,180);
  vertex(50,140);
  vertex(50,290);
  vertex(50,290);
  vertex(40,290-OgadaY);
  vertex(30,290);
  endShape();
  
  //O 
  beginShape();
  vertex (140-MsangwaX,290)
  vertex (140-MsangwaX,120)
  vertex (150,120+OgadaY)
  vertex (160,120)
  vertex (200,120)
  vertex (210,120+OgadaY)
  vertex (220+MsangwaX,120)
  vertex (220+MsangwaX,290)
  vertex (210,290-OgadaY)
  vertex (200,290)
  vertex (160,290)
  vertex (150,290-OgadaY)
  vertex (140-MsangwaX,290)
  

   //O counter #1
  beginContour();
  vertex(160,280);
  vertex(200,280);
  vertex(200,130);
  vertex(160,130);         
  endContour();
  endShape();
  
  //O #2
  beginShape();
  vertex(250-MsangwaX,290)
  vertex(250-MsangwaX,120)
  vertex (260,120+OgadaY)
  vertex(270,120)
  vertex (310,120)
  vertex (320,120+OgadaY)
  vertex (330+MsangwaX,120)
  vertex (330+MsangwaX,290)
  vertex (320,290-OgadaY)
  vertex (310,290)
  vertex (270,290)
  vertex (260,290-OgadaY)
  vertex (250,290)
   //O counter #2
  beginContour();
  vertex(270,280);
  vertex(310,280);
  vertex(310,130);
  vertex(270,130);         
  endContour();
  endShape();
  
    //N 
  beginShape();
  vertex(360-MsangwaX,290);
  vertex(360-MsangwaX,120);
  vertex (370,120+OgadaY)
  vertex(380,120);
  vertex(420,250);  
  vertex(420,120);
  vertex (430,120+OgadaY);
  vertex(440+MsangwaX,120);
  vertex(440+MsangwaX,290);
  vertex (430,290-OgadaY)
  vertex(420,290);   
  vertex(380,160);
  vertex(380,290);
  vertex (370,290-OgadaY);
  vertex(360,290);   
  
  endShape();
  
  
   
}
