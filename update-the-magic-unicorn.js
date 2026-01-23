function summonUnicorn() {
    const unicorn = {
        name: "Sparkle",
        color: "Rainbow",
        isMagical: true,
        sparkle: function() {
            console.log("✨ " + this.name + " leaves a trail of glitter! ✨");
        }
    };

    if (Math.random() > 0.5) {
        unicorn.sparkle();
    } else {
        console.log("No unicorn today. Try again tomorrow!");
    }
    
    return unicorn;
}

const myUnicorn = summonUnicorn();