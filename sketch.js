const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,350,350,50,ground_options);

  var ball_options =  {
    restitution:1.0
  }

  ball = Bodies.circle(200,100,20,ball_options);

  World.add(world, ground);
  World.add(world,ball);

 
}

function draw() {
  background("black");

  Engine.update(engine);

  fill("white");

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,350,50);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  //x-position, y-position, width, height
}