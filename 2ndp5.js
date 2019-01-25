var gravityAcceleration = 1;
var ball1;
var ballArray = [];
function setup(){
    createCanvas(720, 480);
    ball1 = new Ball(width/2, 0);
}
function draw() {
    background(25);
    ball1.move();
    ball1.display();
}
function Ball(xPosition, yPosition){
    this.x = xPosition;
    this.y = yPosition;
    this.diameter = 50;
    this.speed = 0;
    this.move = function(){
        this.y += this.speed;
        if (this.y >= (height-this.diameter/2)) {
            this.y = height - this.diameter / 2;
            this.speed = -0.9 * this.speed;
        }else{
            this.speed += gravityAcceleration;
        }
    }
    this.display = function(){
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}