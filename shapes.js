const canvas = document.getElementById("shapes");
const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


//shape constructors
function drawRectangle(x, y) {
    var grad = ctx.createLinearGradient(x, y, x+200, y+200);
    grad.addColorStop(0, "red");
    grad.addColorStop(1, "orange");
    ctx.beginPath();    
    ctx.strokeStyle = grad;
    ctx.lineWidth = 10;
    ctx.rect(x, y, 200, 200);
    ctx.stroke()
}

function Rectangle() {
    this.destination = [400,400];
    this.currPos = [0,0];
    // this.destination = [Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)];
    this.currPos = [Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)];
    
    this.draw = function() {
        this.currPos = newPos(this.destination, this.currPos);
        var x = this.currPos[0];
        var y = this.currPos[1];
        var grad = ctx.createLinearGradient(x, y, x+30, y+30);
        grad.addColorStop(0, "blue");
        grad.addColorStop(1, "yellow");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 3;
        ctx.shadowOffsetX = 6;
        ctx.shadowOffsety = 6;
        ctx.shadowColor = "white";
        ctx,shadowBlur = 6;
        ctx.beginPath(); 
        ctx.rect(x, y, 25, 25);
        ctx.stroke();
    }
}

function HalfCircle() {
    this.destination = [400,400];
    this.currPos = [0,0];
    this.currPos = [Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)];
    
    this.draw = function() {
        this.currPos = newPos(this.destination, this.currPos);
        var x = this.currPos[0];
        var y = this.currPos[1];
        var grad = ctx.createLinearGradient(x, y, x, y+10);
        grad.addColorStop(0, "green");
        grad.addColorStop(1, "white");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 3;
        ctx.beginPath(); 
        ctx.arc(x, y, 20, 0, Math.PI, true)
        ctx.stroke();
    }
}

function Triangle() {
    this.destination = [400,400];
    this.currPos = [0,0];
    // this.destination = [Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)];
    this.currPos = [Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)];
    
    this.draw = function() {
        this.currPos = newPos(this.destination, this.currPos);
        var x = this.currPos[0];
        var y = this.currPos[1];
        var grad = ctx.createLinearGradient(x, y, x+30, y+30);
        grad.addColorStop(0, "red");
        grad.addColorStop(1, "orange");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 3;
        ctx.beginPath(); 
        ctx.moveTo(x, y);
        ctx.lineTo(x+25, y+15);
        ctx.lineTo(x+25, y-15);
        ctx.closePath();
        ctx.stroke();          
    }
}
//update position toward/away from destination
function newPos(destination, currPos) {
    x2 = destination[0];
    y2 = destination[1];
    x1 = currPos[0];
    y1 = currPos[1];

    var speedY = 1; // Math.ceil(Math.random() * 5);
    var speedX = 1; //Math.ceil(Math.random() * 5);
    let dy = Math.abs(y2 - y1);
    let dx = Math.abs(x2 - x1);
    // console.log(dy / dx);
    // var speedX = (dx < dy) ? Math.ceil(dy / dx) :  1;
    // speedY = (dx > dy) ? Math.ceil(dy / dx) : 1;

    var directionY = (dy < 5) ? -1 : 1;
    var directionX = (dx < 5) ? -1 : 1;
    

    if (x1 < x2) x1+= (speedX * directionX);
    else if (x1 > x2) x1-= (speedX * directionX);

    if (y1 < y2) y1+= (speedY * directionY);
    else if (y1 > y2) y1-= (speedY * directionY);

    return [x1, y1];        
}



var shapes = [new Triangle, new Rectangle, new HalfCircle, new Rectangle, new Triangle, new HalfCircle, new Triangle, new Rectangle];
// shapes = [new Triangle, new Rectangle];
//mouse Event
function updateDestination(e) {
    shapes.forEach(shape => {
        shape.destination = [e.pageX, e.pageY];
    });
    document.getElementById("pointerPosition").innerHTML = "New Destination: [" + e.pageX + ',' + e.pageY + "]";
}
canvas.addEventListener('mousemove', updateDestination)

function animate() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    shapes.forEach(shape => {
        shape.draw();
    });
    document.getElementById("triPosition").innerHTML = "triangle postion [" + shapes[0].currPos[0] + ',' + shapes[1].currPos[0] + "]";
    requestAnimationFrame(animate)
}
animate()