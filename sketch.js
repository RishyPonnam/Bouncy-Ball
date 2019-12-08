const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball1, ball2, ball3;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   
    
    var ball1_options = {
        restitution : 1
    }
    ball1 = Bodies.circle(400,100,20,ball1_options);
    World.add(world,ball1);
    var ball2_options = {
        restitution : 1,
        friction : 0.5

    }
    ball2 = Bodies.circle(510,50,20,ball2_options);
    World.add(world,ball2);
    var ball3_options = {
        restitution : 1
    }
    ball3 = Bodies.circle(600,200,20,ball3_options);
    World.add(world,ball3);
    var ground_options ={
        isStatic: true
    }
    
    ground = Bodies.rectangle(600,400,1200,20,ground_options);
    World.add(world,ground);
    console.log(ground);
}

function draw(){
    background(001001);
    Engine.update(engine);
    rectMode(CENTER);
    ellipseMode(RADIUS);
    fill("green")
    rect(ground.position.x,ground.position.y,1200,20);
  fill("blue")
    ellipse(ball1.position.x,ball1.position.y,20,20);
    fill("red")
    ellipse(ball2.position.x,ball2.position.y,20,20);
    fill("yellow")
    ellipse(ball3.position.x,ball3.position.y,20,20);
}