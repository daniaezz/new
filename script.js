let trial;

// function windowResized(){
//   resizeCanvas(windowWidth, windowHeight);
// }

// function setup() {
//   canvas = createCanvas(600, 600);
//   canvas.position(windowWidth/2 - 300,0);
//   canvas.style("z-index", "-1");
//   trial = new Arrow(300, 300, 100, 100);
// }

let t = 0;

function setup() {
  canvas = createCanvas(600, 600, WEBGL);
  canvas.position(windowWidth/2 - 300,30);
  canvas.style("z-index", "-1");
  noStroke();
  colorMode(HSB);
}


function draw(){
  background(0);
  t += 0.01;
  r = 100 / 20;
  b = 105;
  d = height / 8 + 5 * sin(t / 10);
  specularMaterial(255);

  let mx = map(mouseX, 0, canvas.width, -canvas.width / 2, canvas.width / 2);
  let my = map(mouseY, 0, canvas.height, -canvas.height / 2, canvas.height / 2);

  for (let i = 5; i < 20; i += 4) {
    pointLight(
      map(i, 0, 20, 10, 460),
      200,
      200,
      mx + map(noise(frameCount * i * i * 0.00005), 0, 1, -100, 300),
      my + map(noise(frameCount * i * i * 0.0001), 0, 1, -300, 300),
      200
    );
  }
  n = 19;

  push();
  rotateX(noise(10));
  pop();

  push();
  translate(0, 0, -canvas.width / 2);
  sphere(400, 100, 100);
  pop();
}
