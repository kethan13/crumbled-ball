
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper=new Paper(100,500,50,50)
    dusbin=new Dustbin(450,515,100,100)
	ground=new Ground(300,580,1000,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display()
  dusbin.display()
  ground.display()
  drawSprites();
 
}

function keyPressed(){
if(keyCode===32){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-80})
}


}

