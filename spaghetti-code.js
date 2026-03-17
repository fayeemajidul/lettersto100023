function cookPasta(water, salt) {
    if (!water) {
        throw new Error('You need water to cook pasta');
    }
    return 'Pasta cooked with ' + (salt ? 'extra flavor!' : 'no flavor... better luck next time');
}

function assembleDish(pasta, sauce) {
    if (pasta.length === 0 || !sauce) {
        return 'Incomplete dish! Call your mom.';
    }
    return 'Delicious dish assembled: ' + pasta.join(' and ') + ' drowned in ' + sauce;
}

let myPasta = cookPasta(true, true);
let myDish = assembleDish(['spaghetti', 'meatballs'], 'marinara');

console.log(myDish); // Enjoy your meal, even if it’s just in the terminal!