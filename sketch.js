let cellmat = [];
let generation = 0;
let cellsize = 35;
let sbutton;
let active = false
let stepbutton;
let backbutton;
let gendisplay;
let img;
function preload() {
  img = loadImage('gregL7.jpg');
}

/* here we can see that drawing the cells with only width size does perserve the squareness but it does not fit all the cells on the screen
 if the screen is not not square all the cells wont fit
 you also must change the display of the cells in the cell class to  rect(this.x, this.y, width / cellsize, width /cellsize);
*/


function setup() {

  let scrnszX = windowWidth
  let scrnszY = windowHeight
  if (scrnszX <= scrnszY) {
    createCanvas(scrnszX-50, scrnszX-50);
    //console.log("Xsize"); set the width as square
  } else {
    createCanvas(scrnszY-50, scrnszY-50);
    //console.log("YSize"); set the as square

  }

  frameRate(25);
  sbutton = createButton("generate");
  stepbutton = createButton("step forward");
  backbutton = createButton("step back");
  sbutton.mousePressed(toggleGenerate);
  sbutton.position(windowWidth / 2, windowHeight-25); // this  window width and 
  stepbutton.mousePressed(stepgen);
  backbutton.mousePressed(backgen);
  stepbutton.position(windowWidth - windowWidth / 4, windowHeight-25);
  backbutton.position(windowWidth/4, windowHeight-25);
  gendisplay =createElement('h2', str(generation));
  gendisplay.position(windowWidth/5, windowHeight-50);
  
  background(70);
  for (let i = 0; i < cellsize; i++) {
    cellmat[i] = []; // need to init the nested array unlike python
    for (let j = 0; j < cellsize; j++) {

      let state = int(random(0, 2));

      cellmat[i][j] = new Cell(i * width / cellsize, j * width / cellsize, state);
      // console.log(i, j, state);
    }
  }



}



function draw() {
  // display console.log(generation, cellmat[30][30].statelist)
  for (let i = 0; i < cellsize; i++) {
    for (let j = 0; j < cellsize; j++) {
    
      if (cellmat[i][j].statelist[generation-1] !=cellmat[i][j].state){
      cellmat[i][j].display(); // only display if the state has changed
      // display generation
     // fill(0, 0, 255);
     // stroke(0, 255, 0);
      //textSize(50);
     // text(generation, 50, 50);
        gendisplay.html(str(generation));
    }
    }    
  }
  // if active is true generate new and increace generation
  if (active) {
    generate();
    generation++
  }

}

function toggleGenerate() {
  if (!active) {
    active = true;
    sbutton.html("pause");
  } else {
    active = false;
    sbutton.html("generate");

  }
}

function stepgen() {

  generate();
  generation++
}


function backgen() {
  if (generation >0){
  generation--
  // subtract a generation
  for (let i = 1; i < cellsize - 1; i++) {
    for (let j = 1; j < cellsize - 1; j++) {

      cellmat[i][j].statelist.pop();
      cellmat[i][j].state = cellmat[i][j].statelist[generation];
      cellmat[i][j].newstate = cellmat[i][j].state;
      cellmat[i][j].display();
      // pop the last one off this list list gets shorter by one
      // set the now state to the previous state
      // set the newstate to to the now state
      // then directly display* do not generate just display
    }
  }
  }
}

function generate() {
  // get the neighbors for each cell and call the rules from the cell function
  // increace  generation  in step and draw functions not here

  for (let i = 1; i < cellsize - 1; i++) {
    for (let j = 1; j < cellsize - 1; j++) {

      let neighbors = cellmat[i - 1][j - 1].state + cellmat[i][j - 1].state + cellmat[i + 1][j - 1].state + cellmat[i - 1][j].state + cellmat[i + 1][j].state + cellmat[i - 1][j + 1].state + cellmat[i][j + 1].state + cellmat[i + 1][j + 1].state;

      cellmat[i][j].generate(neighbors);
      // generate all the neighbors then swap state


    }

  }
  for (let i = 1; i < cellsize - 1; i++) {
    for (let j = 1; j < cellsize - 1; j++) {

      cellmat[i][j].swapstate();
    }
  }



}