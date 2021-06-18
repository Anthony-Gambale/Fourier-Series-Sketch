

// the "data" array is an array of complex numbers.
class Image {

    constructor (array) {
        this.data = array;
    }

    append (point) {
        this.data.push (point);
    }

}


// n : integer
// t : double
// the 'v' function as detailed on the readme.
function v(n, t) {
    return e_to_the_i (n * t);
}


// img : Image
// Take an image as a list of points [..., (x, f(x)), ...] and compute
// its fourier coefficient integral.
function Integral (img, n) {

    // Numeric integral variables
    let f = img.data;
    var L = f.length;
    var dt = 2*PI / L;

    // Take the integral
    var sum = 0;

    for (var t = 0; t < L; t++) {
        var v_minus_n = v(-n, t * dt);
        var nextTerm = f[t].mult(v_minus_n).scale(dt);
        sum += nextTerm;
    }

    return sum / (2*PI);

}
