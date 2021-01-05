const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3;
var ground;

function setup(){
    var canvas = createCanvas(500,500);

    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(200,100,50,100);
    box3 = new Box(400,300,50,50);

    ground = new Ground(300,480);
}

function draw(){
    background("purple");
    Engine.update(engine);
   
box1.display();
box2.display();
box3.display();

ground.display();   
}