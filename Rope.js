class Rope{
  constructor(body1, body2 , offsetX , offsetY){
    this.offsetY =offsetY
    this.offsetX =offsetX
      var options = {
          bodyA: body1,
        bodyB : body2,
        pointB :{x: this.offsetX , y: this.offsetY}

      }
      this.rope = Constraint.create(options);
   
      World.add(world, this.rope);

  }
  
  display(){
     
      var point1= this.rope.bodyA.position;
      var point2 = this.rope.bodyB.position

      var rpe1x = point1.x
      var rpe1y = point1.y
      var rpe2x = point2.x + this.offsetX
      var rpe2y = point2.y + this.offsetY
      
      strokeWeight(4);
      
      line(rpe1x, rpe1y, rpe2x, rpe2y);
      }
      }
  
