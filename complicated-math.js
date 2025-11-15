function solveUltimateQuestion() {
    let answer = 0;
    for (let i = 1; i <= 100; i++) {
        answer += Math.sqrt(i) * Math.log(i);
    }
    return answer % 42 === 0 ? "The answer is 42!" : "Keep trying, my friend.";
}

console.log(solveUltimateQuestion());