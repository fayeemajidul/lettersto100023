const coffeeBeans = ['Colombian', 'Arabica', 'Robusta'];
const brewCoffee = (beans) => {
    if (beans.length === 0) {
        return 'No coffee, no code!';
    }
    const brewed = beans.map(bean => `Brewed ${bean} coffee`);
    return brewed.join(', ');
};

const startCoding = () => {
    console.log(brewCoffee(coffeeBeans));
    console.log('Now let\'s write some bug-free code... or at least try!');
};

startCoding();