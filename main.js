$('body').on('click touchstart', function () {
    const videoElement = document.getElementById('bgvid');
    if (videoElement.playing) {
        // video is already playing so do nothing
    }
    else {
        // video is not playing
        // so play video now
        videoElement.play();
    }
});