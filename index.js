const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");
let penColor = "black";

let options = {
    isFreehandDrawing: false,
    isRectangleDrawing: false,
    isCircleDrawing: false,
    isLineDrawing: false
}



// /* STRAIGHT-LINE DRAWING */
// let penColor = "black";
function onMouseDown_line(event){
    let {clientX, clientY} = event;
    console.log(clientX, clientY);
    c.beginPath();
    c.moveTo(clientX, clientY);
    c.strokeStyle = penColor;
    c.lineWidth = 2;
}

function onMouseUp_line(event){
    let {clientX, clientY} = event;
    console.log(clientX, clientY);
    c.lineTo(clientX, clientY);
    c.stroke();
    c.closePath();
}

// canvas.addEventListener("mousedown", onMouseDown);
// canvas.addEventListener("mouseup", onMouseUp);


/* FREEHAND DRAWING */
let lastPosition = null;
function onMouseDown_free(event){
    lastPosition = [event.clientX, event.clientY];
    c.lineWidth = 2;
    canvas.addEventListener("mousemove", onMouseMove_free);
    canvas.addEventListener("mouseup", onMouseUp_free);
}
function onMouseMove_free(event){
    let currentPosition = [event.clientX, event.clientY];
    c.beginPath();
    c.moveTo(...lastPosition);
    c.lineTo(...currentPosition);
    c.stroke();
    c.closePath();
    lastPosition = currentPosition;
}
function onMouseUp_free(event){
    canvas.removeEventListener("mousemove", onMouseMove_free);
}