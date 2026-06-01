const fakeAPI = (url) => {
    if (!url.startsWith('https://')) {
        throw new Error('Insecure URL detected. Try again, but like, more securely.');
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mockResponse = { data: "Here's some fake data!", timestamp: new Date() };
            Math.random() > 0.5 ? resolve(mockResponse) : reject('API says NOPE!');
        }, 2000);
    });
};

const handleRequest = async (endpoint) => {
    try {
        const response = await fakeAPI(endpoint);
        console.log('Response received:', response);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

handleRequest('https://fakeapi.com/data');