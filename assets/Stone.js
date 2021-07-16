class CannonBall {
    constructor(x, y) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.r = 40;
  
      this.body = Bodies.circle(x, y, this.r, options);
      World.add(world, this.body);
    }
  
    
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      rect(pos.x, pos.y, this.w, this.h);
      image(this.image, 0, 0, this.r, this.r);
      pop();
  
      }
    }
  
  