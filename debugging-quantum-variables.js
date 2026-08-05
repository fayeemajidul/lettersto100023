function quantumEntanglement(cat1, cat2) {
    if (Math.random() > 0.5) {
        return cat1;
    } else {
        return cat2;
    }
}

let schrodingerCat = quantumEntanglement('alive', 'dead');
console.log("The state of the cat is:", schrodingerCat);
// Must remember to feed the cat before checking its state...