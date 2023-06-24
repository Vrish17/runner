var bg, bgImg;
var kang, kangImg;
var rock, rockImg;

function preload(){
bgImg = loadImage("bg.png")
kangImg = loadAnimation("kangaroo1.png","kangaroo2.png","kangaroo3.png")
rock
}
function setup() {
createCanvas(800,400);
bg = createSprite(400,100,400,20);
bg.addImage(bgImg);
bg.scale = 0.3;
bg.x = width/2
kang = createSprite(50,200,20,50)
kang.addAnimation("running",kangImg)
kang.scale = 0.1
kang.debug = false
invisibleGround = createSprite(0,350,160,10)
invisibleGround.visible = false;
kang.setCollider("circle",0,0,300)
}

function draw() {
background("black")
if(bg.x < 100){
bg.x = 400;
}
if(keyDown("space")&&kang.y > 270){
 kang.velocityY = -13;
}
kang.velocityY = kang.velocityY + 0.5
kang.collide(invisibleGround)
bg.velocityX = -3;
drawSprites(); 
}