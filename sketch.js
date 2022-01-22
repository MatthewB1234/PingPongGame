var Pong1
var Pong2
var Ball
var Edge
function setup() {
  

  
  createCanvas(400,400);
  Pong1=createSprite(380,200,10,70)
  Pong2=createSprite(30,200,10,70)
  Ball=createSprite(200,200,20,20)
  Ball.velocityX=4
Ball.velocityY=4
  Edge=createEdgeSprites()
}

function draw() 
{
  background(30);
drawSprites()
Pong1.y=mouseY
Pong2.y=Ball.y

Ball.bounceOff(Pong1)
Ball.bounceOff(Pong2)

Ball.bounceOff(Edge[3])
Ball.bounceOff(Edge[2])

}




