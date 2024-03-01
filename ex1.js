let userInput = prompt("Введите значение:");
let numberValue = +userInput;
if (typeof numberValue === "number" && !isNaN(numberValue)) {
    if (numberValue % 2 === 0) {
        alert("Число " + numberValue + " является чётным числом")
    } else {
        alert("Число " + numberValue + " является нечётным числом")
    }
} else {
    alert("Упс, кажется, вы ошиблись. Введенное значение не является числом.")
}
