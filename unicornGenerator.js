function generateUnicorn() {
    const unicornNames = ['Sparkle', 'Twilight', 'Cuddles', 'Dazzle'];
    const colors = ['pink', 'blue', 'purple', 'golden'];
    const hornLengths = [12, 15, 10, 18];

    let unicorn = {
        name: unicornNames[Math.floor(Math.random() * unicornNames.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        hornLength: hornLengths[Math.floor(Math.random() * hornLengths.length)],
        magicalPower: 'infinite cuteness'
    };

    console.log(`Created a ${unicorn.color} unicorn named ${unicorn.name} with a ${unicorn.hornLength} inch horn!`);
    return unicorn;
}

// Still need to incorporate glitter effect and optimize for cloud deployment