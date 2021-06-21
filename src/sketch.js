
// Anthony Gambale
// June 2021

// initialize global variables
// let a;
// let b;
// let zero;
let curve;
let complexCurve;
let fourierCoefficients;
let n;
let frames;
let seconds;
let t;
let slow;
let trail;
let inputMode;


function setup () {

    // set global variables
    inputMode = true;

    // for testing
    // a = new Complex (1,2);
    // b = new Complex (1,0);
    // zero = new Complex (0,0);

    // fill with points when drawn
    curve = [];
    // convert curve to complex form when finished being drawn
    complexCurve = new ImageData ([]);
    // initialize the fourier coeffs
    fourierCoefficients = [];
    // initialize the number of points
    n = 0;


    frames = 60;
    seconds = 1 / frames;
    t = 0; 
    
    slow = 20; // constant to slow down time

    trail = []; // trail left by fourier pencil

    createCanvas (1600,800);
    frameRate (frames);

    // tests
    // runTests ();

    // random curves for testing the fourier transform drawing device
    // plus their fourier transforms
    // curve1 = exampleCurve1 ();
    // curve2 = exampleCurve2 ();
    // [n1, curve1coeffs] = fourierTransform (curve1);
    // [n2, curve2coeffs] = fourierTransform (curve2);
}


function draw () {

    translate (width/2,height/2);
    

    // general drawing test
    // [a,b] = testDrawing (seconds, a, b);

    t++;

    if (!inputMode)
    {
        if (t <= frames*slow*2) {
            refresh ();

            trail = drawFourier (fourierCoefficients, n, t, TAU / (frames*slow), trail);
        }
    }
    else
    {
        refresh ();
        if (mouseIsPressed) {
            var newx = mouseX - width/2;
            var newy = mouseY - height/2;
            curve.push ([newx, newy]);
            complexCurve.append(new Complex (newx/50, newy/50));

            drawCurve (curve);
        }
    }
    
}


function mouseReleased () {

    // change the mode of the program
    inputMode = false;

    // do some computation
    [n, fourierCoefficients] = fourierTransform (complexCurve);

}


function axes () {

    strokeWeight (1);
    stroke (100);

    ww = width / 2;
    wh = height / 2;

    line (0, -wh, 0, wh);
    line (-ww, 0, ww, 0);

}


function refresh () {
    background (0);
    axes ();
}