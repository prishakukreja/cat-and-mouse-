var cat1Img , cat2Img , cat3Img, cat4Img , cat
var mouse1Img , mouse2Img , mouse3Img , mouse4Img , mouse , garden
function preload() {
    cat1Img = loadAnimation ("images/cat1.png")
    cat2Img = loadAnimation ("images/cat2.png","images/cat3.png")
        cat4Img = loadAnimation ("images/cat4.png")
    mouse1Img = loadAnimation ("images/mouse1.png")
    mouse2Img = loadAnimation  ("images/mouse2.png" ,"images/mouse3.png" )
        mouse4Img = loadAnimation ("images/mouse4.png")
    garden = loadImage ("images/garden.png") 

}
function setup(){
    createCanvas(1000,800);
    cat = createSprite (870,600);
    cat.addAnimation("sitting",cat1Img)
    cat.scale = 0.2
    mouse=createSprite (200,600);
    mouse.addAnimation ("standing" , mouse1Img)
    mouse.scale = 0.2 

}

function draw() {

    background(garden);
    if(cat.x-mouse.x<cat.width/2+mouse.width/2) {
        cat.velocityX=0 
        cat.addAnimation("happy",cat4Img)
        cat.changeAnimation ("happy")
        mouse.addAnimation("happy",mouse4Img)
        mouse.changeAnimation("happy")

    }

    drawSprites();
}


function keyPressed(){
if (keyDown("left")) {
    mouse.addAnimation("teasing",mouse2Img)
    mouse.changeAnimation("teasing") 
    cat.velocityX=-5
   // cat.addAnimation ("walking",cat2Img)
    //cat.changeAnimation ("walking")


}


}
