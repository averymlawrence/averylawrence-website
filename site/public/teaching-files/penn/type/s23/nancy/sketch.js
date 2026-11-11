function setup() {
  createCanvas(470, 400);
}

function draw() {
  background(220);
  fill(0,0,0);
  
  const Nx = mouseX/5
  const Ny = mouseY/5
  
  //M
  beginShape();
  vertex(20 - Nx,270 +Nx);
  vertex(30 - Nx,270 + Nx);
  vertex(30 - Nx,130 - Nx);
  vertex(50 -Nx/3,130 - Nx);
  vertex(70 ,160);
  vertex(90 + Nx/3,130 - Nx);
  vertex(110 + Nx,130 - Nx);
  vertex(110 + Nx,270 + Nx);
  vertex(120 + Nx,270 + Nx);
  vertex(120 + Nx,290 + Nx);
  vertex(90 + Nx,290 + Nx);
  vertex(90,150);
  vertex(70,190);
  vertex(50,150);
  vertex(50 - Nx,290 + Nx);
  vertex(20 - Nx,290 + Nx);
  endShape();
  
  
  //E
  beginShape();
  vertex(140 - Nx, 130- Nx);
  vertex(220 + Nx, 130 - Nx);
  vertex(220, 170);
  vertex(210, 170);
  vertex(210, 150);
  vertex(160, 150);
  vertex(160, 200);
  vertex(220 + Nx/3, 200 - Nx/3);
  vertex(220 + Nx/3, 220 + Nx/3);
  vertex(160, 220);
  vertex(160, 270);
  vertex(210, 270);
  vertex(210, 250);
  vertex(220, 250);
  vertex(220 + Nx, 290 + Nx);
  vertex(140 - Nx, 290 + Nx);
  endShape();
  
  //O
  beginShape();
  vertex(250-Nx, 130 -Nx);
  vertex(330 +Nx, 130 -Nx);
  vertex(330 +Nx, 290+Nx);
  vertex(250-Nx, 290+Nx);
  
  beginContour();
  vertex(310, 250);
  vertex(310, 170);
  vertex(270, 170);
  vertex(270, 250)
  endContour();
  endShape();
  
  //W
  beginShape();
  vertex(360-Nx,130-Nx);
  vertex(370-Nx,290+Nx);
  vertex(390-Nx,290+Nx);
  vertex(400,270);
  vertex(410+Nx,290+Nx);
  vertex(430+Nx,290+Nx);
  vertex(440+Nx,130-Nx);
  vertex(420+Nx,130-Nx);
  vertex(410,250);
  vertex(400,240);
  vertex(390,250);
  vertex(380-Nx,130-Nx)
  endShape();
}

