function calculateMeaningOfLife() {
    let deepThoughts = ["existence", "universe", "everything"];
    let answer = deepThoughts.reduce((acc, word) => acc + " " + word);
    
    return answer.includes("life") ? 42 : "Keep searching!";
}

console.log(calculateMeaningOfLife());