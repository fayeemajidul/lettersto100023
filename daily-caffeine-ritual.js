function brewCoffee(type, strength) {
    if (type === 'espresso' && strength > 5) {
        return 'Caffeine overload imminent! Proceed with caution.';
    } else if (type === 'decaf') {
        return 'Why even bother? Just go for a nap instead.';
    } else {
        return `Your ${strength}x ${type} is brewing... Enjoy!`;
    }
}

const coffeeOrder = brewCoffee('espresso', 7);
console.log(coffeeOrder);

// Note: Actual performance monitoring of my daily caffeine intake is still WIP...