const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var thor, hammer, chain;

function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;
    
    thor = new Thor(200, 180, 100, 250);
    hammer = new Hammer(200, 120, 80, 80);
    chain = new Chain(thor.body, hammer.body);
}

function draw(){
    background(0);
    Engine.update(engine);

    thor.display();  
    hammer.display();
    chain.display();
}
