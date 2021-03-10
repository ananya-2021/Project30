const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world;

var ground,stand;

var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15;
var box16;

var polygon,polygonImg;

var slingshot;

function preload(){
   polygonImg = loadImage("polygon.png");
}

function setup(){
   createCanvas(1000,600);

   engine = Engine.create();
	 world = engine.world;

   ground = new Ground(500,590,1000,30);
   stand = new Ground(650,400,320,20);

   box1 = new Box(530,380,40,40);
   box2 = new Box(570,380,40,40);
   box3 = new Box(610,380,40,40);
   box4 = new Box(650,380,40,40);
   box5 = new Box(690,380,40,40);
   box6 = new Box(730,380,40,40);
   box7 = new Box(770,380,40,40);

   box8 = new Box(570,340,40,40);
   box9 = new Box(610,340,40,40);
   box10 = new Box(650,340,40,40);
   box11 = new Box(690,340,40,40);
   box12 = new Box(730,340,40,40);
   
   box13 = new Box(610,300,40,40);
   box14 = new Box(650,300,40,40);
   box15 = new Box(690,300,40,40);

   box16 = new Box(650,260,40,40);

   polygon = Bodies.circle(100,400,20);
   World.add(world,polygon);

   slingshot = new slingShot(this.polygon,{x:100,y:400});

   Engine.run(engine);
}

function draw(){
  background(95,147,227);

  ground.display();
  stand.display();

  fill(0,100,50);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill(100,200,100);
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill(200,300,150);
  box13.display();
  box14.display();
  box15.display();

  fill(200,400,200);
  box16.display();

  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,60,60);

  slingshot.display();

  fill("black");
  textSize(30);
  text("Drag the Hexagon and release it to launch it towards the Bolcks",50,100);
  text("Press Spacebar to reset the position of the polygon",120,140);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(polygon);
  }
}