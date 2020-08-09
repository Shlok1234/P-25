class Paper {
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.image = loadImage("sprites/paper.png")
        this.body = Bodies.circle(x, y, 20, options);
        World.add(world, this.body);
    }
        display(){
        image(this.image,500,180);    
        //var angle = this.body.angle;
        push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        Image(this.body.position.x,this.body.position.y,20,20);
        pop();
}
}