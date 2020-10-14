var movingRect
var FixedRect
function setup() {
  createCanvas(1200,800);
  movingRect= createSprite(600, 200, 80, 30);
  
  movingRect.shapeColor= "green";
  movingRect.debug= "true";
  FixedRect= createSprite(600,200,80,30);
  FixedRect.shapeColor= "green";
  FixedRect.debug= "true";
}

function draw() {
  background("black");
  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;

  if(movingRect.x-FixedRect.x< movingRect.width/2+ FixedRect.width/2
    && FixedRect.x- movingRect.x< FixedRect.width/2 + movingRect.width/2
    && movingRect.y - FixedRect.y< movingRect.height/2 + FixedRect.height/2
    && FixedRect.y - movingRect.y< FixedRect.height/2 + movingRect.height/2)
  {
     movingRect.shapeColor= "red";
     FixedRect.shapeColor= "red";
     //movingRect.velocityX = movingRect.velocityX * (-1);
     //FixedRect.velocityX=   FixedRect.velocityX * (-1);
     
  }
  else
  {
    movingRect.shapeColor="green";
    FixedRect.shapeColor= "green";
  }
  drawSprites();
}
