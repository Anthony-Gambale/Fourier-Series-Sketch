
// initialize global variables
let a;
let b;
let zero;
let rot1;
let rot2;

function setup () {

    // set global variables
    a = new Complex (1,1);
    b = new Complex (1,0);
    zero = new Complex (0,0);
    rot1 = new Complex (0.999847695, 0.017452406);
    rot2 = rot1.power(5);

    createCanvas (800, 600);
    stroke (255);
    frameRate (30);
}

function draw () {

    translate(width / 2, height / 2);

    background (0);

    a = a.mult(rot1);
    b = b.mult(rot2);

    drawComplex(zero,a);
    drawComplex(a,b);
    
}
