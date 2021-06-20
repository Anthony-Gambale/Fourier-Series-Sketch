

// run all tests that don't need the draw() step
function runTests () {

    testNumericIntegration ();
    testRounding ();
    testFourierTransform ();
    testFourierTransform2 ();

}


// test of numeric integration: make sure it returns constants as
// appropriate, and 0 as appropriate.
function testNumericIntegration () {

    // f is (2 + 3i) * v(2), as defined in the readme.

    f = new ImageData ([]);
    c = new Complex (2, 3);
    n = 100;
    dt = TAU / n;

    for (i = 0; i < n; i++) {
        t = i * dt;
        f.append (c.mult(v (2,t)));
    }

    i1 = numericIntegral (f,2); // this should give back c
    i2 = numericIntegral (f,1); // this should give 0

    console.log(i1, i2);

}


// test the fourier transform
function testFourierTransform () {

    // generate a curve. make it a simple curve with only one frequency in it.
    f = exampleCurve1 ();

    // compute and print its fourier transform. should be all zeroes except for the
    // 2 hz frequency, which should give back the constant c.
    coefficients = fourierTransform (f);

    console.log (coefficients);

}


// test the fourier transform on a more difficult curve
function testFourierTransform2 () {

    // generate a curve. make it a simple curve with only one frequency in it.
    f = exampleCurve2 ();

    // compute and print its fourier transform. should be all zeroes except for the
    // 2 hz frequency, which should give back the constant c.
    coefficients = fourierTransform (f);
    console.log (coefficients);

}


// test the rounding function on complex numbers
// for making the gross 3.2822652342972840e-16 things just be 0
function testRounding () {

    var tinyNumber = 2385206 / 1000000000000000000000000000;
    var tinyComplex = new Complex (tinyNumber, tinyNumber*2)
    console.log (tinyComplex);
    console.log (tinyComplex.round());

}


// test drawing of complex numbers, plus rotation
function testDrawing (deltaTime, a, b) {

    a = a.rotate (PI, deltaTime);
    b = b.rotate (PI*2, deltaTime);

    drawComplex (zero,a)
    drawComplex (a,b);

    return [a,b];

}


// test of drawFourier: the function which draws a fourier transform after its coefficients
// are computed.
function testDrawFourier (coefficients, n, t, dt) {

    drawFourier (coefficients, n, t, dt);

}


// simple example curve with one frequency
function exampleCurve1 () {

    f = new ImageData ([]);
    c = new Complex (2, 3);
    n = 100;
    dt = TAU / n;

    for (i = 0; i < n; i++) {
        t = i * dt;
        f.append (c.mult(v (2,t)));
    }

    return f
}


// more complicated example curve, with two frequencies
function exampleCurve2 () {

    new ImageData ([]);
    c = new Complex (2, 3);
    n = 100;
    dt = TAU / n;

    for (i = 0; i < n; i++) {
        t = i * dt;
        part1 = c.mult(v (2,t));
        part2 = v(3,t);
        f.append (part1.add(part2));
    }
    
}
