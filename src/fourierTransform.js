
/*

 [ ] Allow the user to draw a curve to be processed
 [x] Numeric integration
 [x] Iterate numeric integration to generate array of magnitudes for frequency
 [ ] Redraw original function from frequencies

*/


function fourierTransform (img) {

    // a list of complex numbered coefficients for all the different
    // frequencies in the range of the image
    fourier_coefficients = []

    // need to know how many frequencies there will be
    n = 10;

    // find all the frequencies, from the negative end to the positive
    // end, plus constant term (n=0) coefficient, and push them to
    // the fourier_coefficients list
    for (j = -n; j <= n; j++) {

        c_j = numericIntegral (img, j);

        fourier_coefficients.push (c_j.round());

    }

    return fourier_coefficients;

}
