img ="";
function preload(){
    img = loadImage('Fresh-Fruits-Basket-PNG.png');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw() {
    image(img, 0, 0, 640, 420);
}