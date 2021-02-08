const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint= Matter.Constraint;
const Body=Matter.Body;

var boxes=[];
var engine, world, ground, ball, chain;

function setup() {
  createCanvas(3000,800);

  engine=Engine.create();
  world=engine.world;

  ground=new Ground(600,600,1200,20);

  for(var i=0;i<8;i++){
    boxes.push(new Box(700,100));
    if(i<6){
      boxes.push(new Box(800,100));
      boxes.push(new Box(900,100));
    }
  }
ball= new Ball(200,200,80);
chain= new Chain(ball.body,{x:500,y:50});
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ground.display();

  for(i=0;i<boxes.length;i++){
    boxes[i].display();
  }

  ball.display();
  chain.display();
 
  
}
function mouseDragged(){
  Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}