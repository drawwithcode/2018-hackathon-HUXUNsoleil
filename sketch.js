var circle = 200;
var rot;
var col;
var freq = 0.00001;
var cont = 0;
var r;
var z;
var mySong;

function preload() {
  mySong = loadSound("./assets/初见-1.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  a = 0;

  analyser = new p5.Amplitude();
  analyser.setInput(mySong);
  mySong.play();
}

function draw() {

  var x = map(mouseX, 0, width, 1, 1.5)
  translate(width / 2, height / 2);

  var volume = analyser.getLevel();
  z = map(volume, 0, 9, 100, 600);

  background(166);
  fill(255, 0, 74, 90);

  var angle = map(mouseY, 0, 10, 0, PI);
  var cos_a = cos(angle);
  var sin_a = sin(angle);
  applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);


  ellipseMode(RADIUS);
  for (var i = 0; i < z; i++) {
    circle = z /2 + 50 * cos(millis() * freq * i);
    col = map(circle, 150, 186, 156, 100);
    r = map(circle, 150, 250, 1, 3.5);
    fill(col, 20, 155);

    ellipse(circle * cos(i), circle * sin(i), r * x, r * x);
  //line(circle * cos(i), circle * sin(i), circle * cos(i - 3), circle * sin(i - 3));
    rot = rot + 0.000005;
    translate(a / 100, a / 100);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//start the audio file on click
function mousePressed() {
  if (mySong.isPlaying()) {
    // .isPlaying() returns a boolean
    mySong.stop();
    background(255, 0, 0);
  } else {
    mySong.play();
    background(0, 255, 0);
  }
}
