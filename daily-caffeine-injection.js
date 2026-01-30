function handleCaffeineLevel(cups) {
    if (cups < 1) {
        return "Need more coffee!";
    } else if (cups > 5) {
        return "Warning: Heart may burst!";
    } else {
        return "Caffeinated and ready to code!";
    }
}

function codeWhileCaffeinated() {
    let coffeeCups = 0;
    const MAX_COFFEE = 5;

    while (coffeeCups < MAX_COFFEE) {
        coffeeCups++;
        console.log(handleCaffeineLevel(coffeeCups));
        // Simulating coding with coffee boosts
        // If we switch to decaf, the whole system crashes!
    }
}

codeWhileCaffeinated();