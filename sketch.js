
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine,world
var tree,mango,boy
function preload()
{
	boyImg = loadImage("boy.png")
	treeImg = loadImage("tree.png")
	stoneImg = loadImage("stone.png")
	mangoImg = loadImage("mango.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    boy = new Boy(mango.body,{x:200,y:200})
    ground = new Ground(600,400,100,20)
	tree = new Tree(500,200,20,20)
	stone = new Stone(500,180,20,20)
	mango1 = new mango(100,200,20,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boy.display()
  ground.display()
  tree.display()
  stone.display()
  mango.display()
  drawSprites();
 
}



