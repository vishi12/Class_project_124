noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(510, 150);
    video = createCapture(VIDEO);
    video.size(400, 300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized!");
}

function draw(){
    background("#969A97");

    document.getElementById("square_side").innerHTML = 'Width and Height of the square is : ' + difference + 'px';
    fill("#F90093");
    stroke("#F90093");
    square(noseX, noseY, difference);
}

function gotPoses(results){
    if (results.length > 0) {
    
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);


    }
    
}