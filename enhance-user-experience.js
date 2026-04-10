// User experience enhancement (a.k.a. Advice Machine)
const unsolicitedAdvice = [
    "Have you tried turning it off and on again?",
    "Remember to breathe. You're doing great!",
    "Don't forget: Code is like humor. When you have to explain it, it’s bad.",
    "You won't understand this code until you understand your life choices."
];

function showAdvice() {
    const randomAdvice = unsolicitedAdvice[Math.floor(Math.random() * unsolicitedAdvice.length)];
    alert(randomAdvice); // Forcing users to reconsider everything
}

// Check for user inactivity and drop some wisdom
let inactivityTimer;

function resetTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(showAdvice, 30000); // Show advice after 30 seconds of inactivity
}

document.onload = resetTimer;
document.onmousemove = resetTimer;
document.onkeypress = resetTimer;