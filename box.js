class Box {
  constructor(x, y,r) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0,
        'isStatic': true
    }
    this.body = Matter.Bodies.circle(x, y, r, options);
    this.r = r 
    
    // World.add(world, this.body);
  }

  display(){
     const pos =helicopterSprite.position;
     const angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    circle(0,0, this.r);
    pop();
  }
};