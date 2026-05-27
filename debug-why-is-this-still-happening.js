function debugGhostBug() {
    let isHaunted = true;
    const spirits = ["NullPointerException", "InfiniteLoop", "SyntaxError"];
    
    while (isHaunted) {
        console.log("Summoning the debugger...");
        
        spirits.forEach(spirit => {
            if (spirit === "NullPointerException") {
                console.warn("Ghost detected: Null reference! Smite it!");
            }
        });

        isHaunted = false; // For now, let's just hope
    }
    
    console.log("Waking up from this nightmare...");
}

debugGhostBug();