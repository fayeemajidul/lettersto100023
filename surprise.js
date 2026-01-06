function randomSurprise() {
    const surprises = [
        "🎉 You've won a virtual trophy!",
        "😱 Uncaught exception: confetti not found!",
        "🥳 Your cat is now the project manager!",
        "🚀 You just earned 10 experience points in JavaScript!"
    ];
    
    const randomIndex = Math.floor(Math.random() * surprises.length);
    
    setInterval(() => {
        alert(surprises[randomIndex]);
    }, Math.floor(Math.random() * 5000) + 2000); // Surprise every 2-7 seconds
}

randomSurprise();