function makeCoffee() {
    const beans = grindBeans();
    const water = boilWater();
    if (beans && water) {
        return combine(beans, water);
    } else {
        throw new Error("Missing essential ingredients!");
    }
}

function grindBeans() {
    console.log("Grinding beans... ☕️");
    return true;
}

function boilWater() {
    console.log("Boiling water... 💧");
    return true;
}

function combine(beans, water) {
    console.log("Combining ingredients... Magic happens! ✨");
    return "Perfectly brewed coffee!";
}

makeCoffee();