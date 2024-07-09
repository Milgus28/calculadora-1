// Ronald Roman Gonzalez CC: 1013612791

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            display.value = eval(display.value);
        } else if (btn.id === "C") {
            display.value = "";
        } else if (btn.id == "de") {
            display.value = display.value.slice(0, -1)
        } else {
            display.value += btn.id
        }
        })   
})