if(obstaclesGroup.isTouching(trex)){
    gameState = END;
}

else if (gameState === END) {
gameOver.visible = true;
restart.visible = true;

//set velcity of each game object to 0
ground.velocityX = 0;
trex.velocityY = 0;
obstaclesGroup.setVelocityXEach(0);
cloudsGroup.setVelocityXEach(0);

//change the trex animation
trex.changeAnimation("collided",trex_collided);

//set lifetime of the game objects so that they are never destroyed
obstaclesGroup.setLifetimeEach(-1);
cloudsGroup.setLifetimeEach(-1);
