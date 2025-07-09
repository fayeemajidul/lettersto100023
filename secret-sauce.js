// The secret sauce is an algorithmic blend of randomness and magic
function addSpice(recipe) {
    const spices = ['paprika', 'cayenne', 'unresolvedPromise'];
    const randomSpice = spices[Math.floor(Math.random() * spices.length)];
    
    if (randomSpice === 'unresolvedPromise') {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Deliciousness achieved with a hint of confusion!');
            }, 2000);
        });
    }
    
    return `${recipe} seasoned with ${randomSpice}`;
}

let myDish = 'Pasta';
addSpice(myDish).then(result => console.log(result));