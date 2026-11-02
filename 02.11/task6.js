let message = document.querySelector("#message");
let hasTextClass = message.classList.contains("text");
console.log("Есть ли класс 'text'?", hasTextClass);
message.classlist.add("active");
console.log("Добавили класс 'active'");
message.classlist.remove("text");
console. log("Удалили класс 'text'");