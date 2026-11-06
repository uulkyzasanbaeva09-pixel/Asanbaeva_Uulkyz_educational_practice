function getMoscowWeather() {
    fetch("https://wttr.in/Moscow?format=j1")
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Ошибка сети или сервера");
            }
            return response.json();
        })
        .then(function(data) {
            return data.current_condition[0];
        })
        .then(function(current) {
            return current.temp_C;
        })
        .then(function(temp) {
            console.log("Температура: " + temp + "°C");
        })
        .catch(function(error) {
            console.log("Ошибка: " + error.message);
        })
        .finally(function() {
            console.log("Запрос завершён");
        });
}

getMoscowWeather();
//Температура: 2°C
//practice1.js:22 Запрос завершён