var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	engine = Engine.create();
	world = engine.world;


	fairy = createSprite(130, 350);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;


	var ball_options ={
        restitution: 1.0
    }

    // ball = Bodies.circle(650,30,20, ball_options);


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

var star_options = {restitution:0.5}

	starBody = Bodies.circle(650 , 30 , 5 , star_options);

	
	Engine.run(engine);
	fairyVoice.play();
}


function draw() {

  background(bgImg);

star.x = starBody.position.x
star.y = starBody.position.y

  keyPressed();



//   ellipseMode(RADIUS);
//   ellipse(ball.position.x, ball.position.y, 20, 20);

  ellipseMode(RADIUS);
 ellipse(starBody.position.x, starBody.position.y, 5, 5);

 if(star.y>300 &&
	 starBody.position.y > 300 ){
	Matter.Body.setStatic(starBody, true);
}

 drawSprites();

}

function keyPressed() {

if(keyDown("RIGHT_ARROW")){
	fairy.x=fairy.x+2;
}
if(keyDown("LEFT_ARROW")){
	fairy.x=fairy.x-2;
}
if(keyDown("DOWN_ARROW")){
	// star.y=starBody.positionY;

	// World.add(world,ball);
	World.add(world, starBody);
}


}