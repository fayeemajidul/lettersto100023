// Creating a magical unicorn generator
function generateUnicorn() {
    const colors = ['rainbow', 'sparkle', 'glitter'];
    const powers = ['flying', 'invisibility', 'time travel'];

    const color = colors[Math.floor(Math.random() * colors.length)];
    const power = powers[Math.floor(Math.random() * powers.length)];

    return `A ${color} unicorn with ${power} powers! 🦄✨`;
}

console.log(generateUnicorn()); // Output: A random unicorn for the morning boost