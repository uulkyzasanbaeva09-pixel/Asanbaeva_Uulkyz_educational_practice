async function getWeather() {
    try {
        const response = await fetch("https://wttr.in/Moscow?format=j1");

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();

        const current = data.current_condition[0];

        const temperature = current.temp_C;                           
        const humidity    = current.humidity;                        
        const weatherDesc = current.weatherDesc[0].value;            

        console.log(`Температура: ${temperature}°С`);
        console.log(`Влажность: ${humidity}%`);
        console.log(`Погода: ${weatherDesc}`);

    } catch (error) {
        console.error("Не удалось получить данные о погоде:", error);
    }
}

getWeather();
//Температура: 1°С
//practice.js:18 Влажность: 91%
//practice.js:19 Погода: Light snow
////{current_condition: Array(1), nearest_area: Array(1), request: Array(1), weather: Array(3)}current_condition: [{…}]nearest_area: [{…}]request: [{…}]weather: (3) [{…}, {…}, {…}][[Prototype]]: Object