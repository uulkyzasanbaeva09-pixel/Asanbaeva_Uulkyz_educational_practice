function getAllSettledWeather() {
    const urls = [
        "https://wttr.in/Moscow?format=j1",
        "https://wttr.in/London?format=j1",
        "https://неверный-сайт.ru/pogoda"
    ];

    const promises = urls.map(function(url) {
        return fetch(url)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error("Ошибка HTTP: " + response.status);
                }
                return response.json();
            });
    });

    Promise.allSettled(promises)
        .then(function(results) {
            results.forEach(function(result, index) {
                if (result.status === "fulfilled") {
                    const temp = result.value.current_condition[0].temp_C;
                    console.log("Город " + (index + 1) + ": температура " + temp + "°C");
                } else if (result.status === "rejected") {
                    console.log("Город " + (index + 1) + ": ошибка - " + result.reason.message);
                }
            });
        });
}

getAllSettledWeather();
//Город 1: температура 2°C
//practice3.js:23 Город 2: температура 8°C
//practice3.js:25 Город 3: ошибка - Failed to fetch