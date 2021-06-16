
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
        return new Complex (this.re, -1 * this.im);
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

    let (sx,sy) = s.vectorize();
    let (zx,zy) = (z.add(c)).vectorize();

    line(sx, sy, zx, zy);

}
