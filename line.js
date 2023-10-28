const line = document.getElementById("line");
// let isLineActive = false;
line.addEventListener("click", enableLineDrawing);

function enableLineDrawing(){
    options = {
        isFreehandDrawing: false,
        isRectangleDrawing: false,
        isCircleDrawing: false,
        isLineDrawing: true
    }
    onLineClick();
}

function onLineClick() {
    line.classList.toggle("active")
    let line = option.isLineDrawing.value;
    // isLineDrawing = !isLineDrawing ;
    line != line;
    if(line) {
        canvas.style.cursor = "crosshair";
        canvas.addEventListener("mousedown", onMouseDown_line); 
        canvas.addEventListener("mouseup", onMouseUp_line);
    }
    // else {
    //     canvas.style.cursor = "auto";
    //     // canvas.removeEventListener("mousedown", onMouseDown_line)
    // }
}