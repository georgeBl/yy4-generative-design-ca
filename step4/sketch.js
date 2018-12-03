/**
 * 4 symetric canvas roteted to the middle
 *
 * KEYS
 * ctrl                 : save png
 */
//
var img,
    colors= [];

var tileCountX = 620;
var tileCountY = 874;

function preload(){
  img = loadImage('pic5.png');
}
function setup() {
  //canvas should resemble an A4 paper
  createCanvas(1240, 1748);
  //colormode set function - HSB in this example
  colorMode(RGB);
  noFill();
  strokeWeight(2);
  stroke(0, 25);

  image(img,0,0);

  push();
  translate(width,0);
  scale(-1,1);
  image(img,0,0);
  pop();

  push();
  translate(width,height-85);
  scale(-1,-1);
  image(img,0,0);
  pop();

  push();
  translate(0,height-85);
  scale(1,-1);
  image(img,0,0);
  pop();

  loadPixels();

  for(var y = 0; y < height; y++){
    for(var x = 0; x < width; x++){
      var i = (x + y * width) * 4;
      var c = color(
        pixels[i],
        pixels[i+1],
        pixels[i+2],
        pixels[i+3]
      )
      colors.push(c);
    }
  }
  background(255);
  console.log(colors);

  var i=0;
  for(var y = 0; y < height; y++){
    for(var x = 0; x < width; x++){
        stroke(colors[i]);
        point(x,y);
        i++;
    }
  }


}
function draw(){

  // if (mouseIsPressed && mouseButton == LEFT) {
  //   console.log("hey");
  //   push();
  //   translate(width / 2, height / 2);
  //
  //   var circleResolution = int(map(mouseY + 100, 0, height, 2, 10));
  //   var radius = mouseX - width / 2 + 0.5;
  //   var angle = TAU / circleResolution;
  //
  //   beginShape();
  //   for (var i = 0; i <= circleResolution; i++) {
  //     var x = cos(angle * i) * radius;
  //     var y = sin(angle * i) * radius;
  //     vertex(x, y);
  //   }
  //   endShape();
  //   pop();
  // }
}

function keyReleased(){
  if(key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
