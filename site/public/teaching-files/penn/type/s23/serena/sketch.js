function setup() {
  createCanvas(470, 400);
}

function draw() {
  background(255);
  
  const MOVEx = mouseX;
  const MOVEy = mouseY/5;
  
  fill(90,180,195+MOVEy*1);
  noStroke();
  
  //I
  beginShape();
  vertex(60,110);
  vertex(80,110);
  vertex(80,230);
  vertex(78,230 + MOVEy);
  vertex(75,230);
  vertex(72,230 + MOVEy);
  vertex(69,230);
  vertex(66,230+ MOVEy);
  vertex(63,230);
  vertex(60,230+ MOVEy);
  endShape();
  
  //C
  beginShape();
  vertex(150,110);
  vertex(210,110);
  vertex(210, 130);
  vertex(170, 130);
  vertex(170, 210);
  vertex(210, 210);
  vertex(210, 230);
  vertex(205,230+ MOVEy);
  vertex(200, 230);
  vertex(195,230+ MOVEy);
  vertex(190, 230);
  vertex(180, 230+ MOVEy);
  vertex(170, 230);
  vertex(165, 230+ MOVEy);
  vertex(160, 230);
  vertex(155, 230+ MOVEy);
  vertex(150, 230);
  endShape();
  
  //E
  beginShape();
  vertex(260,110);
  vertex(320,110);
  vertex(320, 130);
  vertex(280, 130);
  vertex(280, 160);
  vertex(320, 160);
  vertex(320, 180);
  vertex(280,180);
  vertex(280, 210);
  vertex(320,210);
  vertex(320, 230);
  vertex(318, 230+ MOVEy);
  vertex(307, 230);
  vertex(302, 230+ MOVEy);
  vertex(296,230);
  vertex(291,230+ MOVEy);
  vertex(288,230);
  vertex(280,230+ MOVEy);
  vertex(272,230);
  vertex(266,230+ MOVEy);
  vertex(260,230);
  endShape();
  
}