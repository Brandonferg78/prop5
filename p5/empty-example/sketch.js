var g = 0; 

function setup() {
  // put setup code here
  createCanvas(500,500);//defining size of my canvas
}
function mousPressed(){
  if (mousex >=width/2-25 && mousex<==width/2+25 && mousey>==height/2 + 25){
    g= 225;
  }
}

function draw() {
  // put drawing code here
  background("#003366");//defining the color of the canvas
  fill (255,g,0);
  noStroke();
  ellipse(width/2, height/2, 50, 50);
  textsize(30);//text size in pixels
  textFont("Georgia");//change the font(make sure it's a web-safe font)
  textStyle(ITALIC);// style (i.e italic, bold etc.)
  text("Good After",300,450);
  fill("#00FF00");// green fill
}