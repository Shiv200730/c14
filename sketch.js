var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var cacti1, cacti2 , cacti3,cacti4, cacti5, cacti6;
var obstacles

var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  cacti1=loadImage("obstcle1.png");
  cacti2=loadImage("obstcle2.png");
  cacti3=loadImage("obstcle3.png");
  cacti4=loadImage("obstcle4.png");
  cacti5=loadImage("obstcle5.png");
  cacti6=loadImage("obstcle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background("black");
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  obstacle();
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 200
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function obstacle()
{
  if(frameCount %60 ===0){
    obstacles= createSprite(600,165,10,40);
    obstacles.velocityX=-4;

    var r=Math.round(random(1,6));
    switch(r){
      case 1:obstacles.addImage(cacti1)
      break;
      case 2:obstacles.addImage(cacti2)
      break;
      case 3:obstacles.addImage(cacti3)
      break;
      case 4:obstacles.addImage(cacti4)
      break;
      case 5:obstacles.addImage(cacti5)
      break;
      case 6:obstacles.addImage(cacti6)
      break;
      default:break;
        }
        obstacles.scale=0.5;
        obstacles.lifetime=200;
  }
}