function calculatePieSlices(totalSlices, peopleSharing) {
    if (totalSlices === 0) {
        console.log("We can't eat nothing, right? Let's order another pie.");
        return;
    }
    
    let slicesPerPerson = Math.floor(totalSlices / peopleSharing);
    let leftoverSlices = totalSlices % peopleSharing;

    if (leftoverSlices > 0) {
        console.log(`Each person gets ${slicesPerPerson} slices, but we have ${leftoverSlices} slices left for the 'I'm still hungry' crew.`);
    } else {
        console.log(`Perfect! Each person gets exactly ${slicesPerPerson} slices. Nobody's fighting today.`);
    }

    return { slicesPerPerson, leftoverSlices };
}

// Example usage
calculatePieSlices(8, 3);