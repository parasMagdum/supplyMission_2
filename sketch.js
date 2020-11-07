var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var box1s,box2s,box3s;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;
	
	groundSprite=createSprite(width/2, height-08, width,30);
	groundSprite.shapeColor=color(10);
	
	box1s = createSprite(400,670,90,10);
	box1s.shapeColor=color("red");

	box2s = createSprite(350,635,10,80);
	box2s.shapeColor=color("red");

	box3s = createSprite(450,635,10,80);
	box3s.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.02, isStatic:true});
	World.add(world, packageBody);
	packageBody.velocityX = 3;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 680, width, 30 , {isStatic:true} );
	World.add(world, ground);
	
	box1 = Bodies.rectangle(400,650,80,10,{isStatic:true});
	World.add(world,box1);

	box2 = Bodies.rectangle(350,650,10,80,{isStatic:true});
	World.add(world,box2);

	box3 = Bodies.rectangle(450,650,10,80,{isStatic:true});
	World.add(world,box3);

     
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(50);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;
  
  drawSprites();

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

  Matter.Body.setStatic(packageBody,false);
  helicopterSprite.velocityX = 2;
 }
} 