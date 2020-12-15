
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint=Matter.MouseConstraint;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rop3, rope4, rope5;
var roof1, roof2, roof3, roof4, roof5;


function setup() {
  canvas=createCanvas(800,700);
	engine = Engine.create();
  world = engine.world;
  
  let canvasmouse=Matter.Mouse.create(canvas.elt);
  canvasmouse.pixelratio=pixelDensity();
  let options={
    mouse:canvasmouse
  }

  mConstraint=MouseConstraint.create(engine,options);
  World.add(world, mConstraint);

	//Create the Bodies Here.
bob1=new Pendulum(300,350,20);
bob2=new Pendulum(350,350,20);
bob3=new Pendulum(400,350,20);
bob4=new Pendulum(450,350,20);
bob5=new Pendulum(500,350,20);
roof1=new ground(300,100,300,40);
roof2=new ground(330,100,100,40);
roof3=new ground(370,100,100,40);
roof4=new ground(410,100,100,40);
roof5=new ground(440,100,100,40);
rope1= new rope(bob1.body,{x:180,y:110});
rope2= new rope(bob2.body,{x:240,y:110});
rope3= new rope(bob3.body,{x:305,y:110});
rope4= new rope(bob4.body,{x:370,y:110});
rope5= new rope(bob5.body,{x:420,y:110});
Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body, {x: mouseX, y: mouseY});
}

function keyPressed() { 
	if (keyCode === UP_ARROW){
   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:200,y:100});
  }
}

