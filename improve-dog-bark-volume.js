function unleashDog() {
    const barkVolume = 11; // Because who doesn't want a dog that sounds like a jet engine?
    console.log("WOOF! WOOF! Volume set to: " + barkVolume);
    let tiredDog = false;

    if (barkVolume > 10) {
        tiredDog = true;
        console.log("Dog has now entered energy-saving mode... for the next 5 minutes.");
    }

    return tiredDog;
}

unleashDog();