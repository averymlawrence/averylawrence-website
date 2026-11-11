function setup() {
  createCanvas(470, 400);
}

function draw() {
  background(220);
 
  const Variant = mouseX/10;
    const VariantY = mouseY/10;
  
   stroke(10+Variant*20, 105, 10+VariantY*20)
  strokeWeight(VariantY)
  
  // rect (x,y,w,h)
  noFill()
  rect(30 + Variant,120 + Variant,80,50)
 
  
  // line (x1,y1,x2,y2)
  line (30 + Variant,170,30,280)
  
  line(155 + Variant,120,155,280)
  line(250 + Variant,120,250,280)
  line(250 + Variant,120,330,280)
  line(330 + Variant,120,330,280)
  line(360 + Variant,120,360,280)
  line(440 + Variant,120,360,200 + Variant)
  line(360 + Variant,200,440,280 + Variant)

}