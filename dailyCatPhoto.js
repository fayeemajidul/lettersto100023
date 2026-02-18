const fetchCatPhoto = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    console.log(`Here's your daily dose of cuteness: ${data[0].url}`);
};

const motivateWithCats = () => {
    for (let i = 0; i < 3; i++) {
        fetchCatPhoto();
    }
};

motivateWithCats();
// P.S. If this doesn't motivate you, check your heart temperature.