const line = document.getElementById("line");
let isLineActive = false;
line.addEventListener("click", onLineClick);

function onLineClick() {
    line.classList.toggle("active")
    isLineActive = !isLineActive ;
    if(isLineActive) {
        canvas.style.cursor = "crosshair";
        canvas.addEventListener("mousedown", onMouseDown_line); 
        canvas.addEventListener("mouseup", onMouseUp_line);
    }
    // else {
    //     canvas.style.cursor = "auto";
    //     // canvas.removeEventListener("mousedown", onMouseDown_line)
    // }
}