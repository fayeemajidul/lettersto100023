function detectSarcasm(input) {
    const sarcasmKeywords = ["sure", "great", "awesome", "totally", "of course"];
    const exclamations = input.match(/!+/g) || [];

    let sarcasmScore = 0;
    sarcasmKeywords.forEach(keyword => {
        if (input.toLowerCase().includes(keyword)) {
            sarcasmScore++;
        }
    });

    sarcasmScore += exclamations.length;

    return sarcasmScore > 2 ? "Definitely sarcastic." : "Probably sincere... or it's just Monday.";
}

// Example: console.log(detectSarcasm("Oh sure, that's just great!"));
// Output: Definitely sarcastic.