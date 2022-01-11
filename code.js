moustacheX = 0;
moustacheY = 0;

function preload()
{
    moustache = loadImage('https://i.postimg.cc/NMYtR2yx/moustache.png');
}

function setup()
{
    
    canvas = createCanvas(450, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function snap()
{
    save('Filteredmoustache.png');
}

function draw()
{
    image(video, 0, 0, 450, 400);
    image(moustache, moustacheX, moustacheY, 60, 36);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        moustacheX = results[0].pose.nose.x - 25;
        moustacheY = results[0].pose.nose.y + 8;
        console.log("moustache x = " + moustacheX);
        console.log("moustache y = " + moustacheY);
    }
}