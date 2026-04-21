function bakeCookie(ingredients) {
    if (!ingredients.includes('flour')) {
        throw new Error('Cannot bake a cookie without flour, silly!');
    }
    let cookie = { status: 'baking', burnt: false };

    setTimeout(() => {
        cookie.status = 'ready';
        cookie.burnt = Math.random() < 0.2; // 20% chance of burning
        console.log(`Cookie is ${cookie.burnt ? 'burnt!' : 'perfectly baked!'}`);
    }, 1000);

    return cookie;
}

// Just a helpful reminder
console.log("Remember: 'A cookie a day keeps the bugs away!'");