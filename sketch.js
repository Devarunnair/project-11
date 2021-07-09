var path,path1;
var boy,boy_running;  
var invisibleRight;
var invisibleLeft;

function preload(){
  //pre-load images
 path = loadAnimation("path.png");

 boy_running = loadAnimation("R1.png","R2.png");


}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path1= createSprite(200,200);
  path1.addAnimation("moving",path);
  path1.velocityY = 4;
  path1.scale = 1.2;

  boy = createSprite(200,200);
  boy.addAnimation("running",boy_running);
  boy.scale = 0.09;  

  invisibleRight = createSprite(395,397,20,1000);
  invisibleRight.visible = false;
  
  invisibleLeft = createSprite(29,6,20,1000);
  invisibleLeft.visible = false;


}

function draw() {
  background(220);
  if (path1.y > 400) {
    path1.y = height/2;
    }
    boy.x = World.mouseX

  boy.collide(invisibleRight);
  boy.collide(invisibleLeft);

  drawSprites();
}
