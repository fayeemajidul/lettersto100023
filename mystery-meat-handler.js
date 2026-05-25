function handleMysteryMeat(meatType) {
    const meatDictionary = {
        'beef': 'moo',
        'chicken': 'cluck',
        'tofu': 'why are you like this?'
    };

    if (meatDictionary[meatType]) {
        console.log(`This meat sounds like: ${meatDictionary[meatType]}`);
    } else {
        console.log("Sorry, we don't serve that meat... or do we?");
        mysteryMeat();
    }
}

function mysteryMeat() {
    const randomMeats = ['flying spaghetti monster', 'unicorn horn', 'internet memes'];
    const chosenMeat = randomMeats[Math.floor(Math.random() * randomMeats.length)];
    console.log(`Surprise! You've been served: ${chosenMeat}`);
}

handleMysteryMeat('chicken');
handleMysteryMeat('unknownMeat');