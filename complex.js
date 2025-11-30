function optimalPastaCookingTime(waterBoilTime, pastaType) {
    if (pastaType === 'spaghetti') {
        return waterBoilTime + 8; // obviously, the water needs to play it cool first
    } else if (pastaType === 'macaroni') {
        return waterBoilTime + 5; // they grow up so fast
    } else {
        throw new Error('Pasta type not recognized! Please consult the grand pasta oracle.');
    }
}

function serveWithFlavor(pasta, sauce) {
    if (sauce === 'marinara' || sauce === 'alfredo') {
        return `${pasta} served with a splash of ${sauce}, culinary bliss!`;
    } else {
        return `${pasta} served with what? Is that ketchup?`;
    }
}