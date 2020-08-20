class Box{
    constructor(x,y,width,height){
        var options = {
        isStatic:false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
        }
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        this.image=loadImage("cupp.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world,this.body);
    }
    
    display(){
        if(this.body.speed<3){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
        }
        else{
            World.remove(world,this.body);
        push();
        this.visibility= this.visibility-5;
        translate (this.body.position.x,this.body.position.y);
        tint(255,this.visibility);   
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height);
        pop();
        }
    }
    
    }