function setup() {
    canvas = createCanvas(500,380);
    video = createCapture(VIDEO);
    video.size(490,500);
    canvas.position(650,150);
    video.position(705,140);
}