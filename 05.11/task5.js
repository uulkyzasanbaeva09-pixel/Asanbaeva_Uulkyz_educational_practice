let taskInput = document.querySelector("#taskInput");
let addButton = document.querySelector("#addButton");
let taskList = document.querySelector("#taskList");
let countSpan = document.querySelector("#count");

function updateCount() {
    let items = taskList.querySelectorAll("li");
    countSpan.textContent = items.length;
}

function addTask() {
    let text = taskInput.value.trim();
    
    if (text === "") {
        alert("Введите текст задачи!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = text;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    
    deleteBtn.addEventListener("click", function() {
        li.remove();
        updateCount();
    });

    li.append(" ", deleteBtn);

    taskList.append(li);

    taskInput.value = "";
    taskInput.focus(); 

    updateCount();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});