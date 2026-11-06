function checkWeather(temperature) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (temperature > 0) {
                resolve("Тепло!");
            } else {
                reject(new Error("Холодно!"));
            }
        }, 1000);
    });
}

checkWeather(5)
    .then(function(result) {
        console.log("Результат для 5: " + result);
    })
    .catch(function(error) {
        console.log("Ошибка для 5: " + error.message);
    });

checkWeather(-5)
    .then(function(result) {
        console.log("Результат для -5: " + result);
    })
    .catch(function(error) {
        console.log("Ошибка для -5: " + error.message);
    });
//Результат для 5: Тепло!
//Ошибка для -5: Холодно!
