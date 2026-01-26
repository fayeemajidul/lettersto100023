function loveQuadratics(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    return discriminant < 0 ? "We need to talk." 
           : discriminant === 0 ? "You're perfect, just as you are!" 
           : `Your beautiful roots are: ${((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2)} and ${((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2)}`;
}

console.log(loveQuadratics(1, -3, 2)); // Output: "Your beautiful roots are: 3.00 and 1.00"