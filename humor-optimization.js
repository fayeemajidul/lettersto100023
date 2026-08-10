function makeDadJoke() {
    const jokes = [
        "I'm reading a book on anti-gravity. It's impossible to put down!",
        "Did you hear about the mathematician who’s afraid of negative numbers? He will stop at nothing to avoid them!"
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
}

function laughAtJoke() {
    const joke = makeDadJoke();
    console.log(`Here's a dad joke for you: ${joke}`);
}

setInterval(laughAtJoke, 5000); // Because who doesn't need a laugh every 5 seconds?