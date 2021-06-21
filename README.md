# Fourier-Transform-Sketch
This program allows the user to draw any curve. It then breaks the curve into rotating vectors of different frequencies and lengths using numeric integration, and re-constructs the curve by animating the tip-to-tail sum of these vectors.

![image](https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/screenshot1.png)
![image](https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/screenshot2.png)

### Install and Run
Simply download all files in the repository, and open index.html in any browser. Then draw any closed curve you like. This program does not need to be run on a server to function properly.

# How it Works
As stated above, this is a process that generates an approximation of a complex-valued function by computing a sum of rotating vectors, of different frequencies, magnitudes and starting points.

To be precise, we define the user's drawing as a function, from the real numbers to the complex numbers. We call this function f.
![image](https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/definitionCurve.png)  
At some given time t, f(t) will be the point on the complex plane that was drawn at time t. When t reaches 2pi, the full curve has been drawn. 

## Rotating Vectors
First, we must define some machinery for what it means to have a 'rotating vector.' We define a function v of an integer parameter n as
![image](https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/definitionRotation.png)  
This gives us a complex valued function that draws n full circles as the time t moves through 0 to 2pi. Since this function has the same structure as the way we defined the function for the user's drawing, we now have the building blocks required to try re-create it.

![image](https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/rotatingVectors.png)

## Fourier Transform Integral

## Numeric Integral Approximation

## Sources
 - Grant Sanderson's video on fourier series with complex coefficients  
 https://youtu.be/r6sGWTCMz2k
 - GoldPlatedProof's video on the same topic  
 https://youtu.be/2hfoX51f6sg
