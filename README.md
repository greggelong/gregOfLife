# gregOfLife


This is a bit of fun with Conway's game of life

Live cells are my face.

https://greggelong.github.io/gregOfLife/

It was featured as a community contribution on The Coding Train!!

https://youtu.be/AGR3sfOq2qc?t=2220

It uses the same cell object that I created and the cells 

keep track of their history.  That means you can rewind according to the

cells history.

If you were just using the algorithm you can not rewind in the game of life

In The Recursive Universe (1985), Chapter 2, in the section Naturalists and Engineers, William Poundstone writes:

>Conway's life is forward-deterministic.  A given pattern leads to one and only one, sequel pattern.  Life is not backward-deterministic. a pattern usually has many patterns that may have preceded it. In short a configuration has only one future but (usually) many possible pasts.

He goes on to say

>This fact is responsible for one of the occasional frustrations of playing Life. Sometimes you will see something interesting happen, stop the program and be unable to backtrack and repeat it.  There is no simple way you can program a computer to go backward from a Life State-- there are too many possibilities.

Of course there is a very easy way, now, using cells as objects and 

having an array to keep track of their histories at a given time step. 

Then you are rewinding by looking up a recorded past state. You are not computing a prior state using the algorithm.



-----


this is code originally written on the P5 web editor in the 

summer of 2019.  

https://editor.p5js.org/greggelong/sketches/VGD6wwYTv
