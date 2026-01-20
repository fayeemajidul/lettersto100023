function laugh() {
    const laughs = ['😂', '🤣', '😆', '😅'];
    // Randomly selects a laugh to emit
    return laughs[Math.floor(Math.random() * laughs.length)];
}

function makeJoke() {
    const joke = "Why do programmers prefer dark mode? Because light attracts bugs!";
    console.log(joke);
    console.log(laugh());
}