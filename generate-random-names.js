function getRandomName() {
    const firstNames = ["Zyler", "Qira", "Bleep", "Snorp"];
    const lastNames = ["Waffleton", "Frood", "Noodlebop", "Snickerdoodle"];
    
    const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
    
    return `${randomFirst} ${randomLast}`;
}

console.log(getRandomName()); // Example output: Zyler Noodlebop