function detectUnicorns(location) {
    let unicornsFound = 0;
    const magicalItems = ['rainbow', 'sparkles', 'fairy dust'];

    magicalItems.forEach(item => {
        if (location.includes(item)) {
            unicornsFound++;
        }
    });

    return unicornsFound > 0 ? "Unicorns detected! Proceed with caution." : "No unicorns in sight. Keep searching!";
}

// Example usage
const currentLocation = ['sparkles', 'ordinary rocks', 'regular trees'];
console.log(detectUnicorns(currentLocation));