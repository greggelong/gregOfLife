class Cell {
  constructor(x, y, state) {
    this.x = x;
    this.y = y;
    this.state= state;
    this.newstate = state;
    this.statelist = [];
    this.statelist[generation]= state;
    // the new state equals the current state at the start then holds the state of the cell at the next generation
    

  }
  display() {
    if (this.state == 1) {
      strokeWeight(1);
      //stroke(0,255,0);
       
      fill(0);
      image(img,this.x, this.y, width / cellsize, width/ cellsize);
    } else {
      strokeWeight(1);
      stroke(0);
      fill(255);
      rect(this.x, this.y, width / cellsize, width /cellsize);
    }
  }
  
  
  generate(neighbors){
    if (this.state == 1 && neighbors <2){
    this.newstate = 0; // die
    } 
    if (this.state == 1 && neighbors >3) {
      this.newstate = 0; //die
    }
    
    if (this.state == 0 && neighbors ==3){
      this.newstate = 1; // live from reproduction
    }
    
    
    
  }
  
  swapstate(){
    this.state = this.newstate;
    this.statelist[generation+1] = this.newstate
    
  }   
}
