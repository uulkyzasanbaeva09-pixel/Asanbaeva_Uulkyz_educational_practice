const regularBtn = document.querySelector("#regular");
const arrowBtn = document.querySelector("#arrow");

regularBtn.addEventListener("click", function() {
    this.style.backgroundColor = "green";
    this.textContent = "Нажата!";
});

arrowBtn.addEventListener("click", (event) => {
    event.currentTarget.style.backgroundColor = "red";
    event.currentTarget.textContent = "Нажата!";
});
//Обычная функция создаёт свой собственный this, который ссылается на элемент, на котором зарегистрировано событие
//Стрелочная функция не имеет своего this — она наследует this из внешнего контекста