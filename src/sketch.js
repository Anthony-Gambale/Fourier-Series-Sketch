
// initialize global variables
let a;
let b;

function setup () {

    // set global variables
    a = new Complex (1,1);
    b = new Complex (1,0);

    createCanvas (800, 600);
    stroke (255);
    frameRate (30);
}

function draw () {
    background (0);

    // multiply by this to rotate one degree
    let rot = new Complex (0.999847695, 0.017452406);

    let b = b.mult(rot);

    drawComplex(a,b);
}
