var box ;
function setup() {
  createCanvas(400,400);
  var box =createSprite(250,250,20,20);
}

function draw() 
{
  background(30);
  if(keyIsDown(UP_ARROW)){
    box.y=box.y-5;
    background("red")

  }
  if(keyIsDown(DOWN_ARROW)){
    box.y=box.y+5;
    background("blue")

  }
  if(keyIsDown(LEFT_ARROW)){
    box.x=box.x-5;
    background("yellow")

  }
  if(keyIsDown(RIGHT_ARROW)){
    box.x=box.x+5;
    background("blue")
  }
    drawSprite();
 
  
}