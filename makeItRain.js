function makeItRain(mood) {
    const emojiMap = {
        happy: '🌈☔️💰',
        sad: '😢☔️💔',
        confused: '🤔💦💫',
        excited: '🎉🌧️✨'
    };
    const rainAmount = Math.floor(Math.random() * 10) + 1;
    let rain = '';
    
    for (let i = 0; i < rainAmount; i++) {
        rain += emojiMap[mood] || '💧';
    }
    
    console.log(`It's raining ${rain} because you are feeling ${mood}`);
}

makeItRain('happy'); // Output: It's raining 🌈☔️💰 because you are feeling happy