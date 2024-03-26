noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw()
{
    background("#cefad0");
    document.getElementById("text_size").innerHTML="Size of the text will be "+difference+"px";
    textSize(difference);
    fill("#fc8eac");
    text("Arnav",noseX,noseY);
}
function modelLoaded()
{
    console.log("posenet is initialized");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+", noseY="+noseY);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftwristx="+leftwristX+", rightwristx="+rightwristX+", difference="+difference);
    }
}