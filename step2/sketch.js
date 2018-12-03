/**
 * 4 symetric canvas roteted to the middle
 *
 * KEYS
 * ctrl                 : save png
 */
//
var img,
    colors= [];
function preload(){
  img = loadImage('pic3.png');
}
function setup() {
  //canvas should resemble an A4 paper
  createCanvas(1240, 1748);
  //colormode set function - HSB in this example
  colorMode(RGB);
}

function draw(){
  clear();
  img.loadPixels();
  tileWidth = 1;
  for(var gridY = 0; gridY < img.height;i++){
    for(var gridX = 0; gridX < img.width;gridX++){
      var px = gridX * tileWidth;
      var py = gridY * tileWidth;
      var i = (px+py*img.width)*4;
      var c = color(
        img.pixels[i],
        img.pixels[i+1],
        img.pixels[i+2],
        img.pixels[i+3]
      );
      colors.push(c);
    }
  }


  noLoop();
}
