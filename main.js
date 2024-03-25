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
    }
}