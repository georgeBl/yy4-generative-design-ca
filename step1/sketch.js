/**
 * 4 symetric canvas roteted to the middle
 *
 * KEYS
 * ctrl                 : save png
 */



function setup() {
  //canvas should resemble an A4 paper
  createCanvas(1240, 1748);
  //colormode set function - HSB in this example
  colorMode(HSB, 360, 100, 100, 100);

  //background black just for testing
  // background(0);



  // rotate the rectangle
  // top-left
  push();
  translate(0,0);
  rotate(0);
  fill(random(360),random(100),random(100));
  rect(0, 0, width/2, height/2);
  strokeWeight(10);
  line(20,20,250,350);
  pop();
  //
  //top-right
  push();
  translate(width/2,0);
  rotate(0);
  fill(random(360),random(100),random(100));
  rect(0,0, width/2, height/2);
  strokeWeight(10);
  var array = [width/2-20,20,width/2-250,350];
  line(array[0],array[1],array[2],array[3]);
  pop();

  //bottom-left
  push();
  translate(width/2,height);
  rotate(radians(180));
  fill(random(360),random(100),random(100));
  rect(0,0, width/2, height/2);
  strokeWeight(10);var array = [width/2-20,20,width/2-250,350];
  line(array[0],array[1],array[2],array[3]);
  pop();

  //bottom-right
  push();
  translate(width,height);
  rotate(radians(180));
  fill(random(360),random(100),random(100));
  rect(0,0, width/2, height/2);
  strokeWeight(10);
  line(20,20,250,350);
  pop();


}

function draw() {



}

function keyReleased() {
  // export png
  if (keyCode == CONTROL) saveCanvas(gd.timestamp(), 'png');
}



//mess
// //          -- separate the canvas --
// //top-left  -- 0,0
// fill(random(360),random(100),random(100));
// rect(0,0,width/2,height/2);
//
// //top-right  -- width/2,0
// fill(random(360),random(100),random(100));
// rect(width/2,0,width/2,height/2);
//
// //bottom-left  -- 0,height/2
// fill(random(360),random(100),random(100));
// rect(0,height/2,width/2,height/2);
//
// //bottom-right  -- width/2,height/2
// fill(random(360),random(100),random(100));
// rect(width/2,height/2,width/2,height/2);

// //try to use translate and draw rectangles in the same position (don't forget push() and pop())
// //top-left
// push();
// translate(0,0);
// fill(random(360),random(100),random(100));
// rect(0,0, width/2, height/2);
// strokeWeight(4);
// line(20,20,100,200);
// pop();
//
// //top-right
// push();
// translate(width/2,0);
// fill(random(360),random(100),random(100));
// rect(0,0, width/2, height/2);
// stroke(20);
// line(20,20,100,200);
// pop();
//
// //bottom-left
// push();
// translate(0,height/2);
// fill(random(360),random(100),random(100));
// rect(0,0, width/2, height/2);
// line(20,20,100,200);
// pop();
//
// //bottom-right
// push();
// translate(width/2,height/2);
// fill(random(360),random(100),random(100));
// rect(0,0, width/2, height/2);
// line(20,20,70,70);
// pop();
