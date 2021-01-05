class Ground{
    constructor(x,y,width,height){
        var options ={
            isStatic: true
        }
    
        this.body = Bodies.rectangle(x,y,1000,20,options);

        this.width = 1000;
        this.height = 20;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER);
        fill("yellow");
        stroke("white");
        strokeWeight(3);
        rect(pos.x,pos.y,this.width,this.height);
    }
    }