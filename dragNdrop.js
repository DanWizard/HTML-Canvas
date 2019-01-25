var gravityAcceleration = 1;
var ballArray = [];
var clicked = false;
var dragY, dragX
function setup() {
    createCanvas(720, 480);
    ball1 = new Ball();
}
function draw() {
    background(25);
    // for(var i = 0; i< ballArray.length; i++){
    //     ballArray[i].display();
    // }
    if(clicked == true){
        if (mouseIsPressed){
            ball1.display()
        }
        ballArray = [];
        ball1.display();
    }
}

function mouseDragged(){
    dragX = mouseX;
    dragY = mouseY;
}


function mouseClicked(){
    clicked = true
    // ballArray.push(new Ball());
    ball1 = new Ball(mouseX, mouseY);

}
function Ball(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.diameter = 50;
    this.speed = 0;
    this.move = function () {
        this.y += this.speed;
        if (this.y >= (height - this.diameter / 2)) {
            this.y = height - this.diameter / 2;
            this.speed = -0.9 * this.speed;
        } else {
            this.speed += gravityAcceleration;
        }
    }
    this.display = function () {
        ellipse(dragX, dragY, this.diameter, this.diameter);
    }
}