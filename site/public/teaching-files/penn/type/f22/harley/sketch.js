 function setup() {
  createCanvas(470, 400); 
}

function draw() {
  background(102,178, 255); //BACKGROUNDcolor
  
  strokeWeight(max(.5, min(mouseX, 60)));
  stroke(mouseY, mouseX, 255, 90);
  
  //S
  line(40, 120, 40, 190);
  line(50,120, 90,120);
  line(50,190, 90,190);
  line(100, 190, 100, 270)
  line(50, 270, 90, 270)
  
  //O
  line(150, 120, 150, 270);
  line(160,120, 200,120);
  line(160, 270, 200,270);
  line(210, 120, 210, 270)
  
  //A
  line(260, 120, 260, 270);
  line(270,120, 310,120);
  line(270,190, 310,190);
  line(320, 120, 320, 270)
  
  //K
  line (370, 120, 370, 270)
  line (430, 120, 390, 180)
  line (390, 200, 430, 270)
}
