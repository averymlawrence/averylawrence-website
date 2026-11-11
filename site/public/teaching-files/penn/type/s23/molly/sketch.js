function setup() {
  createCanvas(470, 400);
}

function draw() {
  background('red');
  
    const Variant = mouseX/10;
  
  //O
  strokeWeight(5);
  line(40, 120-mouseX/10, 90, 120-mouseX/10);
  line(40, 270, 90, 270);
  line(40, 120-mouseX/10, 40, 195-mouseX/10);
  line(40, 195, 40, 270);
  line(90, 120-mouseX/10, 90, 195-mouseX/10);
  line(90, 195, 90, 270)
  
  //U
  strokeWeight(5);
  line(150, 120-mouseX/10, 150, 195-mouseX/10);
  line(150, 195, 150, 270);
  line(150, 270, 200, 270);
  line(200, 120-mouseX/10, 200, 195-mouseX/10);
  line(200, 195, 200, 270);
  
  //C
  strokeWeight(5);
  line(260, 120-mouseX/10, 310, 120-mouseX/10);
  line(260, 120-mouseX/10, 260, 195-mouseX/10);
  line(260, 195, 260, 270);
  line(260, 270, 310, 270);
  
  //H
  strokeWeight(5);
  line(370, 120-mouseX/10, 370, 195-mouseX/10);
  line(370, 195, 370, 270);
  line(430, 120-mouseX/10, 430, 195-mouseX/10);
  line(430, 195, 430, 270);
  line(370, 195-mouseX/10, 430, 195-mouseX/10);
  
  
  
}