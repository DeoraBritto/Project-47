const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var monkey,monkeyImage;
var apple,banana,melon,orange,pineapple;
var fruitsGroup;
var ground;
var score = 0;


function preload() {
  bg = loadImage("bg1.png");

  monkeyImage = loadImage("sprite_3.png");

  apple = loadImage("apple2.png");
  banana = loadImage("banana2.png");
  melon = loadImage("melon2.png");
  orange = loadImage("orange2.png");
  pineapple = loadImage("pineapple2.png")

  
}

function setup() {
  createCanvas(1400, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 800, 1400, 20);

  monkey = createSprite(100,750,20,20);
  monkey.scale = 0.3;
  monkey.addImage(monkeyImage);

  fruitsGroup = createGroup();
  
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
 
 // monkey.velocityY = -3;
 // monkey.x = World.mouseX;

 if(keyDown("RIGHT_ARROW")){
 monkey.velocityX = 6;
 }

 if(keyDown("LEFT_ARROW")){
   monkey.velocityX = -6;
 }

 edges = createEdgeSprites();
  monkey.collide(edges);

  drawSprites();

    

    stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);


spawnFruits();

if(fruitsGroup.isTouching(monkey)){
fruitsGroup.destroyEach();
score = score + 2;
}
  

 
}

function spawnFruits(){
if (frameCount % 20 === 0) {
  fruits = createSprite(random(100, 1000), 0, 100, 100);
  fruits.velocityY = 6;
  var rand = Math.round(random(1,5));
  switch(rand){
      case 1: fruits.addImage(apple);
      break;
      case 2: fruits.addImage(banana);
      break;
      case 3: fruits.addImage(melon);
      break;
      case 4: fruits.addImage(orange);
      break;
      case 5: fruits.addImage(pineapple);
      break;
  }
  fruitsGroup.add(fruits);
  
  }

}



