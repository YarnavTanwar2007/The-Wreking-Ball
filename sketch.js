const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;

function setup() {
  createCanvas(3000,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(700,1500,3000,200);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground.display();
  console.log("I am here");
}