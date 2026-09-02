function getSurprise() {
    const surprises = ['a puppy', 'a new feature', 'a random banana'];
    const randomIndex = Math.floor(Math.random() * surprises.length);
    return surprises[randomIndex];
}

function showSurprise() {
    alert(`Surprise! You got ${getSurprise()} 🍌`);
}

// Invoke the surprise function on page load
window.onload = showSurprise;