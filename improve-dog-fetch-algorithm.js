function fetchBall() {
    const balls = ['tennis', 'football', 'rubber', 'imaginary'];
    const chosenBall = balls[Math.floor(Math.random() * balls.length)];
  
    if (chosenBall === 'imaginary') {
        console.log("Woof! Fetching your dreams instead.");
        return "Nothing to fetch, just a philosophy.";
    } else {
        console.log(`Fetching the ${chosenBall} ball...`);
        return `Returned with the ${chosenBall} ball!`;
    }
}

// Performance enhancement for our furry friends
const fetchDogs = ['Fido', 'Rex', 'Baxter'];
fetchDogs.forEach(dog => {
    console.log(`${dog} is now fetching...`);
    fetchBall();
});