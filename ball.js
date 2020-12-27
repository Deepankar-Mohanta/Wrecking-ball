class ball{
    constructor(x, y, r){
        var option={
            density:0.7,
            frictionAir:0.005
        }

    this.body=Bodies.circle(x, y, r, option)
    this.radius=r;
    World.add(world, this.body)
    }
    display(){
        
        var pos=this.body.position;
        ellipseMode(RADIUS)
        ellipse(pos.x, pos.y, this.radius, this.radius);

    }
}