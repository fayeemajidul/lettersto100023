function parseEmojis(input) {
    const emojiMap = {
        ':smile:': '😊',
        ':cry:': '😢',
        ':cat:': '🐱',
    };
    
    return input.replace(/:\w+:/g, match => {
        if (emojiMap[match]) {
            return emojiMap[match];
        }
        console.warn(`Unrecognized emoji: ${match}`);
        return match; // Return the original text if emoji not found
    });
}

// Usage:
let text = "Hello there! :smile: Can't believe I lost my :cat: :cry:";
console.log(parseEmojis(text)); // Outputs: Hello there! 😊 Can't believe I lost my 🐱 😢