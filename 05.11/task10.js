const employee = {
    name: "Лилли",
    position: "Студент",
    department: "ВЕБ-21"
};

employee.showCard = function() {
    console.log(`Имя: ${this.name}, Должность: ${this.position}, Отдел: ${this.department}`);
};

console.log("Пункт 3: вызов как метод объекта");
employee.showCard();

console.log("Пункт 4: потеря контекста");
const fn = employee.showCard;
fn();

console.log("Пункт 5: bind()");
const boundFn = employee.showCard.bind(employee);
boundFn();

function showCardInCity(city) {
    console.log(`${this.name}, ${this.position}, отдел ${this.department}, город: ${city}`);
}

console.log("Пункт 6: call()");
showCardInCity.call(employee, "Екатеринбург");

console.log("Пункт 6: apply()");
showCardInCity.apply(employee, ["Екатеринбург"]);

const output = document.querySelector("#output");
const regularBtn = document.querySelector("#regularBtn");
const arrowBtn = document.querySelector("#arrowBtn");

regularBtn.addEventListener("click", function() {
    this.style.backgroundColor = "green";
    output.textContent = `Обычная: this = кнопка "${this.textContent}"`;
});

arrowBtn.addEventListener("click", (event) => {
    event.currentTarget.style.backgroundColor = "red";
    output.textContent = `Стрелочная: this = Window, кнопка через event.currentTarget = "${event.currentTarget.textContent}"`;
});
//Пункт 3: вызов как метод объекта
//task10.js:8 Имя: Лилли, Должность: Студент, Отдел: ВЕБ-21
//task10.js:14 
// Пункт 4: потеря контекста
//task10.js:8 Имя: , Должность: undefined, Отдел: undefined
//task10.js:18 
// Пункт 5: bind()
//task10.js:8 Имя: Лилли, Должность: Студент, Отдел: ВЕБ-21
//task10.js:26 
// Пункт 6: call()
//task10.js:23 Лилли, Студент, отдел ВЕБ-21, город: Екатеринбург
//task10.js:29 
// Пункт 6: apply()
//task10.js:23 Лилли, Студент, отдел ВЕБ-21, город: Екатеринбург