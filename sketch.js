//namespacing
const Engine =Matter.Engine;
const World =Matter.World;
const Bodies =Matter.Bodies;

var myengine;
var myworld;
var ball;
var ground;
var ball_option={
  restitution:0.5
}
var ground_option={
isStatic:true
}


function setup() {
  createCanvas(400,400);
  myengine=Engine.create();
  myworld=myengine.world;
  
  ground=Bodies.rectangle(200,380,400,20,ground_option);
  World.add(myworld,ground);

  ball=Bodies.circle(200,200,20,ball_option);
  World.add(myworld,ball);
  console.log(ball);
}

function draw() {
  background(0);  
 Engine.update(myengine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);


}