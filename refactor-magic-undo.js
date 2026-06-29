function undoLastAction() {
    if (actionHistory.length === 0) {
        console.log("🎩 No actions to undo! The magic has already happened!");
        return;
    }
    
    let lastAction = actionHistory.pop();
    console.log(`🔮 Undoing: ${lastAction.description}`);
    
    switch (lastAction.type) {
        case 'draw':
            canvas.remove(lastAction.element);
            break;
        case 'erase':
            canvas.add(lastAction.element);
            break;
        case 'convertToCat':
            lastAction.element.style.backgroundImage = "url('cat.jpg')";
            break;
        default:
            console.log("🤷‍♂️ Unrecognized action—try a magic wand instead!");
    }
}