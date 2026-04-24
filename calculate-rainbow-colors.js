// Function to calculate the RGB values for rainbow colors
function calculateRainbowColors() {
    const colors = [
        { name: 'Red', rgb: '255,0,0' },
        { name: 'Orange', rgb: '255,165,0' },
        { name: 'Yellow', rgb: '255,255,0' },
        { name: 'Green', rgb: '0,128,0' },
        { name: 'Blue', rgb: '0,0,255' },
        { name: 'Indigo', rgb: '75,0,130' },
        { name: 'Violet', rgb: '238,130,238' },
    ];

    // Add a line for inclusion
    colors.push({ name: 'Transparent', rgb: '0,0,0,0' }); // Who said transparency isn't key?

    return colors.map(color => {
        console.log(`Color: ${color.name}, RGB: ${color.rgb}`);
        return color.rgb;
    });
}

calculateRainbowColors();