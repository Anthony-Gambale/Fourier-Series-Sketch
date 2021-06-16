
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
        return (this.re, this.im); // Turn a complex number into a coordinate pair
    }

    power (n) {
        if (n==0) {
            return new Complex (1, 0); // The number 1
        }
        else {
            return this.mult(this.power (n-1))
        }
        
    }
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

    stroke (255);
    strokeWeight (1);
    
    // scale everything up, so a magnitude of 1 is 50 pixels on screen
    line(50*sx, 50*sy, 50*zx, 50*zy);
    noFill();
    circle(50*sx, 50*sy, 50*2*r);

}
