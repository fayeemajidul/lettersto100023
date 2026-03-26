function caffeinateMe() {
    const coffeeCup = new Coffee();
    console.log("Brewing coffee...");
    return coffeeCup.enjoy();
}

class Coffee {
    enjoy() {
        return "☕️ Fueling up! Let's code like it's 1999!";
    }
}

// Warning: excessive usage may result in jittery function calls
setInterval(caffeinateMe, 3600000);