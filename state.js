const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
clear = document.querySelector(".clearCanvas");
const save = document.querySelector(".saveCanvas");
const c = canvas.getContext("2d");

const actionButtons = document.querySelectorAll("#option-1 > .btn");

function onActionClick(element) {
    const actionName = element.id;
    actionButtons.forEach(btn => {
        if (btn.classList.contains("active") && btn.id !== actionName) {
            btn.classList.remove("active");
        }
    });
    element.classList.toggle("active");

    actionButtons.forEach(btn => {
        const isActive = btn.classList.contains("active")
        actions[btn.id] = isActive;
    })
    console.log(actions);
}

const actions = {
    freehand: false,
    rectangle: false,
    eraser: false,
    circle: false,
    line: false,
}

const formState = {
    strokewidth: 2,
    strokestyle: "black"
}
const form = document.querySelector(".form");

function toggleMenu() {
    console.log("hidetoggle");
    form.classList.toggle("hide");
}

function onInput(element) {
    const newValue = element.value;
    if (element.name === "strokewidth")
        formState[element.name] = parseInt(newValue);
    else
        formState[element.name] = newValue;

    console.log(formState);
}

function onClear(){
    c.clearRect(0,0,canvas.width,canvas.height);
}
clearCanvas.addEventListener("click", onClear);