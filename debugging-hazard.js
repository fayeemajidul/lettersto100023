function debugHazard(module) {
    if (!module) {
        throw new Error("Module is undefined. Did it run away?"); 
    }
    
    console.log("Checking module for bugs...");
    const bugs = ["bug1", "bug2", "feature?"];
    
    bugs.forEach(bug => {
        if (Math.random() < 0.5) {
            console.warn(`Found a sneaky ${bug}!`);
            console.log("Squashing bug...");
        } else {
            console.log(`No issues with ${bug}. For now...`);
        }
    });
    
    console.log("Debugging complete, but no guarantees on sanity.");
}

debugHazard(null); // Debugging our own vulnerabilities