
// Anthony Gambale
// June 2021

// initialize global variables
let a;
let b;
let zero;
let frames;
let seconds;
let t;
let slow;
let trail;


function setup () {

    // set global variables
    a = new Complex (1,2);
    b = new Complex (1,0);
    zero = new Complex (0,0);

    frames = 60;
    seconds = 1 / frames;
    t = 0; 
    
    slow = 10; // constant to slow down time

    trail = []; // trail left by fourier pencil

    createCanvas (800,600);
    frameRate (frames);

    // tests
    runTests ();

    // random curves for testing the fourier transform drawing device
    // plus their fourier transforms
    curve1 = exampleCurve1 ();
    curve2 = exampleCurve2 ();
    [n1, curve1coeffs] = fourierTransform (curve1);
    [n2, curve2coeffs] = fourierTransform (curve2);
        
}


function draw () {

    background (0);
    stroke (255);
    translate (width/2,height/2);
    

    // general drawing test
    // [a,b] = testDrawing (seconds, a, b);

    t = Math.min (frames*slow, t+1);

    trail = drawFourier (curve2coeffs, n2, t, TAU / (frames*slow), trail);

}
