
var canvas2;
let e2ee;

// function windowResized(){
//   resizeCanvas(windowWidth, windowHeight);
// }

function setup() {
  canvas2 = createCanvas(350, 350);
  canvas2.position(windowWidth-900,200);
  canvas2.style("z-index", "-2");
   angleMode(DEGREES);
   background(0);
}


function draw() {
  push();
  translate(width/2, height/2)
  background(0);
  noFill();
  stroke(255);
  strokeWeight(10);

  e2ee = frameCount%200;
  beginShape();

  for (let i = 0; i<1000; i++){

    curveVertex( i-width/3, 100 * -sin(i*0.01*e2ee));
  }

  endShape();
  pop();

}
