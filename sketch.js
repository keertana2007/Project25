const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;
var binPart1, binPart2, binPart3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.

	ground1 = new ground(width/2,670,width,20)
	paper1 = new Paper(25, 20,70);
	binPart1 = new Bin(998,550,20,180)
	binPart2 = new Bin(1080,630,150,20)
	binPart3 = new Bin(1160,550,20,180)
	Engine.run(engine);
	
}


function draw() {

	background("#FEC5E5");
	rectMode(CENTER);
	Engine.update(engine);
	paper1.display();
ground1.display();
binPart1.display();
binPart2.display();
binPart3.display();


}

function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:300,y:-300})
	}
}
