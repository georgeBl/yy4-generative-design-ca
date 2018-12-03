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
  // img = loadImage('pic5.png');
}
function setup() {
  //canvas should resemble an A4 paper
  createCanvas(1240, 1748);

  colorMode(RGB,width/2);

    //create background
    var bgCol1 = color("#FFD224");
    var bgCol2 = color("#1923B2");

    for(var i=0;i<width;i+=10){
      var inter = map(i, 0, width, 0, 1);
      var c = lerpColor(bgCol1, bgCol2, inter);
      noStroke();
      fill(c);
      rect(i,0,10,height);
    }

  //change to add more boxes
  var numOfBlocks = 100;
  //calculate the width of each box;
  var widthOfBlock = width/numOfBlocks;

  //define colors
  var c1 = color('#9900B2');
  var c2 = color('#88FF00');


  var alphaVal=1;
  var y1;
  for(var i=0; i<=width/2;i+=widthOfBlock){

    //define the color of the bloc
    var inter = map(i, 0, width, 0, 1);
    // console.log(inter);
    var c = lerpColor(c1, c2, inter);
    c = color(red(c),green(c), blue(c), alpha(c)-alphaVal);
    alphaVal+=widthOfBlock;
    //define the height
    y1 = randomGaussian(700, 300);
    var x = i;
    let b = new Block(x,y1,widthOfBlock,height-y1, c);
    // y1+=20;

    blocks.push(b);
    b.draw();
  }
  var y2;
  alphaVal=1;
  for(var i=width; i>=width/2;i-=widthOfBlock){

    var inter = map(i, 0, width, 0, 1);
    // console.log(inter);
    var c = lerpColor(c1, c2, inter);

    c = color(red(c),green(c), blue(c), alpha(c)-alphaVal);
    alphaVal+=widthOfBlock;
    console.log(alpha(c));
    //define the height
    y2 = randomGaussian(700, 300);

    var x = i;
    let b = new Block(x,y2,widthOfBlock,height-y2, c);
    y2+=20;
    blocks.push(b);
    b.draw();
  }


  // b = new Block(0,20,50,200);
  // b.draw();
}
let b;
var blocks = [];
// function draw(){
//
//
// }

function keyReleased(){
  if(key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}


//define the generated shape
function Block(posX, posY, w, h, color){
  this.posX = posX;
  this.posY = posY;
  this.w = w;
  this.h = h;
  this.color = color;
  //draw shape
  this.draw = function (){
    beginShape();
    fill(color);
    // stroke("black");
    if(this.posX<=width/2){
      vertex(this.posX, this.posY - random(5));
    } else {
      vertex(this.posX, this.posY);
    }
    if(this.posX>=width/2){
      vertex(this.posX + this.w, this.posY - random(5));
    } else {
      vertex(this.posX + this.w, this.posY);
    }
    vertex(this.posX + this.w, this.posY + this.h);
    vertex(this.posX, this.posY + this.h);
    endShape();
  }
}
