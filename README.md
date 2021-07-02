# Fourier-Transform-Sketch
This program takes any curve as input, and approximates it using rotating vectors of different frequencies and lengths using the complex-valued fourier transform. It then re-constructs the curve by animating the tip-to-tail sum of these vectors.

![fourier](https://user-images.githubusercontent.com/44384508/124254812-cbf95c80-db6c-11eb-89f1-a733aac97d7a.gif)
![image](https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/images/screenshot1.png)
![image](https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/images/screenshot2.png)

### Install and Run
Simply download all files in the repository, and open index.html in any browser. Then draw any closed curve you like. This program does not need to be run on a server to function properly.

# How it Works
This program takes any curve drawn by the user, and breaks it up into a sum of simple rotating vectors.

To be precise, we define the user's drawing as a function, from the real numbers to the complex numbers. We call this function f.  
![image](https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/images/definitionCurve.png)  
At some given time t, f(t) will be the point on the complex plane that was drawn at time t. When t passes through the full interval, the whole curve has been drawn. The choice of 0 to 2pi makes the coming math work out much cleaner.

## Rotating Vectors
First, we must define some machinery for what it means to have a 'rotating vector.' We will create a function with the same structur as f to represent a circle being drawn as time passes through the interval from 0 to 2pi.  
We define a function v of an integer parameter n as  
![image](https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/images/definitionRotation.png)  
This is a complex valued function that will draw a full circle n times, as the time t moves from 0 through to 2pi. Since this function has the same structure as the way we defined f, we can use multiple different v functions to reconstruct it.

![image](https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/images/rotatingVectors1.png)  
![image](https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/images/rotatingVectors2.png)  

## Fourier Transform Integral

## Numeric Integral Approximation

## Sources
 - Grant Sanderson's video on fourier series with complex coefficients  
 https://youtu.be/r6sGWTCMz2k
 - GoldPlatedProof's video on the same topic  
 https://youtu.be/2hfoX51f6sg
