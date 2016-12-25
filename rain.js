function Rain() {
  this.location = createVector(random(0,width),random(0,height));
  this.gravity = createVector(0,random(5,15));

  this.render = function() {
    stroke(255)
    strokeWeight(map(this.gravity.y,5,15,3,7));
    
    var l = map(this.gravity.y,5,15,10,25);
    line(this.location.x,this.location.y,this.location.x,this.location.y + l);
  }
}
