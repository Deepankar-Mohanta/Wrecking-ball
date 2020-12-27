const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1, ground1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21;
var rope1

function setup() {
  
  var canvas=createCanvas(800, 600);
  engine=Engine.create();
  world=engine.world;

  ground1=new ground(400, 550, width, 20);
  ball1=new ball(200, 250, 50, 50);

  box1=new box(450, 500, 50, 50);
  box2=new box(500, 500, 50, 50);
  box15=new box(550, 500, 50, 50);

  box3=new box(450, 450, 50, 50);
  box4=new box(500, 450, 50, 50);
  box16=new box(550, 450, 50, 50);

  box5=new box(450, 400, 50, 50);
  box6=new box(500, 400, 50, 50);
  box17=new box(550, 400, 50, 50);

  box7=new box(450, 350, 50, 50);
  box8=new box(500, 350, 50, 50);
  box18=new box(550, 350, 50, 50);

  box9=new box(450, 300, 50, 50);
  box10=new box(500, 300, 50, 50);
  box19=new box(550, 300, 50, 50);

  box11=new box(450, 250, 50, 50);
  box12=new box(500, 250, 50, 50);
  box20=new box(550, 250, 50, 50);

  box13=new box(450, 200, 50, 50);
  box14=new box(500, 200, 50, 50);
  box21=new box(550, 200, 50, 50);

  rope1=new rope(ball1.body, {x:200, y:0})

  

}

function draw() {
  background(0, 0, 0);  
  Engine.update(engine);

  ground1.display();
  ball1.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  rope1.display();

}

function mouseDragged(){
  Matter.body.setPosition(ball1.body,{x:mouseX, y:mouseY})
}
 