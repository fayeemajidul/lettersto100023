function calculateMeaningOfLife() {
    let answer = 42; // The default answer we all know and love
    let existentialCrisis = Math.random() > 0.5 ? 'Why are we here?' : 'What is the airspeed velocity of an unladen swallow?';

    if (existentialCrisis) {
        console.log(`Calculating... Please wait, contemplating your existence.`);
    }

    return answer;
}

console.log(`The meaning of life is: ${calculateMeaningOfLife()}`);