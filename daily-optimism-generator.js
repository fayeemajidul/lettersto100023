function generateOptimism() {
    const levels = ['realistic', 'hopeful', 'overly ambitious', 'fighting unicorns'];
    const currentLevel = levels[Math.floor(Math.random() * levels.length)];
    
    switch (currentLevel) {
        case 'realistic':
            return "Let's manage expectations, shall we?";
        case 'hopeful':
            return "Perhaps we could try a *little* harder!";
        case 'overly ambitious':
            return "I can definitely code the entire web in a day!";
        case 'fighting unicorns':
            return "Just another Tuesday in developer land!";
        default:
            return "Error: Too much optimism, please reboot.";
    }
}

console.log(generateOptimism());