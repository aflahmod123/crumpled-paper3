const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 
var engine, world;
var ground,ball;
var binImg,bin;

function preload(){
    binImg = loadImage("Images/dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    crumpledPaper = new Paper();

    bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    binPart1 = new Dustbin(902,505,10,120);
    binPart2 = new Dustbin(962,565,130,10);
    binPart3 = new Dustbin(1024,505,10,120);

    launch = new launcher(crumpledPaper.body ,{x :250, y: 250})
}

function draw(){
    background(0);
    Engine.update(engine);

    //text(mouseX+","+mouseY,200,200);

    
    ground.display();
    crumpledPaper.display();
    binPart1.display();
    binPart2.display();
    binPart3.display(); 
      launch.display();
    drawSprites();

    
}


function mouseReleased () {
    launch.fly();
}

function mouseDragged(){

    Matter.Body.setPosition(crumpledPaper.body,{x :mouseX, y: mouseY})
}

