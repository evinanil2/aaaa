img ="";
function preload(){
    img = loadImage('Lovepik_com-401095944-bedroom-bed');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw() {
    image(img, 0, 0, 640, 420);
}