var moved;
var top_wall = 120;
var bottom_wall = 180;
var left_wallLE = 120;
var right_wallLE = 180;
var left_wallRE = 220;
var right_wallRE = 280;
function setup(){
	createCanvas(720, 480);
	left_eye = new Eye(150, 150);
	right_eye = new Eye(250, 150);
}

function draw() {
	
		
	fill("red");
	rect(100, 100, 200, 200);
	stroke("black")
	// line(left_wallLE, 0, left_wallLE, height)
	// line(left_wallRE, 0, left_wallRE, height)
	// line(right_wallLE, 0, right_wallLE, height)
	// line(right_wallRE, 0, right_wallRE, height)
	// line(0, top_wall, width, top_wall)
	// line(0, bottom_wall, width, bottom_wall)
	fill("black");
	left_eye.display();
	right_eye.display();

}

function mouseMoved() {
	console.log("hello");
	leX = constrain(mouseX, left_wallLE, right_wallLE)
	leY = constrain(mouseY, top_wall, bottom_wall)
	reX = constrain(mouseX, left_wallRE, right_wallRE)
	reY = constrain(mouseY, top_wall, bottom_wall)
	moved = true;
	left_eye = new Eye(reX, reY);
	right_eye = new Eye(leX, leY);
}

function Eye(xPosition, yPosition){
    this.x = xPosition;
    this.y = yPosition;
    this.diameter = 35;
    this.speed = 0;
    this.move = function(){
    	this.x = mouseX;
    	this.y =mouseY;
    }
    this.display = function(){
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}