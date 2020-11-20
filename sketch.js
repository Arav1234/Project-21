var  wall , thickness ; 
var  bullet , speed , weight ;

function setup() {
  createCanvas(1600,400);
  thickness = random (22 , 83);
  speed     = random (22 , 100);
  weight    = random (30 , 52);
  
  bullet    = createSprite(200 , 800 , 90 , 35);
  bullet.shapeColor = "yellow";

  wall      = createSprite(1550 , 200 , thickness , height/2);
  wall.shapeColor = "white"

  bullet.velocityX = speed;

}
function draw() {
  background("cyan");  

  if (Collided(bullet , wall)){
    bullet.velocity = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    
    if (damage > 10){
      wall.shapeColor = "red";
    }
    if (damage < 10){
      wall.shapeColor = "green";
    }  
  }

  drawSprites();

}
function Collided (lbullet , lwall){

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if (bulletRightEdge >= wallLeftEdge){

  return true
  }
  return false 
}