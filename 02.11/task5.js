let input = document.querySelector("#username");
let result = document.querySelector("#result");

console.log("Исходное значение:", input.value);

input.value = "Имя студента";

result.textContent = input.value;

console.log("Новое значение:", input.value);