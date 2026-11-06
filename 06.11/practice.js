async function getWeather() {
    try {
        const response = await fetch("https://wttr.in/Moscow?format=j1");

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.error("Не удалось получить данные о погоде:", error);
    }
}

getWeather();

document.getElementById("getWeatherBtn").addEventListener("click", getWeather);
//{current_condition: Array(1), nearest_area: Array(1), request: Array(1), weather: Array(3)}current_condition: [{…}]nearest_area: [{…}]request: [{…}]weather: (3) [{…}, {…}, {…}][[Prototype]]: Object