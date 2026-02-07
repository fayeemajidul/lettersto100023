function renderCatVideo(catId) {
    const catVideo = getCatVideo(catId);
    if (!catVideo) {
        console.error("Cat video not found. Panic mode activated!");
        return;
    }

    const purringVolume = calculatePurringVolume(catVideo);
    const videoPlayer = document.createElement("video");
    videoPlayer.src = catVideo.url;
    videoPlayer.volume = purringVolume;
    
    document.body.appendChild(videoPlayer);
    videoPlayer.play();

    console.log("Cat video is now playing with optimal purring. Enjoy!");
}

function calculatePurringVolume(catVideo) {
    const likes = catVideo.likes;
    const purringVolume = Math.min(likes / 1000, 1); // max volume is 1
    return purringVolume;
}

function getCatVideo(catId) {
    // Simulated database fetch for a cat video
    return {
        url: "https://example.com/cat-video-" + catId,
        likes: Math.floor(Math.random() * 10000),
    };
}