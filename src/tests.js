

// test drawing of complex numbers, plus rotation
function testDrawing (deltaTime, a, b) {

    a = a.rotate (PI, deltaTime);
    b = b.rotate (PI*2, deltaTime);

    drawComplex (zero,a)
    drawComplex (a,b);

    return [a,b];

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
    f = new ImageData ([]);
    c = new Complex (2, 3);
    n = 100;
    dt = TAU / n;

    for (i = 0; i < n; i++) {
        t = i * dt;
        f.append (c.mult(v (2,t)));
    }

    // compute and print its fourier transform. should be all zeroes except for the
    // 2 hz frequency, which should give back the constant c.
    coefficients = fourierTransform (f);

}
