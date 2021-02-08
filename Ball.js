class Ball{
    constructor(x,y,radius){
var options={
   
    density: 1.0,
    frictionAir: 0.005
}
this.radius=radius                                            

this.body=Bodies.circle(x,y,radius,options);
World.add(world,this.body)
    }
    display(){
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        stroke("blue");
        fill("yellow");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}