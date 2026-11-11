function setup() {
  createCanvas(470, 400);
}
const Variant= mouseX/10;
function draw() {
  background(200);
  stroke(250-mouseX,250-mouseX,250-mouseX)
  strokeWeight (mouseY)
//r
line(30, 120, 30, 170);
  line(30, 120, 100, 120);
  line(30, 170, 100, 170);
  line(100,120,100,170);
  line(30,170,90,270);
  line(30,170,30,270);
  
//E
  line(140,130,220,130);
  line(140,130,140,270);
  line(140,270, 220,270);
  line(140,200,220,200);
//S
  line(250,130,330,130);
  line(250,200,250,130);
  line(250,200,330,200);
  line(330,200,330,270);
  line(330,270,250,270);
  
  //t
  
  line(360,130,440,130);
  line(400,130,400,270);
  
}