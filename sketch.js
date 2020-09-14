function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
   h = hour();
text('Current hour:\n' + h, 5, 50);
m = minute();
text('Current minute: \n' + m, 5, 50);
s = second();
text('Current second: \n' + s, 5, 50);
angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  
  
  scAngle = map(sc, 0 , 60 , 0 , 360)
  drawSprites();
}