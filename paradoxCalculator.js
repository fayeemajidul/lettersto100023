function calculateParadox(schrodingerCat, observerEffect) {
    if (observerEffect) {
        console.log(`${schrodingerCat} is now definitely dead... or is it?`);
        return 'Reality Check: May cause existential crisis.';
    }
    console.log(`${schrodingerCat} is both alive and dead: please do not open the box.`);
    takeTeaBreak();
}

function takeTeaBreak() {
    console.log("Taking a break... because even quantum cats need a sip of Earl Grey!");
}

// Usage
console.log(calculateParadox("Schrodinger's cat", false));