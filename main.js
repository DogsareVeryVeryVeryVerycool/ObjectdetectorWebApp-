img = "";
status = "";
function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";
}

function modelLoaded() {
    console.log("model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);

}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }


    else {
        console.log(results);
        objects = results;
    }
}





    function draw() {
        image(img, 0, 0, 640, 420);
        fill("#FFF00000");
        text("dog", 45, 75);
        noFill();
        stroke("#0000FF");
        rect(30, 60, 450, 350);

        fill("#FFF00000");
        text("cat", 270, 140);
        noFill();
        stroke("#0000FF");
        rect(270, 100, 320, 300);
    }


