function setup() {
  createCanvas(470, 400);
}

function draw() {
  background(235, 107, 52);
 
  stroke(235, 169, 16);
  strokeWeight(20);
 
  // calculate the size of the letters based on the mouse position
  var size = map(mouseX, 0, width, 0, 100);
 
  //  H
  line(40, 40, 40, 280+size); // left vertical line
  line(150, 40, 150, 280+size); // right vertical line
  line(40, 100, 150, 100); // horizontal line
  
  //  O
  if (mouseX < 230) { // if the mouse is to the left of the center of the canvas
    fill(255, 255, 0); // set the fill color to yellow
  } else {
    fill(242, 69, 46); // set the fill color to red
  }
  ellipse(250, 165, 100+size/0.5, 230+size/0.5); // 
fill(255, 255, 0); // set the fill color to yellow
  
  
  //  T
  line(350, 50, 350, 280+size); // vertical line
  line(300, 50, 400, 50); // horizontal line
}
