const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var leftside;
var rightside;
var btn1;

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 1,
		friction: 0,
		density: 1.2,
	  };

	//Create the Bodies Here.
ball = Bodies.circle(100, 150, 30, ball_options);
World.add(world, ball);


//groundObj = new GroundObj(width/2, 490, width, 20);
fill("yellow");
leftside = new GroundObj(500, 430, 10, 100);
var options = {
	isStatic: true,
}

rightside = new GroundObj(600, 430, 10, 100);
var options = {
	isStatic: true,
}

groundObj = Bodies.rectangle(0, 490, width, 20, options);
World.add(world, groundObj);

btn1 = createImg("up.png");
btn1.position(50, 50);
btn1.size(50, 50);
btn1.mouseClicked(jump);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  leftside.display();
  rightside.display();
  fill("white");
  ellipse(ball.position.x, ball.position.y, 30);
  //groundObj.display();

  fill("yellow");
  rect(groundObj.position.x, groundObj.position.y, 2000, 50);

  Engine.update(engine);
  drawSprites();

}
 
//function keyPressed(){
	//if (keyCode === UP_ARROW){
		//Matter.Body.applyForce(ball, {x : 0, y : 0}, {x : -0.05, y : 0});
	//}
//}

function jump(){
	Matter.Body.applyForce(ball, {x : 0, y : 0}, {x : 0, y : 0.05});
  }