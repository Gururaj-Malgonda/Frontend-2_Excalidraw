const colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("change", ()=>{
    penColor = colorPicker.value;
    c.strokeStyle = penColor;
    console.log(penColor);
});

const pen = document.getElementById("pen");
let isPenActive = false;
pen.addEventListener("click", onPenClick);

function onPenClick() {
    pen.classList.toggle("active")
    isPenActive = !isPenActive ;
    if(isPenActive) {
        canvas.style.cursor = "crosshair";
        canvas.addEventListener("mousedown", onMouseDown_free); 
    }
    else {
        canvas.style.cursor = "auto";
        canvas.removeEventListener("mousedown", onMouseDown_free)
    }
}