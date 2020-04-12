var fixedRect,movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 50, 80);
  fixedRect.shapeColor="green";

  movingRect=createSprite(200,200,80,50);
  movingRect.shapeColor="green";
}

function draw() {1
  background(0); 
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  console.log(movingRect.x-fixedRect.x);

  if(movingRect.x-fixedRect.x<(movingRect.width+fixedRect.width)/2 &&
    fixedRect.x-movingRect.x<(movingRect.width+fixedRect.width)/2 &&
    movingRect.y-fixedRect.y<(movingRect.height+fixedRect.height)/2 &&
    fixedRect.y-movingRect.y<(movingRect.height+fixedRect.height)/2 ){

    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";

  }
  

  drawSprites();
}