function quantumSort(arr) {
    let sorted = [];
    for (let item of arr) {
        // Simulating quantum behavior - split and collapse states
        if (Math.random() > 0.5) {
            sorted.push(item);
        } else {
            sorted.unshift(item);
        }
    }
    return sorted.sort(); // Disclaimer: may or may not sort nicely in this universe
}

console.log(quantumSort(['apple', 'banana', 'grape']));