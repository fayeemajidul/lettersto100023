function getWeatherForecast(location) {
    const weatherConditions = ['sunny', 'cloudy', 'raining cats and dogs', 'tornado with a chance of meatballs'];
    const currentCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    return `The weather in ${location} is currently ${currentCondition}.`;
}

console.log(getWeatherForecast("Wonderland"));