
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

    mult (c) {
        const re = this.re * c.re - this.im * c.im; // since i squared = -1
        const im = this.re * c.im + this.im * c.re;
        return new Complex(re, im);
    }

    conjugate () {
        return new Complex (this.re, -this.im);
    }

    magnitude () {
        return sqrt(this.mult(this.conjugate()));
    }

    vectorize () {
        return (this.re, this.im); // Turn a complex number into a coordinate pair
    }
}


// z : Complex
// s : Complex
// Draw z on the argand diagram, starting at the point s
function drawComplex (z, s) {

    translate(width / 2, height / 2);

    var r = z.magnitude();
    var sx = s.re;
    var sy = s.im;
    var zx = (s.add(z)).re;
    var zy = (s.add(z)).im;

    stroke (255);
    strokeWeight (2);
    
    line(sx, sy, zx, zy);
    circle(zx, zy, r*2);

}
