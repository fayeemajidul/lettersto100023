function makeMagicHappen() {
    let rabbitsInHat = 0;
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            rabbitsInHat++;
            console.log(`🐇 Rabbit #${rabbitsInHat} appeared!`);
        }, i * 1000);
    }
    if (rabbitsInHat > 0) {
        console.log("🎉 Look out! We have a magical party going on!");
    }
}

makeMagicHappen();