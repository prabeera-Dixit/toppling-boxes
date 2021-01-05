class Box{
constructor(x,y,width,height){
    var options ={
        restituition: 0.7
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
}
display(){
    var pos = this.body.position
    rectMode(CENTER);
    fill("pink");
    stroke("black");
    strokeWeight(3);
    rect(pos.x,pos.y,this.width,this.height);
}
}