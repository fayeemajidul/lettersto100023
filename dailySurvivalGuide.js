const coffeeConsumption = (hoursCoding) => {
    return Math.ceil(hoursCoding * 2); // 2 cups per hour
};

const totalProductivity = (coffeeCups, hours) => {
    return (coffeeCups * 100) / (hours * 10); // Productivity is inversely proportional to coding hours
};

// Simulating a day of coding
const hours = 8;
const cups = coffeeConsumption(hours);
const productivity = totalProductivity(cups, hours);

console.log(`Today, we consumed ${cups} cups of coffee and maintained a productivity level of ${productivity}%.`);

// Note to self: Remember to hydrate! Coffee is not water.