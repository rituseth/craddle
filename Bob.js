 class Bob {
        constructor(x,y,r){
            var options = {
                isStatic :false,
                restitution :1,
                density:7.8,
                friction:0
                
            }
           
             this.x=x;
             this.y=y;
            this.r=r;
            this.body=Bodies.circle(x,y, 25, options) 
            World.add(world,this.body);


            console.log(this.body)
        }
        display(){
           
           push ()
           var pos = this.body.position 
            fill ("brown")
           ellipseMode(RADIUS)
            ellipse(pos.x,pos.y, 25,25)
            
    pop ()
        }
    }