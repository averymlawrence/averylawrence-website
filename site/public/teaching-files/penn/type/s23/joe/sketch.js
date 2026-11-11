function setup() {
  createCanvas(470, 400);
}

function draw() {
  background(255-min(max(mouseX-100,0)+max(mouseY-100,0), 470)*205/470);
  strokeWeight(max(2, min(mouseX*70/470, 70)));
  stroke(mouseY*255/470, mouseX*255/470, 0);
  
   //H
  const Hshift = 25
  line(25 + Hshift,100,25 + Hshift,300);
  line(100 + Hshift,100,100 + Hshift,300);
  line(25 + Hshift, 200, 100 + Hshift,200);
  
  const Ushift = Hshift -75
  //A
  line(235 + Ushift,100,185 + Ushift,300);
  line(210 + Ushift,200,255 + Ushift,200);
  line(235 + Ushift,100,275 + Ushift,300);
  
  //R
  const Rshift = Ushift + 15
  noFill()
  arc(270 + Rshift,150,150,100, 1.5*Math.PI, 0.5*Math.PI)
  line(270 + Rshift,100,270 + Rshift,300);
  line(270 + Rshift,200,345 + Rshift,300);

  
  //D
  const Dshift = Rshift + 85
  arc(270 + Dshift,200,150,200, 1.5*Math.PI, 0.5*Math.PI)
  line(270 + Dshift,100,270 + Dshift,300);
  
  //!
  const Eshift = Dshift + 100
  //arc(270 + Eshift,200,150,200, 1.5*Math.PI, 0.5*Math.PI)
  line(270 + Eshift,100,270 + Eshift,250);
  circle(270 + Eshift, 285, 15)

}