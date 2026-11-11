function setup() {
  createCanvas(470, 400);
}

function draw() {
  background(255,228,23);
  
  const Variant = mouseX
  const Variant2 = mouseY
  
  fill(0)
  strokeWeight(10)
  strokeCap(SQUARE);
  stroke(206,55,40);
  
  //N
  beginShape();
  line(30,110,30,290);
  line(30,110,100,290);
  line(100,110,100,290);

  //O
  beginShape();
  line(140,110,140,290);
  line(140,290,220,290);
  line(220,110,220,290);
  line(140,110,220,110);
  
  //P
  beginShape();
  line(250,110,250,290);
  line(250,110,330,110);
  line(330,110,330,190);
  line(330,190,250,190);
  
  //E
  beginShape();
  line(360,110,360,290);
  line(360 - Variant,110 + Variant2,440,110);
  line(360 - Variant,190, 420, 190);
  line(360 - Variant,290 - Variant2,440,290);
}