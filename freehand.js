const colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("change", ()=>{
    penColor = colorPicker.value;
    c.strokeStyle = penColor;
    console.log(penColor);
});

const pen = document.getElementById("pen");
// let isPenActive = false;
pen.addEventListener("click", enableFreeDrawing);

function enableFreeDrawing(){
    // options = {
    //     isFreehandDrawing: false,
    //     isRectangleDrawing: false,
    //     isCircleDrawing: false,
    //     isLineDrawing: false
    // }
    let temp = options.isFreehandDrawing;
    temp = !temp;
    onPenClick();
}

function onPenClick() {
    pen.classList.toggle("active")
    // isPenActive = !isPenActive ;
    // options.isFreehandDrawing != options.isFreehandDrawing;
    // let temp = options.isFreehandDrawing;
    // temp = !temp;
    if(temp){
        console.log("true");
        canvas.style.cursor = "crosshair";
        canvas.addEventListener("mousedown", onMouseDown_free); 
    }
    else {
        canvas.style.cursor = "auto";
        canvas.removeEventListener("mousedown", onMouseDown_free)
    }
}