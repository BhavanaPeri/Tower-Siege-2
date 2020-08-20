class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image = loadImage("chandelier.png")
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
       
    }
    imageMode(CENTER);
    image(this.image,600,50,100,100);
    image(this.image,200,50,100,100);
}
    fly(){
        this.sling.bodyA=null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    }