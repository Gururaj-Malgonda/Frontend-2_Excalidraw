const undo = document.querySelector("#undo");
const redo = document.querySelector("#redo");

function onUndo(){
    console.log("inside undo");
    if (historyIndex === 0) {
        c.clearRect(0, 0, canvas.width, canvas.height);
    }
    if(historyIndex) {
        // history.pop();
        historyIndex -- ;
        c.putImageData(history[historyIndex], 0, 0);
    }
}

function onRedo(){
    history.push();
    historyIndex ++ ;
    if(historyIndex <= history.length - 1) {
        console.log("inside redo");
        c.putImageData(history[historyIndex], 0, 0);
    }
}

undo.addEventListener("click",onUndo)
redo.addEventListener("click",onRedo)
