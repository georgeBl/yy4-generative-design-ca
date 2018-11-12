/**
 * typo outline displayed as dots
 *
 * KEYS
 * a-z                  : text input (keyboard)
 * backspace            : delete last typed letter
 * ctrl                 : save png
 */

var textTyped = "motyf2018";

var font;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

  opentype.load('data/FreeSans.otf', function(err, f) {
    if (err) {
      console.log(err);
    } else {
      font = f;
      loop();
    }
  });
}

function draw() {
  if (!font) return;

  background(255);
  // margin border
  translate(20, 540);

  if (textTyped.length > 0) {
    // get a path from OpenType.js
    lineDensity = map(mouseX,0,width,2,60);
    
      var fontPath = font.getPaths(textTyped, 0, 0, 200);
    // convert it to a g.Path object
      for(var x = 0; x < fontPath.length; x++){
        var path = new g.Path(fontPath[x].commands);
       //console.log(path)
        path = g.resampleByLength(path, lineDensity);
       
       
        var diameter = 3;
        
        for (var i = 0; i < path.commands.length; i++) {
          var pnt = path.commands[i];
             fill(0);
            noStroke();
          ellipse(pnt.x, pnt.y, diameter, diameter);
        }

        fill(0);
        stroke(3);
        
        
        for (var ii = 0; ii < path.commands.length; ii++) {
            var numOfPoints = path.commands.length;
            var pnt1 = path.commands[ii];
            var pnt2 = path.commands[(i+3) % numOfPoints];
           
            line(pnt1.x, pnt1.y, pnt2.x, pnt2.y);
        }

       
      }
  }
    //noLoop();

}

function keyReleased() {
  // export png
  if (keyCode == CONTROL) saveCanvas(gd.timestamp(), 'png');
}

function keyPressed() {
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    if (textTyped.length > 0) {
      textTyped = textTyped.substring(0, textTyped.length - 1);
    }
  }
}

function keyTyped() {
  if (keyCode >= 32) {
    textTyped += key;
  }
}
