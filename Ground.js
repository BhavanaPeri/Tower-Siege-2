class Ground{
constructor(x,y,width,height){
    var options = {
        isStatic: true,
    }
    this.x=x;
    this.y=y;
    this.width = width;
    this.height = height;
    this.image=loadImage("woodFloor.jpg");
    this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    World.add(world, this.body);
}

display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("white");
    strokeWeight(1);
    rect(pos.x, pos.y, this.width, this.height);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.width,this.height);
}

}