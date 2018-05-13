x = 100;
y = 50;
offset = 3.8;

function setup() {
  createCanvas(600, 100);

  piSlider = createSlider(0, 48, 2);
  piSlider.style('width', '200px')
  piSlider.position(x, y);

}

function draw() {
  background('grey');
  textSize(21);
  fill(255);
  var d = piSlider.value();
  text(Math.PI.toFixed(d), 10, 10, windowWidth, windowHeight);
  fill(0);
  text("decimal places", piSlider.width + 30 + x, y + 15);
  text(d, x + 12 + (d*offset) , piSlider.height + y + 20);
}