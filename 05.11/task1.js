let title = document.querySelector("#title");
let description = document.querySelector("#description");
let button = document.querySelector("#change");

button.addEventListener("click", function() {
    title.textContent = "Добро пожаловать!";
    description.textContent = "Мы изучаем JavaScript и DOM";
});