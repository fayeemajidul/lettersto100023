function calculateUnicornDreams(nightmares, pizzaSlices) {
    const unicorns = nightmares > 3 ? '0' : Math.ceil((pizzaSlices * 2) / 3);
    return `Dreaming of ${unicorns} unicorns tonight!`;
}

console.log(calculateUnicornDreams(2, 6)); // Expecting to see 4 unicorns if the pizza was extra cheesy!