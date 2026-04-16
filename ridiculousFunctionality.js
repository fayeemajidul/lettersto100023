function timeTravel(year) {
    if (year < 2023) {
        console.log("Warning: Time travel to the past may cause paradoxes!");
        return `You shouldn't have done that!`;
    } else if (year > 2023) {
        console.log("Welcome to the future! Where everything is powered by coffee.");
        return `Time travel successful!`;
    } else {
        return "You're already here!";
    }
}

let result = timeTravel(2050); 
console.log(result);