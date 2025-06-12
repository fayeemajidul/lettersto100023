function fetchWeather(location) {
    try {
        // Simulating a call to the weather API
        const response = callWeatherAPI(location);
        if (!response) throw new Error("Clouds blocked the API");
        return response.data;
    } catch (error) {
        console.error("Failed to fetch weather:", error.message);
        // Blame it on the clouds
        return "Looks like the sun is taking a day off in " + location;
    }
}

function callWeatherAPI(location) {
    // Pretend we are hitting a real API and return random data
    return Math.random() > 0.5 ? { data: "Sunny in " + location } : null;
}