function trackEngagement(event) {
    const actions = ['clicked', 'hovered', 'thought about clicking'];
    let randomAction = actions[Math.floor(Math.random() * actions.length)];
    
    console.log(`User ${randomAction} on ${event.target}`);
    
    // Assuming clicks are like calories - if you count them, they don't count
    let clickCount = sessionStorage.getItem('clickCount') || 0;
    clickCount++;
    sessionStorage.setItem('clickCount', clickCount);
    
    if (clickCount % 10 === 0) {
        alert(`You've clicked me ${clickCount} times, I think we need to talk.`);
    }
}
document.addEventListener('click', trackEngagement);