
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg;
var rock1, rock2, rock3, rock4, rock5, rock6, rock7, rock8, rock9, rock10;
var rocksImg, rocketImg, groundImg, fireBallImg,starImg;
var Rocket, ground, rock1, rock2;

function preload()
{
	backgroundImg=loadImage("backgroudImg.png");
	rocksImg=loadImage("rocks.png");
	rocketImg=loadImage("Rocket.png");
	groundImg=loadImage("ground.png");
	fireBallImg=loadImage("FireBall.png");
	starImg=loadImage("star.png");
}

function setup() {
	createCanvas(1350,850);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = createSprite(800,800,400,20);
	ground.addImage(groundImg);
	ground.x = ground.width /2;
	ground.velocityX = -6;

	rock1=createSprite(170,700);
	rock1.addImage(rocksImg);
	rock1.scale=0.25;

	rock2=createSprite(1200,700);
	rock2.addImage(rocksImg);
	rock2.scale=0.25;

	rock3=createSprite(370,730);
	rock3.addImage(rocksImg);
	rock3.scale=0.095;

	rock4=createSprite(500,700);
	rock4.addImage(rocksImg);
	rock4.scale=0.105;

	rock5=createSprite(620,710);
	rock5.addImage(rocksImg);
	rock5.scale=0.105;

	rock6=createSprite(720,715);
	rock6.addImage(rocksImg);
	rock6.scale=0.085;

	rock7=createSprite(810,710);
	rock7.addImage(rocksImg);
	rock7.scale=0.075;

	rock8=createSprite(950,700);
	rock8.addImage(rocksImg);
	rock8.scale=0.135;

	rock9=createSprite(1800,700);
	rock9.addImage(rocksImg);
	rock9.scale=0.035;

	rock10=createSprite(1800,500);
	rock10.addImage(rocksImg);
	rock10.scale=0.135;

	Rocket=createSprite(200,400);
	Rocket.addImage(rocketImg);

	//rock.velocityX=1;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  
  if (ground.x < 0){
	ground.x = ground.width/2;
  }

  if (keyDown("left")){
	  if(Rocket.x>10){
	Rocket.x = Rocket.x-10;
	ground.velocityX=-2;
	  }
 }
 
  if (keyDown("right")){
	  if(Rocket.x<700){
	Rocket.x = Rocket.x+10;
	  }
}

 if (keyDown(UP_ARROW)){
   if(Rocket.y >75)
   {
	   Rocket.y = Rocket.y- 10;
   }
 }

 if (keyDown(DOWN_ARROW))
 {
   if(Rocket.y<600)
   {
	 Rocket.y = Rocket.y+20;
   }
 }

 

  if (frameCount % 120 === 0) {
    var fireBall = createSprite(600,120,40,10);
    fireBall.y = Math.round(random(80,600));
    fireBall.addImage(fireBallImg);
    fireBall.scale = 0.5;
    fireBall.velocityX = -3;
    
     //assign lifetime to the variable
	fireBall.lifetime = 200;
  }

  if (frameCount % 120 === 0) {
    var star = createSprite(600,120,40,10);
    star.y = Math.round(random(80,600));
    star.addImage(starImg);
    star.scale = 0.5;
	star.velocityX = -3;
    
	if(Rocket.isTouching(star))
	{
	   star.destroy();
	}
  }

  drawSprites();
 
}



