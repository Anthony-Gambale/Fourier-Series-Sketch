
// initialize global variables
let a;
let b;
let zero;
let frames;
let deltaTime;

function setup () {

    // set global variables
    a = new Complex (1,2);
    b = new Complex (1,0);
    zero = new Complex (0,0);
    frames = 30;
    deltaTime = 1 / frames;

    createCanvas (800,600);
    stroke (255);
    frameRate (frames);

    testNumericIntegration ();

    testFourierTransform ();
}

function draw () {

    translate (width/2,height/2);
    background (0);
    
    [a,b] = testDrawing (deltaTime,a,b);
       
}
