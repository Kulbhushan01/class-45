var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obsGrp, obsBottom1,obsBottom2,obsBottom3,obsTop1,obsTop2; 

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
obsBottom1 =loadImage("assets/obsBottom1.png");
obsBottom2 =loadImage("assets/obsBottom2.png");
obsBottom3 = loadImage("assets/obsBottom3.png");
obsTop1=loadImage("assets/obsTop1.png");
obsTop2=loadImage("assets/obsTop2.png");

}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;
obsGrp=new Group();


}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 0.5;
   spawnObstacle();
        drawSprites();
        
}

function spawnObstacle(){
 if(frameCount % 100 ===0){
  var rand = Math.round(random(1,5));
  switch(rand) {
    case 1:
      var obstacle=createSprite(400,320);
      obstacle.addImage(obsBottom1);
      break;
    case 2:
      var obstacle=createSprite(400,320);
      obstacle.addImage(obsBottom2);
      break;
    case 3:
      var obstacle=createSprite(400,320);
      obstacle.addImage(obsBottom3);
      break;
    case 4:
      var obstacle=createSprite(400,50); 
      obstacle.addImage(obsTop1);
      break;
    case 5:
      var obstacle=createSprite(400,50);
      obstacle.addImage(obsTop2);
      break;
     default: break;
 }
 

 obstacle.velocityX=- 2;
 obstacle.scale=0.09;
 obsGrp.add(obstacle);

}
}