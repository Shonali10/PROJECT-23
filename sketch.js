var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	// packageBody = new Box(width/2,200,5,5 )
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	var options = {
        'restitution':0.6,
        'friction':0.3,
		'density':1.0,
		'isStatic' : true
	}

	packageBody = Bodies.circle(width/2,200,10, options);   

	World.add(world, packageBody);

	

// packageBody = new Box (width/2,200,10)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);
 
 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();
  
  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y


  drawSprites();
  
//   packageBody.display();
 
}
function keyPressed() {

	if(keyDown("RIGHT_ARROW")){
		helicopterSprite.x=helicopterSprite.x+2;
	
		translation={x:2,y:0}
		Matter.Body.translate(packageBody, translation)
	}
	if(keyDown("LEFT_ARROW")){
		helicopterSprite.x=helicopterSprite.x-2;

		translation={x:-2,y:0}
		Matter.Body.translate(packageBody, translation)
	}
	if(keyDown("DOWN_ARROW")){
			Matter.Body.setStatic(packageBody, false);
			// World.add(world, packageBody);
	}
	}
