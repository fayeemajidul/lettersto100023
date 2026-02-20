function ninjaStealthMode(inputArray) {
    return inputArray.filter(item => {
        // Ninja logic: disappear if it has any 'bug' in the name
        return !item.includes('bug') && Math.random() > 0.5; // Half the time, they just vanish!
    }).map(ninja => {
        console.log(`${ninja} has entered stealth mode! 🥷`);
        return `💨 ${ninja}`;
    });
}

const items = ['bug', 'feature', 'ninja', 'bugfix', 'stealth'];
const stealthyItems = ninjaStealthMode(items);
console.log(stealthyItems);