var bullet, wall;
var speed,weight, thickness;

function setup() {
  createCanvas(1200,400);

  thickness=random(22, 83);
  speed=random(55,90);
  weight=random(400,1500);

  bullet=createSprite(50, 200, 50, 50);
  
   bullet.velocityX=speed;

  wall = createSprite(1150,200,60,height/2);
  wall.shapeColor="yellow"
 
}

function draw() {
  background("black"); 
   
  
  
  if(hasCollided(bullet, wall)){

    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness* thickness* thickness);
    
    
    if(damage>10){
      wall.shapeColor=color(225, 0, 0);
    }

    if(damage<10){
      wall.shapeColor=color(0, 255, 0);
    }
  }
drawSprites();
}

function hasCollided(Lbullet, Lwall){

bulletRightEdge=Lbullet.x + Lbullet.width;
wallLeftEdge = Lwall.x;

if(bulletRightEdge>=wallLeftEdge){

return true;
}

return false;
}
