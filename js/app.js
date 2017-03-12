var player = new MediaElement('player', {
       pluginPath: "js/vendor/build/mediaelement/",
       success: function (mediaElement) {
        setTimeout(function () {
            mediaElement.play();
        }, 400);
        mediaElement.addEventListener('playing', function () {
            mediaElement.pause();
            mediaElement.setCurrentTime(3);
            console.log("Current time = " + mediaElement.currentTime);
        }, false);
    }
   });
console.log('We are live');
