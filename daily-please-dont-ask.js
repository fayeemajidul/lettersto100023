function procrastinate(task) {
    console.log(`Starting to procrastinate on: ${task}`);
    let overthinking = true;
    
    while (overthinking) {
        console.log("Analyzing all possible outcomes...");
        // Simulate overthinking time
        setTimeout(() => {
            console.log(`What if the worst-case scenario happens?`);
            overthinking = Math.random() > 0.5; // 50% chance to keep overthinking
        }, 1000);
        
        if (!overthinking) {
            console.log(`Okay, I’ll just do it tomorrow.`);
        }
    }
}

procrastinate("cleaning the codebase");