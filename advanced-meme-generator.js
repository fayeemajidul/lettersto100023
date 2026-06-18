const fetchCatPhotos = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=5');
    return response.json();
};

const generateMeme = (catImageUrl, text) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        ctx.font = 'bold 30px Comic Sans MS';
        ctx.fillStyle = 'white';
        ctx.fillText(text, 10, canvas.height - 10);
    };

    img.src = catImageUrl;
    return canvas.toDataURL();
};

const createRandomMeme = async () => {
    const cats = await fetchCatPhotos();
    const randomCat = cats[Math.floor(Math.random() * cats.length)];
    const memeText = "When you realize it's Monday...";
    return generateMeme(randomCat.url, memeText);
};

createRandomMeme().then(meme => console.log('Meme generated:', meme));