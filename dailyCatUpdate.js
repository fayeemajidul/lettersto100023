function catNap(duration) {
    if (duration > 15) {
        console.log('Zzz... I need more catnip!');
    } else {
        console.log('Just a brief recharge for world domination.');
    }
}

const felineTeam = ['Whiskers', 'Paws', 'Sassy', 'Nibbles'];
const catPlans = felineTeam.map(cat => {
    return `${cat} is plotting to steal the sunbeam from the living room.`;
});

catPlans.forEach(plan => console.log(plan)); // Spoiler alert: it involves a lot of napping.