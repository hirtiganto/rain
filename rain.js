function Rain() {
  this.location = createVector(random(0,width),random(0,height));
  this.velocity = createVector(0,0);
  this.acceleration = createVector(0,0);
  this.gravity = createVector(0,random(0.5,10));

  this.apply_force = function(force){
    this.acceleration.add(force)
  }

  this.apply_gravity = function(){
    this.apply_force(this.gravity);
  }

  this.render = function() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.velocity.limit(10);
    this.acceleration.mult(0);

    stroke(255)
    strokeWeight(map(this.gravity.y,0.5,10,3,7));

    var xl = this.location.y + map(this.gravity.y,0.5,10,10,25);
    line(this.location.x,this.location.y,this.location.x,xl);

    if (this.location.y > width){
      this.location.y = 0;
      this.location.x = random(0,width);
    }
  }
}
