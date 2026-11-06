function getThreeCitiesWeather() {
    const urls = [
        "https://wttr.in/Moscow?format=j1",
        "https://wttr.in/London?format=j1",
        "https://wttr.in/Paris?format=j1"
    ];

    const promises = urls.map(function(url) {
        return fetch(url).then(function(response) {
            return response.json();
        });
    });

    Promise.all(promises)
        .then(function(results) {
            
            const moscow = results[0].current_condition[0].temp_C;
            const london = results[1].current_condition[0].temp_C;
            const paris= results[2].current_condition[0].temp_C;

            console.log("Москва: " + moscow + "°C");
            console.log("Лондон: " + london + "°C");
            console.log("Париж: " + paris + "°C");
        })
        .catch(function(error) {
            console.log("Ошибка: " + error.message);
        });
}

getThreeCitiesWeather();
//Москва: 2°C
//practice2.js:22 Лондон: 8°C
//practice2.js:23 Париж: 7°C