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



//
// window.onload = function() {
//   const hydra = new Hydra({
//     detectAudio: false,
//     enableStreamCapture: false,
//     width: window.innerWidth,
//     height: window.innerHeight,
//     // position: absolute,
//   });
//
//  p5 = new P5()
//  osc(20,0.91,1).rotate(()=>p5.mouseX).add(osc(30,0,()=>p5.mouseX/p5.width/15+1).luma(0.1,.2).color(0,0,1,1)).add(osc(30,0,1).luma(0.5,0.1)).modulate(noise(3,.1))
//  .blend(o0).mult(o0).out(o1);
//  shape(20, 0.01, ()=>p5.mouseX/p5.width/15+1).modulateScrollY(noise(()=> 1*4,0.2).scale(3*0.8,1,5)).blend(o0, 0.3).mult(osc(10, 0.1, 1)
//  .color(p5.mouseY/p5.height+8, 50.3, p5.mouseX/p5.width-10))
//  .luma(0.4).invert().blend(o1).blend(o1).blend(o1, 0.1).kaleid(3).blend(o0).blend(o0)
// .rotate(0.009,()=>Math.sin(time)* -0.0001 )
// .modulateRotate(o0,()=>Math.sin(time)).modulate(o1).modulateScrollX(o0, ()=>p5.mouseX/width)
// .modulate(o0, 0.1)
// .scale(0.9).saturate(()=>Math.sin(time)*0.5+0.6).out(o0);
//   var projectsButton = document.getElementById('projects');
//   var resumeButton = document.getElementById('resume');
//
//
// }



// function windowResized(){
//   resizeCanvas(windowWidth, windowHeight);
// }
//
// function setup() {
//   canvas = createCanvas(600, 600);
//   canvas.position(windowWidth/2 - 300,0);
//   canvas.style("z-index", "-1");
//   // trial = new Arrow(300, 300, 100, 100);
// }
//
//
// var canvas;
// let eee;
//
// // function windowResized(){
// //   resizeCanvas(windowWidth, windowHeight);
// // }
//
// function setup() {
//   canvas = createCanvas(350, 600);
//   canvas.position(windowWidth-450,windowHeight-650);
//   canvas.style("z-index", "-1");
//    angleMode(DEGREES);
// }
//
//
// function draw() {
//   push();
//   translate(width/2, height/2)
//   background(0);
//   noFill();
//   stroke(255);
//   strokeWeight(10);
//
//   eee = frameCount%200;
//   beginShape();
//
//   for (let i = 0; i<1000; i++){
//
//     curveVertex( i-width/3, 100 * -sin(i*0.01*eee));
//   }
//
//   endShape();
//   pop();
//
// }



const s = (sketch) => {
  let op = 255;
let red, green, blue;
let circles = [];
let amount = 70;
sketch.setup=()=> {
  sketch.createCanvas(350, 650);
  sketch.colorMode(sketch.HSB);

  for (let i = 0; i < amount; i += 1) {
    circles.push(
      new Round(
        sketch.color(sketch.map(i, 0, amount, 340, 360), 79.8, sketch.map(i, 0, amount, 90, 75.7)),
        sketch.random(3000, 1000),
        sketch.random(30, 1000),
        sketch.random(300, 1000)
      )
    );
  }
}

sketch.draw=()=> {
  // clear();
  sketch.blendMode(sketch.BLEND);
  sketch.background(255);
  sketch.blendMode(sketch.MULTIPLY);
  sketch.noStroke();

  for (let i = 0; i < circles.length; i++) {
    circles[i].display();
  }
  sketch.stroke("#c1272d");
  sketch.strokeWeight(3);
  sketch.noFill();
  sketch.rect(0, 0, sketch.width, sketch.height);
}

class Round {
  constructor(c, incx, incy, addedtime) {
    this.x = sketch.width / 2;
    this.y = sketch.height / 2;
    this.pos = sketch.createVector(this.x, this.y);
    this.incx = incx;
    this.incy = incy;
    this.timeinc = sketch.random(0.001, 0.01);
    this.addedtime = addedtime;
    this.time = 0;
    this.shade = c;
    this.rad = sketch.random(70, 20);
  }

  display() {
    sketch.fill(this.shade);
    this.time = sketch.frameCount * this.timeinc;
    this.x = sketch.map(
      sketch.noise((this.time + this.addedtime) * sketch.noise(this.incx)),
      0,
      1,
      0,
      sketch.width
    );
    this.y = sketch.map(
      sketch.noise((this.time + this.addedtime) * sketch.noise(this.incy)),
      0,
      1,
      0,
      sketch.height
    );
    sketch.ellipse(this.x, this.y, this.rad);
  }
}


};
// let long = new p5(s);

let long = new p5(s, 'long');


const l = (s) => {
let d, a, b, c;
let r = 200;
 s.setup = ()=> {
  s.createCanvas(300, 300, s.WEBGL);
  s.angleMode(s.DEGREES);
  s.blendMode(s.SUBTRACT);
}

 s.draw = ()=> {
  s.background(255);
  s.strokeWeight(2);

  a = s.map(s.noise(s.sin(s.frameCount*0.5435)*0.5), 0, 1, 1, 5);
  b = s.map(s.noise(s.cos(s.frameCount*0.342)*0.5), 0, 1, 1, 5);
  c = s.map(s.noise(s.cos(s.frameCount*0.00975)*s.sin(s.frameCount*0.043)), 0, 1, 1, 5);
  d = 1;

  s.beginShape();
  for(let t = 0; t<360; t+=0.05){
    s.fill(255, t%150, (7*t)%150);
    s.noStroke();

    let rt = 2+(d/2)*s.sin(a*t)*r;
    let at = t+(s.sin(b*t)/c)*r;
    s.vertex(rt*s.cos(at), rt*s.sin(at), 1);
  }
  s.endShape();
  s.stroke("#c1272d");
  s.strokeWeight(3);
  s.noFill();
  s.rect(-s.width / 2, -s.height / 2, s.width, s.height);
}
};
// let long = new p5(s);

let short = new p5(l, 'short');



const cat = (third) => {
  let cat;
let xinc, yinc;
third.preload=()=> {
  cat = third.loadImage("./cat.png");
  // loa
}

third.setup=()=> {
  third.createCanvas(300, 300);
}

third.draw=()=> {
  third.background(255);
  third.image(cat, -5, 0, 307, 300);
  xinc= third.map(third.mouseX, 0, third.windowWidth, -3, 5)
  yinc = third.map(third.mouseY, 0, third.windowHeight, -10,3)
  third.stroke("#c1272d");
  third.fill("#c1272d");
  third.rect(third.width / 4+xinc, third.height - third.height / 5+yinc, 10, 35, 20, 20, 20, 20);
  third.rect(third.width - third.width / 4+xinc, third.height - third.height / 5+yinc, 10, 35, 20, 20, 20, 20);
  third.strokeWeight(3);
  third.noFill();
  third.rect(0, 0, third.width, third.height);
}
// third.stroke("#c1272d");

};
// let long = new p5(s);

let thirdCat = new p5(cat, 'catto');
