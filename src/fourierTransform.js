
/*

 [ ] Allow the user to draw a curve which can be made into an imagData object
 [x] Numeric integration
 [x] Iterate numeric integration to generate array of magnitudes for frequency
 [ ] Redraw original function from frequencies

*/


// From some image data, through numeric integration, compute the complex coefficients
// for all possible frequencies of rotating vectors.
function fourierTransform (img) {

    // a list of complex numbered coefficients for all the different
    // frequencies in the range of the image
    fourier_coefficients = []

    // need to know how many frequencies there will be
    n = 50;

    // find all the frequencies, from the negative end to the positive
    // end, plus constant term (n=0) coefficient, and push them to
    // the fourier_coefficients list
    for (j = -n; j <= n; j++) {

        c_j = numericIntegral (img, j);

        fourier_coefficients.push (c_j.round());

    }

    return fourier_coefficients;

}


// coefficients : the coefficients of the fourier transform, as outputted by fourierTransform
// n : the number of fourier coefficients on either side of the 0 coeff, as used by fourierTransform
// t : the number of time steps passed
// dt : the amount of time in each time step 
function drawFourier (coefficients, n, t, dt) {

    // t is number of frames passed
    // dt is amount of 'time' (distance from 0 to 2pi) to pass in 1 timestep
    // note when currentTime reaches 2pi we are done
    currentTime = t * dt;
    
    // keep track of the tip of all the current stacked vectors
    // whenever stacking a new vector on top of the prior ones, push currentTip
    // up to the top of the stack again
    currentTip = new Complex (0,0);

    for (j = -n; j <= n; j++) {

        var jth_term = v(j, currentTime).mult(coefficients[j]);

        drawComplex (currentTip, jth_term);

        currentTip = currentTip.add(jth_term);

    }


}
