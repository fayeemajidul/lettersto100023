function handleDailyChaos(event) {
    if (event.type === 'unexpectedPizzaDelivery') {
        console.log("Redirecting to pizza storage module!");
        allocatePizzaToTeam(event.pizzaDetails);
    } else {
        console.log("All systems nominal, continuing with regular chaos handling...");
    }
}

function allocatePizzaToTeam(pizzaDetails) {
    const teamMembers = getTeamMembers();
    teamMembers.forEach(member => {
        console.log(`${member.name} gets a slice of ${pizzaDetails.type}!`);
    });
}

function getTeamMembers() {
    return [
        { name: "Alice" },
        { name: "Bob" },
        { name: "Charlie" },
    ];
}