function calculateTheMeaningOfLife() {
    const universe = ['red', 'blue', 'green', '42', 'bad puns'];
    let answer = '';

    universe.forEach(color => {
        if (color === '42') {
            answer = 'After extensive research, I’ve concluded it’s definitely this one!';
        }
    });

    // Just in case, here's a fallback for the existential crisis
    if(!answer) {
        answer = 'Try asking a chatbot.';
    }

    return answer;
}

console.log(calculateTheMeaningOfLife());