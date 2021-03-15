const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1
function preload()
{
	
}

function setup(){
    createCanvas(800, 700);

	engine = Engine.create();
    world = engine.world;
    ground1=new Ground(400,400,500,10)
    log1=new Log(400,370,50,50)
    log2=new Log(400,320,50,50)
    log3=new Log(400,270,50,50)
    log4=new Log(400,220,50,50)
    log5=new Log(200,370,50,50)
    log6=new Log(200,320,50,50);

    polygon1=new Polygon(200,200,20,20)
   rope1=new Chain(polygon1.body,{x:50,y:200})
    
    console.log(ground1.body)
Engine.run(engine);
}

function draw(){
  rectMode(CENTER);
  background(255,255,255);
ground1.display();
log1.display();
log2.display();
log3.display();
log4.display();
log5.display()
log6.display();
rope1.display();
polygon1.display();




  drawSprites();  
}

function mouseReleased() {
  rope1.fly(); 
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}
function keyPressed() {
    if (keyCode===32) {
        rope1.attach(polygon1.body)
    }
}