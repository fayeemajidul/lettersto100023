function makeLasagna(n) {
    let layers = [];
    for (let i = 1; i <= n; i++) {
        layers.push(`Layer ${i}: ${i % 2 === 0 ? 'Cheese' : 'No Cheese'}`);
    }
    return layers.join('\n');
}

const lasagna = makeLasagna(5);
console.log("Here's your lasagna:\n" + lasagna);