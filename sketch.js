var fighterPlan;
var asteroidGroup,asteroid1,asteroid2,asteroid3;
var spaceShipImage,spaceImage,space;
var score = 0;
var play = 1;
var end = 2;
var gameState = instruction;


function preload(){

  spaceImage = loadImage("space.png");
  spaceShipImage = loadImage("spaceship.png");
  asteroid1 = loadImage("as1.png");
  asteroid2 = loadImage("as2.png");
  asteroid3 = loadImage("as3.png");


}


function setup(){
  canvas = createCanvas(1000,700);
  space = createSprite(250,350,30,20);
  space.addImage(spaceImage);
  space.velocityY = (5 + score/10);

  fighterPlan = createSprite(200,350,20,20);
  fighterPlan.addImage(spaceShipImage);
  fighterPlan.scale = 0.6;

  asteroidGroup = new Group;
  laserGroup = new Group;
  
  
}



function draw() {
  background("white");

  if(space.y > 800) {
    space.y = 300;
  }
  
  
  if(keyDown("RIGHT_ARROW")){
    fighterPlan.x = fighterPlan.x + 5;
  }
 
  if(keyDown("LEFT_ARROW")){
    fighterPlan.x = fighterPlan.x - 5;
  }
  
  
  
  asteroids();
  drawSprites();


}

function asteroids() {
  if(frameCount % 110 === 0) {
  
    var asteroid = createSprite(Math.round(random(50,1350)),-20);
    asteroid.lifetime = 200;
    asteroid.scale = random(0.4,0.5);
    //asteroid.debug = true;

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: asteroid.addImage(asteroid1);
              asteroid.setCollider("circle",-80,10,160);
              break;
      case 2: asteroid.addImage(asteroid2);
              asteroid.setCollider("circle",50,0,150);
              break;
      case 3: asteroid.addImage(asteroid3);
              asteroid.setCollider("circle",0,0,170)
      default: break;
    }
    
    //console.log(asteroid.x);
    asteroidGroup.add(asteroid);
  }
  
}


