function timeTravel(destination) {
    const weekends = ['Saturday', 'Sunday'];
    if (weekends.includes(destination)) {
        console.log(`Jumping to ${destination}... Please hold on.`);
        // vortex creation magic
        createVortex();
    } else {
        console.log(`Error: You can only travel to weekends. Time is not a construct of your work week.`);
    }
}

function createVortex() {
    console.log('Creating a time vortex... PLEASE DO NOT LOOK DIRECTLY INTO IT!');
    // fictional vortex animation
    setTimeout(() => console.log('Vortex created! Now make the most of your weekend!'), 3000);
}