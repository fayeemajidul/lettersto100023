// Fetching weather data from an imaginary weather API
async function getWeather(location) {
    console.log(`Fetching weather for ${location}...`);
    let weatherData = await fakeApiCall(location);
    let forecast = weatherData.sunny ? "sunny" : "cloudy with a 100% chance of networking";
    return `Today's forecast: ${forecast}. Note: Actual results may vary... but don't blame me, blame the API!`;
}

// Simulate a fake API call
function fakeApiCall(location) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ sunny: Math.random() > 0.5 });
        }, 1000);
    });
}

// Example usage
getWeather("CoffeeLand").then(console.log);