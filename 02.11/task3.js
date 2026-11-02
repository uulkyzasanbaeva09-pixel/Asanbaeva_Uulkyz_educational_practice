let first = document.querySelector("#main-title");
let parent = first.parentElement;

console.log("Родитель h1:", parent);                    
console.log("Дети родителя:", parent.children);         
console.log("Первый ребёнок body:", parent.firstElementChild); 
console.log("Последний ребёнок body:", parent.lastElementChild); 
console.log("Следующий сосед h1:", first.nextElementSibling);   

let descriptions = document.querySelectorAll(".description");
let third = descriptions[2]; 
console.log("Предыдущий сосед третьего абзаца:", third.previousElementSibling); 
console.log("Родитель абзацев:", third.parentElement); 

let ul = document.querySelector("ul");
console.log("Дети списка (li):", ul.children);
console.log("Первый li:", ul.firstElementChild);   
console.log("Последний li:", ul.lastElementChild);
console.log("Следующий сосед первого li:", ul.firstElementChild.nextElementSibling); 

let container = document.querySelector("#container");
console.log("Дети контейнера:", container.children);
console.log("Первый ребёнок контейнера:", container.firstElementChild); 