function generateMockData(numEntries) {
    const mockData = [];
    for (let i = 0; i < numEntries; i++) {
        mockData.push({
            id: i,
            name: `Item ${i + 1}`,
            isMagical: Math.random() < 0.1 ? true : false, // Because magic happens sometimes
            unicorn: Math.random() < 0.05 ? '🦄' : null // Adding a touch of whimsy
        });
    }
    return mockData;
}

console.log(generateMockData(10)); // Look, mom, I'm generating data!