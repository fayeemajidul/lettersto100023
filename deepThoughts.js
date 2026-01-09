function deepThoughts() {
    const thoughts = [
        "Why did the developer go broke? Because he used up all his cache.",
        "To be or not to be, that is a null check.",
        "Is the glass half full? Only if you remember to close it!",
    ];
    
    for (let thought of thoughts) {
        console.log(thought);
        // Simulating deep consideration for 1 second
        setTimeout(() => console.log("Thinking..."), 1000);
    }
}
  
deepThoughts();