function setup() {
  createCanvas(350, 400);
}

function draw() {
  background(220);
  
  strokeWeight(max(10,min(-mouseX,90)));
  stroke(mouseY, mouseX,0)
  
  
  line(80,100+mouseY/2,80,300+mouseY/2)

  
  line(185,100-mouseY/2,185,300-mouseY/2);
  line(275,100-mouseY/2,275,300-mouseY/2)
  line(185,300-mouseY/2,275,300-mouseY/2)
  
}



  
  
