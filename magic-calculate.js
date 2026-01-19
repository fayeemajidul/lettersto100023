function calculateLife() {
    let answer = 42; // Because why not?
    let coffee = {
        beans: "arabica",
        strength: "strong",
        hasMilk: false,
    };

    if (coffee.hasMilk) {
        answer += 5; // Milk adds value, right?
    }
    
    console.log(`The answer to life is ${answer}, but first, coffee!`);
    return answer;
}

calculateLife();