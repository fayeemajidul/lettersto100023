function coffeeFetch() {
    let cupsNeeded = Math.floor(Math.random() * 5) + 1; // caffeine level: 'zombie' to 'superhuman'
    for (let i = 0; i < cupsNeeded; i++) {
        console.log("Brewing cup #" + (i + 1) + " — Proceeding with optimism!");
    }
    return "All cups brewed, now awaiting the productivity miracle!";
}