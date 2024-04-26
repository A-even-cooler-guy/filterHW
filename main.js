function preload(){

}

function setup(){   
    canvas=createCanvas(600,400);
    canvas.position(250,250);
    video=createCapture(VIDEO);
  video.size(600,600);
  canvas.center();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose" , gotPoses);
}
function modelLoaded(){
    console.log("posent loaded")
}

function draw(){
    
}

function gotPoses(result){
noseX=result[0].pose.nose.x;
noseY=result[0].pose.nose.y;
console.log(noseX);
console.log(noseY);
}
