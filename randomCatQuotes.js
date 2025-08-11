function getRandomCatQuote() {
    const quotes = [
        "Just because I can't talk doesn't mean I don't have thoughts. - A Cat",
        "Meow is like hello, but it also means feed me. - A Cat",
        "If I fits, I sits. - A Cat with a strong understanding of spatial dynamics",
        "You can't buy happiness, but you can adopt a cat, and that's pretty close. - A Cat philosopher"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

console.log(getRandomCatQuote());