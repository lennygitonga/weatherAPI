const weatherAPIKey = "786f7be8e121492c8a7105453262602"
let weather = document.getElementById("weather")

async function getWeatherData(city = "Nairobi") {
    try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${city}`)
    const data = await response.json()
    console.log("weather Data", data);
    weatherInfo = data
    weather.innerHTML = `   
    <h2>Weather in ${weatherInfo.location.name}</h2>
    <p>Temperature: ${weatherInfo.current.temp_c}°C</p>
    <p>Condition: ${weatherInfo.current.condition.text}</p>
    <img src="${weatherInfo.current.condition.icon}" alt="Weather Icon">
    `
    } catch (error) {
        console.error("Error fetching weather data:", error)
    }
}

getWeatherData()