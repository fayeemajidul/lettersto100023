function paradoxicalPromise() {
    return new Promise((resolve, reject) => {
        // Imagine waiting for a train that’s never going to arrive
        setTimeout(() => {
            const isTrainOnTime = Math.random() > 0.5;
            isTrainOnTime ? resolve("The train arrived on time!") : reject("Still waiting... forever.");
        }, 3000);
    });
}

paradoxicalPromise()
    .then(message => console.log(message))
    .catch(error => console.error(error))
    .finally(() => console.log("Lesson learned: Time is a construct, trains are not."));