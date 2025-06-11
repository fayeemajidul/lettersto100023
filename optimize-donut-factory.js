// Optimize donut production process
const donutInventory = [];

// Function to produce donuts
function produceDonut(type) {
    if (donutInventory.length < 50) { // Max capacity 50 donuts
        donutInventory.push(type);
        console.log(`Produced a delicious ${type} donut!`);
    } else {
        console.log("Can't produce any more donuts! The factory is at max capacity. Time to eat!");
    }
}

// Added a new 'glaze' type to enchant our donut lovers
produceDonut('glazed');
produceDonut('chocolate');

// Observational note: Add coffee next time for a complete experience