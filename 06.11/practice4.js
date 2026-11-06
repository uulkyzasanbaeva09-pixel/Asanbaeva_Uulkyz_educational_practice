function fetchWithTimeout(url, ms) {
    return Promise.race([
        fetch(url).then(function(response) {
            return response.json();
        }),
        new Promise(function(resolve, reject) {
            setTimeout(function() {
                reject(new Error("Таймаут"));
            }, ms);
        })
    ]);
}

fetchWithTimeout("https://wttr.in/Moscow?format=j1", 100)
    .then(function(data) {
        console.log("Данные: " + data.current_condition[0].temp_C + "°C");
    })
    .catch(function(error) {
        console.log(error.message);
    });

fetchWithTimeout("https://wttr.in/Moscow?format=j1", 5000)
    .then(function(data) {
        console.log("Данные: " + data.current_condition[0].temp_C + "°C");
    })
    .catch(function(error) {
        console.log(error.message);
    });
    //Ошибка: Таймаут
    //practice4.js:25 Данные пришли: 2°C