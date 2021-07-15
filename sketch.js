const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var base;
var wall, wall1;
var stone,bridge,stone1,stone2,stone3,stone4;
var stone_con;

function setup() 
{
  createCanvas(700,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  base = new Base(200,680,600,20);
  wall = Bodies.rectangle(480,250,100,100);
  wall1 = Bodies.rectangle(1,250,100,100);

  bridge = new Bridge(8,{x:185,y:230});
  stone = Bodies.circle(250,240,2);
  stone1 = Bodies.circle(280,245,2);
  stone2 = Bodies.circle(310,250,2);
  stone3 = Bodies.circle(340,255,2);
  stone4 = Bodies.circle(370,240,2);
  Matter.Composite.add(bridge.body,wall1);
  stone_con = new Link(bridge,wall);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  bridge.show();
  ellipse(stone.position.x,stone.position.y,10,10);
  ellipse(stone1.position.x,stone1.position.y,10,10);
  ellipse(stone2.position.x,stone2.position.y,10,10);
  ellipse(stone3.position.x,stone3.position.y,10,10);
  ellipse(stone4.position.x,stone4.position.y,10,10);

  Engine.update(engine);
  base.show();

 
   
}
