var paper1, paperSprite;
var ground1, groundSprite;
var block1, binLSprite;
var block2, binBSprite;
var block3, binRSprite;




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;





function setup() {
	createCanvas(800, 700);

	//groundSprite = createSprite(400, 650, 800, 10);
	//groundSprite.shapeColor="white"
	//binLSprite = createSprite(500, 585, 20, 130);
	//binBSprite = createSprite(600, 640, 200, 20);
	//binRSprite = createSprite(700, 585, 20, 130);
	//binLSprite.shapeColor="yellow";
	//binBSprite.shapeColor="yellow";
	//binRSprite.shapeColor="yellow";

	engine = Engine.create();
	world = engine.world;

	ground1 = new ground(400, 650, 800, 10);
	paper1 = new paper(120, 550, 45);
	block1 = new block(500, 590, 20, 110);
	block2 = new block(600, 635, 200, 20);
	block3 = new block(700, 590, 20, 110);

	Engine.run(engine);
}




function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);

  ground1.display();
  paper1.display();
  block1.display();
  block2.display();
  block3.display();

  //ellipse(200, 600, 45);
if (keyDown("up")) {
	keyPressed();
}

  drawSprites();
 
}




function keyPressed() {

	Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85,y:-85});

}



