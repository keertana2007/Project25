class Bin { 
    constructor(x, y, width, height) {

        var options = {
        isStatic : true
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
        World.add(world, this.body);
        this.image = loadImage("dustbingreen.png"); 
    }

    display(){
    var pos = this.body.position; 
    var angle = this.body.angle;
    //push();
    //translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("#FEC5E5");
        rect(pos.x, pos.y, this.width, this.height)
        imageMode(CENTER)
        image(this.image,1080, 495, 200, 300);
    
    //pop();
    }

}
