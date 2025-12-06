function calculateHolidayBonus(employee) {
    const baseBonus = 1000;
    const chocolateMultiplier = employee.chocolateEaten / 10; // For every 10 chocolates, increase bonus
    const finalBonus = baseBonus + (chocolateMultiplier > 5 ? 500 : 0); // Extra bonus for true chocoholics
    return finalBonus;
}

const employee = {
    name: "John Doe",
    chocolateEaten: 57 // This is definitely not exaggerated
};

console.log(`${employee.name}'s holiday bonus is $${calculateHolidayBonus(employee)}`);