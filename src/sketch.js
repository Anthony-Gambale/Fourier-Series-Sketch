

function setup () {

    createCanvas (800, 600);
    stroke (255);
    frameRate (30);
    

}

function draw () {
    background (0);

    // debug
    let a = new Complex (100,100);
    let b = new Complex (100,0);
    let zero = new Complex (0,0);

    drawComplex(0,b);
    drawComplex(0,a);
    drawComplex(a,b);
    drawComplex(b,a);

}
