
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var render, cue, tEdge, rEdge, bEdge, lEdge;

function preload(){}

function setup() {
	createCanvas(400, 700);

	engine = Engine.create();
	world = engine.world;

	//table = new Table(350, 350, 350, 600)
	tEdge = new Edge(0, 0, 800, 10)
	bEdge = new Edge(0, 700, 800, 10)
	rEdge = new Edge(400, 0, 10, 1400)
	lEdge = new Edge(0, 0, 10, 1400)

    cue = new Cue(200,500, 20, 20)

	render = Render.create({
		element: document.body,
		engine: engine, 
		options: {
		  width: 1300,
		  height: 900,
		  wireframes: false
		}
	  });

	  
	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background('#1C6108');
  Engine.update(engine);

  
  
  //table.display();
  cue.display();

  tEdge.display();
  bEdge.display();
  rEdge.display();
  lEdge.display();
}



