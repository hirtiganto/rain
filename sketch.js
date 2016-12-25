var rain = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  for (var i = 0; i < 200; i++) {
    rain[i] = new Rain();
  }
}

function draw() {
  background(0);
  for (var i = 0; i < rain.length; i++) {
    rain[i].render();
  }
}
