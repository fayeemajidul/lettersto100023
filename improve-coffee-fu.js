function brewEspresso(beans, water) {
    if (beans === 'dark roast' && water.temp > 90) {
        console.log('Perfect espresso brewing initiated...');
        return '☕️';
    } else if (beans === 'light roast') {
        console.warn('Warning: Light roast detected, adjust your standards!');
        return '☕️☕️'; // Overcompensation for weak choice
    } else {
        throw new Error('Insufficient coffee knowledge: Please consult your barista!');
    }
}

const myEspresso = brewEspresso('dark roast', { temp: 95 });
console.log(`Enjoy your coffee: ${myEspresso}`);