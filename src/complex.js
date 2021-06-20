


// Complex number class
class Complex {

    constructor (a,b) {
        this.re = a;
        this.im = b;
    }

    add (c) {
        const re = this.re + c.re;
        const im = this.im + c.im;
        return new Complex(re, im);
    }

    scale (k) {
        return new Complex(k*this.re, k*this.im);
    }

    mult (c) {
        const re = this.re * c.re - this.im * c.im; // since i squared = -1
        const im = this.re * c.im + this.im * c.re;
        return new Complex(re, im);
    }

    conjugate () {
        return new Complex (this.re, -1 * this.im);
    }

    magnitude () {
        return sqrt(this.mult(this.conjugate()).re);
    }

    vectorize () {
        return [this.re*50, this.im*50]; // Turn a complex number into a coordinate pair
    }

    power (n) {
        if (n==0) {
            return new Complex (1, 0); // The number 1
        }
        else {
            return this.mult(this.power (n-1));
        }
        
    }

    // a : angle in radians
    // dt : change in time, in terms of seconds
    // rotate the complex number by an amount such that after one second, it
    // will have rotated through the given angle.
    rotate (a, dt) {
        return this.mult(e_to_the_i(a*dt));
    }

    // round the real and imaginary components
    round () {
        var real = Math.round(1000 * this.re) / 1000;
        var imag = Math.round(1000 * this.im) / 1000;
        if (real == -0) {real = 0;}
        if (imag == -0) {imag = 0;}
        return new Complex (real, imag);
    }
}



// a : Double
// Take an angle a, in radians, and make a unit length complex number such that
// multiplying by this number has the effect of rotating a radians
function e_to_the_i (a) {
    return new Complex (cos(a), sin(a))
}



// z : Complex
// s : Complex
// Draw z on the argand diagram, starting at the point s
function drawComplex (s, z) {

    var r = z.magnitude();
    var sx = s.re;
    var sy = s.im;
    var zx = (s.add(z)).re;
    var zy = (s.add(z)).im;

    // scale everything up, so a magnitude of 1 is 50 pixels on screen
    stroke (255);
    strokeWeight (2);
    line(50*sx, 50*sy, 50*zx, 50*zy);
    noFill();
    strokeWeight (1);
    stroke (50);
    circle(50*sx, 50*sy, 50*2*r);

}


// take a list of x,y points called points, and connect the dots in the order given.
function drawCurve (points) {

    stroke (color (50,120,255));
    strokeWeight (3);

    for (i = 0; i < points.length - 1; i++) {
        [x1,y1] = points[i];
        [x2,y2] = points[i+1];
        line (x1,y1,x2,y2);
    }

    // connect the final two points
    // [x0,y0] = points[0];
    // [xl,yl] = points[points.length - 1];
    // line (xl,yl,x0,y0);
}
