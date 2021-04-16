var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(20,500,200,10);
    surface1.shapeColor="blue";

    surface2=createSprite(230,500,200,10);
    surface2.shapeColor="yellow";

    surface3=createSprite(460,500,200,10);
    surface3.shapeColor="red";

    surface4=createSprite(700,500,200,10);
    surface4.shapeColor="green"
    //create box sprite and give velocity
    box=createSprite(random(20,750),100,50,50);
    box.shapeColor="white";
    box.velocityX=3;
    box.velocityY=5;
}

function draw() {
    background("grey");
    text(mouseX + ',' + mouseY,10,45);
      
    //create edgeSprite
    edges=createEdgeSprites()
    box.bounceOff(edges)

    if(box.isTouching(surface1)){
        box.shapeColor="blue";
        box.bounceOff(surface1);
    }

    if(box.isTouching(surface2)){
        box.shapeColor="yellow";
        box.bounceOff(surface2);
        music.play();
    }

    if(box.isTouching(surface3)){
        box.shapeColor="red";
        box.bounceOff(surface3);
    }

    if(box.isTouching(surface4)){
        box.shapeColor="green";
        box.bounceOff(surface4);
        music.stop();
    }

    


    //add condition to check if box touching surface and make it 
   drawSprites();
}
