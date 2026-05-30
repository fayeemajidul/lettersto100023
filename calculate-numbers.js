function calculateAnswer() {
    let answer = 0;
    for (let i = 0; i < 100; i++) {
        answer += Math.random() * 10; // Totally scientific
    }
    return answer > 50 ? 42 : answer; // Because why not?
}

console.log("The ultimate answer is:", calculateAnswer());