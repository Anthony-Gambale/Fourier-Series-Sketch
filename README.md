# Fourier-Series-Sketch
This program takes any curve as input, and approximates it using rotating vectors of different frequencies and lengths using the complex-valued fourier transform. It then re-constructs the curve by animating the tip-to-tail sum of these vectors.

Try it here: https://anthony-gambale.github.io/Fourier-Series-Sketch/

<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/images/screenshot1.png" width="45%" alt="Screenshot 1">
  <img src="https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/images/screenshot2.png" width="45%" alt="Screenshot 2">
</div>

We model the image drawn by the user using a series of samples of mouse positions, which can be thought of as a complex function `f` as follows.

<p align="center">
  <img src="https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/images/fig1.png" width="100%" alt="Figure 1">
</p>

Similarly, each rotating component of the "arm" can be represented using the following complex function `v`.

<p align="center">
  <img src="https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/images/fig2.png" width="100%" alt="Figure 1">
</p>

We can adjust the "speed" of the rotation by multiplying the input `t`.

<p align="center">
  <img src="https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/images/fig3.png" width="100%" alt="Figure 1">
</p>

At time 0, the value of the `v` function is 1. So if we add a complex coefficient `a`, it can be thought of as the "starting point" for the rotating component.

<p align="center">
  <img src="https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/images/fig4a.png" width="100%" alt="Figure 1">
</p>

If we want to represent our function `f` with a collection of these rotating components, we need to find all of the "starting point" coefficients `a_n` for each rotation speed `v_n`.

<p align="center">
  <img src="https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/images/fig4b.png" width="100%" alt="Figure 1">
</p>

Firstly, notice that the integral of any term is zero, because for any point on the circle, its negative is also on the circle, so they will all cancel out.

<p align="center">
  <img src="https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/images/fig5.png" width="100%" alt="Figure 1">
</p>

However, in the case of `v_0` (the component with 0 rotation speed) the integral will return the coefficient `a`.

<p align="center">
  <img src="https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/images/fig6.png" width="70%" alt="Figure 1">
</p>

Putting these together, we can see that integrating the entire thing should yield the coefficient `a_0`.

<p align="center">
  <img src="https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/images/fig7a.png" width="100%" alt="Figure 1">
</p>

Furthermore, notice that when two `v` terms are multiplied, the subscripts add. This is basically just an alternative notation for power laws.

<p align="center">
  <img src="https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/images/fig7b.png" width="70%" alt="Figure 1">
</p>

Therefore, if we want to find `a_n`, we can multiply the entire expression by `v_-n`, since that will zero the subscript of the `v` function in the term with `a_n`.

<p align="center">
  <img src="https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/images/fig8.png" width="100%" alt="Figure 1">
</p>

Therefore, we can find each coefficient by numerically integrating our dataset of `f`. This integral is also known as the Fourier Transform.

<p align="center">
  <img src="https://github.com/Anthony-Gambale/Fourier-Transform-Sketch/blob/main/images/fig9.png" width="60%" alt="Figure 1">
</p>
