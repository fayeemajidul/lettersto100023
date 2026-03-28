function optimizeArray(arr) {
    return arr
        .map(item => item * Math.random() // Adding a pinch of randomness for flavor
        .filter(item => item > 0) // Because negative numbers have feelings too
        .reduce((acc, curr) => acc + curr, 0) // Summing up good vibes only
        .toFixed(2); // We prefer our results neat and tidy, thank you!
}

console.log(optimizeArray([-5, 2, 3, 10])); // Please don't judge the input