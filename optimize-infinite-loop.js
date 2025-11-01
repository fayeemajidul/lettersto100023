function neverEndingLoop() {
    let count = 0;
    while (true) {
        console.log("This will go on forever... or until I run out of memory."); 
        count++;
        if (count > 1000000) break; // Just kidding, let’s not run out of RAM!
    }
    return "Infinite Loop: 1, System Resources: 0";
}