var lachit,lachitImage,swordImg;
var sword,ground,gameState,enemy,edges,groundImg,enemyImg,bg,backg;
var score=0;
function preload(){

  lachitImage=loadImage("IMAGES/lachit.png");
groundImg=loadImage("IMAGES/ground2.png");
swordImg=loadImage("IMAGES/download.png");
EndImg=loadImage("IMAGES/end image.jpg");
enemyImg=loadImage("IMAGES/mughals.png");
pauseImg=loadImage("IMAGES/pausebutton.png");
backg=loadImage("IMAGES/bg.png");
}

function setup() {
  background("white");
  createCanvas(displayWidth,displayHeight);
  //bg=createSprite(0,0,displayWidth,displayHeight);
//bg.addImage(backg);
  lachit=createSprite(30,displayHeight-120,50 ,100);
 lachit.addImage(lachitImage);
  lachit.scale=2.5;
lachit.setCollider("circle",0,0,30);
 ground=createSprite(displayWidth/2,displayHeight-10,displayWidth,10);
 ground.addImage(groundImg);
 sword=createSprite(30,50,10,10);
 sword.scale=0.7
 sword.addImage(swordImg);
 enemyGroup=new Group();
 gameState="stage1";
 edges=createEdgeSprites();
ground.velocityX=-5;
ground.x = ground.width /2;
gameState="play";


}

function draw() {
sword.debug=true
lachit.debug=true

  background(backg); 
  sword.x=lachit.x+83;
sword.y=lachit.y-83;
  lachit.collide(ground); 
  if (gameState==="play"){
    if (ground.x<0){
      ground.x = ground.width /2;
    }
    if (keyDown("UP_ARROW")){
      lachit.velocityY=-12;
    }
    lachit.velocityY=lachit.velocityY+0.8;
    spawnEnemy();
    if(enemyGroup.isTouching(lachit)){
      gameState = "End";
  }
  }else
  if(gameState==="End"){
  
   ground.velocityX=0;
   
   enemyGroup.setVelocityXEach(0);
   
  }


   textSize(50);
  text("score:"+score,displayWidth-500,40);



  drawSprites();
}
function spawnEnemy () {
  if (frameCount%90===0) {
    enemy=createSprite(1700,displayHeight-120,50 ,100);
    enemy.addImage(enemyImg)
    enemy.scale=1.5
    enemy.velocityX=-12;
      enemyGroup.add(enemy);
      enemy.debug=true
      enemy.setCollider("circle",0,0,50);
  }
}