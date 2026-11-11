function setup() {
  createCanvas(470, 400);
}

function smoothstep(x) {
  if (x < 40)
      return 0;

   if (x >= 440)
      return 1;

   // Scale/bias into [0..1] range
   x = (x - 40) / (440 - 40);

   return x * x * (3 - 2 * x);
}

function wave(x) {
  return -sin((x - 40) * 2*Math.PI/400) * 100;
}

function map(x, in_min, in_max, out_min, out_max) {
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function draw() {
  background(
    map(smoothstep(mouseY) * 22*1.3, 0, 22*1.3, 255, 22*1.3),
    map(smoothstep(mouseY) * 100*1.3, 0, 100*1.3, 255, 100*1.3), 
    map(smoothstep(mouseY) * 145*1.3, 0, 145*1.3, 255, 145*1.3)
  );
  
  const VARIANT = mouseX/10;
  
  fill(smoothstep(mouseY) * 52*1.3, smoothstep(mouseY) * 169*1.3, smoothstep(mouseY) * 201*1.3);
  noStroke();
  
  // conversion:
  // 
  //S
  beginShape();
  // vertex(40,120 + mouseX/10 * sin((40 - 40) * 2*Math.PI/400) * 400 + 40);
  // print(smoothstep(120, 300, mouseX));
  // print(sin((40 - 40) * 2*Math.PI/400) * 400 + 40);

  vertex(40,wave(40) * smoothstep(mouseX) + 120);
  vertex(110,wave(110) * smoothstep(mouseX) + 120);
  vertex(110,wave(110) * smoothstep(mouseX) + 140);
  vertex(60,wave(60) * smoothstep(mouseX) + 140);
  vertex(60,wave(60) * smoothstep(mouseX) + 190);
  vertex(110,wave(110) * smoothstep(mouseX) + 190);
  vertex(110,wave(110) * smoothstep(mouseX) + 290);
  vertex(40,wave(40) * smoothstep(mouseX) + 290);
  vertex(40,wave(40) * smoothstep(mouseX) + 270);
  vertex(90,wave(90) * smoothstep(mouseX) + 270);
  vertex(90,wave(90) * smoothstep(mouseX) + 210);
  vertex(40,wave(40) * smoothstep(mouseX) + 210);
  endShape();
  
  //U
  beginShape();
  vertex(250-110,wave(250-110) * smoothstep(mouseX) + 120);
  vertex(270-110,wave(270-110) * smoothstep(mouseX) + 120);
  vertex(270-110,wave(270-110) * smoothstep(mouseX) + 270);
  vertex(310-110,wave(310-110) * smoothstep(mouseX) + 270);
  vertex(310-110,wave(310-110) * smoothstep(mouseX) + 120);
  vertex(330-110,wave(330-110) * smoothstep(mouseX) + 120);
  vertex(330-110,wave(330-110) * smoothstep(mouseX) + 290);
  vertex(250-110,wave(250-110) * smoothstep(mouseX) + 290);
  endShape();
  
  //R
  beginShape();
  vertex(250,wave(250) * smoothstep(mouseX) + 120);
  vertex(320,wave(320) * smoothstep(mouseX) + 120);
  vertex(320,wave(320) * smoothstep(mouseX) + 200);
  vertex(290,wave(290) * smoothstep(mouseX) + 200);
  vertex(290,wave(290) * smoothstep(mouseX) + 200);
  vertex(320,wave(320) * smoothstep(mouseX) + 290);
  vertex(300,wave(300) * smoothstep(mouseX) + 290);
  vertex(270,wave(270) * smoothstep(mouseX) + 205);
  vertex(270,wave(270) * smoothstep(mouseX) + 290);
  vertex(250,wave(250) * smoothstep(mouseX) + 290);
  vertex(250,wave(250) * smoothstep(mouseX) + 120);
  
  //R counter shape
  beginContour();
  vertex(270,wave(270) * smoothstep(mouseX) + 140);
  vertex(270,wave(270) * smoothstep(mouseX) + 180);
  vertex(300,wave(300) * smoothstep(mouseX) + 180);
  vertex(300,wave(300) * smoothstep(mouseX) + 140);
  
  endContour();
  endShape();
  
  //F
  beginShape();
  vertex(350,wave(350) * smoothstep(mouseX) + 120);
  vertex(440,wave(440) * smoothstep(mouseX) + 120);
  vertex(440,wave(440) * smoothstep(mouseX) + 140);
  vertex(350,wave(350) * smoothstep(mouseX) + 140);
  vertex(350,wave(350) * smoothstep(mouseX) + 290);
  vertex(370,wave(370) * smoothstep(mouseX) + 290);
  vertex(370,wave(370) * smoothstep(mouseX) + 290);
  vertex(370,wave(370) * smoothstep(mouseX) + 200);
  vertex(410,wave(410) * smoothstep(mouseX) + 200);
  vertex(410,wave(410) * smoothstep(mouseX) + 180);
  vertex(370,wave(370) * smoothstep(mouseX) + 180);
  vertex(370,wave(370) * smoothstep(mouseX) + 290);
  vertex(370,wave(370) * smoothstep(mouseX) + 140);
  vertex(350,wave(350) * smoothstep(mouseX) + 140);
  vertex(350,wave(350) * smoothstep(mouseX) + 120);
  endShape()
  
}

/*
function setup() {
  createCanvas(470, 400);
}

function smoothstep(x) {
  if (x < 40)
      return 0;

   if (x >= 800)
      return 1;

   // Scale/bias into [0..1] range
   x = (x - 40) / (800 - 40);

   return x * x * (3 - 2 * x);
}

function wave(x) {
  return sin((x - 40) * 2*Math.PI/400) * 400 + 40;
}

function draw() {
  background(255);
  
  const VARIANT = mouseX/10;
  
  fill(0);
  noStroke();
  
  // conversion:
  // 
  //S
  beginShape();
  // vertex(40,120 + mouseX/10 * sin((40 - 40) * 2*Math.PI/400) * 400 + 40);
  // print(smoothstep(120, 300, mouseX));
  // print(sin((40 - 40) * 2*Math.PI/400) * 400 + 40);

  vertex(40, wave(40) * smoothstep(mouseX) + 120);
  vertex(110,wave(110) * smoothstep(mouseX) + 120);
  vertex(110,wave(110) * smoothstep(mouseX) + 140);
  vertex(60, wave(60) * smoothstep(mouseX) + 140);
  vertex(60, wave(60) * smoothstep(mouseX) + 190);
  vertex(110,190);
  vertex(110,290);
  vertex(40,290);
  vertex(40,270);
  vertex(90,270);
  vertex(90,210);
  vertex(40,210);
  endShape();
  
  //U
  beginShape();
  vertex(250-110,120);
  vertex(270-110,120);
  vertex(270-110,270);
  vertex(310-110,270);
  vertex(310-110,120);
  vertex(330-110,120);
  vertex(330-110,290);
  vertex(250-110,290);
  endShape();
  
  //R
  beginShape();
  vertex(250,120);
  vertex(320,120);
  vertex(320,200);
  vertex(290,200);
  vertex(290,200);
  vertex(320,290);
  vertex(300,290);
  vertex(270,205);
  vertex(270,290);
  vertex(250,290);
  vertex(250,120);
  
  //R counter shape
  beginContour();
  vertex(270,140);
  vertex(270,180);
  vertex(300,180);
  vertex(300,140);
  
  endContour();
  endShape();
  
  //F
  beginShape();
  vertex(350,120);
  vertex(440,120);
  vertex(440,140);
  vertex(350,140);
  vertex(350,290);
  vertex(370,290);
  vertex(370,290);
  vertex(370,200);
  vertex(410,200);
  vertex(410,180);
  vertex(370,180);
  vertex(370,290);
  vertex(370,140);
  vertex(350,140);
  vertex(350,120);
  endShape()
  
}
*/