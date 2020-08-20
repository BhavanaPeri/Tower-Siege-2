class Hexagon{
    constructor(x,y,r){
        var options={
            isStatic:false,
            friction:0.6,
            density:1.2,
            restitution:0.8,
        }
        this.x=x;
        this.r=r;
        this.y=y;
        this.body=Bodies.circle(this.x,this.y,40,options)
        this.image= loadImage("Hexagon.png");
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 40,50);
        pop();
    }
    }