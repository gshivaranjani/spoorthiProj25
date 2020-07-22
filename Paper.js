class Paper{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2

        } 
        this.r = r;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x,y,(this.r-20)/2,options);
        
        World.add(world,this.body);
        

    }
    display(){
        var pos = this.body.position;
        console.log(pos.x + " " + pos.y);
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        fill("white");
        image(this.image,0,0,this.radius,this.r);
        pop();
    }
}