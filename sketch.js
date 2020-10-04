
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render =Matter.Render;
var dustbinO,groundO,paper;
var world;

	


function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinO= new dustbin(1200,650);
	paper=new Paper(200,450,70);
	groundO=new ground(width/2,670,width,20);

	var render = Render.create({
		element: document.body,
		engine:engine,
		options:{
		width: 1200,
		height:700,
		wireframes: false
		}
		
	})  


	Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
  background("red");
  
  paper.display();
 groundO.display();
 dustbinO .display();
 
  drawSprites();

}
function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:280,y:-300});
}

}


