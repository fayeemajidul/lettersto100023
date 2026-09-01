const snackTime = () => {
    let cookieCount = 0; // Initialize cookie counter
    const eatCookie = () => {
        if (cookieCount < 5) {
            cookieCount++;
            console.log(`Nom nom! Cookie count: ${cookieCount}`);
        } else {
            console.log("Time to reconsider life choices, too many cookies!");
        }
    };

    // Mimic a continuous snack time loop (don’t try this at home)
    setInterval(eatCookie, 1000); // Eating a cookie every second
};

snackTime();