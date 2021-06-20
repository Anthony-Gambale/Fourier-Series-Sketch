
// initialize global variables
let a;
let b;
let zero;
let frames;
let seconds;
let t;
let slow;


function setup () {

    // set global variables
    a = new Complex (1,2);
    b = new Complex (1,0);
    zero = new Complex (0,0);

    frames = 30;
    seconds = 1 / frames;
    t = 0; 
    
    slow = 10; // constant to slow down time

    createCanvas (800,600);
    stroke (255);
    frameRate (frames);

    // tests
    runTests ();

    // random curves for testing the fourier transform drawing device
    // plus their fourier transforms
    curve1 = exampleCurve1 ();
    curve2 = exampleCurve2 ();
    curve1coeffs = fourierTransform (curve1);
    curve2coeffs = fourierTransform (curve2);
        
}


function draw () {

    translate (width/2,height/2);
    background (0);

    // general drawing test
    // [a,b] = testDrawing (seconds, a, b);

    t = Math.min (frames*slow, t+1);

    drawFourier (curve2coeffs, 50, t, TAU / (frames*slow));

}
