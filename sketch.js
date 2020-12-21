var sprite1, sprite2, sprite3, sprite4, sprite5, sprite6;


function setup() {
  createCanvas(500,500);

  sprite1 = createSprite(400, 200, 50,30 );
  sprite1.shapeColor ="skyblue"; 
  sprite1.debug = true; 

  sprite2 = createSprite(200, 300, 70, 50);
  sprite2.shapeColor ="skyblue";
  sprite2.debug = true; 

  sprite3 = createSprite(50, 50, 70, 50);
  sprite3.shapeColor ="skyblue";
  sprite3.debug = true; 

  sprite4 = createSprite(150, 50, 70, 50);
  sprite4.shapeColor ="skyblue";
  sprite4.debug = true;

  sprite5 = createSprite(250, 50, 70, 50);
  sprite5.shapeColor ="skyblue";
  sprite5.debug = true;

  sprite6 = createSprite(350, 50, 70, 50);
  sprite6.shapeColor ="skyblue";
  sprite6.debug = true;
  

}

function draw() {
  background("black");  
  
  sprite1.x = mouseX;  
  sprite1.y = mouseY;
    


if(touch(sprite1, sprite3)){
  sprite1.shapeColor = "red";
  sprite3.shapeColor = "red";
}
else{
  sprite1.shapeColor = "skyblue";
  sprite3.shapeColor = "skyblue";
}

  drawSprites();
}

function touch(A,B){
  if(A.x - B.x < A.width/2 + B.width/2 && B.x - A.x < A.width/2 + B.width/2
    && A.y - B.y < A.height/2 + B.height/2 && B.y - A.y < A.height/2 + B.height/2){
   return true;
 }
 else {
   return false;
 }


}