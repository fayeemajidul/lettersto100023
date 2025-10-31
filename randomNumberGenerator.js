function generateRandomNumber(min, max) {
    if (min >= max) {
        throw new Error("Min cannot be greater than max. Not even I can fix your math!");
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function provideLuck() {
    const number = generateRandomNumber(1, 100);
    const fortune = number % 2 === 0 ? "Today is your lucky day!" : "Maybe tomorrow will be better...";
    console.log(fortune);
}

provideLuck();