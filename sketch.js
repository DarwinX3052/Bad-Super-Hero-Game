


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var ball;
var rope;
var monster, mI;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25;



function preload(){
  mI = loadImage("evilboi.png");
}
function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  monster = createSprite(1000, 400, 50, 50);
  monster.addImage(mI);
  monster.scale = 0.5;

  ground = new Ground(400, 600, 1000, 25);

  ball = new Ball(150, 200, 60)

  b1 = new Block(800, 100, 70, 70);
  b2 = new Block(800, 100, 70, 70);
  b3 = new Block(800, 100, 70, 70);
  b4 = new Block(800, 100, 70, 70);
  b5 = new Block(800, 100, 70, 70);
  b6 = new Block(800, 100, 70, 70);

  b7 = new Block(700, 100, 70, 70);
  b8 = new Block(700, 100, 70, 70);
  b9 = new Block(700, 100, 70, 70);
  b10 = new Block(700, 100, 70, 70);
  b11 = new Block(700, 100, 70, 70);
  b12 = new Block(700, 100, 70, 70);

  b13 = new Block(600, 100, 70, 70);
  b14 = new Block(600, 100, 70, 70);
  b15 = new Block(600, 100, 70, 70);
  b16 = new Block(600, 100, 70, 70);
  b17 = new Block(600, 100, 70, 70);
  b18 = new Block(600, 100, 70, 70);
  b19 = new Block(600, 100, 70, 70);
  b20 = new Block(600, 100, 70, 70);

  b21 = new Block(500, 100, 70, 70);
  b22 = new Block(500, 100, 70, 70);
  b23 = new Block(500, 100, 70, 70);
  b24 = new Block(500, 100, 70, 70);
  b25 = new Block(500, 100, 70, 70);



  rope = new Rope(ball.body, {x: 300, y: 100});

}

function draw() {
  background("skyblue"); 
  fill("black")
  textSize(24)
  text("Destroy the Monster", 900, 50);
  Engine.update(engine);
  fill("green")
  ground.display();
  fill("blue")
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();

  rope.display();
  fill("orange")
  ball.display();

  drawSprites();


}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY})
}