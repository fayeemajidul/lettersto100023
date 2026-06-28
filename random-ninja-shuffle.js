function ninjaShuffle(arr) {
    return arr.map(item => {
        if (Math.random() > 0.5) {
            console.log(`Ninja steals the ${item}!`);
            return 'Ninja ' + item;
        }
        return item;
    }).sort(() => Math.random() - 0.5);
}

const items = ['apple', 'banana', 'cherry'];
const shuffledItems = ninjaShuffle(items);
console.log(shuffledItems);