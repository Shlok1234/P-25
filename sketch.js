var box1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//var bin = "sprites/dustbingreen.png";

function preload()
{
	
}

function setup() {
	createCanvas(1000, 200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	edge1 = new Dustbin(700,165,100,10);
	edge2 = new Dustbin(655,131,10,50);
	edge3 = new Dustbin(745,131,10,50);
	paper = new Paper(200,160,20,20);
	ground = new Ground(500,180,1000,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  edge1.display();
  edge2.display();
  edge3.display();
  paper.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55});
	}
}



